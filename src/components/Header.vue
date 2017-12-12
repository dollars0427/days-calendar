<template>
  <div class="calendar-wrapper">
    <div class="calendar-header">
      <span tabindex="0" class="prev" role="button" :aria-label="i18nText.prev[langcode]"
      v-on:click="prevDate" v-on:keyup.enter="prevDate">&#10094;
    </span>
      <span tabindex="0" role="button" class="next" :aria-label="i18nText.next[langcode]"
      v-on:click="nextDate" v-on:keyup.enter="nextDate">&#10095;
      </span>
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
          ll: 'MMM YYYY',
        }
      });
      break;

      default:
      moment.updateLocale(langcode, {
        longDateFormat:{
          ll: 'YYYY年 MMM',
        }
      });
    }
    this.setDate(this.defaultStart);
  },
  data: function(){
    return {
      i18nText: {
        prev: {
          'en': 'Previous Month',
          'zh-hk': '上一月',
          'zh-tw': '上月',
          'zh-cn': '上月',
        },
        next: {
          'en': 'Next Month',
          'zh-hk': '下一月',
          'zh-tw': '下月',
          'zh-cn': '下月',
        },
      },
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
