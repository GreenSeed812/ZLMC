cc.Class({
    extends: cc.Component,

    properties:
    {
        Id:                {   default: "" },
        frame:             { default:[], type:cc.SpriteFrame },
        index:             { default:0                       },
        kuang:             {default:null,type:cc.Sprite      }
      
    },
    // use this for initialization
    onLoad: function () {
       // var node = cc.director.getScene().getChildByName('data');  
        //var GKnode = node.getComponent('NewScript').ChaPerson(this.Id); 
       // console.log(":::::::::::::"+GKnode);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.frame[this.index];//根据ID来更换精灵的纹理贴图
        console.log("123");
        
        //this.kuang.getComponent(cc.Sprite).setVisible(false);
        
        this.piupiupiu();
    },
    piupiupiu: function () {
        var node = cc.find('data').getComponent('QuanJuNum');
        node.theShowJSID = 201601001;
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
