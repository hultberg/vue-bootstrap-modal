# Vue Bootstrap modal

A simple and small vue component based on bootstrap 4 modal.

Written in es6, it is your responsibility to ensure you support it. Use babel to compile es6 to es5 or lower.

## Usage

A simple example:

```vue
<template>
    <div class="page">
        <bs-modal v-show="this.showModal" v-bind:on-open="this.handleOpen" v-bind:on-close="this.handleClose">
            Some content displayed in the modal.
            
            <button type="button" class="btn btn-secondary" v-on:click="this.toggleModal" data-dismiss="modal">Close</button>
        </bs-modal>
        
        <button v-on:click="this.toggleModal">Toggle modal</button>
    </div>
</template>

<script>
import ModalComponent from 'vue-bootstrap4-modal'

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
        }
    }
}
</script>
```

To open the modal, one 

### Callbacks

This package supports callback when modal opens and closes. These props expects
the values to be a function. Example:

```vue
<template>
    <div class="page">
        <bs-modal v-show="this.showModal" v-bind:on-open="this.handleOpen" v-bind:on-close="this.handleClose">
            Some content displayed in the modal.
        </bs-modal>
    </div>
</template>

<script>
import ModalComponent from 'vue-bootstrap-modal'

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
        handleOpen() {
            // Code to handle the opening of the modal.
        },
        
        handleClose() {
            // Code to handle the closing of the modal.
        }
    }
}
</script>
```

The open callback is called BEFORE the modal is opened by jquery and bootstrap.

The close callback is called AFTER the modal is closed by jquery and bootstrap.

## Development

To develop this package, install node dependencies with yarn:
```
$ yarn
```

## LICENSE

MIT
