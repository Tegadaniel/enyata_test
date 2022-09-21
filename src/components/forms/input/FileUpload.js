import React from 'react'
import { useField } from 'formik';
import csvIcon from '../../../assets/images/csvIcon.svg'

export default function FileUpload(props) {

  const {label, type, onDrop, onClick, onChange, placeholder, className} = props
  const [field, meta] = useField(props);

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  const dropHandler = (e) => {
    e.preventDefault()
    onDrop && onDrop(e.dataTransfer)
  }

  const handleImageClick = (e) => {
    onClick && onClick()
  }

  const handleImageChange = (e) => {
    onChange && onChange(e.target.files)
  }

  return (
    <div id={props.name} className={className}> 
      <label className={`text-sm`}>{label}</label>
      <div className={`flex flex-col items-center justify-center gap-x-2 border-2 border-dashed py-4 px-10 mt-2 w-full border-[#979797] rounded`} id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}>
        <img src={csvIcon} height={50} width={50} className="mb-2" alt="upload file" />
        <p className='text-xs text-[#5C6F7F]'>
          <span className='text-[#304FFD] font-semibold relative cursor-pointer'>
            {placeholder}
            <input title='' multiple onClick={handleImageClick} onChange={handleImageChange} className='w-full h-full absolute z-[5] top-0 left-0 opacity-0 cursor-pointer' type='file' />
            <input type="hidden" name={props.name} value={meta.value} />
          </span> 
          <br />
          <span className='flex justify-center'>
            {"or drag and drop it here"}
          </span>
        </p>
      </div>
      <div>
          {meta.error ? (
          <div className="text-[12px] text-red-500">
            {meta.error}
          </div>
        ) : null}
      </div>
    </div>
  )
}
