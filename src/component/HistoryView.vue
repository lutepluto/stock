<style>
.history-item {
  font-size: 14px;
  color: #fff;
  border-color: #686868;
  background-color: #686868;
}
</style>

<template>
<div class="history-view">
  <ul class="list inset">
    <li class="item history-item" v-for="revenue in revenues">
      <div class="item-lr">
        <label class="lr-right">{{ revenue.amount }}</label>
        <label class="lr-left">{{ revenue.day }}</label>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {

  name: 'HistoryView',

  data() {
    return {
      revenues: []
    }
  },

  ready() {
    this.$http.get('revenues', function(data, status, request) {
      this.$set('revenues', data)
    }).error(function(data, status, request) {
      console.error(status)
    })
  }

}
</script>