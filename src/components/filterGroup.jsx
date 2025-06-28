const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-4">
      <h4 className="text-dark-gray-2 text-[14px] mb-2 font-medium">{title}</h4>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type={inputType}
              id={`${title}-${option.value || option.text}`}
              name={title}
              value={option.value || option.text}
              className="w-[18px] h-[18px] mr-2 accent-primary"
              aria-labelledby={`${title}-${option.value || option.text}-label`}
            />
            <label 
              id={`${title}-${option.value || option.text}-label`}
              htmlFor={`${title}-${option.value || option.text}`} 
              className="text-dark-gray-2 text-sm"
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;