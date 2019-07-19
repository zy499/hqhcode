<template>
  <div>
    Test
    <h1>id</h1>
    {{id}}
    <el-select v-model="value" placeholder="请选择" :value="value" @change="handleChange">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  mounted() {
    this.id = this.$route.query.id;
    this.value =  this.$route.query.id
    let arr = [
      "材料费1",
      "材料费2",
      "材料费3",
      "材料费4",
      "材料费5",
      "材料费6",
      "材料费7",
      "材料费8",
      "材料费9"
    ];
    this.options =this.formatArr(arr);
  },
  data() {
    return {
      id: "",
      options: [],
      value: ""
    };
  },
  methods: {
    formatArr(arr) {
      let newArr= []
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          let obj = {
            value: item,
            label: item
          };
          newArr.push(obj)
        });
        return newArr
      }else{
        return null
      }
    },
    handleChange(val) {
      
    },
    getObj(val){
    }
  },
};
</script>

<style lang="scss" scoped>
</style>