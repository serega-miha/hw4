<template>

    <div class="base-select">
      <div class="select-title"
            @click="areOptionsVisible = !areOptionsVisible"
            v-click-outside="hide"
            ><p>{{ selectedName }}</p>
            <BaseIcon  v-if="!areOptionsVisible"
            name="#drop-down" 
            color="#8E8E8E"
            ></BaseIcon>
            <BaseIcon  v-else
            name="#drop-down-up" 
            color="#8E8E8E"
            ></BaseIcon>
      </div>
      <div class="options"
            v-if="areOptionsVisible">
            <p
            v-for="option in options"
            :key="option.value"
          
            @click="selectOption(option)"
            >
        {{ option.name }}
            </p>
      </div>
  </div>

</template>

<script>
import "@/assets/icons/drop-down.svg"
import "@/assets/icons/drop-down-up.svg"
import ClickOutside from 'vue-click-outside'
import selectFilters from '../../common/selectFilters.js'

export default {
  directives: {
        ClickOutside
  },
    data() {
    return {
      areOptionsVisible: false,
      selectFilters: selectFilters,
       
        select: {
            filter: '',
            
        },
       
    };
  },
  props: {
    options:{
      type: Array,
      default() {
        return []
      }
    },
    selectedName: {
      type: String,
      default: '',
    },
    selectedValue: {
      type: String,
      default: '',
    }

    
  
},
methods: {
  // <!-- создали метод для отправки в родительский компонент выбранный селект -->

  selectOption(option){
    this.$emit('select', option)
    this.areOptionsVisible = false
  },

  hide () {
        this.areOptionsVisible = false
    } 

}
}
</script>

<style lang="scss">
  @import '@/sass/color.scss';

.base-select{
    position: relative;
  width: 100%;
    p{
      margin: 0;
      padding: 0px 0px;
    }
}
.select-title{
 cursor:pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg{
    margin-right: -10px;
  }
}
.options{
  border: 1px solid $border-default;
  position: absolute;
  top: 42px;
  right: -2px;
  width: 100%;
  padding: 6px 0px 0px 0px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 5;
  background-color: $bg-secondary;
  p{
    cursor: pointer;
    padding: 8px 14px;
    &:hover{
    background-color: $border-default;
  }
  }

}


</style>