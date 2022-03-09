$(function(){ //jQueryの開始お約束消さないで！

console.log("外部ファイルからはろわー");

// tweet用リンクの作り方
function twitText() {
	var s, url;
	s = "JavaScriptからTweet!";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// ここまでtweet用リンクの作り方

console.log("こんにちは、" + "にんじゃわんこさん");
console.log("1998-1-26");

console.log("SUNABACOKOZA".split("A"));

var user_name = "arupaka"
console.log(user_name);

var fruit = "いちご";
console.log(fruit + "を用意します");
console.log(fruit + "の皮を剥きます");
console.log(fruit + "をミキサーに入れます");
console.log(fruit + "ジュースの出来上がり!");

fruit = "バナナ";
console.log(fruit + "を用意します");
console.log(fruit + "の皮を剥きます");
console.log(fruit + "をミキサーに入れます");
console.log(fruit + "ジュースの出来上がり!");

var region = ["KOZA","EBETSU","TAKAMATSU"];
console.log(region);
console.log(region[0]);

region = {"okinawa":"KOZA","hokkaido":"EBETSU"}
console.log(region["hokkaido"]);

var count = 0 ;

count +=1 ;
console.log(count);
count +=1 ;
console.log(count);

console.log(1<2);

var count = 0;
var grapes = 1;
if (count>0){
    console.log("オレンジジュースを作る");
}else if (grapes>0){
    console.log("ブドウジュースを作る");
}else{
    console.log("みかんを買いに行く");
}

var limit = 10;
var getup = 8;
if (limit<getup){
    console.log("遅刻です");
} else if (limit==getup){
    console.log("ギリギリセーフ!");
} else {
    console.log("よく頑張りました");
}

var fruits = ["いちご","スイカ","さくらんぼ","なし"]
for (var i=0; i<=3; i++){
    console.log(fruits[i]+"ジュースを作る");
}

// for(var i=1; i<=100; i++){
    // console.log(i);
// }

function greet(user) {
    console.log(user+"こんにちは");
}
greet("aaa");

var h1_node= document.getElementById("h1_node");
console.log(h1_node);
console.log(h1_node.textContent);

// var btn_node = document.getElementById("btn")
// btn_node.addEventListener("click",changeText);

// function changeText(){
//     var h1_node = document.getElementById("h1_node")
//     h1_node.textContent = "むずい"
// }

//ここからjQueryの講義！

$("h1").text("hello,world!");
//$("どこのセレクタ").何を("どうする");

$("#btn").on("click",function(){
    $("#h1_node").text("jQueryで文字変!");
    $("body").css("color","red");
    $("img").attr("src","../syakyo/img/photo_01.png");
    $("a").attr("href","http://google.com");
    $("header").toggle(); //toggle=表示非表示
    //$("body").addClass("red");
    //$("body").removeClass("blue");
    $("body").toggleClass("blue");
});
// $("どこを").on("clickした時",波括弧内の関数を実行(){
//     $("どこの").何を("どうする");
// });

});//jQueryの終了お約束消さないで！
