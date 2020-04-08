var sum = 26;
var BQarray_name = new Array();
var BQarray_link = new Array();
BQarray_name[0] = "$huaji$"; BQarray_link[0] = "![](https://cdn.luogu.com.cn/upload/image_hosting/xi9ii2xm.png)";
BQarray_name[1] = "$wuhan$"; BQarray_link[1] = "![](https://cdn.luogu.com.cn/upload/image_hosting/ohsdz731.png)";
BQarray_name[2] = "$kozhao$"; BQarray_link[2] = "![](https://cdn.luogu.com.cn/upload/image_hosting/jb1dxfhz.png)";
BQarray_name[3] = "$jitui$"; BQarray_link[3] = "![](https://cdn.luogu.com.cn/upload/image_hosting/6j8yreeq.png)";
BQarray_name[4] = "$weixiao$"; BQarray_link[4] = "![](https://cdn.luogu.com.cn/upload/image_hosting/o7qgvmy2.png)";
BQarray_name[5] = "$xiao$"; BQarray_link[5] = "![](https://cdn.luogu.com.cn/upload/image_hosting/mwf5ohc3.png)";
BQarray_name[6] = "$ziya$"; BQarray_link[6] = "![](https://cdn.luogu.com.cn/upload/image_hosting/srk7ra9f.png)";
BQarray_name[7] = "$ok$"; BQarray_link[7] = "![](https://cdn.luogu.com.cn/upload/image_hosting/i0q8ehyz.png)";
BQarray_name[8] = "$xxy$"; BQarray_link[8] = "![](https://cdn.luogu.com.cn/upload/image_hosting/br9q48x7.png)";
BQarray_name[9] = "$wuhu$"; BQarray_link[9] = "![](https://cdn.luogu.com.cn/upload/image_hosting/e8q6d60h.png)";
BQarray_name[10] = "$xianqi$"; BQarray_link[10] = "![](https://cdn.luogu.com.cn/upload/image_hosting/1no21bts.png)";
BQarray_name[11] = "$qq$"; BQarray_link[11] = "![](https://cdn.luogu.com.cn/upload/pic/62224.png)";
BQarray_name[12] = "$kel$"; BQarray_link[12] = "![](https://cdn.luogu.com.cn/upload/pic/62226.png)";
BQarray_name[13] = "$kk$"; BQarray_link[13] = "![](https://cdn.luogu.com.cn/upload/pic/62227.png)";
BQarray_name[14] = "$dk$"; BQarray_link[14] = "![](https://cdn.luogu.com.cn/upload/pic/62228.png)";
BQarray_name[15] = "$jk$"; BQarray_link[15] = "![](https://cdn.luogu.com.cn/upload/pic/62234.png)";
BQarray_name[16] = "$qiang$"; BQarray_link[16] = "![](https://cdn.luogu.com.cn/upload/pic/62236.png)";
BQarray_name[17] = "$ruo$"; BQarray_link[17] = "![](https://cdn.luogu.com.cn/upload/pic/62238.png)";
BQarray_name[18] = "$ts$"; BQarray_link[18] = "![](https://cdn.luogu.com.cn/upload/pic/62239.png)";
BQarray_name[19] = "$yun$"; BQarray_link[19] = "![](https://cdn.luogu.com.cn/upload/pic/62240.png)";
BQarray_name[20] = "$yiw$"; BQarray_link[20] = "![](https://cdn.luogu.com.cn/upload/pic/62243.png)";
BQarray_name[21] = "$se$"; BQarray_link[21] = "![](https://cdn.luogu.com.cn/upload/pic/62244.png)";
BQarray_name[22] = "$px$"; BQarray_link[22] = "![](https://cdn.luogu.com.cn/upload/pic/62246.png)";
BQarray_name[23] = "$wq$"; BQarray_link[23] = "![](https://cdn.luogu.com.cn/upload/pic/62248.png)";
BQarray_name[24] = "$fad$"; BQarray_link[24] = "![](https://cdn.luogu.com.cn/upload/pic/62250.png)";
BQarray_name[25] = "$youl$"; BQarray_link[25] = "![](https://cdn.luogu.com.cn/upload/pic/69020.png)";
BQarray_name[26] = "$xyx$"; BQarray_link[26] = "![](https://cdn.luogu.com.cn/upload/pic/62230.png)";
function showBQ(str, obj) {
    obj.innerHTML = "";
    for (var i = 0; i <= 26; i++) {
        if (BQarray_name[i].includes(str)) {
            var imglink = BQarray_link[i].substr(4, BQarray_link[i].length - 5);
            obj.innerHTML += "<img src='" + imglink + "'>" + BQarray_name[i] + "<br>";
        }
    }
}