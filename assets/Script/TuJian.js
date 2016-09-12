cc.Class({
    extends: cc.Component,

    properties: {
        kapai01: { default: null, type: cc.Sprite },
        kapai02: { default: null, type: cc.Sprite },
        kapai03: { default: null, type: cc.Sprite },
        kapai04: { default: null, type: cc.Sprite },
        kapai05: { default: null, type: cc.Sprite },
        kapai06: { default: null, type: cc.Sprite },
        kapai07: { default: null, type: cc.Sprite },
        kapai08: { default: null, type: cc.Sprite },
        kapai09: { default: null, type: cc.Sprite },
        kapai10: { default: null, type: cc.Sprite },
        kapai11: { default: null, type: cc.Sprite },
        kapai12: { default: null, type: cc.Sprite },
        kapai13: { default: null, type: cc.Sprite },
        kapai14: { default: null, type: cc.Sprite },
        kapai15: { default: null, type: cc.Sprite },
        kapai16: { default: null, type: cc.Sprite },
        kapai17: { default: null, type: cc.Sprite },
        kapai18: { default: null, type: cc.Sprite },
        kapai19: { default: null, type: cc.Sprite },
        kapai20: { default: null, type: cc.Sprite },
        kapai21: { default: null, type: cc.Sprite },
        kapai22: { default: null, type: cc.Sprite },
        kapai23: { default: null, type: cc.Sprite },
        kapai24: { default: null, type: cc.Sprite },
        kapai25: { default: null, type: cc.Sprite },
        kapai26: { default: null, type: cc.Sprite },
        kapai27: { default: null, type: cc.Sprite },
        kapai28: { default: null, type: cc.Sprite },
        kapai29: { default: null, type: cc.Sprite },
        kapai30: { default: null, type: cc.Sprite },
        kapai31: { default: null, type: cc.Sprite },
        kapai32: { default: null, type: cc.Sprite },
        kapai33: { default: null, type: cc.Sprite },
        kapai34: { default: null, type: cc.Sprite },
        kapai35: { default: null, type: cc.Sprite },
        kapai36: { default: null, type: cc.Sprite },
        kapai37: { default: null, type: cc.Sprite },
        kapai38: { default: null, type: cc.Sprite },
        kapai39: { default: null, type: cc.Sprite },
        kapai40: { default: null, type: cc.Sprite },
        kapai41: { default: null, type: cc.Sprite },
        kapai42: { default: null, type: cc.Sprite },
        kapai43: { default: null, type: cc.Sprite },
        kapai44: { default: null, type: cc.Sprite },
        kapai45: { default: null, type: cc.Sprite },
        kapai46: { default: null, type: cc.Sprite },
        kapai47: { default: null, type: cc.Sprite },
        kapai48: { default: null, type: cc.Sprite },
        kapai49: { default: null, type: cc.Sprite },
        kapai50: { default: null, type: cc.Sprite },
        kapai51: { default: null, type: cc.Sprite },
        kapai52: { default: null, type: cc.Sprite },
        kapai53: { default: null, type: cc.Sprite },
        kapai54: { default: null, type: cc.Sprite },
        kapai55: { default: null, type: cc.Sprite },
        kapai56: { default: null, type: cc.Sprite },
        kapai57: { default: null, type: cc.Sprite },
        kapai58: { default: null, type: cc.Sprite },
        kapai59: { default: null, type: cc.Sprite },
        kapai60: { default: null, type: cc.Sprite },
        kapai61: { default: null, type: cc.Sprite },
        kapai62: { default: null, type: cc.Sprite },
        kapai63: { default: null, type: cc.Sprite },
        kapai64: { default: null, type: cc.Sprite },
        kwPreShuZu: { default: [] },
        kongweiPrefab: { default: null, type: cc.Prefab },
        LastKongWeiX: -360, // 最后一张card的x坐标
        LastKongWeiY: -140, // 最后一张card的y坐标
        LineKwNum: 0,       // 横排中card的数量
        ColumnKwNum: 0,     // 竖排中card的数量
        content: { default: null, type: cc.Node },
        pathShuZu: { default: [] },
        contentNode: { default: null, type: cc.Node },
    },

    // use this for initialization
    onLoad: function () {
        this.createTuJian();
    },
    
    createTuJian: function () {
        var nodeNS = cc.find('data').getComponent('NewScript');
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        for ( var i = 0; i < nodeNS.itemlist.length; i++ ) {
            var nodeaaa = cc.instantiate(this.kongweiPrefab);
            this.contentNode.addChild(nodeaaa);
            nodeaaa.setPosition(this.LastKongWeiX, this.LastKongWeiY);
            this.LastKongWeiX += 240;
            this.LineKwNum++;
            if (this.LineKwNum == 4) {
                this.LineKwNum = 0;
                this.LastKongWeiX = -360;
                this.LastKongWeiY -= 280;
                this.ColumnKwNum++;
            }
            nodeaaa.getComponent('BeiBaoKaPai').SetNameAndNum(nodeNS.itemlist[i].NAME);
            for (var j = 0; j < nodeNS.szDLtupian.length; j++ ) {
                if ( nodeNS.itemlist[i].ID == nodeNS.szDLtupian[j].ID ) {
                    nodeaaa.getComponent('KongWeiPre').setTuPian(nodeNS.szDLtupian[j].PATH, this, nodeNS.szDLtupian[j].ID);
                    break;
                }
            }
        }
        // for ( var n = 0; n < nodeNS.GWshujuCache.length; n++ ) {
            
        // }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
