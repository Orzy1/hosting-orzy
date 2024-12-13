"use server";
import { auth, signOut } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    const session = await auth();

    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main className='h-dvh'>
            <div className='shadow-lg rounded-lg max-w-2xl p-5 m-2 mx-auto flex flex-col gap-5'>
                <Avatar>
                    <AvatarImage className="w-60 h-60 rounded-full" src={session?.user?.image} />
                    <AvatarFallback>{session?.user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <h1 className='font-semibold text-4xl text-gray-800'>
                    Name: {session?.user?.name}
                </h1>
                <p className='text-3xl text-gray-800'>
                    Mail: {session?.user?.email}
                </p>

                <form
                    action={async () => {
                        "use server"
                        await signOut()
                        redirect("/auth/signin")
                    }}
                >
                    <button type="submit" className='bg-gray-800  text-white font-semibold rounded-md px-7 py-2 text-lg upprecase'>Log Out</button>
                </form>
            </div>
        </main>
    )
}

export default page