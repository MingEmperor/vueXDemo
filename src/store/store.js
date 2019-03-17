import Vue from 'vue'
import VueX from 'vuex'

// vue引用vuex
Vue.use(VueX)

// state状态数据容器
const state = {
  testMsg: 'state中的一行测试文本',
  parentMsg: '父组件原始文本',
  childMsg: '子组件原始文本',
  count: 99
}

// 修改state的方法，就是state状态数据的处理函数
const mutations = {
  changeParentMsg: function (state, str) {
    state.parentMsg = str
  },
  changeChildMsg: function (state, str) {
    state.childMsg = str
  },
  changeCount: function (state, str) {
    state.count = str
  }
}

// 通过commit触发mutations中的方法来修改state
const actions = {
  changeParentTxt ({commit}, data) {
    commit('changeParentMsg', data)
  },
  changeChildTxt: (context, data) => {
    context.commit('changeChildMsg', data)
  },
  changeCount: (context, data) => {
    context.commit('changeCount', data)
  }
  // 上述两个方法中的参数，context代表store本身
}

const getters = {
  countNum: function (state) {
    if (state.count > 100) {
      return state.count + 100
    } else {
      return state.count - 50
    }
  }
}

export default new VueX.Store({
  state, // 依次加入到store对象中
  mutations,
  actions,
  getters
})
