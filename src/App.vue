<template>
  <div>
    <input
      id="navcheck"
      type="checkbox"
      role="button"
      title="menu"
    >
    <label
      for="navcheck"
      aria-hidden="true"
      title="menu"
    >
      <span class="burger">
        <span class="bar">
          <span class="visuallyhidden">
            Menu
          </span>
          <div
            id="menu-circle"
            style="opacity: 0; transform-origin: 50% 50% 0px; transform: matrix(0, 0, 0, 0, 0, 0);"
          />
        </span>
      </span>
    </label>
    <nav id="menu">
      <a href="#">
        Lorem.
      </a>
      <a href="#">
        Nesciunt!
      </a>
      <a href="#">
        Magnam.
      </a>
      <a href="#">
        Ipsum.
      </a>
      <a href="#">
        Voluptatem.
      </a>
      <a href="#">
        Quibusdam.
      </a>
    </nav>
    <div class="border-bottom">
      <!-- container -->
      <div class="row space-100">
        <div class="col-sm-12">
          <div class="contents text-center">
            <img
              class="img-fluid d-inline-block py-4"
              src="img/logo_trans.png"
              width="70vh"
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Header Section End -->

    <!-- Main Content Start -->
    <div class="row">
      <div class="col-md-9 col-sm-12">
        <div class="text-center mb-4">
          <h1 class="head-title d-inline-block m-4 pt-2 text-orange font-weight-bold">
            Book with Gravity Park
          </h1><br>
          <small class="lead mx-4">
            It only takes a few minutes to book the best thing you’ve ever
            done!
          </small><br>
          <small class="lead mx-4">
            If you are an agent, <a href="#">
              Click here
            </a> to make a booking
            .
          </small>
        </div>

        <!-- acitivity section -->
        <div id="save_activity">
          <div class="row p-4">
            <div class="container">
              <div class="book-form justify-content-md-center mb-10">
                <div
                  v-show="activeSection === 0"
                  id="select-activity"
                >
                  <h3 class="text-orange">
                    Select Activity
                  </h3><br>
                  <div style="margin-bottom: 40px;">
                    <select
                      id="activity"
                      class="chosen-select form-control form-control-chosen mt-4"
                      data-placeholder="Activity you would like to do"
                    >
                      <option />
                      <option
                        v-for="activity in activities"
                        :key="activity.id"
                        :value="activity.id"
                      >
                        {{ activity.name }}
                      </option>
                      <!--<option>Option One</option>-->
                      <!--<option>Option Two</option>-->
                      <!--<option>Option Three</option>-->
                      <!--<option>Option Four</option>-->
                      <!--<option>Option Five</option>-->
                    </select>
                  </div>
                </div>
                <div
                  v-show="activeSection === 1"
                  id="select-number-people"
                >
                  <h3 class="text-orange">
                    Number of People
                  </h3><br>
                  <div class="form-group">
                    <label class="lead">
                      Adults - 14 - 60 Years
                    </label><br>
                    <label class="text-orange lead">
                      ¥ 2.500
                    </label><br>
                    <input
                      id="adults"
                      type="text"
                      value="1"
                      name="adults"
                    >
                  </div>
                  <div class="form-group">
                    <label class="lead">
                      Students
                    </label><br>
                    <label class="text-orange lead">
                      ¥ 2.500
                    </label><br>
                    <input
                      id="students"
                      type="text"
                      value="1"
                      name="students"
                    >
                  </div>
                  <div class="form-group">
                    <label class="lead">
                      Seniors
                    </label><br>
                    <label class="text-orange lead">
                      ¥ 2.500
                    </label><br>
                    <input
                      id="seniors"
                      type="text"
                      value="1"
                      name="seniors"
                    >
                  </div>
                  <div class="col-sm-12 text-center">
                    <a
                      href="book_date.html"
                      class="btn btn-orange rounded"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Date section -->
        <div
          v-show="activeSection === 2"
          id="save_date"
        >
          <div class="row mt-0 p-4">
            <div class="container">
              <div class="book-form justify-content-md-center mb-10">
                <h3 class="text-orange">
                  Select the Date
                </h3><br>
                <div class="col-sm-12 mb-4">
                  <div class="calendar" />
                  <div class="box">
                    You selected <span> DATE </span>
                  </div>
                </div>
                <div class="col-sm-12 text-center">
                  <a
                    href="book_date.html"
                    class="btn btn-orange rounded"
                  >
                    Back
                  </a>
                  <a
                    href="book_time.html"
                    class="btn btn-orange rounded"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- time section -->
        <div
          v-show="activeSection === 3"
          id="save_time"
        >
          <div class="row mt-0 p-4">
            <div class="container">
              <div class="book-form justify-content-md-center text-center mb-4">
                <h3 class="text-orange">
                  5th OCTOBER 2018
                </h3><br>
                <small class="lead">
                  Select time
                </small>
                <div class="col-sm-12 mb-4">
                  <table class="time-calendar list-group list-group-flush">
                    <tbody class="list-group-item justify-content-between">
                      <tr class="d-flex justify-content-between lead font-weight-bold">
                        <td>9:30 am</td>
                        <td>
                          <a
                            href="book_merchandise.html"
                            class="btn btn-orange rounded"
                          >
                            BOOK
                          </a>
                        </td>
                      </tr>
                      <tr class="d-flex justify-content-between lead font-weight-bold">
                        <td>9:30 am</td>
                        <td>
                          <a
                            href="book_merchandise.html"
                            class="btn btn-orange rounded"
                          >
                            BOOK
                          </a>
                        </td>
                      </tr>
                      <tr class="d-flex justify-content-between lead font-weight-bold">
                        <td>9:30 am</td>
                        <td>
                          <a
                            href="book_merchandise.html"
                            class="btn btn-orange rounded"
                          >
                            BOOK
                          </a>
                        </td>
                      </tr>
                      <tr class="d-flex justify-content-between lead font-weight-bold">
                        <td>9:30 am</td>
                        <td>
                          <a
                            href="book_merchandise.html"
                            class="btn btn-orange rounded"
                          >
                            BOOK
                          </a>
                        </td>
                      </tr>
                      <tr class="d-flex justify-content-between lead font-weight-bold">
                        <td>9:30 am</td>
                        <td>
                          <a
                            href="book_merchandise.html"
                            class="btn btn-orange rounded"
                          >
                            BOOK
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-sm-12 text-center">
                  <a
                    href="book_date.html"
                    class="btn btn-orange rounded"
                  >
                    Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          v-show="activeSection === 4"
          id="book_form"
        >
          <div class="contact-form">
            <form
              id="contactForm"
              class="container"
            >
              <div class="book-form justify-content-md-center mb-4">
                <h3 class="text-orange">
                  Your Details
                </h3><br>
                <div class="form-group">
                  <label class="lead">
                    First Name
                  </label><br>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Your First Name"
                    class="form-control"
                    name="lname"
                    required
                    data-error="Please enter your first name"
                  >
                  <div class="help-block with-errors" />
                </div>
                <div class="form-group">
                  <label class="lead">
                    Last Name
                  </label><br>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Your Last Name"
                    class="form-control"
                    name="fname"
                    required
                    data-error="Please enter your last name"
                  >
                  <div class="help-block with-errors" />
                </div>
                <div class="form-group">
                  <label class="lead">
                    Email Address
                  </label><br>
                  <input
                    id="email"
                    type="text"
                    placeholder="Your Email Address"
                    class="form-control"
                    name="email"
                    required
                    data-error="Please enter your email"
                  >
                  <div class="help-block with-errors" />
                </div>
                <div class="form-group">
                  <label class="lead">
                    Phone Number
                  </label><br>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    class="form-control"
                    required
                    data-error="Please enter your phone number"
                  >
                  <div class="help-block with-errors" />
                </div>
                <div class="form-group">
                  <label class="lead">
                    Any Special Requirements ?
                  </label><br>
                  <textarea
                    id="message"
                    class="form-control"
                    placeholder="Any Special Requirements"
                    rows="1"
                    data-error=""
                  />
                  <div class="help-block with-errors" />
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <form>
                      <div>
                        <input
                          id="check"
                          type="checkbox"
                          name="check"
                          value=""
                        >
                        <label for="check">
                          <span><!-- This span is needed to create the "checkbox" element --></span> I accept the Terms and Conditions and Privacy Policies
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="submit-button text-center">
                  <button
                    id="submit"
                    class="btn btn-common"
                    type="submit"
                  >
                    Place Order
                  </button>
                  <div
                    id="msgSubmit"
                    class="h3 text-center hidden"
                  />
                  <div class="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Small Screen Cart -->
        <div class="row bg-orange fixed-footer">
          <div class="d-md-none col-sm-12">
            <h6 class="text-gray-dark pt-4 pb-4 mb-0 ">
              <div class="lead font-weight-bold text-center">
                TOTAL ¥ 0.00
              </div>
            </h6>
          </div>
        </div>
      </div>
      <div class="col-sm-3 bg-gray-light d-none d-md-block">
        <div class="m-4 text-center">
          <h2 class="head-title d-inline-block font-weight-bold text-orange-bright">
            CART
          </h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row d-flex justify-content-between lead">
              <div class="col-sm-6">
                abc Ticket
              </div>
              <div class="col-sm-6 pull-right">
                ¥ 0.00
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <h6 class="text-orange-bright">
              <div class="row d-flex justify-content-between lead font-weight-bold">
                <div class="col-sm-6">
                  TOTAL
                </div>
                <div class="col-sm-6 pull-right">
                  ¥ 0.00
                </div>
              </div>
            </h6>
          </li>
        </ul>
      </div>
    </div>
    <!-- Main Content End -->

    <!-- Footer Section Start -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="social-icons">
              <ul>
                <li class="facebook">
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="twitter">
                  <a href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="google-plus">
                  <a href="#">
                    <i class="fa fa-google-plus" />
                  </a>
                </li>
                <li class="linkedin">
                  <a href="#">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li class="pinterest">
                  <a href="#">
                    <i class="fa fa-pinterest" />
                  </a>
                </li>
                <li class="dribbble">
                  <a href="#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="site-info">
              <p>
                All copyrights reserved &copy; 2017 - Designed & Developed by <a
                  rel="nofollow"
                  href="https://uideck.com"
                >
                  UIdeck
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Section End -->

    <!-- Go To Top Link -->
    <a
      href="#"
      class="back-to-top"
    >
      <i class="lnr lnr-arrow-up" />
    </a>

    <!-- loader -->
    <div id="loader">
      <div class="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const $ = window.$;

