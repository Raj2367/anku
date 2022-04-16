const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Ankita:Ankita@demopage.cgq9q.mongodb.net/Glosity')
    .then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch
    ((err) => {
        console.log("error in db connection");
    }
    );