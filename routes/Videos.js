import express from 'express'
import fs from 'fs'
import multer from 'multer'
import path from 'path'
import { create, getAll, updateLike, updateViews } from '../controller/Videos'
const router = express.Router()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('public')) {
            fs.mkdirSync('public')
        }
        if (!fs.existsSync("public/videos")) {
            fs.mkdirSync("public/videos")
        }
        cb(null, "public/videos")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname)
        if (ext !== '.mkv' && ext !== '.mp4') {
            return cb(new Error("only videos are allowed"))
        }
        cb(null, true)
    }
})
router.get('/all/:userId', getAll)
router.post('/updateLike/:like/:videoId', updateLike)
router.post('/updateViews/:views/:videoId', updateViews)
router.post("/create", upload.fields([
    {
        name: "videos",
        maxCount: 5
    }
]), create)
module.exports = router