export default {
  name: 'App',
  data() {
    return {
      selectedActivity: '',
      activities: [],
      activitiesSchedule: {},
      activitiesPrices: {},
      activeSection: 0,
    };
  },
  mounted() {
    const activitiesRef = database.ref('activities');
    activitiesRef.once('value', (snapshot) => {
      this.activities = snapshot.toJSON();
      this.$nextTick(() => {
        $('#activity').trigger('chosen:updated');
        $('#activity').chosen().change(this.onSelectActivity);
      });
    });

    const activitiesSchedule = database.ref('activity_schedule');
    activitiesSchedule.once('value', (snapshot) => {
      this.activitiesSchedule = snapshot.toJSON();
    });

    const activitiesPrices = database.ref('activity_prices');
    activitiesPrices.once('value', (snapshot) => {
      this.activitiesPrices = activitiesPrices.toJSON();
    });
  },
  methods: {
    onSelectActivity(e) {
      console.log('On select activity', e);
      console.log('Selected id: ', e.target.value);
      console.log('Activity Name : ', Object.values(this.activities).filter(val => val.id === e.target.value)[0].name);
      this.activeSection = 1; // Go to choose number of people.
    },
    // onSelectLocation(e) {
    //
    // },
    // onSelectPerson() {
    //
    // },
  },
};

// window.onSelectActivity = () => {
//   console.log('On select activity');
// };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
