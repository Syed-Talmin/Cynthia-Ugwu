const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mainPageAnim() {
    var tl = gsap.timeline();

    tl.from("nav", {
        y: '-10',
        opacity: 0,
        duration: 2.5,
        ease: Expo.easeInOut
    })
        .from(".bind-elem", {
            y: '100%',
            duration: 1.8,
            delay: -1.8,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from(".home-footer", {
            y: "-5",
            opacity: 0,
            duration: 1.5,
            delay: -.5
        })
}

// var timeout;
// function circleSkew() {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove", function (dets) {
//         xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
//         yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);


//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         circleMouseMove(xscale, yscale);
//         timeout = setTimeout(function () {
//             document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
//         }, 100);
//     })
// }

function circleMouseMove(xscale, yscale) {
    var mini = document.querySelector("#minicircle")
    var main = document.querySelector('#main')
    main.addEventListener('mouseenter', () => {

        mini.style.display = 'block';

    })

    main.addEventListener('mouseleave', () => {
        mini.style.display = 'none';
    })

    window.addEventListener("mousemove", (dets) => {

        mini.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`


    })
}


function page2Anim() {
    document.querySelectorAll('.elem').forEach((elem) => {
        var rprev = 0;
        var rdiff = 0;

        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
            });
        });


        elem.addEventListener("mousemove", (d) => {
            var ydiff = d.clientY - elem.getBoundingClientRect().top;
            rdiff = d.clientX - rprev;
            rprev = d.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: ydiff,
                left: d.clientX,
                rotate: gsap.utils.clamp(-10, 10, rdiff),
            });
        });

    });

}



circleMouseMove()

mainPageAnim()

page2Anim()

// circleSkew()

function updateTime() {
    var currentTime = new Date();
    let hours = currentTime.getHours();
    let ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    var time = `${hours}` + ":" + currentTime.getMinutes() + ` ${ampm}`+' est';
    // console.log(`${time}`);
    document.querySelector('.time').innerHTML = `${time}`;
}
setInterval(updateTime,1000);
