
<template>
    <div class="project-item">
      <div class="project-item__main">
          <div class="project-item__title" >
              <p v-bind:title="proj.title">{{proj.title}}</p>
          </div>
          <div class="project-item__body">
              <div class="project-item__body-id"><p v-bind:title="proj.idArticle">{{proj.idArticle}}</p></div>
              
              <div class="project-item__body-create"><p>{{proj.authorCreate}}</p></div>
              <div class="project-item__body-update"><p>{{proj.authorUpdate}}</p></div>
              <div class="project-item__body-dotts"></div>
          </div>
      </div>
      <BaseDropDown></BaseDropDown>
  </div>
</template>
   
   <script>
 
   export default {
      props: {
          proj: {
          title: {
                  type: String,
                  default: '',
          },
          idArticle: {
              type: String,
              default: '',
          },
          authorCreate: {
              type: String,
              default: '',
          },
          authorUpdate: {
              type: String,
              default: '',
          },
          },
      },
      
   }
   </script>

   <style lang="scss">
    @import '@/sass/color.scss';
    
    .project-item {
          position: relative;
          margin: 20px 0;
          padding: 0px 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
  }
  .project-item::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          height: 1px;
          width: 100%;
          background-color: $border-default;
  }
  .project-item:hover .btn-addittionaly {
      display: flex;
  
  }
  .project-item__main{
      width: 100%;
  }
  
  
  .project-item__title p {
      content: attr(data-text);
      min-height: 2.8em;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
  
      line-clamp: 2;
      -webkit-box-orient: vertical;
  }
  
  .project-item__body {
          display: flex;
  }
  
  .project-item__body-id {
      margin: 0px 10px 0px 0px;
  }
  .project-item__body-id p {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  
  .project-item__body-create {
      flex: 1 1 auto;
      margin: 0 10px;
      color: $font-disabled;
  }
  
  .project-item__body-update {
      color: $font-disabled;
      padding: 0px 20px 0px 0px;
  }
    
  
  
  
   </style>