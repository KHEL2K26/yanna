<script>

// 🔐 CHANGE PASSWORD
const correctPassword = "143";

// 💌 CHANGE MESSAGE HERE
const loveMessage = `My love,

On this Valentine’s Day, I want to take a moment to remind you just how deeply you mean to me. Every day with you feels like a page from the most beautiful story ever written—one filled with laughter, warmth, and the kind of love that makes life brighter. You are not just my partner; you are my best friend, my safe place, and my greatest blessing.

From the moment we met, something in my heart knew you were special. The way you understand me without words, the way you hold my hand when I’m unsure, and the way you make even the simplest moments feel magical—these are treasures I carry with me always. You’ve shown me that love isn’t just about grand gestures, but about the quiet, everyday acts of care and kindness that build a life together.

I love how we can be silly and serious, how we can dream big and still find joy in the little things. I love the way you inspire me to be better, to see the world with more hope, and to believe in the beauty of tomorrow. You’ve taught me that love is not just a feeling, but a choice we make every day—to stand by each other, to lift each other up, and to grow together through every season of life.

Today, I celebrate you—not just for who you are, but for the way you make me feel loved, valued, and understood. Thank you for being my heart’s home, my constant, and my forever.

Happy Valentine’s Day, my love. Here’s to many more years of laughter, adventures, and a love that only grows stronger with time.

Always and forever,

[Your Name] ❤️

If you’d like, I can also create a shorter, poetic version of this message for a Valentine’s card. Would you like me to prepare that?

`;

function checkPassword(){
    const input = document.getElementById("passwordInput").value;
    if(input === correctPassword){
        document.getElementById("passwordScreen").style.display="none";
        startCountdown();
    } else {
        alert("Wrong password 😢");
    }
}

function startCountdown(){
    let time = 3;
    const countdown = document.getElementById("countdown");
    countdown.style.display="block";
    countdown.innerHTML = time;

    const timer = setInterval(()=>{
        time--;
        countdown.innerHTML = time;
        if(time <= 0){
            clearInterval(timer);
            countdown.style.display="none";
            document.getElementById("envelope").style.display="block";
        }
    },1000);
}

function openEnvelope(){
    document.getElementById("envelope").classList.add("open");

    setTimeout(()=>{
        document.getElementById("letter").style.display="block";
        document.getElementById("bgMusic").play();
        typeWriter();
        startHearts();
        startFireworks();
    },1000);
}

/* TYPEWRITER EFFECT */
function typeWriter(){
    let i = 0;
    const speed = 50;
    function typing(){
        if(i < loveMessage.length){
            document.getElementById("message").innerHTML += loveMessage.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

/* FLOATING HEARTS */
function startHearts(){
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="💖";
        heart.style.left=Math.random()*100+"vw";
        heart.style.fontSize=Math.random()*20+10+"px";
        document.body.appendChild(heart);

        setTimeout(()=>{heart.remove()},5000);
    },300);
}

/* SIMPLE FIREWORKS */
function startFireworks(){
    const canvas=document.getElementById("fireworks");
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    setInterval(()=>{
        const x=Math.random()*canvas.width;
        const y=Math.random()*canvas.height/2;
        for(let i=0;i<30;i++){
            ctx.beginPath();
            ctx.arc(x,y,Math.random()*3,0,Math.PI*2);
            ctx.fillStyle=`hsl(${Math.random()*360},100%,50%)`;
            ctx.fill();
        }
    },500);
}

</script>
