import mockRequset from './mockRequest'

// 获取MD信息列表数据
export const getMDList = () => mockRequset.get('/markdownList')
// 获取文章列表
export const getArticles = () => mockRequset.get('/articleList')