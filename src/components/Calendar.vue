<template>
  <div class="calendar-conatiner">
    <div class="days-calendar">
      <div class="calendar-wrapper">
        <CalendarHeader :langcode="langcode" :defaultStart="defaultStart" :getYearMonth="getYearMonth">
        </CalendarHeader>
        <CalendarBody :langcode="langcode" :weekdays="weekdays" :renderContent="renderContent" :renderDays="renderDays"
        :month="month" :year="year">
        </CalendarBody>
      </div>
    </div>

    <div id="calendar-modal" class="calendar-modal" tabindex="-1">
      <transition name="modal">
        <div v-if="showModal">
          <div class="modal-mask" v-on:click="close">
            <div class="modal-wrapper">
              <div class="modal-container" v-on:click="stopClose">
                <div class="close-button">
                  <button type="button" class="modal-close" :aria-label="i18nText.close[langcode]" v-on:click="close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
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
        'langcode': {
          'type': String,
          'default': 'en'
        },
        'defaultStart': {
          'type': String,
          'default': new moment().format('YYYY-MM-DD'),
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
      computed: {
        //Set weekday name by locale
        'weekdays': function(){
          moment.locale(this.langcode);
          const weekdays = moment.weekdaysShort();
          return weekdays;
        }
      },
      methods:{
        //Function for get current year and month from header.
        getYearMonth: function(year, month){
          this.year = year;
          this.month = month;
        },

        //Function for render the content of day
        renderContent: function(day){
          if(this.renderDay){
            day = this.renderDay(day);
          }
          if(this.onClick){
            this.onClick(day);
          }else{
            this.day = day;
            this.showModal = true;
            document.getElementById('calendar-modal').focus(); //Auto focus on modal
          }
        },
        //Function for close modal.
        close: function(){
          this.showModal = false;
        },

        //Function for disable close event of modal.
        stopClose: function(e){
          e.stopPropagation();
        }
      },
      data: function(){
        //Set default value of data
        return {
          i18nText: {
            close: {
              'en': 'Close',
              'zh-hk': '關閉',
              'zh-tw': '關閉',
              'zh-cn': '关闭',
            }
          },
          year: parseInt(new moment().format('YYYY')),
          month: parseInt(new moment().format('MM')) + 1,
          day : {'number': 1} ,
          showModal: false
        };
      },
    }
    </script>
