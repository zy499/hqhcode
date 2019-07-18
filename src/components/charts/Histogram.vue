<template>
  <ve-histogram :data="histogram_data" :events="chartsEvent"></ve-histogram>
</template>

<script>
export default {
  props: {
    histogram_data: Object
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