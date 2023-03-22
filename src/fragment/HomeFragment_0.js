import Fragment from "../../core/frame/view/group/Fragment";

import html from "../html/fragment/home_fragment_0.html"
import {Adapter} from "../../core/frame/view/group/RecycleView";

export default class HomeFragment_0 extends Fragment{
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView(){
        this.like = this.findViewById("like");
        this.like.adapter = new LikeAdapter();

    }

    setView(){}

    initUtil() {
        this.like.data = [
            {name: "调音师", info: "1559万次"}, {name: "我们都要好好的", info: "523万次"},
            {name: "人间喜剧", info: "1061万次"}, {name: "精灵怪物", info: "627万次"},
            {name: "七日生", info: "623万次"}, {name: "这就是街舞", info: "276万次"},
            {name: "亚洲文明之光", info: "140万次"}, {name: "智取海底城", info: "353万次"}
        ]

    }
    onScrollStartListener(scrollView, x, y) {
    }

    onScrollEndListener(scrollView, x, y) {
    }

    onResume() {
    }

    onPause() {
    }

    onStop() {
    }
}

class LikeAdapter extends Adapter{
    bindHolder(holder, data) {
        var text = holder.findViewById("text");
        var info = holder.findEleById("info")
        text.text = data.name;
        info.innerText = data.info;
    }
}
