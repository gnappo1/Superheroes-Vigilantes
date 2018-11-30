const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const villainRoutes = require('./routes/villains');
const superHeroRoutes = require('./routes/super-heroes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({"extended": false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', superHeroRoutes.routes);
app.use(villainRoutes);

app.use((req, res) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found!'});
});

app.listen(3000);