cc.Class({
    extends: cc.Component,

    properties:
    {
        Id:                {   default: "" },
        frame:             { default:[], type:cc.SpriteFrame },
        index:             { default:0                       },
        kuang:             {default:null,type:cc.Sprite      },
        Numcache: { default: 0 },
    },
    // use this for initialization
    onLoad: function () {
       // var node = cc.director.getScene().getChildByName('data');  
        //var GKnode = node.getComponent('NewScript').ChaPerson(this.Id); 
       // console.log(":::::::::::::"+GKnode);
        var sprite = this.getComponent(cc.Sprite);
        
        sprite.spriteFrame = this.frame[this.index];//根据ID来更换精灵的纹理贴图
        console.log("123");
        
        this.kuang.getComponent(cc.Sprite).setVisible(true);
        
        this.piupiupiu();
    },
    piupiupiu: function () {
        var node = cc.find('data').getComponent('QuanJuNum');
        node.theShowJSID = 201601001;
    },
    
    ChangeJSTexture: function () {
        var self = this;
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');//Personlist
        for (var i = 0; i < nodeNS.Personlist.length; i++) {
            if (nodeQJ.theShowJSID == nodeNS.Personlist[i].ID) {
                this.Numcache = nodeNS.Personlist[i].IPT_APT;
            }
        }
        for (var i = 0; i < nodeNS.ZHjuesePath.length; i++) {
            if (nodeQJ.theShowJSID == nodeNS.ZHjuesePath[i].NEXTID) {
                // 更换图片 nodeNS.ZHjuesePath[i].PATH
                cc.loader.loadRes(nodeNS.ZHjuesePath[i].PATH, cc.SpriteFrame, function (err, spriteFrame)
                {
                    console.log("这里是错误" + err);
                    self.frame[this.Numcache] = spriteFrame;
                    var sprite = self.getComponent(cc.Sprite);
                    sprite.spriteFrame = self.frame[this.Numcache];
                });
                break;
            }
        }
        
    },
    
    clock:function()
    {
        var nodeQJ = cc.find('data').getComponent('QuanJuNum');
        var nodeNS = cc.find('data').getComponent('NewScript');
        
        for (var i = 0; i < nodeNS.IDOrTexture.length; i++ ) {
            if (nodeNS.IDOrTexture[i].Num == this.index) {
                console.log("角色ID设置中" + nodeNS.IDOrTexture[i].ID);
                nodeQJ.theShowJSID = nodeNS.IDOrTexture[i].ID;
                console.log("角色ID设置完成" + nodeQJ.theShowJSID);
            }
        }
        this.kuang.getComponent(cc.Sprite).setVisible(true);
        this.kuang.node.x=this.node.x;
        this.kuang.node.y=this.node.y;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
 
    // },
});
