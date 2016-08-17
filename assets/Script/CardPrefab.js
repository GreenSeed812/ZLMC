cc.Class({
    extends: cc.Component,

    properties: {
        
        kongweiPrefab: { default: null, type: cc.Prefab },
        kaibei: { default: null, type: cc.Node },
        ////////////////// 移动到其他脚本中做成全局变量 ///////////////////////////
        LastKongWeiX: -360, // 最后一张card的x坐标
        LastKongWeiY: -140, // 最后一张card的y坐标
        LineKwNum: 0,       // 横排中card的数量
        ColumnKwNum: 0,     // 竖排中card的数量
        ///////////////////////////////////////////////////////////////////////////
        MyKongWeiX: 0,
        MyKongWeiY: 0,
    },
    // use this for initialization
    onLoad: function () {
        for(var i=0;i<16;i++)
        {
            for(var j=0;j<4;j++)
            {
                var KongWei = cc.instantiate(this.kongweiPrefab);
                KongWei.setPosition(j*220-350,i*245-3760);
                this.kaibei.addChild(KongWei);
            }
        }
        console.log("卡牌")
    },
    
    // 通过掉落ID创建相应的预制件
    SetKongWeiPrefab: function (diaoluoID) {
        var KongWei = cc.instantiate(this.kongweiPrefab);
        this.node.addChild(KongWei);
        KongWei.setPosition(this.LastKongWeiX, this.LastKongWeiY);
        console.log("成功创建了一个card预制件");
        console.log("位置在" + this.LastKongWeiX + this.LastKongWeiY);
        this.LastKongWeiX += 240;
        this.LineKwNum++;
        if (this.LineKwNum == 4) {
            this.LineKwNum = 0;
            this.LastKongWeiX = -360;
            this.LastKongWeiY -= 280;
            this.ColumnKwNum++;
        }
    },
    
    DeleteCard: function () {
        // todo:: delete
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
