"use server";
import React from 'react'
import ProductsGrid from '../components/ProductsGrid'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main className='min-h-dvh'>
        <ProductsGrid/>
    </main>
  )
}

export default page