//JCoding(jcdomt?,jcoding的小号?) 2020.4.7 13:37(jcdomt@163.com)
//洛谷表情犇犇区
var ready = false;
var bqlist = document.createElement("div");
document.body.appendChild(bqlist);
bqlist.innerHTML = "";
var benbentextarea = document.getElementById('feed-content');
bqlist.style.display = "none";
bqlist.style.width = "200px";
bqlist.style.height = "810px";
bqlist.style.position = "absolute";
bqlist.style.background = "white"
benbentextarea.addEventListener('input', function () {
	cursurPosition = benbentextarea.selectionStart;
	var textBox = this.value.charAt(cursurPosition - 1);
	if (textBox == '$') {
		if (ready) {
			bqlist.style.display = "none";
			ready = false;
			benbentextarea.value = getBiaoqing(benbentextarea.value);
		} else {
			bqlist.style.display = "";
			setBqlistPosition(this);
			var i = cursurPosition;
			var j = "";
			while (i--) {
				if (this.value.charAt(i - 1) != '$') {
					j += this.value.charAt(i - 1);
				}
			}
			j = j.split("").reverse().join("");
			showBQ(j, bqlist);
			ready = true;
		}
	} else {
		if (ready) {
			var i = cursurPosition;
			var j = "";
			while (i--) {
				if (this.value.charAt(i) != '$') {
					j += this.value.charAt(i - 1);
				}
			}
			j = j.split("").reverse().join("");
			j += this.value.charAt(cursurPosition - 1);
			showBQ(j, bqlist);
		}
	}
});
function setBqlistPosition(elem) {
	var p = kingwolfofsky.getInputPositon(elem);
	bqlist.style.top = p.bottom + 'px';
	bqlist.style.left = p.left + 'px';
}
function getBiaoqing(bq) {
	for (var i = 0; i <= 26; i++) {
		bq = bq.replace(BQarray_name[i], BQarray_link[i]);
	}
	return bq;
}