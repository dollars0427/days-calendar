<template>
    <div id="calendar-header">
      <span class="month">{{ month }}</span>
      <span class="year">{{ year }}</span>
      </div>
</template>

<script>
import moment from 'moment';
const month = moment().month();
const year = moment().year();

export default {
  data: function(){
    const data  = {'month': month, 'year': year}
    return data;
  }
}
</script>
