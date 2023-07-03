
<template>
     <div class="page-task">
        <div class="project__filter">
            <div class="filter-container">
                <div class="filter__search">
                    <div class="search__input-container">
                        <div class="input-input"><BaseInput placeholder="Поиск..." :style="{width: '100%'}"></BaseInput></div>
                             <div class="input-icon">
                                 <BaseIcon name="#search" ></BaseIcon>            
                            </div>
                        </div>
                    </div>
                <div class="filter__filter-form">
                        <a href="#" class="filter-form-btn"><BaseIcon name="#filter" color="black" class="filter-svg"></BaseIcon></a>
                </div>
                 <div class="filter__select">
                    <div class="select-container">
                        <BaseSelect 
                            :options="selectFilters"
                            @select="optionSelect"
                            :selectedValue="selectedValue"
                            :selectedName="selectedName"
                        ></BaseSelect>
                    <div class="sort-svg-container">
                        <BaseIcon name="#sort" className="sort-svg"></BaseIcon>
                    </div>
                    </div>
                 </div>
                <div class="fiter__button">
                    <BaseButton
                    nameButton="Добавить"
                    className="button-cancel"
                    id="button-add-task"
                    @click="addTask"
                    ></BaseButton>
          </div>

   </div>
       

        </div>
        <div class="project__items">
            <taskItems></taskItems>
        </div>
        
        
    </div>
</template>
<script>
    import "@/assets/icons/search.svg"
     import "@/assets/icons/sort.svg" 
     import "@/assets/icons/filter.svg" 
  
import taskItems from '../components/TaskItems.vue'
//не получает вывести из папки common
// import {selectFilters} from '@/common/selectFilters.js'

export default {
components:{
 
    taskItems,
},

 data() {
     return {
        // selectFilters: selectFilters,
        selectFilters: [
        {name: 'По названию', value: 'name', selected: true},
        {name: 'По автору', value: 'author', selected: false},
        {name: 'По статусу', value: 'status', selected: false},
        {name: 'По исполнителю', value: 'executor', selected: false},
        {name: 'По дате создания', value: 'date_create', selected: false},
        {name: 'По дате обновления', value: 'date_update', selected: false},
       ],
        selectedName: 'Выберите фильтр',
        selectedValue: ''
     }
 },
 methods: {
    optionSelect(option){
        this.selectedValue = option.value
        this.selectedName = option.name
    },
    addTask(option){
    this.$emit('click', option)
    
  },
 }
 
}

</script>

<style lang="scss">

@import '@/sass/color.scss';
@import '../sass/filterBlock.scss';

.page-task{
    margin: 20px;
}


</style>