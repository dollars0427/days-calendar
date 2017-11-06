<template>
  <div class="calendar-body">
    <div class="weekdays">
      <div class="weekday" v-for="weekday in weekdays">
        <div>{{weekday}}</div>
      </div>
    </ul>
  </div>

  <div class="days">
    <div class="day" v-for="day in days">
      <div :class="day.class" v-if="day.disabled">
        <span>{{day.number}}</span>
      </div>
      <div v-else :class="day.class" v-on:click="renderContent(day)">
        <span>{{day.number}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

function renderCalendar(year, month){
  let days = [];
  //If last sunday is not in this month, calculate how many additon day between last month to this month
  const monthStart = new moment().set({year, month, 'date': 1}).startOf('day');
  const lastSunday = new moment().set({year, month, 'date': 1}).day('Sunday').startOf('day');
  const additonDays = monthStart.diff(lastSunday, 'days') -1;

  if(additonDays !== -1){
    days.push({ number: lastSunday.date(), date: new moment(lastSunday), class:['disabled'], disabled: true });
    for(let i = additonDays; i !== 0; i--){
      const date = new moment(lastSunday.add(1, 'days'));
      const day = {number:date.date(), date, class:['disabled'], disabled: true };
      days.push(day);
    }
  }

  //Get how many days in this month, show it
  const monthLength = monthStart.endOf('month').date();

  for(let i = 1; i <= monthLength; i++){
    const date = new moment().set({year, month, 'date': i}).startOf('day');
    const day = {number: i, date, class:[]};
    days.push(day);
  }
  return days;
}

export default {
  props: {
    'langcode': String,
    'year': Number,
    'month': Number,
    'weekdays': Array,
    'renderDays': Function,
    'renderContent': Function,
  },
  methods: {
    updateCalender: function(){
      moment.locale(this.langcode);
      this.days = renderCalendar(this.year, this.month);
      if(this.renderDays){
        this.renderDays(this.year, this.month, this.days)
        .then((days) =>{
          this.days = days;
        })
        .catch(err => {
          reject(err);
        });
      }
    },
  },
  watch: {
    year: function(val){
      this.updateCalender();
    },
    month: function(val){
      this.updateCalender();
    }
  },
  data: function(){
    return {
      'days': []
    };
  }
}
</script>
