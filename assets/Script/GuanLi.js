cc.Class({
    extends: cc.Component,

    properties: {
        speed: { default: 2 }, 
        jueseSprite: { default: null, type: cc.Sprite },// 需要绑定
        
        CardPrefab: { default: null, type: cc.Prefab },
        
        kapaiSprite1: { default: null, type: cc.Sprite },// 需要绑定
        kapaiSprite2: { default: null, type: cc.Sprite },// 需要绑定
        kapaiSprite3: { default: null, type: cc.Sprite },// 需要绑定
        kapaiSprite4: { default: null, type: cc.Sprite },// 需要绑定
        kapaiSprite5: { default: null, type: cc.Sprite },// 需要绑定
        TianJiaAnNiu1: { default: null, type: cc.Button },
        TianJiaAnNiu2: { default: null, type: cc.Button },
        TianJiaAnNiu3: { default: null, type: cc.Button },
        TianJiaAnNiu4: { default: null, type: cc.Button },
        TianJiaAnNiu5: { default: null, type: cc.Button },
        spriteFrame1 : { default:null, type :cc.SpriteFrame },
        spriteFrame2 : { default:null, type :cc.SpriteFrame },
        spriteFrame3 : { default:null, type :cc.SpriteFrame },
        spriteFrame4 : { default:null, type :cc.SpriteFrame },
        spriteFrame5 : { default:null, type :cc.SpriteFrame },
        KaPaiID1: { default: 0 },
        KaPaiID2: { default: 0 },
        KaPaiID3: { default: 0 },
        KaPaiID4: { default: 0 },
        KaPaiID5: { default: 0 },

        NowExpNum: { default: 0 },
        NowExpCache: { default: 0 },
        NeedExpNum: { default: 0 },
        NeedExpCache: { default: 0 },
        NowLevel: { default: 0 },
        NowLevelCache: { default: 0 },
        jueseGJ: { default: 0 },
        jueseGJCache: {default: 0 },
        jueseFY: { default: 0 },
        jueseFYCache: {default: 0 },
        jueseSM: { default: 0 },
        jueseSMCache: {default: 0 },
        jueseIDCache: { default: 0 },
        kapaiExpNum: { default: 0 },
        shuxingTOexp: { default: 0 },
        //shuxingTOexpCache: {default: 0 },

        showGJ: { default: null, type: cc.Label },// 需要绑定
        showFY: { default: null, type: cc.Label },// 需要绑定
        showSM: { default: null, type: cc.Label },// 需要绑定
        JinDuTiao: {default: null, type: cc.ProgressBar }, // 需要绑定
        tishengDJ: { default: 0 },
        
        ShowJY: { default: null, type: cc.Label },// 需要绑定
        ButtonNum: { default: 0 },
    },

    // use this for initialization
    onLoad: function () {
        
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var node = cc.find('data').getComponent('NewScript');
        console.log("本地" + node.JSshujuCache.length);
        for (var i = 0; i < node.JSshujuCache.length; i++ ) {
            if (nodeQJ.theShowJSID == node.JSshujuCache[i].ID) {
                this.NowLevel = node.JSshujuCache[i].Level;
                console.log("进入提升界面时当前经验" + node.JSshujuCache[i].nowEXP);
                console.log("进入提升界面时升级所需经验" + node.JSshujuCache[i].needEXP);
                this.NowExpNum = node.JSshujuCache[i].nowEXP;
                this.NeedExpNum = node.JSshujuCache[i].needEXP;
                this.jueseGJ = node.JSshujuCache[i].GJ;
                this.jueseFY = node.JSshujuCache[i].FY;
                this.jueseSM = node.JSshujuCache[i].SM;
            }
        }
        console.log("进入提升界面时当前经验" + this.NowExpNum);
        console.log("进入提升界面时升级所需经验" + this.NeedExpNum);
        this.JinDuTiao.progress = this.NowExpNum / this.NeedExpNum;
        
        
        this._pingpong = true;
       
        console.log("aasdfasdipupiupiu" + nodeQJ.theShowJSID);
        nodeQJ.kpNum = 0;
        this.ShowJueSe(nodeQJ.theShowJSID);
       
    },
    
    
    // 进度条根据提升等级播放次数
    update: function (dt) {
        
        // var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        // if (nodeQJ.CaiLiaoNum != null) {
            
        // }
        
        // console.log("sdfadf");
        // var progress = this.JinDuTiao.progress;
        // for (var i = 0; i < this.tishengDJ.length; i++ ) {
        //     if(progress < 1.0 && this._pingpong){
        //         progress += dt * this.speed;
        //     }
        //     else {
        //         progress = 0;
        //         this._pingpong = progress <= 0;
        //     }
        //     progressBar.progress = progress;
        // }
    },

    GuanLitoCard1:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 0;
    },
    GuanLitoCard2:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 1;
    },
    GuanLitoCard3:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 2;
    },
    GuanLitoCard4:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 3;
    },
    GuanLitoCard5:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 4;
    },
    
    
    // 通过角色ID 从数组中获取路径将提升界面中需要提升的卡牌更换
    ShowJueSe: function (jueseID) {
         var self = this;
        this.jueseIDCache = jueseID;
        var nodeNS = cc.find('data').getComponent('NewScript');
        console.log(nodeNS.JueSeTuPian.length);
        for (var i = 0; i < nodeNS.JueSeTuPian.length; i++ ) {
            if (jueseID == nodeNS.JueSeTuPian[i].ID) {
                    cc.loader.loadRes(nodeNS.JueSeTuPian[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                        self.jueseSprite.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                break;
            }
        }
        this.CunChuExp();
    },
    // 调出本地存储的角色升级经验  每次进入游戏后调用
    CunChuExp: function () {
        console.log("进入了设置属性 ");
        // 设置面板属性
        console.log("攻击1" + this.jueseGJ);
        console.log("攻击2" + this.showGJ.string);
        this.showGJ.string = this.jueseGJ;
        //this.showGJ.setR(255);
        console.log("防御1" + this.jueseFY);
        console.log("防御2" + this.showFY.string);
        this.showFY.string = this.jueseFY;
        //this.showFY.setR(255);
        console.log("生命1" + this.jueseSM);
        console.log("生命2" + this.showSM.string);
        this.showSM.string = this.jueseSM;
        //this.showSM.setR(255);
    },
    //通过卡片ID 显示材料卡片的图片
    ShowKaPai: function (guaiwuID) { 
        console.log("进入怪物卡牌在材料槽显示函数！！！！！！！！！！");
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');
        console.log(guaiwuID);
        for (var i = 0; i < nodeNS.szDLtupian.length; i++ ) {
            if (guaiwuID == nodeNS.szDLtupian[i].ID) {
                var realUrl = cc.url.raw(nodeNS.szDLtupian[i].PATH);
                switch (this.ButtonNum) {
                    case 0:
                        console.log("这里设置第一个材料槽");
                        this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame = this.spriteFrame1;
                        this.TianJiaAnNiu1.node.opacity = 0;
                        this.KaPaiID1 = guaiwuID;
                        break;
                    case 1:
                        console.log("这里设置第二个材料槽");
                        this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = this.spriteFrame2;
                        this.TianJiaAnNiu2.node.opacity = 0;
                        this.KaPaiID2 = guaiwuID;
                        break;
                    case 2:
                        console.log("这里设置第三个材料槽");
                        this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = this.spriteFrame3;
                        this.TianJiaAnNiu3.node.opacity = 0;
                        this.KaPaiID3 = guaiwuID;
                        break;
                    case 3:
                        console.log("这里设置第四个材料槽");
                        this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = this.spriteFrame4;
                        this.TianJiaAnNiu4.node.opacity = 0;
                        this.KaPaiID4 = guaiwuID;
                        break;
                    case 4:
                        console.log("这里设置第五个材料槽");
                        this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = this.spriteFrame5;
                        this.TianJiaAnNiu5.node.opacity = 0;
                        this.KaPaiID5 = guaiwuID;
                        break;
                }
                break;
            }
        }
        this.ShowShuXing();
    },
    // 通过当前已经添加的ID计算属性 并显示
    ShowShuXing: function () {
        this.shuxingTOexp = 0;
        var nodeNS = cc.find('data').getComponent('NewScript');
        for ( var i = 0; i < nodeNS.itemlist.length; i++ ) {
            if (this.KaPaiID1 != 0) {
                if (this.KaPaiID1 == nodeNS.itemlist[i].ID) {
                    console.log("这里是空位1不为空");
                    this.shuxingTOexp += parseInt(nodeNS.itemlist[i].jy);
                }
            }
            if (this.KaPaiID2 != 0) {
                if (this.KaPaiID2 == nodeNS.itemlist[i].ID) {
                    console.log("这里是空位2不为空");
                    this.shuxingTOexp += parseInt(nodeNS.itemlist[i].jy);
                }
            }
            if (this.KaPaiID3 != 0) {
                if (this.KaPaiID3 == nodeNS.itemlist[i].ID) {
                    console.log("这里是空位3不为空");
                    this.shuxingTOexp += parseInt(nodeNS.itemlist[i].jy);
                }
            }
            if (this.KaPaiID4 != 0) {
                if (this.KaPaiID4 == nodeNS.itemlist[i].ID) {
                    console.log("这里是空位4不为空");
                    this.shuxingTOexp += parseInt(nodeNS.itemlist[i].jy);
                }
            }
            if (this.KaPaiID5 != 0) {
                if (this.KaPaiID5 == nodeNS.itemlist[i].ID) {
                    console.log("这里是空位5不为空");
                    this.shuxingTOexp += parseInt(nodeNS.itemlist[i].jy);
                }
            }
        }
        
        this.NowExpCache = this.NowExpNum;
        this.NeedExpCache = this.NeedExpNum;
        this.NowLevelCache = this.NowLevel;
        
        this.jueseGJCache = this.jueseGJ;
        this.jueseFYCache = this.jueseFY;
        this.jueseSMCache = this.jueseSM;
        
        var nummm = 0;
        while(true) {
            var numCache = parseInt(this.shuxingTOexp) + parseInt(this.NowExpCache);
            if ( numCache > parseInt(this.NeedExpCache)) {
                
                this.shuxingTOexp = parseInt(this.shuxingTOexp) + parseInt(this.NowExpCache) - parseInt(this.NeedExpCache);
                
                this.NowExpCache = 0;
                this.NowLevelCache++;
                for ( var i = 0; i < nodeNS.exList.length; i++ ) {
                    if (this.NowLevelCache == nodeNS.exList[i].LV) {
                        console.log("升级q所需经验" + this.NeedExpCache );
                        this.NeedExpCache = nodeNS.exList[i].exp;
                        console.log("升级h所需经验" + this.NeedExpCache );
                    }
                }
                console.log("进度条进度q" + this.shuxingTOexp / this.NeedExpCache);
                this.JinDuTiao.progress = this.shuxingTOexp / this.NeedExpCache;
                console.log("进度条进度h" + this.JinDuTiao.progress);
                console.log("第" + nummm + "次升级，完成升级后剩余经验" + this.shuxingTOexp);
                this.ShowLabel();
                this.tishengDJ++;
                nummm++;
            } else {
                console.log("nummm" + nummm);
                break;
            }
        }
        
    },
    
    // 显示提升等级之后的属性
    ShowLabel: function () {
        var node = cc.find('data').getComponent('NewScript');
        for ( var i = 0; i < node.Personlist.length; i++ ) {
            if ( this.jueseIDCache == node.Personlist[i].ID ) {
                // 攻击   
                this.tsGJ = parseInt(this.jueseGJCache) + parseInt(node.Personlist[i].IPT_ATK*this.NowLevelCache*0.03);
                // 防御  
                this.tsFY = parseInt(this.jueseFYCache) + parseInt(node.Personlist[i].IPT_DEF*this.NowLevelCache*0.03);
                // 生命  
                this.tsSM = parseInt(this.jueseSMCache) + parseInt(node.Personlist[i].IPT_LF*this.NowLevelCache*0.03);
            }
        }
        // 设置面板属性
        this.showGJ.string = this.jueseGJ + "-" + this.tsGJ;
        this.showGJ.node.color = new cc.Color(255,0,0);
        this.showFY.string = this.jueseFY + "-" + this.tsFY;
        this.showFY.node.color = new cc.Color(255,0,0);
        this.showSM.string = this.jueseSM + "-" + this.tsSM;
        this.showSM.node.color = new cc.Color(255,0,0);
        
        this.jueseGJCache = this.tsGJ;
        this.jueseFYCache = this.tsFY;
        this.jueseSMCache = this.tsSM;
    },
    // 进度条动画   点击按钮后的回调函数  callback
    // ProgressAnimation: function () {

    // },
    // 点击提升按钮 进行升级 判断经验值百分比
    levelup: function (arr) {
        var nodeNS = cc.find('data').getComponent('NewScript');
        this.NowExpNum = this.shuxingTOexp;
        this.NeedExpNum = this.NeedExpCache;
        this.NowLevel = this.NowLevelCache;
        this.jueseGJ = this.jueseGJCache;
        this.jueseFY = this.jueseFYCache;
        this.jueseSM = this.jueseSMCache;
        
        // 更改数组中的参数  存储本地时不会导致数据错误 
        for ( var i = 0; i < nodeNS.JSshujuCache.length; i++ ) {
            if (this.jueseIDCache == nodeNS.JSshujuCache[i].ID) {
                nodeNS.JSshujuCache[i].GJ = this.jueseGJCache;
                nodeNS.JSshujuCache[i].FY = this.jueseFYCache;
                nodeNS.JSshujuCache[i].SM = this.jueseSMCache;
                nodeNS.JSshujuCache[i].Level = this.NowLevelCache;
                nodeNS.JSshujuCache[i].nowEXP = this.shuxingTOexp;
                nodeNS.JSshujuCache[i].needEXP = this.NeedExpCache;
            }
        }
        // 显示字体颜色恢复
        this.showGJ.string = this.jueseGJCache;
        this.showGJ.node.fontSize = new Number(10);
        this.showGJ.node.color = new cc.Color(255,255,255);
        this.showFY.string = this.jueseFYCache;
        this.showFY.node.color = new cc.Color(255,255,255);
        this.showSM.string = this.jueseSMCache;
        this.showSM.node.color = new cc.Color(255,255,255);
        // 将材料位的图片恢复空格
        var nodeNS = cc.find('data').getComponent('NewScript');
        for ( var i = 0; i < nodeNS.itemlist.length; i++ ) {
            if (this.KaPaiID1 != 0) {
                var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame = this.spriteFrame1;
                this.TianJiaAnNiu1.node.opacity = 255;
            }
            if (this.KaPaiID2 != 0) {
                var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                this.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = this.spriteFrame2;
                this.TianJiaAnNiu2.node.opacity = 255;
            }
            if (this.KaPaiID3 != 0) {
                var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                this.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = this.spriteFrame3;
                this.TianJiaAnNiu3.node.opacity = 255;
            }
            if (this.KaPaiID4 != 0) {
                var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                this.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = this.spriteFrame4;
                this.TianJiaAnNiu4.node.opacity = 255;
            }
            if (this.KaPaiID5 != 0) {
                var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                this.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = this.spriteFrame5;
                this.TianJiaAnNiu5.node.opacity = 255;
            }
        }
        
        this.JinDuTiao.progress = this.shuxingTOexp / this.NeedExpCache;
        
        // 播放动画
        // 问题： 是否在点击之后才会回调这个播放动画
        //this.update(dt);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
