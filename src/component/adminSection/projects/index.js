"use client";
import FormControls from "../form-controls";
const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
];

export default function AdminProjectSection({
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
          onClick={() => handleSaveData("project")}
          className="border border-green-700 p-4 font-bold text-[16px ]"
        >
          Add info
        </button>
      </div>
    </div>
  );
}
