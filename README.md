# Personal Portfolio Website

## Project Overview

This website is a personal portfolio created to introduce me, showcase my web development projects, and provide visitors with a way to contact me.

The website includes three pages:

- **Home:** Introduces the portfolio and provides navigation to other pages.
- **Projects:** Displays examples of my web development work.
- **About / Contact:** Shares information about me and includes an accessible contact form.

## Accessibility Improvements

The following accessibility improvements were made during this project:

- Added a language attribute to each HTML page so assistive technologies can identify the page language.
- Added descriptive page titles and meta descriptions to help users understand each page.
- Added a skip navigation link so keyboard users can move directly to the main content.
- Used semantic HTML elements such as header, nav, main, section, article, and footer to improve page structure.
- Added descriptive navigation labels and an aria-current attribute to identify the active page.
- Added visible keyboard focus indicators to help users navigate the website without a mouse.
- Added properly associated labels to all contact form fields.
- Used fieldset and legend elements to group related radio button choices.
- Added accessible form error messages and aria-invalid attributes to identify invalid fields.
- Added a live status region to communicate form validation results to assistive technology users.
- Added responsive styling so the website can be viewed on different screen sizes.
- Added reduced-motion support for visitors who prefer less animation.
- Used a consistent color palette with readable text and background combinations.

## WAVE Accessibility Evaluation

The WAVE Web Accessibility Evaluation Tool was used to review the website pages.

Pages reviewed:

- Home page: index.html
- Projects page: projects.html
- About / Contact page: about.html

After publishing the changes, run WAVE on each page and record the actual results below.

| Page | Errors | Contrast Errors | Alerts |
|---|---:|---:|---:|
| Home | Complete after testing | Complete after testing | Complete after testing |
| Projects | Complete after testing | Complete after testing | Complete after testing |
| About / Contact | Complete after testing | Complete after testing | Complete after testing |

Any WAVE errors found during testing should be corrected and tested again before submission.

## Color Contrast

The website uses a consistent color palette:

| Color | Hex Code | Purpose |
|---|---|---|
| Navy | #142B4A | Navigation, headings, and footer |
| Blue | #2F5D8C | Supporting visual elements |
| Link Blue | #1F4E79 | Links |
| Light Gray | #F2F5F8 | Page background |
| White | #FFFFFF | Cards and text contrast |
| Main Text | #263445 | Body text |
| Error Red | #A32121 | Form error messages |

Text and background combinations should be checked using the WebAIM Contrast Checker to confirm WCAG AA compliance.

## Gestalt Principles

Two Gestalt principles were applied to improve the visual organization of the portfolio.

### 1. Proximity

Related content is grouped together in cards and sections. This helps visitors understand which information belongs together and makes the website easier to scan.

### 2. Similarity

Consistent colors, typography, navigation styles, buttons, and card designs are used across all three pages. These repeated design elements help visitors recognize related content and create a unified appearance.

## Contact Form

The About / Contact page includes a contact form with:

- A name field.
- An email field.
- Radio buttons for selecting a topic.
- A message field.
- Required-field validation.
- Accessible error messages.

The form currently demonstrates client-side validation. It does not send or store submitted messages because a form submission service or backend has not been connected.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub Pages
- WAVE Accessibility Evaluation Tool
- WebAIM Contrast Checker

## Website

[View My Portfolio](https://dreliford89.github.io/personal-portfolio/)

## Repository

[View the GitHub Repository](https://github.com/DReliford89/personal-portfolio)
