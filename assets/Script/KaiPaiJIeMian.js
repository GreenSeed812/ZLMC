cc.Class({
    extends: cc.Component,

    properties: {
        kaiDi:{default:null,type:cc.Prefab},
        kaiDiArray:{default:[],type:cc.Prefab},
        kaibackArray:{default:[],type:cc.Node},
        kaiback:{default:null,type:cc.Node},
        mask:{default:null,type:cc.Node},
        dx:{default:0},
        Dindex:{default:0}
      
        
    },
    // use this for initialization
    onLoad: function () {
        
        var index=0;
        for(var z=0;z<4;z++)
        {
            for(var i=0;i<4;i++)
            {
                for(var j=0;j<4;j++)
                {
                    var kaip = cc.instantiate(this.kaiDi);
                    kaip.setPosition(j*250-370+z*1000,i*-280+360);
                    this.kaibackArray[z].addChild(kaip);
                    this.kaiDiArray[index]=kaip;
                    index++;
                }
            }
        }
        
        
        this.mask.on('touchstart', this.clickstart, this);
        this.mask.on('touchend', this.clickend, this);
       
    },
    clickstart:function(event)
    {
        this.dx=event.getLocationX();
        console.log("点击开始"+this.dx);
    },
    clickend:function(event)
    {
         console.log("点击结束"+event.getLocationX());
         
       if(event.getLocationX()-this.dx<-50) 
       {
           console.log(this.Dindex);
           switch( this.Dindex)
           {
                case 0:
                    var action = cc.moveTo(2, this.kaiback.x-480, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex++;
                   break;
                case 1:
                    var action = cc.moveTo(2, this.kaiback.x-490, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex++;
                   break;
                case 2:
                    var action = cc.moveTo(2, this.kaiback.x-480, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex++;
                   break;
                   console.log(this.Dindex);
           }
       }
       if(event.getLocationX()-this.dx>50) 
       {
           console.log(this.Dindex);
           switch( this.Dindex)
           {
                case 1:
                    var action = cc.moveTo(2, this.kaiback.x+480, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex--;
                   break;
                case 2:
                    var action = cc.moveTo(2, this.kaiback.x+490, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex--;
                   break;
                case 3:
                    var action = cc.moveTo(2, this.kaiback.x+480, this.kaiback.y);
                    this.kaiback.runAction(action);
                    this.Dindex--;
                   break;
                   console.log(this.Dindex);
           }
       }
    }
});
