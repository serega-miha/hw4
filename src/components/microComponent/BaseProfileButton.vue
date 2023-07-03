<template>
 <div>
    <div class="btn-user" @click="onOpenMenu" v-click-outside="hide" >
        <a class="button button-user" :class="iconClassName"> 
            <img class="menu-profile-avatar avatar-img" v-bind:src="imgProfile" alt="img profile">
            <BaseIcon
            name="#drop-down" 
            ></BaseIcon>
        </a> 
        <div class="btn-user__menu" v-show="menuVisible">
        <ul class="user__menu-list">
            <li class="user__menu-item">
                <a href="#" class="user__menu">Профиль</a>
            </li>
            <li class="user__menu-item">
                <a href="#" class="user__menu">Выход</a>
            </li>
        </ul>
        </div>
    </div>
</div>
  
 </template>
 <script>
 //npm install vue-click-outside затем import затем директивы
import ClickOutside from 'vue-click-outside'
import "@/assets/icons/drop-down.svg"
import imgProfile from '@/assets/logo.png'

 export default {
    directives: {
        ClickOutside
  },
 props: {
    
 },
 data() {
         return {
            imgProfile: imgProfile,
             menuVisible: false,
             iconClassName: '',
             
         }
     },
 
 
    methods: {
     onOpenMenu(){
           if (this.menuVisible === true){
            this.menuVisible = false;
            this.iconClassName = '';
           } else{
            this.menuVisible = true;
            this.iconClassName = '_active';
           }
           

         },
    hide () {
        this.menuVisible = false
    } 

    }
 }
 </script>
 
 <style lang="scss">
  @import '@/sass/color.scss';
    
.btn-user{
    position: relative;
    display: flex;
}
.btn-user__menu{
    
    z-index: 3;
    position: absolute;
    top: 101%;
    right: 0;
    background-color: $bg-secondary;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    // padding: 4px;

}


.user__menu-list {
    list-style: none;
}
.user__menu-item {
    padding: 8px 16px 8px 16px;
    &:first-child{
        padding-bottom: 8px;
        
    }
    &:last-child{
        padding-top: 8px;
        
    }
    &:hover{
        
        background-color:$bg-disabled;
    }
    
}
.user__menu{
    color:$font-primaryDefault;
    text-decoration: none;
    background-color:none;
   
    
    
}

//general styles
.avatar-img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0px 14px 0px 0px;
}

.button-user{
    border: 1px solid transparent;
    transition: all 0.2s;
    
    &:hover{
        border: 1px solid $font-secondary;
    }

    svg{
        width: 13px;
        height: 8px;
        transition: all 0.5s;
        fill: $font-secondary;
        transition: all 0.2s;
       
        
    }
    &._active{
        background-color: $bg-secondary;
        transition: all 0.2s;
        svg{
            color:$bg-secondaryHover;
            transform: rotate(180deg);
            transition: all 0.2s;
        }
    }
}
 
 </style>