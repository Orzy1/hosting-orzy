"use client";
import React from 'react';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { collection, addDoc } from "firebase/firestore";
import { useSession } from 'next-auth/react';
import { db } from '@/lib/firebaseConfig';

const page = () => {

  const { data: session } = useSession()
  const authorMail = session?.user?.email

  const initVal = {
    productName: "",
    productImage: null,
    productCategory: "",
    productPrice: "",
    productDescription: ""
  }

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    productCategory: Yup.string().required("Product category is required"),
    productDescription: Yup.string().required("Product description is required"),
    productPrice: Yup.number().required("Product price is required").positive("Price must be a positive  number")
  })

  const handleSubmit = async (values, { resetForm }) => {
    try {

      // an object to be sent to the db
      const product = {
        name: values.productName,
        category: values.productCategory,
        price: values.productPrice,
        description: values.productDescription,
        timestamp: new Date(),
        author: session?.user?.name,
        authorMail: authorMail,
        isPaid: false
      }

      const docRef = collection(db,"products")
      await addDoc(docRef, product)

      console.log("Form Submitted", values);
      resetForm()
      alert("Product posted sucessfully")
    } catch (error) {
      console.error("Error posting product", error)
      alert("Post failed")
    }
  }

  return (
    <main className='min-h-dvh p-3'>
      <div className='max-w-lg mx-auto p-5 rounded-lg shadow-lg bg-white'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Post a Product</h1>
        <Formik
          initialValues={initVal}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-5'>
            {/* product name */}
            <div>
              <label htmlFor="" className='text-sm'>Product Name:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product name"
                name="productName"
                type="text"
              />
              <ErrorMessage
                name='productName'
                component={"p"}
                className='text-sm text-red-500 mt-1'
              />
            </div>
            {/* product image */}
            {/* <div>
              <label htmlFor="" className='text-sm'>Product Image:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                name="productImage"
                type="file"
                accept="image/*"
              />
              <ErrorMessage
                name='productImage'
                component={"p"}
                className='text-sm text-red-500 mt-1'
              />
            </div> */}
            {/* product category */}
            <div>
              <label htmlFor="" className='text-sm'>Product Category:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product category"
                name="productCategory"
                type="text"
              />
              <ErrorMessage
                name='productCategory'
                component={"p"}
                className='text-sm text-red-500 mt-1'
              />
            </div>
            {/* product price */}
            <div>
              <label htmlFor="" className='text-sm'>Product Price:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product price"
                name="productPrice"
                type="number"
              />
              <ErrorMessage
                name='productPrice'
                component={"p"}
                className='text-sm text-red-500 mt-1'
              />
            </div>
            {/* product description */}
            <div>
              <label htmlFor="" className='text-sm'>Product Description:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product desciption"
                name="productDescription"
                type="text"
              />
              <ErrorMessage
                name='productDescription'
                component={"p"}
                className='text-sm text-red-500 mt-1'
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
            >
              Post Product
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default page