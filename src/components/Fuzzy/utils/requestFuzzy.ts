import type { Api } from '../types'

function requestFuzzy(api: string | Api) {
  console.log('api: ', api)

  return {
    get() {},
    post() {},
    delete() {},
  }
}

export {
  requestFuzzy,
}
