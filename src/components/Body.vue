<template>
  <div id="calendar-body">
    <ul class="days">
      <li class="day" v-for="day in days">
        {{ day }}
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

function getEndDays(year, month){
  const date = moment().set({year, month});
  const endDays = date.endOf('month').date();
  return endDays;
}

export default {
  props: ['year', 'month'],
  watch: {
    year: function(val){
      this.days = getEndDays(this.year, this.month);
    },
    month: function(val){
      this.days = getEndDays(this.year, this.month);
    }
  },
  data: function(){
    return {
      'days': getEndDays(this.year, this.month)
    };
  }
}
</script>
