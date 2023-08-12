import mongoose from 'mongoose'

const ConnectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DB_URI!)
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log(error)
  }
}

export default ConnectMongoDB
