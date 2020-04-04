var result=`/*看到我的小可爱,你好呀
 *今天是个美好的日子
 *送你一只皮卡丘吧
 */

/*鲜亮光滑的皮肤*/
.preview{
    background:#FEE433;
}
/*小巧玲珑的鼻子*/
.nose{
    border:12px solid transparent;
    border-radius:50%;
    border-top-color: black;
    position:absolute;
    top:28px;
    left:50%;
    transform:translateX(-50%);
    }
/*可爱动人的大眼睛*/
.eye{
    width:49px;
    height:49px;
    border-radius:50%;
  }
.eye.left{
    right:50%;
    margin-right:90px;
}
.eye.right{
    left:50%;
    margin-left:90px;
}
/*眼里还要有星光*/
.eye::before{
    width:24px;
    height:24px;
    background:white;
    border-radius:50%;
    left:8px;
  }
/*脸要美美哒*/
.cheek{
    width:68px;
    height:68px;
    background:#FC0D1C;
    border-radius:50%;
    top:85px;
  }
.cheek.right{
    left:50%;
    margin-left:116px;
  }
.cheek.left{
    right:50%;
    margin-right:116px;
  }
  /*嘴角要有欢喜*/
.upperLip{
    width:80px;
    height:20px;
    border:3px solid black;
    position:absolute;
    top:49px;
    background:#FEE433;
  }
.upperLip.left{
    right:50%;
    border-bottom-left-radius:40px 20px;
    border-right:none;
    border-top:none;
    transform:rotate(-20deg);
  }
.upperLip.right{
    left:50%;
    border-bottom-right-radius:40px 20px;
    border-left:none;
    border-top:none;
    transform:rotate(20deg);
  }
.lowerLip-wrapper{
    left: 50%;
    margin-left: -150px;
    bottom: 0;     
    height: 110px;
    width: 300px;
  }
.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 1px solid black;
    bottom: 0;  
  }
.lowerLip::after{
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
  }
`
let duration=50
function writeCode(code){
    var domCode=document.querySelector('#code')
    var n=0
    setTimeout(function fn(){
        n+=1
        domCode.innerHTML=code.substring(0,n)
        domCode.innerHTML=Prism.highlight(domCode.innerHTML,Prism.languages.css)
        domCode.scrollTop = domCode.scrollHeight
        styleTag.innerHTML=code.substring(0,n)
        if(n<code.length){
            setTimeout(fn,duration)//函数这里表示参数的时候不加（）
        }
    },duration)
   
}
writeCode(result)
$('.actions').on('click','button',function(e){
    let $button=$(e.currentTarget)
    let speed=$button.attr('data-speed')
    console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            duration=100;
            break;
        case 'normal':
            duration=50;
            break;
        case 'fast':
            duration=10;
            break;
    }
})