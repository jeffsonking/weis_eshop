/*
自定义过滤器模块
 */
import format from 'date-fns/format'
import Vue from 'vue'

Vue.filter('dateString', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})