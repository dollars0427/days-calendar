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

export default {
  props:{
    'defaultStart': String,
    'getYearMonth': Function
  },
  created: function(){
    this.setDate(this.defaultStart);
  },
  data: function(){
    return {
      'year': moment().year(),
      'month': moment().month(),
      'monthName': moment().format('MMM'),
    }
  },
  methods: {
    setDate: function(date){
      date = moment(date);
      const month = date.month();
      const monthName = date.format('MMM');
      const year = date.year();
      this.date = date;
      this.month = month;
      this.monthName = monthName;
      this.year = year;
      this.getYearMonth(this.year, this.month);
    },
    nextDate: function () {
      const date = this.date.add(1, 'M');
      this.setDate(date);
    },
    prevDate: function(){
      const date = this.date.subtract(1, 'M');
      this.setDate(date);
    },
  },
}
</script>
