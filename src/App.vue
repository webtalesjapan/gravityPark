<template>
  <div>
    <!-- Header Section Start -->
    <header id="hero-area">
      <div id="header" />
    </header>
    <!-- Header Section End -->

    <!-- Navigation Menu Start -->
    <section id="navigation" />
    <!-- Navigation Menu End -->

    <!-- Main Content Start -->
    <div class="booking-panes">
      <div class="left-form col-md-9 col-sm-12">
        <div class="text-center mb-4 mt-5 pt-5">
          <h1 class="head-title d-inline-block m-4 pt-2 text-orange font-weight-bold">
            Book with Gravity Park
          </h1><br>
          <h5 class="head-title d-inline-block pt-2 text-center">
            Feel Gravity like never before - Book with us in just few simple steps !
          </h5>
        </div>

        <!-- acitivity section -->
        <div id="save_activity">
          <div class="row mt-0" style="padding-top: 0; padding-bottom: 40px;">
            <div class="container">
              <div class="book-form justify-content-md-center mb-10">
                <div
                  v-show="activeSection === 0"
                  id="select-activity"
                >
                  <h5 class="display-6 text-orange mb-4">
                    Select Activity
                  </h5><br>
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
                    </select>
                    <div class="display_price">
                      <div>
                        <h5 class="display-6 text-orange" style="margin-bottom: 0;">Price</h5><br>
                        <p> Price for the above selected Activity is :-</p>
                        <table class="list-group list-group-flush">
                          <tbody class="list-group-item justify-content-between text-18">
                          <tr class="d-flex justify-content-between">
                            <td class="font-weight-bold">Adults</td>
                            <td class="font-weight-bold">3000 Yen</td>
                          </tr>
                          <tr class="d-flex justify-content-between">
                            <td class="font-weight-bold">Students</td>
                            <td class="font-weight-bold">4000 Yen </td>
                          </tr>
                          <tr class="d-flex justify-content-between">
                            <td class="font-weight-bold">Others</td>
                            <td class="font-weight-bold">2000 Yen</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
                <div
                  v-show="activeSection === 1"
                  id="select-number-people"
                >
                  <h5 class="display-6 text-orange mb-4">
                    Number of people
                  </h5><br>
                  <div
                    v-for="(userType,key) in validUserTypes"
                    :key="key"
                    class="form-group"
                  >
                    <label class="lead">
                      {{ userType.label }}
                    </label><br>
                    <label class="text-orange lead">
                      ¥ {{ selectedActivityPrices[userType.type] }}
                    </label><br>
                    <input
                      :id="userType.type"
                      v-model="selectedPeople[userType.type]"
                      type="text"
                      :name="userType.type"
                    >
                  </div>
                  <div class="col-sm-12 text-center">
                    <a
                      v-show="canSelectPeople"
                      class="btn btn-orange rounded"
                      @click="onSelectPeople"
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
                <h5 class="display-6 text-orange mb-4">
                  Select the Date
                </h5><br>
                <div class="col-sm-12 mb-4">
                  <div class="calendar" />
                  <div
                    v-show="!!selectedDate"
                    class="box"
                  >
                    You selected <span> {{ selectedDate && selectedDate.format("dddd, MMMM Do YYYY") }} </span>
                  </div>
                </div>
                <div class="col-sm-12 text-center">
                  <a
                    class="btn btn-orange rounded"
                    @click="onCalendarBack"
                  >
                    Back
                  </a>
                  <a
                    v-show="!!selectedDate"
                    class="btn btn-orange rounded"
                    @click="onSelectDate"
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
                <h5 class="display-6 text-orange mb-4">
                  {{ selectedDate && selectedDate.format("Do MMMM YYYY") }}
                </h5><br>
                <small class="lead">
                  Select time
                </small>
                <div class="col-sm-12 mb-4">
                  <table class="time-calendar list-group list-group-flush">
                    <tbody class="list-group-item justify-content-between">
                      <tr
                        v-for="time in availableActivitySchedule"
                        :key="time"
                        class="d-flex justify-content-between lead font-weight-bold"
                      >
                        <td>{{ formatTime(time) }}</td>
                        <td>
                          <a
                            class="btn btn-orange rounded"
                            @click="onSelectTime(time)"
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
                    class="btn btn-orange rounded"
                    @click="onTimeBack"
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
                <h5 class="display-6 text-orange mb-4">
                  Your Details
                </h5><br>
                <div class="form-group">
                  <label class="lead">
                    First Name
                  </label><br>
                  <input
                    id="first-name"
                    v-model="formDetails.firstName"
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
                    v-model="formDetails.lastName"
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
                    v-model="formDetails.email"
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
                    v-model="formDetails.phone"
                    type="number"
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
                    v-model="formDetails.special"
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
                          v-model="formDetails.termsCheck"
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
                  <a
                    class="btn btn-orange rounded"
                    @click="onFormBack"
                  >
                    Back
                  </a>
                  <button
                    id="submit"
                    class="btn btn-common"
                    type="submit"
                    :disabled="!formDetails.termsCheck && 'disabled'"
                    @click.prevent="onSubmitForm"
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
                TOTAL ¥ {{ totalCost }}
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
          <li
            v-show="selectedActivity.id"
            class="list-group-item"
          >
            <div class="row d-flex justify-content-between lead">
              <div class="col-sm-6">
                {{ selectedActivity.name }}
              </div>
              <!--<div class="col-sm-6 pull-right">-->
              <!--¥ 0.00-->
              <!--</div>-->
            </div>
          </li>
          <li
            v-if="selectedPeople.adults"
            class="list-group-item"
          >
            <div class="row d-flex justify-content-between lead">
              <div class="col-sm-6">
                Adults
              </div>
              <div class="col-sm-6 pull-right">
                ¥ {{ activityCosts.adults }}
              </div>
            </div>
          </li>
          <li
            v-if="selectedPeople.students"
            class="list-group-item"
          >
            <div class="row d-flex justify-content-between lead">
              <div class="col-sm-6">
                Students
              </div>
              <div class="col-sm-6 pull-right">
                ¥ {{ activityCosts.students }}
              </div>
            </div>
          </li>
          <li
            v-if="selectedPeople.children"
            class="list-group-item"
          >
            <div class="row d-flex justify-content-between lead">
              <div class="col-sm-6">
                Children
              </div>
              <div class="col-sm-6 pull-right">
                ¥ {{ activityCosts.children }}
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
                  ¥ {{ totalCost }}
                </div>
              </div>
            </h6>
          </li>
        </ul>
      </div>
    </div>
    <!-- Main Content End -->

    <!-- cart -->
    <div
      id="cart"
      class="col-sm-3 bg-gray-light d-none d-md-block"
    >
      <div class="m-4 text-center">
        <h2 class="head-title d-inline-block font-weight-bold text-orange-bright">
          CART
        </h2>
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-show="selectedActivity.id"
          class="list-group-item"
        >
          <div class="row d-flex justify-content-between lead">
            <div class="col-sm-6">
              {{ selectedActivity.name }}
            </div>
            <!--<div class="col-sm-6 pull-right">-->
            <!--¥ 0.00-->
            <!--</div>-->
          </div>
        </li>
        <li
          v-if="selectedPeople.adults"
          class="list-group-item"
        >
          <div class="row d-flex justify-content-between lead">
            <div class="col-sm-6">
              Adults
            </div>
            <div class="col-sm-6 pull-right">
              ¥ {{ activityCosts.adults }}
            </div>
          </div>
        </li>
        <li
          v-if="selectedPeople.students"
          class="list-group-item"
        >
          <div class="row d-flex justify-content-between lead">
            <div class="col-sm-6">
              Students
            </div>
            <div class="col-sm-6 pull-right">
              ¥ {{ activityCosts.students }}
            </div>
          </div>
        </li>
        <li
          v-if="selectedPeople.children"
          class="list-group-item"
        >
          <div class="row d-flex justify-content-between lead">
            <div class="col-sm-6">
              Children
            </div>
            <div class="col-sm-6 pull-right">
              ¥ {{ activityCosts.children }}
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
                ¥ {{ totalCost }}
              </div>
            </div>
          </h6>
        </li>
      </ul>
    </div>

    <!-- Footer Section Start -->
    <footer
      id="footer"
      class="col-md-9 px-0"
    />
    <!-- Footer Section End -->

    <!-- Go To Top Link -->
    <a
      href="#"
      class="back-to-top"
    >
      <i class="fa fa-arrow-up" />
    </a>

    <!-- Loader Start -->
    <div id="loader">
      <div class="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
    </div>
    <!-- Loader End -->
  </div>
