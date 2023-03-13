const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/post')

module.exports = {
    create,
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body)
        res.json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}