import router from './router'

import NProgress from 'nprogress'
import getPageTitle from "utils/get-page-title"; // progress bar

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {

  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  import.meta.env.VITE_LOG_ROUTE === 'true' && console.log({ from,to })
  next();
})

router.afterEach(() => {
  NProgress.done()
  import.meta.env.VITE_LOG_ROUTE === 'true' && console.log('end')
})
