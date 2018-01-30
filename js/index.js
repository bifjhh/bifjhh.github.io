/*添加rem效果*/
design();//直接引用
window.onresize = function () {
    design();
};//当页面大小发生改变时触发
/*简单封装函数*/
function design() {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    var html = document.getElementsByTagName('html')[0];
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    /* 640 100  320 50 */
    var fontSize = 100 / 1920 * width; //如果页面的宽度超过了640px，那么页面中html的font-size恒为100px，否则，页面中html的font-size的大小为： 100 * (当前页面宽度 / 640)

    /*设置fontsize*/
    html.style.fontSize = fontSize + 'px';
}
