//function openClass(evt, className) {
//  var i, x, tablinks;
//  x = document.getElementsByClassName("class");
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//  }
//  tablinks = document.getElementsByClassName("tablink");
//  for (i = 0; i < x.length; i++) {
//     tablinks[i].classList.remove("red");
//  }
//  document.getElementById(className).style.display = "block";
//  evt.currentTarget.classList.add("red");
//}
//
//var mybtn = document.getElementsByClassName("testbtn")[0];
//mybtn.click();
function getTime(){
    today = new Date();
    week=['日','一','二','三','四','五','六'];
    var s = today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日 星期"+week[today.getDay()];
    today=document.getElementById("today");
    today.innerHTML=s;
    today.style.fontFamily="Microsoft JhengHei";
}

function homePage(){
    title = document.getElementById("title");
    title.innerHTML="歡迎來到我的部落格~";
    content = document.getElementById("content");
    content.innerHTML="這邊會不定時更新狀態和作品，有興趣可以看看。";
    content.style.fontFamily="Microsoft JhengHei";
    quote=document.getElementById("quote");
    quote.style.display="block";
    img1 = document.getElementById("img1");
    img1.style.display="none";
    img2 = document.getElementById("img2");
    img2.style.display="none";
    video = document.getElementById("video");
    video.style.display="none";
}

function komeiPage(){
    title = document.getElementById("title");
    title.innerHTML="高美濕地";
    content = document.getElementById("content");
    content.innerHTML="&emsp;&emsp;在2019年3月時，我和同學一起逛逛高美濕地，那邊有很多招潮蟹。很幸運的看到了彈塗魚，但跑太快沒拍到照QQ<br>夕陽很美麗，木棧道那邊實在太多人，所以我挑個沒人的點XD";
    content.style.fontFamily="Microsoft JhengHei";
    background = document.getElementById("posts");
    background.style.backgroundColor="black";
    background.style.opacity=1.0;
    quote=document.getElementById("quote");
    quote.style.display="none";
    img1 = document.getElementById("img1");
    img1.src="../komei/wooden_walkway1.jpg";
    img1.style.display="block";
    img2 = document.getElementById("img2");
    img2.src="../komei/sundown2.jpg";
    img2.style.display="block";
    video = document.getElementById("video");
    video.style.display="none";
}

function ihoPage(){
    title = document.getElementById("title");
    title.innerHTML="高雄愛河";
    content = document.getElementById("content");
    content.innerHTML="&emsp;&emsp;2018年9月，和另外3位同學一起去高雄玩2天一夜，其中一天去逛了愛河附近。那裡非常熱鬧，有許多特色飾品攤子與小吃。<br>愛河上可以搭船，有兩、三種船型，不過當天時間太晚了，就不搭船了。是很適合在附近散散步的好地方。";
    content.style.fontFamily="Microsoft JhengHei";
    background = document.getElementById("posts");
    background.style.backgroundColor="black";
    background.style.opacity=1.0;
    quote=document.getElementById("quote");
    quote.style.display="none";
    img1 = document.getElementById("img1");
    img1.src="../iho/iho1.jpg";
    img1.style.display="block";
    img2 = document.getElementById("img2");
    img2.src="../iho/iho2.jpg";
    img2.style.display="block";
    video = document.getElementById("video");
    video.style.display="none";
}

function holiPage(){
    title = document.getElementById("title");
    title.innerHTML="台中后里花博";
    content = document.getElementById("content");
    content.innerHTML="&emsp;&emsp;在2019年過年時，全家人出遊去台中花博，真的是花一天逛不完全部園區，每個園區的景點，都有不同的特色。首先我們先到森林園區，是關於馬術表演的園區，早上在這裡看了遊行與馬術表演，在附近也能購買胡蘿蔔餵食馬兒。本來想去花舞館，但看到排隊人潮，令人倒退三步。於是，我們下午就去了后里園區，這個園區中，又分成各個國家的特色，包括建築、花、科技等等，非常漂亮也增廣了知識，CP值很高的園區。";
    content.style.fontFamily="Microsoft JhengHei";
    background = document.getElementById("posts");
    background.style.backgroundColor="black";
    background.style.opacity=1.0;
    quote=document.getElementById("quote");
    quote.style.display="none";
    img1 = document.getElementById("img1");
    img1.src="../holi/holi1.jpg";
    img1.style.display="block";
    img2 = document.getElementById("img2");
    img2.src="../holi/holi2.jpg";
    img2.style.display="block";
    video = document.getElementById("video");
    video.src="../holi/holi1.mp4";
    video.style.display="block";
}

function contactPage(){
    title = document.getElementById("title");
    title.innerHTML="Contact me";
    content = document.getElementById("content");
    content.innerHTML="信箱：juliy0214561@gmail.com<br>github：https://github.com/snow1224<br>";
    content.style.fontFamily="Microsoft JhengHei";
    quote=document.getElementById("quote");
    quote.style.display="block";
    img1 = document.getElementById("img1");
    img1.style.display="none";
    img2 = document.getElementById("img2");
    img2.style.display="none";
    video = document.getElementById("video");
    video.style.display="none";
}

$(document).ready(function() {

	var $toggleButton = $('#menu-btn'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
        $('#menuIcon').toggleClass('glyphicon-arrow-left');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

});