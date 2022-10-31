$(document).ready(function(){
	//상단메뉴 마우스 호버시 각 항목별 하위메뉴 슬라이드
	$(".mainMenu").on("mouseenter click", function(){  //두가지 이상의 이벤트를 동시에 감지 할때 on()메소드를 사용한다.
		$(".mainMenu").removeClass("active");
		$("#white").stop().animate({height: "80px"});
		// 메인 메뉴에 마우스 액션시 .. 서브 메뉴가  display가 block or none 이 된다.
		//$(".subMenu").stop().slideUp();
		$(".subMenu").stop().slideDown();
		// next는 부모,자식을 포함하지 않는 , 형제지간만 포함한다. (prev도 형제지간만 포함한다.)
	});
	// 하위 메뉴에 마우스 가져다 대면 메인메뉴 활성유지
	$(".subMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		$(this).prev().addClass("active");
		
	});
	//하위메뉴 마우스 아웃시 올라간다.
	$("header>nav").mouseleave(function(){
		menu();
		
	});
	
	//메뉴 마지막 항목이 포커스를 잃을때 , .blur 
	//메뉴가 포커스 될때 .focus
	$(".last").blur (function(){
		menu();
		
	});
	
	function menu(){
	$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height:0});
		
	}
	
	//왼쪽방향 자동 슬라이드
	setInterval(leftMove, 2000);
	function leftMove (){
		$("#sliding div").stop().animate({left:"-1100px"}, 1000, function(){
		$(this).append($(this).children().first());
		$(this).css("left",0);	
		});
	}
	
	// 공지사항 보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
		
	});
	
	//공지사항 닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		
	});
	
	//키보드 자판에서 어떤키를 눌렀는지 감지한다.
	$(document).keydown(function(){
		if(event.key === "Escape"){
			$("#popup").fadeOut();
		}
		
	});
	
});////////마지막
	

	
	
