import React from 'react'
import Meta from '../../components/Meta'
import InputField from '../../components/layouts/InputField'
import SocialAuth from '../../components/layouts/SocialAuth'

const Signup = () => {
  return (
      <div className="flex justify-center items-center min-h-screen w-[100%]">
        <Meta title="Signup || TBC" />
        <div className="bg-[#000] p-6 rounded-lg shadow-2xl min-w-[30vw] max-w-[35vw]">
            <h2 className="text-[24px] font-bold font-mono pt-4">Welcome aboard human{"😎"},</h2>
            <form className="flex flex-col">
                <InputField
                 label="Username"
                 placeholder="username"
                />
                <InputField
                 label="Email or username"
                 placeholder="Email or username"
                />
                <InputField
                 label="Password"
                 placeholder="password"
                />
                <div className="border-b-2 border-[#747171] my-8"></div>
                <div className="socialAuth">
                    <SocialAuth icon="Google" active="Signup" />
                    <SocialAuth icon="Apple" active="Signup" />
                    <SocialAuth icon="Phone" active="Signup" />
                </div>
                <button className="w-[100%] bg-orange-500 rounded-full py-1 text-[18px] font-bold">Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
