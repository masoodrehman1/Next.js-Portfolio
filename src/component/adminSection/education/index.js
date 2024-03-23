"use client";
import FormControls from "../form-controls";
const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

export default function AdminEducationSection({
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
          onClick={() => handleSaveData("education")}
          className="border border-green-700 p-4 font-bold text-[16px ]"
        >
          Add info
        </button>
      </div>
    </div>
  );
}
