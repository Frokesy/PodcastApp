import React from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";

const SocialAuth = ({ icon, active }) => {
    if (icon === 'Google') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                <FaGoogle size={18} />
                {active === "Login" ? (
                    <span className="text-[15px] cursor-pointer font-semibold">Sign in with Google</span>
                ) : (
                    <span className="text-[15px] cursor-pointer font-semibold">Sign up with Google</span>
                )}
            </div>
        )
    }

    if (icon === 'Apple') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                <FaApple size={18} />
                {active === "Login" ? (
                    <span className="text-[15px] cursor-pointer font-semibold">Sign in with Apple</span>
                ) : (
                    <span className="text-[15px] cursor-pointer font-semibold">Sign up with Apple</span>
                )}            
            </div>
        )
    }

    if (icon === 'Phone') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                {active === "Login" ? (
                    <span className="text-[15px] cursor-pointer font-semibold">Sign in with Phone number</span>
                ) : (
                    <span className="text-[15px] cursor-pointer font-semibold">Continue with Phone number</span>
                )}
            </div>
        )
    }
}

export default SocialAuth
