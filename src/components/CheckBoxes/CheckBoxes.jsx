import "./CheckBoxes.scss";

const CheckBoxes = ({ onChange, selected, options, label }) => {
  return (
    <div className="radio-buttons">
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
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="radio-buttons__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBoxes;