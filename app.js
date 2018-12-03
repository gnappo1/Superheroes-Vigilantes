const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const villainRoutes = require('./routes/villains');
const superHeroRoutes = require('./routes/super-heroes');
const adminController = require('./controllers/adminController');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({"extended": false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', superHeroRoutes);
app.use(villainRoutes);

app.use(adminController.get404);

app.listen(3000);