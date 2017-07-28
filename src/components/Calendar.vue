<template>
  <div class="calendar-conatiner">
    <div id="days-calendar">
      <div class="calendar-wrapper">
        <CalendarHeader :getYearMonth="getYearMonth"></CalendarHeader>
        <CalendarBody :renderContent="renderContent" :renderDays="renderDays" :month="month" :year="year"></CalendarBody>
      </div>
    </div>

    <div id="calendar-modal">
      <transition name="modal">
        <div v-if="showModal">
          <div class="modal-mask" v-on:click="close">
            <div class="modal-wrapper">
              <div class="modal-container">
                <slot name="modal-content">
                  <div class="modal-header">
                    {{ day.date.format('LL') }}
                  </div>

                  <div class="modal-body">
                    <div v-if="day.content">
                      <div v-html="day.content"></div>
                    </div>
                    <div v-else>
                      No events.
                    </div>
                  </div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

  <style lang="sass">
    @import '../css/style.scss'
    </style>

    <script>
    import CalendarHeader from './Header.vue';
    import CalendarBody from './Body.vue';

    export default {
      components:{
        CalendarBody,
        CalendarHeader
      },
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
      methods:{
        getYearMonth: function(year, month){
          this.year = year;
          this.month = month;
        },
        renderContent: function(day){
          this.showModal = true;

          if(this.renderDay){
            day = this.renderDay(day);
          }
          this.day = day;
        },
        close: function(){
          this.showModal = false;
        }
      },
      data: function(){
        return {
          year: 2017,
          month: 1,
          day : {'number': 1} ,
          showModal: false
        };
      },
    }
    </script>
