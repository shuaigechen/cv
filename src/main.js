let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*你好，我叫陈峰
* 零基础转行学前端
* 目前学习两个月了
* 接下来展示一下我的学习成果
* 首先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我来把div变成一个八卦图
* 注意我要开始改变了
* 首先把div变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow : 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦分阴阳
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来我们加入魔丸和灵珠*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
   background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp'//如果字符是空格，就变成&nbsp，&nbsp是html里的转义空格
        } else {
            string2 += string[n];
        }
        //string2 += string[n] === '\n' ? '<br>' : string[n];
        //如果string2等于string2+string第n个字符是回车，那么string2就是换行，否则是string[n]
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 9999)
        if (n < string.length - 1) {
            n += 1;//n =n+1;
            step();
        }
    }, 50);
};
step();