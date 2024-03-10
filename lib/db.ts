import mongoose, { Connection } from "mongoose"
/** Tránh việc kết nối liên tục khi bộ đếm kết nối đến MongoDB vẫn còn */
let cachedConnection: Connection | null = null

export const connectToMongoDB = async () => {
  if (cachedConnection) {
    return cachedConnection
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "snapchat",
    })
    cachedConnection = conn.connection

    console.log("New mongodb connection established")
  } catch (error) {
    console.log(error)
    throw error
  }
}
