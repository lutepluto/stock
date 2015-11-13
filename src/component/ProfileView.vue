<style>
.profile {
  padding: 15px 10px;
  overflow: hidden;
  background: #f8f8f8;
}

.profile .avatar {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  overflow: hidden;
}

.profile .avatar img {
  width: 100%;
}

.profile .detail {
  padding: 0 10px;
  overflow: hidden;
}

.profile .username {
  color: #555;
  font-size: 16px;
  margin-bottom: 5px;
}

.profile .username small {
  display: inline-block;
  text-indent: 5px;
  color: #999;
  font-size: 90%;
}

.profile .fields {
  color: #777;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<template>
  
  <div class="home-view">

    <property></property>

    <section class="profile">
      <div class="avatar">
        <img :src="headImgUrl">
      </div>
      <div class="detail">
        <h3 class="username">{{ username }}<small>主理</small></h3>
        <p class="fileds">{{ formatFields }}</p>
      </div>
    </section>

    <chart></chart>

    <section class="cell">
      <div class="bordered-title">
        <h3 class="title">陆老师寄语</h3>
      </div>
      <div class="cell-content"></div>
    </section>

  </div>

</template>

<script>
import Property from './Property.vue'
import Chart from './Chart.vue'

export default {

  name: 'HomeView',

  components: {
    Property,
    Chart
  },

  data() {
    return {
      username: '',
      headImgUrl: '',
      fields: []
    }
  },

  computed: {
    formatFields: function() {
      return this.fields.join('，')
    }
  },

  ready() {
    this.$http.get('profile', function(data, status, request) {
      this.$set('username', data.username)
      this.$set('headImgUrl', data.headImgUrl)
      this.$set('fields', data.fields)
    }).error(function(data, status, request) {
      console.error(data)
    })
  }
}
</script>