"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofexperience",
    placeholder: "No. Of Experience",
    type: "text",
    label: "No. Of Experience",
  },
  {
    name: "noofprojects",
    placeholder: "No Of Projects",
    type: "text",
    label: "No Of Experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];
export default function AdminAboutSection({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full">
      <div
        className="bg-[#ffffff] shadow-md rounded px-8 pt-6
pb-8 mb-4"
      >
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("about")}
          className="border border-green-700 p-4 font-bold text-[16px ]"
        >
          Add info
        </button>
      </div>
    </div>
  );
}
