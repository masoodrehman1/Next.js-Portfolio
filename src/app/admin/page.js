"use client";
import AdminAboutSection from "@/component/adminSection/about";
import AdminEducationSection from "@/component/adminSection/education";
import AdminExperienceSection from "@/component/adminSection/experience";
import FormControls from "@/component/adminSection/form-controls";
import AdminHomeSection from "@/component/adminSection/home";
import AdminProjectSection from "@/component/adminSection/projects";
import { addData, getData, updatedData } from "@/services";
import { useEffect, useState } from "react";

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
  const [update, setUpdate] = useState(false);
  const [educationSectionData, setEducationSectionData] =
    useState(initialEducationData);
  const [projectSectionData, setProjectSectionData] =
    useState(initialProjectData);
  const [allData, setAllData] = useState({});

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
  async function extractAllData() {
    const data = await getData(currentTab);

    if (data?.success && data.data.length > 0) {
      const homedata = data.data[0];
      setAllData({
        ...allData,
        [currentTab]: homedata,
      });
      switch (currentTab) {
        case "home":
          setHomeSectionData(homedata);
          break;
        case "about":
          setAboutSectionData(homedata);
          break;
        case "experience":
          setExperienceSectionData(homedata);
          break;
        case "education":
          setEducationSectionData(homedata);
          break;
        case "projects":
          setProjectSectionData(homedata);
          break;
        default:
          break;
      }
    }
  }
  async function handleSaveData() {
    const dataMap = {
      home: homeSectionData,
      about: aboutSectionData,
      experience: experienceSectionData,
      education: educationSectionData,
      projects: projectSectionData,
    };

    const response = await addData(currentTab, dataMap[currentTab]);

    if (response.success) {
      resetFormData();
      extractAllData();
    }
  }
  useEffect(() => {
    extractAllData();
  }, [currentTab]);
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
