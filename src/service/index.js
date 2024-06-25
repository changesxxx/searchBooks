import request from './request'

export const searchBooks = function (bookParam) {
  return request.get({
    url: 'volumes',
    params: {
      q: bookParam,
    },
  })
}
