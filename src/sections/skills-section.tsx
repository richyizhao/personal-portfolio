import { useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { sectionsData } from "@/data/data"

export const SkillsSection = () => {
  const [currentCategory, setCurrentCategory] = useState(
    sectionsData.skills[0]?.category ?? ""
  )
  const activeSkillGroup =
    sectionsData.skills.find((group) => group.category === currentCategory) ??
    sectionsData.skills[0]

  return (
    <section
      id="skills"
      className="my-12 flex min-h-[calc(100dvh-12rem)] flex-col lg:my-24"
    >
      <h2 className="mb-6 block text-3xl font-bold lg:hidden">Skills</h2>

      <div className="flex flex-1 flex-col gap-y-8 max-lg:pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {sectionsData.skills.map((group) => (
            <Button
              key={group.category}
              onClick={() => setCurrentCategory(group.category)}
              variant="secondary"
              className="h-10 flex-1"
            >
              {group.category}
            </Button>
          ))}
        </div>

        <div className="flex-1">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="grid max-w-4xl flex-1 grid-cols-3 gap-4">
              {activeSkillGroup?.techstackItems.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: skillIndex * 0.05,
                    duration: 0.25,
                  }}
                  className="flex h-26 w-full flex-col items-center justify-center rounded-lg border border-black/5 bg-zinc-50 p-4 transition-colors hover:bg-muted dark:border-none dark:bg-zinc-900 dark:hover:bg-zinc-800"
                >
                  <span className="mb-2 flex flex-1 items-center justify-center text-center text-xs leading-tight font-medium text-zinc-600 dark:text-zinc-400">
                    {skill.name}
                  </span>

                  <Icon
                    icon={skill.icon}
                    className={`mb-2 shrink-0 text-4xl ${skill.className ?? ""}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-end text-sm text-muted-foreground">
        Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </section>
  )
}
