const { Router } = require('express');
const carService = require('../domain/car/service');

const router = Router();

router.post('/car/:destination/book', (req, res) => {
    carService
        .bookCar(req.params['destination'], req.body.date)
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});

router.delete('/car/:destination/book/:bookId', (req, res) => {
    carService
        .cancelBook(req.params['bookId'])
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});


module.exports = router