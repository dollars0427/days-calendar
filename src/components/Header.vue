<template>
  <div class="calendar-wrapper">
    <div class="calendar-header">
      <span tabindex="0" class="prev" v-on:click="prevDate" v-on:keyup.enter="prevDate">&#10094;</span>
      <span tabindex="0" class="next" v-on:click="nextDate" v-on:keyup.enter="nextDate">&#10095;</span>
      <span class="date">{{ formattedDate }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props:{
    'langcode': String,
    'defaultStart': String,
    'getYearMonth': Function
  },
  created: function(){
    const langcode = this.langcode;
    moment.locale(langcode);
    this.setDate(this.defaultStart);
  },
  data: function(){
    return {
      'formattedDate': moment().format('ll'),
    }
  },
  methods: {
    setDate: function(currentDate){
      currentDate = moment(currentDate);
      const formattedDate = currentDate.format('ll');
      const month = currentDate.month();
      const year = currentDate.year();

      this.currentDate = currentDate;
      this.formattedDate = formattedDate;
      //Pass current year and month to calendar body
      this.getYearMonth(year, month);
    },
    nextDate: function () {
      const currentDate = this.currentDate.add(1, 'M');
      this.setDate(currentDate);
    },
    prevDate: function(){
      const currentDate = this.currentDate.subtract(1, 'M');
      this.setDate(currentDate);
    },
  },
}
</script>
