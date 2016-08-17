cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.zIndex=100;
        console.log("胜利界面的弹出：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：：");
    },
    
    winCallBack: function () {
        
        
        console.log("shenglianniu:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
        cc.director.loadScene('GuanQia');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
