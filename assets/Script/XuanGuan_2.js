cc.Class({
    extends: cc.Component,

    properties: {
        
        GuanK:{ default:null },
        ID:   { default:null },
        ID1:  { default:null },
        ID2:  { default:null },
        
        zhedangCHU: { default: null, type: cc.Node },
        zhedangCI: { default: null, type: cc.Node },
        zhedangZHONG: { default: null, type: cc.Node },
    },
    // use this for initialization
    onLoad: function () {
        //获取常驻节点  
        
        
        var node = cc.director.getScene().getChildByName('data');  
        //获取节点的node脚本组件，并调用脚本里面的函数   
        var data = node.getComponent('NewScript').getdata();  
        cc.log('常驻节点的data值为'+data);  
        this.GuanK=data;
        cc.log('常驻节点的data值为11'+ this.GuanK); 
        this.GKnum();
        this.jiasuoPanDing();
    },
    
    jiasuoPanDing: function () {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');
        // console.log("章章章章章" + nodeNS.GuanKaState[0].Zhang);
        // console.log("节节节节节" + nodeNS.GuanKaState[0].Jie);
        // console.log("全局章" + nodeQJ.ZhangNum);
        if (nodeQJ.ZhangNum < nodeNS.GuanKaState[0].Zhang) {
            this.zhedangCHU.active = false;
            this.zhedangCI.active = false;
            this.zhedangZHONG.active = false;
        } else if (nodeQJ.ZhangNum == nodeNS.GuanKaState[0].Zhang) {
            if (nodeNS.GuanKaState[0].Jie == 1) {
                this.zhedangCHU.active = false;
            } else if (nodeNS.GuanKaState[0].Jie == 2) {
                this.zhedangCHU.active = false;
                this.zhedangCI.active = false;
            } else if (nodeNS.GuanKaState[0].Jie == 3) {
                this.zhedangCHU.active = false;
                this.zhedangCI.active = false;
                this.zhedangZHONG.active = false;
            }
        }
    },
    
    
    GKnum:function()
    {
        switch(this.GuanK)
        {
            case 1:
                this.ID= '201604001';
                this.ID1='201604002';
                this.ID2='201604003';
                break;
            case 2:
                this.ID='201604004';
                this.ID1='201604005';
                this.ID2='201604006';
                break;
            case 3:
                this.ID='201604007';
                this.ID1='201604008';
                this.ID2='201604009';
                break;
            case 4:
                this.ID='201604010';
                this.ID1='201604011';
                this.ID2='201604012';
                break;
            case 5:
                this.ID='201604013';
                this.ID1='201604014';
                this.ID2='201604015';
                break;
            case 6:
                this.ID='201604016';
                this.ID1='201604017';
                this.ID2='201604018';
                break;
            case 7:
                this.ID='201604019';
                this.ID1='201604020';
                this.ID2='201604021';
                break;
        }
    },
    jinruzhandou1:function() 
    {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        nodeQJ.JieNum = 1;
        // console.log("进入第"+this.ID+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setDiJiGuan(this.ID);  
        //this.node.runAction(cc.sequence(cc.fadeOut(0.3),cc.callFunc(function(){
            cc.director.loadScene('helloworld');
       // })));
    },
     jinruzhandou2:function()
    {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        nodeQJ.JieNum = 2;
        // console.log("进入第"+this.ID1+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setDiJiGuan(this.ID1);  
        this.node.runAction(cc.sequence(cc.fadeOut(0.3),cc.callFunc(function(){
            cc.director.loadScene('helloworld')
        })));
        
    },
     jinruzhandou3:function()
    {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        nodeQJ.JieNum = 3;
        // console.log("进入第"+this.ID2+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setDiJiGuan(this.ID2);  
        this.node.runAction(cc.sequence(cc.fadeOut(0.3),cc.callFunc(function(){
            cc.director.loadScene('helloworld')
        })));
    },
    back:function()
    {
         this.node.runAction(cc.sequence(cc.fadeOut(0.1),cc.callFunc(function(){
        cc.director.loadScene('GuanQia')
        })));
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
    // },
});
