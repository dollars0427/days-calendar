<template>
  <div id="lfs-calendar">
    <CalendarHeader :weekdays="weekdays" :customFunction="customFunction"></CalendarHeader>
  </div>
</template>

<script>
import CalendarHeader from './Header.vue';

export default {
  props:{
    'weekdays':{
      'type': Array,
      'default': function(){
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return weekdays;
      }
    },
    'customFunction':{
      type: Function
    }
  },
  components:{
    CalendarHeader
  },
}
</script>
