import React from 'react'

export default function Loading() {
  return (
    <div className="w-full flex flex-column justify-center items-center h-52">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
