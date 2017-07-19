<template>
  <div class="calendar-wrapper">
    <div id="calendar-header">
      <span class="prev">&#10094;</span>
      <span class="next" v-on:click="nextDate">&#10095;</span>
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
const year = moment().year();

export default {
  components:{
    CalendarBody
  },
  data: function(){
    const data  = {'month': month , 'monthName': monthName, 'year': year}
    return data;
  },
  methods: {
    nextDate: function () {
      this.month += 1;

      if(this.month === 12){
        this.year += 1;
        this.month = 0;
      }
      this.monthName = moment().month(this.month).format('MMM');
    }
  },
}
</script>
