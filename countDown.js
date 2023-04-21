const goal =new Date("2024/1/1 0:00:00");

// 目標年月日の設定
goalYear = goal.getFullYear();
goalMonth = goal.getMonth() + 1;
goalDay = goal.getDay();

document.getElementById("goal-year").textContent = goalYear;
document.getElementById("goal-month").textContent = goalMonth;
document.getElementById("goal-day").textContent = goalDay;

function calcRemainingTime(){

    const now = new Date();

    const diff = goal - now;
    
    // 残り時間の計算
    let remSec = Math.floor(diff/1000%60);
    let remMin = Math.floor(diff/1000/60)%60;
    let remHour = Math.floor(diff/1000/60/60)%24;
    let remDay = Math.floor(diff/1000/60/60/24);

    // HTMLの書き換え
    document.getElementById("rem-sec").textContent = remSec;
    document.getElementById("rem-min").textContent = remMin;
    document.getElementById("rem-hour").textContent = remHour;
    document.getElementById("rem-day").textContent = remDay;

}

calcRemainingTime();
setInterval(calcRemainingTime, 1000);//1000msごとに自動処理