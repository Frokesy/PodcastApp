import React from 'react'

const InputField = ({ label, placeholder }) => {
  return (
    <div className="mt-4">
      <label className="font-semibold text-[15px]">{label}</label>
      <input type={label === "Password" ? 'password' : 'text'} placeholder={placeholder} className="bg-[#3f3e3e] mt-2 w-[100%] outline-none border-none px-3 py-2 rounded-md placeholder:text-[14px]" />
    </div>
  )
}

export default InputField
