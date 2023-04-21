window.onload = function(){
    var nav = document.getElementById("nav-wrapper");
    var hamburger = document.getElementById("js-hamburger");
    var blackBg = document.getElementById("js-black-bg")
    var items =document.getElementsByClassName("hamburger-item");

    // ハンバーガーメニューのボタンを押したときの処理
    hamburger.addEventListener("click",function(){
        nav.classList.toggle("open");
    })

    // 画面外を押したときの処理
    blackBg.addEventListener('click',function(){
        nav.classList.remove("open");
    })

    // メニュー内のリンクを押したときの処理
    for(i=0;i<items.length;i++)
        items[i].addEventListener('click',function(){
            nav.classList.remove("open");
        })
}