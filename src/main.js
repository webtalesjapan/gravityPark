import Vue from 'vue';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

// CSS files //TODO : Combine them all in a sass file.
// import '../public/css/font-awesome.min.css';
// import '../public/css/animate.css';
// import '../public/css/responsive.css';
// import '../public/css/style.css';
// import '../public/css/main.css';
// import '../public/css/orange.css';

// plugins
// import '../public/css/plugins/chosen/chosen.css';
// import '../public/css/plugins/spinner/jquery.bootstrap-touchspin.css';
// import '../public/css/plugins/calendar/pignose.calendar.css';
// import '../public/css/plugins/calendar/cal-style.css';

import App from './App.vue';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
});

console.log('Inside app');
