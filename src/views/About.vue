<template>
  <div class="about">
    <Pie :pie_data="pie_chartData" :pie_loding="pieLonding" :data_Empty="data_Empty" />
    <Line_chart :line_data="Line_chartData" />
    <Histogram :histogram_data="histogram_chartData" />
    <div id="myTb">
      <el-table :data="tableData" :stripe="false" style="width: 50%;">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
            <span>{{scope.row.isUp ? '↑':'↓'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Pie from "../components/charts/Pie";
import Line_chart from "../components/charts/Line";
import Histogram from "../components/charts/Histogram";
import { setTimeout } from "timers";
export default {
  created() {
    const slef = this;
    setTimeout(() => {
      let res = slef.getData();
      if (res.data.staust === 104) {
        slef.pieLonding = false;//1.关闭loading
        //2.格式化数据
        // let data = formatChartData(res.data.chartData)
        slef.pie_chartData = res.data.chartData; //赋值
      } else {
        slef.pieLonding = false;
        slef.data_Empty = true;
      }
    }, 3000);
  },
  data() {
    return {
      pieLonding: true,
      data_Empty: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          isUp: true,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          isUp: true,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          isUp: true,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          isUp: false,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      histogram_chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 893,
            id: "12"
          },
          {
            日期: "1/2",
            访问用户: 3530,
            下单用户: 3230,
            下单率: 1093,
            id: "13"
          },
          {
            日期: "1/3",
            访问用户: 2923,
            下单用户: 2623,
            下单率: 2093,
            id: "14"
          },
          {
            日期: "1/4",
            访问用户: 1723,
            下单用户: 1423,
            下单率: 693,
            id: "15"
          },
          {
            日期: "1/5",
            访问用户: 3792,
            下单用户: 3492,
            下单率: 1093,
            id: "16"
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            下单率: 2093,
            id: "17"
          }
        ]
      },
      pie_chartData: {},
      Line_chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: -1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: -1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  },
  components: {
    Pie,
    Line_chart: Line_chart,
    Histogram
  },
  methods: {
    getData() {
      let obj = {
        data: {
          chartData: {
            columns: ["名称", "医疗收入"],
            rows: [
              { 名称: "材料费", 医疗收入: 1393,id:'材料费'},
              { 名称: "材料费2", 医疗收入: 3530,id:'材料费2' },
              { 名称: "材料费3", 医疗收入: 2923,id:'材料费3' },
              { 名称: "材料费4", 医疗收入: 1723,id:'材料费4' },
              { 名称: "材料费5", 医疗收入: 3792,id:'材料费5' },
              { 名称: "材料费6", 医疗收入: 4593,id:'材料费6' },
              { 名称: "材料费7", 医疗收入: 5460,id:'材料费7' },
              { 名称: "材料费8", 医疗收入: 2115,id:'材料费8' }
            ]
          },
          staust: 104,
          msg: "成功"
        }
      };
      return obj;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/myTable";
</style>
