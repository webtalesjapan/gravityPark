// The code template below can be used on json-generator.com to generate the sample data.
const structure = [
  {
    users: [
      {
        'repeat(15)': {
          id: '{{objectId()}}',
          name: '{{firstName()}} {{surname()}}',
          email: '{{firstName()}}_{{lorem(1, "words")}}@{{lorem(1, "words")}}.com',
          sex: '{{integer(0, 1)}}',
          dob: '{{date(new Date(), new Date()).getTime()}}',
        },
      },
    ],
    user_types: [
      {
        label: 'Adults',
        type: 'adults',
      },
      {
        label: 'Children',
        type: 'children',
      },
    ],
    activities: [
      {
        'repeat(10)': {
          id: '{{objectId()}}',
          name: '{{lorem(1, "words")}}',
          durationInMinutes: '{{random(60, 75, 90, 105, 120, 150, 180)}}',
          breakTime: '{{random(15, 30, 60)}}',
          maxPeople: '{{random(15, 30, 60)}}',
        },
      },
    ],
    locations: [
      {
        'repeat(3)': {
          id: '{{objectId()}}',
          name: '{{city()}}',
        },
      },
    ],
    activity_prices(tags) {
      const obj = {};
      this.activities.forEach((activity) => {
        this.locations.forEach((location) => {
          obj[activity.id] = obj[activity] || {};
          obj[activity.id][location.id] = obj[activity.id][location.id] || {};
          this.user_types.forEach((userType) => {
            obj[activity.id][location.id][userType.type] = `${tags.integer(2000, 9000)}`;
          });
        });
      });
      return obj;
    },
    agents: [
      {
        'repeat(4)': {
          id: '{{objectId()}}',
          name: '{{firstName()}} {{surname()}}',
          company: '{{company()}}',
          email: '{{firstName()}}_{{lorem(1, "words")}}@{{lorem(1, "words")}}.com',
          phoneNumber: '+81 {{phone()}}',
          username: '{{lorem(1, "words")}}',
          password: '{{lorem(1, "words")}}',
          status: '{{integer(0, 1)}}',
          dob: '{{date(new Date(), new Date()).getTime()}}',
        },
      },
    ],
    activity_schedule(tags) {
      const obj = {};
      this.activities.forEach((act) => {
        obj[act.id] = {};
        this.locations.forEach((loc) => {
          let time = 1000;
          const timeArr = [];
          while (time <= 1800) {
            timeArr.push(time);
            time += (act.durationInMinutes + act.breakTime);
            if ((time % 100) >= 60) {
              time += 40;
            }
          }
          obj[act.id][loc.id] = timeArr;
        });
      });
      return obj;
    },
    booked_activities(tags) {
      const obj = {};
      this.activities.forEach((act) => {
        obj[act.id] = {};
        this.locations.forEach((loc) => {
          obj[act.id][loc.id] = {};
          const randomCount = Math.floor(Math.random() * 10);
          for (let i = 0; i < randomCount; i++) {
            const randomFutureDate = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
            const dateString = randomFutureDate.getTime();
            const bookedTimings = this.activity_schedule[act.id][loc.id].filter(time => !!Math.round(Math.random()));
            obj[act.id][loc.id][dateString] = {};
            bookedTimings.forEach((time) => {
              obj[act.id][loc.id][dateString][time] = `${tags.integer(0, act.maxPeople)}`;
            });
          }
        });
      });
      return obj;
    },
  },
];
