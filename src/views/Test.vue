<template>
  <div>
    <h1>Test</h1>
    <el-select v-model="value" placeholder="请选择" :value="value" @change="handleChange">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="block">
      <span class="demonstration">查询时间</span>
      <el-date-picker
        v-model="dateValue"
        type="month"
        @change="dateChange"
        placeholder="选择月"
        value-format="yyyy-MM"
      ></el-date-picker>
      <h5>同比{{tongbiDate}}</h5>
      <h5>环比{{huanbiDate}}</h5>
    </div>
  </div>
</template>

<script>
import { mathRound, dateFormat, getDateType } from "../utils/util";
export default {
  mounted() {
    let obj = {
      ColHead: [
        "材料费1",
        "材料费2",
        "材料费3",
        "材料费4",
        "材料费5",
        "材料费6",
        "材料费7",
        "材料费8",
        "材料费9"
      ],
      ColId: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    };
    const { newArr, newId } = this.formatArr(obj, this.$route.query.id);
    this.options = newArr;
    this.value = newId;
    this.dateValue =  getDateType('上一月');
    this.tongbiDate = getDateType('上一年');
    this.huanbiDate = getDateType('上二月');
  },
  data() {
    return {
      options: [],
      value: "",
      dateValue: "",
      tongbiDate: "",
      huanbiDate: ""
    };
  },
  methods: {
    dateChange(v) {
      if (v) {
        let currentYear = parseInt(v.split("-")[0]); //当前年
        let lastYear = parseInt(v.split("-")[0]) - 1; //上一年
        let month = parseInt(v.split("-")[1]); //当前月
        let srtMoth = parseInt(v.split("-")[1]).toString(); // string类型
        this.tongbiDate = lastYear.toString() + "-" + v.split("-")[1];
        if (month <= 1 && srtMoth.length < 2) {
          this.huanbiDate = lastYear + "-" + "12";
        } else if (srtMoth.length < 2) {
          let newStrMoth = srtMoth - 1;
          this.huanbiDate = currentYear + "-" + "0" + newStrMoth;
        } else {
          let newStrMoth = srtMoth - 1;
          this.huanbiDate = currentYear + "-" + newStrMoth;
        }
      }
    },
    getDate(data) {
      api
        .getCommonInfo(
          Object.assign({ name: "zhang", age: "18", sex: "男" }, data)
        )
        .then(res => {
          if (res.data) {
            return res.data.charData;
          }
        });
    },
    handleChange(v) {
      let data = this.getDate({
        fyflkey: [`${v}`]
      });
    },
    formatArr({ ColHead, ColId }, id = "id") {
      let newArr = [];
      let newId = "";
      try {
        if (!Array.isArray(ColHead)) throw "调用formatArr方法时传入的ColHead不是一个数组";
        if (!Array.isArray(ColId)) throw "调用formatArr方法时传入的ColId不是一个数组";
        if (ColHead.length !== ColId.length) throw "调用formatArr方法时传入的ColHead与ColId长度不相等";
        ColHead.forEach((item, i) => {
          if (item === id) {
            newId = ColId[i];
          }
          let obj = {
            value: ColId[i],
            label: item
          };
          newArr.push(obj);
        });
      } catch (error) {
        console.error(error);
      }
      return { newArr, newId };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>