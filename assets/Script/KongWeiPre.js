cc.Class({
    extends: cc.Component,

    properties: {
        KWshowTuPian: { default: null, type: cc.Sprite },
        GWchakanPre: { default: null, type: cc.Prefab },
        spriteFrame : { default:null, type :cc.SpriteFrame },
        guaiwuID : { default: 0 },
    },

    // use this for initialization
    onLoad: function () {
        
    },

    setTuPian: function (path, node, ID) {
        var realUrl = cc.url.raw(path);
        this.spriteFrame = new cc.SpriteFrame(realUrl);
        this.KWshowTuPian.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
        console.log("进入了设置掉落图片的函数内部" + realUrl);
        this.ShowNode = node;
        this.guaiwuID = ID;
    }, 
    // 卡牌界面跳转点击弹出查看效果，提升界面跳转点击返回提升界面并返回卡片ID
    TiaoZhuanPanDing: function () {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        
        this.Card.closeThePre(this.guaiwuID);
        console.log("进入移除预制件函数： 此处移除空位预制件");
        this.node.removeFromParent();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
