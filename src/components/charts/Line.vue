<template>
  <ve-line :data="line_data" :extend="chartExtend"></ve-line>
</template>

<script>
export default {
  props: ["line_data"],
  data() {
    const slef = this;
    this.chartExtend = {
      tooltip(v) {
        v.axisPointer = {type:'line'}
        let columns = slef.line_data.columns;
        let rows =slef.line_data.rows;
        v.formatter = function([params]) {
          const str = `
            <div style="height:100px;width:200px;paddind:10px;">
              <span>${columns[1]} : ${rows[params.dataIndex]['访问用户']} ${rows[params.dataIndex]['访问用户'] > 0 ? '<i style="color:red;" class="el-icon-top"></i>' : '<i style="color:green;" class="el-icon-bottom"></i>'}</span>
            </div>
          `
          return str
          // console.log(slef.line_data,params)
        }
        return v
      },
      legend(v) {
        v.data.splice(2,1)
        return v
      }
    }
    return {
      
    }
  },
};
</script>