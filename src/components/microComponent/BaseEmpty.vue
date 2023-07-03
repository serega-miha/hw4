<template>
   <div class="empty">
            <div class="empty__container">
                <div class="empty-projects">
                    <div class="empty-projects__body">
                        <p>{{ text }}</p>
                        <BaseButton v-show="visible" nameButton="Добавить"></BaseButton>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {

props: {
    text: {
        type: String,
        default: 'Нет текста',
        
    },
    visible: {
        type: Boolean,
        default: true,
    }
  
},
}
</script>

<style lang="scss">
 @import '@/sass/color.scss';
.empty {
    flex: 1 1 auto;
    background-color: $bg-secondary;
    display: flex;
    height: 100%;
}
.empty__container {
   flex: 1 1 auto;
    margin: 20px;
    border-radius: 4px;
    border: 1px solid $font-disabled;
    
    
}
.empty-projects {

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;


}
.empty-projects__body button {
    margin: 10px  auto 0px auto;
    
    
}





</style>