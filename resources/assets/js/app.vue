<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Modal test</h1>
        <p>Press the button to open the modal.</p>
        <bs-modal v-bind:show="this.showModal" v-bind:on-open="this.handleOpen" v-bind:on-close="this.handleClose">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" v-on:click="this.toggleModal" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Some content displayed in the modal.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="this.toggleModal" data-dismiss="modal">Close</button>
          </div>
        </bs-modal>

        <button v-on:click="this.toggleModal">Toggle modal</button>
      </div>
    </div>
  </div>
</template>

<script>
import ModalComponent from '@/src/modal.vue';

export default {
  components: {
    'bs-modal': ModalComponent
  },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    toggleModal() {
      this.showModal = ! this.showModal
    },

    handleOpen() {
      console.log('Modal is about to open.');
    },

    handleClose() {
      console.log('Modal has closed.');

      // Make sure to reset the show modal state, as the child component
      // can not change this, parent must do it.
      this.showModal = false
    }
  }
}
</script>

<style lang="css">
  @import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
</style>
