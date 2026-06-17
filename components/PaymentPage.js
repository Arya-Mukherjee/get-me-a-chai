"use client"

import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
// import { handleFetch } from 'next/dist/experimental/testmode/fetch';

const PaymentPage = ({ username }) => {
    // const paymentform = const [paymentform, setPaymentform] = useState({ second })
    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        //get the order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img draggable="false" className='object-cover pointer-events-none select-none' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6562610/2787e35ac7c445d6aab89d9ff940690c/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/11.png?token-hash=Ex62fsqNB_uR7jXvrzYQzo3Pme5lQobZh5gJm9o-wSo%3D&token-time=1780531200" alt="" />
                <div className='absolute -bottom-18 left-1/2 -translate-x-1/2 border-2  border-white rounded-full w-[9.375rem] h-[9.375rem] overflow-hidden' >
                    <img draggable="false" className="rounded-full w-full h-full object-cover pointer-events-none select-none" src="/profile.jpg" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-1.5">
                <div className="font-bold text-lg">
                    @{username}
                </div>
                <div className="text-gray-300">
                    Creating Content for All
                </div>
                <div className="text-gray-400 flex gap-2 items-center">
                    <span>25,395 members</span>

                    <span className="select-none pointer-events-none text-xl">•</span>

                    <span>110 Posts</span>

                    <span className="select-none pointer-events-none text-xl">•</span>

                    <span>$17,630/release</span>
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 p-10 bg-slate-900 rounded-lg text-white">
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        {/* show list 
            of all supporters as a leaderboard */}
                        <ul className="mx-5 text-lg">
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} src="/avatar.gif" alt="user avatar" />
                                <span>

                                    Ram donated <span className="font-bold select-none pointer-events-none"> $30</span> with a message "I love your content, keep it up! ❤️"
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 p-10 bg-slate-900 rounded-lg text-white">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input for name and message */}
                            <div>

                                <input name="name" onChange={handleChange} value={paymentform.name} type="text" placeholder='Enter Your Name' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            </div>
                            <input name="message" onChange={handleChange} value={paymentform.message} type="text" placeholder='Enter a Message' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            {/* input for amount */}
                            <input name="amount" onChange={handleChange} value={paymentform.amount} type="text" placeholder='Enter Amount' className='w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
                            <button className='w-full text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Donate</button>
                        </div>
                        {/* or choose from these amounts */}
                        <div>
                            <p className='my-5'>Or choose from these amounts</p>
                            <div className='flex gap-2'>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={() => { pay(500) }}>₹5</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={() => { pay(1000) }}>₹10</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={() => { pay(2500) }}>₹25</button>
                                <button className='text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={() => { pay(5000) }}>₹50</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
