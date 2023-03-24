import Fragment from "@core/frame/view/group/Fragment";

import html from "@html/fragment/home/home_fragment_1.html"
import {Adapter} from "@core/frame/view/group/RecycleView";

export default class HomeFragment_1 extends Fragment{
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }


    initView(){
        this.channel_nav = this.findViewById("channel_nav");
        this.channel_nav.margin.bottom = 15;
        this.channel_nav.adapter = new ChannelNavAdapter();

        this.channel_list = this.findViewById("channel_list");
        this.channel_list.adapter = new ChannelListAdapter();

        this.history_channel = this.findViewById("history_channel");
        this.history_channel.margin.right = -15;
        this.history_channel.adapter = new HistoryChannelAdapter();
    }
    setView(){}
    initUtils(){
        this.channel_nav.data = ["回看","推荐","全部","高清","央视","卫视","本地","特色"];
        this.channel_list.data = channelList;
        this.history_channel.data = historyChannel;
    }

    onResume() {
    }

    onPause() {
    }

    onStop() {
    }

    onDestroy() {
    }
}

class ChannelNavAdapter extends Adapter{
    bindHolder(holder, data) {
        var text = holder.findViewById("text");
        text.text = data;
    }
}

class ChannelListAdapter extends Adapter{
    bindHolder(holder, data) {
        var icon = holder.findViewById("icon")
        var text = holder.findViewById("text");
        var info = holder.findViewById("info");

        icon.src = data.icon;
        text.text = data.name;
        info.text = data.info;
    }
}

class HistoryChannelAdapter extends Adapter{
    bindHolder(holder, data) {
        var icon = holder.findViewById("icon")
        var text = holder.findViewById("text");

        icon.src = data.icon;
        text.text = data.name;
    }
}

var channelList = [
    {
        icon:require("@images/home/home_fragment_1/icon_0.png"),
        name:"央视一套",
        info:"姥姥的饺子馆"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_1.png"),
        name:"浙江卫视",
        info:"我的真朋友6"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_2.png"),
        name:"金鹰卡通",
        info:"人气暴暴牙剧场"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_3.png"),
        name:"教育科技",
        info:"忠者无敌（2）"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_4.png"),
        name:"中央十套",
        info:"大家"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_5.png"),
        name:"湖南卫视",
        info:"情迷睡美人51"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_6.png"),
        name:"中央二套",
        info:"周末特供"
    },
    {
        icon:require("@images/home/home_fragment_1/icon_7.png"),
        name:"安徽卫视",
        info:"大宅门23"
    },
]

var historyChannel = [
    {
        icon:require("@images/home/home_fragment_1/icon_history_0.png"),
        name:"教育科技",
    },
    {
        icon:require("@images/home/home_fragment_1/icon_history_1.png"),
        name:"杭州综合",
    },
    {
        icon:require("@images/home/home_fragment_1/icon_history_2.png"),
        name:"江苏卫视",
    },
    {
        icon:require("@images/home/home_fragment_1/icon_history_3.png"),
        name:"湖北卫视",
    },
    {
        icon:require("@images/home/home_fragment_1/icon_history_4.png"),
        name:"浙江经视",
    },
    {
        icon:require("@images/home/home_fragment_1/icon_history_5.png"),
        name:"中央一套",
    }
]
