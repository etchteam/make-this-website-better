# Make this website better

This is a coding challenge for Etch Junior Developer job applicants.

We would like you to fork this repo, make the website better and open a PR that describes what has been done and why it's better.

There's no right answer, we just want to see what you're interested in.

## Progress Notes

### Initial Notes/Things to look at

- Aesthetic changes (grey background on some elements, formatting on form, Team Work Makes The Dream Work)
- Refactoring existing code
- Any actual proper bugs
- Improving efficiency (may not be relevant on a single page)
- Documentation (doing that right now)
- Accessibility (both for people with disabilities and things which affect readability for abled people etc)
- Security/Privacy (not a huge concern b/c there's no way of anything being exposed rn)
- Actually host the site (what's a bigger improvement than actually being able to access the site?)

- What are the user's objectives? What are the business' objectives?

#### The Form
- Looks kinda bland and unprofessional
- Could use some reworking of the input types (everything is plain text boxes except web dev topics, which also needs changing)
- "Why I want to work at Etch" text area resizes everything else in the form rather than just that form group div
- Form can be submitted empty: some options should be allowed to be empty maybe, but some should be required (and marked as such)
- BBQ isn't a web development topic - yet
- Sent some postman requests to the submit url, just requires at least one field to be filled

changes: all necessary contact details are required, input types are more suitable (address could be multiple options as fieldset though), added ids to inputs and for attribute to labels

#### General Design
- That grey isn't great and doesn't fit the rest of the colour scheme
- Team Work Makes The Dream Work is fun but 3/6 being 404s means functionality needs to come over fun here
- The Etch logo should be a link
- Add a favicon if I have spare time

changes: colour is better (imho), just "Team Work" now, logo is a link

#### Non-visible stuff
- script.js doesn't currently do anything, but might change
- Deploy the site
