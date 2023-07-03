<template>
    
        <button class="button"
        :disabled="isDisabled"
        :class="className"
        :id="id"
        
        v-on="listeners"
    
         >
         {{ nameButton }}
        
        </button>
   
</template>

<script>

export default {
    data() {
    return {
      
    };
  },
props: {
    nameButton: {
        type: String,
        default: 'Button!',
        
    },
    className: {
        type: String,
        default: 'button',
       
    },
    id: {
        type: String,
        default: '',
      
    },
    isDisabled: {
        type: Boolean,
        default: false,

    },
    

  
},
computed: {
    listeners(){
        return {
            ...this.$listeners
        }
    },
},
methods: {
  
}
  
}
</script>

<style lang="scss">
  @import '@/sass/color.scss';

.btns{
padding: 20px;
}

.button{
font-family: inherit;
padding: 0px 16px;
height: 42px;
border-radius: 4px;

background-color: $bg-primaryDefault;

color: $font-secondary;
box-sizing: border-box;
cursor: pointer;
display: flex;
align-items: center;
border: none;

}
.button-cancel{
background-color:$bg-secondary;
color: $font-primaryDefault;
border: 1px solid $border-default;
}

.button{
    &:disabled{
        cursor: not-allowed;
        background-color:$bg-disabled;
        color: $font-primaryDefault;
        &:hover{
            background-color:$bg-disabled;
        color: $font-primaryDefault;
        }
    }


}

.button-nav {
border: 1px solid $font-secondary;

}

.button-nav:hover {
background-color: $font-secondary;
color: $font-primaryDefault;
}

.button-nav._active{
background-color: $font-secondary;
color: $font-primaryDefault;
}


</style>