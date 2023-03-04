import mongoose from "mongoose";
import { Schema } from "mongoose";
import User from "./User";
const videoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    videos: [{ type: String }],
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }


}, { timestamps: true })
export default mongoose.model("Videos", videoSchema)