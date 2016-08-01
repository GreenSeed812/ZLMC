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

    },
    
    loseCallBack: function () {
        console.log("asdfasdfasd");
        cc.director.loadScene('GuanQia');
    },
    
    tishengCallBack: function () {
        cc.director.loadScene('juese');
    },
    
    zhuanhuanCallBack: function () {
        cc.director.loadScene('juese');
    },
    
    zhanweiCallBack: function () {
        cc.director.loadScene('juese');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
