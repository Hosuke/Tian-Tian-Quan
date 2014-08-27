/**
 * Created by Hosuke on 27/08/2014.
 */
var os="pc";
var uid="0";

window.onload=function()
{
    document.getElementById('sharebt').className="sharebt";
};

function shareWx()
{
    if(uid<1)
    {
        wShare();
    }else{
        if(os=='ios')
        {
            IosShareToWX(1);
        }else if(os=='android'){
            AndriodShareToWX(0);

        }
    }
}

function wShare()
{
    document.getElementById("sbg").className="sbgshow";
}

(function () {
    var onBridgeReady = function () {
        // 发送给好友;
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid":		"",
                "img_url":		"http://hobeta.com/weichat/me.jpg",
                "img_width":	"80",
                "img_height":	"80",
                "link":				"http://hobeta.com/weichat/",
                "desc":				"",
                "title":			"自定义标题"
            }, function(){});
        });

        // 分享到朋友圈;
        //TODO
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "http://hobeta.com/weichat/me.jpg",
                "img_width": "80",
                "img_height": "80",
                "link": "http://hobeta.com/weichat/",
                "desc": "",
                "title": "我在填填圈中赢得了" + score + "分，你能打败我吗？"
            }, function () { });
        });
    }


    //
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();