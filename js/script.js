const t=['Laravel Developer','PHP Developer','Frontend Developer'];let i=0,j=0;setInterval(()=>{document.getElementById('typing').textContent=t[i].slice(0,j++);if(j>t[i].length){i=(i+1)%t.length;j=0}},150);


// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
