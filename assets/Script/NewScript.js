cc.Class({
    extends: cc.Component,

    properties: {
        
        Gk:        {  default:null  },
        DiJiGuan:  {  default:null  },
        GKlist:    {  default:[]    },
        Npclist:   {  default:[]    },
        Personlist:{  default:[]    },
    },
    // use this for initialization
    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        console.log("is Persist node " + cc.game.isPersistRootNode(this.node));
        //加载资源
        this.GKdubiao    ('jsonDate/gq_table',this.GKlist);
        this.Npcdubiao   ('jsonDate/npc_table',this.Npclist);
        this.Persondubiao('jsonDate/npc_table',this.Personlist);
    },
    GKdubiao:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.GKID=obj[i]['GKID'];
                node.GKNAME=obj[i]['GKNAME'];
                node.BC=obj[i]['BC'];
                node.BJYY=obj[i]['BJYY'];
                node.GKTB=obj[i]['GKTB'];
                node.GKBJ=obj[i]['GKBJ'];
                node.GKJRJQ=obj[i]['GKJRJQ'];
                node.KSZDJQ=obj[i]['KSZDJQ'];
                node.ZDJSJQ=obj[i]['ZDJSJQ'];
                node.DL=obj[i]['DL'];
                node.N1=obj[i]['N1'];
                node.N3=obj[i]['N3'];
                node.N2=obj[i]['N2'];
                Array.push(node);
            }
        });
    },
    Npcdubiao:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.NAME=obj[i]['NAME'];
                node.IPT_APT=obj[i]['IPT_APT'];
                node.IPT_LF=obj[i]['IPT_LF'];
                node.IPT_ATK=obj[i]['IPT_ATK'];
                node.IPT_DEF=obj[i]['IPT_DEF'];
                node.IPT_CRIT=obj[i]['IPT_CRIT'];
                node.IPT_IDEF=obj[i]['IPT_IDEF'];
                node.PT_SK=obj[i]['PT_SK'];
                node.PT_SK=obj[i]['PT_SK'];
                node.SK1=obj[i]['SK1'];
                node.SK2=obj[i]['SK2'];
                node.SK3=obj[i]['SK3'];
                node.SK4=obj[i]['SK4'];
                node.SUR=obj[i]['SUR'];
                node.PositionX=obj[i]['PositionX'];
                node.PositionY=obj[i]['PositionY'];
                Array.push(node);
            }
        });
    },
    Persondubiao:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.GKID=obj[i]['ID'];
                node.GKNAME=obj[i]['NAME'];
                node.BC=obj[i]['IPT_APT'];
                node.BJYY=obj[i]['IPT_LF'];
                node.GKTB=obj[i]['IPT_ATK'];
                node.GKBJ=obj[i]['IPT_DEF'];
                node.GKJRJQ=obj[i]['PT_SK1'];
                node.KSZDJQ=obj[i]['PT_SK2'];
                node.ZDJSJQ=obj[i]['SK'];
                node.DL=obj[i]['SUR1'];
                node.N1=obj[i]['SUR2'];
                node.N3=obj[i]['SUR3'];
                node.N2=obj[i]['SUR4'];
                node.N2=obj[i]['SUR5'];
                node.N2=obj[i]['SUR6'];
                Array.push(node);
            }
        });
    },
    ChaGK:function(ID,boCi)
    {
        for(var i=0;i<this.GKlist.length;i++)
        {
            this.GKlist
            if(this.GKlist[i].GKID==ID&&this.GKlist[i].BC==boCi)
            {
                return this.GKlist[i]; 
            0}
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    },
    ChaNPC:function(ID)
    {
        for(var i=0;i<this.Npclist.length;i++)
        {
            if(this.Npclist[i].ID==ID)
            { 
                return this.Npclist[i];
            }
        }
    },
    setdata : function(json){  
        this.Gk = json;    
    },  
    getdata : function(){  
        return this.Gk;    
    },  
    setDiJiGuan : function(json){  
        this.DiJiGuan = json;    
    },  
    getDiJiGuan : function(){  
        return this.DiJiGuan;    
    },
    
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
