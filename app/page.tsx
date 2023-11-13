import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
//----------------imports----------------------------------


// centering all sections on our page - every section file (example: intro.tsx, projects.tsx etc.) made has to be imported in here for a structure of the page!
export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
  </main>;
}
