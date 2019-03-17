<template>
   <div>
      <div class="parentContainer">
         <div>
            <h3>父组件的内容：</h3>
            <p class="txt">{{oldtxt}}</p>
         </div>
         <button class="btn" @click="changeParentTxt()">点击更改父组件内容</button>
         <button class="btn" @click="changeChildTxt()">点击更改子组件内容</button>
      </div>
      <Child></Child>
   </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  data () {
    return {
    }
  },
  components: {
    Child
  },
  computed: {
    oldtxt: function () {
      return this.$store.state.parentMsg
    }
  },
  methods: {
    changeParentTxt: function () {
      let newParentTxt = '更改后的父组件内容变长的很多...'
      this.$store.dispatch('changeParentTxt', newParentTxt)
    },
    changeChildTxt: function () {
      let newChildTxt = '这里是父组件点击修改后的文本内容....'
      this.$store.dispatch('changeChildTxt', newChildTxt)
    }
  }
}
</script>

<style>
   .parentContainer {
      height:150px;
      width:350px;
      background-color: lightblue;
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
