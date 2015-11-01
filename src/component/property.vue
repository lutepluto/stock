<style type="text/css">
.property {
  padding: 0 10px;
  background-color: #ffa726;
}

.flexbox {
  display: -webkit-box;
  -webkit-box-pack: justify;  /* hack for android 4.1 4.3 */
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
}

.flexbox-item {
  -webkit-box-flex: 1;
  -webit-flex: 1;
  -moz-flex: 1 1 0;
  -ms-flex: 1 1 0;
  flex: 1 1 0;
}

.revenue,
.statistics {
  position: relative;
}

.revenue {
  color: #fff;
  font-weight: 700;
  font-size: 24px;
}

.revenue .flexbox-item {
  padding: 10px 0;
  position: relative;
  text-align: center;
}

.revenue .flexbox-item:not(:last-child):after {
  position: absolute;
  content: ' ';
  top: 20%;
  right: 0;
  bottom: 20%;
  width: 2px;
  border-radius: 2px;
  background-color: #fff;
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

.statistics .flexbox-item {
  position: relative;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  -moz-flex-basis: auto;
  -ms-flex-basis: auto;
  flex-basis: auto;
}

.statistics .flexbox-item:last-child:before {
  position: absolute;
  content: ' ';
  top: 0;
  left: 0;
  bottom: 0;
  width: 1px;
  background: rgba(239, 239, 239, .3);
}

.statistics .flexbox-item span,
.revenue .flexbox-item span {
  display: block;
}

.statistics .flexbox-item span:first-child,
.revenue .flexbox-item span:first-child {
  margin-bottom: 10px;
  color: rgba(239, 239, 239, .9);
}

.revenue .flexbox-item span:first-child {
  color: #fff;
  font-size: 16px;
}
</style>

<template>
  <section class="property">
    <div class="flexbox revenue">
      <div class="flexbox-item">
        <span>月收益</span>
        <span>{{ totalAvenue }}%</span>
      </div>
      <div class="flexbox-item">
        <span>基金净值</span>
        <span>{{ netPrice }}</span>
      </div>
    </div>
    <div class="flexbox statistics">
      <label class="flexbox-item">
        <span>周</span>
        <span>{{ dayIncreaseRate }}%</span>
      </label>
      <label class="flexbox-item">
        <span>月</span>
        <span>{{ monthIncreaseRate }}%</span>
      </label>
      <label class="flexbox-item">
        <span>当前净值</span>
        <span>{{ netPrice }}</span>
      </label>
      <label class="flexbox-item">
        <span>总收益相对（沪深）</span>
        <span>跑赢{{ property.rank }}％</span>
      </label>
    </div>
  </section>
</template>

<script>
  'ues strict'

  module.exports = {
    data: function() {
      return {
        property: ''
      }
    },
    computed: {
      totalAvenue: function() {
        return ((this.property.currentPrice - this.property.originalPrice) / this.property.originalPrice * 100).toFixed(2)
      },
      netPrice: function() {
        return (this.property.currentPrice / 10000).toFixed(4)
      },
      dayIncreaseRate: function() {
        return (this.property.increaseInDay / (this.property.currentPrice - this.property.increaseInDay) * 100).toFixed(2)
      },
      monthIncreaseRate: function() {
        return (this.property.increaseInMonth / (this.property.currentPrice - this.property.increaseInMonth) * 100).toFixed(2)
      }
    },
    ready: function() {
      this.$http.get('property', function(data, status, request) {
        this.$set('property', data)
      }).error(function(data, status , request) {
        console.error(data)
      })
    }
  }

</script>