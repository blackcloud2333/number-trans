specialScrollPlus(golds,salePrice,time){
    // 确认动画时间为两秒
    let sTime = 0;
    let realTime = time*1000;
    let timer2; //计时器
    let signal = false; //是否动画信号
    let myGolds = (golds- salePrice); //最后剩下的钱
    let length = salePrice; // 动画历程
    let  frequency = realTime/20; //动画频次
    let step = length / frequency; // 动画步幅
    let minStep = 0.1; // 最小步幅
    step  = step > minStep ? step:minStep; //计算步幅
    let temp = length; //临时变量
    setTimeout(()=>{
        timer2 = setInterval(()=>{
            temp = (temp - step).toFixed(2);
            let transGolds =  (Number(myGolds) + Number(temp)).toFixed(2);
            if( temp >= step ) {
                this.setData({
                    transGolds: transGolds
                });
            }else{
                this.setData({
                    transGolds: myGolds
                });
                clearInterval(timer2);
            }
        },20);
    },500)
}