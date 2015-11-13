<style>
.bordered-title {
  margin-bottom: 10px;
  overflow: hidden;
  border-bottom: 1px solid #d3d3d3;
  color: #575757;
  line-height: 20px;
}

.bordered-title .title {
  margin: 0;
  padding: 0;
  float: left;
  font-size: 14px;
  text-indent: 4px;
}

.bordered-title .title-navigation {
  float: right;
  position: relative;
  padding-right: 20px;
  color: #a8a8a8;
}

.bordered-title .title-navigation:after {
  position: absolute;
  content: " ";
  width: 10px;
  height: 10px;
  right: 4px;
  border-right: 3px solid #a8a8a8;
  border-bottom: 3px solid #a8a8a8;
  -webkit-transform-origin: 100% 100% 0;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.progress {
  height: 20px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fafafa;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
}

.progress-bar {
  position: absolute;
  left: 0;
  right: auto;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  background-color: #5bc0de;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: transform .6s ease-in;
          transition: transform .6s ease-in;
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}

.progress-bar.reverse {
  left: auto;
  right: 0;
}

.progress-bar-red {
  background-color: #d9534f;
}
</style>

<template>
<section class="cell">
  <div class="bordered-title">
    <h3 class="title">持仓比例</h3>
    <a href="#/pool" class="title-navigation">股票池</a>
  </div>
  <div class="cell-content">
    <div class="progress">
      <span class="progress-bar" v-bind:style="{ width: this.ratio.currency * 100 + '%' }">
        现金（{{ this.ratio.currency * 100 }}%）
      </span>
      <span class="progress-bar progress-bar-red reverse" v-bind:style="{ width: this.ratio.stock * 100 + '%' }">
        股票（{{ this.ratio.stock * 100 }}%）
      </span>
    </div>
  </div>
</section>

<section class="cell">
  <div class="bordered-title">
    <h3 class="title">收益走势</h3>
    <a href="#/history" class="title-navigation">历史净值</a>
  </div>
  <div class="cell-content">
    <div style="border: 1px solid #fff; width: 100%; height: 80px; text-align: center; line-height: 80px; background: #f6f6f6;">
      开发中，敬请期待
    </div>
  </div>
</section>

</template>

<script>
export default {
  data() {
    return {
      ratio: ''
    }
  },
  ready() {
    this.$http.get('ratio', function(data, status, request) {
      this.$set('ratio', data)
    }).error(function(data, status, request) {
      console.error(data)
    })
  }
}
</script>