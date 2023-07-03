<template>
  <div id="app" class="app">
    <navigation @getIdButton="getIdButton"></navigation>
 

<!-- 
      <createTask ></createTask>
      <pageProjectItems></pageProjectItems >
      <pageTaskItems></pageTaskItems > -->
      <component :is="pageName"  ></component>

    
  </div>
</template>

<script>
import navigation from './components/NavigationMenu.vue'
import createTask from './components/CreateTask.vue'
import projects from './views/PageProjects.vue'
import tasks from './views/PageTaskItems.vue'
import users from './views/PageUsers.vue'


export default {
  name: "App",
  components: {

    navigation,
    createTask,
    projects,
    tasks,
    users,


    
  },
  data() {
        return {
          pageName: 'createTask',
        }
    },
methods: {
  getIdButton(){
    this.pageName = event.target.id;

  },
 
},


};



</script>

<style lang="scss">
@import './sass/style.scss';

.app {
height: 100%;
  width: 1024px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
}
.page{
 
  
}

.class{
  display: flex;
  justify-content: space-around;
}
</style>
