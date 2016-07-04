cc.Class({
    extends: cc.Component,

    properties: {
        
        GuanK:{ default:null },
        ID:   { default:null },
        ID1:  { default:null },
        ID2:  { default:null },
        
        
        
        
    },
    // use this for initialization
    onLoad: function () {
        //获取常驻节点  
        var node = cc.director.getScene().getChildByName('data');  
        //获取节点的node脚本组件，并调用脚本里面的函数  
        var data = node.getComponent('NewScript').getdata();  
        cc.log('常驻节点的data值为'+data);  
        this.GuanK=data;
        cc.log('常驻节点的data值为'+ this.GuanK); 
        this.GKnum();
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
        console.log("进入第"+this.ID+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata( this.ID);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('helloworld')
        })));
    },
     jinruzhandou2:function()
    {
        console.log("进入第"+this.ID1+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata( this.ID1);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('helloworld')
        })));
    },
     jinruzhandou3:function()
    {
        console.log("进入第"+this.ID2+"关");
        var node = cc.find('data').getComponent('NewScript');  
        //调用该脚本的函数并传值  
        node.setdata( this.ID2);  
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
        cc.director.loadScene('helloworld')
        })));
    }
    
    
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
