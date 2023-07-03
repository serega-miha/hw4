<template>
    <a class="status" :class="statusClass">{{statusText}}</a>
 </template>
 
 <script>
 
 export default {
     data() {
     return {
        
     };
   },
 props: {
    statusText: {
         type: String,
         default: 'Черновик',
         
     },
     statusClass: {
        type: String,
         default: 'bronze',
     }
   
 },
   
 }
 </script>
 
 <style lang="scss">
  @import '@/sass/color.scss';

  .status{
    margin: 0px 10px;
    
    color: $font-secondary;
    border-radius: 4px;
    padding: 0px 8px;
}
.bronze{
    background: $border-bronze;
}

.blue{
    background: $bg-primaryDefault;
    
}
.red{
    background: $font-error;
    
}
.disable{
    background: $font-disabled;
    
}

   
 
 </style>