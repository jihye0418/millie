/*========================================
                  검색창
========================================*/
$(function () {
  var $searchBtn = $('.sub-nav .search_btn'),
    $searchForm = $('header form');

  $searchBtn.click(function () {
    $searchForm.toggleClass('active');
  });
});


/*========================================
                  모바일 메뉴
========================================*/
$(".toggle").click(function () {
  $(".main-nav").slideToggle();
});


$(window).resize(function () { //브라우저의 너비가 바뀌면 할 일
  if ($(window).width() > 780) {
    $('.main-nav').show();
  } else {
    $('.main-nav').hide();
  }
});


/*========================================
            오늘의 추천 책
========================================*/
var toBtn = $(".today-tab > ul > li");
var toCont = $(".today-book-list-wrap > div");

toCont.hide().eq(0).show(); //다른 것들은 숨기고 0번째(첫번째)것만 보이게 하기

toCont.click(function (e) {
  e.preventDefault();
});

toBtn.click(function (e) {
  e.preventDefault(); //빈링크 클릭 시 상단으로 올라가는 것 방지
  var target = $(this); //많은 탭들 중 어떤 것을 클릭했나 확인하기
  var index = target.index();//클릭한 것의 번호를 확인하는 방법
  //alert(index);
  toBtn.removeClass("on"); //기존에 있는 on클래스를 삭제한 후
  target.addClass("on"); //on 클래스를 내가 준 것에 부여하기
  toCont.css("display", "none");
  toCont.eq(index).css("display", "block");
});


/*========================================
            실시간 베스트 셀러
========================================*/
var linkBtn = $(".lank-tab-tit > ul > li");
var linkCont = $(".table-list-wrap > div");

linkCont.hide().eq(0).show();

linkCont.click(function (e) {
  e.preventDefault();
});

linkBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  linkBtn.removeClass("on");
  target.addClass("on");
  linkCont.css("display", "none");
  linkCont.eq(index).css("display", "block");
});


//찜하기 버튼

function toggle() {
  var cart = document.c.cart.value;
  /*
    <삼항연산자> if문 대신!
    ▶ 형식
      변수명 = (조건식)? 참일 때 실행 : 거짓일 때 실행;
  */
  var text = (cart == "+ 찜하기") ? "✔서재 가기" : "+ 찜하기";
  document.c.cart.value = text;
}
/*========================================
            보고 듣는 신작
========================================*/
var loliBtn = $(".look-tit > ul > li");
var loliCont = $(".look_listen-wrap > div");

loliCont.hide().eq(0).show();

loliCont.click(function (e) {
  e.preventDefault();
});

loliBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();

  loliBtn.removeClass("on");
  target.addClass("on");
  loliCont.css("display", "none");
  loliCont.eq(index).css("display", "block");
});



/*========================================
        상단으로 올라가는 버튼 (js)
========================================*/
var btt = document.getElementById('top'),
  docElem = document.documentElement, //html문서 높이
  offset,//스크롤 후 하단부터 남은 높이
  scrollPos,//document 스크롤 양
  docHeight; //올라간 높이

//문서의 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight); //브라우저마다 다르기 때문에 더 큰 값을 사용하겠다

if (docHeight != 0) {
  offset = docHeight / 4; //스크롤을 아래로 내린 것이 전체 크기의 1/4일 때를 offset에 저장
}

window.addEventListener('scroll', function () {//스크롤 이벤트 추가 (스크롤이 생기면~)
  scrollPos = docElem.scrollTop; //스크롤 양을 확인해서 docElem변수에 저장해라
  btt.className = (scrollPos > offset) ? 'visible' : '';
  //스크롤양이 offset의 크기보다 크다면 visible 클래스를 btt에 추가해라.

  /*
  if(scrollPos > offset){
    btt.className = 'visible';
  }else{
    btt.className = '';
  }
  */
});

//버튼을 클릭했을 때 빈 링크가 주소창에 걸리지 않게 하기
btt.addEventListener('click', function (e) {
  e.preventDefault(); //링크 기능 차단
  //docElem.scrollTop = 0; //링크 기능 없이 페이지 상단으로 올라가게 하기
  scrollToTop(); //함수 (자바스크립트로 버튼을 누르면 스크롤양을 조금씩 빼서 맨 위로 올라가게 하기)
});

function scrollToTop() {
  //일정시간마다 할 일 => (이름 = )setInterval(할일, 시간); (만약에 멈춰야한다면 이름이 필요하다)
  //0.0015s = 15
  //할일 = function(){실제로 할 일}
  //우리가 실제로 할 일은 윈도우의 스크롤이 0이 아닐 때 스크롤 양을 조금씩 빼는 것! ( window.scrollBy(0,-??); )

  //스크롤 양이 0이면 setInterval을 멈춰야한다. => clearInterval(이름);


  var scrollInterval = setInterval(function () {
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}