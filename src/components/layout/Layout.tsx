import { Header } from "./Header"
import { Main } from "./Main"

export const Layout = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-row gap-4 max-lg:flex-col max-lg:gap-0">
      <Header />
      <Main />
    </div>
  )
}
