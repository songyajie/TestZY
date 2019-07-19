<style lang="less">
  /* 需要写的样式写在这 */
  .index{
    text-align:center;
    .msg{
      color:red;
    }
  }
</style>
<template>
  <div class="index">
    <h1 class="msg">{{msg}}</h1>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <router-link :to="{path:'/page1',query:{parameter:parameter}}">点我进入page1页面</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是index页面',
      parameter:'aaaaa',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  //需要页面上来就执行得东西，写在这，比如：上来就加载列表数据需要调用的接口
  created(){
    //调取方法
    this.getDate();
  },
  //写方法
  methods:{
    getDate(){
      //按f12打开控制台就会看到输出的“我是一个方法”
      console.log('我是一个方法')
      //写接口
      this.axios({
        method: 'post',
        url: '/user/12345',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
    }
  }
}
</script>

