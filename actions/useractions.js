"use server"

import razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import payment from "@/models/Payment";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    var instance = new razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    
    let options = {
        amount : Number.parseInt(amount),
        currency : "INR",
    }
    let x = await instance.orders.create(options)

    //create  a payment object which shows a pending payment
    await payment.create({oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x
}
