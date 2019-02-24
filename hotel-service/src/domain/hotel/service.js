const repository = require('../../infra/repository');
const model = require('./model');

const Hotel = repository.buildModel('Hotel', model);

module.exports.bookHotel = (hotelName, date) => {
    hotel = new Hotel({ hotelName, date });
    return hotel.save()
            .then(hotel => {
                console.log('Hotel', hotel.hotelName, 'booked successfully on', hotel.date, 'id:', hotel._id)
                return hotel
            });
}

module.exports.cancelBook = (bookId) => {
    return Hotel.findById(bookId)
            .then(hotel => hotel.delete())
            .then(hotel => {
                console.log('Hotel', hotel.hotelName, 'canceled successfully on', hotel.date, 'id:', hotel._id)
                return hotel
            });
}