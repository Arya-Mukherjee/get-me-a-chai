"use server"

import razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import payment from "@/models/Payment";


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const secret=user.razorpaysecret
    var instance = new razorpay({ key_id: user.razorpayid, key_secret: secret })

    
    let options = {
        amount : Number.parseInt(amount),
        currency : "INR",
    }
    let x = await instance.orders.create(options)

    //create  a payment object which shows a pending payment
    await payment.create({oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message})

    return x
}


export const fetchuser = async (username) => {
    await connectDb()
    let user = await User.findOne({ username })
    return JSON.parse(JSON.stringify(user))
}

export const fetchpayments = async (username) => {
    await connectDb()
    let payments = await Payment.find({ to_user: username, done:true })
                                .sort({ amount: -1 })

    return JSON.parse(JSON.stringify(payments))
}

export const updateProfile = async (data, oldUsername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)
    //if the username is being updated check if username is available
    if(oldUsername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if(u){
            return {error: "Username already taken"}
        }
        await User.updateOne({email : ndata.email}, ndata)
        //now update all the payments in the payments table which have the old username to the new username
        await Payment.updateMany({to_user: oldUsername}, {to_user: ndata.username})
    }
    else{

        
        await User.updateOne({email : ndata.email}, ndata)
    }
}