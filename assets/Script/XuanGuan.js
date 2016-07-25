cc.Class({
    extends: cc.Component,

    properties: {
        mask : {default:null,type:cc.Node},
        mask2: {default:null,type:cc.Node},
        dy   : {default:0},
        ddy  : {default:0},
        xuanxiang:{default:null,type:cc.Node},
        fanhui:{default:null,type:cc.Button}
    },

    // use this for initialization
    onLoad: function () {
        this.mask.on('touchstart', this.clickstart, this);
        this.mask.on('touchmove', this.clickmove, this);
        this.xuanxiang.active=false;
        this.fanhui.node.active=false;
    },
    clickstart:function(event)
    {
        this.dy=event.getLocationY();  
        console.log("点击开始"+this.dy);
    }, 
    clickmove:function(event)
    {
         console.log("点击"+this.mask2.y);
           if(this.dy-event.getLocationY()>0){
               if(this.mask2.y>=50)
               {
                   this.mask2.y-=15;
               }
              
           }
           if(this.dy-event.getLocationY()<0){
              
              if(this.mask2.y<=1920)
               {
                   this.mask2.y+=15;
               }
           }
    }, 
    Qiehuna1:function()
    {
        //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(1); 
  
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna2:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(2);  
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna3:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(3);  
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna4:function()
    {
        //获取常驻节点所绑定的脚本
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值
        node.setdata(4);
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna5:function()
    {
         //获取常驻节点所绑定的脚本  
         var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(5);  
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna6:function()
    {
         //获取常驻节点所绑定的脚本  
         var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(6);  
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna7:function()
    {
         //获取常驻节点所绑定的脚本  
       var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(7);
        this.xuanxiang.active=true;
        this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    back:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('menu')
        })));
    }
   
    
  
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
