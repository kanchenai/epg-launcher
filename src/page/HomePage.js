import Page from "@core/frame/page/Page";

import html from "@html/home.html"
import ConfirmDialog from "@src/dialog/ConfirmDialog";
import utils from "@src/util/utils";
import {Adapter} from "../../core/frame/view/group/RecycleView";
import State from "@core/frame/util/State";

import HomeFragment_0 from "@fragment/home/HomeFragment_0";
import HomeFragment_1 from "@fragment/home/HomeFragment_1";
import HomeFragment_2 from "@fragment/home/HomeFragment_2";
import HomeFragment_3 from "@fragment/home/HomeFragment_3";
import HomeFragment_4 from "@fragment/home/HomeFragment_4";
import HomeFragment_5 from "@fragment/home/HomeFragment_5";
import HomeFragment_6 from "@fragment/home/HomeFragment_6";
import HomeFragment_7 from "@fragment/home/HomeFragment_7";
import HomeFragment_8 from "@fragment/home/HomeFragment_8";
import HomeFragment_9 from "@fragment/home/HomeFragment_9";
import HomeFragment_10 from "@fragment/home/HomeFragment_10";
import HomeFragment_11 from "@fragment/home/HomeFragment_11";
import HomeFragment_12 from "@fragment/home/HomeFragment_12";
import HomeFragment_13 from "@fragment/home/HomeFragment_13";

export default class HomePage extends Page {
    constructor() {
        super();
        this.pageName = "HomePage";
    }

    onCreate(param) {
        console.log(this.pageName, "onCreate", "传入参数", param);
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.bg = this.findViewById("bg");

        this.frame_view = this.findViewById("frame_view");
        this.frame_view.addFragmentList([
            new HomeFragment_1(this.viewManager),
            new HomeFragment_0(this.viewManager),
            new HomeFragment_2(this.viewManager),
            new HomeFragment_3(this.viewManager),
            new HomeFragment_4(this.viewManager),
            new HomeFragment_5(this.viewManager),
            new HomeFragment_6(this.viewManager),
            new HomeFragment_7(this.viewManager),
            new HomeFragment_8(this.viewManager),
            new HomeFragment_9(this.viewManager),
            new HomeFragment_10(this.viewManager),
            new HomeFragment_11(this.viewManager),
            new HomeFragment_12(this.viewManager),
            new HomeFragment_13(this.viewManager)
        ]);
        this.navigation = this.findViewById("navigation");
        this.navigation.adapter = new NavAdapter();
        this.dialog = new ConfirmDialog(this.viewManager);
    }

    setView() {
        this.navigation.onFocusChangeListener = onNavFocusChangeListener;
    }

    initUtil() {
        this.navigation.data = [
            "直播", "推荐", "电影", "电视剧", "少儿",
            "体育", "新闻", "记录", "中国蓝", "娱乐",
            "教育", "电竞", "音乐", "游戏"];
        var that = this;
        setTimeout(function () {
            that.frame_view.animation = false;
            that.navigation.focusByIndex(1);//需要在page运行时，这个方法才生效，所以需要setTimeout
            that.frame_view.animation = State.ScrollAnimation;
        }, 0);

    }

    bgToVideoBg(playInfo) {
        utils.bgToVideoBg(this.bg.ele.parentNode, this.bg.ele, playInfo)
    }

    videoBgToBg() {
        utils.videoBgToBg(this.bg.ele.parentNode, this.bg.ele);
    }

    onClickListener(view) {
        console.log(this.pageName, "-onClickListener", view);

        // this.finish();
    }

    onResume() {
    }

    onPause() {
        console.log(this.pageName + "-onPause");

        var newParam = {data: "HomePage保存的数据"};
        this.saveParam(newParam);
    }

    onStop() {
    }

    onDestroy() {
    }

    key_back_event() {
        this.dialog.show();
    }
}

var onNavFocusChangeListener = function (view, hasFocus) {
    // console.log("焦点变化监听", hasFocus, view);
    if (!hasFocus) {
        return;
    }

    //以下两行代码效果一样
    let index = view.fatherView.holder.dataIndex;
    // let index = view.fatherView.fatherView.selectIndex;
    this.frame_view.switchTo(index);

    var bg = require("../images/home/home_fragment_" + index + "/bg.png");

    this.bg.src = bg;

    if(index == 5 || index == 4){
        view.fatherView.fatherView.ele.className = "navigation dark";
    }else{
        view.fatherView.fatherView.ele.className = "navigation";
    }
}

class NavAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findEleById("text");
        text.innerText = data;
    }
}
