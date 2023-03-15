const Post = require('../../models/post')

module.exports = {
    create,
    index,
    update,
    deletePost,
}

async function create(req, res) {
    try {
        req.body.author = req.user
        const post = await Post.create(req.body)
        res.json(post)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const posts = await Post.find({})
        res.json(posts)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function update(req, res) {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        const posts = await Post.find({})
        res.json(posts)
        console.log(posts)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deletePost(req, res) {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.json(post)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}