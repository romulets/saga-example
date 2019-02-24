const repository = require('../../infra/repository');
const model = require('./model');

const Flight = repository.buildModel('Flight', model);

module.exports.bookFlight = (destination, date) => {
    flight = new Flight({ destination, date });
    return flight.save()
            .then(flight => {
                console.log('Flight', flight._id ,'to', flight.destination, 'booked successfully on', flight.date)
                return flight
            });
}

module.exports.cancelBook = (bookId) => {
    return Flight.findById(bookId)
            .then(flight => flight.delete())
            .then(flight => {
                console.log('Flight', flight._id ,'to', flight.destination, 'canceled successfully on', flight.date)
                return flight
            });
}