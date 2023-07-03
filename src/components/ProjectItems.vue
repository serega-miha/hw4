
<template>
    <div class="project-items">
        <div class="project-items-container">
            <projectItem
                :proj="proj"
                :key="index"
                v-for="(proj, index) in projects"
                ></projectItem>
                
        </div>

    </div>
</template>
<script>

import projectItem from './microComponent/projectItem/ProjectItem.vue'
import {ProjectsDB} from '../common/projectItemDB.js'

export default {
components:{
    projectItem,
},

 data() {
     return {
        projects: ProjectsDB,
     }
 },
 
}

</script>

<style lang="scss">

@import '@/sass/color.scss';

.project-items-container {
margin: 20px;
}

</style>