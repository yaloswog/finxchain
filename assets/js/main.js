

"use strict";

//===== Prealoder

window.onload = function () {
	window.setTimeout(fadeout, 500);
}

function fadeout() {
	document.querySelector('.preloader').style.opacity = '0';
	document.querySelector('.preloader').style.display = 'none';
}


/*=====================================
Sticky
======================================= */
window.onscroll = function () {
	var header_navbar = document.querySelector(".navbar-area");
	var sticky = header_navbar.offsetTop;

	if (window.pageYOffset > sticky) {
		header_navbar.classList.add("sticky");
	} else {
		header_navbar.classList.remove("sticky");
	}



	// show or hide the back-top-top button
	var backToTo = document.querySelector(".scroll-top");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTo.style.display = "block";
	} else {
		backToTo.style.display = "none";
	}
};


// section menu active
function onScroll(event) {
	var sections = document.querySelectorAll('.page-scroll');
	var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	for (var i = 0; i < sections.length; i++) {
		var currLink = sections[i];
		var val = currLink.getAttribute('href');
		var refElement = document.querySelector(val);
		var scrollTopMinus = scrollPos + 73;
		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
			document.querySelector('.page-scroll').classList.remove('active');
			currLink.classList.add('active');
		} else {
			currLink.classList.remove('active');
		}
	}
};

window.document.addEventListener('scroll', onScroll);


//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
	e.addEventListener("click", () => {
		navbarToggler.classList.remove("active");
		navbarCollapse.classList.remove('show')
	})
);
navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});



// WOW active
new WOW().init();


, function(t, e, i) {
    "use strict";
    (function(t) {
        var n = i(12);
        e.a = {
            init: function() {
                t(".hamburger").click(function() {
                    t(this).toggleClass("is-active")
                })
            },
            finalize: function() {
                var e = t("#debt").data("rate")
                  , i = t("#debt").data("startdate")
                  , o = (new Date).getTime() / 1e3
                  , r = new Date(i).getTime() / 1e3
                  , s = o - r
                  , a = 33600000000 + s * e
                  , l = {
                    useEasing: !1,
                    useGrouping: !0,
                    separator: ",",
                    decimal: ".",
                    prefix: "$"
                }
                  , c = new n.a("debt",0,a,0,2,l);
                c.error || c.start(function() {
                    a += 2 * e,
                    c.update(a),
                    setInterval(function() {
                        c.update(a),
                        a += e / 2
                    }, 500)
                }),
                t(".slider-images").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    autoplay: !0,
                    pauseOnFocus: !1,
                    pauseOnHover: !1
                }),
                t(".video-link").magnificPopup({
                    type: "iframe"
                }),
                t(".blocks-gallery-item a").magnificPopup({
                    type: "image",
                    gallery: {
                        enabled: !0
                    },
                    image: {
                        titleSrc: function(t) {
                            return "<small>" + t.el.next("figcaption").text() + "</small>"
                        }
                    }
                })
            }
        }
    }
    ).call(e, i(0))
}


// count down timer
const countDownClock = (number = 100, format = 'seconds') => {

	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	const secondsElement = d.querySelector('.seconds');
	let countdown;
	convertFormat(format);


	function convertFormat(format) {
		switch (format) {
			case 'seconds':
				return timer(number * 0.014);
			case 'minutes':
				return timer(number * 60);
			case 'hours':
				return timer(number * 60 * 60);
			case 'days':
				return timer(number * 60 * 60 * 24);
		}
	}

	function timer(seconds) {
		const now = Date.now();
		const then = now + seconds * 1000;

		countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft <= 0) {
				clearInterval(countdown);
				return;
			};

			displayTimeLeft(secondsLeft);

		}, 1000);
	}

	function displayTimeLeft(seconds) {
		daysElement.textContent = Math.floor(seconds / 86400);
		hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
		secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	}
}


/*
	start countdown
	enter number and format
	days, hours, minutes or seconds
*/
countDownClock(90, 'days');