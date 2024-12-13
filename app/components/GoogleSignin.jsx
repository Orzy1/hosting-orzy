"use client";
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { LuLoader } from 'react-icons/lu';

const GoogleSignin = () => {
    const [processing, setProcessing] = useState(false);

    const handleSignin = () => {
        signIn("google", { callbackUrl: "/post-product" })
        setProcessing(true)
    }

    return (
        <main>
            <button
                className="w-full py-3 px-6 bg-red-600 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-red-700 transition-all"
                onClick={handleSignin}
            >
                <span className='flex items-center justify-center space-x-3'>
                    {
                        processing ? <LuLoader className='text-2xl animate-spin text-white' /> : (
                            <div className='flex items-center justify-center space-x-3'>
                                <FaGoogle className="text-2xl" />
                                <span>Sign in with Google</span>
                            </div>
                        )
                    }
                </span>
            </button>
        </main>
    )
}

export default GoogleSignin