<template>
  <div class="hello">
    <mt-button type="primary" @click="btn">primary</mt-button>
    <div id="container">
      <ul>
        <li v-for="(item,i) in list" :key="i">
          <img v-lazy="item">
        </li>
      </ul>
    </div>
    <mt-tabbar v-model="selected" fixed="bottom">
      <mt-tab-item id="1">
        外卖
      </mt-tab-item>
      <mt-tab-item id="2">
        订单
      </mt-tab-item>
      <mt-tab-item id="3">
        发现
      </mt-tab-item>
      <mt-tab-item id="4">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import {Tabbar,TabItem,Indicator} from "mint-ui";
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        selected: '2',
        list:['http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg','http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg']
      };
    },
    methods: {
      btn() {
        Indicator.open({
          text: "正在加载...",
          spinnerType: "fading-circle"
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
