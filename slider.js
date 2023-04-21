const slide = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");

let width = window.innerWidth;


// function resizeWindow(){
//     console.log('Resize');
// }

// PC画面での稼働が条件
        if(width > 768){
            prev.addEventListener('click',prevClick);
            next.addEventListener('click',nextClick);

            list1.addEventListener('click',click1);
            list2.addEventListener('click',click2);
            list3.addEventListener('click',click3);

            // プレビューボタンを押したときの処理
            function prevClick(){
                if(slide.classList.contains("slider1") === true){
                    slide.classList.remove("slider1");
                    slide.classList.add("slider3");
                    list1.style.backgroundColor = "transparent";
                    list3.style.backgroundColor = "#000";
                    count = 0;
                }else if(slide.classList.contains("slider2") === true){
                    slide.classList.remove("slider2");
                    slide.classList.add("slider1");
                    list2.style.backgroundColor = "transparent";
                    list1.style.backgroundColor = "#000";
                    count = 0;
                }else{
                    slide.classList.remove("slider3");
                    slide.classList.add("slider2");
                    list3.style.backgroundColor = "transparent";
                    list2.style.backgroundColor = "#000";
                    count = 0;
                }
            };

            // ネクストボタンを押したときの処理
            function nextClick(){
                if(slide.classList.contains("slider1") === true){
                    slide.classList.remove("slider1");
                    slide.classList.add("slider2");
                    list1.style.backgroundColor = "transparent";
                    list2.style.backgroundColor = "#000";
                    count = 0;
                }else if(slide.classList.contains("slider2") === true){
                    slide.classList.remove("slider2");
                    slide.classList.add("slider3");
                    list2.style.backgroundColor = "transparent";
                    list3.style.backgroundColor = "#000";
                    count = 0;
                }else{
                    slide.classList.remove("slider3");
                    slide.classList.add("slider1");
                    list3.style.backgroundColor = "transparent";
                    list1.style.backgroundColor = "#000";
                    count = 0;
                }
            };

            // 黒丸を押したときの処理
            function click1(){
                slide.classList.add("slider1");
                slide.classList.remove("slider2");
                slide.classList.remove("slider3");
                list1.style.backgroundColor="#000";
                list2.style.backgroundColor="transparent";
                list3.style.backgroundColor="transparent";
            }
            function click2(){
                slide.classList.remove("slider1");
                slide.classList.add("slider2");
                slide.classList.remove("slider3");
                list1.style.backgroundColor="transparent";
                list2.style.backgroundColor="#000";
                list3.style.backgroundColor="transparent";
            }
            function click3(){
                slide.classList.remove("slider1");
                slide.classList.remove("slider2");
                slide.classList.add("slider3");
                list1.style.backgroundColor="transparent";
                list2.style.backgroundColor="transparent";
                list3.style.backgroundColor="#000";
            }

            var count = 0;

            // 3秒ごとに自動で切り替え処理
            setInterval(()=>{
                if(count > 3){
                    count = 0;
                    nextClick();
                }
                count++;
            },1000);
        }
