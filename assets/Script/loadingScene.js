cc.Class({
    extends: cc.Component,

    properties: {
        loading: { default: null, type: cc.Label },
        //OpacityCache: { default: 255 },
        //state: { default: 1 },
    },

    // use this for initialization
    onLoad: function () {

    },
    
    toBegan:function() {
        this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){
            cc.director.loadScene('gameMain')
        })));
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        // this.loading.Opacity = this.OpacityCache;
        // if (this.state == 0) {
        //     this.OpacityCache++;
        //     if (this.OpacityCache == 255) {
        //         this.state = 1;
        //     }
        // } else if (this.state == 1) {
        //     this.OpacityCache--;
        //     if (this.OpacityCache == 0) {
        //         this.state = 0;
        //     }
        // }
        this.toBegan();
    },
});
