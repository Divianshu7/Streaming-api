import mongoose from "mongoose";
import Comment from '../model/Comment'
import { Schema } from "mongoose";
import User from "./User";
import Videos from "./Videos";
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    replies: [{
        type: mongoose.Schema.ObjectId,
        ref: Comment,
    }],
    post: {
        type: mongoose.Schema.ObjectId,
        ref: Videos,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true
    },


}, { timestamps: true })
export default mongoose.model("Comment", commentSchema)