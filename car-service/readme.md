#Car Service

Booking service for cars simulation to learn the saga pattern


Booking
```
curl -H "Content-Type: application/json" -d '{"date": "2019-02-20"}' -X POST http://localhost:9001/car/civic/book
```

Canceling
```
curl -X DELETE http://localhost:9001/car/civic/book/:bookId
```