import Vue from 'vue'
import App from './App.vue'

import Api from '@/api'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// import ExampleFour from './views/ExampleFour.vue'

Vue.use(Api)

// 1 ------------------ Глобальная регистрация компонентов

// Vue.component('ExampleThree', {
//   template: '<h1>Example Three</h1>' 
// })

// Vue.component('ExampleFour', {
//   component: ExampleFour 
// })

// 2 ------------- Автоматическая глобальная регистрация базовых компонентов

const requireComponent = require.context(
  './components',  // Относительный путь до каталога компонентов
  true,            // Обрабатывать или нет подкаталоги
  /Base[A-Z]\w+\.(vue|js)$/  // Регулярное выражение для определения файлов базовых компонентов
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName) // Получение конфигурации компонента
  // Получение имени компонента в PascalCase
  const componentName = upperFirst(
    camelCase(
      // Получаем имя файла независимо от глубины вложенности
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )

    // или
    // camelCase((/\/\w+\.vue/
    //   .exec(fileName)[0]
    //   .replace(/^\.\//, '')
    //   .replace(/\.\w+$/, ''))
    // )
  )

  // Глобальная регистрация компонента
  Vue.component(
    componentName,
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    componentConfig.default || componentConfig
  )
})

new Vue({
  render: h => h(App)
}).$mount('#app')
