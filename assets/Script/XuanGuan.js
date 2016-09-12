cc.Class({
    extends: cc.Component,

    properties: {
        mask : {default:null,type:cc.Node},
        mask2: {default:null,type:cc.Node},
        dy   : {default:0},
        ddy  : {default:0},
        //xuanxiang:{default:null,type:cc.Node},
        fanhui:{default:null,type:cc.Button},
        
        
        GuanKa1: {default: null, type: cc.Button },
        GuanKa2: {default: null, type: cc.Button },
        GuanKa3: {default: null, type: cc.Button },
        GuanKa4: {default: null, type: cc.Button },
        GuanKa5: {default: null, type: cc.Button },
        GuanKa6: {default: null, type: cc.Button },
        GuanKa7: {default: null, type: cc.Button },
        
        JiaSuo2: {default: null, type: cc.Node },
        JiaSuo3: {default: null, type: cc.Node },
        JiaSuo4: {default: null, type: cc.Node },
        JiaSuo5: {default: null, type: cc.Node },
        JiaSuo6: {default: null, type: cc.Node },
        JiaSuo7: {default: null, type: cc.Node },
        
        GuanKaShuZu: {default: [], type: cc.Button },
        XuanGuanXiaoPrefab: { default: null, type: cc.Prefab },
        num: {default:0},
        IDNumCache: {default:0},
        //XuanGuanXiaoCache: {default:null},
        
    },

    // use this for initialization
    onLoad: function () {
        this.mask.on('touchstart', this.clickstart, this);
        this.mask.on('touchmove', this.clickmove, this);
        //this.xuanxiang.active=false;
        //this.fanhui.node.active=false;
        
        this.JiaSuo2.active = true;
        this.JiaSuo3.active = true;
        this.JiaSuo4.active = true;
        this.JiaSuo5.active = true;
        this.JiaSuo6.active = true;
        this.JiaSuo7.active = true;
        this.GuanKaShuZu.push(this.GuanKa1);
        this.GuanKaShuZu.push(this.GuanKa2);
        this.GuanKaShuZu.push(this.GuanKa3);
        this.GuanKaShuZu.push(this.GuanKa4);
        this.GuanKaShuZu.push(this.GuanKa5);
        this.GuanKaShuZu.push(this.GuanKa6);
        this.GuanKaShuZu.push(this.GuanKa7);
        
        this.XuanGuanXiaoCache = null;
    },
    
    update: function (dt) {
        var nodeNS = cc.find('data').getComponent('NewScript');
        // console.log("这里是关卡界面的更新，当前章数" + nodeNS.GuanKaState[0].Zhang);
        if (nodeNS.GuanKaState[0].Zhang == 2) {
            this.JiaSuo2.active = false;
        }
        if (nodeNS.GuanKaState[0].Zhang == 3) {
            this.JiaSuo3.active = false;
        }
        if (nodeNS.GuanKaState[0].Zhang == 4) {
            this.JiaSuo4.active = false;
        }
        if (nodeNS.GuanKaState[0].Zhang == 5) {
            this.JiaSuo5.active = false;
        }
        if (nodeNS.GuanKaState[0].Zhang == 6) {
            this.JiaSuo6.active = false;
        }
        if (nodeNS.GuanKaState[0].Zhang == 7) {
            this.JiaSuo7.active = false;
        }
    },

    suohui: function () {
        if (this.XuanGuanXiaoCache != null) {
            for (var i = this.IDNumCache; i < 7; i++ ) {
                // console.log("dddd");
                this.GuanKaShuZu[i].node.y += 90;
            }
            this.XuanGuanXiaoCache.removeFromParent();
            this.XuanGuanXiaoCache = null;
        }
    },
    
    gkXuanZeXiao: function () {
        var node = cc.find('data').getComponent('NewScript');
        var IDNum = node.getdata();
        if (this.IDNumCache != IDNum) {
            this.IDNumCache = IDNum;
            
            var XuanGuanXiao = cc.instantiate(this.XuanGuanXiaoPrefab);
            XuanGuanXiao.getComponent('XuanGuan_2').jiasuoPanDing();
            this.XuanGuanXiaoCache = XuanGuanXiao;
            // console.log("bbbbbbbbbbbbbbbbbbbbbbb");
            this.GuanKaShuZu[IDNum-1].node.addChild(XuanGuanXiao);
            XuanGuanXiao.setPosition(0,-220);
            for (var i = IDNum; i < 7; i++ ) {
                this.GuanKaShuZu[i].node.y -= 90;
            }
        } else {
            this.suohui();
            this.IDNumCache = 0;
        }
    },
    
    clickstart:function(event)
    {
        this.dy=event.getLocationY();  
        // console.log("点击开始"+this.dy);
    }, 
    clickmove:function(event)
    {
        //  console.log("点击"+this.mask2.y);
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
        //var node = cc.director.getScene().getChildByName('data');
        //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript'); 
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 1;
        //调用该脚本的函数并传值  
        node.setdata(1); 
        
        //this.qiehuanMap(1);
         
        this.suohui();
        this.gkXuanZeXiao();

        var nodeqj = cc.find('data').getComponent('QuanJuNum');
        nodeqj.isGengHuanMap = 1;

        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna2:function()
    {
        //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 2;
        //调用该脚本的函数并传值  
        node.setdata(2); 
        
        //this.qiehuanMap(2);

        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna3:function()
    {
         //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 3;
        //调用该脚本的函数并传值  
        node.setdata(3);  
        //this.qiehuanMap(3);
        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna4:function()
    {
        //获取常驻节点所绑定的脚本
        var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 4;
        //调用该脚本的函数并传值
        node.setdata(4);
        //this.qiehuanMap(4);
        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna5:function()
    {
         //获取常驻节点所绑定的脚本  
         var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 5;
        //调用该脚本的函数并传值  
        node.setdata(5);  
        //this.qiehuanMap(5);
        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna6:function()
    {
        //获取常驻节点所绑定的脚本  
        var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 6;
        //调用该脚本的函数并传值  
        node.setdata(6);  
        //this.qiehuanMap(6);
        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    Qiehuna7:function()
    {
         //获取常驻节点所绑定的脚本  
       var node = cc.find('data').getComponent('NewScript');  
        var nodeQJ = cc.find('data').getComponent('QuanJuNum'); 
        nodeQJ.ZhangNum = 7;
        //调用该脚本的函数并传值  
        node.setdata(7);
        //this.qiehuanMap(7);
        this.suohui();
        this.gkXuanZeXiao();
        //this.xuanxiang.active=true;
        //this.fanhui.node.active=true;
        // this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        // cc.director.loadScene('xuanguan')
        // })));
    },
    back:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('menu');
        })));
    }
   
    
  
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
