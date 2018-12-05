// 模拟从服务器获取数据
var arr = ['./images/fq1.jpg', './images/fq2.jpg', './images/fq3.jpg', './images/fq4.jpg', './images/fq5.jpg'];
// 1.循环遍历给每一个li添加背景图片
// 使用的forEach函数
arr.forEach(function (item, index) {
    // 给li添加背景图片
    $('#box > ul > li')
        .eq(index)
        .css('background-image', 'url(' + item + ')');
})
// 2.注册鼠标进入事件，让当前的li宽度达到800，其他的li宽度为100
$('#box > ul > li').mouseover(function () {
    $(this)
        .stop()
        .animate({
            width: 800
        }, 1000, 'swing')
        .siblings()
        .stop()
        .animate({
            width: 100
        }, 1000, 'swing');

});
// 3.注册鼠标离开事件，所有的li宽度均为240
$('#box > ul > li').mouseout(function () {
    $('#box > ul > li')
        .stop()
        .animate({
            width: 240
        }, 1000, 'swing');
});
// 再来一遍
// var arr = ['../images/fq1.jpg', '../images/fq2.jpg', '../images/fq3.jpg', '../images/fq4.jpg', '../images/fq5.jpg'];
// // 添加背景图片
// var $list = $('#box > ul > li');
// arr.forEach( function (item,index) {
//     $list
//         .eq(index)
//         .css('background-image','url('+item+')')
// })
// // 进入事件
// $list.mouseover( function () {
//     $(this)
//         .stop()
//         .animate({
//             width:800
//         },500)
//         .siblings()
//         .stop()
//         .animate({
//             width:100
//         },500);
    
// });
// // 离开事件
// $('#box').mouseout( function () {
//     $list
//         .stop()
//         .animate({
//             width:240
//         },500);
// });