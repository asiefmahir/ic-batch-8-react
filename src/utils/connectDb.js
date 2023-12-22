import mongoose from 'mongoose'

const connectDb = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.connect(process.env.MONGODB_URI)
}

export default connectDb