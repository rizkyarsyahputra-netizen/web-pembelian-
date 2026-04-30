window.onload = function(){
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },2000);
};


// music button
const music =
document.getElementById("bgMusic");

document.getElementById("musicBtn")
.addEventListener("click",()=>{
    music.play();
});


// counter animation
let count = 0;
let target = 120;

let interval = setInterval(()=>{
    count++;
    document.getElementById("projectCount")
    .innerText = count;

    if(count >= target){
        clearInterval(interval);
    }
},30);


// testimonial slider
const reviews = [
    "Website nya keren banget 🔥",
    "Fast respon dan hasil memuaskan 😍",
    "Logo saya jadi lebih profesional",
    "Recommended freelancer 👍"
];

let reviewIndex = 0;

setInterval(()=>{
    reviewIndex =
    (reviewIndex + 1) % reviews.length;

    document.getElementById("testimonialText")
    .innerText = reviews[reviewIndex];
},3000);


// popup welcome
setTimeout(()=>{
    alert("Welcome to IKYY Studio 🚀");
},1000);


// scroll reveal
window.addEventListener("scroll",()=>{
    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{
        const top =
        card.getBoundingClientRect().top;

        if(top < window.innerHeight-100){
            card.style.opacity="1";
            card.style.transform=
            "translateY(0px)";
        }
    });
});
window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "#0f172a";
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    }else{
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
    }
});
function orderWA(serviceName, price){
    let nomor = "087710591220"; // ganti nomor kamu

    let nama = document.getElementById("nama")?.value || "User";
    let pesan = `Halo kak, saya ${nama} ingin order:\n- ${serviceName} (Rp ${price})`;

    let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}
