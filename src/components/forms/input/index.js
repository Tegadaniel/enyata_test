import React from "react";
import "../../../App.css";
import { Container, InputField, Prefix, Suffix } from "./styles";
import { RightLabel, LeftLabel } from "../elements";

const Input = ({
  type,
  name,
  rightlabel,
  leftlabel,
  placeholder,
  prefixIcon,
  PrefixLabel,
  suffixIcon,
  suffixIconStyle,
  prefixSelect,
  suffixSelect,
  handleChange,
  value,
  defaultValue,
  readOnly,
  className,
  containerStyles,
  ...props
}) => {
  return (
    <Container style={containerStyles}>
      {PrefixLabel && (
        <Prefix>
          <p>RC-</p>
        </Prefix>
      )}
      {prefixIcon && (
        <Prefix>
          <img src={prefixIcon} alt="icon" />
        </Prefix>
      )}
      {prefixSelect && (
        <Prefix>
          <select {...props} onChange={handleChange}>
            <option>{prefixSelect}</option>
          </select>
        </Prefix>
      )}
      <InputField
        {...props}
        value={value}
        defaultValue={defaultValue}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
      />

      {suffixIcon && (
        <Suffix>
          <img className={suffixIconStyle} src={suffixIcon} alt="icon" />
        </Suffix>
      )}
      {suffixSelect && (
        <Suffix>
          <select {...props} onChange={handleChange}>
            <option>{suffixSelect}</option>
          </select>
        </Suffix>
      )}
      {rightlabel && <RightLabel>{rightlabel}</RightLabel>}
      {leftlabel && <LeftLabel>{leftlabel}</LeftLabel>}
    </Container>
  );
};

export default Input;
