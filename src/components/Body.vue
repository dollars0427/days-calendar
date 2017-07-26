<template>
  <div id="calendar-body">
    <div class="weekdays">
        <div class="weekday" v-for="weekday in weekdays">
          <div>{{weekday}}</div>
        </div>
      </ul>
    </div>

    <div class="days">
      <div class="day" v-for="day in days">
        <Modal :day="day"></Modal>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Modal from './Modal.vue';

function renderCalendar(year, month, customFunction){
  let days = [];
  const monthStart = new moment().set({year, month, 'date': 1}).startOf('day');
  const lastSunday = new moment().set({year, month, 'date': 1}).day('Sunday').startOf('day');
  const additonDays = monthStart.diff(lastSunday, 'days') -1;

  if(additonDays !== -1){
    days.push({ number: lastSunday.date(), date: lastSunday, class:['last-month'] });
    for(let i = additonDays; i !== 0; i--){
      const date = lastSunday.add(1, 'days');
      const day = {number:date.date(), date, class:['last-month'] };
      days.push(day);
    }
  }

  const monthLength = monthStart.endOf('month').date();

  for(let i = 1; i <= monthLength; i++){
    const date = new moment().set({year, month, 'date': i}).startOf('day');
    const day = {number: i, date, class:[]};
    days.push(day);
  }

  //Pass rendered calendar to customFunction

  if(customFunction){
    days = customFunction(days);
  }

  return days;
}

export default {
  props: {
    'year': Number,
    'month': Number,
    'weekdays': Array,
    'customFunction': Function
  },
  components:{
    Modal
  },
  watch: {
    year: function(val){
      this.days = renderCalendar(this.year, this.month, this.customFunction);
    },
    month: function(val){
      this.days = renderCalendar(this.year, this.month, this.customFunction);
    }
  },
  data: function(){
    return {
      'days': renderCalendar(this.year, this.month, this.customFunction)
    };
  }
}
</script>
