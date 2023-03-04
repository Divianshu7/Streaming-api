import Videos, { } from '../model/Videos'
export const getAll = async (req, res) => {
    const { userId } = req.params
    console.log(userId.substr(1))
    try {
        let video = []
        if (userId === ":all") {
            video = await Videos.find().populate("postedBy", "_id username")
        }
        else if (userId[0] === "o") {
            video = await Videos.findById(userId.substr(1)).populate("postedBy", "_id username")
        }
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
export const updateLike = async (req, res) => {
    if (req.params.like != "undefined") {
        await Videos.findByIdAndUpdate(req.params.videoId, { likes: req.params.like })

    }
}
export const updateViews = async (req, res) => {
    if (req.params.views != "undefined") {
        await Videos.findByIdAndUpdate(req.params.videoId, { views: req.params.views })

    }
}