cc.Class({
    extends: cc.Component,

    properties: {
        
        MainKng:{  default: null, type:cc.Node       },
        frame:  {  default: [],   type:cc.SpriteFrame},
        ID:     {  default: 4,                       },
        index:  {  default: 0,                       },
        whoAmI: {  default: 0,                       },
        isXiao: {  default: false,                   }
      
        
    },

    // use this for initialization
    onLoad: function () {
        
       var sprite = this.getComponent(cc.Sprite);
       sprite.spriteFrame = this.frame[this.ID]//根据ID来更换精灵的纹理贴图
     // sprite.SpriteFrame=this.frame[ID];
     this.whoAmI=this.index;
       this.node.on(cc.Node.EventType.TOUCH_START, function (event) 
        {
            this.mainKng.getComponent('gameMain').isHuan=false;
            this.whoAmI=this.index;
            this.mainKng.getComponent('gameMain').WhoAreyou=this.whoAmI;
            this.mainKng.getComponent('gameMain').jiaohuan=this.whoAmI;
            this.mainKng.getComponent('gameMain').WhoAreyouX=this.node.x;
            this.mainKng.getComponent('gameMain').WhoAreyouY=this.node.y;
            //console.log("45:::::::::::::::::::"+ this.mainKng.getComponent('gameMain').WhoAreyou)
             console.log("block:::"+this.node.x);
             console.log("block:::"+this.node.y);
           
           
        }, this);
        
            this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) 
             {
                 
                 
                 
                 
                 this.mainKng.getComponent('gameMain').WhoAreyou=this.whoAmI;
                 console.log( this.mainKng.getComponent('gameMain').WhoAreyou);
                 if((event.getLocationX()-240)-this.node.x>10||(event.getLocationX()-240)-this.node.x<-10)
                 {
                      console.log((event.getLocationX()-240)-this.node.x);
                      
                     this.node.x=event.getLocationX()-240;
                 }
                 if((event.getLocationY()-400)-this.node.y>10||(event.getLocationY()-400)-this.node.y<-10)
                 {
                     this.node.y=event.getLocationY()-400;
                 }
             }, this);     
             
             this.node.on(cc.Node.EventType.TOUCH_END, function (event) 
            {
                  this.mainKng.getComponent('gameMain').isHuan=true;
            } ,this); 
       
         
    },
     update: function (dt) {
            
     },
     frameBian:function()
     {
         
     },
     shubiO:function()
     {
         this.mainKng.getComponent('gameMain').isHuan=false;
            this.whoAmI=this.index;
            this.mainKng.getComponent('gameMain').WhoAreyou=this.whoAmI;
            this.mainKng.getComponent('gameMain').jiaohuan=this.whoAmI;
            this.mainKng.getComponent('gameMain').WhoAreyouX=this.node.x;
            this.mainKng.getComponent('gameMain').WhoAreyouY=this.node.y;
     },
     set:function(value)
    {
            this.mainKng=value;
    },
    
});
