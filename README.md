# Small and simple ReactJS contact form applicaton

Small responsive contact form built using ReactJS.

Overall I believe this site to be much better than what It was when I started as the front end is much cleaner and its core functionality is more stable. 

Discreet additions such as CSS animations used on hover and focus states of button and navigation links contribute to a better UX experience. Functionality wise the contact form before had next to no security or validation surrounding what the user inputted. By implementing formik and using a fetch API call meant not only could I catch any validation issues such as empty inputs or unformatted emails that were required stopping the from from being submitted I was also able to catch those errors and then show visual prompts for the user. 

- Node.js implemented to handle installation of node modules
- Css pre-processor 'node-sass' used to convert SASS stylesheets into CSS
- Formik to handle for front end validation issues with the form
- react-albus package also used to provide a step approach to the form seperating up the process (https://github.com/americanexpress/react-albus)

What I could do differently:
As much as I have added a very simple method of validation to this form as I deemed a contact form only needed a low level of formatting but it could be exanded and improved. 

- One way could be through specific regex for each input field personalised to the field itself i.e name field would only allow letters and the years experience would only allow numbers
- Another through custom validation specific to each step within the form journey, currently validation fires at the end of the journey on submit of the form and currently shows a generic error alert highlighting to the user they have done something wrong. If I was to expand this further I would show one of those alerts at the point of clicking next in the journey with more bespoke wording so its more obvious to the user what actually was wrong and how they could fix it e.g. on the email step if the email isnt valid specifically tell them there and then that its not valid and disable the next button to then stop them from proceeding.

Hope I was able to demonstrate various skills and techniques and I look forward to hearing from you.

Thanks
Nathan