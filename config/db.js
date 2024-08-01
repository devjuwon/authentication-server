const mongoose = require("mongoose")

const connectDb = async () => {
    try {
      const connect = await mongoose.connect("mongodb+srv://DevJuwon:devjuwon@devjuwon-cluster.aipq6q7.mongodb.net/")  
      console.log(`mongodb connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb