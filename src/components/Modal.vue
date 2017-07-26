<template>
  <div id="calendar-modal">
    <span :class="day.class" v-on:click="show">{{day.number}}</span>
    <transition name="modal">
      <div v-if="showModal">
        <div class="modal-mask" v-on:click="close">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <div name="header">
                  {{ getDate }}
                </div>
              </div>

              <div class="modal-body">
                <div v-if="day.content">
                  {{ day.content }}
                </div>

                <div v-else>
                  No events
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
  },
  computed: {
    getDate: function () {
      if(this.day.date.format){
        return this.day.date.format("MMM Do YY");
      }else{
        return this.day.date;
      }
    }
  },
  methods: {
    show: function () {
      this.showModal = true;
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
