<template>
  <div class="hello">
    <h3>测试文本如下：</h3>
    <p>
      在组件模板中直接输出获取值：{{$store.state.testMsg}}
    </p>
    <hr>
    <Parent></Parent>
    <hr>
    <h4>
      getters获取state的值修改后如下：
    </h4>
    <p @click="changeCount">
      {{$store.getters.countNum}}
    </p>
    <!-- 将stroe.js中的值赋值给模板中的data中的值的有三种赋值方式 -->
    <div>computed计算属性获取的值：{{ count01 }}</div>
    <div>使用mapState辅助函数来赋值：{{ count02 }}</div>
    <div>使用mapState的数组来赋值：{{ count }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Parent from './Parent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: { // 多个computed时，后面的会覆盖前面的
    count01 () { // 普通计算属性
      return this.$store.state.count
    },
    ...mapState({ // mapState(obj)对象辅助函数赋值
      count02: (state) => { return state.count }
    }),
    ...mapState(['count']) // mapState(arr)数组来赋值
  },
  methods: {
    changeCount: function () {
      this.$store.dispatch('changeCount', 88) // $store.dispatch("actionName");直接触发actions中的方法
    }
  },
  components: {
    Parent
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
