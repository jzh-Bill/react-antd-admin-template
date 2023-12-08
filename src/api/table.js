import request from '@/utils/request'
export function tableList(data) {
  return request({
    url: '/table/list',
    method: 'post',
    data
  })
}

export function deleteItem(data) {
  return request({
    url: '/table/delete',
    method: 'post',
    data
  })
}
export function editItem(data) {
  return request({
    url: '/table/edit',
    method: 'post',
    data
  })
}

export function familyTableList(data) {
  return request({
    url: '/table/familyList',
    method: 'post',
    data
  })
}

export function attendeeTableList(data) {
  return request({
    url: '/table/attendeeList',
    method: 'post',
    data
  })
}

export function diningTableList(data) {
  return request({
    url: '/table/diningTableList',
    method: 'post',
    data
  })
}



