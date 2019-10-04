<template>
  <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
    <slot />
  </mescroll-vue>
</template>
<script>
/* tslint:disable */
import MescrollVue from 'mescroll.js/mescroll.vue'
import Vue from 'vue'

export default {
  components: {
    MescrollVue
  },
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        // 以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 10 // 每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        // 这就是为什么无更多数据有时候不显示的原因
        toTop: {
          // 回到顶部按钮
          src: './static/mescroll/mescroll-totop.png', // 图片路径,默认null,支持网络图
          offset: 1000 // 列表滚动1000px才显示回到顶部按钮
        },
        empty: {
          // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: 'xxid', // 父布局的id (1.3.5版本支持传入dom元素)
          icon: './static/mescroll/mescroll-empty.png', // 图标,默认null,支持网络图
          tip: '暂无相关数据~' // 提示
        }
      },
      dataList: [] // 列表数据
    }
  },
  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter()
    })
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave()
    next()
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {}
  }
}
</script>