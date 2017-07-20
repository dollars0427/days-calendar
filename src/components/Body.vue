<template>
  <div id="calendar-body">
    <ul class="weekdays">
      <li class="weekday" v-for="weekday in weekdays">
        {{weekday}}
      </li>
    </ul>

    <ul class="days">
      <li class="day" v-for="day in days">
        <span v-bind:class="{'last-month': day.lastMonth}">{{day.number}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

function renderCalendar(year, month){
  const days = [];
  const date = new moment().set({year, month, 'date': 1}).startOf('day');
  const lastSunday = new moment().set({year, month, 'date': 1}).day('Sunday').startOf('day');
  const additonDays = date.diff(lastSunday, 'days') -1;

  if(additonDays !== -1){
    days.push({number: lastSunday.date(), lastMonth: true});
    for(let i = additonDays; i !== 0; i--){
      lastSunday.add(1, 'days');
      const day = {number:lastSunday.date(), lastMonth: true};
      days.push(day);
    }
  }

  const monthLength = date.endOf('month').date();

  for(let i = 1; i <= monthLength; i++){
    const day = {number: i, lastMonth: false};
    days.push(day);
  }
  return days;
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default {
  props: ['year', 'month'],
  watch: {
    year: function(val){
      this.days = renderCalendar(this.year, this.month);
    },
    month: function(val){
      this.days = renderCalendar(this.year, this.month);
    }
  },
  data: function(){
    return {
      'weekdays': weekdays,
      'days': renderCalendar(this.year, this.month)
    };
  }
}
</script>
