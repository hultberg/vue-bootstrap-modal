<template>
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    v-show="this.show"
    @click="this.close">
    <div class="modal-dialog" role="document" @click.stop>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/src/modal';

export default {
  name: 'modal',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    onOpen: {
      type: Function,
      default: null
    },
    onClose: {
      type: Function,
      default: null
    }
  },

  mounted() {
    this.modalInstance = new Modal(this.$el);

    // If the esc button is typed, close modal.
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        this.close()
      }
    })
  },

  data() {
    return {
      modalInstance: null,
    };
  },

  watch: {
    // Watch for a change in show, so we can call for open or close.
    show(value) {
      if (value) {
        this.open()
      } else if ( ! value) {
        this.close()
      }
    }
  },

  beforeDestroy() {
    if (this.isDef(this.modalInstance)) {
      this.modalInstance.dispose();
      this.modalInstance = null;
    }
  },

  methods: {
    close() {
      if (this.isDef(this.modalInstance)) {
        this.modalInstance.hide();
      }

      // Next, call a defined callback.
      if (this.onClose !== null) {
        this.onClose()
      }
    },

    open() {
      // First, call a defined callback.
      if (this.isDef(this.onOpen)) {
        this.onOpen()
      }

      this.modalInstance.show();
    },

    isDef(obj) {
      return typeof obj !== undefined && obj !== null;
    },
  }
}
</script>
