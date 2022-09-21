import React from 'react'

const ErrorMessage = ({error, touched}) => {
  return (
    <div>
      {error && touched ? (
      <div className="text-[12px] text-red-500">
        {error}
      </div>
      ) : null}
    </div>
  )
}

export default ErrorMessage