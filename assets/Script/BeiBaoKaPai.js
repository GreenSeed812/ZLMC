cc.Class({
    extends: cc.Component,

    properties: {
        GWName: { default: null, type: cc.Label },
        
        gwnum: { default: 0 },
        
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    SetNameAndNum: function (name, num) {
        this.GWName.string = name;
    },
    // setNum: function () {
            
    // },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
