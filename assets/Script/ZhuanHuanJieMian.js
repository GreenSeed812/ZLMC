cc.Class({
    extends: cc.Component,

    properties: {
        jueseLeft: { default: null, type: cc.Sprite },
        jueseRight: { default: null, type: cc.Sprite },
        ZHSuccessID: { default: 0 },    // 转换后的角色ID，通过此ID更改图片以及数组内的ID
        CardPrefab: { default: null, type: cc.Prefab },
        jueseIDCache: { default: 0 },
        
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
        cailiaoSZ: { default: [] },
        levelLabel: { default: null, type: cc.Label },
        SuccessLabel: { default: null, type: cc.Label },
        FailLabel: { default: null, type: cc.Label },
        NeedINSLabel: { default: null, type: cc.Label },
    },

    // use this for initialization
    onLoad: function () {
        this.SuccessLabel.node.active = false;
        this.FailLabel.node.active = false;
        this.ShowJueSe();
    },
    
    ZhuanHuanToCard1:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 0;
    },
    ZhuanHuanToCard2:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 1;
    },
    ZhuanHuanToCard3:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 2;
    },
    ZhuanHuanToCard4:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 3;
    },
    ZhuanHuanToCard5:function()
    {
        var Card = cc.instantiate(this.CardPrefab);
        this.node.addChild(Card);
        Card.setPosition(0,0);
        Card.getComponent('CardPrefab').GuanLiobj = this;
        this.ButtonNum = 4;
    },
    
    ShowJueSe: function () {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var self = this;
        this.jueseIDCache = nodeQJ.theShowJSID;
        var nodeNS = cc.find('data').getComponent('NewScript');
        console.log(nodeNS.JueSeTuPian.length);
        
        for (var i = 0; i < nodeNS.JueSeTuPian.length; i++ ) {
            if (nodeQJ.theShowJSID == nodeNS.JueSeTuPian[i].ID) {
                    cc.loader.loadRes(nodeNS.JueSeTuPian[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                        self.jueseLeft.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                break;
            }
        }
        for ( var i = 0; i < nodeNS.ZHJueSeIDPath.length; i++ ) {
            if (this.jueseIDCache == nodeNS.ZHJueSeIDPath[i].ID) {
                cc.loader.loadRes(nodeNS.ZHJueSeIDPath[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                    self.jueseRight.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                break;
            }
        }
        // 显示转换所需卡牌的Label
        console.log("长度" + nodeNS.LevelNeedzh.length);
        for ( var i = 0; i < nodeNS.LevelNeedzh.length; i++ ) {
            if ( this.jueseIDCache == nodeNS.LevelNeedzh[i].ID) {
                console.log(nodeNS.LevelNeedzh[i].NAME);
                this.NeedINSLabel.string = "转换成" + nodeNS.LevelNeedzh[i].NAME + "需要 : " + nodeNS.LevelNeedzh[i].NEEDNAME1 + "*" + nodeNS.LevelNeedzh[i].NAME1NUM + "," + nodeNS.LevelNeedzh[i].NEEDNAME2 + "*" + nodeNS.LevelNeedzh[i].NAME2NUM;
                this.NeedINSLabel.node.color = new cc.Color(96,96,96);
            }
        }
    },
    
    ShowKaPai: function (guaiwuID) { 
        console.log("zh进入怪物卡牌在材料槽显示函数！！！！！！！！！！");
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');
        console.log(guaiwuID);
        for (var i = 0; i < nodeNS.szDLtupian.length; i++ ) {
            if (guaiwuID == nodeNS.szDLtupian[i].ID) {
                var realUrl = cc.url.raw(nodeNS.szDLtupian[i].PATH);
                switch (this.ButtonNum) {
                    case 0:
                        console.log("zh这里设置第一个材料槽");
                        this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame = this.spriteFrame1;
                        this.TianJiaAnNiu1.node.opacity = 0;
                        this.KaPaiID1 = guaiwuID;
                        break;
                    case 1:
                        console.log("zh这里设置第二个材料槽");
                        this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = this.spriteFrame2;
                        this.TianJiaAnNiu2.node.opacity = 0;
                        this.KaPaiID2 = guaiwuID;
                        break;
                    case 2:
                        console.log("zh这里设置第三个材料槽");
                        this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = this.spriteFrame3;
                        this.TianJiaAnNiu3.node.opacity = 0;
                        this.KaPaiID3 = guaiwuID;
                        break;
                    case 3:
                        console.log("zh这里设置第四个材料槽");
                        this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = this.spriteFrame4;
                        this.TianJiaAnNiu4.node.opacity = 0;
                        this.KaPaiID4 = guaiwuID;
                        break;
                    case 4:
                        console.log("zh这里设置第五个材料槽");
                        this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = this.spriteFrame5;
                        this.TianJiaAnNiu5.node.opacity = 0;
                        this.KaPaiID5 = guaiwuID;
                        break;
                }
                break;
            }
        }
    },
 
    
    QuanRenZhuanHuan: function () {
        
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');
        var self = this;
        var shuzu = [this.KaPaiID1, this.KaPaiID2, this.KaPaiID3, this.KaPaiID4, this.KaPaiID5];
        
        if (shuzu.sort().toString() == nodeQJ.ZhuanHuanIDSZ.sort().toString()) {
            this.SuccessLabel.node.active = true;
            this.SuccessLabel.node.color = new cc.Color(0,255,0);
            
            for ( var i = 0; i < nodeNS.ZHJueSeIDPath.length; i++ ) {
                if (this.jueseIDCache == nodeNS.ZHJueSeIDPath[i].ID) {
                    cc.loader.loadRes(nodeNS.ZHJueSeIDPath[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                        self.jueseLeft.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                    break;
                }
            }
            for (var i = 0; i < nodeNS.ZHJueSeIDPath.length; i++ ) {
                if (nodeQJ.theShowJSID == nodeNS.ZHJueSeIDPath[i].ID) {
                        cc.loader.loadRes(nodeNS.ZHJueSeIDPath[i+1].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                            self.jueseRight.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        });
                    break;
                }
            }
            for ( var i = 0; i < nodeNS.LevelNeedzh.length; i++ ) {
                if ( this.jueseIDCache == nodeNS.LevelNeedzh[i].ID) {
                    console.log(nodeNS.LevelNeedzh[i].NAME);
                    this.NeedINSLabel.string = "转换成" + nodeNS.LevelNeedzh[i+1].NAME + "需要 : " + nodeNS.LevelNeedzh[i+1].NEEDNAME1 + "*" + nodeNS.LevelNeedzh[i+1].NAME1NUM + "," + nodeNS.LevelNeedzh[i+1].NEEDNAME2 + "*" + nodeNS.LevelNeedzh[i+1].NAME2NUM;
                    this.NeedINSLabel.node.color = new cc.Color(96,96,96);
                }
            }
            // 更改存储信息
            
        } else {
            this.FailLabel.node.active = true;
            this.FailLabel.node.color = new cc.Color(255,0,0);
        } 
    },
    
    
    
});




