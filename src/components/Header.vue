<template>
  <div class="calendar-wrapper">
    <div class="calendar-header">
      <span class="prev" v-on:click="prevDate">&#10094;</span>
      <span class="next" v-on:click="nextDate">&#10095;</span>
      <span class="month">{{ monthName }}</span>
      <span class="year">{{ year }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

const date = moment();
const month = moment().month();
const monthName = moment().format('MMM');
const year = moment().year();

export default {
  props:{
    'getYearMonth': Function
  },
  data: function(){
    const data  = {'month': month , 'monthName': monthName, 'year': year}
    return data;
  },
  created: function(){
    this.getYearMonth(this.year, this.month);
  },
  methods: {
    nextDate: function () {
      date.add(1, 'M');
      this.year = date.year();
      this.month = date.month();
      this.monthName = moment().month(this.month).format('MMM');
      this.getYearMonth(this.year, this.month);
    },

    prevDate: function(){
      date.subtract(1, 'M');
      this.year = date.year();
      this.month = date.month();
      this.monthName = moment().month(this.month).format('MMM');
      this.getYearMonth(this.year, this.month);
    },
  },
}
</script>
