console.log('Connected!')

// PH this gets the section of the page we want to do things when we intersect.
// PH it makes sense to try it out for the footer in my case.
// PH seems to work to show that the intersection observer is working.
const footer = document.querySelector(".footer");

// PH get anything with the class fade-in.
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const footerOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const footerObserver = new IntersectionObserver(function (
    entries,
    footerObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            
            // PH do nothing. I suppose I could add the remove here to repeat the animation.
        } else {
            console.log(entry);
            // PH this modifies the footer class to appear when intersected. If we have multiple footers it should still work...
            entry.target.classList.add("appear");
        }
    });
},
    footerOptions);

// PH hook up the footer to the observer
footerObserver.observe(footer);


//PH This is the one I am going to want to use I think.
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});