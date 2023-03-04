import Comment from "../model/Comment"

export const addComment = async (req, res) => {
    const { videoId, userId } = req.params
    const comment = req.body.comment
    try {
        await Comment.create({
            comment,
            post: videoId,
            postedBy: userId
        })
    } catch (err) {
        console.log(err)
    }
}
export const getcomment = async (req, res) => {
    const { videoId } = req.params
    try {
        const comment = await Comment.find({ post: videoId })
        res.status(200).json(comment)
    } catch (err) {
        console.log(err)
    }
}
export const replycomment = async (req, res) => {
    const { id, userId } = req.params
    const comment = req.body.replyc
    const reply = await Comment.create({
        comment,
        postedBy: userId
    })
    const parent = await Comment.findById(id)
    let replies = parent.replies
    replies = [reply._id, ...replies]
    parent.replies = replies
    parent.save()

}
export const getReply = async (req, res) => {
    const { id } = req.params
    console.log("ss")
    let reply = []
    const { replies } = await Comment.findById(id)
    for (let i in replies) {
        const comment = await Comment.findById(replies[i])
        reply.push(comment)
    }
    res.status(200).json(reply)
}