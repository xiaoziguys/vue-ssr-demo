import { createAPP } from './main.js'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createAPP()

    router.push(context.url)

    router.onReady(() => {
      context.rendered = () => {
        context.state = store.state
      }

      resolve(app)
    }, reject)
  })
}
