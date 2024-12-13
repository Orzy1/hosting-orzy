"use server";
import PaystackPaymentButton from '@/app/components/PaystackPaymentButton';
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
  const session = await auth();
  const email = session?.user?.email
  // console.log(email);
  
  const product = await fetchProduct(params.id)

  if (!product) {
    <main>
      <h1>Product not found</h1>
      <Link href={'/shop'}>
        Go back to shop
      </Link>
    </main>
  }

  const amountInKobo = product.price * 100

  return (
    <main className='w-full min-h-dvh flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-3xl bg-white shadow-lg rounded-lg p-8'>
        <h1 className='text-4xl font-bold text-gray-900'>{product.name}</h1>
        <p className='mt-2 text-lg text-gray-500'>Category: {product.category}</p>
        <p className='mt-4 text-2xl text-red-500 font-semibold'>N{product.price}</p>
        <Image
          src={'/asset4.png'}
          alt='product'
          width={500}
          height={500}
          className='w-[15rem] h-[20rem] mx-auto'
        />
        <p className='mt-6 text-gray-700'>
          {product.description} 
        </p>
        <PaystackPaymentButton
          email={email}
          amount={amountInKobo}
          productName={product.name}
          productId={params.id}
        />
        <Link href={'/shop'} className='bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-all m-3'>Back to Shop</Link>
      </div>
    </main>
  )
}
