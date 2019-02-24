const { Router } = require('express');
const hotelService = require('../domain/hotel/service');

const router = Router();

router.post('/hotel/:destination/book', (req, res) => {
    hotelService
        .bookHotel(req.params['destination'], req.body.date)
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});

router.delete('/hotel/:destination/book/:bookId', (req, res) => {
    hotelService
        .cancelBook(req.params['bookId'])
        .then(({_id}) => res.status(200).send({id: _id}))
        .catch(error => res.status(500).send(error))
});


module.exports = router