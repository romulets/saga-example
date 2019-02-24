# Hotel Service

Booking service for hotels simulation to learn the saga pattern


Booking
```
curl -H "Content-Type: application/json" -d '{"date": "2019-02-20"}' -X POST http://localhost:9002/hotel/nh-barcelona/book
```

Canceling
```
curl -X DELETE http://localhost:9002/hotel/nh-barcelona/book/:bookId
```