<template>
  <div>
    <p class="title"><i class="fa fa-sort-amount-desc"></i>用户积分排名</p>
    <el-table
      border
      v-loading="loading"
      :data="tableData"
      style="width: 100%;margin-top: 10px">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="user_id"
        label="用户ID">
      </el-table-column>
      <el-table-column
        prop="user_name"
        label="用户名">
      </el-table-column>
      <el-table-column
        sortable
        prop="total_points"
        label="用户积分">
      </el-table-column>
      <el-table-column
        sortable
        prop="points_level"
        label="用户活跃度水平">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {fetch_points} from "../../api/admin_apis";
  export default {
    name: "maintable",
    data () {
      return {
        tableData: [],
        loading: true
      }
    },
    methods: {
      getRange() {
        fetch_points().then(res => {
          // console.log(res.data)
          this.tableData=res.data
          this.loading = false
        }).catch((err) => {
          console.log(err)
        }).catch(res => {
          this.$message({
            showClose: true,
            message: res.msg,
            type: "error"
          })
        })
      }
    },
    mounted() {
     this.getRange ();
    }
  }
</script>

<style scoped>
</style>
