/*****************************************************************************/
/*  Section 1 - The basic included stuff                                     */
/*****************************************************************************/

// PH Still nice to know.
console.log('Connected!')


/*****************************************************************************/
/*  Section 2 - Handles the intersection observer logic                      */
/*****************************************************************************/


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
        // PH not quite sure why the original author chose to use the !not true rather than do this in the positive sense.
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


/*****************************************************************************/
/*  Section 3 - Having a go at some focus on input stuff.                    */
/*****************************************************************************/


// PH copied from Joshua Studly's fantastic article, going to understand it and then change it for my purposes.
const FloatLabel = (() => {

    // add active class
    const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
        target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };

    // remove active class
    const handleBlur = (e) => {
        const target = e.target;
        if (!target.value) {
            target.parentNode.classList.remove('active');
        }
        target.removeAttribute('placeholder');
    };

    // register events
    // PH had to add in the if statements so I could use the effect for both standard inputs and the textarea.
    const bindEvents = (element) => {
        if (element.querySelector('input') !== null) {
            const floatField = element.querySelector('input');
            floatField.addEventListener('focus', handleFocus);
            floatField.addEventListener('blur', handleBlur);

        } else if (element.querySelector('textarea') !== null) {
            const floatText = element.querySelector('textarea');
            floatText.addEventListener('focus', handleFocus);
            floatText.addEventListener('blur', handleBlur);
        }
    };

    // get DOM elements
    const init = () => {
        // PH changed it to look for the form-float class
        const floatContainers = document.querySelectorAll('.form-float');

        floatContainers.forEach((element) => {
            if (element.querySelector('input') !== null) {
                if (element.querySelector('input').value) {
                    element.classList.add('active');
                }
            } else if (element.querySelector('textarea') !== null) {

                if (element.querySelector('textarea').value) {
                    element.classList.add('active');
                }
            }

            bindEvents(element);
        });
    };

    return {
        init: init
    };
})();

FloatLabel.init();