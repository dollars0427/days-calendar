<template>
  <div class="calendar-wrapper">
    <div id="calendar-header">
      <span class="prev" v-on:click="prevDate">&#10094;</span>
      <span class="next" v-on:click="nextDate">&#10095;</span>
      <span class="month">{{ monthName }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <CalendarBody :weekdays="weekdays" :year="year" :month="month"></CalendarBody>
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
  props:{
    'weekdays':Array,
    'customFunction': Function
  },
  components:{
    CalendarBody
  },
  data: function(){
    const data  = {'month': month , 'monthName': monthName, 'year': year}
    return data;
  },
  methods: {
    nextDate: function () {
      date.add(1, 'M');
      this.year = date.year();
      this.month = date.month();
      this.monthName = moment().month(this.month).format('MMM');
    },

    prevDate: function(){
      date.subtract(1, 'M');
      this.year = date.year();
      this.month = date.month();
      this.monthName = moment().month(this.month).format('MMM');
    },
  },
}
</script>
