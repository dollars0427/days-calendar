<template>
  <Calendar :renderDays="renderDays"></Calendar>
</template>

<script>
import DaysCalendar from '../src/components/Calendar.vue';
import moment from 'moment';

export default {
  components: {
     Calendar: DaysCalendar
  },
  methods:{
    renderDays: function(year, month, days){
      month = month + 1;
      if(month < 10){
        month = '0' + month;
      }

      return new Promise((resolve, reject) => {
        days = days.map(function(day){
          const today = new moment().format('YYYY-MM-DD');
          const dayTime = new moment(day.date).format('YYYY-MM-DD');

          if(today === dayTime){
            day.content = 'Example: This is today!';
            day.class = 'today';
          }
          return day;
        });
        resolve(days);
      });
    },
  }
}
</script>
