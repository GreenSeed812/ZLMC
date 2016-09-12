cc.Class({
    extends: cc.Component,

    properties: {
       
       
       
    },
    // use this for initialization
    onLoad: function () {
        

    },
    close:function()
    {
        // console.log("即将删除当前预制件");
       this.node.removeFromParent();
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
