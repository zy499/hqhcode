<template>
  <div class="about">
    <Pie :pie_data="pie_chartData" :pie_loding="pieLonding" :data_Empty="data_Empty" />
    <!-- <Line_chart :line_data="Line_chartData" /> -->
    <!-- <Histogram :histogram_data="histogram_chartData" /> -->
    <!-- <div id="myTb">
      <el-table :data="tableData" :stripe="false" style="width: 50%;">
        <el-table-column prop="科室" label="科室" width="180"></el-table-column>
        <el-table-column prop="总收入" label="总收入" width="180"></el-table-column>
        <el-table-column prop="同比收入" label="同比收入" width="180">
          <template slot-scope="scope">
            <span style="margin-left:10px;">{{parseInt((scope.row['同比收入']/10000)*100)/100 + '万元'}}</span> -->
            <!-- <i  v-if="parseInt((scope.row['同比收入']/10000)*100)/100 > 0" class="el-icon-top" style="color:red"></i>
            <i v-else class="el-icon-bottom" style="color:green"></i> -->
            <!-- <i :class="parseInt((scope.row['同比收入']/10000)*100)/100 > 0 ? 'el-icon-top' : 'el-icon-bottom'" :style="parseInt((scope.row['同比收入']/10000)*100)/100 > 0 ? 'color:red;' : 'color:green;'"></i> -->
            <!-- <span style="margin-left:10px;" v-html="parseInt((scope.row.同比收入 /10000)*100)/100 > 0 ? '<i class=\'el-icon-top\' style=\'color:red;\'></i>' : '<i class=\'el-icon-bottom\' style=\'color:green;\'></i>'"></span>
          </template>
        </el-table-column>
        <el-table-column prop="环比收入" label="环比收入"></el-table-column>
      </el-table>
    </div> -->
  </div>
</template>
<script>
function html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, function(c) {
    return { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c];
  });
}
import Pie from "../components/charts/Pie";
import Line_chart from "../components/charts/Line";
import Histogram from "../components/charts/Histogram";
import { setTimeout } from "timers";
export default {
  created() {
    let html = '<i class="el-icon-top"></i>';
    const slef = this;
    setTimeout(() => {
      let res = slef.getData();
      if (res.data.staust === 104) {
        slef.pieLonding = false; //1.关闭loading
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
          科室: "内科",
          总收入: "40099037",
          同比收入: "-342350934",
          环比收入: "346456456"
        },
        {
          科室: "外科",
          总收入: "40099037",
          同比收入: "342350934",
          环比收入: "346456456"
        },
        {
          科室: "重症",
          总收入: "40099037",
          同比收入: "-342350934",
          环比收入: "346456456"
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
    encodeHtml(s) {
      const REGX_HTML_ENCODE = /“|&|’|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
      return typeof s != "string"
        ? s
        : s.replace(this.REGX_HTML_ENCODE, function($0) {
            var c = $0.charCodeAt(0),
              r = ["&#"];
            c = c == 0x20 ? 0xa0 : c;
            r.push(c);
            r.push(";");
            return r.join("");
          });
    },
    getData() {
      let obj = {
        data: {
          chartData: {
            columns: ["名称", "医疗收入"],
            rows: [
              { 名称: "材料费", 医疗收入: 1393, id: "材料费" },
              { 名称: "材料费2", 医疗收入: 3530, id: "材料费2" },
              { 名称: "材料费3", 医疗收入: 2923, id: "材料费3" },
              { 名称: "材料费4", 医疗收入: 1723, id: "材料费4" },
              { 名称: "材料费5", 医疗收入: 3792, id: "材料费5" },
              { 名称: "材料费6", 医疗收入: 4593, id: "材料费6" },
              { 名称: "材料费7", 医疗收入: 5460, id: "材料费7" },
              { 名称: "材料费8", 医疗收入: 2115, id: "材料费8" }
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
