cc.Class({
    extends: cc.Component,

    properties: {
        isGengHuanMap: { default: 0 },
        jishuNum1: { default: 0 },
        kpNum: { default: 0 },
        DLNum: { default: 0 },
        GuaiWuKaPaiID: { default: 0 },
        ShowGuaiWuID: { default: [] },
        TiShengAndKaPai: { default: 0 }, // 0为卡牌界面进入，1为提升界面进入
        theShowJSID: { default: 0 },
        CaiLiaoShuZu: { default: [] },
        CaiLiaoNum: { default: 0 },
        CaiLiaoPath: { default: 0 },
        
        GuaiWuDLID: { default: 0 },
    },

    // use this for initialization
    onLoad: function () {
        // module.exports = { jishuNum1 : null };
        // module.exports = { jishuNum2 : null };
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
