<template>
  <div>
    <ve-pie
      :data="pie_data"
      :loading="pie_loding"
      :data-empty="data_Empty"
      :legend="pie_legend"
      :events="chartEvent"
    ></ve-pie>
  </div>
</template>

<script>
import "v-charts/lib/style.css";
export default {
  props: {
    pie_data: Object,
    pie_loding: Boolean,
    data_Empty: Boolean
  },
  data() {
    const slef = this;
    this.chartEvent = {
      click(e) {
        let name = e.name;
        let id = "";
        const { rows } = slef.pie_data;
        rows.forEach(item => {
          if (item["名称"] === name) {
            id = item.id;
          }
        });
        slef.$router.push({
          path: "/test",
          query: {
            id
          }
        });
      }
    };
    return {};
  },
  methods: {
    formatPieData(data) {
      let selected = {};
      // //1.排序 根据收入从大到小
      // 2，组装selected对象 来显示前5个
      // 3, 给data里pie_legend下的selected 赋值selected对象
      let array = data.rows;
      array.sort((a, b) => {
        return b["医疗收入"] - a["医疗收入"];
      });
      array.forEach((item, i) => {
        selected[item["名称"]] = i < 5;
      });
      return selected;
    }
  },
  computed: {
    pie_legend: function() {
      let obj = {
        selected: {}
      };
      if (
        this.pie_data &&
        this.pie_data.rows &&
        this.pie_data.rows.length > 0
      ) {
        obj.selected = this.formatPieData(this.pie_data);
      }
      return obj;
    }
  }
};
</script>