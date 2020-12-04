// 캐러셀
		$(function(){
			var carousel_img =$(".nuguristory li");
			var carousel_btn =$(".btn_set li");
			var current =0;
			

			carousel_btn.click(function(){
				var tg = $(this);
				var i =tg.index();
				if(current==i){
					return 0;
				}

				move(i);

				function move(i){
					var currentImg = carousel_img.eq(current);
					var nextImg = carousel_img.eq(i);
					currentImg.css("left",0).animate({"left":"-100%"});
					nextImg.css("left","100%").animate({"left":0});
					current = i ;
				}
				carousel_btn.removeClass("active_on");
				tg.addClass("active_on");
			})
			// 변수
			var black_bg =$(".black_bg");
			var tv1 =$(".tv1");
			var tv2 =$(".tv2");
			var tv3 =$(".tv3");
			var play_btn =$(".sheep .fas");
			var x_btn6 =$(".x_btn6");
			var x_btn7 =$(".x_btn7");
			var x_btn8 =$(".x_btn8");
			var shrimp =$(".shrimp");
			var event4 =$(".event_4")
			var event_modal2 =$(".event_modal2");
			var x_btn9 =$(".x_btn9");
			var content =$(".jjapaguri_recipe .content li");
			var tabs =$(".jjapaguri_recipe .tabs li");
			var nu_content =$(".nuguri_recipe .content li");
			var nu_tabs =$(".nuguri_recipe .tabs li");
			var page_4_submit = $(".page_4_submit");
			var page_5_submit = $(".page_5_submit");
			var carousel_main = $("#carousel_2");
			var ramen = $(".all_ramen");
			var x_btn = $(".x_btn");
			// var text1 = $(".page_5_text");
			var text2 = $(".page_5_text2");
			var submit1 = $(".page_5_submit");
			
			var black_bg = $(".black_bg");

			// 로그인 클릭시 로그인 모달창 오픈
			var login = $(".log_in");
			var login_modal = $(".log_in_modal");
			var login_Xbtn = $(".log_in_Xbtn");
			var footer_login = $(".footer_login");
			var footer_signup = $(".footer_signup");

			login_modal.hide();
			login.click(function(){
				login_modal.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			login_Xbtn.click(function(){
				login_modal.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			footer_login.click(function(){
				alert("너구리에 오신걸 환영합니다!");
				location.reload();
			});
			footer_signup.click(function(){
				alert("회원가입 페이지로 이동합니다.")
				login_modal.fadeOut();
				join_modal.fadeIn();
			})
			// 회원가입 클릭시 회원가입 모달창 오픈
			var join = $(".sign_up");
			var join_modal = $(".join_modal");
			var join_Xbtn = $(".join_Xbtn");
			var join_footer = $(".join_footer input")

			join_modal.hide();
			join.click(function(){
				join_modal.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			join_Xbtn.click(function(){
				join_modal.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			join_footer.click(function(){
				alert("회원가입 되셨습니다! 너구리의 새로운 가족이 되신걸 환영합니다~");
				location.reload();
			})
			$(".dasima_modal").hide();
			$(".cha5").click(function(){
				$(".dasima_modal").fadeIn();
				$(".black_bg").fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			$(".x_btn2").click(function(){
				$(".dasima_modal").fadeOut();
				$(".black_bg").fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			$(".nuguri_recipe").hide();
			$(".page5_ramen").click(function(){
				$(".nuguri_recipe").fadeIn();
				$(".black_bg").fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			$(".x_btn3").click(function(){
				$(".nuguri_recipe").fadeOut();
				$(".black_bg").fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			$(".jjapaguri_recipe").hide();
			$(".jjapaguri").click(function(){
				$(".jjapaguri_recipe").fadeIn();
				$(".black_bg").fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			$(".x_btn4").click(function(){
				$(".jjapaguri_recipe").fadeOut();
				$(".black_bg").fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			$(".event_modal").hide();
			$(".cha6").click(function(){
				$(".event_modal").fadeIn();
				$(".black_bg").fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			$(".x_btn5").click(function(){
				$(".event_modal").fadeOut();
				$(".black_bg").fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			tv1.hide();
			play_btn.eq(0).click(function(){
				tv1.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn6.click(function(){
				tv1.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			tv2.hide();
			play_btn.eq(1).click(function(){
				tv2.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn7.click(function(){
				tv2.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			tv3.hide();
			play_btn.eq(2).click(function(){
				tv3.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn8.click(function(){
				tv3.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			event_modal2.hide();
				shrimp.eq(0).click(function(){
				event_modal2.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn9.click(function(){
				event_modal2.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			event_modal2.hide();
				event4.eq(0).click(function(){
				event_modal2.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn9.click(function(){
				event_modal2.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			page_4_submit.click(function(){
				alert("정상적으로 응모되었습니다.");
				location.reload();
			})
			// page_5_submit.click(function(){
			// 	alert("한줄평이 등록 되셨습니다^^~")
			// })
			// 짜파구리
			content.hide();
			content.eq(0).show();

			tabs.click(function(){
				tabs.removeClass("active");
				var tg =$(this);
				tg.addClass("active");

				content.hide();
				var i=tg.index();
				content.eq(i).show();
				// alert(i);
			})
			// 너구리
			nu_content.hide();
			nu_content.eq(0).show();

			nu_tabs.click(function(){
				nu_tabs.removeClass("active");
				var tg =$(this);
				tg.addClass("active");

				nu_content.hide();
				var i=tg.index();
				nu_content.eq(i).show();
				// alert(i);
			})
			var menu =$(".gnb li");
			var ht = 980;
			$(window).resize(function(){
				ht = 980;
			})
			
				menu.click(function(){
				var tg =$(this);
				var i=tg.index();
				var nowTop =ht*i;

				menu.removeClass("active");
				tg.addClass("active");

				// 버튼 클릭시 해당 컨텐츠로 스르륵 이동
				$("html,body").animate({scrollTop:nowTop});

			})
			// 스크롤시 해당 컨텐츠의 메뉴를 활성화
			$(window).scroll(function(){
				var myScrollTop =$(window).scrollTop();
				// alert(myScrollTop)
				if(myScrollTop>=0 && myScrollTop<ht){
					menu.removeClass("active");
					menu.eq(0).addClass("active");
				}else if(myScrollTop>=ht && myScrollTop<ht*2){
					menu.removeClass("active");
					menu.eq(1).addClass("active");
				}else if(myScrollTop>=ht*2 && myScrollTop<ht*3){
					menu.removeClass("active");
					menu.eq(2).addClass("active");
				}else if(myScrollTop>=ht*3 && myScrollTop<ht*4){
					menu.removeClass("active");
					menu.eq(3).addClass("active");
				}else{
					menu.removeClass("active");
					menu.eq(4).addClass("active");
				}
			})

			

				myfunction();
				function myfunction(){
					$("section").on("mousewheel",function(event, delta){

						if(delta>0){
						// 마우스휠을 올렸을 때 실행구문
						var prev =$(this).prev().offset().top;
						$("html,body").stop().animate({"scrollTop":prev},500,"linear");
						}else if(delta<0){
							// 마우스휠을 내렸을 때 실행구문
							var next =$(this).next().offset().top;
							$("html,body").stop().animate({"scrollTop":next},500,"linear");
						}
					
					
					})
				}
			
			
			
			// 너구리 제품페이지 캐러셀
			var carousel_img2 = $(".ramen_modal .ramen_contents");
			// var current2 = 0;
			var carousel_prevBtn2 = $("#carousel_2 .second_01");
			var carousel_nextBtn2 = $("#carousel_2 .second_02");
			// var i2 = 0;
				// carousel prev, next버튼 클릭시
			carousel_prevBtn2.click(function(){
				var currentImg = carousel_img2.eq(current2);
				var nextImg = carousel_img2.eq(current2-=1);
				
				currentImg.stop().css("left",0).animate({"left":"100%"});
				nextImg.stop().css("left","-100%").animate({"left":0});

				if(current2==-1){
					current2 =7;
				}
				i2-=1;
			})
			carousel_nextBtn2.click(function(){
				var currentImg = carousel_img2.eq(current2);
				var nextImg = carousel_img2.eq(current2=current2+1);
				
				currentImg.css("left",0).animate({"left":"-100%"});
				nextImg.css("left","100%").animate({"left":0});

				if(current2==8){
					current2 =-1;
					var currentImg = carousel_img2.eq(current2);
					var nextImg = carousel_img2.eq(current2=current2+1);
					currentImg.stop().css("left",0).animate({"left":"-100%"});
					nextImg.stop().css("left","100%").animate({"left":0});
				}
				i2+=1;
			})
			carousel_main.hide();
			ramen.click(function(){
				// var carousel_img3 = $(".ramen_modal .ramen_contents");
				i2 = $(this).index()-1;
				current2 = $(this).index()-1;
				carousel_main.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});

				carousel_img2.css("left","100%");
				// carousel_img3.hide();
				carousel_img2.eq(i2).css("left",0);
			})
			x_btn.click(function(){
				carousel_main.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})
			// input val()
			// submit1.click(function(){
			// 	var msg = $(".page_5_text").val();
			// 	text2.text(msg);
			// })
			// 너구리 리뷰페이지
			var talkBox = $(".one_talk3");
			var review = $(".review");
			var x_btn10 = $(".x_btn10");
			var review_btn = $(".review_btn");
			var review_out = $(".review_out");

			review.hide();

			talkBox.click(function(){
				review.fadeIn();
				black_bg.fadeIn();
				$("section").off("mousewheel");
				$('body').css({overflow:'hidden'});
			})
			x_btn10.click(function(){
				review.fadeOut();
				black_bg.fadeOut();
				$('body').css({overflow:''});
				myfunction();
			})

			review_btn.click(function(){
				inputVal=$(".inputVal").val();
				if(inputVal.length===0){
					alert("내용을 입력해주세요.");
				}else{
					review_out.prepend("<li>"+inputVal+"</li>");
					alert("참여해주셔서 감사합니다!")
				}
			})

			$(".black_bg").hide();


			
		})