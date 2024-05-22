export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => {
    return (
      <div className="mb-4" key={controlItem.name}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {controlItem.label}
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus: shadow-outline"
          type={controlItem.type}
          placeholder={controlItem.placeholder}
          name={controlItem.name}
          value={formData[controlItem.name]}
          onChange={(e) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              [controlItem.name]: e.target.value,
            }));
          }}
        />
      </div>
    );
  });
}
