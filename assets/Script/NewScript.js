cc.Class({
    extends: cc.Component,

    properties: {
        Gk:        {  default:null  },
        DiJiGuan:   {  default:null  },
        GKlist:     {  default:[]    },
        Npclist:    {  default:[]    },
        Personlist: {  default:[]    },
        diaoluo:    {  default:[]    },
        itemlist:   {  default:[]    },
        skilllist:  {  default:[]    },
        tpSkilllist:{  default:[]    },
        jqList:     {  default:[]    },
        dlList:     {  default:[]    },
        exList:     {  default:[]    },
        szduihua: { default: [] },
        szqiege: { default: [] },
        sztouxiang: { default: [] },
        shuzu: { default: [] },
        juqingPrefab: { default: null, type: cc.Prefab },

    },

    // use this for initialization
    onLoad: function () {
         cc.game.addPersistRootNode(this.node);
        console.log("is Persist node " + cc.game.isPersistRootNode(this.node));
        this.GKdubiao('jsonDate/gq_table',this.GKlist);
        this.Npcdubiao     ('jsonDate/npc_table',this.Npclist         );
        this.Persondubiao  ('jsonDate/person_table',this.Personlist   );
        this.tp_skill_table('jsonDate/tp-skill_table',this.tpSkilllist);
        this.skill_table   ('jsonDate/skill_table',this.skilllist     );
        this.ex_table      ('jsonDate/ex',this.exList           );
        this.dl_table      ('jsonDate/dl_table',this.dlList           );
        this.loadJuQing("jsonDate/jq_table");
        this.loadQieGe("jsonDate/juqingqiege");
        this.loadTouXiang("jsonDate/IDtouxiang"); 
    },
    
    
    load: function (juqingID, node) {
        for (var i = 0; i < this.szqiege.length; i++ ) {
            if (juqingID == this.szqiege[i].ID) { 
                console.log("剧情ID" + this.szqiege[i].ID + "dangqian" + i);
                 this.juqingNum = this.szqiege[i].NUM;
                 this.juqingBegan = this.szqiege[i].BEGAN;
            }
        }
        for (var j = 0; j < this.juqingNum; j++ ) {
            var canshu = {};
            canshu.Num = this.juqingNum;
            canshu.NR = this.szduihua[this.juqingBegan].NR;
            canshu.LR = this.szduihua[this.juqingBegan].LR;
            canshu.RR = this.szduihua[this.juqingBegan].RR;
            for (var i = 0; i < this.sztouxiang.length; i++ ) {
                if (this.sztouxiang[i].ID == this.szduihua[this.juqingBegan].LR) {
                    canshu.PATH = this.sztouxiang[i].NAME;
                    console.log(canshu.PATH);
                } else if (this.sztouxiang[i].ID == this.szduihua[this.juqingBegan].RR) {
                    canshu.PATH = this.sztouxiang[i].NAME;
                    console.log(canshu.PATH);
                }
            }
            this.shuzu.push(canshu);
            this.juqingBegan++;
        }
        console.log("显示剧情数组准备完成");
        this.CreateJuQing(this.shuzu,node);
    }, 
    
    CreateJuQing: function (arr, node ) {
        var JuQing = cc.instantiate(this.juqingPrefab);
        node.addChild(JuQing);
        JuQing.setPosition(0,0);
        JuQing.getComponent('JuQing').changjing = this;
        JuQing.getComponent('JuQing').ShowJuQing(arr);
        console.log("预制件创建成功");
    }, 
    loadJuQing: function (path) {
        let self = this;
        cc.loader.loadRes(path, 
        function (err, clip) {
            var str = clip;
            var obj = eval('(' + str + ')');
            var lenght = obj.length;
            console.log(lenght);
            for (var i = 2; i < lenght; i++ ) {
                var duihua = {};
                duihua.ID = obj[i]["ID"];
                duihua.NR = obj[i]["NR"];
                duihua.LR = obj[i]["LR"];
                duihua.RR = obj[i]["RR"];
                duihua.BR = obj[i]["BR"];
                duihua.SE = obj[i]["SE"];
                self.szduihua.push(duihua);
            }
            self.szduihuaCC = 104;
            console.log("piupiupiu" + self.szduihuaCC);
            console.log("剧情加载完成");
        });
    },
    
    loadTouXiang: function (path) {
        let self = this;
        cc.loader.loadRes(path,
        function (err, clip) {
            var str = clip;
            var obj = eval('(' + str + ')');
            var lenght = obj.length;
            for (var i = 0; i < lenght; i++ ) {
                var touxiang = {};
                touxiang.ID = obj[i]["ID"];
                touxiang.NAME = obj[i]["NAME"];
                self.sztouxiang.push(touxiang);
            }
        });
        console.log("人物头像加载完成");
    },
    loadQieGe: function (path) {
        let self = this;
        cc.loader.loadRes(path,
        function (err, clip) {
            var str = clip;
            var obj = eval('(' + str + ')');
            var lenght = obj.length;
            for (var i = 1 ; i < lenght; i++ ) {
                var qiege = {};
                qiege.ID = obj[i]["ID"];
                qiege.NUM = obj[i]["NUM"];
                qiege.BEGAN = obj[i]["BEGAN"];
                qiege.END = obj[i]["END"];
                self.szqiege.push(qiege);
            }
        });
        console.log("剧情切割加载完成");
    },
    
    
    
    
GKdubiao:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
            console.log("关卡：：：："+err);
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
            console.log("NPC：：：："+err);
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
            console.log("Persondubiao：：：："+err);
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
                node.PT_SK1=obj[i]['PT_SK1'];
                node.PT_SK2=obj[i]['PT_SK2'];
                node.SK=obj[i]['SK'];
                node.SUR1=obj[i]['SUR1'];
                node.SUR2=obj[i]['SUR2'];
                node.SUR3=obj[i]['SUR3'];
                node.SUR4=obj[i]['SUR4'];
                node.SUR5=obj[i]['SUR5'];
                node.SUR6=obj[i]['SUR6'];
                Array.push(node);
            }
        });
    },
      tp_skill_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
               console.log("tp_skill_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.NAME=obj[i]['NAME'];
                node.INS=obj[i]['INS'];
                node.TTYPE=obj[i]['TTYPE'];
                node.FORM=obj[i]['FORM'];
                node.PB=obj[i]['CD'];
                node.SSUND=obj[i]['SSUND'];
                node.SPSD=obj[i]['SPSD'];
                node.CAF=obj[i]['CAF'];
                node.FF=obj[i]['FF'];
                node.FET=obj[i]['FET'];
                node.TSUND=obj[i]['TSUND'];
                node.FIV=obj[i]['FIV'];
                node.FFV=obj[i]['FFV'];
                node.FUNT=obj[i]['FUNT'];
                Array.push(node);
            }
        });
    },
     skill_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
             console.log("skill_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.NAME=obj[i]['NAME'];
                node.INS=obj[i]['INS'];
                node.TNUM=obj[i]['TNUM'];
                node.FUNC=obj[i]['FUNC'];
                node.CD=obj[i]['CD'];
                node.SSUND=obj[i]['SSUND'];
                node.SPSD=obj[i]['SPSD'];
                node.CAF=obj[i]['CAF'];
                node.FF=obj[i]['FF'];
                node.FET=obj[i]['FET'];
                node.TSUND=obj[i]['TSUND'];
                node.FIV=obj[i]['FIV'];
                node.FFV=obj[i]['FFV'];
                node.FUNT=obj[i]['FUNT'];
                Array.push(node);
            }
        });
    },
     ex_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
               console.log("ex_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.LV=obj[i]['LV'];
                node.exp=obj[i]['exp'];
                Array.push(node);
            }
        });
    },
      dl_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
             console.log("dl_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.WID=obj[i]['WID'];
                node.NUM=obj[i]['NUM'];
                Array.push(node);
            }
        });
    },
     jq_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
             console.log("jq_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.NR=obj[i]['NR'];
                node.LR=obj[i]['LR'];
                node.RR=obj[i]['RR'];
                node.BR=obj[i]['BR'];
                node.SE=obj[i]['SE'];
                Array.push(node);
            }
        });
    },
    item_table:function(path,Array)
    {
        let self = this;
        cc.loader.loadRes(path, function (err, clip) {
             console.log("item_table：：：："+err);
            var str=clip;
            var obj = eval('(' + str + ')');
            for(var i=2;i<obj.length;i++ )
            {
                var node={};
                node.ID=obj[i]['ID'];
                node.NAME=obj[i]['NAME'];
                node.INS=obj[i]['INS'];
                node.IPT_QUA=obj[i]['IPT_QUA'];
                node.ICO=obj[i]['ICO'];
                node.jy=obj[i]['jy'];
                Array.push(node);
            }
        });
    },
    
    
    
    
    
     Chaex:function(ID)
    {
        for(var i=0;i<this.exList.length;i++)
        {
            if(this.exList[i].ID==ID)
            { 
                return this.exList[i];
            }
        }
    },
    ChatpSkill:function(ID)
    {
        for(var i=0;i<this.tpSkilllist.length;i++)
        {
            if(this.tpSkilllist[i].ID==ID)
            { 
                return this.tpSkilllist[i];
            }
        }
    },
    Chadl:function(ID)
    {
        for(var i=0;i<this.dl_table.length;i++)
        {
            if(this.dl_table[i].ID==ID)
            { 
                return this.dl_table[i];
            }
        }
    },
    Chaskill:function(ID)
    {
        for(var i=0;i<this.item_table.length;i++)
        {
            if(this.item_table[i].ID==ID)
            { 
                return this.item_table[i];
            }
        }
    },
    Chajq:function(ID)
    {
        for(var i=0;i<this.item_table.length;i++)
        {
            if(this.item_table[i].ID==ID)
            { 
                return this.item_table[i];
            }
        }
    },
    ChaItem:function(ID)
    {
        for(var i=0;i<this.item_table.length;i++)
        {
            if(this.item_table[i].ID==ID)
            { 
                return this.item_table[i];
            }
        }
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
    ChaPerson:function(ID)
    {
        console.log("tttttttttt：：：：：：：：：：：：：：");
        for(var i=0;i<this.Personlist.length;i++)
        {
            if(this.Personlist[i].ID==ID)
            { 
                return this.Personlist[i];
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
    setDiaoluo:function(name)
    {
        this.diaoluo.push(name);
    },
    getDiaoluo:function()
    {
        return this.diaoluo;
    }
    
    
    
    
    
    
    
    
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
