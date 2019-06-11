const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    console.log('body', req.body)
    console.log('avatar', avatar)
    const userBanco = { ...req.body, avatar }
    console.log('user', userBanco)

    await User.create({ ...req.body, avatar })
      .then(function (user) {
        console.log('success')
      })
      .catch(function (err) {
        console.log(err, req.body)
      })

    return res.redirect('/')
  }
}

module.exports = new UserController()
