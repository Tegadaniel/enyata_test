import React, { useState } from 'react'
import { useField } from 'formik';
import ErrorMessage from '../ErrorMessage';
import Input from './index'
import Select, { components } from "react-select"
import countries from '../../../helper/countries';
import {AsYouType} from "libphonenumber-js"

const {Option, SingleValue} = components

const PhoneNumberInput = ({formikProps, selectProps}) => {

  const [field, meta, helpers] = useField(formikProps);

  const defaultNumber = field.value
  const asYouType = new AsYouType()
  asYouType.input(defaultNumber)

  const initialCode = asYouType.getCallingCode() ? "+"+asYouType.getCallingCode() :"+234"
  const initialInputValue = asYouType?.getNumber()?.nationalNumber || ""

  const [code, setCode] = useState(initialCode)
  const [inputValue, setInputValue] = useState(initialInputValue)

  const options = countries.map(country => (
    {label: country["name"], value: country["dial_code"], flag: country["code"].toLowerCase()}
  ))

  return (
    <div>
      <div className='flex border rounded'>
        <Select
          options={options}
          components={{Option: OptionWithFlag, SingleValue: ValueWithFlag}}
          // value={() => {}}
          onChange={(data) => {
            setCode(data.value)
          }}
          styles={colourStyles}
          defaultValue={options[160]}
          {...selectProps}
        />
        <Input 
          {...field} 
          {...formikProps} 
          handleChange={(e) => {
            const valueArr = e.target.value.split(code+" ")
            const inputValue = valueArr.length > 1 ? valueArr[valueArr.length - 1] : ""
            setInputValue(inputValue)
            helpers.setValue(code+inputValue)
          }} 
          value={code + " " + inputValue} 
          containerStyles={{
            borderRadius: "0px"
          }} 
        />
      </div>
      <ErrorMessage error={meta.error} touched={meta.touched} />
    </div>
  )
}

const OptionWithFlag = (props) => {

  return (
    <Option {...props} >
      <div className='flex gap-x-2 items-center max-w-[250px]'>
        <img src={`https://flagcdn.com/${props.data.flag}.svg`} className="w-10 h-auto" alt={props.data.label} />
        <p className='text-xs'>{props.data.label} {`(${props.data.value})`}</p> 
      </div>
    </Option>
  )
}

const ValueWithFlag = (props) => {

  return (
    <SingleValue {...props}>
      {/* <div className='flex flex-col gap-y-2 items-center'> */}
        <img src={`https://flagcdn.com/${props.data.flag}.svg`} className="w-10 h-auto" alt={props.data.label} />
      {/* </div> */}
    </SingleValue>
  )
}

const colourStyles = {
  control: (styles) => ({ 
    ...styles,
    height: "46px", // same height as the Input component
    width: "90px",
    borderRadius: "0px",
    backgroundColor: "#f2f5fa"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#3B48FB" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px"
  }),
  menu: (styles) => ({
    ...styles,
    width: "max-content",
    // maxWidth: "150px"

  })
};

export default PhoneNumberInput