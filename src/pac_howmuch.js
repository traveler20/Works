const ttl = "トップページのリニューアルを行いました。";

const fist_img =
	"<img class='feature-image'src='../../public/pac_howmuch.png'alt=''/>";

const url =
	"作品タイトル：<br />株式会社プリントパックトップページ<br /><a href='https://www.printpac.co.jp/contents/howmuch' target='_blank' rel='noopener noreferrer'>サイトはこちら</a>";

const tool = "使用言語：<br />HTML/CSS/JavaScript";

const period = "制作期間：<br />3日間";

const comment =
	"コメント：<br />株式会社プリントパックにて、水曜日のハウマッチ特集サイトのリニューアルを実装しました。従来のページはデザインが少し古めで、複数ページにまたがったサイト設計となっており、デザイン性と使いやすさに課題がありました。デザインを刷新しつつ、更新しやすいコーディングを行いつつサイトをリニューアルさせています。";

const ingenuity01 =
	"<img src='../../public/pac_howmuch2.png' alt='' /><p>担当はコーディングではあるものの、見出しやアコーディオンの動きなどのデザインはコーディング担当だからこそわかる視点で提案しました。</p>";

const ingenuity02 =
	"<img src='../../public/pac_howmuch3.png' alt='' /><p>アコーディオン部分は他のJavaScriptやjQueryとコンフリクトを起こさないようにCSSのみで実装しました。CSSのチェックボックス機能を利用してアコーディオン機能にしています。</p>";

document.getElementById("ttl").innerHTML = ttl;
document.getElementById("fist_img").innerHTML = fist_img;
document.getElementById("url").innerHTML = url;
document.getElementById("tool").innerHTML = tool;
document.getElementById("period").innerHTML = period;
document.getElementById("comment").innerHTML = comment;
document.getElementById("ingenuity01").innerHTML = ingenuity01;
document.getElementById("ingenuity02").innerHTML = ingenuity02;
