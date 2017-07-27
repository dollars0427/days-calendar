<template>
  <div id="calendar-modal">
    <span :class="day.class" v-on:click="renderContent">{{day.number}}</span>
    <transition name="modal">
      <div v-if="showModal">
        <div class="modal-mask" v-on:click="close">
          <div class="modal-wrapper">
            <div class="modal-container">
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
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    'day': Object,
    'renderDay': Function
  },
  methods: {
    renderContent: function(){
      this.showModal = true;
      if(this.renderDay){
        this.renderDay(day);
      }
    },
    close: function(){
      this.showModal = false;
    }
  },
  data: function(){
    return{
      showModal: false
    };
  }
}
</script>
