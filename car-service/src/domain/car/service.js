const repository = require('../../infra/repository');
const model = require('./model');

const Car = repository.buildModel('Car', model);

module.exports.bookCar = (model, date) => {
    car = new Car({ model, date });
    return car.save()
            .then(car => {
                console.log('Car', car.model , 'booked successfully on', car.date, 'id: ', car._id)
                return car
            });
}

module.exports.cancelBook = (bookId) => {
    return Car.findById(bookId)
            .then(car => car.delete())
            .then(car => {
                console.log('Car', car.model , 'canceledBooking successfully on', car.date, 'id: ', car._id)
                return car
            });
}