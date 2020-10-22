// components/icon-grid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    grids: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    readyObj: {},
    selectedId: 1,
    amount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      this.setData({
        selectedId: event.currentTarget.dataset.id
      })
      this.triggerEvent('select', this.data.selectedId, {})
    },

    onPost(event) {
      this.triggerEvent("post", event.detail.value, {})
    }
  },
  attached() {
    this.setData({
      readyObj: this.properties.grids[0]
    })
  }
})