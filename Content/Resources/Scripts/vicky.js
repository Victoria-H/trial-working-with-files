

//Vicky Hunt's script April/May 2016. Sorry 'bout any crappy code - I haven't been doing this very long.

//STYLING PALETTE
/*
Talend Green #b4c401
Darker Green #93A000 (not an official color)
Talend Dark Blue #025497
Talend Light Blue #5ea7cb
font Noto Sans (Google font) 
*/



//SIDE NAVIGATION
//works with vMain.css
	
	function vPoshSideNav() {
		
		//REALLY IMPORTANT TINCAN STUFF
		//passes Tincan parameters to other pages through the links.
		var vTCLinks=document.getElementsByTagName("a");
		var vParams=location.search;
		for (t=0; t<vTCLinks.length; t++) {
			var vHref=vTCLinks[t].href;
			var vHrefTC=vHref+vParams;
			vTCLinks[t].href=vHrefTC;
		}
		
		//creates anchors and subheadings
		var vSubheadings=document.getElementsByTagName("h2");
		var vCurrentPage=document.getElementsByClassName("selected");
		var text = "textContent" in document.body ? "textContent" : "innerText";
		
		
		if (vCurrentPage[0].parentElement.className != 'has-children') { //but only on the lab elements
			for (var k=0; k<vSubheadings.length; k++) {
				var vRev=vSubheadings.length-1-k;
				
				vSubheadings[vRev].setAttribute("id","vSub"+vRev);
				
				var vSubheading=vSubheadings[vRev][text];
				
				var vLink=document.createElement("a");
				vLink.setAttribute("href","#vSub"+vRev);
				vLink.setAttribute("class","vAnchor");
				vLink.innerHTML = vSubheading;
				$(vLink).css({
					"display":"block",
					"font-size":"0.9em",
					"margin-left":"10px"
					});
			
				
				$(vLink).insertAfter(vCurrentPage[0]);
				
			}
		}
		
		//Changes top text
		var vGet=document.getElementsByClassName("moduleNav");
		
		var vGet2=vGet[0].getElementsByClassName("has-children");
		var vGet3=vGet2[0].getElementsByTagName("a");
		
		$(".moduleNav .has-children > a").attr('vTopic',vGet3[0][text]);
		
		
		var vTitleNav = document.getElementById("vTitleNav");
		vTitleNav.innerHTML=vGet3[0][text];
		
		//to accommodate long titles
	
		if ($(vTitleNav).outerHeight() > $('#vTopArea').height()) {
			$(vTitleNav).css('font-size', '1.8vw');
			$(vTitleNav).css('line-height', '1.9vw');
		}
	
		
		var vBottomLogo=document.createElement('img');
		$(vBottomLogo).attr('src','../../Resources/Images/OtherGraphics/logo.png');
		$(vBottomLogo).css({
			'width':'40vw',
			'position':'absolute',
			'right':'-2vw',
			'bottom':'5vh',
			'opacity':'0.3',
			'pointer-events':'none'
		});
		$(vGet[0]).append(vBottomLogo);
		
		
		var vSelected = document.getElementsByClassName('selected')[0].parentElement;
		if ($(vSelected).hasClass('has-children')== false) {
			$(vSelected).css('border-right','5px solid #5ea7cb');
		};
		
	//next button
	var nextSpan = document.getElementsByClassName('vNextPage')[0];
	if (typeof nextSpan !== 'undefined') {
	var nextItem = vSelected.nextSibling;
		
		if (nextItem.nextSibling) {
			var nextLink = nextItem.nextSibling.firstElementChild.getAttribute('href');
			
			var insideSpan = nextSpan.innerHTML;
			nextSpan.innerHTML = "<a href='" + nextLink + "' >" + insideSpan + "</a>";
		}
	}
	}
	
	
	
