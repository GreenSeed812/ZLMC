cc.Class({
    extends: cc.Component,

    properties: {
        
        ID:         {   default:null    },//id
        NAME:       {   default:null    },//名字
        IPT_APT:    {   default:null    },//类型
        IPT_LF:     {   default:null    },//生命
        IPT_ATK:    {   default:null    },//攻击力
        IPT_DEF:    {   default:null    },//防御力
        PT_SK1:     {   default:null    },//被动技能
        PT_SK2:     {   default:null    },//被动技能
        SK :        {   default:null    },//技能ID1
        SUR1:       {   default:null    },//图片名称
        SUR2:       {   default:null    },//图片名称
        SUR3:       {   default:null    },//图片名称
        SUR4:       {   default:null    },//图片名称
        SUR5:       {   default:null    },//图片名称
        SUR6:       {   default:null    },//图片名称
    },

    onLoad: function () {


    },
    inGuanka:function(guanka)
    {
            cc.loader.loadRes("jsonDate/person_table1", function (err, clip) {
            var str=clip;
            var obj = eval('(' + str + ')');
            console.log("cc****************" + obj[3]["ID"]);
            console.log("cc****************" + obj.length);
            this.ID=obj[3]["ID"];
            this.NAME=obj[3]["NAME"];
            this.IPT_APT=obj[3]["IPT_APT"];
            this.IPT_LF=obj[3]["IPT_LF"];
            this.IPT_ATK=obj[3]["IPT_ATK"];
            this.IPT_DEF=obj[3]["IPT_DEF"];  
            this.PT_SK1=obj[3]["PT_SK1"];
            this.PT_SK2=obj[3]["PT_SK2"];
            this.PT_SK2=obj[3]["PT_SK2"];
            this.PT_SK2=obj[3]["SK"];
            console.log("ID****************" + this.ID);
            console.log("NAME****************"+ this.NAME);0. 
            console.log("IPT_APT****************" +this.IPT_APT);
            console.log("IPT_LF****************" + this.IPT_LF);
            console.log("IPT_ATK****************" + this.IPT_ATK);
            console.log("IPT_DEF****************" +this.IPT_DEF);
                
                    
        });
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
