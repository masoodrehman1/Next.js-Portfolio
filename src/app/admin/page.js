"use client";

import { useState } from "react";
import AdminAboutSection from "@/component/adminSection/about";
import AdminEducationSection from "@/component/adminSection/education";
import AdminExperienceSection from "@/component/adminSection/experience";
import FormControls from "@/component/adminSection/form-controls";
import AdminHomeSection from "@/component/adminSection/home";
import AdminProjectSection from "@/component/adminSection/projects";
import { addData, updatedData } from "@/services";

const initialHomeData = {
  heading: "",
  summary: "",
};
const initialAboutData = {
  aboutme: "",
  noofexperience: "",
  noofprojects: "",
};
const initialExperienceData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};
const initialEducationData = {
  degree: "",
  year: "",
  college: "",
};
const initialProjectData = {
  name: "",
  technologies: "",
  website: "",
  github: "",
};
export default function AdminSection() {
  const [currentTab, setCurrentTab] = useState("home");
  const [homeSectionData, setHomeSectionData] = useState(initialHomeData);
  const [aboutSectionData, setAboutSectionData] = useState(initialAboutData);
  const [experienceSectionData, setExperienceSectionData] = useState(
    initialExperienceData
  );
  const [update, setUpdate] = useState();
  const [educationSectionData, setEducationSectionData] =
    useState(initialEducationData);
  const [projectSectionData, setProjectSectionData] =
    useState(initialProjectData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeSection
          formData={homeSectionData}
          setFormData={setHomeSectionData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutSection
          formData={aboutSectionData}
          setFormData={setAboutSectionData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceSection
          formData={experienceSectionData}
          setFormData={setExperienceSectionData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationSection
          formData={educationSectionData}
          setFormData={setEducationSectionData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "projects",
      label: "Projects",
      component: (
        <AdminProjectSection
          formData={projectSectionData}
          setFormData={setProjectSectionData}
          handleSaveData={handleSaveData}
        />
      ),
    },
  ];
  async function handleSaveData() {
    const dataMap = {
      home: homeSectionData,
      about: aboutSectionData,
      experience: experienceSectionData,
      education: educationSectionData,
      project: projectSectionData,
    };
    const response = await addData(currentTab, dataMap[currentTab]);
    console.log(response, "response");
    if (response.success) {
      resetFormData();
    }
  }
  function resetFormData() {
    setHomeSectionData(initialHomeData);
    setAboutSectionData(initialAboutData);
    setEducationSectionData(initialEducationData);
    setExperienceSectionData(initialExperienceData);
    setProjectSectionData(initialProjectData);
  }
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tabelist">
        {menuItem.map((items) => (
          <button
            key={items.id}
            type="button"
            className="p-4 font-bold text-black text-xl"
            onClick={() => {
              setCurrentTab(items.id);
              resetFormData();
            }}
          >
            {items.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItem.map((items) => items.id === currentTab && items.component)}
      </div>
    </div>
  );
}
