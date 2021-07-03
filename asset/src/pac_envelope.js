const ttl = "トップページのリニューアルを行いました。";

const fist_img =
	"<img class='feature-image'src='../../public/pac_printpac.png'alt=''/>";

const url =
	"作品タイトル：<br />株式会社プリントパックトップページ<br /><a href='https://www.printpac.co.jp/' target='_blank' rel='noopener noreferrer'>サイトはこちら</a>";

const tool = "使用言語：<br />HTML/CSS/JavaScript";

const period = "制作期間：<br />3日間";

const comment =
	"コメント：<br />株式会社プリントパックにて、トップページの大幅リニューアルを行いました。サイトのデザインからSEO対策や高速化などの修正も同時に実装。結果、Google検索で「印刷」のビッグワードで8位から2位まで上昇させました。";

const ingenuity01 =
	"<img src='../../public/pac_printpac2.png' alt='' /><p>従来のページは横長のバナーをびっしりと詰められており、情報量が多くユーザーを混乱させるようなデザインでした。デザイナーと協議しつつ、ユーザーが用途に合わせて選択しやすいような見出しや商品のカテゴライズを実装。おすすめ商品や人気商品など情報を分類させることで使いやすいサイトを目指しました。</p>";

const ingenuity02 =
	"<img src='../../public/pac_printpac3.png' alt='' /><p>担当した業務は主にコーディング。デザインを実装する役割でありながら、見出しの統一性やホバーによる動きなども提案。また、セクションごとの分類がわかるCSS命名をしながら、共通のデザインの部分は再利用しやすいようなCSS設計を行った。</p>";

document.getElementById("ttl").innerHTML = ttl;
document.getElementById("fist_img").innerHTML = fist_img;
document.getElementById("url").innerHTML = url;
document.getElementById("tool").innerHTML = tool;
document.getElementById("period").innerHTML = period;
document.getElementById("comment").innerHTML = comment;
document.getElementById("ingenuity01").innerHTML = ingenuity01;
document.getElementById("ingenuity02").innerHTML = ingenuity02;
