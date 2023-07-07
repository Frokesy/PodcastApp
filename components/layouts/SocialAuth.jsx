import React from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";

const SocialAuth = ({ icon }) => {
    if (icon === 'Google') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                <FaGoogle size={18} />
                <span className="text-[15px] font-semibold">Sign in with Google</span>
            </div>
        )
    }

    if (icon === 'Apple') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                <FaApple size={18} />
                <span className="text-[15px] font-semibold">Sign in with Apple</span>
            </div>
        )
    }

    if (icon === 'Phone') {
        return (
            <div className="flex border border-[#ccc] py-2 space-x-4 justify-center items-center mb-6 rounded-full">
                <span className="text-[15px] font-semibold">Continue with phone number</span>
            </div>
        )
    }
}

export default SocialAuth
