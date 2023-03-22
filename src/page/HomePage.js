import Page from "@core/frame/page/Page";

import HomeFragment_0 from "../fragment/HomeFragment_0";
import HomeFragment_1 from "../fragment/HomeFragment_1";
import HomeFragment_2 from "../fragment/HomeFragment_2";
import HomeFragment_3 from "../fragment/HomeFragment_3";
import HomeFragment_4 from "../fragment/HomeFragment_4";
import HomeFragment_5 from "../fragment/HomeFragment_5";

import html from "@html/home.html"
import ConfirmDialog from "@src/dialog/ConfirmDialog";
import utils from "@src/util/utils";
import {Adapter} from "../../core/frame/view/group/RecycleView";

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
            new HomeFragment_0(this.viewManager),
            new HomeFragment_1(this.viewManager),
            new HomeFragment_2(this.viewManager),
            new HomeFragment_3(this.viewManager),
            new HomeFragment_4(this.viewManager),
            new HomeFragment_5(this.viewManager)
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
            "推荐", "直播", "电影", "电视剧", "少儿",
            "体育", "新闻", "记录", "中国蓝", "娱乐",
            "教育", "电竞", "音乐", "游戏", "家庭"]
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
}

class NavAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findEleById("text");
        text.innerText = data;
    }
}