//OPEN CLOSE SCREEN SHOTS
//automates the insertion of open / close screenshots
//works with vMain.css

	function vOpenClose() {
		
		//add this for DI advanced to catch the double numbers.
		$('ol').css('list-style', 'none');
		
		//gets list elements
		var c = document.getElementsByClassName("content");
		var lis = c[0].getElementsByTagName("li");
		
		
		for (var i = 0; i < lis.length; i++) {
			var imClose=[];
			//sets class of screenshot images
			var im = lis[i].getElementsByTagName("img");
			for (var j = 0; j < im.length; j++) {
				if ($(im[j]).hasClass("vAlwaysOpen")== false) {
				im[j].setAttribute("class","screenShots");
				imClose.push(im[j]);
				}
				
			}
		
			if (imClose.length > 0) {
			
				//inserts the screenshot open/close icons
				
				
					var ssOpen = document.createElement("img");
					ssOpen.setAttribute("src", "../../Resources/Images/OtherGraphics/shot.png");
					ssOpen.setAttribute("class", "shot");
					lis[i].insertBefore(ssOpen, lis[i].childNodes[0]);
					
					var ssClose = document.createElement("img");
					ssClose.setAttribute("src", "../../Resources/Images/OtherGraphics/shotclose.png");
					ssClose.setAttribute("class", "shotClose");
					lis[i].insertBefore(ssClose, lis[i].childNodes[0]);
				
			}
			
		}
		
		
		
		$(".shot").click(function() {

			var elem = this;
			elem.setAttribute("id", "current");
			var x = document.getElementById("current").parentElement;
			x.setAttribute("id", "currentItem");
			
			$("#" + x.id + " .screenShots").css("display", "block");
			$(this).css("display", "none");
			$("#" + x.id + " .shotClose").css("display", "inline-block");
			
			elem.removeAttribute("id");
			x.removeAttribute("id");
	
		});
		
			$(".screenShots").css("display", "none");
			$(".shotClose").css("display", "none");
			$(".shot").css("display", "inline-block");

		$(".shotClose").click(function() {

			var elem = this;
			elem.setAttribute("id", "current");
			var x = document.getElementById("current").parentElement;
			x.setAttribute("id", "currentItem");
			
			
			$("#" + x.id + " .screenShots").css("display", "none");
			$(this).css("display", "none");
			$("#" + x.id + " .shot").css("display", "inline-block");
			
			elem.removeAttribute("id");
			x.removeAttribute("id");
		
		});
		
		$("#open").attr('src','../../Resources/Images/OtherGraphics/shot.png');
		$("#close").attr('src','../../Resources/Images/OtherGraphics/shotclose.png');
		
		
		$("#open").click(function() {

			$(".screenShots").css("display", "block");
			$(".shotClose").css("display", "inline-block");
			$(".shot").css("display", "none");
		
		});

		$("#close").click(function() {

			$(".screenShots").css("display", "none");
			$(".shotClose").css("display", "none");
			$(".shot").css("display", "inline-block");
		
		});	
	

	}

//QUIZ QUESTIONS
//works with vMain.css
function vQuiz() {
	
	//for tincan
	var vResponses=[];

	$(".vFeedbackWrong").css("display", "none");
	$(".vFeedbackCorrect").css("display", "none");
	
	var vQuestionList = document.getElementsByClassName('vQuestion');
	for (i=0; i<vQuestionList.length; i++) {
		var vSubmit=document.createElement('p');
		$(vSubmit).css({
			'background-color':'#93A000',
			'padding':'0.5em',
			'border-radius':'0.2em',
			'pointer-events':'none'
		});
		vSubmit.innerHTML="SUBMIT";
		$(vSubmit).addClass('vSubmit');
		$(vQuestionList[i]).append(vSubmit);	
	}
	

	
	$(".answer").click(function(){
			
			var chosen = $(this).hasClass("vCorrect");
			var x = this.parentElement.parentElement;
			x.setAttribute("id", "currentQuestion");
			$("#currentQuestion .answer").removeClass('vMyAnswer');
			$("#currentQuestion .vSubmit").css("background-color",'#b4c401');
			$(this).addClass('vMyAnswer');
			
			$('#currentQuestion .vSubmit').css('pointer-events','auto'); //this line has to be transferred!!
			
			
			x.removeAttribute("id");
			
			
			
		});
		
	$(".vSubmit").click(function(){
		var x = this.parentElement;
		x.setAttribute("id", "currentQuestion");
		var chosen=x.getElementsByClassName("vMyAnswer");
		$(this).css("background-color",'#93A000');
		
		var vQuestionName=$('#currentQuestion .vQuizTitle')[0].innerHTML.replace(/\s+/g, '_');
		vResponses.push(vQuestionName);
		
		if ($(chosen[0]).hasClass("vCorrect") == true) {
			var vCorrectFirstTime=true;
			$("#currentQuestion .vFeedbackCorrect").fadeIn("slow");
			$("#currentQuestion .vFeedbackWrong").css("display", "none");
				
				vResponses.push("1");
				
				
		}
		else {
			$("#currentQuestion .vFeedbackWrong").css("display", "none");
			$("#currentQuestion .vFeedbackWrong").fadeIn("slow");		
			$("#currentQuestion .vFeedbackCorrect").css("display", "none");	

				
				vResponses.push("0");
							
		}
		
		
		
		console.log(vResponses);
		var vFirstResponse = vResponses.indexOf(vQuestionName);
		console.log(vResponses[vFirstResponse+1]);
		var vAnsweredBefore = vResponses.indexOf(vQuestionName,vFirstResponse+1);
		console.log(vAnsweredBefore);
		
		x.removeAttribute("id");
		
		if (vAnsweredBefore == -1) {
			
		//sends score and question name in the statement.
		//the score depends on the first answer given. 0=WRONG 1=CORRECT
		var scoreToSend = parseInt(vResponses[vFirstResponse+1]);
		vSendQuiz(scoreToSend,vQuestionName);	
		
			
		}
		
		else {
			console.log('notsent')
		}
		
		
	});
	
	
	//send Tincan statement
	function vSendQuiz(vScore,vQ) {

			tincan.sendStatement(
				{
					verb: {
						id: "http://adlnet.gov/expapi/verbs/answered",
						display: {
							"en-US": "answered"
						}
					},
															
					result: {
						"score": {
							"scaled":  vScore     
						},
						"response":vQ
						
					}
				}
			);
	}
	

	
}
	
