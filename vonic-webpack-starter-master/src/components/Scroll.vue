<template>
  <div class="page has-navbar page-scalable" v-nav="{title: '滚动', showBackButton: true, onBackButtonClick: back}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <item v-for="(item, index) in items" :key="index" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </item>

      <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>
<script>
export default {
  name: 'Scroll',
  data: () => ({
    items: [],
    infiniteCount: 0
  }),
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.')
    }
    this.top = 1
    this.bottom = 20
  },
  methods: {
    back () {
      $router.back('/')
    },
    onRefresh(done) {
      setTimeout(() => {
        let start = this.top - 1
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }
        this.top = this.top - 10;

        done()
      }, 1500)
    },
    onInfinite(done) {
      setTimeout(() => {
        if (this.infiniteCount < 2) {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;

          this.infiniteCount++
        }
        done()
      }, 1500)
    },
    onItemClick(index) {
      console.log(index)
    }
  }
}
</script>
