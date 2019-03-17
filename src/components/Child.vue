<template>
  <div class="childContainer">
    <h3>子组件内容：</h3>
    <p class="txt">
      {{oldtxt}}
    </p>
    <button class="btn" @click="changeChildTxt2()">点击更改子组建内容</button>
    <button class="btn" @click="changeParentTxt2()">点击更改父组建内容</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {

    }
  },
  computed: {
    oldtxt: function () {
      return this.$store.state.childMsg
    }
  },
  methods: {
    changeParentTxt2: function () {
      let newParentTxt = '这是通过子组件修改父组件state获取到的文字'
      this.$store.dispatch('changeParentTxt', newParentTxt)
    },
    changeChildTxt2: function () {
      let newChildTxt = '点击子组件按钮后内容变成了这样！！！'
      this.$store.dispatch('changeChildTxt', newChildTxt)
    }
  }
}
</script>

<style lang="scss" scoped>
.childContainer {
  height:150px;
  width:350px;
  background-color: lightcoral;
  color:#fff;
  margin:10px auto;
}
.txt {
  border:1px solid red;
  padding:10px;
}
.btn {
  background-color: #fff;
  color: #000;
}
</style>
