window.onload=function(){


	var oAtivity = document.getElementById('ativity');
	var aImg = oAtivity.getElementsByTagName('img');
	var aImgBg = oAtivity.getElementsByClassName('img-bg');
	var aImgTxt = oAtivity.getElementsByClassName('img-txt');

	var Bwidth = document.documentElement.clientWidth;
	var Inform = document.getElementById('Inform');
	if (Bwidth <= 750) {
			Inform.style.display = 'none';
		}else{
			Inform.style.display = 'block';
	};
	
	for (var i = 0; i < aImgBg.length; i++) {
		aImgBg[i].style.width = aImgBg[i].offsetWidth-30+'px';//保证一开始两者宽度相等

	};
	for (var i = 0; i < aImgTxt.length; i++) {
		aImgTxt[i].style.width = aImgBg[i].offsetWidth+'px';//保证一开始两者宽度相等，使两个span能够浮动开来

	};


	window.onresize=function(){
		var Bwidth = document.documentElement.clientWidth;
		var oTitle = document.getElementsByClassName('carousel-title');
		var oBrief = document.getElementsByClassName('carousel-brief');
		var oTleft = document.getElementsByClassName('txt-left');
		var oTright = document.getElementsByClassName('txt-right');
		var Inform = document.getElementById('Inform');

		if (Bwidth <= 750) {
			Inform.style.display = 'none';
		}else{
			Inform.style.display = 'block';
		};

		for (var i = 0; i < aImgBg.length; i++) {	//改变浏览器大小时使aImgBg和aImgTxt适应屏幕
		aImgBg[i].style.width = aImg[i].offsetWidth;
		aImgTxt[i].style.width = aImg[i].offsetWidth;
		};


		if (Bwidth<560) {							//隐藏carousel的文本
			for (var i = 0; i < oTitle.length; i++) {
				oTitle[i].style.display = 'none';
				oBrief[i].style.display = 'none';
			};
		}else{
			for (var i = 0; i < oTitle.length; i++) {
				oTitle[i].style.display = 'block';
				oBrief[i].style.display = 'block';
			};
		};

		if (Bwidth<=800) {						//carousel文本自适应
			
			for (var i = 0; i < oBrief.length; i++) {
				oBrief[i].style.fontSize = 10+'px';
			}

		}else if (Bwidth<=1100) {
			
			for (var i = 0; i < oTitle.length; i++) {
				oTitle[i].style.fontSize =20 +'px'; 
				oTitle[i].style.paddingTop = 10+'px';
				oTitle[i].style.paddingBottom = 10+'px';
			}
		}else{
			for (var i = 0; i < oTitle.length; i++) {
				oTitle[i].style.fontSize =30 +'px'; 
				oTitle[i].style.paddingTop = 20+'px';
				oTitle[i].style.paddingBottom = 20+'px';
				oBrief[i].style.fontSize = 14+'px';
			}
			
		};

		if (Bwidth<748) {
			for (var i = 0; i < oTleft.length; i++) {
				oTleft[i].style.fontSize = 14+'px';
				oTright[i].style.fontSize = 14+'px';
			};
		}else if (Bwidth<=975) {
			for (var i = 0; i < oTleft.length; i++) {
				oTleft[i].style.fontSize = 12+'px';
				oTright[i].style.fontSize = 12+'px';
			};
		}else{
			for (var i = 0; i < oTleft.length; i++) {
				oTleft[i].style.fontSize = 14+'px';
				oTright[i].style.fontSize = 14+'px';
			};
		};

		
	
	}
}

	

	

		
