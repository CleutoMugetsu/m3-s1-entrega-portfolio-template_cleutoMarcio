import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AboutMeSection } from "./components/sections/AboutMeSection"
import { BannerSection } from "./components/sections/BannerSection"
import { ProjectSection } from "./components/sections/projectsection/ProjectList"
import { TechList } from "./components/sections/techsection/TechList"
import "./styles/index.css"

function App() {

  return (
    <>
    <Header />
		<main>
			<BannerSection />
			<AboutMeSection />
			<TechList />
			<ProjectSection />
		</main>
		<Footer />
    </>
  )
}

export default App
