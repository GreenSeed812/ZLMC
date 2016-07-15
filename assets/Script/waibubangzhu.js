cc.Class({
    extends: cc.Component,

    properties: {
       
       bangzhujiemian:
       {
           default:[],type:cc.Sprite
       },
       dx:
       {
           default:0
       },
       cont:
       {
           default:0
       }
    },

    // use this for initialization
    onLoad: function () {
        
        this.node.on('touchstart',this.clickstart,this);
        this.node.on('touchend',this.clickend,this);
        this.cont=0;
    },
    clickstart:function(event)
    {
        this.dx=event.getLocationX();
    },
    clickend:function(event)
    {
       
            if(this.dx-event.getLocationX()>0)
            {
                console.log("   " +this.cont%3);
                var action = cc.moveTo(1, this.bangzhujiemian[this.cont%3].node.x-1080, this.bangzhujiemian[this.cont%3].node.y);
                var finished = cc.callFunc(function () {
                     this.bangzhujiemian[this.cont%3].node.x=1080
                     this.cont++;
                }, this);
                var myAction = cc.sequence(action, finished);
                this.bangzhujiemian[this.cont%3].node.runAction(myAction);
                
                
                if(this.cont%3+1==3){
                
                console.log("   " +(this.cont%3));
                var action = cc.moveTo(1, this.bangzhujiemian[0].node.x-1080, this.bangzhujiemian[0].node.y);
                this.bangzhujiemian[0].node.runAction(action);
               
                }else
                {
                    console.log("   " +(this.cont%3+1));
                    var action = cc.moveTo(1, this.bangzhujiemian[this.cont%3+1].node.x-1080, this.bangzhujiemian[this.cont%3+1].node.y);
                    this.bangzhujiemian[this.cont%3+1].node.runAction(action);
                }
                // console.log("   " +this.cont);
                // //this.bangzhujiemian[this.cont].node.x=1080;
                // var action = cc.moveTo(1, this.bangzhujiemian[this.cont].node.x-1080, this.bangzhujiemian[this.cont].node.y);
                // var finished = cc.callFunc(function () {
                //      this.bangzhujiemian[this.cont].node.x=-1080
                //     this.cont++
                //     if(this.cont==2)
                //  {
                //      console.log("pppppppppp:::::::")
                //       this.cont=0;
                //  }
                   
                // }, this);
                // var myAction = cc.sequence(action, finished);
                // this.bangzhujiemian[this.cont].node.runAction(myAction);
                
                // var action1 = cc.moveTo(1, this.bangzhujiemian[this.cont+1].node.x-1080, this.bangzhujiemian[this.cont+1].node.y);
                // this.bangzhujiemian[this.cont+1].node.runAction(action1);
                // console.log("   " +(this.cont+1));
                 
                 
             }
        
     
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
