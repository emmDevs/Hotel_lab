use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Bernice Smith",
        email: "bsmith@gmail.com",
        status: true
    },
    {
        name: "Sam Brown",
        email: "sbrown@yahoo.com",
        status: false
    },
    {
        name: "Bob McDonald",
        email: "bmcdonald@gmail.com",
        status: false
    }

]) 