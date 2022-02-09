const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');

const { db } = require('./services/db_services/dbConfig');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 5000;

db.then(() => {
    console.log("DB connected");

    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: true }));
    app.use(cors());

    app.use(function (req, res, next) {
        if (req.headers
            && req.headers.authorization
            && req.headers.authorization.split(' ')[0] === 'JWT'
        ) {
            jsonwebtoken.verify(
                req.headers.authorization.split(' ')[1],
                'ATTENDANCERESTFULAPIs',
                function (err, decode) {
                    if (err) req.user = undefined;
                    req.user = decode;
                    next();
                }
            );
        } else {
            req.user = undefined;
            next();
        }
    });

    app.use("/", attendanceRoutes);
    
    app.listen(PORT)
})

