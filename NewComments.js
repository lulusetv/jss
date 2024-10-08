/*-------------------
*Description:        By www.yiwuku.com
*Website:            https://app.zblogcn.com/?auth=3ec7ee20-80f2-498a-a5dd-fda19b198194
*Author:             尔今 erx@qq.com
*update:             2017-08-12(Last:2024-03-28)
-------------------*/

(function(){
	//erx:加载DOM
	document.writeln('<style>');
	document.writeln('#newcmt-tip{display:none;position:fixed;top:0;'+(erxNc_seat == 1 ? "right" : "left")+':0;line-height:100%;color:#fff;font-size:14px;background:#338ff1;padding:8px 9px 8px 15px;z-index:99990;border-radius:25px;}');
	document.writeln('#newcmt-tip a{color:#fff;}');
	document.writeln('#newcmt-tip a:hover{color:#eee;}');
	document.writeln('#newcmt-tip span{color:#eee;margin-left:5px;font-family:Arial;font-size:14px;cursor:pointer;}');
	document.writeln('#newcmt-tip em{font-style:normal;font-weight:bold;}');
	document.writeln('</style>');
	document.writeln('<div id="newcmt-tip"><a href="'+bloghost+'zb_system/cmd.php?act=CommentMng" target="_blank" title="查看">新留言(<em>0</em>)</a><span style="">&times;</span></div>');
})();
$(function(){
	//erx:控制脚本
	let $erxNctip = $("#newcmt-tip"), nclast = zbp.cookie.get("nclast"), ncotitle = document.title, erxnctimer;
	if(nclast == null || erxNc_num < nclast){
		zbp.cookie.set("nclast", erxNc_num, 999);
	}
	ncTipAjax(function(num){
		if(!erxNc_hide || (erxNc_hide && num > nclast)){
			ncTipMain(num);
		}
	});
	if(erxNc_time * 1 > 0){
	    setInterval(function() {
	        ncTipAjax(function(num){
		    	if(num && num > nclast){
		    		ncTipMain(num);
		    	}
			});
	    }, erxNc_time * 1000);
	}
	$erxNctip.click(function(){
		ncTipAjax(function(num){
			zbp.cookie.set("nclast", num, 999);
			ncTipClear();
		});
	});
	function ncTipMain(n){
		nclast = zbp.cookie.get("nclast");
		let nctip_i = 0, count = n - nclast, nctip_tits = [ncotitle, "有"+(count)+"条新留言！"];
		clearTimeout(erxnctimer);
		if(n > nclast && nclast != null){
			$erxNctip.find("em").text(count);
			TitleFlash();
			function TitleFlash(){
				document.title = nctip_tits[nctip_i++];
				nctip_i == nctip_tits.length ? nctip_i = 0 : "";
				erxnctimer = setTimeout(TitleFlash, 1150);
			}
			$erxNctip.slideDown();
		}
		!erxNc_hide ? $erxNctip.slideDown() : '';
	}
    function ncTipAjax(callback){
	    $.ajax({
		    url: bloghost+'zb_users/plugin/NewComments/getcnum.php',
		    type: 'GET',
		    timeout: 3000,
		    error: function(textStatus){
				console.info("NewComments:Ajax failed!"+textStatus);
		    },
		    success: function(data){
				let num = data * 1;
				callback(num);
		    }
	    });
    }
	function ncTipClear(){
		$erxNctip.slideUp();
		clearTimeout(erxnctimer);
		document.title = ncotitle;
	}
	//erx:键盘控制
	document.addEventListener("keydown", function(e){
		if (e.altKey && e.keyCode == 83){
			$erxNctip.slideDown();
		}
		if (e.altKey && e.keyCode == 88){
			ncTipClear();
		}
	});
});