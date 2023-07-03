
<template>
    <div class="project-items">
                <div class="project-items-container">
                    <taskItem
                    :task="task"
                    :key="index"
                    v-for="(task, index) in tasks"
                    ></taskItem>

                </div>
            </div>
</template>
<script>

import taskItem from './microComponent/taskItem/TaskItem.vue'
import {TasksDB} from '../common/tasksItemDB.js'

export default {
components:{

    taskItem,
},

 data() {
     return {
        tasks: TasksDB, 

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