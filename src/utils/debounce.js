/**
 * 防抖函数
 */

export default function debounce(fun, wait) {
    let timeout = null;

    return function() {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(function() {
            fun()
        }, wait)
    }
}