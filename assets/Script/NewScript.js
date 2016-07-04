cc.Class({
    extends: cc.Component,

    properties: {
        
        Gk:      {  default:null  },
        DiJiGuan:{  default:null  },
        
        
    },

    // use this for initialization
    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        console.log("is Persist node " + cc.game.isPersistRootNode(this.node));
    },
    setdata : function(json){  
        this.Gk = json;    
    },  
    getdata : function(){  
        return this.Gk;    
    },  
    setDiJiGuan : function(id){  
        this.DiJiGuan = id;    
    },  
    getDiJiGuan : function(){  
        return this.DiJiGuan;    
    },  
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
