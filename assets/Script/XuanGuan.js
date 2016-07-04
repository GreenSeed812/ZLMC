cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {




    },
    Qiehuna1:function()
    {
        //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(1);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna2:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(2);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna3:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(3);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna4:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(4);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna5:function()
    {
         //获取常驻节点所绑定的脚本  
         var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(5);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna6:function()
    {
         //获取常驻节点所绑定的脚本  
         var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(6);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
    Qiehuna7:function()
    {
         //获取常驻节点所绑定的脚本  
       var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata(7);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('xuanguan')
        })));
    },
   
    
  
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
