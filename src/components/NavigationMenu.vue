<template>
    <nav class="menu" >
        <ul class="menu__list">
            <li class="menu__item" :key="index" v-for="(info, index) in infoBtns">
                <BaseButton
                    :nameButton="info.name"
                    :className="className" 
                    :id="info.id"
                    
                    @click="addActive"
                    :class="info.selected"
                ></BaseButton>
            </li>
        </ul>
        <BaseProfileButton></BaseProfileButton>
    </nav>  
</template>

  <script>
  // ели вывожу через common папку, не работает
// import {btnsInfo} from '../common/infoBtns.js';



  export default {

data() {
    return {

    infoBtns: [
        {name: 'Проекты', id: 'projects', selected: ''},
        {name: 'Задачи', id: 'tasks', selected: '_active'},
        {name: 'Пользователи', id: 'users', selected: ''},
    ],
    className: 'button button-nav',
    nameIdButton: '',
    }
},
methods: {

addActive(){
    this.$emit('getIdButton', )
    console.log(event.target.id);
    document.querySelectorAll('.button-nav').forEach(item => {
    item.classList.remove('_active');
    })
    document.querySelector('#' + event.target.id).classList.add('_active')
    this.nameIdButton = event.target.id;
},

}
  }
  </script>

  <style lang="scss">

  
@import '@/sass/color.scss';





/* main styles */

.menu {
    background-color: $bg-primaryDefault;
    height: 90px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0px 20px;
    

}

.menu__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 24px;
    gap: 24px;

    list-style: none;
}

  </style>