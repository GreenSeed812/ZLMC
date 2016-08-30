
cc.Class({
    extends: cc.Component,

    properties: {
        
        
        // yinxiao:       { default:null,type:cc.Sprite },
        // yinyue:        { default:null,type:cc.Sprite },
        // tishengjimina: { default:null,type:cc.Node   }
        
        tiseng: { default: null, type: cc.Prefab },
        CardPrefab: { default: null, type: cc.Prefab },
        HelpPrefab: { default: null, type: cc.Prefab },
        StopPrefab: { default: null, type: cc.Prefab },
        ShowNode: { default: null, type: cc.Node },
        juQingNum: 0,
    },

    // use this for initialization
    onLoad: function () {
        
    },
    toXuanGuan:function() {
        //////////  加入剧情

        var self = this;
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function () 
        {
            //nodea.getComponent('juqingguanli').play(0, this.node, null, function(){cc.director.loadScene('GuanQia')});
            console.log("aaasdfasdf");
            var quanju = cc.find('data').getComponent('QuanJuNum');
            if (quanju.jishuNum1 == 0) {
                var dian = cc.find('data').getComponent('juqingguanli');
                dian.getComponent('juqingguanli').play(0, self.ShowNode, null, function () { cc.director.loadScene('GuanQia')});
                quanju.jishuNum1 = 1;
                console.log(self.juQingNum);
            } else if (quanju.jishuNum1 == 1) {
                console.log("piupiupiuaaaaaaaaaaaaaaaaaaaaaaaaa");
                cc.director.loadScene('GuanQia');
            }
            //cc.director.loadScene('GuanQia');
            
        })));
    },
    toMenu:function() {
       
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
            cc.director.loadScene('menu')
        })));
    },
    
    ///////   弹出help预制件
    tohelp:function() {
        var Help = cc.instantiate(this.HelpPrefab);
        this.node.addChild(Help);
        Help.setPosition(0,0);
        
        //  this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        // cc.director.loadScene('help')
        // })));
    },
    
    
    
    
    
    ///// 弹出card预制件  跳转到卡牌界面 
    
    toCard:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
    },
    
    toTisheng:function()
    {
        var Card = cc.instantiate(this.tiseng);
        this.node.addChild(Card);
        Card.setPosition(0,0);
    },
    /////////////////////////////////
    
    
    ///////////  弹出暂停框 预制件 //////////
    toZanTing: function () {
        var ZanTing = cc.instantiate(this.StopPrefab);
        this.node.addChild(ZanTing);
        ZanTing.setPosition(0,0);
    },
    ///////////////////////////////////////
    
    toJueSe:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('juese')
        })));
    },
    toSheZhi:function()
    {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
        cc.director.loadScene('shezhi')
        })));
    },
    guanBiKaiQiYinXiao:function()
    {
        if(this.yinxiao.node.active===false)
        {
            this.yinxiao.node.active=true;
        }else if(this.yinxiao.node.active===true)
        {
            this.yinxiao.node.active=false;
        }
    },
    guanYinXiao:function()
    {
        if(this.yinyue.node.active===false)
        {
            this.yinyue.node.active=true;
        }else if(this.yinyue.node.active===true)
        {
            this.yinyue.node.active=false;
        }
    },
    tishengjiemian:function()
    {
        // this.pingBidianji.node.active=false;
       this. tishengjimina.active=true;
    },
    tishengjiemian2:function()
    {
        // this.pingBidianji.node.active=false;
       this. tishengjimina.active=false;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
