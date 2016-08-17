cc.Class({
    extends: cc.Component,

    properties: {
        UpLabel: { default: null, type: cc.Label },
        DownLabel: { default: null, type: cc.Label },
        MiddleLabel: { default: null, type: cc.Label },
        UpNode: { default: null, type: cc.Node },
        DownNode: { default: null, type: cc.Node },
        MiddleNode: { default: null, type: cc.Node },
        UpSprite: { default: null, type: cc.Sprite },
        DownSprite: { default: null, type: cc.Sprite },
        num: 0,
        Maxnum: 0,
        arrlength: 0,
        shuzu: { default: [] },
        isEnd:{default:false},
        
    },

    // use this for initialization
    onLoad: function () {
        // this.UpNode.active = false;
        // this.DownNode.active = false;
        // this.MiddleNode.active = false;
    },
    
    faceShow:function(face, callBack)
    {
       
        this.isEnd=face;
        this.callBack = callBack;
         console.log("callBack:::::dsfsdfsdfsdf::::::::::::::sdfsdf:::::::::::this.callBack::::"+  this.callBack);
    },
    ShowJuQing: function (arr) {
        console.log("进入剧情显示");
        //callback3();
        if (this.num == 0) {
            for (var i = 0; i < arr.length; i++ ) {
                this.shuzu.push(arr[i]);
            }
        }
        console.log(this.num + "asdf" + this.shuzu.length );
        if (this.num != this.shuzu.length) 
        {
            var showUP = this.shuzu[this.num].RR;
            var showDOWN = this.shuzu[this.num].LR;
            if (showUP != 0) 
            {
                var str = this.shuzu[this.num].NR;
                this.UpLabel.string = str;
                var realUrl = cc.url.raw(this.shuzu[this.num].PATH);
                var texture = cc.textureCache.addImage(realUrl);
                this.UpSprite.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                this.UpNode.active = true;
                this.DownNode.active = false;
                this.MiddleNode.active = false;
            } 
            else if (showDOWN != 0) 
            { 
                var str = this.shuzu[this.num].NR;
                this.DownLabel.string = str;
                console.log("path");
                console.log(this.shuzu[this.num].PATH);
                var realUrl = cc.url.raw(this.shuzu[this.num].PATH);
                var texture = cc.textureCache.addImage(realUrl);
                this.DownSprite.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                this.UpNode.active = false;
                this.DownNode.active = true;
                this.MiddleNode.active = false;
            } 
            else 
            {
                var str = this.shuzu[this.num].NR;
                this.MiddleLabel.string = str;
                this.UpNode.active = false;
                this.DownNode.active = false;
                this.MiddleNode.active = true;
            }
            console.log("显示结束");
            this.num++;
        }
        else 
        {
            console.log("PPOOPP:::::::::::::::::::::::::::::::::::::::::::::::"+this.isEnd);
            //callback();
            if( this.isEnd!=null)
            {
                
                this.isEnd.getComponent('game').winbutton.active=true;
                this.node.removeFromParent();
            
            }
            else
            {
               this.num = 0;
               this.Maxnum = 0;
               this.isEnd = false;
                this.node.removeFromParent();
            }
            if(this.callBack!=null)
            {
                  this.callBack();
                  console.log("qweqweqwe")
            }
               
                   
                
               
            
            
        }
       
        
    },
    end:function()
    {
       
    }
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
