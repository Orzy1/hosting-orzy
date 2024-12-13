"use client";
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import { LuLoader } from "react-icons/lu";

const GithubSignin = () => {

    const [processing, setProcessing] = useState(false);

    const handleSignin = () => {
        signIn("github", { callbackUrl: "/post-product" })
        setProcessing(true)
    }

    return (
        <main>
            <button
                className="w-full py-3 px-6 bg-gray-900 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-gray-800 transition-all"
                onClick={handleSignin}
                disabled={processing}
            >
                <span className='flex items-center justify-center space-x-3'>
                    {
                        processing ? <LuLoader className='text-2xl animate-spin text-white' /> : (
                            <div className='flex items-center justify-center space-x-3'>
                                <FaGithub className="text-2xl" />
                                <span>Sign in with GitHub</span>
                            </div>
                        )
                    }   
                </span>
            </button>
        </main>
    )
}

export default GithubSignin