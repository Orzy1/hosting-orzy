"use server";
import { db } from "@/lib/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function markAsSold(prductId) {
    if (!prductId) {
        alert("Product Id is required")
    }

    try {
        const productRef = doc(db, "products", prductId)
        await updateDoc(productRef, {isPaid: true})
        return {success: true}
    } catch (error) {
        console.error("Error updating product status", error)
        alert("Product update failed")
    }
}