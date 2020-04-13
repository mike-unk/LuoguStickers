var sum = 26;
var BQarray_name = new Array();
var BQarray_link = new Array();
BQarray_name[0] = "$huaji$"; BQarray_link[0] = "![](https://s.oier.in/huaji.png)";
BQarray_name[1] = "$wuhan$"; BQarray_link[1] = "![](https://s.oier.in/wuhan.png)";
BQarray_name[2] = "$kozhao$"; BQarray_link[2] = "![](https://s.oier.in/kozhao.png)";
BQarray_name[3] = "$jitui$"; BQarray_link[3] = "![](https://s.oier.in/jitui.png)";
BQarray_name[4] = "$weixiao$"; BQarray_link[4] = "![](https://s.oier.in/weixiao.png)";
BQarray_name[5] = "$xiao$"; BQarray_link[5] = "![](https://s.oier.in/xiao.png)";
BQarray_name[6] = "$ziya$"; BQarray_link[6] = "![](https://s.oier.in/ziya.png)";//其实应该读作ci1ya2
BQarray_name[7] = "$ok$"; BQarray_link[7] = "![](https://s.oier.in/ok.png)";
BQarray_name[8] = "$xxy$"; BQarray_link[8] = "![](https://s.oier.in/xxy.png)";
BQarray_name[9] = "$wuhu$"; BQarray_link[9] = "![](https://s.oier.in/wuhu.png)";
BQarray_name[10] = "$xianqi$"; BQarray_link[10] = "![](https://s.oier.in/xianqi.png)";
BQarray_name[11] = "$qq$"; BQarray_link[11] = "![](https://s.oier.in/qq.png)";
BQarray_name[12] = "$kel$"; BQarray_link[12] = "![](https://s.oier.in/kel.png)";
BQarray_name[13] = "$kk$"; BQarray_link[13] = "![](https://s.oier.in/kk.png)";
BQarray_name[14] = "$dk$"; BQarray_link[14] = "![](https://s.oier.in/dk.png)";
BQarray_name[15] = "$jk$"; BQarray_link[15] = "![](https://s.oier.in/jk.png)";
BQarray_name[16] = "$qiang$"; BQarray_link[16] = "![](https://s.oier.in/qiang.png)";
BQarray_name[17] = "$ruo$"; BQarray_link[17] = "![](https://s.oier.in/ruo.png)";
BQarray_name[18] = "$ts$"; BQarray_link[18] = "![](https://s.oier.in/ts.png)";
BQarray_name[19] = "$yun$"; BQarray_link[19] = "![](https://s.oier.in/yun.png)";
BQarray_name[20] = "$yiw$"; BQarray_link[20] = "![](https://s.oier.in/yiw.png)";
BQarray_name[21] = "$se$"; BQarray_link[21] = "![](https://s.oier.in/se.png)";
BQarray_name[22] = "$px$"; BQarray_link[22] = "![](https://s.oier.in/px.png)";
BQarray_name[23] = "$wq$"; BQarray_link[23] = "![](https://s.oier.in/wq.png)";
BQarray_name[24] = "$fad$"; BQarray_link[24] = "![](https://s.oier.in/fad.png)";
BQarray_name[25] = "$youl$"; BQarray_link[25] = "![](https://s.oier.in/youl.png)";
BQarray_name[26] = "$xyx$"; BQarray_link[26] = "![](https://s.oier.in/xyx.png)";
function showBQ(str, obj) {
    obj.innerHTML = "";
    for (var i = 0; i <= 26; i++) {
        if (BQarray_name[i].includes(str)) {
            var imglink = BQarray_link[i].substr(4, BQarray_link[i].length - 5);
            obj.innerHTML += "<img src='" + imglink + "'>" + BQarray_name[i] + "<br>";
        }
    }
}
