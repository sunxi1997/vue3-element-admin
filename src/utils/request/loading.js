import { ElLoading as $Loading } from 'element-plus'

/**
 * loading 工厂函数
 * 解决多个api同时请求时, 任意一个返回就会关闭loading的问题
 * 调用 n 次 showLoading, 就需要调用 n 次 hideLoading才能关闭全屏loading
 */
export default class Loading {
  count = 0
  loading

  showLoading() {
    this.count++
    this.loading = $Loading.service({
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }

  hideLoading() {
    if (this.count > 0 && this.loading) {
      --this.count || this.loading.close()
    }
  }
}
