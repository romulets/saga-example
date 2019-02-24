const { Router } = require('express');
const flightService = require('../domain/flight/service');

const router = Router();

router.post('/flight/:destination/book', (req, res) => {
    flightService
        .bookFlight(req.params['destination'], req.body.date)
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});

router.delete('/flight/:destination/book/:bookId', (req, res) => {
    flightService
        .cancelBook(req.params['bookId'])
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});


module.exports = router