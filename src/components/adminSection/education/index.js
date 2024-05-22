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
  data,
}) {
  console.log(data);
  return (
    <div className="w-full">
      <div
        className="bg-[#ffffff] shadow-md rounded px-8 pt-6
pb-8 mb-4"
      >
        <div className="mb-10">
          {data && data.length
            ? data.map((items) => (
                <div className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{items.degree}</p>
                  <p>{items.year}</p>
                  <p>{items.college}</p>
                </div>
              ))
            : null}
        </div>
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
