const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.get('/', (req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.json('Err '+err));
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date});
    newExercise.save()
    .then(() => res.json('new exercise added'))
    .catch(err => res.status(400).json('Err '+err));
})

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json('Err '+err));
})

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => res.json('Err '+err));
})

router.patch('/:id', (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.date = Date.parse(req.body.date);
        exercise.duration = Number(req.body.duration);
        exercise.save()
        .then(exercise => res.json('Exercise updated.'))
        .catch(err => res.json('Err '+err));
        
    })
    .catch(err => res.json('Err '+err));
})

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date});
    newExercise.save()
    .then(() => res.json('new exercise added'))
    .catch(err => res.status(400).json('Err '+err));
})

module.exports = router;