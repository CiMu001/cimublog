/**
 * 此处使用的amfe-flexible 源码
 * 为了方便修改和学习我这边copy过来
 */
(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        var width = docEl.clientWidth

        // console.log({ width, dpr })
        if(width >= 1440) {
            width = width / 4
        }
        else if(1440 > width && width >= 1240) {
            width = width / 3.5
        }
        else if (1240 > width && width >= 960) {
            width = width / 3
        }
        else if (560 <= width && width < 960) {
            width = width / 2
        }
        else if(width < 560) {
            width = width / 1.5
        }

        var rem = width / 12
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
