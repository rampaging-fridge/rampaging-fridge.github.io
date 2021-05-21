---
title: ようこそ
layout: enter
custom-javascript: |-
    playSound('/sounds/tamahome.mp3');
    const deadline = Date.now() + 30000;
    function countdown(){
        const dt = (deadline - Date.now()) / 1000;
        document.getElementById("timer").innerText = "☢" + dt.toFixed(1) + "☢";
        document.getElementById("timer").style.opacity = (Math.sin(dt * 5) + 1) / 2
        window.setTimeout(countdown, 100);
    }
    countdown();
custom-stylesheets: [/css/dummy.css]
---

<h1>利用規約はきちんと読まれましたか？？？？？</h1>

<a href="./">戻る</a>

<div id="timer" style="font-size: 5em;"></h1>
