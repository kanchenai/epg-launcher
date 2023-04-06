import Application from "../core/frame/app/Application";
import IptvPlayer from "@core/frame/player/IptvPlayer";
import AliWebPlayer from "@src/util/AliWebPlayer";

export default class MyApplication extends Application {
    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", urlParam);
        var firstPage = "HomePage";
        //将地址栏参数中与firstPage相关的参数填到param，会在firstPage中获取到
        var param = urlParam.data;
        return {firstPage: firstPage, param: param};
    }

    onCreate(page, param) {
        // console.log("MyApplication onCreate");
    }

    onStop() {
        // console.log("MyApplication onStop")
    }

    onDestroy() {
        // console.log("MyApplication onDestroy")
        // 如果是app+epg，在这里（或exitUrl()）调用退出app的方法
    }

    exitUrl() {
        var url = "";
        return url;
    }

    getPlayerInstance() {
        var player = null;
        try {
            player = new IptvPlayer();
        } catch (e) {
            player = new AliWebPlayer();
        }
        return player;
    }
}
