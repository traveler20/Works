const ttl = "新規ページのコーディングを行いました。";

const fist_img =
	"<img class='feature-image'src='../../public/pac_comicpac.png'alt=''/>";

const url =
	"作品タイトル：<br />ComicPAC（同人誌印刷特集ページ）<br /><a href='https://www.printpac.co.jp/comicpac/' target='_blank' rel='noopener noreferrer'>サイトはこちら</a>";

const tool = "使用言語：<br />HTML/CSS/JavaScript";

const period = "制作期間：<br />3日間";

const comment =
	"コメント：<br />株式会社プリントパックにて、同人誌印刷に使う商品をまとめた同人誌特集ページComicPACを制作しました。HTML/CSS/JavaScriptを用いてコーディング。PHPでログイン機能用のDBのやり取りを実装しました。（DBの追加等はしていません。）";

const ingenuity01 =
	"<img src='../../public/pac_comicpac2.png' alt='' /><p>1からコーディングを実装し制作しました。Swiper.jsを用いたスライドバナーの実装も行っています。</p>";

const ingenuity02 =
	"<img src='../../public/pac_comicpac3.png' alt='' /><p>Bootstrapを用いてモーダルウィンドウを実装しました。ログイン機能は他ページで使われているDBを再利用し実装。</p>";

document.getElementById("ttl").innerHTML = ttl;
document.getElementById("fist_img").innerHTML = fist_img;
document.getElementById("url").innerHTML = url;
document.getElementById("tool").innerHTML = tool;
document.getElementById("period").innerHTML = period;
document.getElementById("comment").innerHTML = comment;
document.getElementById("ingenuity01").innerHTML = ingenuity01;
document.getElementById("ingenuity02").innerHTML = ingenuity02;
