import Select from "react-select";
import { components } from "react-select";
import Avatar from "@mui/material/Avatar";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const { Option } = components;
export const IconOption = (props) => (
  <Option {...props}>
    <div className="flex items-center cursor-pointer">
      <Avatar
        alt={props.data.label}
        src={props.data.image}
        sx={{ width: 24, height: 24 }}
      />
      <div className="ml-2">{props.data.label}</div>
    </div>
  </Option>
);
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f2f5fa",
    minHeight: 50,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#071827" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const SearchableSelect = ({
  options,
  name,
  isUpdatingObj = false,
  value,
  setFieldValue,
  placeholder,
  isLoading,
  extraFunction,
  defaultValue,
  multipleOptions = false,
}) => {
  return (
    <Select
      components={animatedComponents}
      options={options}
      value={options ? options.find((option) => option?.value === value) : ""}
      onChange={(option) => {
        setFieldValue(name, isUpdatingObj ? option : option.value);
        extraFunction && extraFunction(option);
      }}
      styles={colourStyles}
      placeholder={!isLoading ? placeholder : ""}
      isLoading={isLoading}
      defaultInputValue={defaultValue}
      isMulti={multipleOptions}
    />
  );
};

export default SearchableSelect;
