cc.Class({
    extends: cc.Component,

    properties: {
       xueMax:{default:100},
       xue:{default:0},
    },

    // use this for initialization
    onLoad: function () {
        
        
        
        
        
        
        
        
        
        
        

    },
    xueShow:function(xue,xueMax)
    {
        
       this.getComponent(cc.ProgressBar).progress=xue/xueMax;
        
       
        
        
        
        
    }
    
    
    
    
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