</template>

<script>
/* eslint-disable max-len */

// TODO : Placeholder for no time slots available.
// TODO : Form submitted screen.
// TODO : Decide a mechanism for showing seats left.
// TODO : Fix selectedPeople and activityCosts initial values.

import firebase from 'firebase';
import { URLS } from './urls';

const FIREBASE_CONFIG = require('../firebaseConfig');

firebase.initializeApp(FIREBASE_CONFIG);

const database = firebase.database();
const { $, moment } = window;

const defaultLocationId = '5c7246ae2fafeb33a56a3709'; // Default location id for now.

export default {
  name: 'App',
  data() {
    return {
      selectedActivity: {
        id: '',
      },
      selectedLocation: defaultLocationId,
      activities: [],
      activitiesSchedule: {},
      activitiesPrices: {},
      activeSection: 0,
      selectedActivityPrices: {},
      selectedPeople: {
        adults: 0,
        children: 0,
      },
      activityCosts: {
        adults: 0,
        children: 0,
      },
      selectedAdults: 0,
      selectedDate: null,
      canSelectPeople: false,
      availableActivitySchedule: [],
      selectedTime: '',
      formDetails: {},
      userTypes: [],
    };
  },
  computed: {
    totalCost() {
      const values = Object.values(this.activityCosts);
      return values.length ? values.reduce((a, b) => a + b, 0) : 0; // FIXME : Assuming a single activity selection for now.
    },
    validUserTypes() {
      return this.userTypes.filter((val) => {
        const price = this.selectedActivityPrices[val.type];
        return price != null;
      });
    },
  },
  mounted() {
    const self = this;
    const activitiesRef = database.ref('activities');
    activitiesRef.once('value', (snapshot) => {
      this.activities = snapshot.toJSON();
      this.$nextTick(() => {
        const $activity = $('#activity');
        $activity.trigger('chosen:updated');
        $activity.chosen().change(this.onSelectActivity);
      });
    });

    const activitiesSchedule = database.ref('activity_schedule');
    activitiesSchedule.once('value', (snapshot) => {
      this.activitiesSchedule = snapshot.toJSON();
    });

    const activitiesPrices = database.ref('activity_prices');
    activitiesPrices.once('value', (snapshot) => {
      this.activitiesPrices = snapshot.toJSON();
    });

    const userTypes = database.ref('user_types');
    userTypes.once('value', (snapshot) => {
      this.userTypes = snapshot.val();
    });

    // Calendar
    $(() => {
      $('.calendar').pignoseCalendar({
        minDate: moment().format('YYYY-MM-DD'),
        select(date) {
          /**
           * @params this Element
           * @params date moment[]
           * @params context PignoseCalendarContext
           * @returns void
           */

          const [selectedDate] = date;
          self.selectedDate = null;
          if (selectedDate && selectedDate.isSameOrAfter(moment(Date.now()))) { // TODO: Refine the validation. Specially for current date check
            self.selectedDate = selectedDate;
          }
        },
      });
    });
  },
  methods: {
    onSelectActivity(e) {
      [this.selectedActivity] = Object.values(this.activities).filter(val => val.id === e.target.value);
      this.selectedActivityPrices = this.activitiesPrices[this.selectedActivity.id][this.selectedLocation];
      this.selectedActivitySchedule = this.activitiesSchedule[this.selectedActivity.id][this.selectedLocation];
      this.activeSection = 1; // Go to choose number of people.

      this.$nextTick(() => {
        this.validUserTypes.forEach((val) => {
          $(`input[name=${val.type}]`).TouchSpin({
            min: 0,
            max: 20,
            step: 1,
          }).on('touchspin.on.startspin', (event) => {
            this.selectedPeople[val.type] = parseInt(event.target.value, 10) || 0;
            this.onSelectPeopleCount();
          });
        });
      });
    },
    onSelectPeopleCount() {
      const { selectedActivityPrices } = this;
      this.validUserTypes.forEach(({ type }) => {
        if (this.selectedPeople[type]) {
          this.activityCosts[type] = parseInt(selectedActivityPrices[type], 10) * parseInt(this.selectedPeople[type], 10);
        }
      });
      const selectedPeople = Object.values(this.selectedPeople).reduce((a, b) => a + b);
      this.canSelectPeople = !!selectedPeople;
    },
    // onSelectLocation(e) {
    //
    // },
    onSelectPeople() {
      this.activeSection = 2; // Go to calendar
    },
    onCalendarBack() {
      this.activeSection = 1; // Go to choose number of people.
    },
    onSelectDate() {
      const { selectedActivitySchedule: activitySchedule } = this;
      const bookedActivitesRef = database.ref(`booked_activities/${this.selectedActivity.id}/${this.selectedLocation}/${this.selectedDate.valueOf()}`);
      bookedActivitesRef.once('value', (snapshot) => {
        const snapshotVal = snapshot.toJSON();
        const selectedPeople = Object.values(this.selectedPeople).reduce((a, b) => a + b);
        if (snapshotVal) {
          this.availableActivitySchedule = Object.values(activitySchedule).filter((val) => {
            const bookings = snapshotVal[val];
            let bookedPeople = 0;
            if (bookings) {
              Object.values(bookings).forEach((booking) => {
                if (booking.people) {
                  bookedPeople += Object.values(booking.people).reduce((a, b) => a + b, 0);
                }
              });
            }
            return selectedPeople <= this.selectedActivity.maxPeople - bookedPeople;
          });
        } else {
          this.availableActivitySchedule = Object.values(activitySchedule);
        }
        this.activeSection = 3; // Go to choose time.
      });
    },
    onTimeBack() {
      this.activeSection = 2; // Go to calendar
    },
    onSelectTime(time) {
      this.selectedTime = time;
      this.activeSection = 4; // Go to form.
    },
    onFormBack() {
      this.activeSection = 3; // Go to choose time.
    },
    onSubmitForm() {
      // Add time to booked times.
      const finalDetails = {
        name: `${this.formDetails.firstName} ${this.formDetails.lastName}`,
        phoneNumber: this.formDetails.phone,
        specialRequests: this.formDetails.special,
        activityName: this.selectedActivity.name,
        totalCost: this.totalCost,
        activityDate: this.selectedDate.format('Do MMMM YYYY'),
        activityDateString: this.selectedDate.valueOf(),
        activityTimeString: this.selectedTime,
        activityTime: this.formatTime(this.selectedTime),
        email: this.formDetails.email,
        people: JSON.stringify(this.selectedPeople),
        activityId: this.selectedActivity.id,
        location: this.selectedLocation,
      };

      $.post(URLS.booking_form_submit, finalDetails, (res) => {
        if (Number(res.response.status) === 200) {
          console.log('Submit Success');
          console.log(res);
          this.activeSection = 5; // Form Submitted Page.
        } else {
          console.log('Submit Failed');
        }
      });
    },
    formatTime(val) {
      const time = val.toString().padStart(4, '0');
      const hrValue = Number([time[0], time[1]].join(''));
      const amPm = hrValue < 12 ? 'AM' : 'PM';
      const hrValueConverted = hrValue % 12 || 12;
      return [hrValueConverted, ':', time[2], time[3], ' ', amPm].join('');
    },
  },
};
</script>

<style lang="scss">

.booking-panes {
  display: flex;
}

</style>
