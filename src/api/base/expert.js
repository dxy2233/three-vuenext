import request from '@/utils/request'

/**
 * @description 根据id删除审计人员
 * @param id id
 */
export function deleteById(data) {
  return request({
    url: '/expert/deleteById',
    method: 'get',
    prams: data,
  })
}

/**
 * @description 审计人员信息条件和分页查询
 * @param orgNodeName 单位名称
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param name 姓名
 * @param phone 手机
 */
export function getExpertPage(data) {
  return request({
    url: '/expert/getExpertPage',
    method: 'post',
    data,
  })
}

/**
 * @description 审计人员信息保存
 * @param tel 办公电话
 * @param qq QQ
 * @param email 邮箱
 * @param sex 性别
 * @param idCard 身份证号
 * @param id id
 * @param name 姓名
 * @param phone 手机号码
 * @param orgNodeName 所属单位名称
 */
export function save(data) {
  return request({
    url: '/expert/save',
    method: 'post',
    data,
  })
}
