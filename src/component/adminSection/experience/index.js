"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];
export default function AdminExperienceSection({
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
          onClick={() => handleSaveData("experience")}
          className="border border-green-700 p-4 font-bold text-[16px ]"
        >
          Add info
        </button>
      </div>
    </div>
  );
}
