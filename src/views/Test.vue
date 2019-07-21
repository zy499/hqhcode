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
        placeholder="选择月"
        @change="getDate"
        value-format="yyyy-M"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
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
    const { newArr, newId } = this.formatArr(obj, this.$route.query.id);
    this.options = newArr;
    this.value = newId;
    this.value2 = "2019-3";
  },
  data() {
    return {
      id: "",
      options: [],
      value: "",
      value2: ""
    };
  },
  methods: {
    getDate(v) {
      console.log(v);
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
    handleChange(val) {
      console.log(val);
    },
    getObj(val) {}
  }
};
</script>

<style lang="scss" scoped>
</style>