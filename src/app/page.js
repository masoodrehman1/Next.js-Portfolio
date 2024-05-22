import ClientAboutSection from "@/components/clientSection/about";
import ClientContactSection from "@/components/clientSection/contact";
import ClientExperienceAndEducationSection from "@/components/clientSection/experience";
import ClientHomeSection from "@/components/clientSection/home";
import ClientProjectsSection from "@/components/clientSection/projects";

async function extractAllData(currentSection) {
  const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllData("home");
  const aboutSectionData = await extractAllData("about");
  const experienceSectionData = await extractAllData("experience");
  const educationSectionData = await extractAllData("education");
  const projectsSectionData = await extractAllData("projects");

  return (
    <div>
      <ClientHomeSection homeData={homeSectionData} />
      <ClientAboutSection AboutData={aboutSectionData} />
      <ClientExperienceAndEducationSection
        experienceData={experienceSectionData}
        educationData={educationSectionData}
      />
      <ClientProjectsSection projectData={projectsSectionData} />
      <ClientContactSection />
    </div>
  );
}
