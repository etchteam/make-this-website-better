# Make this website better

## This was coding take home for [Etch](https://etch.co)

### The task

This coding challenge is for people who want to work with us at [Etch](https://etch.co).

We’d like you to fork this repo, make the website better and open a pull request.

There’s no right or wrong answer, we simply want to see what you’re interested in.

## My Approach

### First thoughts/impressions

- Context: Site is a simple form submit to apply for a job at Etch.
- Design: Site design is inconsistent with Etch's main site and branding.
- Accessibility: There are accessibility issues with the contract of the hero and footer. Lack of form accessibility labels and image aria.
- Functionality: Serval navbar links don't work. Submission form works - main improvements will be stylistic/UX based.

### Plan

I decided to keep my plan for the site simple, mostly focussing on fixing issues and aligning styling with the brand. I decided to keep the project in vanilla HTML, CSS and JS as to best show these skills with adding unnecessary complexity or time-commitment to the challenge.

I gave myself a **time limit of 1 weekend afternoon (~3 hours)** to allow me to make sizable changes without prevent the task scope growing unnecessarily.

I started by setting out a series of steps to break down the task:

1. Change the nav bar, hero and footer to be more inline with Etch branding - whilst keeping current page ideas.
2. Improve the Form styles and functionality.
4. Final changes and Tidy code inline with best practices.
5. Documentation/README guide for Etch hiring manager (i.e. the README you're reading here)

(Each step roughly aligns with a commit).

### 1. Base Styling

- Aligned with Etch's existing sites branding - my plan was to align the branding but not to use the same/identical site layout, and instead improve the styling of the provided content (For a real site these components should be shared and therefore the same).
- I grabbed colors and font from the site CSS - stored these in CSS variables
- Improved Navbar - removed/restyled broken links to prevent confusion - made nav sticky with box shadow
- During this process I also removed poor contrast areas in the original design - improve design and accessibility

### 2. Form Styling

- Improved layout - particularly for desktop
- Added custom checkbox and button style - Etch red
- Added id and for attributes to improve accessibility
- Improved typing for different input types e.g. telephone number
- Added required fields - add disabled submit until filled
- Change experience years to a dropdown to simplify options selectable (e.g. prevent unnecessary decimal inputs ect..)
- Improved textbox area and added max length and counter indicator for user - this also makes the form easier for applicant to understand the expectations.
- Add a privacy data handling notice inline with the law - this should link to a privacy page if the site was actually used (not with task scope to create this).

### 4. Final Changes and Tidy Code

Less final changes were needed than planned, as I made changes along the way, these included:

- Accessibility changes e.g. adding semantic section tags
- Adding Favicon and improving title (increase length for SEO) and SEO description
- Refined CSS units and variables
- Added CSS comments - decided not to split into multiple sheets for single page site
- Formatted with prettier

### 5. Documentation

Your reading it here :)

## Future Improvements

Due to the scope limit and self-imposed time limit of the task I couldn't make every change I would make to a real project.
Here are some ideas for other changes/checks I would make next:

- Improve styling for the HTML format/required field tooltips
- Add tooltip to disabled form button for better UX
- Improve padding/margins to use standardized CSS variables, rather than assigning throughout
- Add social media sharing meta tags to easily advertise job hiring
- Integrate the site with existing site to perfectly match navbar, footer, ect..
- Add real data privacy link
- Change checkbox borders to match better with other form elements - would involve overriding and redrawing checkbox from scratch
- Better client side form validation - possibly add features to prevent spamming
- Make sure form submit aligns on backend/discuss with backend engineers changes required
- Improve form submit redirect
- User research/testing to check and iterate on this prototype
- Integrate into modern frameworks and libraries e.g. React JS, SASS, Tailwind rather than vanilla code
