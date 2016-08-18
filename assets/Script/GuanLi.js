cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
        speed: { default: 2 },
        jueseSprite: { default: null, type: cc.Sprite },
        
        kapaiSprite1: { default: null, type: cc.Sprite },
        kapaiSprite2: { default: null, type: cc.Sprite },
        kapaiSprite3: { default: null, type: cc.Sprite },
        kapaiSprite4: { default: null, type: cc.Sprite },
        kapaiSprite5: { default: null, type: cc.Sprite },

        NowExpNum: { default: 0 },
        NeedExpNum: { default: 0 },
        jueseIDCache: { default: 0 },
        kapaiExpNum: { default: 0 },

        showGJ: { default: null, type: cc.Label },
        showFY: { default: null, type: cc.Label },
        showSM: { default: null, type: cc.Label },

        JinDuTiao: {default: null, type: cc.ProgressBar },
        tishengDJ: { default: 0 },
    },

    // use this for initialization
    onLoad: function () {
        //this._pingpong = true;
        //this.JinDuTiao.progress = 0;
    },
    // 进度条根据提升等级播放次数
    update: function (dt) {

        // var progress = this.JinDuTiao.progress;
        // for (var i = 0; i < this.tishengDJ.length; i++ ) {
        //     if(progress < 1.0 && this._pingpong){
        //         progress += dt * this.speed;
        //     }
        //     else {
        //         progress = 0;
        //         this._pingpong = progress <= 0;
        //     }
        //     progressBar.progress = progress;
        // }
    },

    // 通过角色ID 从数组中获取路径将提升界面中需要提升的卡牌更换
    ShowJueSe: function (jueseID, arr) {
        // this.jueseIDCache = jueseID;
        // for (var i = 0; i < arr.length; i++ ) {
        //     if (jueseID == arr[i].ID) {
        //         var realUrl = cc.url.raw(arr[i].PATH);
        //         var texture = cc.textureCache.addImage(realUrl);
        //         this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //         break;
        //     }
        // }
        // this.CunChuExp();
    },
    // 调出本地存储的角色升级经验  每次进入游戏后调用
    CunChuExp: function () {
        //this.NowExpNum = sys.localStorage.getItem(/* 通过Key获取本地数据 */);
        //this.NeedExpNum = sys.localStorage.getItem(/* 通过Key获取本地数据 */);
    },
    // 通过卡片ID 显示材料卡片的图片
    ShowKaPai: function (kapaiID, arr) {
        // for (var i = 0; i < arr.length; i++ ) {
        //     if (kapaiID == arr[i].ID) {
        //         var realUrl = cc.url.raw(arr[i].PATH);
        //         var texture = cc.textureCache.addImage(realUrl);
        //         var quanju = cc.find('data').getComponent('QuanJuNum'); 
        //         switch (quanju.kpNum) {
        //             case 0:
        //                 this.kapaiSprite1.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //                 break;
        //             case 1:
        //                 this.kapaiSprite2.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //                 break;
        //             case 2:
        //                 this.kapaiSprite3.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //                 break;
        //             case 3:
        //                 this.kapaiSprite4.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //                 break;
        //             case 4:
        //                 this.kapaiSprite5.getComponent(cc.Sprite).spriteFrame.setTexture(texture);
        //                 break;
        //         }
        //         if (quanju.kpNum < 5) {
        //             quanju.kpNum++;
        //         }
        //         break;
        //     }
        // }
    },
    // 因为读表数组不同  在空位显示卡牌与存储卡牌经验分开做两个函数
    CunChuKaPaiExp: function (kapaiID, arr) {
        // for (var i = 0; i < arr.length; i++ ) {
        //     if (kapaiID == arr[i].ID) {
        //         this.kapaiExpNum += arr[i].jy;
        //         break;
        //     }
        // }
        // this.tishengDJ = ( this.kapaiExpNum + this.NowExpNum ) / this.NeedExpNum;
    },

    ShowLabel: function () {
        // if (this.tishengDJ > 1) {
        //     /*TODO 通过读表获取 dj+当前等级 属性*/
        //     this.showGJ.string = /*攻击属性*/;
        //     this.showGJ.setR(255);
        //     this.showFY.string = /*防御属性*/;
        //     this.showFY.setR(255);
        //     this.showSM.string = /*生命属性*/;
        //     this.showSM.setR(255);
        // }
    },
    // 进度条动画   点击按钮后的回调函数  callback
    // ProgressAnimation: function () {

    // },
    // 点击提升按钮 进行升级 判断经验值百分比
    levelup: function (arr) {
        // var dengji = ( this.kapaiExpNum + this.NowExpNum ) / this.NeedExpNum;
        // var shengyuExp = ( this.kapaiExpNum + this.NowExpNum ) % this.NeedExpNum;
        
        // //  将提升等级+当前角色等级 set进本地数据等级中 
        // var dj = sys.localStorage.getItem(/* 通过Key获取当前等级 */);
        // var levelupDJ = dj + dengji;
        // sys.localStorage.setItem(/* 等级Key名称 */, levelupDJ);
        // //  将剩余经验set进本地数据当前经验中
        // sys.localStorage.setItem(/* 剩余经验Key名称 */, shengyuExp);
        // //  根据等级更新本地数据升级所需经验
        // for (var i = 0; i < arr.length; i++ ) {
        //     if (levelupDJ == arr[i].LV) {
        //         sys.localStorage.setItem(/* 当前等级升级所需经验Key名称 */, arr[i].exp);
        //         break;
        //     }
        // }
        // // 将全局计数器归零
        // var quanju = cc.find('data').getComponent('QuanJuNum'); 
        // quanju.kpNum = 0;
        // // this.kapaiExpNum = 0;
        // // this.NowExpNum = 0;
        // // this.NeedExpNum = 0;
        // this.showGJ.setR(0);
        // this.showFY.setR(0);
        // this.showSM.setR(0);
        // // 播放动画
        // // 问题： 是否在点击之后才会回调这个播放动画
        // this.update(dt);
    },




    


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
