cc.Class({
    extends: cc.Component,

    properties: {
        
        GuanKaSZ: { default: [] },
        GuanKaMap: { default: null, type: cc.Button },
        
        
    },

    // use this for initialization
    onLoad: function () {

    },
    
    SetGuanKaMap: function () {
        var node = cc.find('data').getComponent('NewScript');  
        var IDNum = node.getdata(); 
        //  通过data的关卡ID进行关卡地图更换
        switch (IDNum) {
            case 1: // 朱雀场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/zhuquechangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 2: // 白虎场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/baihuchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 3: // 玄武场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/xuanwuchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 4: // 青龙场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/qinglongchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 5: // 麒麟场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/qilinchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 6: // 刑天场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/xingtianchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
            case 7: // 蚩尤场景
                var realUrl = cc.url.raw("resources/zhandouChangJing/chiyouchangjing.png");
                var texture = cc.textureCache.addImage(realUrl);
                texture.width = 1380;
                texture.height = 5178;
                this.GuanKaMap.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                break;
        }
        
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
