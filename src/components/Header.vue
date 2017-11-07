<template>
  <div class="calendar-wrapper">
    <div class="calendar-header">
      <span class="prev" v-on:click="prevDate">&#10094;</span>
      <span class="next" v-on:click="nextDate">&#10095;</span>
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
    switch(langcode){
      case 'en':
      moment.updateLocale(langcode, {
        longDateFormat:{
          LL: 'MMM YYYY',
        }
      });
      break;

      default:
      moment.updateLocale(langcode, {
        longDateFormat:{
          LL: 'YYYY年 MMM',
        }
      });
    }
    this.setDate(this.defaultStart);
  },
  data: function(){
    return {
      'formattedDate': moment().format('LL'),
    }
  },
  methods: {
    setDate: function(currentDate){
      currentDate = moment(currentDate);
      const formattedDate = currentDate.format('LL');
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
