const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/post')

module.exports = {
    create,
}