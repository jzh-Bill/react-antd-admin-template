import request from '@/utils/request'
export function excelList() {
  return request({
    url: '/attendee/list',
    method: 'get'
  })
}