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
      <img v-bind:src="headImgUrl">
    </div>
    <div class="detail">
      <h3 class="username">{{ username }}<small>主理</small></h3>
      <p class="fileds">{{ fields.join('，') }}</p>
    </div>
  </section>
</template>

<script>
  'use strict'

  module.exports = {
    data: function() {
      return {
        'username': '涨停板达人',
        'headImgUrl': 'http://tp2.sinaimg.cn/1316141001/180/1281682695/1',
        'fields': ['行业反转', '医药', '医疗器械', '传媒娱乐']
      }
    }
  }

</script>
