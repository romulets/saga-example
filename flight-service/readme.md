# Flight Service

Booking service for flights simulation to learn the saga pattern


Booking
```
curl -H "Content-Type: application/json" -d '{"date": "2019-02-20"}' -X POST http://localhost:9000/flight/london/book
```

Canceling
```
curl -X DELETE http://localhost:9000/flight/london/book/:bookId
```