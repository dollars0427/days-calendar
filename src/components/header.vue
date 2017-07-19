<template>
  <div class="calendar-wrapper">
    <div id="calendar-header">
      <span class="month">{{ monthName }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <CalendarBody :year="year" :month="month"></CalendarBody>
  </div>
</template>

<script>
import moment from 'moment';
import CalendarBody from './Body.vue';

const date = moment();
const month = moment().month();
const monthName = moment().format('MMM');
const year = moment().format('YYYY');

export default {
  components:{
    CalendarBody
  },
  data: function(){
    const data  = {'month': month , 'monthName': monthName, 'year': year}
    return data;
  }
}
</script>
