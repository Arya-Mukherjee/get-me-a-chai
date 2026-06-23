"use client"

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
// import { handleFetch } from 'next/dist/experimental/testmode/fetch';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    // const paymentform = const [paymentform, setPaymentform] = useState({ second })
    const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const [currentuser, setcurrentUser] = useState({ name: "", message: "", amount: "" })
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        if (searchParams.get("paymentdone") == 'true' && session) {
            toast('Payment has been made!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            router.replace(`/${username}`);
        }
    }, [session])


    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
    }



    const pay = async (amount) => {
        //get the order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chaa", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover relative w-full h-48 sm:h-60 md:h-72 lg:h-[25rem]">
                <img
                    draggable="false"
                    className="w-full h-full object-cover pointer-events-none select-none"
                    src={currentuser.coverpic}
                    alt=""
                />

                <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 border-2 border-white rounded-full w-[9.375rem] h-[9.375rem] overflow-hidden">
                    <img
                        draggable="false"
                        className="w-full h-full rounded-full object-cover pointer-events-none select-none"
                        src={currentuser.profilepic}
                        alt=""
                    />
                </div>
            </div>
            <div className="info  flex justify-center items-center my-24 flex-col gap-1.5">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-gray-300 px-[11px] md:px-0 text-center">
                    Let's help {currentuser.name} get a cup of cha! Support them by making a payment.
                </div>
                <div className="text-gray-400 flex gap-2 items-center">
                    {payments.length} {payments.length === 1 ? "payment" : "payments"} •  ₹{payments.reduce((acc, p) => acc + p.amount, 0) / 100} raised
                </div>

                <div className="payment flex flex-col md:flex-row gap-3 w-[95%] md:w-[80%] mt-11">
                    <div className="supporters w-full md:w-1/2 p-5 md:p-10 bg-slate-900 rounded-lg text-white">
                        <h2 className="text-xl md:text-2xl font-bold my-5">
                            Top 10 Supporters
                        </h2>

                        <ul className="overflow-y-auto h-[18rem] text-sm md:text-base custom-scrollbar pr-3">
                            {payments.length === 0 && (
                                <li>No payments yet</li>
                            )}

                            {payments.map((p, index) => (
                                <li
                                    key={index}
                                    className="my-4 flex gap-2 items-start break-words"
                                >
                                    <img
                                        width={33}
                                        className="shrink-0"
                                        src="/avatar.gif"
                                        alt="user avatar"
                                    />

                                    <span className="leading-relaxed">
                                        {p.name} donated
                                        <span className="font-bold"> ₹{p.amount / 100}</span>
                                        {p.message && <> with a message "{p.message}"</>}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 p-10 bg-slate-900 rounded-lg text-white">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input for name and message */}
                            <div>

                                <input name="name" onChange={handleChange} value={paymentform.name} type="text" placeholder='Enter Your Name' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            </div>
                            <input name="message" onChange={handleChange} value={paymentform.message} type="text" placeholder='Enter a Message' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            {/* input for amount */}
                            <input name="amount" onChange={handleChange} value={paymentform.amount} type="text" placeholder='Enter Amount' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className='w-full text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed' disabled={!paymentform.amount || paymentform.name.length < 3 || paymentform.message.length < 4}>Pay</button>
                        </div>
                        {/* or choose from these amounts */}
                        <div className='hidden md:block'>
                            <p className='my-5'>Or choose from these amounts</p>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed' disabled={paymentform.name.length < 3 || paymentform.message.length < 4} onClick={() => { pay(500) }}>₹5</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed' disabled={paymentform.name.length < 3 || paymentform.message.length < 4} onClick={() => { pay(1000) }}>₹10</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed' disabled={paymentform.name.length < 3 || paymentform.message.length < 4} onClick={() => { pay(2500) }}>₹25</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed' disabled={paymentform.name.length < 3 || paymentform.message.length < 4} onClick={() => { pay(5000) }}>₹50</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
