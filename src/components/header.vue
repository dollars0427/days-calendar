<template>
    <div id="calendar-header">
      <span class="month">{{ month }}</span>
      <span class="year">{{ year }}</span>
      </div>
</template>

<script>
import moment from 'moment';
const date = moment();
const month = moment().format('MMM');
const year = moment().format('YYYY');

export default {
  data: function(){
    const data  = {'month': month, 'year': year}
    return data;
  }
}
</script>
