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
  <section class="profile">
    <div class="avatar">
      <img :src="headImgUrl">
    </div>
    <div class="detail">
      <h3 class="username">{{ username }}<small>主理</small></h3>
      <p class="fileds">{{ formatFields }}</p>
    </div>
  </section>
</template>

<script>
  'use strict'

  module.exports = {
    data: function() {
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
    ready: function() {
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
