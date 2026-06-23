import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-6 py-12 max-w-6xl">

            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-bold mb-6">
                    About Get Me A Chai ☕
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get Me A Chai is a creator-support platform that helps artists,
                    developers, writers, musicians, and creators receive direct support
                    from the people who love their work. Every contribution brings ideas,
                    projects, and dreams one step closer to reality.
                </p>
            </div>

            {/* Mission */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

                <p className="text-gray-300 text-lg leading-8">
                    We believe creators deserve a simple and transparent way to
                    receive support from their community. Whether you're building
                    apps, creating videos, writing blogs, or sharing knowledge,
                    your supporters can fuel your journey one chai at a time.
                </p>
            </section>

            {/* How it works */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-10">How It Works</h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-slate-900 rounded-xl p-8">
                        <div className="text-5xl mb-4">👤</div>
                        <h3 className="text-xl font-bold mb-3">
                            Create Your Page
                        </h3>
                        <p className="text-gray-400">
                            Set up your profile and personalize your page with your
                            cover image, profile picture, and payment information.
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-8">
                        <div className="text-5xl mb-4">❤️</div>
                        <h3 className="text-xl font-bold mb-3">
                            Share With Your Audience
                        </h3>
                        <p className="text-gray-400">
                            Share your page with your followers, subscribers,
                            readers, or fans and let them support your work.
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-8">
                        <div className="text-5xl mb-4">☕</div>
                        <h3 className="text-xl font-bold mb-3">
                            Receive Support
                        </h3>
                        <p className="text-gray-400">
                            Receive contributions securely and continue creating
                            amazing things with the help of your community.
                        </p>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-10">
                    Why Creators Love Get Me A Chai
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-slate-900 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">
                            🚀 Easy Setup
                        </h3>
                        <p className="text-gray-400">
                            Create your page in minutes and start accepting support
                            instantly.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">
                            🔒 Secure Payments
                        </h3>
                        <p className="text-gray-400">
                            Powered by Razorpay to ensure safe and reliable transactions.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">
                            🌎 Global Community
                        </h3>
                        <p className="text-gray-400">
                            Connect with supporters and build meaningful relationships.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-xl">
                        <h3 className="text-xl font-bold mb-3">
                            💡 Focus on Creating
                        </h3>
                        <p className="text-gray-400">
                            Spend less time worrying about funding and more time
                            building what you love.
                        </p>
                    </div>

                </div>
            </section>

            {/* Closing */}
            <section className="text-center mt-20">
                <h2 className="text-4xl font-bold mb-6">
                    Support Creativity, One Chai at a Time ☕
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Whether you're a creator chasing your passion or a supporter
                    helping bring ideas to life, Get Me A Chai is where communities
                    come together to make creativity sustainable.
                </p>
            </section>

        </div>
    )
}

export default About

export const metadata = {
    title: "About - Get Me A Chai",
}