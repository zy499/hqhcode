<template>
  <div>
    Test
    <h1>{{id}}</h1>
    <el-select v-model="value" placeholder="请选择" :value="value" @change="handleChange">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <div class="block">
      <span class="demonstration">月</span>
      <el-date-picker
        v-model="value2"
        type="month"
        @change="dateChange"
        placeholder="选择月"
        value-format="yyyy-MM"
      ></el-date-picker>
      <h5>{{newDate}}</h5>
    </div>
  </div>
</template>

<script>
import { mathRound, dateFormat } from "../utils/util";
export default {
  mounted() {
    console.log(mathRound("546546465.163"));
    console.log(newTestArr);
    this.id = this.$route.query.id;
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
    let newTestArr = obj.ColHead.filter(item => {
      if (item !== "材料费7" && item !== "材料费8") {
        return item;
      }
    });
    const { newArr, newId } = this.formatArr(obj, this.$route.query.id);
    this.options = newArr;
    this.value = newId;
    this.value2 = new Date().Format("yyyy-MM");
    let int = parseInt(new Date().Format("yyyy-MM").split("-")[0]) - 1;
    this.newDate = int.toString() + "-" + this.value2.split("-")[1];
  },
  data() {
    return {
      id: "",
      options: [],
      value: "",
      value2: "",
      newDate: ""
    };
  },
  methods: {
    dateChange(v) {
      if (v) {
        let int = parseInt(this.value2.split("-")[0]) - 1;
        this.newDate = int.toString() + "-" + this.value2.split("-")[1];
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
      if (!Array.isArray(ColHead)) {
        throw new Error("ColHead不是一个数组");
      } else if (!Array.isArray(ColId)) {
        throw new Error("ColId不是一个数组");
      } else {
        if (ColHead.length === ColId.length) {
          let newArr = [];
          let newId = "";
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
          return { newArr, newId };
        } else {
          throw new Error("ColHead与ColId长度不相等");
        }
      }
    },
    getObj(val) {}
  }
};
</script>

<style lang="scss" scoped>
</style>