"use client";
import { db } from '@/lib/firebaseConfig';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTrashBinSharp } from "react-icons/io5";

const ProductsGrid = () => {

  const [products, setProducts] = useState([])
  const {data:session} = useSession()

  // const products = [
  //     {
  //       name: "T-Shirt",
  //       category: "Clothing", 
  //       price: "50.00",
  //       image: "/asset4.png"
  //     },
  //     {
  //       name: "T-Shirt",
  //       category: "Clothing", 
  //       price: "50.00",
  //       image: "/asset5.png"
  //     },
  //     {
  //       name: "T-Shirt",
  //       category: "Clothing", 
  //       price: "50.00",
  //       image: "/asset6.png"
  //     },
  //   ]

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"))
      // const productsData = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }))
      const productsData = []
      for (const productDoc of querySnapshot.docs) {
        const product = { id: productDoc.id, ...productDoc.data() }

        if (product.isPaid) {
          product.status = "SOLD"
        } else {
          product.status = "AVAILABLE"
        }
        productsData.push(product)
      }
      setProducts(productsData)
    } catch (error) {
      console.error("Error fetching products: ", error);
      alert("Error fetching products")
    }
  }

  const handleDelete = async (productId)=>{
    try {
      if (confirm("Are you sure???")) {
        await deleteDoc(doc(db, "products", productId))
        setProducts((prev) => prev.filter((product) => product.id != productId))
        alert("Product deleted")
      }
    } catch (error) {
      console.error("Error deleting product", error)
      alert("Error deleting product")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <main className='lg:px-[5rem] p-3 grid grid-cols-1 lg:grid-cols-3 md:gap-10 gap-5 my-5'>
      {
        products.map((product, i) => (
          <div key={i} className='border flex flex-col gap-5 mt-2 rounded-lg p-3 hover:shadow-lg hover:border-none duration-200 relative group' >
            <h2 className='text-center font-semibold text-2xl text-blue-600'>{product.name}</h2>
            <p className='text-center text-gray-500 text-sm'>{product.category}</p>
            <p className={`text-center text-sm ${product.status == "SOLD" ? "text-green-500" : "text-red-500"}`}>
              {product.status == "SOLD" ? "SOLD OUT" : `N ${product.price}`}
            </p>
            <Image
              src="/asset4.png"
              alt='product'
              width={500}
              height={500}
              className='w-[15rem] h-[20rem] mx-auto'
            />
            {
              product.status == "AVAILABLE" && (
                <Link href={"/shop/" + product.id} className='rounded-lg flex items-center gap-4 p-2 justify-center uppercase w-[9rem] mx-auto bg-red-500 text-white font-semibold hover:text-red-500 hover:bg-white hover:border hover:border-red-500 transition-all text-sm'>
                  <p>Buy now</p>
                  <FaArrowRightLong />
                </Link>
              )
            }

            {
              session?.user?.email == product.authorMail && (
                <button onClick={()=>handleDelete(product.id)} className='absolute top-2 right-2 hidden group-hover:flex'>
                  <IoTrashBinSharp className='text-2xl text-red-500'/>
                </button>
              )
            }
          </div>
        ))
      }
    </main>
  )
}

export default ProductsGrid