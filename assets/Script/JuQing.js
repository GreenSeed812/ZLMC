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
    },
    ShowJuQing: function (arr) {
        // console.log("进入剧情显示");
        
        // console.log("显示剧情通过");
        //callback3();
        if (this.num == 0) {
            for (var i = 0; i < arr.length; i++ ) {
                this.shuzu.push(arr[i]);
            }
        }
        // console.log(this.num + "asdf" + this.shuzu.length );
        if (this.num != this.shuzu.length) 
        {
            var showUP = this.shuzu[this.num].RR;
            var showDOWN = this.shuzu[this.num].LR;
            if (showUP != 0) 
            {
                var str = this.shuzu[this.num].NR;
                this.UpLabel.string = str;
                
                var realName = this.shuzu[this.num].PATH;
                var self = this;
                cc.loader.loadRes("tuji/juqingduihua/juqingPre", cc.SpriteAtlas, function (err, atlas) {
                  var frame = atlas.getSpriteFrame(realName);
                  self.UpSprite.getComponent(cc.Sprite).spriteFrame = frame;
                  
                });
                // var realUrl = cc.url.raw(this.shuzu[this.num].PATH);
                // var texture = cc.textureCache.addImage(realUrl);
                // console.log("yy::::::::::::::::::::::::::::"+realUrl);
                // this.UpSprite.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                this.UpNode.active = true;
                this.DownNode.active = false;
                this.MiddleNode.active = false;
            } 
            else if (showDOWN != 0) 
            { 
                var str = this.shuzu[this.num].NR;
                this.DownLabel.string = str;
                // console.log("path");
                // console.log(this.shuzu[this.num].PATH);
                // var realUrl = cc.url.raw(this.shuzu[this.num].PATH);
                // var texture = cc.textureCache.addImage(realUrl);
                //this.DownSprite.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                var realName = this.shuzu[this.num].PATH;
                var self = this;
                cc.loader.loadRes("tuji/juqingduihua/juqingPre", cc.SpriteAtlas, function (err, atlas) {
                  var frame = atlas.getSpriteFrame(realName);
                  self.DownSprite.getComponent(cc.Sprite).spriteFrame = frame;
                  
                });
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
            // console.log("显示结束");
            this.num++;
        }
        else 
        {   
            
            
            
            // console.log("PPOOPP:::::::::::::::::::::::::::::::::::::::::::::::"+this.isEnd);
            //callback();
            if( this.isEnd!=null)
            {
                
                var nodeQJ = cc.find('data').getComponent('QuanJuNum');
                var nodeNS = cc.find('data').getComponent('NewScript');
                // console.log("当前章数" + nodeNS.GuanKaState[0].Zhang);
                // console.log("章" + nodeQJ.ZhangNum);
                // console.log("节" + nodeQJ.JieNum);
                if (nodeQJ.ZhangNum == nodeNS.GuanKaState[0].Zhang && nodeQJ.JieNum == nodeNS.GuanKaState[0].Jie) {
                    // console.log("当前小节数" + nodeNS.GuanKaState[0].Jie);
                    if (nodeNS.GuanKaState[0].Jie < 3) {
                        nodeNS.GuanKaState[0].Jie++;
                    } else {
                        nodeNS.GuanKaState[0].Zhang++;
                        // console.log("战斗胜利后章数" + nodeNS.GuanKaState[0].Zhang);
                        nodeNS.GuanKaState[0].Jie = 1;
                    }
                }
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
            if(this.callBack==null)
            {
                
            }else
            {
                 this.callBack();
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
