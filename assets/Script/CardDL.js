cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        CardPrefab: { default: null, type: cc.Prefab },
    },

    // use this for initialization
    onLoad: function () {
        this.ShowGWCard();
    },

    ShowGWCard: function () {
        var nodeDL = cc.find('data').getComponent('NewScript');
        console.log("数组长度" + nodeDL.GWshujuCache.length);
        for (var i = 0; i < nodeDL.GWshujuCache.length; i++) {
            var CardPre = cc.instantiate(this.CardPrefab);
            this.node.addChild(CardPre);
            CardPre.setPosition(0,0);
            console.log(nodeDL.szDLtupian.length);
            for (var j = 0; j < nodeDL.szDLtupian.length; j++ ) {
                if ( nodeDL.GWshujuCache[i] == nodeDL.szDLtupian[j] ) {
                    CardPre.setTuPian(nodeDL.szDLtupian[j].PATH);
                    break;
                }
            }
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
