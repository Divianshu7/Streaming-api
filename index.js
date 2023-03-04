import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import fs, { readdirSync } from 'fs'
import path from 'path'
require("dotenv").config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000,
    // autoIndex: false, // Don't build indexes
    // maxPoolSize: 10, // Maintain up to 10 socket connections
    // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    // family: 4 // Use IPv4, skip trying IPv6
}).then(() => console.log('connected DB')).catch((err) => console.log("error is ", err))

const server = app.listen(5000, () => console.log('Server running at 5000'))
