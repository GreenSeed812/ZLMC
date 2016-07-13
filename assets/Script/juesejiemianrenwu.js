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
        this.kuang.getComponent(cc.Sprite).setVisible(false);
    },
    clock:function()
    {
         this.kuang.getComponent(cc.Sprite).setVisible(true);
         this.kuang.node.x=this.node.x;
         this.kuang.node.y=this.node.y;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
 
    // },
});
