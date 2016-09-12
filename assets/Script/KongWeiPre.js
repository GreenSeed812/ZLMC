cc.Class({
    extends: cc.Component,

    properties: {
        KWshowTuPian: { default: null, type: cc.Sprite },
        GWchakanPre: { default: null, type: cc.Prefab },
        spriteFrame : { default:null, type :cc.SpriteFrame },
        guaiwuID : { default: 0 },
        huian: { default: null, type: cc.Sprite },
    },

    // use this for initialization
    onLoad: function () {
        
    },

    setTuPian: function (path, node, ID) {
        var realUrl = cc.url.raw(path);
        this.spriteFrame = new cc.SpriteFrame(realUrl);
        this.KWshowTuPian.getComponent(cc.Sprite).spriteFrame = this.spriteFrame;
        this.ShowNode = node;
        this.guaiwuID = ID;
    }, 
    
    TiaoZhuanPanDing: function () {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        nodeQJ.ZhuanHuanIDSZ.push(this.guaiwuID);
        this.Card.closeThePre(this.guaiwuID);
        this.node.removeFromParent();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
