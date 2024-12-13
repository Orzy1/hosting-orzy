"use server";
import { auth } from '@/auth';
import { db } from '@/lib/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function fetchProduct(id) {
  const productDoc = await getDoc(doc(db, "products", id))

  if (productDoc.exists()) {
    return { id, ...productDoc.data() }
  }
  return null;
}

export default async function ProductDetailPage({ params }) {
  const session = await auth()
  const product = await fetchProduct(params.id)

  if (!product) {
    <main>
      <h1>Product not found</h1>
      <Link href={'/shop'}>
        Go back to shop
      </Link>
    </main>
  }

  return (
    <main className='w-full min-h-dvh flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-3xl bg-white shadow-lg rounded-lg p-8'>
        <h1 className='text-4xl font-bold text-gray-900'>T-Shirt</h1>
        <p className='mt-2 text-lg text-gray-500'>Category: Men's Clothing</p>
        <p className='mt-4 text-2xl text-red-500 font-semibold'>N12000</p>
        <Image
          src={'/asset4.png'}
          alt='product'
          width={500}
          height={500}
          className='w-[15rem] h-[20rem] mx-auto'
        />
        <p className='mt-6 text-gray-700'>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum.</p>
        <button className='bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all'>Buy Product</button>
        <Link href={'/shop'} className='bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-all'>Back to Shop</Link>
      </div>
    </main>
  )
}