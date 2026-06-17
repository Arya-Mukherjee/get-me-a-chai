import mongoose from 'mongoose'

const connectDB = async () => {

  // Prevent multiple connections in Next.js
  if (mongoose.connections[0].readyState) {
    return
  }

  try {

    const conn = await mongoose.connect(
      "mongodb://localhost:27017/chai"
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)

  } catch (error) {

    console.error(error.message)
    process.exit(1)
  }
}

export default connectDB