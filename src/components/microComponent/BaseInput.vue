<template>
 <input
    class="input" 
    v-model="message"
    v-on="inputListeners"
    :type="type"
    :placeholder="placeholder"
    name="" 
      >

</template>

<script>

export default {
    inheritAttrs: false,
    data() {
    return {
        message: '',
    };
  },
props: {
    type: {
        type: String,
        default: 'text',
        
    },
    placeholder: {
        type: String,
        default: 'Введите назване...',
       
    },
},
methods:{
    saveMessage(){
        this.$emit('message', this.message)
    }
    
},  
computed: {
    listeners(){
        return {
            ...this.$listeners
        }
    },
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
        
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }

}
  
}
</script>

<style lang="scss">
  @import '@/sass/color.scss';

.input{
    width: 100%;
}

</style>