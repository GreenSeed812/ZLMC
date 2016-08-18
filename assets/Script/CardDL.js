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

    },

    ShowGWCard: function () {
        var nodeDL = cc.find('data').getComponent('NewScript');

        for (var i = 0; i < nodeDL.GWshuzuCache.length; i++) {
            var CardPre = cc.instantiate(this.CardPrefab);
            node.addChild(CardPre);
            CardPre.setPosition(0,0);
            for (var j = 0; j < nodeDL.szDLtupian.length; j++ ) {
                if ( nodeDL.GWshuzuCache[i] == nodeDL.szDLtupian[j] ) {
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
