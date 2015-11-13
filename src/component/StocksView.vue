<style>
.stock-category {
  padding-left: 10px;
  border-top: 0;
  border-left: 10px solid #ffa726;
  background-color: #686868;
  color: #fff;
  font-size: 14px;
}

.stock-category.green {
  border-left-color: #24986D;
}

.stock-item .code {
  color: #a8a8a8;
  font-size: 12px;
}

.stock-item .badge {
  margin-top: 5px;
}
</style>

<template>
<div class="stocks-view">
  <div class="list">
    <template v-for="(index, group) in pool">
      <div class="item stock-category {{ index / 2 == 0 ? 'green' : '' }}">{{ group.category }}</div>
      <div class="item stock-item" v-for="stock in group.stocks">
        <div class="item-lr">
          <div class="lr-right">
            <span class="badge">有仓位</span>
          </div>
          <div class="lr-left">
            <p class="name">{{ stock.name }}</p>
            <span class="code">{{ stock.code }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: 'StocksView',

  data() {
    return {
      pool: []
    }
  },

  ready() {
    this.$http.get('pool', function(data, status, request) {
      this.$set('pool', data)
    }).error(function(data, status, request) {
      console.dir(data)
    })
  }
}
</script>