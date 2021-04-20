const returntop =
	"<p class='section-lead' style='margin-bottom: 50px'><a href='../' class='password-btn'>Return to Top</a></p>";

const footer =
	"<footer class='footer'><a href='#' id='js-page-top' class='page-top'>▲</a><div class='inner'><p class='copyright'>Copyright&copy;traveler20. All Rights Reserved.</p></div></footer>";

document.getElementById("returntop").innerHTML = returntop;

document.getElementById("footer").innerHTML = footer;

$(function () {
	// #で始まるアンカーをクリックした場合に処理
	$("a[href^=#]").click(function () {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? "html" : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
});
