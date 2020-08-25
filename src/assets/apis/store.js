import Vue from 'vue'
import Vuex from 'vuex'

// vuex 存数据，读数据
Vue.use(Vuex)
const key = 'user'
const store =  new Vuex.Store({
  // 要存的初始数据
  state: {
    user:null,
    cartProducts: [
      
    ]
  },
  // 通过 mutations修改数据
  mutations: {
    // 设置数据 进入 localStorage
    _setStorage(state,value){ 
      state.user = value
      localStorage.setItem(key,JSON.stringify(value))  // localStroage.setItem(key,数据值) 设置存入缓存
    },
    _removeStorage(state){
      state.user = null
      localStorage.removeItem(key)  // localStorage.removeItem(key) 删除缓存
    }
  },
  actions: {

  },
  // 通过getters 获取数据
  getters:{ 
    getStorage(state){
      if(!state.user){
        state.user = JSON.parse(localStorage.getItem(key)) // localStorage.getItem(key) // 获取缓存中的数据
      }
      return state.user
    }
  }
})
export default store