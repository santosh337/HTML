# Assignment

## [Live Website Link!](https://nirzon47.github.io/tailwind-responsive-assignment/)

### UI Structure

#### Web UI

<img src="./screenshots/lg.png" width="700px" alt="structure of the UI"  />

#### Tablet UI

<img src="./screenshots/md.jpeg" width="450px" alt="structure of the UI"  />

#### Phone UI

<img src="./screenshots/sm.jpeg" width="250px" alt="structure of the UI"  />

### Header

| Element/Class                                                                          | Description                                                                                                                                                        |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<body class="text-gray-600">`                                                         | Sets the text color to gray.                                                                                                                                       |
| `<header>`                                                                             | Defines the header section of the webpage.                                                                                                                         |
| `<div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">` | A container that centers its content vertically and horizontally. Uses flexbox for layout. Adds padding and changes the layout for medium-sized screens and above. |

Inside the header:

| Element/Class                                                                         | Description                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<a class="flex items-center mb-4 font-medium text-gray-900 cursor-pointer md:mb-0">` | Creates a link with flex layout, aligns items vertically, and adds margin at the bottom. Sets font weight to medium and text color to gray. For medium-sized screens and above, it removes the margin at the bottom. |
| `<svg ...>`                                                                           | SVG image with specific styles (size, padding, background color, rounded corners).                                                                                                                                   |
| `<span class="ml-3 text-xl">Geekster</span>`                                          | Adds margin to the left of the text and sets the text size to extra-large.                                                                                                                                           |

Inside the navigation:

| Element/Class                                                                                                        | Description                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<nav class="flex flex-wrap items-center justify-center md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-500">` | Creates a navigation menu with flex layout, aligning items vertically and horizontally. For medium-sized screens and above, it adds margin to the right, margin to the left, left border, and a gray border color. |
| `<a href="" class="mr-5 hover:text-gray-900">`                                                                       | Creates a navigation link with a margin to the right and a hover effect that changes the text color to gray.                                                                                                       |
| `<button class="flex items-center px-3 py-1 mt-4 bg-gray-100 rounded hover:bg-gray-200 md:mt-0">`                    | Creates a button with flex layout, aligns items vertically, adds padding, margin at the top, background color, and rounded corners. For medium-sized screens and above, it removes the margin at the top.          |

### Section

| Element/Class                                                                                   | Description                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<section>`                                                                                     | Defines a section of the webpage.                                                                                                                                  |
| `<div class="container flex flex-col items-center px-5 py-24 mx-auto text-center md:flex-row">` | A container that centers its content vertically and horizontally. Uses flexbox for layout. Adds padding and changes the layout for medium-sized screens and above. |

Inside the left column:

| Element/Class                                                                                                                | Description                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<div class="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">` | A flex container with column layout, aligns items vertically and centers them horizontally. For medium-sized screens and above, it grows to fill available space, adds padding on the right, and aligns items to the start. |
| `<h1 class="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">`                                                           | Adds margin at the bottom, sets the text size to 3xl, font weight to medium, and text color to gray. For small screens and above, it increases the text size to 4xl.                                                        |
| `<p class="mb-8 leading-relaxed">`                                                                                           | Adds margin at the bottom and sets line height to relaxed.                                                                                                                                                                  |

Inside the button group:

| Element/Class                                                                                 | Description                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<button class="px-6 py-2 text-lg text-white bg-green-500 rounded hover:bg-indigo-600">`      | Creates a button with padding, text size, white text color, green background color, and rounded corners. On hover, it changes the background color to indigo.             |
| `<button class="px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 rounded hover:bg-gray-200">` | Creates another button with padding, text size, gray text color, gray background color, and rounded corners. On hover, it changes the background color to a lighter gray. |

Inside the right column:

| Element/Class                                                           | Description                                                                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `<div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">`                    | Sets the width of the div for different screen sizes.                                                             |
| `<img class="object-cover object-center rounded" alt="hero" src="...">` | Adds styles to the image, making it cover its container while keeping the aspect ratio, and rounding the corners. |
