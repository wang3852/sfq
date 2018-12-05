// 准备工作：从服务器端拿数据
var arr = ['../img/fq1.jpg', '../img/fq2.jpg', '../img/fq3.jpg', '../img/fq4.jpg', '../img/fq5.jpg'];

// 功能一:给所有的li添加背景图片
var $list = $('#box ul li');
arr.forEach( function (item,index) {
    $list
        .eq(index)
        .css('background-image','url('+item+')');
});
// 功能二:注册鼠标进入事件
// 功能三：注册鼠标离开事件
 $('#box > ul > li').hover( function () {
    
 }, function () {
 
 });