<template>
  <div id="lfs-calendar">
    <CalendarHeader></CalendarHeader>
  </div>
</template>

<script>
import CalendarHeader from './Header.vue';

export default {
  props:{
    'weekdays':{
      'type': Array,
      'default': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
