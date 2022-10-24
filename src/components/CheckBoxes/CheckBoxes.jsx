import "./CheckBoxes.scss";

const CheckBoxes = ({ onChange, checked, options, label }) => {
  return (
    <div className="checkboxes">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"checkbox" + option + index}>
            <input
              type="checkbox"
              name="beer"
              value={optionLower}
              checked={checked[index]}
              onChange={() => onChange(index)}
            />
            <label className="checkboxes__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxes;