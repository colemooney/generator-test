const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const bcryptSalt = 10

require('../configs/database')

let events = [
  {
    date: 'Cole',
    room: 'Club room',
    unit: '1401',
  },
  {
    date: 'Trey',
    room: 'Pool room',
    unit: '1401',
  },
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then((usersCreated) => {
    console.log(`${usersCreated.length} users created with the following id:`)
    console.log(usersCreated.map((u) => u._id))
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch((err) => {
    mongoose.disconnect()
    throw err
  })
