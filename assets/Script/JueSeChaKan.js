cc.Class({
    extends: cc.Component,

    properties: {
        
        LevelLabel: { default: null, type: cc.Label },
        GongJiLabel: { default: null, type: cc.Label },
        FangYuLabel: { default: null, type: cc.Label },
        ShengMingLabel: { default: null, type: cc.Label },
        NameLabel: { default: null, type: cc.Label },
        JueSeINSLabel: { default: null, type: cc.Label },
        jinengLabel: { default: null, type: cc.Label },
        JingYanBar: { default: null, type: cc.ProgressBar },
        ShuXingSprite: { default: null, type: cc.Sprite },
        
        JiNengID: { default: 0 },
        spriteFrame : { default:null, type :cc.SpriteFrame },
    },

    // use this for initialization
    onLoad: function () {
        this.JueSeChaKan();
    },
    
    JueSeChaKan: function () {
        // 弹出查看界面时 调用当前角色ID 显示属性
        var nodeNS = cc.find('data').getComponent('NewScript');
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        if (nodeQJ.theShowJSID != null) {
            for ( var i = 0; i < nodeNS.JSshujuCache.length; i++ ) {
                if (nodeQJ.theShowJSID == nodeNS.JSshujuCache[i].ID) {
                    this.LevelLabel.string = nodeNS.JSshujuCache[i].Level; // OK
                    this.GongJiLabel.string = nodeNS.JSshujuCache[i].GJ;   // OK
                    this.FangYuLabel.string = nodeNS.JSshujuCache[i].FY;   // OK
                    this.ShengMingLabel.string = nodeNS.JSshujuCache[i].SM;// OK
                    // //TODO 通过现有经验与升级所需经验比值计算读条
                    this.JingYanBar.progress = nodeNS.JSshujuCache[i].nowEXP / nodeNS.JSshujuCache[i].needEXP;
                }
            }
            
            for ( var i = 0; i < nodeNS.Personlist.length; i++ ) {
                if (nodeQJ.theShowJSID == nodeNS.Personlist[i].ID) {
                    this.NameLabel.string = nodeNS.Personlist[i].NAME;     // OK
                    console.log("角色说明" +　nodeNS.Personlist[i].INS);
                    this.JueSeINSLabel.string = nodeNS.Personlist[i].INS;
                    console.log("技能ID" +　nodeNS.Personlist[i].SK);
                    this.JiNengID = nodeNS.Personlist[i].SK;
                    console.log("设置图片" + nodeNS.Personlist[i].APT_PATH);
                    // var realUrl = cc.url.raw('resources/chakanjiemian/JinShuXing.png');
                    // var texture = cc.textureCache.addImage(realUrl);
                    // this.ShuXingSprite.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                    var realUrl = cc.url.raw(nodeNS.Personlist[i].APT_PATH);
                    this.spriteFrame = new cc.SpriteFrame(realUrl);
                    this.ShuXingSprite.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
                }
            }
            
            console.log(nodeNS.skilllist.length);
            for ( var i = 0; i < nodeNS.skilllist.length; i++ ) {
                if (this.JiNengID == nodeNS.skilllist[i].ID) {
                    this.jinengLabel.string = nodeNS.skilllist[i].NAME + " : " + nodeNS.skilllist[i].INS;
                }
            }
        } else {
            console.log("请选中角色进行查看");
        }
    }
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
