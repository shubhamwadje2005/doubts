const Blog = require("../models/Blog");
const upload = require("../utils/upload");
const cloud = require("cloudinary").v2 // aws s3
const path = require("path")

cloud.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.createBlog = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(401).json({ message: "unable to upload", error: err.message })
            }
            // const { secure_url } = await cloud.uploader.upload(req.file.path)
            const data = await cloud.uploader.upload(req.file.path)
            console.log(data);
            await Blog.create({ ...req.body, hero: data.secure_url, user: req.user })
            // console.log(req.body);
            // console.log(req.file);
            res.json({ message: "blog create success" })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error", error: error.message })
    }
}
exports.getBlog = async (req, res) => {
    try {
        const result = await Blog.find({ user: req.user })
        res.json({ message: "blog fetch success", result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error", error: error.message })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            const { bid } = req.params
            if (req.file) {
                const result = await Blog.findById(bid)
                await cloud.uploader.destroy(path.basename(result.hero).split(".")[0])

                const { secure_url } = await cloud.uploader.upload(req.file.path)
                await Blog.findByIdAndUpdate(bid, { ...req.body, hero: secure_url })
                res.json({ message: "blog update success" })
            } else {
                await Blog.findByIdAndUpdate(bid, req.body)
                res.json({ message: "blog update success" })
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error", error: error.message })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const { bid } = req.params
        const result = await Blog.findById(bid)
        await cloud.uploader.destroy(path.basename(result.hero).split(".")[0])
        await Blog.findByIdAndDelete(bid)
        res.json({ message: "blog delete success" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error", error: error.message })
    }
}