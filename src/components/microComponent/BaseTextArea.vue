<template>
    <textarea
          name="" 
          id="" 
          v-on="inputListeners"
          v-model="model.adress" 
          :type="type" 
          :placeholder="placeholder"
      ></textarea>

</template>

<script>

export default {
    data() {
    return {
        model: {
            adress: ''
        }
    };
  },
props: {
    type: {
        type: String,
        default: 'textarea',
        
    },
    placeholder: {
        type: String,
        default: 'Введите текст...',
       
    },
    
   
},
computed:{
    inputListeners: function () {
      var vm = this
      return Object.assign({},
        this.$listeners,
        {
        
          input: function (event) {
            vm.$emit('description', event.target.value)
          }
        }
      )
    }
}
  
}
</script>

<style lang="scss">
  @import '@/sass/color.scss';

    textarea{
        
        
        all: unset;
        

        
    }






</style>