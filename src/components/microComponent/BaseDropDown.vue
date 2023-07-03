<template>
   
    <div class="btn-addittionaly" @click="isMenuVisible = !isMenuVisible" v-click-outside="hide">
         <a href="#" class="project-item__addittionaly" >
                 <BaseIcon
                     name="#dots"
                 ></BaseIcon>
         </a>
         <div class="add__update-menu"  v-show="isMenuVisible"  >
                 <ul class="update-menu__list">
                     <li class="update-menu__item">
                         <a href="#" class="update-menu__link">Редактировать</a>
                     </li>
                     <li class="update-menu__item">
                         <a href="#" class="update-menu__link update-menu__link-r">Удалить</a>
                     </li>
                 </ul>
         </div>
     </div>
  
 </template>
 <script>
 //npm install vue-click-outside затем import затем директивы
 import "@/assets/icons/dots.svg" 
import ClickOutside from 'vue-click-outside'


 export default {
    directives: {
        ClickOutside
  },
 data() {
         return {
             classNameSvg: 'clicker',
             isMenuVisible: false,
             
         }
     },
    methods: {

    hide () {
        this.isMenuVisible = false
       } 
    }
 }
 </script>
 
 <style lang="scss">
   @import '@/sass/color.scss';
 
 
 /* main styles */
 
 .btn-addittionaly{
 position: relative ;
    margin: 10px;
 display: flex;
 display: none;

 }
 .project-item__addittionaly{
    cursor: pointer;
    background-color: $font-secondary;
    border: 1px solid $font-disabled;
    border-radius: 4px;
    &:hover{
        background-color: $bg-disabled;
        border: 1px solid $border-active;
    }
    &:active{
        background-color: $bg-disabled;
        border: 1px solid $border-active;
    }
    svg{
        display: flex;
        align-items: center;
        padding: 9px;
    }
 }
 
 
 .add__update-menu{

     z-index: 3;
     position: absolute;
     top: 100%;
     right: 0;
     background-color: $bg-secondary;
     box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  
 
 }
 
 .update-menu__list{
     list-style: none;
     
 }
 
 .update-menu__item {
     padding: 10px;
     &:hover{
        
         background-color:$bg-disabled;
     }
 }
 .update-menu__link {
     color:$font-primaryDefault;
     text-decoration: none;
     background-color:none;
    
     
 }
 .update-menu__link-r{
     color:$font-error;
 }
 
 
 
 </style>