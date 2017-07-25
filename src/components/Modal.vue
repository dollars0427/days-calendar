<template>

  <div>
    <span :class="day.class" v-on:click="show">{{day.number}}</span>

    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask" v-on:click="close">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  Date
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  Date Content
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'day': Object,
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
