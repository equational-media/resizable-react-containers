# resizable-react-containers
Two side by side content containers, aka "content stages" resizable via the separating bar. In addition, elements inside each stage can be exactly positioned, relative to their outer container, in CSS, and simply. That is, (0, 0) is top left, and negative and high coordinates will overflow. Elements will overflow if their sizes extend beyond the borders. It can be any element, as long as it uses the class **"stage__element"** (or you can see what that class does and use it to write your own).

This UI starting point uses CSS flexbox and React JS.

This example uses React CSS components to style the content stages (ex. background color). However, no reason it couldn't be done directly in CSS. 

Thanks to [https://github.com/1milligram/html-dom/blob/master/public/demo/create-resizable-split-views/index.html/] (https://github.com/1milligram/html-dom/blob/master/public/demo/create-resizable-split-views/index.html/) for the inspiration regarding the geometric resizing logic.

To insall, use `npx create-react-app` or `yarn create` (as described here] (https://create-react-app.dev/docs/getting-started/). Then replace what's in the `src` directory with the files from this repository. 
