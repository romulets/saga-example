const repository = require('../../infra/repository');
const model = require('./model');

const Hotel = repository.buildModel('Hotel', model);

module.exports.bookHotel = (destination, date) => {
    hotel = new Hotel({ destination, date });
    return hotel.save()
            .then(hotel => {
                console.log('Hotel', hotel.destination, 'booked successfully on', hotel.date, 'id:', hotel._id)
                return hotel
            });
}

module.exports.cancelBook = (bookId) => {
    return Hotel.findById(bookId)
            .then(hotel => hotel.delete())
            .then(hotel => {
                console.log('Hotel', hotel.destination, 'canceled successfully on', hotel.date, 'id:', hotel._id)
                return hotel
            });
}