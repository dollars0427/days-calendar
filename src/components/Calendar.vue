<template>
  <div id="lfs-calendar">
    <CalendarHeader :weekdays="weekdays" :renderDay="renderDay" :renderDays="renderDays"></CalendarHeader>
  </div>
</template>

<style lang="sass">
@import '../css/style.scss'
</style>

<script>
import CalendarHeader from './Header.vue';

export default {
  props:{
    'weekdays':{
      'type': Array,
      'default': function(){
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekdays;
      }
    },
    'renderDay':{
      type: Function
    },
    'renderDays':{
      type: Function
    },
  },
  components:{
    CalendarHeader
  },
}
</script>
