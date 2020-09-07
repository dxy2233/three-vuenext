import request from '@/utils/request'

/**
 * @description 根据漏洞信息id删除相关信息
 * @param id id
 */
export function deleteFlawById(data) {
  return request({
    url: '/flaw/deleteFlawById',
    method: 'get',
    prams: data,
  })
}

/**
 * @description 导出漏洞信息的Word文档
 * @param title 漏洞标题
 * @param leakType 漏洞类型
 * @param addTime 录入时间
 * @param repairVisble 是否显示整改按钮
 * @param noticeVisble 是否显示通报按钮
 * @param name 部门名称
 * @param operationUnit 运营单位
 * @param hazardLevel 危害级别(0:低,1：中,2:高)
 * @param exportVisble 是否显示导出按钮
 * @param id id
 * @param repairTime 整改时间
 * @param deleteVisble 是否显示删除按钮
 * @param ipAddr ip地址
 * @param filler 填写人
 * @param editVisble 是否显示编辑按钮
 * @param sourceState 数据来源:0录入，1导入
 */
export function downloadWord(data) {
  return request({
    url: '/flaw/downloadWord',
    method: 'post',
    data,
  })
}

/**
 * @description 漏洞附件上传
 * @param file file
 */
export function flawAttachUpload(data) {
  return request({
    url: '/flaw/flawAttachUpload',
    method: 'post',
    data,
  })
}

/**
 * @description 根据ID获取漏洞信息
 * @param id id
 */
export function getFlawById(data) {
  return request({
    url: '/flaw/getFlawById',
    method: 'get',
    prams: data,
  })
}

/**
 * @description 漏洞信息条件和分页查询
 * @param projectName 项目名称
 * @param title 漏洞标题
 * @param startTime 录入开始时间
 * @param endTime 录入结束时间
 * @param startPage 页面编号
 * @param pageSize 页面大小
 * @param leakType 漏洞类型
 * @param hazardLevel 危害级别
 * @param sourceState 数据来源:0录入，1导入
 */
export function getFlawPage(data) {
  return request({
    url: '/flaw/getFlawPage',
    method: 'post',
    data,
  })
}

/**
 * @description 漏洞导入
 * @param myfile myfile
 */
export function importFlaw(data) {
  return request({
    url: '/flaw/importFlaw',
    method: 'post',
    data,
  })
}

/**
 * @description 整改漏洞
 * @param id id
 */
export function repairFlaw(data) {
  return request({
    url: '/flaw/repairFlaw',
    method: 'get',
    prams: data,
  })
}

/**
 * @description 保存漏洞信息
 * @param title 漏洞名称
 * @param id 主键ID
 * @param leakDescribe 漏洞描述
 * @param leakType 漏洞类型（0：通用型漏洞）
 * @param flawLink 漏洞链接
 * @param verificationInformation 验证信息（0未验证、1验证）
 * @param attachmentUrl 漏洞附件地址
 * @param hazardLevel 危害级别(0:低,1：中,2:高)
 * @param leakSolution 漏洞解决方案
 * @param referenceLink 参考链接
 * @param attachmentName 漏洞附件名称
 * @param projectId 项目Id
 * @param influencingProducts 影响系统
 * @param vendorPatch 厂商补丁
 */
export function saveFlaw(data) {
  return request({
    url: '/flaw/saveFlaw',
    method: 'post',
    data,
  })
}
