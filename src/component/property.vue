<style type="text/css">
.property {
  padding: 0 10px;
  background-color: #ffa726;
}

.revenue,
.statistics {
  position: relative;
  display: flex-box;
  display: -moz-flex;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
}

.revenue {
  color: #353535;
  font-size: 24px;
  font-weight: 700;
}

.revenue label {
  -webkit-box-flex: 1;
  -webit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1 1 0;
  -ms-flex: 1 1 0;
  flex: 1 1 0;

  position: relative;
  padding: 20px 0;
  text-align: center;
}

.revenue label:not(:last-child):after {
  position: absolute;
  content: ' ';
  top: 20%;
  right: 0;
  bottom: 20%;
  width: 2px;
  border-radius: 2px;
  background-color: #353535;
}

.statistics {
  padding: 10px 0;
  color: #fff;
  font-size: 12px;
}

.statistics:before {
  position: absolute;
  content: ' ';
  top: 0;
  right: auto;
  width: 100%;
  height: 1px;
  background: rgba(239, 239, 239, .3);
}

.statistics label {
  -webkit-box-flex: 1;
  -webit-flex: 1;
  -moz-box-flex: 1;
  -moz-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;

  position: relative;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
}

.statistics label:last-child:before {
  position: absolute;
  content: ' ';
  top: 0;
  left: 0;
  bottom: 0;
  width: 1px;
  background: rgba(239, 239, 239, .3);
}

.statistics label span {
  display: block;
}

.statistics label span:first-child {
  margin-bottom: 10px;
  color: rgba(239, 239, 239, .9);
}
</style>

<template>
  <section class="property">
    <div class="revenue">
      <label>{{ ((currentPrice - originalPrice) / originalPrice * 100).toFixed(2) }}%</label>
      <label>{{ (currentPrice / 10000).toFixed(4) }}</label>
    </div>
    <div class="statistics">
      <label>
        <span>日</span>
        <span>{{ (increaseInDay / (currentPrice - increaseInDay) * 100).toFixed(2) }}%</span>
      </label>
      <label>
        <span>月</span>
        <span>{{ (increaseInMonth / (currentPrice - increaseInMonth) * 100).toFixed(2) }}%</span>
      </label>
      <label>
        <span>净值</span>
        <span>{{ (currentPrice / 10000).toFixed(4) }}</span>
      </label>
      <label>
        <span>总收益排行（沪深）</span>
        <span>跑赢{{ rank }}组合</span>
      </label>
    </div>
  </section>
</template>

<script>
  'ues strict'

  module.exports = {
    data: function() {
      return {
        'totalUnits': 1000000,
        'originalPrice': 10000,
        'currentPrice': 16397,
        'increaseInDay': 20,
        'increaseInMonth': 120,
        'rank': 97.03
      }
    }
  }

</script>