cc.Class({
    extends: cc.Component,

    properties: {
        
        //szqg: { default: [] },
        //showNode: { default: null, type: cc.Particle },
    },

    // use this for initialization
    onLoad: function () {

    },
    
    
    play: function (IDs, node, face, callback1) {
        
        var nodeaa = cc.find('data').getComponent('NewScript');
        var juqingID = nodeaa.szqiege[IDs].ID;
        nodeaa.getComponent('NewScript').load(juqingID, node, face, callback1);
            //callback1();
    },

    playjq: function (IDed, node, face) {
        var nodebb = cc.find('data').getComponent('NewScript');
        //var juqingID = nodebb.szqiege[IDed].ID;
        nodebb.getComponent('NewScript').load(IDed, node, face);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
