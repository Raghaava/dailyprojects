const router = require('express').Router();
const User = require('../models/user.model');

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Err '+ err));
});

router.post('/add', (req, res) => {
    const userName = req.body.username;
    const newUser = new User({userName});
    newUser.save()
    .then(() => res.json('user created.'))
    .catch(err => err.status(400).json('Err '+ err));
})


module.exports = router;