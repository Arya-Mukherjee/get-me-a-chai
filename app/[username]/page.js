import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
    const { username } = await params

    await connectDb()

    let u = await User.findOne({ username })

    if (!u) {
        notFound()
    }

    return (
        <>
            <PaymentPage username={username} />
        </>
    )
}

export default Username