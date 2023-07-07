import React from 'react'
import Meta from '../../components/Meta'
import InputField from '../../components/layouts/InputField'
import SocialAuth from '../../components/layouts/SocialAuth'

const Login = () => {
  return (
    <div className="flex lg:justify-center items-center lg:min-h-screen w-[100%]">
    <Meta title="Login || TBC" />
        <div className="lg:bg-[#000] lg:p-6 lg:mt-auto mt-[6vh] rounded-lg mx-auto shadow-2xl lg:min-w-[30vw] lg:max-w-[35vw] max-w-[90vw]">
        <h2 className="text-[24px] font-bold font-mono pt-4">Welcome back{"🤓"},</h2>
            <form className="flex flex-col">
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
                    <SocialAuth icon="Google" active="Login" />
                    <SocialAuth icon="Apple" active="Login" />
                    <SocialAuth icon="Phone" active="Login" />
                </div>
                <button className="w-[100%] bg-orange-500 rounded-full py-1 text-[18px] font-bold">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
