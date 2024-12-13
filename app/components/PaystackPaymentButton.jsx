"use client";
import { PaystackButton } from "react-paystack";
import { markAsSold } from "../actions/markAsSold";


export default function PaystackPaymentButton({ email, amount, productName, productId }) {
    const publicKey = "pk_test_69d667fa468952d2db6343d1648b331ac03f0a2a"

    const handleSuccess = async (reference) => {
        console.log("Payment successful", reference);
        alert("Payment successful")
        try {
            const result = await markAsSold(productId)
            if (result.success) {
                alert("Sold")
            }
        } catch (error) {
            console.error("Error marking product as sold", error)
            alert("Failed to mark product as sold")
        }
    }

    const handleClose = () => {
        console.log("Payment not completed");
        alert("Payment was aborted");
    }

    return (
        <PaystackButton
            label="Eary-Mart"
            email={email}
            amount={amount}
            publicKey={publicKey}
            text={`Buy ${productName}`}
            onSuccess={handleSuccess}
            onClose={handleClose}
            className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-all"
        />
    )
}