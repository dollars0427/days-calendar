<template>
    <div id="calendar-body">
      <ul class="days">
        <li v-for="day in days">
          {{ day }}
        </li>
      </ul>
    </div>
</template>

<script>
function getEndDays(year, month){
  const date = new Date(year, month, 0);
  const endDay = date.getDate();
  return endDay;
}

export default {
  props: ['year', 'month'],
  data: function(){
    const data  = {'days': getEndDays(this.year, this.month)}
    return data;
  }
}
</script>
