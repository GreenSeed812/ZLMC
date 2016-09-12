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
        levelLabel: { default: null, type: cc.Label },
        SuccessLabel: { default: null, type: cc.Label },
        FailLabel: { default: null, type: cc.Label },
        INSLabel: { default: null, type: cc.Label },
    },

    // use this for initialization
    onLoad: function () {
        //var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        
        //this.jueseIDCache = nodeQJ.theShowJSID;
        // var nodeQJ = cc.find('data').Component('QuanJuNum');
        // this.ShowJueSe(nodeQJ.theShowJSID);
        this.ShowJueSe();
        this.SuccessLabel.node.active = false;
        this.FailLabel.node.active = false;
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
        var nodeNS = cc.find('data').getComponent('NewScript');
        var self = this;
        this.jueseIDCache = nodeQJ.theShowJSID;
        console.log(nodeNS.JueSeTuPian.length);
        for (var i = 0; i < nodeNS.JueSeTuPian.length; i++ ) {
            if (nodeQJ.theShowJSID == nodeNS.JueSeTuPian[i].ID) {
                cc.loader.loadRes(nodeNS.JueSeTuPian[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                    self.jueseLeft.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                break;
            }
        }
        for (var i = 0; i < nodeNS.ZHjuesePath.length; i++) {
            if (this.jueseIDCache == nodeNS.ZHjuesePath[i].ID) {
                cc.loader.loadRes(nodeNS.ZHjuesePath[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                    self.jueseRight.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                });
                break;
            }
        }
        for (var i = 0; i < nodeNS.LevelNeedzh.length; i++) {
            if (this.jueseIDCache == nodeNS.LevelNeedzh[i].ID) {
                this.INSLabel.string = "转换需要材料：" + nodeNS.LevelNeedzh[i].NEEDNAME1  + nodeNS.LevelNeedzh[i].NAME1NUM + " " + nodeNS.LevelNeedzh[i].NEEDNAME2 + nodeNS.LevelNeedzh[i].NAME2NUM + " " + nodeNS.LevelNeedzh[i].NEEDNAME3 + nodeNS.LevelNeedzh[i].NAME3NUM;
                nodeQJ.CaiLiaoShuZu.splice(0,nodeQJ.CaiLiaoShuZu.length);//清空数组 
                nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i].LEVELNEED1);
                nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i].LEVELNEED2);
                nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i].LEVELNEED3);
                nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i].LEVELNEED4);
                nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i].LEVELNEED5);
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
                        if (this.KaPaiID1 != 0) {
                            var sz1 = {};
                            sz1.ID = this.KaPaiID1;
                            sz1.Num = 1;
                            nodeNS.GWshujuCache.push(sz1);
                        }
                        console.log("zh这里设置第一个材料槽");
                        this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame = this.spriteFrame1;
                        this.TianJiaAnNiu1.node.opacity = 0;
                        this.KaPaiID1 = guaiwuID;
                        for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                            if (this.KaPaiID1 == nodeNS.GWshujuCache[i].ID) {
                                nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                                nodeNS.GWshujuCache.pop();
                            }
                        }
                        break;
                    case 1:
                        if (this.KaPaiID2 != 0) {
                            var sz2 = {};
                            sz2.ID = this.KaPaiID2;
                            sz2.Num = 1;
                            nodeNS.GWshujuCache.push(sz2);
                        }
                        console.log("zh这里设置第二个材料槽");
                        this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = this.spriteFrame2;
                        this.TianJiaAnNiu2.node.opacity = 0;
                        this.KaPaiID2 = guaiwuID;
                        for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                            if (this.KaPaiID2 == nodeNS.GWshujuCache[i].ID) {
                                nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                                nodeNS.GWshujuCache.pop();
                            }
                        }
                        break;
                    case 2:
                        if (this.KaPaiID3 != 0) {
                            var sz3 = {};
                            sz3.ID = this.KaPaiID3;
                            sz3.Num = 1;
                            nodeNS.GWshujuCache.push(sz3);
                        }
                        console.log("zh这里设置第三个材料槽");
                        this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = this.spriteFrame3;
                        this.TianJiaAnNiu3.node.opacity = 0;
                        this.KaPaiID3 = guaiwuID;
                        for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                            if (this.KaPaiID3 == nodeNS.GWshujuCache[i].ID) {
                                nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                                nodeNS.GWshujuCache.pop();
                            }
                        }
                        break;
                    case 3:
                        if (this.KaPaiID4 != 0) {
                            var sz4 = {};
                            sz4.ID = this.KaPaiID4;
                            sz4.Num = 1;
                            nodeNS.GWshujuCache.push(sz4);
                        }
                        console.log("zh这里设置第四个材料槽");
                        this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = this.spriteFrame4;
                        this.TianJiaAnNiu4.node.opacity = 0;
                        this.KaPaiID4 = guaiwuID;
                        for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                            if (this.KaPaiID4 == nodeNS.GWshujuCache[i].ID) {
                                nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                                nodeNS.GWshujuCache.pop();
                            }
                        }
                        break;
                    case 4:
                        if (this.KaPaiID5 != 0) {
                            var sz5 = {};
                            sz5.ID = this.KaPaiID5;
                            sz5.Num = 1;
                            nodeNS.GWshujuCache.push(sz5);
                        }
                        console.log("zh这里设置第五个材料槽");
                        this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                        this.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = this.spriteFrame5;
                        this.TianJiaAnNiu5.node.opacity = 0;
                        this.KaPaiID5 = guaiwuID;
                        for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                            if (this.KaPaiID5 == nodeNS.GWshujuCache[i].ID) {
                                nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                                nodeNS.GWshujuCache.pop();
                            }
                        }
                        break;
                }
                break;
            }
        }
    },
    
    // 点击确认转换按钮后调用的函数
    QueRenZhuanHuan: function () {
        var self = this;
        var nodeNS = cc.find('data').getComponent('NewScript');
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var shuzu = [this.KaPaiID1, this.KaPaiID2, this.KaPaiID3, this.KaPaiID4, this.KaPaiID5];
        if (shuzu.sort().toString() == nodeQJ.CaiLiaoShuZu.sort().toString()) {
            for (var i = 0; i < nodeNS.JueSeTuPian.length; i++ ) {
                if (nodeQJ.theShowJSID == nodeNS.ZHjuesePath[i].ID) {
                    cc.loader.loadRes(nodeNS.ZHjuesePath[i].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                        self.jueseLeft.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                    break;
                }
            }
            for (var i = 0; i < nodeNS.ZHjuesePath.length; i++) {
                if (this.jueseIDCache == nodeNS.ZHjuesePath[i].ID) {
                    cc.loader.loadRes(nodeNS.ZHjuesePath[i+1].PATH, cc.SpriteFrame, function (err, spriteFrame) {
                        self.jueseRight.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    });
                    break;
                }
            }
            cc.loader.loadRes("tuji/tishengjiemian/tishengPre", cc.SpriteAtlas, function (err, atlas) {
                var frameKong = atlas.getSpriteFrame('kapaikongwei');
             
                for ( var i = 0; i < nodeNS.itemlist.length; i++ ) {
                    if (self.KaPaiID1 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite1.getComponent(cc.Sprite).spriteFrame =frameKong;
                        self.TianJiaAnNiu1.node.opacity = 255;
                    }
                    if (self.KaPaiID2 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu2.node.opacity = 255;
                    }
                    if (self.KaPaiID3 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu3.node.opacity = 255;
                    }
                    if (self.KaPaiID4 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu4.node.opacity = 255;
                    }
                    if (self.KaPaiID5 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu5.node.opacity = 255;
                    }
                }
                self.clearrr();
            });
            
            
            // 更新转换所需材料提示文字
            for (var i = 0; i < nodeNS.LevelNeedzh.length; i++) {
                if (this.jueseIDCache == nodeNS.LevelNeedzh[i].ID) {
                    this.INSLabel.string = "转换需要材料：" + nodeNS.LevelNeedzh[i+1].NEEDNAME1  + nodeNS.LevelNeedzh[i+1].NAME1NUM + " " + nodeNS.LevelNeedzh[i+1].NEEDNAME2 + nodeNS.LevelNeedzh[i+1].NAME2NUM + " " + nodeNS.LevelNeedzh[i+1].NEEDNAME3 + nodeNS.LevelNeedzh[i+1].NAME3NUM;
                    nodeQJ.CaiLiaoShuZu.splice(0,nodeQJ.CaiLiaoShuZu.length);//清空数组 
                    nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i+1].LEVELNEED1);
                    nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i+1].LEVELNEED2);
                    nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i+1].LEVELNEED3);
                    nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i+1].LEVELNEED4);
                    nodeQJ.CaiLiaoShuZu.push(nodeNS.LevelNeedzh[i+1].LEVELNEED5);
                    this.jueseIDCache = nodeNS.LevelNeedzh[i+1].ID;
                    break;
                }
            }
            // 显示转换成功文字 以及渐隐效果
            this.SuccessLabel.node.active = true;
            this.SuccessLabel.node.color = new cc.Color(0,255,0);
            // var action = cc.fadeOut(1.0);
            // this.SuccessLabel.node.runAction(action);
            // 更新数组内部角色ID
            for (var i = 0; i < nodeNS.JSshujuCache.length; i++) {
                if (nodeQJ.theShowJSID == nodeNS.JSshujuCache[i].ID) {
                    nodeNS.JSshujuCache[i].ID = this.jueseIDCache;
                    console.log("转换成功之后" + nodeNS.JSshujuCache[i].ID);
                    nodeQJ.theShowJSID = this.jueseIDCache;
                }
            }
            // 更新数组内部角色属性 攻击防御生命等级
            this.ShowJueSe();
            
            //this.JSshujuCache.splice(0,this.JSshujuCache.length);//清空数组 
            this.JueSe.node.getChildByName('jin').getComponent('juesejiemianrenwu').ChangeJSTexture();
            
            
            var last = nodeNS.GWshujuCache.length - 1;
            for (var i = 0; i < nodeNS.GWshujuCache.length; i++) {
                if (this.KaPaiID1 == nodeNS.GWshujuCache[i].ID) {
                    nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                    nodeNS.GWshujuCache.pop();
                }
                if (this.KaPaiID2 == nodeNS.GWshujuCache[i].ID) {
                    nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                    nodeNS.GWshujuCache.pop();
                }
                if (this.KaPaiID3 == nodeNS.GWshujuCache[i].ID) {
                    nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                    nodeNS.GWshujuCache.pop();
                }
                if (this.KaPaiID4 == nodeNS.GWshujuCache[i].ID) {
                    nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                    nodeNS.GWshujuCache.pop();
                }
                if (this.KaPaiID5 == nodeNS.GWshujuCache[i].ID) {
                    nodeNS.GWshujuCache[i] = nodeNS.GWshujuCache[nodeNS.GWshujuCache.length - 1];
                    nodeNS.GWshujuCache.pop();
                }
            }
        } else {
            this.FailLabel.node.active = true;
            
             var nodeNS = cc.find('data').getComponent('NewScript');
            if (this.KaPaiID1 != 0) {
                var sz1 = {};
                sz1.ID = this.KaPaiID1;
                sz1.Num = 1;
                nodeNS.GWshujuCache.push(sz1);
            }
            if (this.KaPaiID2 != 0) {
                var sz2 = {};
                sz2.ID = this.KaPaiID2;
                sz2.Num = 1;
                nodeNS.GWshujuCache.push(sz2);
            }
            if (this.KaPaiID3 != 0) {
                var sz3 = {};
                sz3.ID = this.KaPaiID3;
                sz3.Num = 1;
                nodeNS.GWshujuCache.push(sz3);
            }
            if (this.KaPaiID4 != 0) {
                var sz4 = {};
                sz4.ID = this.KaPaiID4;
                sz4.Num = 1;
                nodeNS.GWshujuCache.push(sz4);
            }
            if (this.KaPaiID5 != 0) {
                var sz5 = {};
                sz5.ID = this.KaPaiID5;
                sz5.Num = 1;
                nodeNS.GWshujuCache.push(sz5);
            }
            
            cc.loader.loadRes("tuji/tishengjiemian/tishengPre", cc.SpriteAtlas, function (err, atlas) {
                var frameKong = atlas.getSpriteFrame('kapaikongwei');
             
                for ( var i = 0; i < nodeNS.itemlist.length; i++ ) {
                    if (self.KaPaiID1 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame1 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite1.getComponent(cc.Sprite).spriteFrame =frameKong;
                        self.TianJiaAnNiu1.node.opacity = 255;
                    }
                    if (self.KaPaiID2 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame2 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite2.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu2.node.opacity = 255;
                    }
                    if (self.KaPaiID3 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame3 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite3.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu3.node.opacity = 255;
                    }
                    if (self.KaPaiID4 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame4 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite4.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu4.node.opacity = 255;
                    }
                    if (self.KaPaiID5 != 0) {
                        var realUrl = cc.url.raw('resources/tishengjiemian/kapaikongwei.png');
                        // this.spriteFrame5 = new cc.SpriteFrame(realUrl);
                        self.kapaiSprite5.getComponent(cc.Sprite).spriteFrame = frameKong;
                        self.TianJiaAnNiu5.node.opacity = 255;
                    }
                }
                self.clearrr();
            });
            this.FailLabel.node.color = new cc.Color(255,0,0);
        }
    },
    
    closeTheNode:function()
    {
        var nodeNS = cc.find('data').getComponent('NewScript');
        if (this.KaPaiID1 != 0) {
            var sz1 = {};
            sz1.ID = this.KaPaiID1;
            sz1.Num = 1;
            nodeNS.GWshujuCache.push(sz1);
        }
        if (this.KaPaiID2 != 0) {
            var sz2 = {};
            sz2.ID = this.KaPaiID2;
            sz2.Num = 1;
            nodeNS.GWshujuCache.push(sz2);
        }
        if (this.KaPaiID3 != 0) {
            var sz3 = {};
            sz3.ID = this.KaPaiID3;
            sz3.Num = 1;
            nodeNS.GWshujuCache.push(sz3);
        }
        if (this.KaPaiID4 != 0) {
            var sz4 = {};
            sz4.ID = this.KaPaiID4;
            sz4.Num = 1;
            nodeNS.GWshujuCache.push(sz4);
        }
        if (this.KaPaiID5 != 0) {
            var sz5 = {};
            sz5.ID = this.KaPaiID5;
            sz5.Num = 1;
            nodeNS.GWshujuCache.push(sz5);
        }
        
        // console.log("即将删除当前预制件");
       this.node.removeFromParent();
    },
    
    clearrr: function () {
        this.KaPaiID1 = 0;
        this.KaPaiID2 = 0;
        this.KaPaiID3 = 0;
        this.KaPaiID4 = 0;
        this.KaPaiID5 = 0;
        var nodeNS = cc.find('data').getComponent('NewScript');
        var jsshuju=JSON.stringify(nodeNS.JSshujuCache);
        cc.sys.localstorage.setitem("BenDiShuJuJS",jsshuju);
    },
    


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
