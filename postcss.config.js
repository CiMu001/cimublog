module.exports = () => ({
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
        },
        // 'postcss-px-to-viewport': {
        //     // (String) 需要转换的单位，默认为"px"
        //     unitToConvert: 'px',
        //     // (Number) 设计稿的视口宽度
        //     viewportWidth: 1920,
        //     // (Number) 单位转换后保留的精度
        //     unitPrecision: 8,
        // }
    }
})
