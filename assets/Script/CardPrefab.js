cc.Class({
    extends: cc.Component,

    properties: {
        
        kongweiPrefab: { default: null, type: cc.Prefab },
        ////////////////// 移动到其他脚本中做成全局变量 ///////////////////////////
        LastKongWeiX: -360, // 最后一张card的x坐标
        LastKongWeiY: -140, // 最后一张card的y坐标
        LineKwNum: 0,       // 横排中card的数量
        ColumnKwNum: 0,     // 竖排中card的数量
        ///////////////////////////////////////////////////////////////////////////
        
        contentNode: { default: null, type: cc.Node },
        kwPreShuZu: { default: [] },
        pathShuZu: { default: [] },
        //scrollview: { default: null, type: cc.ScrollView },
        
        content: { default: null, type: cc.Node },
        
        MyKongWeiX: 0,
        MyKongWeiY: 0,
        ContentHeight: 1120,
    },
    // use this for initialization
    onLoad: function () {
        //this.SetKongWeiPrefab();
        this.content.height = this.ContentHeight;
        
        this.ShowGWCard(); 
    },
    
    closeThePre: function (ID) {
        // console.log("进入移除预制件函数： 此处移除卡牌预制件");
        // console.log("  阿萨德法师打发  " + ID);
        this.GuanLiobj.ShowKaPai(ID);
        
        this.node.removeFromParent();
    },
    
    // 显示当前数组中的卡牌
    ShowGWCard: function () {
        var nodeDL = cc.find('data').getComponent('NewScript');
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        for ( var i = 0; i < nodeDL.GWshujuCache.length; i++ ) {
            this.kwPreShuZu[i] = cc.instantiate(this.kongweiPrefab);
            this.kwPreShuZu[i].getComponent('KongWeiPre').Card = this;  
            this.contentNode.addChild(this.kwPreShuZu[i]);
            this.kwPreShuZu[i].setPosition(this.LastKongWeiX, this.LastKongWeiY);
            this.LastKongWeiX += 240;
            this.LineKwNum++;
            if (this.LineKwNum == 4) {
                this.LineKwNum = 0;
                this.LastKongWeiX = -360;
                this.LastKongWeiY -= 280;
                this.ColumnKwNum++;
                if (this.ColumnKwNum > 3) {
                    this.ContentHeight += 280;
                    this.content.height = this.ContentHeight;
                }
            }
            var shuzu = {};
            for (var j = 0; j < nodeDL.szDLtupian.length; j++ ) {
                if ( nodeDL.GWshujuCache[i].ID == nodeDL.szDLtupian[j].ID ) {
                    shuzu.PATH = nodeDL.szDLtupian[j].PATH;
                    shuzu.ID = nodeDL.szDLtupian[j].ID;
                    break;
                }
            }
            shuzu.gwNum = nodeDL.GWshujuCache[i].Num;
            for (var m = 0; m < nodeDL.itemlist.length; m++) {
                if (nodeDL.GWshujuCache[i].ID == nodeDL.itemlist[m].ID) {
                    shuzu.gwName = nodeDL.itemlist[m].NAME;
                    break;
                }
            }
            this.pathShuZu.push(shuzu);
        }
        
        //console.log(nodeDL.GWshujuCache.length);
        for ( var i = 0; i < nodeDL.GWshujuCache.length; i++ ) {
            // console.log("这是什么这是什么这是什么"+this.pathShuZu[i].PATH);
            this.kwPreShuZu[i].getComponent('KongWeiPre').setTuPian(this.pathShuZu[i].PATH, this, this.pathShuZu[i].ID);
            
            // console.log("这里是创建掉落卡牌预制件时卡牌数量：" + this.pathShuZu[0].gwNum);
            // console.log("这里是创建掉落卡牌预制件时卡牌名称：" + this.pathShuZu[0].gwName);
            this.kwPreShuZu[i].getComponent('BeiBaoKaPai').SetNameAndNum(this.pathShuZu[i].gwName,this.pathShuZu[i].gwNum);
        }
    },
    
    
    
    // 通过掉落ID创建相应的预制件
    // SetKongWeiPrefab: function () {
    //   console.log("准备创建一个card预制件");
    //     var nodeNS = cc.find('data').getComponent('NewScript');
        // console.log("掉落数组的长度" + nodeNS.GWshujuCache.length);
    //     for ( var i = 0; i < nodeNS.GWshujuCache.length; i++ ) {
    //         var diaoluoID = nodeNS.GWshujuCache[i].ID;
            
    //         var KongWei = cc.instantiate(this.kongweiPrefab);
    //         this.contentNode.addChild(KongWei);
    //         KongWei.setPosition(this.LastKongWeiX, this.LastKongWeiY);
            // console.log("成功创建了一个card预制件");
            // console.log("位置在" + this.LastKongWeiX + this.LastKongWeiY);
    //         this.LastKongWeiX += 240;
    //         this.LineKwNum++;
    //         if (this.LineKwNum == 4) {
    //             this.LineKwNum = 0;
    //             this.LastKongWeiX = -360;
    //             this.LastKongWeiY -= 280;
    //             this.ColumnKwNum++;
    //         }
    //     }
    // },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
