# Assignment

## [Live Website Link!](https://nirzon-m3-mp.netlify.app/)

### Structure of the web page

<img src="./assets/webpage.jpg" width="700px" alt="structure of the webpage"  />

---

Table of Contentss

- [Assignment](#assignment)
  - [Live Website Link!](#live-website-link)
    - [Structure of the web page](#structure-of-the-web-page)
    - [In `style.css`](#in-stylecss)
      - [CSS Selector: `@import`](#css-selector-import)
      - [CSS Selector: `*`](#css-selector-)
      - [CSS Selector: `html`](#css-selector-html)
      - [CSS Selector: `body`](#css-selector-body)
    - [In `navbar.css`](#in-navbarcss)
      - [CSS Selector: `nav`](#css-selector-nav)
      - [CSS Selector: `nav a`](#css-selector-nav-a)
      - [CSS Selector: `nav a.active`](#css-selector-nav-aactive)
      - [CSS Selector: `nav a:hover`](#css-selector-nav-ahover)
      - [CSS Selector: `nav img`](#css-selector-nav-img)
      - [CSS Selector: `nav ul .icon, .social-links span`](#css-selector-nav-ul-icon-social-links-span)
      - [CSS Selector: `nav ul`](#css-selector-nav-ul)
      - [CSS Selector: `nav ul li a`](#css-selector-nav-ul-li-a)
      - [CSS Selector: `button`](#css-selector-button)
      - [CSS Selector: `button:hover`](#css-selector-buttonhover)
    - [In `home.css`](#in-homecss)
      - [CSS Selector: `.home`](#css-selector-home)
      - [CSS Selector: `.home h1`](#css-selector-home-h1)
      - [CSS Selector: `.home p`](#css-selector-home-p)
    - [In `services.css`](#in-servicescss)
      - [CSS Selector: `.services`](#css-selector-services)
      - [CSS Selector: `.service-title`](#css-selector-service-title)
      - [CSS Selector: `.services > span`](#css-selector-services--span)
      - [CSS Selector: `.services > h3`](#css-selector-services--h3)
      - [CSS Selector: `.services .service-list-container`](#css-selector-services-service-list-container)
      - [CSS Selector: `.services .service-list-container .service-item`](#css-selector-services-service-list-container-service-item)
      - [CSS Selector: `.services .service-item img`](#css-selector-services-service-item-img)
      - [CSS Selector: `.services .service-item h4`](#css-selector-services-service-item-h4)
      - [CSS Selector: `.services .service-item p`](#css-selector-services-service-item-p)
      - [CSS Selector: `.services .service-item ul`](#css-selector-services-service-item-ul)
      - [CSS Selector: `.services .service-item ul li:before`](#css-selector-services-service-item-ul-libefore)
      - [CSS Selector: `.services .service-item h6`](#css-selector-services-service-item-h6)
      - [CSS Selector: `.services .service-item h6 .price`](#css-selector-services-service-item-h6-price)
      - [CSS Selector: `.services .service-item button`](#css-selector-services-service-item-button)
      - [CSS Selector: `.services .service-item button:hover`](#css-selector-services-service-item-buttonhover)
      - [CSS Selector: `.services .proportions`](#css-selector-services-proportions)
      - [CSS Selector: `.services .proportions h3`](#css-selector-services-proportions-h3)
      - [CSS Selector: `.services .proportions img`](#css-selector-services-proportions-img)
      - [CSS Selector: `.services .proportions .content`](#css-selector-services-proportions-content)
      - [CSS Selector: `.services .proportions-1 .content`](#css-selector-services-proportions-1-content)
      - [CSS Selector: `.services .proportions-2 .content`](#css-selector-services-proportions-2-content)
      - [CSS Selector: `.services .proportions p`](#css-selector-services-proportions-p)
      - [CSS Selector: `.services .testimonials`](#css-selector-services-testimonials)
      - [CSS Selector: `.services .testimonials h3`](#css-selector-services-testimonials-h3)
      - [CSS Selector: `.services .testimonials p`](#css-selector-services-testimonials-p)
      - [CSS Selector: `.services .testimonials > p`](#css-selector-services-testimonials--p)
      - [CSS Selector: `.services .testimonial-list-container`](#css-selector-services-testimonial-list-container)
      - [CSS Selector: `.services .testimonial-item`](#css-selector-services-testimonial-item)
      - [CSS Selector: `.services .testimonials img`](#css-selector-services-testimonials-img)
      - [CSS Selector: `.services .testimonial-item p`](#css-selector-services-testimonial-item-p)
      - [CSS Selector: `.services .testimonial-item h4`](#css-selector-services-testimonial-item-h4)
    - [In `contact.css`](#in-contactcss)
      - [CSS Selector: `.section-title`](#css-selector-section-title)
      - [CSS Selector: `.call_me`](#css-selector-call_me)
      - [CSS Selector: `.call_me .content` and `.call_me .form`](#css-selector-call_me-content-and-call_me-form)
      - [CSS Selector: `.call_me .content h3`](#css-selector-call_me-content-h3)
      - [CSS Selector: `.call_me .content p`](#css-selector-call_me-content-p)
      - [CSS Selector: `.call_me .content ul`](#css-selector-call_me-content-ul)
      - [CSS Selector: `.call_me .content ul li:before`](#css-selector-call_me-content-ul-libefore)
      - [CSS Selector: `.call_me .content ul li`](#css-selector-call_me-content-ul-li)
      - [CSS Selector: `.underline`](#css-selector-underline)
      - [CSS Selector: `.call_me form`](#css-selector-call_me-form)
      - [CSS Selector: `.call_me form .terms-container label`](#css-selector-call_me-form-terms-container-label)
      - [CSS Selector: `button[type='submit']`](#css-selector-buttontypesubmit)
      - [CSS Selector: `.call_me form input` and `.call_me select`](#css-selector-call_me-form-input-and-call_me-select)
    - [In `projects.css`](#in-projectscss)
      - [CSS Selector: .projects](#css-selector-projects)
      - [CSS Selector: .projects \> span, .projects \> h3](#css-selector-projects--span-projects--h3)
      - [CSS Selector: .projects \> span](#css-selector-projects--span)
      - [CSS Selector: .projects \> h3](#css-selector-projects--h3)
      - [CSS Selector: .projects .category-list-container ul](#css-selector-projects-category-list-container-ul)
      - [CSS Selector: .projects .category-list-container ul button](#css-selector-projects-category-list-container-ul-button)
      - [CSS Selector: .projects .category-list-container ul button:hover](#css-selector-projects-category-list-container-ul-buttonhover)
      - [CSS Selector: .projects .category-list-container ul button.active](#css-selector-projects-category-list-container-ul-buttonactive)
      - [CSS Selector: .projects .project-list-container](#css-selector-projects-project-list-container)
      - [CSS Selector: .projects .project-list-container div](#css-selector-projects-project-list-container-div)
      - [CSS Selector: .projects .project-list-container .project-item](#css-selector-projects-project-list-container-project-item)
      - [CSS Selector: .projects .project-item](#css-selector-projects-project-item)
      - [CSS Selector: .projects .project-item:hover](#css-selector-projects-project-itemhover)
      - [CSS Selector: .projects .project-item.p-1, .projects .project-item.p-2, .projects .project-item.p-3, .projects .project-item.p-4, .projects .project-item.p-5, .projects .project-item.p-6, .projects .project-item.p-7, .projects .project-item.p-8](#css-selector-projects-project-itemp-1-projects-project-itemp-2-projects-project-itemp-3-projects-project-itemp-4-projects-project-itemp-5-projects-project-itemp-6-projects-project-itemp-7-projects-project-itemp-8)
      - [CSS Selector: .projects .project-item p](#css-selector-projects-project-item-p)
      - [CSS Selector: .projects .project-item:hover p](#css-selector-projects-project-itemhover-p)
    - [In `team.css`](#in-teamcss)
      - [Selector: .team](#selector-team)
      - [Selector: .team \> h4](#selector-team--h4)
      - [Selector: .team \> p](#selector-team--p)
      - [Selector: .team .team-member-list-container](#selector-team-team-member-list-container)
      - [Selector: .team .team-member-list-container .team-member-item](#selector-team-team-member-list-container-team-member-item)
      - [Selector: .team .team-member-item img](#selector-team-team-member-item-img)
      - [Selector: .team .team-member-item p](#selector-team-team-member-item-p)
      - [Selector: .team .team-member-item h5](#selector-team-team-member-item-h5)
      - [Selector: .team .team-member-item .social-links](#selector-team-team-member-item-social-links)
      - [Selector: .team .team-member-item .social-links span](#selector-team-team-member-item-social-links-span)
    - [In `about.css`](#in-aboutcss)
      - [CSS Selector: .about](#css-selector-about)
      - [CSS Selector: .about \> div](#css-selector-about--div)
      - [CSS Selector: .about-content \> h6, .contact \> div \> h6](#css-selector-about-content--h6-contact--div--h6)
      - [CSS Selector: .about-content \> h2, .contact \> div \> h2](#css-selector-about-content--h2-contact--div--h2)
      - [CSS Selector: .about-content \> p, .contact \> div \> p, .contact \> div \> .location, .contact \> div \> .contacts](#css-selector-about-content--p-contact--div--p-contact--div--location-contact--div--contacts)
      - [CSS Selector: .about-content \> ul](#css-selector-about-content--ul)
      - [CSS Selector: .about-content \> ul \> li](#css-selector-about-content--ul--li)
      - [CSS Selector: .about-content \> ul \> li::before](#css-selector-about-content--ul--libefore)
      - [CSS Selector: .about-feedback](#css-selector-about-feedback)
      - [CSS Selector: .about-feedback \> div \> h1](#css-selector-about-feedback--div--h1)
      - [CSS Selector: .about-feedback \> div \> div \> p](#css-selector-about-feedback--div--div--p)
      - [CSS Selector: .about-feedback \> div](#css-selector-about-feedback--div)
      - [CSS Selector: .about-image img](#css-selector-about-image-img)
      - [CSS Selector: .contact](#css-selector-contact)
      - [CSS Selector: .contact-form, .contact-details](#css-selector-contact-form-contact-details)
      - [CSS Selector: .contact-details h3](#css-selector-contact-details-h3)
      - [CSS Selector: .icons](#css-selector-icons)
      - [CSS Selector: .contacts \> span](#css-selector-contacts--span)
      - [CSS Selector: .location, .contacts](#css-selector-location-contacts)
      - [CSS Selector: .hexagon-group](#css-selector-hexagon-group)
      - [CSS Selector: .contact .hexagon](#css-selector-contact-hexagon)
      - [CSS Selector: .contact .hexagon \> i](#css-selector-contact-hexagon--i)
      - [CSS Selector: .hexagon:hover](#css-selector-hexagonhover)
      - [CSS Selector: .contact-form input\[type='text'\], input\[type='email'\], textarea](#css-selector-contact-form-inputtypetext-inputtypeemail-textarea)
      - [CSS Selector: .checkbox](#css-selector-checkbox)
      - [CSS Selector: .contact-form span](#css-selector-contact-form-span)
      - [CSS Selector: .contact-form button](#css-selector-contact-form-button)
      - [CSS Selector: .contact-form \> form \> span \> span](#css-selector-contact-form--form--span--span)
      - [CSS Selector: footer](#css-selector-footer)
      - [CSS Selector: footer h2](#css-selector-footer-h2)
      - [CSS Selector: footer a](#css-selector-footer-a)
      - [CSS Selector: footer \> div:nth-child(1)](#css-selector-footer--divnth-child1)

Click on the link to navigate between them.

### In `style.css`

#### CSS Selector: `@import`

| Property | Value                                                                                                                        | Explanation                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| url      | 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap' | Imports external fonts from Google Fonts. |

Explanation: The `@import` statements are used to import external CSS files and font styles.

---

#### CSS Selector: `*`

| Property    | Value                     | Explanation                                                                                                               |
| ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| padding     | 0                         | Resets the padding of all elements to 0.                                                                                  |
| margin      | 0                         | Resets the margin of all elements to 0.                                                                                   |
| box-sizing  | border-box                | Sets the box-sizing property to "border-box" for all elements, including padding and borders within the width and height. |
| font-family | 'Open Sans', 'sans-serif' | Sets the default font family to "Open Sans" and fallback to generic sans-serif fonts.                                     |

Explanation: The `*` selector sets global CSS reset and default font family for all elements on the page.

---

#### CSS Selector: `html`

| Property        | Value  | Explanation                                          |
| --------------- | ------ | ---------------------------------------------------- |
| scroll-behavior | smooth | Enables smooth scrolling behavior for HTML elements. |

Explanation: The `html` selector enables smooth scrolling behavior for anchor links on the page.

---

#### CSS Selector: `body`

| Property         | Value   | Explanation                                                      |
| ---------------- | ------- | ---------------------------------------------------------------- |
| background-color | #fbfbfb | Sets the background color of the `body` element to a light gray. |

Explanation: The `body` selector styles the background color of the page to a light gray.

### In `navbar.css`

#### CSS Selector: `nav`

| Property         | Value         | Explanation                                                                                           |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| display          | flex          | Uses a flexbox layout for the `nav` element.                                                          |
| position         | fixed         | Fixes the position of the `nav` element.                                                              |
| justify-content  | space-between | Distributes space evenly between flex items, pushing them to the edges of the container horizontally. |
| width            | 100%          | Sets the width of the `nav` element to 100% of the viewport width.                                    |
| top              | 0             | Positions the `nav` element at the top of the viewport.                                               |
| left             | 0             | Positions the `nav` element at the left edge of the viewport.                                         |
| height           | 3rem          | Sets the height of the `nav` element to 3 rem (48 pixels).                                            |
| padding          | 0 5rem        | Sets horizontal padding of 0 and 5 rem (80 pixels) on the left and right of the `nav` element.        |
| box-sizing       | border-box    | Sets the box-sizing property to "border-box" for the `nav` element.                                   |
| align-items      | center        | Vertically aligns items within the `nav` element to the center.                                       |
| color            | #fff          | Sets the text color of the `nav` element to white.                                                    |
| z-index          | 100           | Sets the stacking order of the `nav` element to 100.                                                  |
| background-color | #113448       | Sets the background color of the `nav` element to a dark blue.                                        |

Explanation: The `nav` selector styles a navigation bar with various properties to control its appearance and behavior.

---

#### CSS Selector: `nav a`

| Property        | Value                  | Explanation                                                             |
| --------------- | ---------------------- | ----------------------------------------------------------------------- |
| text-decoration | none                   | Removes underlines and decorations from links within the `nav` element. |
| color           | #fff                   | Sets the default text color for links to white.                         |
| transition      | color 0.3s ease-in-out | Applies a smooth color transition effect over 0.3 seconds on link text. |

Explanation: The `nav a` selector styles anchor links within the navigation bar.

---

#### CSS Selector: `nav a.active`

| Property | Value   | Explanation                                               |
| -------- | ------- | --------------------------------------------------------- |
| color    | #14bf98 | Sets the text color for active links to a greenish color. |

Explanation: The `nav a.active` selector styles active links within the navigation bar.

---

#### CSS Selector: `nav a:hover`

| Property | Value   | Explanation                                                   |
| -------- | ------- | ------------------------------------------------------------- |
| color    | #14bf98 | Changes the text color of links on hover to a greenish color. |

Explanation: The `nav a:hover` selector styles links when hovered over by the cursor.

---

#### CSS Selector: `nav img`

| Property | Value | Explanation                                                              |
| -------- | ----- | ------------------------------------------------------------------------ |
| height   | 2rem  | Sets the height of images within the `nav` element to 2 rem (32 pixels). |

Explanation: The `nav img` selector styles images within the navigation bar.

---

#### CSS Selector: `nav ul .icon, .social-links span`

| Property        | Value                                      | Explanation                                                                         |
| --------------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| display         | grid                                       | Uses a grid layout for `.icon` and `span` elements.                                 |
| place-content   | center                                     | Centers content both horizontally and vertically within grid containers.            |
| cursor          | pointer                                    | Sets a pointer cursor for `.icon` and `span` elements.                              |
| font-size       | 0.5rem                                     | Sets the font size for `.icon` and `span` elements to 0.5 rem (8 pixels).           |
| background      | url(../assets/hexagon-green.svg) no-repeat | Applies a background image to `.icon` and `span` elements without repeating.        |
| background-size | contain                                    | Scales the background image to fit within the container.                            |
| height          | 28px                                       | Sets the height of `.icon` and `span` elements to 28 pixels.                        |
| width           | 28px                                       | Sets the width of `.icon` and `span` elements to 28 pixels.                         |
| transition      | 0.3s ease-in-out                           | Applies a smooth transition effect over 0.3 seconds to `.icon` and `span` elements. |

Explanation: The `nav ul .icon, .social-links span` selector styles grid elements with icons and spans, including hover effects.

---

#### CSS Selector: `nav ul`

| Property       | Value  | Explanation                                                                      |
| -------------- | ------ | -------------------------------------------------------------------------------- |
| display        | flex   | Uses a flexbox layout for `ul` elements within the `nav` element.                |
| flex-direction | row    | Sets the flex direction to row for `ul` elements.                                |
| list-style     | none   | Removes the default list bullet points for `ul` elements.                        |
| align-items    | center | Vertically aligns items within `ul` elements to the center.                      |
| margin         | 0      | Removes margin from `ul` elements.                                               |
| padding        | 0      | Removes padding from `ul` elements.                                              |
| gap            | 1.5rem | Sets the gap between child elements within `ul` elements to 1.5 rem (24 pixels). |

Explanation: The `nav ul` selector styles unordered lists within the navigation bar.

---

#### CSS Selector: `nav ul li a`

| Property       | Value     | Explanation                                                       |
| -------------- | --------- | ----------------------------------------------------------------- |
| text-transform | uppercase | Converts text to uppercase for `a` elements within `li` elements. |
| font-weight    | 600       | Sets the font weight to 600 (semi-bold) for `a` elements.         |
| font-size      | 14px      | Sets the font size of `a` elements to 14 pixels.                  |

Explanation: The `nav ul li a` selector styles links within list items in the navigation bar.

---

#### CSS Selector: `button`

| Property         | Value                | Explanation                                                                                 |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| cursor           | pointer              | Sets a pointer cursor for `button` elements.                                                |
| border           | 1px solid #14bf98    | Sets a 1-pixel solid border with a greenish color for `button` elements.                    |
| background-color | #14bf98              | Sets the background color of `button` elements to a greenish color.                         |
| color            | #fff                 | Sets the text color of `button` elements to white.                                          |
| text-transform   | uppercase            | Converts text to uppercase for `button` elements.                                           |
| padding          | 1rem 2rem            | Sets padding for `button` elements.                                                         |
| border-radius    | 5px                  | Adds a 5-pixel border-radius to `button` elements.                                          |
| transition       | all 0.5s ease-in-out | Applies a smooth transition effect to all properties of `button` elements over 0.5 seconds. |
| font-weight      | 700                  | Sets the font weight to 700 (bold) for `button` elements.                                   |
| font-size        | 0.75rem              | Sets the font size of `button` elements to 0.75 rem (12 pixels).                            |

Explanation: The `button` selector styles buttons with various properties, including hover effects.

---

#### CSS Selector: `button:hover`

| Property         | Value       | Explanation                                                               |
| ---------------- | ----------- | ------------------------------------------------------------------------- |
| background-color | transparent | Makes the background color of `button` elements transparent on hover.     |
| color            | #14bf98     | Changes the text color of `button` elements on hover to a greenish color. |

Explanation: The `button:hover` selector styles buttons when hovered over by the cursor.

### In `home.css`

#### CSS Selector: `.home`

| Property              | Value                                                                                           | Explanation                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| background-image      | linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('../assets/header-background.jpg') | Sets the background image of the `.home` element with a gradient overlay and a specified image. |
| height                | calc(100vh + 3rem)                                                                              | Sets the height of the `.home` element to the viewport height plus 3 rem (48 pixels).           |
| background-position   | center                                                                                          | Positions the background image in the center of the `.home` element.                            |
| background-attachment | fixed                                                                                           | Makes the background image fixed within the viewport.                                           |
| background-size       | cover                                                                                           | Scales the background image to cover the entire `.home` element.                                |
| display               | flex                                                                                            | Uses a flexbox layout for the `.home` element.                                                  |
| flex-direction        | column                                                                                          | Sets the flex direction to column for child elements.                                           |
| justify-content       | center                                                                                          | Centers content vertically within the `.home` element.                                          |
| align-items           | center                                                                                          | Centers content horizontally within the `.home` element.                                        |
| text-align            | center                                                                                          | Centers text content within the `.home` element.                                                |
| color                 | #fff                                                                                            | Sets the text color within the `.home` element to white.                                        |

Explanation: The `.home` selector styles a section with a background image, overlay, and text content, creating a hero section.

---

#### CSS Selector: `.home h1`

| Property       | Value                  | Explanation                                                                          |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| font-family    | Montserrat, sans-serif | Sets the font family for the heading to Montserrat and fallback to sans-serif fonts. |
| text-transform | uppercase              | Transforms text to uppercase for the heading.                                        |
| margin-top     | 6rem                   | Adds a top margin of 6 rem (96 pixels) to the heading.                               |
| font-size      | 56px                   | Sets the font size of the heading to 56 pixels.                                      |

Explanation: The `.home h1` selector styles the main heading within the `.home` section.

---

#### CSS Selector: `.home p`

| Property      | Value   | Explanation                                                  |
| ------------- | ------- | ------------------------------------------------------------ |
| font-size     | 18px    | Sets the font size of paragraphs to 18 pixels.               |
| width         | 45%     | Sets the width of paragraphs to 45% of the parent container. |
| color         | #dfe5ec | Sets the text color of paragraphs to a light gray.           |
| margin-top    | 0.5rem  | Adds a top margin of 0.5 rem (8 pixels) to paragraphs.       |
| margin-bottom | 2rem    | Adds a bottom margin of 2 rem (32 pixels) to paragraphs.     |

Explanation: The `.home p` selector styles paragraphs within the `.home` section.

### In `services.css`

#### CSS Selector: `.services`

| Property | Value  | Explanation                                                                         |
| -------- | ------ | ----------------------------------------------------------------------------------- |
| padding  | 5rem 0 | Adds padding of 5 rem (80 pixels) to the top and bottom of the `.services` element. |

Explanation: The `.services` selector adds spacing to the top and bottom of the services section.

---

#### CSS Selector: `.service-title`

| Property      | Value                                           | Explanation                                                                 |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| color         | #14bf98                                         | Sets the text color to a greenish color for the `.service-title` element.   |
| font          | 500 0.8125rem/1.125rem 'Montserrat', sans-serif | Defines the font properties for the `.service-title` element.               |
| margin-bottom | 0.5rem                                          | Adds a bottom margin of 0.5 rem (8 pixels) to the `.service-title` element. |
| text-align    | center                                          | Centers text content horizontally within the `.service-title` element.      |

Explanation: The `.service-title` selector styles titles within the services section.

---

#### CSS Selector: `.services > span`

| Property   | Value  | Explanation                                                                                |
| ---------- | ------ | ------------------------------------------------------------------------------------------ |
| display    | block  | Changes the display property to block for the direct child `span` elements of `.services`. |
| text-align | center | Centers text content horizontally within the direct child `span` elements of `.services`.  |

Explanation: The `.services > span` selector styles `span` elements directly inside the services section.

---

#### CSS Selector: `.services > h3`

| Property      | Value                                         | Explanation                                                                           |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray for the `h3` elements within `.services`.          |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines the font properties for the `h3` elements within `.services`.                 |
| margin-bottom | 3.25rem                                       | Adds a bottom margin of 3.25 rem (52 pixels) to the `h3` elements within `.services`. |
| text-align    | center                                        | Centers text content horizontally within the `h3` elements within `.services`.        |

Explanation: The `.services > h3` selector styles heading elements within the services section.

---

#### CSS Selector: `.services .service-list-container`

| Property        | Value         | Explanation                                                                                                            |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| display         | flex          | Uses a flexbox layout for the `.service-list-container` element.                                                       |
| flex-wrap       | nowrap        | Prevents flex items from wrapping to the next line within the `.service-list-container`.                               |
| justify-content | space-between | Distributes flex items with space between them horizontally.                                                           |
| padding         | 3rem 10vw     | Adds padding of 3 rem (48 pixels) on the top and bottom and 10 vw units (10% of viewport width) on the left and right. |
| align-items     | start         | Aligns flex items to the start vertically within the `.service-list-container`.                                        |

Explanation: The `.services .service-list-container` selector styles a container for service items, arranging them in a flex layout with specific spacing.

---

#### CSS Selector: `.services .service-list-container .service-item`

| Property         | Value             | Explanation                                                                      |
| ---------------- | ----------------- | -------------------------------------------------------------------------------- |
| width            | 30%               | Sets the width of `.service-item` elements to 30% of the container.              |
| flex-grow        | 0                 | Prevents flex items from growing beyond their initial size.                      |
| flex-shrink      | 0                 | Prevents flex items from shrinking beyond their initial size.                    |
| background-color | #fff              | Sets the background color of `.service-item` elements to white.                  |
| border-radius    | 5px               | Adds a border-radius of 5 pixels to `.service-item` elements.                    |
| border           | 1px solid #ebe8e8 | Adds a 1-pixel solid border to `.service-item` elements with a light gray color. |

Explanation: The `.services .service-list-container .service-item` selector styles individual service items within the container.

---

#### CSS Selector: `.services .service-item img`

| Property        | Value       | Explanation                                                                          |
| --------------- | ----------- | ------------------------------------------------------------------------------------ |
| width           | 100%        | Sets the width of images within `.service-item` elements to 100% of their container. |
| height          | 15rem       | Sets the height of images within `.service-item` elements to 15 rem (240 pixels).    |
| object-fit      | cover       | Scales and crops images to cover the entire space of their container.                |
| object-position | center      | Centers images within their containers.                                              |
| border-radius   | 5px 5px 0 0 | Adds a rounded border to the top corners of images within `.service-item` elements.  |

Explanation: The `.services .service-item img` selector styles images within service items.

---

#### CSS Selector: `.services .service-item h4`

| Property   | Value       | Explanation                                                                    |
| ---------- | ----------- | ------------------------------------------------------------------------------ |
| margin     | 0           | Removes margins from `h4` elements within `.service-item`.                     |
| text-align | center      | Centers text content horizontally within `h4` elements within `.service-item`. |
| font-size  | 1.5rem      | Sets the font size of `h4` elements to 1.5 rem (24 pixels).                    |
| color      | #484a46     | Sets the text color to a dark gray for `h4` elements within `.service-item`.   |
| padding    | 0.5rem 2rem | Adds padding to `h4` elements within `.service-item`.                          |

Explanation: The `.services .service-item h4` selector styles subheadings within service items.

---

#### CSS Selector: `.services .service-item p`

| Property    | Value       | Explanation                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| margin      | 0           | Removes margins from paragraphs (`p`) within `.service-item`.                     |
| line-height | 1.5rem      | Sets the line height of paragraphs within `.service-item` to 1.5 rem (24 pixels). |
| color       | #787976     | Sets the text color to a light gray for paragraphs within `.service-item`.        |
| padding     | 0.5rem 2rem | Adds padding to paragraphs within `.service-item`.                                |

Explanation: The `.services .service-item p` selector styles text paragraphs within service items.

---

#### CSS Selector: `.services .service-item ul`

| Property        | Value       | Explanation                                                                       |
| --------------- | ----------- | --------------------------------------------------------------------------------- |
| margin          | 0           | Removes margins from unordered lists (`ul`) within `.service-item`.               |
| line-height     | 1.5rem      | Sets the line height of list items within unordered lists to 1.5 rem (24 pixels). |
| color           | #787976     | Sets the text color to a light gray for list items within unordered lists.        |
| padding         | 0.5rem 2rem | Adds padding to list items within unordered lists.                                |
| list-style-type | none        | Removes the bullet points from list items.                                        |

Explanation: The `.services .service-item ul` selector styles unordered lists within service items, removing bullet points and adding styling.

---

#### CSS Selector: `.services .service-item ul li:before`

| Property     | Value   | Explanation                                                                  |
| ------------ | ------- | ---------------------------------------------------------------------------- |
| content      | '\25a0' | Sets the content (a square symbol) before list items within unordered lists. |
| color        | #14bf98 | Sets the color of the square symbol to green.                                |
| margin-right | 5px     | Adds a margin to the right of the square symbol.                             |
| font-size    | 1.25rem | Sets the font size of the square symbol.                                     |

Explanation: The `.services .service-item ul li:before` selector styles the symbol before list items in unordered lists, such as a square symbol.

---

#### CSS Selector: `.services .service-item h6`

| Property   | Value       | Explanation                                                                    |
| ---------- | ----------- | ------------------------------------------------------------------------------ |
| margin     | 0           | Removes margins from `h6` elements within `.service-item`.                     |
| font-size  | 1.25rem     | Sets the font size of `h6` elements to 1.25 rem (20 pixels).                   |
| color      | #484a46     | Sets the text color to a dark gray for `h6` elements within `.service-item`.   |
| text-align | center      | Centers text content horizontally within `h6` elements within `.service-item`. |
| padding    | 0.5rem 2rem | Adds padding to `h6` elements within `.service-item`.                          |

Explanation: The `.services .service-item h6` selector styles subheadings within service items, specifically for pricing information.

---

#### CSS Selector: `.services .service-item h6 .price`

| Property | Value   | Explanation                                                |
| -------- | ------- | ---------------------------------------------------------- |
| color    | #14bf98 | Sets the color of the price within `h6` elements to green. |

Explanation: The `.services .service-item h6 .price` selector styles the pricing information within subheadings.

---

#### CSS Selector: `.services .service-item button`

| Property  | Value                | Explanation                                                                   |
| --------- | -------------------- | ----------------------------------------------------------------------------- |
| top       | 0                    | Positions the button at the top within its container.                         |
| left      | 50%                  | Positions the button at the horizontal center within its container.           |
| position  | relative             | Specifies a relative position for the button.                                 |
| transform | translate(-50%, 50%) | Translates the button 50% to the left and 50% down, effectively centering it. |

Explanation: The `.services .service-item button` selector styles buttons within service items and centers them horizontally and vertically.

---

#### CSS Selector: `.services .service-item button:hover`

| Property         | Value | Explanation                                            |
| ---------------- | ----- | ------------------------------------------------------ |
| background-color | #fff  | Changes the background color to white on button hover. |

Explanation: The `.services .service-item button:hover` selector styles the button on hover by changing its background color.

---

#### CSS Selector: `.services .proportions`

| Property         | Value | Explanation                                              |
| ---------------- | ----- | -------------------------------------------------------- |
| display          | flex  | Uses a flexbox layout for the `.proportions` element.    |
| flex-direction   | row   | Arranges children of `.proportions` in a horizontal row. |
| background-color | #fff  | Sets the background color of `.proportions` to white.    |

Explanation: The `.services .proportions` selector styles a section with a white background and flex layout for proportions.

---

#### CSS Selector: `.services .proportions h3`

| Property      | Value                                         | Explanation                                                                           |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray for `h3` elements within `.proportions`.           |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines the font properties for `h3` elements within `.proportions`.                  |
| margin-bottom | 1.625rem                                      | Adds a bottom margin of 1.625 rem (26 pixels) to `h3` elements within `.proportions`. |

Explanation: The `.services .proportions h3` selector styles headings within the proportions section.

---

#### CSS Selector: `.services .proportions img`

| Property        | Value  | Explanation                                                               |
| --------------- | ------ | ------------------------------------------------------------------------- |
| width           | 50%    | Sets the width of images within `.proportions` to 50% of their container. |
| height          | 35rem  | Sets the height of images within `.proportions` to 35 rem (560 pixels).   |
| object-fit      | cover  | Scales and crops images to cover the entire space of their container.     |
| object-position | center | Centers images within their containers.                                   |

Explanation: The `.services .proportions img` selector styles images within the proportions section.

---

#### CSS Selector: `.services .proportions .content`

| Property   | Value      | Explanation                                                           |
| ---------- | ---------- | --------------------------------------------------------------------- |
| width      | 100%       | Sets the width of the content within `.proportions` to 100%.          |
| box-sizing | border-box | Includes padding and borders in the element's total width and height. |

Explanation: The `.services .proportions .content` selector styles the content container within the proportions section.

---

#### CSS Selector: `.services .proportions-1 .content`

| Property | Value               | Explanation                                                               |
| -------- | ------------------- | ------------------------------------------------------------------------- |
| padding  | 5rem 20vh 5rem 5rem | Adds specific padding to the content within `.proportions-1` for spacing. |

Explanation: The `.services .proportions-1 .content` selector styles content within the first proportions section, adjusting its padding.

---

#### CSS Selector: `.services .proportions-2 .content`

| Property | Value              | Explanation                                                               |
| -------- | ------------------ | ------------------------------------------------------------------------- |
| padding  | 5rem 5vh 5rem 20vh | Adds specific padding to the content within `.proportions-2` for spacing. |

Explanation: The `.services .proportions-2 .content` selector styles content within the second proportions section, adjusting its padding.

---

#### CSS Selector: `.services .proportions p`

| Property | Value                                      | Explanation                                                                         |
| -------- | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| color    | #787976                                    | Sets the text color to a light gray for paragraphs within proportions sections.     |
| font     | 400 1rem/1.5625rem 'Open Sans', sans-serif | Defines the font properties for paragraphs within proportions sections.             |
| width    | 70%                                        | Sets the width of paragraphs within proportions sections to 70% of their container. |

Explanation: The `.services .proportions p` selector styles text paragraphs within proportions sections.

---

#### CSS Selector: `.services .testimonials`

| Property | Value     | Explanation                                                                                                            |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| padding  | 5rem 20vw | Adds padding of 5 rem (80 pixels) on the top and bottom and 20 vw units (20% of viewport width) on the left and right. |

Explanation: The `.services .testimonials` selector styles the testimonials section with specific padding.

---

#### CSS Selector: `.services .testimonials h3`

| Property      | Value                                         | Explanation                                                                                    |
| ------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray for `h3` elements within the testimonials section.          |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines the font properties for `h3` elements within the testimonials section.                 |
| margin-bottom | 0.75rem                                       | Adds a bottom margin of 0.75 rem (12 pixels) to `h3` elements within the testimonials section. |
| text-align    | center                                        | Centers text content horizontally within `h3` elements within the testimonials section.        |

Explanation: The `.services .testimonials h3` selector styles headings within the testimonials section.

---

#### CSS Selector: `.services .testimonials p`

| Property   | Value                                      | Explanation                                                                             |
| ---------- | ------------------------------------------ | --------------------------------------------------------------------------------------- |
| color      | #787976                                    | Sets the text color to a light gray for paragraphs within the testimonials section.     |
| font       | 400 1rem/1.5625rem 'Open Sans', sans-serif | Defines the font properties for paragraphs within the testimonials section.             |
| text-align | center                                     | Centers text content horizontally within paragraphs within the testimonials section.    |
| width      | 70%                                        | Sets the width of paragraphs within the testimonials section to 70% of their container. |

Explanation: The `.services .testimonials p` selector styles text paragraphs within the testimonials section.

---

#### CSS Selector: `.services .testimonials > p`

| Property | Value  | Explanation                                                                                 |
| -------- | ------ | ------------------------------------------------------------------------------------------- |
| width    | 70%    | Sets the width of the direct child paragraphs of `.testimonials` to 70% of their container. |
| margin   | 0 auto | Centers the direct child paragraphs of `.testimonials` horizontally.                        |

Explanation: The `.services .testimonials > p` selector styles paragraphs directly within the testimonials section, centering them horizontally.

---

#### CSS Selector: `.services .testimonial-list-container`

| Property       | Value  | Explanation                                                                                    |
| -------------- | ------ | ---------------------------------------------------------------------------------------------- |
| display        | flex   | Uses a flexbox layout for the `.testimonial-list-container` element.                           |
| flex-direction | row    | Arranges children of `.testimonial-list-container` in a horizontal row.                        |
| gap            | 2.5rem | Adds a gap of 2.5 rem (40 pixels) between child elements within `.testimonial-list-container`. |
| overflow-x     | scroll | Allows horizontal scrolling for child elements within `.testimonial-list-container`.           |
| padding        | 3rem 0 | Adds padding of 3 rem (48 pixels) on the top and bottom of `.testimonial-list-container`.      |

Explanation: The `.services .testimonial-list-container` selector styles a container for testimonials with a horizontal layout and scrollable content.

---

#### CSS Selector: `.services .testimonial-item`

| Property       | Value  | Explanation                                                                                 |
| -------------- | ------ | ------------------------------------------------------------------------------------------- |
| width          | 32%    | Sets the width of `.testimonial-item` elements to 32% of their container.                   |
| flex-grow      | 0      | Prevents flex items from growing beyond their initial size.                                 |
| flex-shrink    | 0      | Prevents flex items from shrinking beyond their initial size.                               |
| display        | flex   | Uses a flexbox layout for `.testimonial-item` elements.                                     |
| flex-direction | column | Arranges content within `.testimonial-item` elements in a column.                           |
| align-items    | center | Centers content vertically within `.testimonial-item` elements.                             |
| gap            | 1rem   | Adds a vertical gap of 1 rem (16 pixels) between child elements within `.testimonial-item`. |

Explanation: The `.services .testimonial-item` selector styles individual testimonial items, arranging them in columns with specific spacing.

---

#### CSS Selector: `.services .testimonials img`

| Property      | Value | Explanation                                                            |
| ------------- | ----- | ---------------------------------------------------------------------- |
| width         | 6rem  | Sets the width of images within `.testimonials` to 6 rem (96 pixels).  |
| height        | 6rem  | Sets the height of images within `.testimonials` to 6 rem (96 pixels). |
| border-radius | 50%   | Applies a circular border radius to images within `.testimonials`.     |

Explanation: The `.services .testimonials img` selector styles circular images within the testimonials section.

---

#### CSS Selector: `.services .testimonial-item p`

| Property    | Value   | Explanation                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------------- |
| margin-top  | 2.25rem | Adds top margin of 2.25 rem (36 pixels) to paragraphs within `.testimonial-item`.     |
| line-height | 1.5rem  | Sets the line height of paragraphs within `.testimonial-item` to 1.5 rem (24 pixels). |
| color       | #787976 | Sets the text color to a light gray for paragraphs within `.testimonial-item`.        |
| font-style  | italic  | Applies italic style to text within paragraphs within `.testimonial-item`.            |

Explanation: The `.services .testimonial-item p` selector styles text paragraphs within testimonial items.

---

#### CSS Selector: `.services .testimonial-item h4`

| Property   | Value                                      | Explanation                                                                                    |
| ---------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| font       | 700 1rem/1.375rem 'Montserrat', sans-serif | Defines the font properties for `h4` elements within `.testimonial-item`.                      |
| color      | #484a46                                    | Sets the text color to a dark gray for `h4` elements within `.testimonial-item`.               |
| margin-top | -2rem                                      | Adds a negative top margin of -2 rem (-32 pixels) to `h4` elements within `.testimonial-item`. |

Explanation: The `.services .testimonial-item h4` selector styles subheadings within testimonial items.

### In `contact.css`

Certainly! Here's the explanation for the provided CSS code:

---

#### CSS Selector: `.section-title`

| Property | Value                                           | Explanation                                                                                                                                                                                                                                |
| -------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| color    | #14bf98                                         | Sets the text color to a greenish color (#14bf98) for elements with the class `.section-title`.                                                                                                                                            |
| font     | 500 0.8125rem/1.125rem 'Montserrat', sans-serif | Defines the font properties for elements with the class `.section-title`. It sets the font weight to 500, font size to 0.8125 rem (13 pixels), line height to 1.125 rem (18 pixels), and uses the 'Montserrat' and sans-serif font family. |

Explanation: The `.section-title` selector styles headings with a greenish color and specific font properties.

---

#### CSS Selector: `.call_me`

| Property         | Value         | Explanation                                                                                                                                    |
| ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| padding          | 10rem 12rem   | Adds padding of 10 rem (160 pixels) on the top and bottom and 12 rem (192 pixels) on the left and right to elements with the class `.call_me`. |
| background-color | #153e52       | Sets the background color to a dark blueish color (#153e52) for elements with the class `.call_me`.                                            |
| display          | flex          | Uses a flexbox layout for elements with the class `.call_me`.                                                                                  |
| flex-direction   | row           | Arranges children of elements with the class `.call_me` in a horizontal row.                                                                   |
| justify-content  | space-between | Creates space between children of elements with the class `.call_me`.                                                                          |

Explanation: The `.call_me` selector styles a section with padding, a dark blue background, and horizontal layout.

---

#### CSS Selector: `.call_me .content` and `.call_me .form`

| Property    | Value | Explanation                                                                                                                          |
| ----------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| color       | #fff  | Sets the text color to white (#fff) for elements with the classes `.call_me .content` and `.call_me .form`.                          |
| width       | 45%   | Sets the width of elements with the classes `.call_me .content` and `.call_me .form` to 45% of their container.                      |
| flex-grow   | 0     | Prevents flex items from growing beyond their initial size for elements with the classes `.call_me .content` and `.call_me .form`.   |
| flex-shrink | 0     | Prevents flex items from shrinking beyond their initial size for elements with the classes `.call_me .content` and `.call_me .form`. |

Explanation: The `.call_me .content` and `.call_me .form` selectors style content and form elements within the `.call_me` section, setting their text color, width, and flex behavior.

---

#### CSS Selector: `.call_me .content h3`

| Property      | Value                                         | Explanation                                                                                                                                                                                                                                                      |
| ------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines the font properties for `h3` elements within elements with the class `.call_me .content`. It sets the font weight to 700, font size to 1.75 rem (28 pixels), line height to 2.125 rem (34 pixels), and uses the 'Montserrat' and sans-serif font family. |
| margin-bottom | 1.375rem                                      | Adds a bottom margin of 1.375 rem (22 pixels) to `h3` elements within elements with the class `.call_me .content`.                                                                                                                                               |

Explanation: The `.call_me .content h3` selector styles headings within the content of the `.call_me` section.

---

#### CSS Selector: `.call_me .content p`

| Property      | Value   | Explanation                                                                                                   |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| line-height   | 1.5rem  | Sets the line height of paragraphs within elements with the class `.call_me .content` to 1.5 rem (24 pixels). |
| color         | #ebe8e8 | Sets the text color to a light gray for paragraphs within elements with the class `.call_me .content`.        |
| margin-bottom | 1rem    | Adds a bottom margin of 1 rem (16 pixels) to paragraphs within elements with the class `.call_me .content`.   |

Explanation: The `.call_me .content p` selector styles text paragraphs within the content of the `.call_me` section.

---

#### CSS Selector: `.call_me .content ul`

| Property        | Value | Explanation                                                                                   |
| --------------- | ----- | --------------------------------------------------------------------------------------------- |
| padding         | 0     | Removes padding from unordered lists within elements with the class `.call_me .content`.      |
| list-style-type | none  | Removes list bullets from unordered lists within elements with the class `.call_me .content`. |

Explanation: The `.call_me .content ul` selector styles unordered lists within the content of the `.call_me` section, removing padding and list bullets.

---

#### CSS Selector: `.call_me .content ul li:before`

| Property | Value   | Explanation                                                     |
| -------- | ------- | --------------------------------------------------------------- |
| content  | '\25a0' | Uses a square bullet symbol as content before list items within |

elements with the class `.call_me .content ul li`. |
| color | #14bf98 | Sets the color of the square bullet to a greenish color (#14bf98). |
| margin-right | 5px | Adds a 5-pixel margin to the right of the square bullet. |
| font-size | 1.25rem | Sets the font size of the square bullet to 1.25 rem (20 pixels). |

Explanation: The `.call_me .content ul li:before` selector styles list item markers with square bullets and specific styling.

---

#### CSS Selector: `.call_me .content ul li`

| Property      | Value    | Explanation                                                                                                          |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| margin-bottom | 0.375rem | Adds a bottom margin of 0.375 rem (6 pixels) to list items within elements with the class `.call_me .content ul li`. |
| color         | #dfe5ec  | Sets the text color to a light gray for list items within elements with the class `.call_me .content ul li`.         |

Explanation: The `.call_me .content ul li` selector styles list items within the content of the `.call_me` section, adding a bottom margin and setting the text color.

---

#### CSS Selector: `.underline`

| Property        | Value     | Explanation                                                                              |
| --------------- | --------- | ---------------------------------------------------------------------------------------- |
| text-decoration | underline | Adds an underline text decoration to elements with the class `.underline`.               |
| cursor          | pointer   | Changes the cursor to a pointer when hovering over elements with the class `.underline`. |

Explanation: The `.underline` selector styles elements with underlined text and a pointer cursor on hover.

---

#### CSS Selector: `.call_me form`

| Property       | Value  | Explanation                                                                          |
| -------------- | ------ | ------------------------------------------------------------------------------------ |
| display        | flex   | Uses a flexbox layout for forms within elements with the class `.call_me`.           |
| flex-direction | column | Arranges form elements in a column layout within elements with the class `.call_me`. |
| gap            | 1.5rem | Adds vertical spacing of 1.5 rem (24 pixels) between form elements.                  |

Explanation: The `.call_me form` selector styles forms within the `.call_me` section, arranging form elements in a column layout with vertical spacing.

---

#### CSS Selector: `.call_me form .terms-container label`

| Property | Value                                         | Explanation                                                                                                                                                                                            |
| -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| color    | #ebe8e8                                       | Sets the text color to a light gray for labels within elements with the class `.call_me form .terms-container`.                                                                                        |
| font     | 400 0.875rem/1.375rem 'Open Sans', sans-serif | Defines the font properties for labels. It sets the font weight to 400, font size to 0.875 rem (14 pixels), line height to 1.375 rem (22 pixels), and uses the 'Open Sans' and sans-serif font family. |

Explanation: The `.call_me form .terms-container label` selector styles labels within a container in the form, setting their text color and font properties.

---

#### CSS Selector: `button[type='submit']`

| Property | Value                                | Explanation                                                                                                                                                              |
| -------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| font     | 700 0.75rem 'Montserrat', sans-serif | Defines the font properties for submit buttons. It sets the font weight to 700, font size to 0.75 rem (12 pixels), and uses the 'Montserrat' and sans-serif font family. |

Explanation: The `button[type='submit']` selector styles submit buttons, defining their font properties.

---

#### CSS Selector: `.call_me form input` and `.call_me select`

| Property         | Value                                    | Explanation                                                                                                                           |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| background-color | #2a5d77                                  | Sets the background color to a bluish color (#2a5d77) for input fields and selects within elements with the class `.call_me`.         |
| color            | #fff                                     | Sets the text color to white (#fff) for input fields and selects within elements with the class `.call_me`.                           |
| padding          | 0.75rem 1.5rem                           | Adds padding of 0.75 rem (12 pixels) on the top and bottom and 1.5 rem (24 pixels) on the left and right to input fields and selects. |
| border-radius    | 5px                                      | Applies a border radius of 5 pixels to input fields and selects.                                                                      |
| border           | 1px solid var(--form-input-border-color) | Sets a 1-pixel solid border for input fields and selects with a color variable `--form-input-border-color`.                           |

Explanation: The `.call_me form input` and `.call_me

select`selectors style input fields and select elements within the`.call_me` section, defining their appearance, including background color, text color, padding, border, and border radius.

### In `projects.css`

#### CSS Selector: .projects

| Property         | Value      | Explanation                                                                  |
| ---------------- | ---------- | ---------------------------------------------------------------------------- |
| padding          | 5rem 10rem | Adds 5rem of padding on the top and bottom, and 10rem on the left and right. |
| background-color | #fff       | Sets the background color to white.                                          |

Explanation: The `.projects` selector applies styling to a container for projects, setting padding and background color.

---

#### CSS Selector: .projects > span, .projects > h3

| Property   | Value  | Explanation                                               |
| ---------- | ------ | --------------------------------------------------------- |
| display    | block  | Makes both `span` and `h3` elements block-level elements. |
| text-align | center | Centers the text horizontally.                            |

Explanation: These rules apply to the `span` and `h3` elements within the `.projects` container, making them block-level and centering their text.

#### CSS Selector: .projects > span

| Property      | Value | Explanation                                 |
| ------------- | ----- | ------------------------------------------- |
| margin-bottom | 10px  | Adds a 10px margin at the bottom of `span`. |

Explanation: This rule adds a margin at the bottom of the `span` element inside the `.projects` container.

---

#### CSS Selector: .projects > h3

| Property  | Value   | Explanation                         |
| --------- | ------- | ----------------------------------- |
| color     | #484a46 | Sets the text color to a dark gray. |
| font-size | 1.75rem | Sets the font size to 1.75rem.      |
| margin    | 0       | Removes margin around `h3` element. |

Explanation: These rules style the `h3` element within `.projects`, including color, font size, and removing margin.

---

#### CSS Selector: .projects .category-list-container ul

| Property        | Value  | Explanation                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| display         | flex   | Makes the unordered list a flex container.                   |
| flex-direction  | row    | Sets the direction of flex items to row.                     |
| gap             | 1rem   | Adds a 1rem gap between flex items.                          |
| padding         | 3rem 0 | Adds padding of 3rem on top and bottom, 0 on left and right. |
| list-style-type | none   | Removes list bullets.                                        |
| align-items     | center | Vertically centers items within the flex container.          |
| justify-content | center | Horizontally centers items within the flex container.        |
| margin          | 0      | Removes margin around the unordered list.                    |

Explanation: These rules style the unordered list within `.projects .category-list-container`, making it a centered flex container.

#### CSS Selector: .projects .category-list-container ul button

| Property         | Value             | Explanation                                       |
| ---------------- | ----------------- | ------------------------------------------------- |
| background-color | #ebe8e8           | Sets the background color to a light gray.        |
| color            | #484a46           | Sets the text color to a dark gray.               |
| border           | 1px solid #ebe8e8 | Adds a 1px solid border with the same gray color. |
| padding          | 0.5rem 1rem       | Adds padding to the button.                       |
| border-radius    | 5px               | Rounds the corners with a 5px radius.             |
| margin           | 0                 | Removes margin around the button.                 |

Explanation: These rules style the buttons within `.projects .category-list-container ul`, including background, text color, padding, and border.

#### CSS Selector: .projects .category-list-container ul button:hover

| Property         | Value   | Explanation                                            |
| ---------------- | ------- | ------------------------------------------------------ |
| background-color | #14bf98 | Changes the background color on hover to a teal color. |
| color            | #fff    | Sets the text color to white on hover.                 |

Explanation: These rules apply when hovering over the buttons, changing their background and text color.

---

#### CSS Selector: .projects .category-list-container ul button.active

| Property         | Value   | Explanation                                           |
| ---------------- | ------- | ----------------------------------------------------- |
| background-color | #14bf98 | Sets the background color to teal for active buttons. |
| color            | #fff    | Sets the text color to white for active buttons.      |

Explanation: These rules style active buttons with a teal background and white text.

---

#### CSS Selector: .projects .project-list-container

| Property              | Value          | Explanation                                       |
| --------------------- | -------------- | ------------------------------------------------- |
| display               | grid           | Sets the display to grid.                         |
| grid-template-rows    | repeat(2, 1fr) | Defines two rows with equal fractional space.     |
| grid-template-columns | repeat(4, 1fr) | Defines four columns with equal fractional space. |
| margin-bottom         | 3rem           | Adds a margin of 3rem at the bottom.              |

Explanation: These rules create a grid layout for the project list with specified rows and columns.

---

#### CSS Selector: .projects .project-list-container div

| Property | Value  | Explanation                               |
| -------- | ------ | ----------------------------------------- |
| overflow | hidden | Hides overflowing content within the div. |

Explanation: This rule hides overflowing content within div elements inside the `.projects .project-list-container`.

---

#### CSS Selector: .projects .project-list-container .project-item

| Property            | Value   | Explanation                                       |
| ------------------- | ------- | ------------------------------------------------- |
| object-fit          | contain | Scales the image to fit within the container.     |
| object-position     | center  | Positions the image in the center.                |
| background-position | center  | Positions the background image in the center.     |
| aspect-ratio        | 1/1     | Maintains an aspect ratio of 1:1 for the element. |

Explanation: These rules apply to project items, controlling the positioning and aspect ratio of the images.

---

#### CSS Selector: .projects .project-item

| Property   | Value            | Explanation                      |
| ---------- | ---------------- | -------------------------------- |
| transition | 0.3s ease-in-out | Adds a smooth transition effect. |

Explanation: This rule adds a smooth transition effect to elements with the `.projects .project-item` class.

---

#### CSS Selector: .projects .project-item:hover

| Property  | Value           | Explanation                               |
| --------- | --------------- | ----------------------------------------- |
| transform | scale(1.1)      | Scales the element to 1.1 times its size. |
| cursor    | pointer         | Changes the cursor to a pointer.          |
| filter    | brightness(75%) | Reduces the brightness of the element.    |

Explanation: These rules apply when hovering over project items, scaling them, changing the cursor,

---

and adjusting brightness.

#### CSS Selector: .projects .project-item.p-1, .projects .project-item.p-2, .projects .project-item.p-3, .projects .project-item.p-4, .projects .project-item.p-5, .projects .project-item.p-6, .projects .project-item.p-7, .projects .project-item.p-8

| Property         | Value                                     | Explanation                                           |
| ---------------- | ----------------------------------------- | ----------------------------------------------------- |
| background-image | url('../assets/project-1.jpg') and others | Sets the background image for specific project items. |

Explanation: These rules assign background images to specific project items based on their class.

---

#### CSS Selector: .projects .project-item p

| Property      | Value                               | Explanation                                              |
| ------------- | ----------------------------------- | -------------------------------------------------------- |
| height        | 100%                                | Sets the height of the element to 100% of its container. |
| width         | 100%                                | Sets the width of the element to 100% of its container.  |
| display       | grid                                | Sets the display to grid.                                |
| place-content | center                              | Centers the content both horizontally and vertically.    |
| font          | 700 1.1rem 'Montserrat', sans-serif | Defines font properties.                                 |
| color         | #fff                                | Sets the text color to white.                            |
| opacity       | 0                                   | Makes the element initially transparent.                 |

Explanation: These rules style the text within project items, centering it, setting the font, color, and initial opacity.

---

#### CSS Selector: .projects .project-item:hover p

| Property | Value | Explanation                            |
| -------- | ----- | -------------------------------------- |
| opacity  | 0.9   | Increases the opacity to 0.9 on hover. |

Explanation: This rule changes the opacity of the text within project items on hover.

### In `team.css`

#### Selector: .team

| Property | Value | Explanation                           |
| -------- | ----- | ------------------------------------- |
| padding  | 10rem | Adds 10rem of padding to the element. |

Explanation: The `.team` selector adds a large amount of padding to the element.

---

#### Selector: .team > h4

| Property      | Value                                         | Explanation                                           |
| ------------- | --------------------------------------------- | ----------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray.                   |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines the font properties, including size and type. |
| text-align    | center                                        | Centers the text horizontally.                        |
| margin-bottom | 0.75rem                                       | Adds a 0.75rem margin at the bottom.                  |

Explanation: These rules style the `h4` element within `.team`, including color, font, text alignment, and margin.

---

#### Selector: .team > p

| Property      | Value   | Explanation                               |
| ------------- | ------- | ----------------------------------------- |
| color         | #787976 | Sets the text color to a light gray.      |
| text-align    | center  | Centers the text horizontally.            |
| line-height   | 1.5rem  | Defines the line height for the text.     |
| margin-bottom | 3.5rem  | Adds a large 3.5rem margin at the bottom. |
| width         | 75%     | Sets the width to 75% of the container.   |
| margin        | 0 auto  | Centers the element horizontally.         |

Explanation: These rules style the `p` element within `.team`, including color, text alignment, line height, width, and margin.

---

#### Selector: .team .team-member-list-container

| Property        | Value         | Explanation                                                  |
| --------------- | ------------- | ------------------------------------------------------------ |
| display         | flex          | Makes the container a flex container.                        |
| flex-direction  | row           | Sets the direction of flex items to row.                     |
| justify-content | space-between | Distributes space evenly between flex items.                 |
| padding         | 3rem 0        | Adds padding of 3rem on top and bottom, 0 on left and right. |

Explanation: These rules style the `.team-member-list-container` within `.team`, making it a horizontally spaced flex container.

---

#### Selector: .team .team-member-list-container .team-member-item

| Property       | Value  | Explanation                                          |
| -------------- | ------ | ---------------------------------------------------- |
| width          | 20%    | Sets the width of the items to 20%.                  |
| flex-grow      | 0      | Prevents items from growing to fill available space. |
| flex-wrap      | 0      | Prevents items from wrapping to the next row.        |
| display        | flex   | Makes the items flex containers.                     |
| flex-direction | column | Sets the direction of flex items to column.          |
| align-items    | center | Centers items vertically within the flex container.  |

Explanation: These rules style the individual team member items within `.team .team-member-list-container`, including width, flex behavior, and alignment.

---

#### Selector: .team .team-member-item img

| Property        | Value  | Explanation                                    |
| --------------- | ------ | ---------------------------------------------- |
| width           | 100%   | Sets the image width to 100% of its container. |
| border-radius   | 5px    | Rounds the image corners with a 5px radius.    |
| object-fit      | cover  | Scales the image to cover its container.       |
| object-position | center | Positions the image in the center.             |

Explanation: These rules style the images within the team member items, including width, border-radius, and object properties.

---

#### Selector: .team .team-member-item p

| Property      | Value                                         | Explanation                                       |
| ------------- | --------------------------------------------- | ------------------------------------------------- |
| color         | #787976                                       | Sets the text color to a light gray.              |
| margin-top    | 2rem                                          | Adds a 2rem margin at the top.                    |
| margin-bottom | 0.25rem                                       | Adds a small 0.25rem margin at the bottom.        |
| font          | 400 1.125rem/1.625rem 'Open Sans', sans-serif | Defines font properties, including size and type. |

Explanation: These rules style the text paragraphs within team member items, including color, margins, and font properties.

---

#### Selector: .team .team-member-item h5

| Property      | Value                                      | Explanation                                       |
| ------------- | ------------------------------------------ | ------------------------------------------------- |
| margin-bottom | 0.75rem                                    | Adds a 0.75rem margin at the bottom.              |
| color         | #484a46                                    | Sets the text color to a dark gray.               |
| font          | 700 1rem/1.375rem 'Montserrat', sans-serif | Defines font properties, including size and type. |

Explanation: These rules style the `h5` elements within team member items, including margins, color, and font properties.

---

#### Selector: .team .team-member-item .social-links

| Property | Value  | Explanation                              |
| -------- | ------ | ---------------------------------------- |
| display  | flex   | Makes the social links a flex container. |
| gap      | 0.5rem | Adds a 0.5rem gap between social links.  |

Explanation: These rules style the social links within team member items, making them a flex container with a gap between links.

---

#### Selector: .team .team-member-item .social-links span

| Property | Value   | Explanation                      |
| -------- | ------- | -------------------------------- |
| padding  | 0.75rem | Adds padding to the links.       |
| cursor   | pointer | Changes the cursor to a pointer. |
| color    | #fff    | Sets the text color to white.    |

Explanation: These rules style the individual social links within team member items, including padding, cursor, and text color. The color changes on hover to a teal color.

### In `about.css`

#### CSS Selector: .about

| Property        | Value        | Explanation                                       |
| --------------- | ------------ | ------------------------------------------------- |
| display         | flex         | Makes the element a flex container.               |
| flex-wrap       | wrap         | Allows flex items to wrap to the next line.       |
| margin          | 10vh 7vw     | Sets margin on top and sides with viewport units. |
| justify-content | space-around | Distributes space evenly between flex items.      |

Explanation: The `.about` selector creates a flex container with wrapping, margin, and space distribution.

---

#### CSS Selector: .about > div

| Property | Value | Explanation                                  |
| -------- | ----- | -------------------------------------------- |
| width    | 500px | Sets a fixed width of 500px for the element. |

Explanation: This rule applies a fixed width of 500px to the child `div` elements within `.about`.

---

#### CSS Selector: .about-content > h6, .contact > div > h6

| Property       | Value                                           | Explanation                                       |
| -------------- | ----------------------------------------------- | ------------------------------------------------- |
| color          | #14bf98                                         | Sets the text color to a teal color.              |
| font           | 500 0.8125rem/1.125rem 'Montserrat', sans-serif | Defines font properties, including size and type. |
| margin-bottom  | 0.5rem                                          | Adds a 0.5rem margin at the bottom.               |
| text-transform | uppercase                                       | Transforms text to uppercase.                     |

Explanation: These rules style `h6` elements within `.about-content` and `.contact` sections, including color, font, margin, and text transformation.

---

#### CSS Selector: .about-content > h2, .contact > div > h2

| Property      | Value                                         | Explanation                                       |
| ------------- | --------------------------------------------- | ------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray.               |
| font          | 700 1.75rem/2.125rem 'Montserrat', sans-serif | Defines font properties, including size and type. |
| margin-bottom | 1.375rem                                      | Adds a 1.375rem margin at the bottom.             |

Explanation: These rules style `h2` elements within `.about-content` and `.contact` sections, including color, font, and margin.

---

#### CSS Selector: .about-content > p, .contact > div > p, .contact > div > .location, .contact > div > .contacts

| Property      | Value   | Explanation                             |
| ------------- | ------- | --------------------------------------- |
| color         | #787976 | Sets the text color to a light gray.    |
| line-height   | 1.5rem  | Defines the line height for the text.   |
| margin-bottom | 1rem    | Adds a 1rem margin at the bottom.       |
| width         | 75%     | Sets the width to 75% of the container. |

Explanation: These rules style `p`, `.location`, `.contacts` elements within `.about-content` and `.contact` sections, including color, line height, margin, and width.

---

#### CSS Selector: .about-content > ul

| Property    | Value  | Explanation                             |
| ----------- | ------ | --------------------------------------- |
| list-style  | none   | Removes list bullets.                   |
| line-height | 1.8rem | Defines the line height for list items. |

Explanation: This rule removes list bullets and sets the line height for `ul` elements within `.about-content`.

---

#### CSS Selector: .about-content > ul > li

| Property | Value    | Explanation                               |
| -------- | -------- | ----------------------------------------- |
| position | relative | Makes the list items relative positioned. |
| color    | #787976  | Sets the text color to a light gray.      |

Explanation: These rules style `li` elements within the `ul` of `.about-content`, including relative positioning and color.

---

#### CSS Selector: .about-content > ul > li::before

| Property | Value   | Explanation                          |
| -------- | ------- | ------------------------------------ |
| content  | '◼'     | Adds a bullet symbol as content.     |
| color    | #12bf98 | Sets the color of the bullet symbol. |

Explanation: This rule adds a custom bullet symbol before each list item within `.about-content`.

---

#### CSS Selector: .about-feedback

| Property        | Value         | Explanation                                  |
| --------------- | ------------- | -------------------------------------------- |
| display         | flex          | Makes the element a flex container.          |
| justify-content | space-between | Distributes space evenly between flex items. |
| margin-top      | 1.5rem        | Adds a margin of 1.5rem at the top.          |

Explanation: This rule styles the `.about-feedback` section with flex, space distribution, and top margin.

---

#### CSS Selector: .about-feedback > div > h1

| Property | Value                                         | Explanation                                       |
| -------- | --------------------------------------------- | ------------------------------------------------- |
| color    | #14bf98                                       | Sets the text color to a teal color.              |
| font     | 700 2.875rem/3.25rem 'Montserrat', sans-serif | Defines font properties, including size and type. |

Explanation: This rule styles `h1` elements within `.about-feedback`, including color and font properties.

---

#### CSS Selector: .about-feedback > div > div > p

| Property    | Value                                      | Explanation                                       |
| ----------- | ------------------------------------------ | ------------------------------------------------- |
| color       | #787976                                    | Sets the text color to a light gray.              |
| font        | 400 1rem/1.5625rem 'Open Sans', sans-serif | Defines font properties, including size and type. |
| margin-left | 0.5rem                                     | Adds a left margin of 0.5rem.                     |
| font-size   | 0.875rem                                   | Sets the font size to 0.875rem.                   |
| line-height | 1.25rem                                    | Sets the line height to 1.25rem.                  |

Explanation: These rules style `p` elements within `.about-feedback`, including color, font, margin, font size, and line height.

---

#### CSS Selector: .about-feedback > div

| Property    | Value  | Explanation                                         |
| ----------- | ------ | --------------------------------------------------- |
| display     | flex   | Makes the element a flex container.                 |
| align-items | center | Centers items vertically within the flex container. |

Explanation: This rule styles the child `div` elements within `.about-feedback`, making them flex containers and centering items vertically.

---

#### CSS Selector: .about-image img

| Property        | Value   | Explanation                                     |
| --------------- | ------- | ----------------------------------------------- |
| border-radius   | 0.25rem | Rounds the image corners with a 0.25rem radius. |
| object-fit      | cover   | Scales the image to cover its container.        |
| background-size | cover   | Sets the background size to cover.              |
| max-width       | 525px   | Sets the maximum width of the image to 525px.   |

Explanation: These rules style images within `.about-image`, including border radius, scaling, and maximum width.

---

#### CSS Selector: .contact

| Property        | Value         | Explanation                                  |
| --------------- | ------------- | -------------------------------------------- |
| margin          | 10rem         | Sets a large margin of 10rem on all sides.   |
| display         | flex          | Makes the element a flex container.          |
| flex-wrap       | wrap          | Allows flex items to wrap to the next line.  |
| justify-content | space-between | Distributes space evenly between flex items. |

Explanation: These rules style the `.contact` section with margin, flex, wrapping, and space distribution.

---

#### CSS Selector: .contact-form, .contact-details

| Property | Value | Explanation                                   |
| -------- | ----- | --------------------------------------------- |
| width    | 500px | Sets a fixed width of 500px for the elements. |

Explanation: These rules apply a fixed width of 500px to both `.contact-form` and `.contact-details`.

---

#### CSS Selector: .contact-details h3

| Property      | Value                                         | Explanation                                       |
| ------------- | --------------------------------------------- | ------------------------------------------------- |
| color         | #484a46                                       | Sets the text color to a dark gray.               |
| font          | 700 1.375rem/1.75rem 'Montserrat', sans-serif | Defines font properties, including size and type. |
| margin-bottom | 1rem                                          | Adds a 1rem margin at the bottom.                 |
| margin-top    | 2.25rem                                       | Adds a margin of 2.25rem at the top.              |

Explanation: This rule styles `h3` elements within `.contact-details`, including color, font, and margins.

---

#### CSS Selector: .icons

| Property | Value   | Explanation                          |
| -------- | ------- | ------------------------------------ |
| color    | #14bf98 | Sets the text color to a teal color. |

Explanation: This rule sets the text color to teal for elements with the `.icons` class.

---

#### CSS Selector: .contacts > span

| Property        | Value     | Explanation                    |
| --------------- | --------- | ------------------------------ |
| text-decoration | underline | Adds an underline to the text. |

Explanation: This rule adds an underline to `span` elements within `.contacts`.

---

#### CSS Selector: .location, .contacts

| Property   | Value | Explanation                       |
| ---------- | ----- | --------------------------------- |
| margin-top | 10px  | Adds a margin of 10px at the top. |

Explanation: This rule adds a small margin at the top for elements with the `.location` and `.contacts` classes.

---

#### CSS Selector: .hexagon-group

| Property | Value | Explanation                         |
| -------- | ----- | ----------------------------------- |
| display  | flex  | Makes the element a flex container. |

Explanation: This rule makes the `.hexagon-group` a flex container.

---

#### CSS Selector: .contact .hexagon

| Property            | Value                            | Explanation                                   |
| ------------------- | -------------------------------- | --------------------------------------------- |
| background-image    | url(../assets/hexagon-green.svg) | Sets a background image.                      |
| background-position | center                           | Positions the background image in the center. |
| background-repeat   | no-repeat                        | Prevents the background image from repeating. |
| width               | 50px                             | Sets a width of 50px.                         |
| height              | 50px                             | Sets a height of 50px.                        |
| margin-left         | 8px                              | Adds a margin of 8px on the left.             |
| transition          | 0.3s ease-in-out                 | Adds a smooth transition effect.              |

Explanation: These rules style elements with the `.hexagon` class, including background, dimensions, margin, and a transition effect on hover.

---

#### CSS Selector: .contact .hexagon > i

| Property  | Value  | Explanation                   |
| --------- | ------ | ----------------------------- |
| font-size | 1.5rem | Sets the font size to 1.5rem. |

Explanation: This rule sets the font size for `i` elements within `.hexagon`.

---

#### CSS Selector: .hexagon:hover

| Property   | Value | Explanation                                     |
| ---------- | ----- | ----------------------------------------------- |
| background | #fff  | Changes the background color on hover to white. |
| width      | 50px  | Sets a width of 50px on hover.                  |
| height     | 50px  | Sets a height of 50px on hover.                 |

Explanation: These rules apply when hovering over elements with the `.hexagon` class, changing the background color and dimensions.

---

#### CSS Selector: .contact-form input[type='text'], input[type='email'], textarea

| Property         | Value             | Explanation                                              |
| ---------------- | ----------------- | -------------------------------------------------------- |
| outline          | none              | Removes the outline when focused.                        |
| border           | 1px solid #dadada | Sets a 1px solid border.                                 |
| border-radius    | 0.25rem           | Rounds the corners with a 0.25rem radius.                |
| background-color | #fff              | Sets the background color to white.                      |
| color            | #787976           | Sets the text color to a light gray.                     |
| width            | 100%              | Sets the width to 100% of the container.                 |
| display          | block             | Makes the elements block-level.                          |
| padding          | 0.8rem 1rem       | Adds padding of 0.8rem on top and bottom, 1rem on sides. |
| margin           | 1rem 0px          | Adds margin of 1rem on top and bottom, 0px on sides.     |

Explanation: These rules style input text fields and textarea elements within the contact form, including border, radius, color, width, padding, and margin.

---

#### CSS Selector: .checkbox

| Property | Value  | Explanation                |
| -------- | ------ | -------------------------- |
| display  | inline | Makes the elements inline. |

Explanation: This rule makes elements with the `.checkbox` class inline.

---

#### CSS Selector: .contact-form span

| Property  | Value   | Explanation                          |
| --------- | ------- | ------------------------------------ |
| color     | #787976 | Sets the text color to a light gray. |
| font-size | 0.8rem  | Sets the font size to 0.8rem.        |

Explanation: This rule styles `span` elements within the contact form, including color and font size.

---

#### CSS Selector: .contact-form button

| Property   | Value  | Explanation                         |
| ---------- | ------ | ----------------------------------- |
| width      | 100%   | Sets the width to 100%.             |
| margin-top | 1.5rem | Adds a margin of 1.5rem at the top. |

Explanation: This rule styles the submit button within the contact form, including width and top margin.

---

#### CSS Selector: .contact-form > form > span > span

| Property        | Value     | Explanation                    |
| --------------- | --------- | ------------------------------ |
| text-decoration | underline | Adds an underline to the text. |

Explanation: This rule adds an underline to nested `span` elements within the contact form.

---

#### CSS Selector: footer

| Property         | Value         | Explanation                                             |
| ---------------- | ------------- | ------------------------------------------------------- |
| display          | flex          | Makes the element a flex container.                     |
| justify-content  | space-between | Distributes space evenly between flex items.            |
| background-color | #113448       | Sets the background color to a dark blue.               |
| padding          | 7rem 10rem    | Adds padding of 7rem on top and bottom, 10rem on sides. |
| color            | #dfe5ec       | Sets the text color to a light gray.                    |

Explanation: These rules style the footer, making it a flex container with space distribution, background color, padding, and text color.

---

#### CSS Selector: footer h2

| Property      | Value                                         | Explanation                                       |
| ------------- | --------------------------------------------- | ------------------------------------------------- |
| font          | 700 1.375rem/1.75rem 'Montserrat', sans-serif | Defines font properties, including size and type. |
| margin-bottom | 0.75rem                                       | Adds a 0.75rem margin at the bottom.              |

Explanation: This rule styles `h2` elements within the footer, including font and margin.

---

#### CSS Selector: footer a

| Property        | Value     | Explanation                          |
| --------------- | --------- | ------------------------------------ |
| text-decoration | none      | Removes text decoration.             |
| color           | #dfe5ec   | Sets the text color to a light gray. |
| display         | block     | Makes the elements block-level.      |
| text-decoration | underline | Adds an underline to the text.       |
| line-height     | 1.9rem    | Sets the line height to 1.9rem.      |

Explanation: These rules style anchor links within the footer, removing text decoration, setting color, making them block-level, adding underline on hover, and setting line height.

---

#### CSS Selector: footer > div:nth-child(1)

| Property | Value | Explanation            |
| -------- | ----- | ---------------------- |
| width    | 45%   | Sets the width to 45%. |

Explanation: This rule applies a width of 45% to the first child `div` within the footer.
