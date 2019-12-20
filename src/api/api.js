import fetch from '../fetch'

export function demo1 (query) {
  console.log(111)
  return fetch({
    method: 'get',
    url: 'api/demo1',
    params: query,
    showLoading: true
  })
}

export function demo2 (query) {
  return fetch({
    method: 'post',
    url: 'api/demo2',
    data: query,
    showLoading: true
  })
}
