<template>
  <div class="calendar-conatiner">
    <div class="days-calendar">
      <div class="calendar-wrapper">
        <CalendarHeader :getYearMonth="getYearMonth"></CalendarHeader>
        <CalendarBody :weekdays="weekdays" :renderContent="renderContent" :renderDays="renderDays" :month="month" :year="year"></CalendarBody>
      </div>
    </div>

    <div class="calendar-modal">
      <transition name="modal">
        <div v-if="showModal">
          <div class="modal-mask" v-on:click="close">
            <div class="modal-wrapper">
              <div class="modal-container" v-on:click="stopClose">
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
    import moment from 'moment';
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
        'onClick':{
          'type': Function,
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
          if(this.renderDay){
            day = this.renderDay(day);
          }

          if(this.onClick){
            this.onClick(day);
          }else{
            this.day = day;
            this.showModal = true;
          }
        },
        close: function(){
          this.showModal = false;
        },
        stopClose: function(e){
          e.stopPropagation();
        }
      },
      data: function(){
        return {
          year: parseInt(moment().format('YYYY')),
          month: parseInt(moment().format('MM')) + 1,
          day : {'number': 1} ,
          showModal: false
        };
      },
    }
    </script>
