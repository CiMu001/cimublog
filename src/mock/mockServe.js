import Mock from 'mockjs'
import markdownList from './markdownList.json'
import articleList from './articleList.json'

// 第一个参数请求地址， 第二参数 请求数据
Mock.mock("/mock/markdownList", function(opt){
    // console.log(opt, 'opt')
    return {
        code: 200,
        data: markdownList
    }
})
Mock.mock("/mock/articleList", {code:200, data: articleList})