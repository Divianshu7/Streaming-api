import Videos, { } from '../model/Videos'
export const getAll = async (req, res) => {
    const { userId } = req.params
    console.log(userId)
    try {
        let video = []
        if (userId === ":all") { video = await Videos.find() }
        else { video = await Videos.find({ postedBy: userId }) }
        res.json(video)
    } catch (err) {
        console.log(err)
        res.status(400).json(error)
    }
}
export const create = async (req, res) => {
    const { name, postedBy } = req.body
    console.log(req.body)
    let videosPaths = []
    if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
        for (let video of req.files.videos) {
            videosPaths.push('/' + video.path)
        }
    }
    try {
        const createdMedia = await Videos.create({
            name,
            postedBy,
            videos: videosPaths
        })
        res.json({ message: "Media created Successfully", createdMedia })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}