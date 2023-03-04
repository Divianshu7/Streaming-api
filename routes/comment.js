import express from 'express'
import { addComment, getcomment, getReply, replycomment } from '../controller/comment'
const router = express.Router()
router.post('/comment/:videoId/:userId', addComment)
router.get('/getcomment/:videoId', getcomment)
router.post('/reply/:id/:userId', replycomment)
router.get('/getReplies/:id', getReply)

module.exports = router