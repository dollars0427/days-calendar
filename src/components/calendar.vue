<template>
  <div id="lfs-calendar">
    <CalendarHeader></CalendarHeader>
    <div id="calendar-body">
      <ul id="days">
        <li v-for="day in days">
          {{ day }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CalendarHeader from './header.vue';

function getEndDays(year, month){
  const date = new Date(year, month, 0);
  const endDay = date.getDate();
  return endDay;
}

export default {
  components:{
    CalendarHeader
  },
  data: function(){
    const data  = {'days': getEndDays(2017, 2)}
    return data;
  }
}
</script>
