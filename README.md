## Welcome!
Hello! My name is Elush and I have provided some explanations throughout the code as well as below. Please feel free to email or call me if you have any questions.

To see the app, run `npm install` and `npm start`.

To test out the utility functions, run `npm test`.

Tech stack includes Typescript, ES6 React, and Sass. 

## Source Code Layout
The code flow starts with `index.ts`, in which I set the routes. All pages, located inside the `pages` directory follow the `DefaultTemplate.tsx` format. This ensures that every page will have a `Header` and a `Footer`, as well as follow the styling set for the content div in between. 

Although this is a simple web app with no additional features, I created generic components, located in the `components` directory, to showcase proper coding principles, DRY. To be honest, I did miss not having the luxury of using popular HTML Frameworks, such as MUI and Blueprint, when creating some of the components, but still was a lot of fun. The fetch call to the Art Institute of Chicago follows the pattern of a generic hook so that other components may call it as well if necessary.

A utils directory is present for simple string manipulation. They are complete with test cases as well. 

## Gallery Page
Every `img` in the Gallery has the `loading="lazy"` attribute to defer loading of images until some conditions are met. The contents of the page are wrapped around `React.Suspense` to ensure all data has been retrieved before rending. 
### Searching
Searching is done within the input search bar with a key down event listener. The event is throttled by a 500 ms debounce to ensure a call is not made for every key press, but in the most likely scenario the user has stopped typing. A message will show up to the user to notify him/her that the images are being fetched (along with a Chicago themed suggestion :)).

### Pagination
Pagination is complete with a previous and next page, along with an "Images Per Page" parameter. This gives the user full control of how much of the data he/she wants to see, but also does not overwhelm the client with anything more than 36 images per page. Although the Art Institute of Chicago has the limit at 100, I put the limit at 36. 

## API Layer
Using the `fetch API`, data is retrieved from the Art Institute of Chicago API. All header parameters are default values except the cache, which is set to `force-cache`. This means that the browser will always use a cached response if a matching entry is found in the cache, ignoring the validity of the response. Thus even if a really old version of the response is found in the cache, it will always be used without validation. Since the art gallery is not changing often, I figured this would be a valid approach. 

## Responsive
To make the web app responsive and mobile friendly, I used the CSS tools of flex, grid, and @media. Flex handles a lot of the spacing and layout concerns between elements, that is naturally responsive. 

The `Gallery` page follows a grid to ensure proper spacing from the edges, no matter how much real estate the browser provides on a desktop or mobile device. 

When that can't always be accomplished, I tried to push CSS media rules at 768px so that the contents of the page do not get too "squished" together. You can find the responsive design in the `Gallery.tsx`, and responsive flex and style changes. To test it out, I used the device toolbar inside of Chrome Dev Tools to switch between iPhone 5, iPhone X, and iPad, as well as play with the responsive dimensions.

## Extras
These are some fun extras that I put in to make the web app much more aesthetically pleasing.
### Landing Page
IMO, every web app looks better with a landing page. A simple purely static HTML page that can be served via pre-rending or server side rendering through a CDN (using Next.js or Gatsby) allows for the user to enjoy a smoother experience with a quicker time to interaction. I used a simple background image with a frosted glass effect to welcome the user. The background image is a `webp`, instead of the traditional `jpeg`, which takes up nearly half the space. Obviously this would not matter for a KB sized photo, but would be a wise optimization if you were do an image dump off all the artwork. 

## Navigation
I know the prompt said no 3rd party libraries but I thought using `react-router-dom` would be okay since it's effects are minimal. I brought it in to separate the landing page with the gallery.

### Dark Mode
In the time of modern web apps, dark mode is a must in every application. It provides the user with a clean look that can match his/her browser. I added it as a small button in the top right inside the toolbar. I set CSS color values at the root as variables and change them with a `dark` class. When the user clicks the dark mode button in the toolbar, the `dark` class is toggled, thus changing all children elements using those CSS variables. 

### String Utils
I originally thought that I would need to take in the artist's name and work and auto capitalize before displaying it. However, I decided to not use the logic since artists have been known to deliberately mess with traditional capitalization methods. Who am I to question art? :) I did leave the logic though since I did spend some time creating it. 

