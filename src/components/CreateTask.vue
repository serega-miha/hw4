
<template>
 <div class="page-create__task">
    <div class="create__task-title">
        <h2>Создание задачи</h2>
    </div>
    <div class="create__task-body">
        <form class="create-task-form" action="POST" @submit.prevent="onSubmit" >
            <div class="form-blocks-container">
                <div class="form-block">
                <h4 class="form-item-name">Название <span class="red-color">*</span></h4>
                <BaseInput
                    class="form-item" 
                    placeholder="Введите текст..."
                    name="name"
                    @input="changeName"
                ></BaseInput>
            </div>
            <div class="form-block">
                 <h4 class="form-item-name">Описание</h4>
                 <BaseTextArea
                    class="form-item"
                    placeholder="Введите текст..."
                    name="description"
                    @description="changeDesc"
                 ></BaseTextArea>
            </div>
            <div class="form-block">
                <h4 class="form-item-name">Проект <span class="red-color">*</span></h4>
               <BaseSelect 
                    class="form-item" 
                    selectData="selectData"
                    :options="projectsList"
                    @select="getOptionSelectProjects"
                    :selectedValue="selectedValueProject"
                    :selectedName="selectedNameProject"
                    v-model="dataForm.project"
               ></BaseSelect>
            </div>
            <div class="form-block">
                <h4 class="form-item-name">Исполнитель</h4>
                <BaseSelect 
                    class="form-item" 
                    selectData="selectData"
                    :options="authorList"
                    @select="getOptionSelectAuthor"
                    :selectedValue="selectedValueAuthor"
                    :selectedName="selectedNameAuthor"
                    v-model="dataForm.author"
               ></BaseSelect>
            </div>
        </div>
            <div class="form-blocks-buttons">
                <div class="create__task-footer">
            <BaseButton className="button-cancel" nameButton="Отмена"></BaseButton>
            <BaseButton type="submit" className="button-nav" nameButton="Создать задачу"></BaseButton>
                </div>
        </div>
        </form>
       
    </div>
   
 </div>
</template>
<script>
import BaseButton from './microComponent/BaseButton.vue'

export default {
components:{
BaseButton
},
 data() {
     return {
        dataForm: {
            name: '',
            description: '',
            project: '',
            author: '',
        },
        projectsList: [
        {name: 'Проект 1', value: 'p1'},
        {name: 'Проект 2', value: 'p2'},
        {name: 'Проект 3', value: 'p3'},
        {name: 'Проект 4', value: 'p4'},
   
       ],
         authorList: [
        {name: '1', value:'1'},
        {name: '2', value:'2'},
        {name: '3', value:'3'},
        {name: '4', value:'4'},
      ],
      selectedNameProject: 'Выберите проект',
    selectedValueProject: '',
    selectedNameAuthor: 'Выберите автора',
    selectedValueAuthor: '',
        
     }
 },
 methods: {
    getOptionSelectProjects(option){
        this.selectedValueProject = option.value
        this.selectedNameProject = option.name
        this.dataForm.project = option.name
    },
    getOptionSelectAuthor(option){
        this.selectedValueAuthor = option.value
        this.selectedNameAuthor = option.name
        this.dataForm.author = option.name
    },
    onSubmit(){
        console.log(this.dataForm);
        console.log('Название-', this.dataForm.name);
        console.log('Описание-', this.dataForm.description);
        console.log('Проект-', this.dataForm.project);
        console.log('Автор-', this.dataForm.author);
    },
    changeName(input){
        
        this.dataForm.name = input
    },
    changeDesc(description){
        
        this.dataForm.description = description
    },
 }
}

</script>

<style lang="scss">

@import '@/sass/color.scss';
.page-create__task{
    flex: 1 1 auto;
    margin: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
   height: 100%;
}
.create__task-title{
    font-size: 30px;
   
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

.form-item{
       width: 100%;
       border: 1px solid $border-default;
   
       border-radius: 4px;

    
    &:focus{
        border-color: $border-active;
    }
    &:active{
        border-color: $border-active;
    }
    &:hover{
        border-color: $border-active;
    }

    }

.create-task-form{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}

.form-blocks-container{
    
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 24px;
    margin: 12px 0px 0px 0px;
    &::after{
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: $border-default;
        margin: 24px 0px;
        bottom: 0px;
        left: 0;
    }
    &::before{
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: $border-default;
        margin: 24px 0px;
        top: 0px;
        left: 0;
    }
}
.create__task-body{
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
   

}
.form-block{
    width: 720px;
    display: flex;
    input, textarea{
        padding: 10px;
    } 

    h4{
        font-weight: 400;
        width: 120px;
        color:$font-disabled ;
    }
   
}
.create__task-footer{
    display: flex;
    justify-content: end;
    gap: 24px;
}
.red-color{
    color: $font-error;
}



</style>