
<template>
    <div class="page-project">
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
                        id="button-add-project"
                    ></BaseButton>
                </div>

            </div>
            </div>
            <div class="project__items">
                <projectItems></projectItems>
            </div>
    </div>
</template>
<script>
import "@/assets/icons/search.svg"
import "@/assets/icons/sort.svg" 
import projectItems from '../components/ProjectItems.vue'
//не получает вывести из папки common
// import {selectFilters} from '@/common/selectFilters.js'

export default {
components:{
 
    projectItems,
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
    }
 }
 
}

</script>

<style lang="scss">

@import '@/sass/color.scss';
@import '../sass/filterBlock.scss';
.page-project{
    margin: 20px;
}

</style>