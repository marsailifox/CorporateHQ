const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/forum')

module.exports = {
    create,
}