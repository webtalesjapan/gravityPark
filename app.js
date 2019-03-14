const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const i18n = require('i18n');
const hbs = require('hbs');

const app = express();

//i18n configuration
i18n.configure({
    locales: ['en', 'ja'],
    defaultLocale :  ' ja ' ,
    cookie: 'lang',
    directory: "" + __dirname + "/locales",
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/static/')));

//create HBS view engine
app.set('views', "" + __dirname + "/views");
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);

//initializing i18n
app.use(i18n.init);

// giving i18n to the language parameter
hbs.registerHelper('__', function () {
    return i18n.__.apply(this, arguments);
});
hbs.registerHelper('__n', function () {
    return i18n.__n.apply(this, arguments);
});

//loading the language in session -> not sure how this page is working exactly
app.use(function(req, res, next){
    res.locals.lang = req.session.lang || '';
    next();
});

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');
const bookingRouter = require('./routes/booking');
const termsRouter = require('./routes/terms');
const aboutRouter = require('./routes/about');
const accessRouter = require('./routes/access');
const walkRouter = require('./routes/walk');
const zipRouter = require('./routes/zip');
const contactRouter = require('./routes/contact');
const faqsRouter = require('./routes/faqs');
const indexRouter = require('./routes/index');
const localRouter = require('./routes/local');
const privacyRouter = require('./routes/privacy');
const safetyRouter = require('./routes/safety');
const topRouter = require('./routes/top');
const cpolicyRouter = require('./routes/cpolicy');

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/booking', bookingRouter);
app.use('/api', apiRouter);
app.use('/booking', bookingRouter);
app.use('/terms_and_conditions', termsRouter);
app.use('/about', aboutRouter);
app.use('/access', accessRouter);
app.use('/canyon_walk', walkRouter);
app.use('/canyon_zip', zipRouter);
app.use('/contact', contactRouter);
app.use('/faqs', faqsRouter);
app.use('/index', indexRouter);
app.use('/local_attractions', localRouter);
app.use('/privacy_policy', privacyRouter);
app.use('/safety', safetyRouter);
app.use('/top_page', topRouter);
app.use('/cancellation_policy', cpolicyRouter);

/* This section should always be in the end! */
app.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, 'public', '404.html'));
});

module.exports = app;
