import { useState } from "react"
import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { Footer } from "../components/layout/Footer"
import { Button } from "../components/ui/Button"
import { SectionTitle } from "../components/ui/SectionTitle"
import { skillsData } from "../data/data"

export const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(skillsData[0]?.category ?? "")
  const activeSkillGroup =
    skillsData.find((group) => group.category === currentCategory) ?? skillsData[0]

  return (
    <section id="skills" className="flex min-h-screen flex-col py-24 max-lg:pb-0">
      <SectionTitle title="SKILLS" />

      <div className="flex flex-1 flex-col gap-y-8 max-lg:pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((group) => (
            <Button
              key={group.category}
              label={group.category}
              onClick={() => setCurrentCategory(group.category)}
              className="h-10 flex-1"
            />
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
              {activeSkillGroup?.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: skillIndex * 0.05,
                    duration: 0.25,
                  }}
                  className="flex h-26 w-full flex-col items-center justify-center rounded-lg border border-black/5 bg-zinc-50 p-4 transition-colors hover:bg-zinc-200 dark:border-white/5 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                >
                  <span className="mb-2 flex flex-1 items-center justify-center text-center text-xs leading-tight font-medium text-zinc-700 dark:text-zinc-300">
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

      <Footer />
    </section>
  )
}