//TO GENERATE AN AUTOMATIC SLIDESHOW (STATIC SLIDES AS IMAGES)
//all the css is in the script
//slides must be in a folder ppt in the same directory as the lab guide content and must be named Slide1.PNG etc.

function vAutomaticSlideSlow() {
		
		
	
	var vSlideShow=document.getElementById('vAuto');
	var vWait=document.createElement('div');
		vWait.setAttribute('id','vWait');
		vWait.innerHTML="PLEASE WAIT WHILE THE PRESENTATION LOADS";
		$(vSlideShow).append(vWait);
	var vSlideNumber=1;

	vTrial(vSlideNumber);
	
	
	function vTrial(slideNumber) {
		
		var loaded=false;
		var vNextSlide=document.createElement('img');
		//IMPORTANT! SLIDE SOURCE
		vNextSlide.setAttribute("src","ppt/Slide"+(slideNumber)+'.PNG');
			
		vNextSlide.setAttribute("id","Slide"+(slideNumber));
		vNextSlide.addEventListener('load', myFunction, true);
		//generates error if slide doesn't exist and calls slide show on existing slides
		vNextSlide.addEventListener('error', vSlidesAuto, true);
		
	}
	
	function myFunction() {
		$(vSlideShow).append(this);
		//double check that it has loaded
		if(this.height>0) {
			$(this).wrap("<div class='vSlide'></div>");
			vSlideNumber++;
			vTrial(vSlideNumber);		
		}
		$(this).css('display','none');
	}
	
	
	
	function vSlidesAuto() {
	
	
		//slideshow
		$('#vWait').css('display','none');
		var vSlideList = document.getElementsByClassName("vSlide");		
		var vNumSlides = vSlideList.length;
		
		var slideRatio = $('#Slide1').width()/$('#Slide1').height();
		
		
		var slideWidth = 80;
		//this is problematic because of the scorm height
		
		
		//styling
		
		$("#vAuto").css({
			"width":slideWidth+"%",	
			"paddingBottom":(slideWidth/slideRatio)+"%",	
			"position":"relative",
			"left":(100-slideWidth)/2+"%",
			"margin-top":"2vw",
			"border":"1px solid #93A000"
					
		});
		
		
		$(".vSlide").css({
			"position": "absolute",
			"box-sizing":"border-box",
			"display": "none",
			"top":"0px",
			"width":"100%",
			"height":"100%",
			"padding":"0px",
			"text-align":"center"

		});
		
		$(".vSlide img").css({
			"width":"100%",
			"max-width":"100%",
			"height":"auto",
			"padding":"0px",
			"margin":"0px",
			"display":"block"
		});
	
	
		//controls
	
		var vNext=document.createElement('div');
			vNext.setAttribute('class','vSlideButton');
			vNext.setAttribute('id','vNext');
			vBack=document.createElement('div');
			vBack.setAttribute('class','vSlideButton');
			vBack.setAttribute('id','vBack');
		

		vNext.innerHTML="NEXT";
		vBack.innerHTML="BACK";
		
		$('#vAuto').append(vNext);
		$('#vAuto').append(vBack);

		$('.vSlideButton').css({
			'background-color':'#93A000',
			'color':'white',
			'padding':'0.5em',
			'position':'absolute',
			'bottom':'0px',
		});	

		$('#vNext').css('right','0px');
		
		
		
		
		
		//makes them work :)
			
		var vSlideNumber = 0;
		
		if (vSlideNumber==0) {
				$('#vBack').css('display','none');
			 }
				
		$(vSlideList[0]).css("display", "block");
				
		$(".vSlide").click(function(){moveForward()});
		$("#vNext").click(function(){moveForward()});
		$("#vBack").click(function(){moveBackward()});
		
		function moveForward() {
				
			if (vSlideNumber != vSlideList.length - 1) {
				vSlideNumber++;
				$('#vBack').css('display','block');
				$(".vSlide").css("display", "none");
				$(vSlideList[vSlideNumber]).css("display", "block");
			}
			
			if (vSlideNumber == vSlideList.length - 1) {
				$('#vNext').css('display','none');
			}
				
		}
			
		
		function moveBackward() {
			
			if (vSlideNumber != 0) {
				vSlideNumber--;
				$('#vNext').css('display','block');
				$(".vSlide").css("display", "none");
				$(vSlideList[vSlideNumber]).css("display", "block");			
			}
		
			if (vSlideNumber == 0) {
				$('#vBack').css('display','none');
			}
			
		}
		
	
		
	}

}