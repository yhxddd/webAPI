function animate(obj,target,callback) {
    //不断点击按钮 元素的速度越来越快，因为开启了太多的定时器
    //解决方法:只执行一个定时器
    clearInterval(obj.timer);//清除原来的定时器
    obj.timer = setInterval(function () {
        //步长值写在定时器里面
        //防止移动位置不准确 将step改为整数 向上取整
        //var step = Math.ceil(target - obj.offsetLeft) / 10;
        //后退时要向下取整
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft === target) {
            //停止动画
            clearInterval(obj.timer);
            if(callback){
                console.log('callback');
                callback();
            }
        }
        //把每次+1的步长值 改为 步长公式
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}
