<template>
  <ve-histogram :data="histogram_data" :events="chartsEvent" ></ve-histogram>
</template>

<script>
export default {
  props: {
    histogram_data: Object
  },
  mounted() {
    let arr = this.histogram_data.rows;
    arr.sort((a, b) => {
      return b["下单用户"] - a["下单用户"];
    });
    // console.log(arr)
  },
  data() {
    const self = this;
    self.chartsEvent = {
      click(e) {
        const name = e.name;
        let array = self.histogram_data.rows;
        let obj_id = "";
        array.forEach(item => {
          if (name === item["日期"]) {
            obj_id = item.id;
          }
        });
        self.$router.push({
          path: "/test",
          query: {
            id: obj_id
          }
        });
      }
    };
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>