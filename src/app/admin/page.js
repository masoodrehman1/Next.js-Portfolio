"use client";
import AdminAboutSection from "@/components/adminSection/about";
import AdminEducationSection from "@/components/adminSection/education";
import AdminExperienceSection from "@/components/adminSection/experience";
import FormControls from "@/components/adminSection/form-controls";
import AdminHomeSection from "@/components/adminSection/home";
import Login from "@/components/adminSection/login";
import AdminProjectSection from "@/components/adminSection/projects";
import { addData, getData, login, updatedData } from "@/services";
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
const loginInilials = {
  username: "",
  password: "",
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
  const [authUser, setAuthUser] = useState(false);
  const [userLoginData, setUserLoginData] = useState(loginInilials);

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
          data={allData?.experience}
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
          data={allData?.education}
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
          data={allData?.projects}
        />
      ),
    },
  ];
  async function extractAllData() {
    const response = await getData(currentTab);

    if (
      currentTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeSectionData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutSectionData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentTab]: response && response.data,
      });
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

    const response = update
      ? await updatedData(currentTab, dataMap[currentTab])
      : await addData(currentTab, dataMap[currentTab]);

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
  useEffect(
    () => setAuthUser(JSON.parse(sessionStorage.getItem("authUser"))),
    []
  );
  async function handleLogin() {
    const res = await login(userLoginData);
    console.log(res, "login");
    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }
  if (!authUser)
    return (
      <Login
        formData={userLoginData}
        handleLogin={handleLogin}
        setFormData={setUserLoginData}
      />
    );

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
              setUpdate(false);
            }}
          >
            {items.label}
          </button>
        ))}
        <button
          className="p-4 font-bold text-black text-xl"
          onClick={() => {
            setAuthUser(false), sessionStorage.removeItem("authUser");
          }}
        >
          Log Out
        </button>
      </nav>
      <div className="mt-10 p-10">
        {menuItem.map((items) => items.id === currentTab && items.component)}
      </div>
    </div>
  );
}
