window.addEventListener("scroll",scroll);

function scroll(){
    let yScroll = window.pageYOffset;
    const header = document.getElementsByClassName("header");
    let width = window.innerWidth;
    const back_btn = document.getElementsByClassName("back-to-top-btn");

//ヘッダーのスクロールによる記述
    if(yScroll >752){
        header[0].style.backgroundColor ="#282F35";
    }else{
        header[0].style.backgroundColor ="transparent"
    }

//トップに戻るボタンのスクロールに関する記述
    //PC画面の時
    if(width >= 900){
        if(yScroll >1420){
            back_btn[0].classList.add("scrolled");
        }else{
            back_btn[0].classList.remove("scrolled");
        }
    }
    // タブレット、スマホ画面の時
    if(width < 900){
        if(yScroll >1250){
            back_btn[0].classList.add("scrolled");
        }else{
            back_btn[0].classList.remove("scrolled");
        }
    }
}