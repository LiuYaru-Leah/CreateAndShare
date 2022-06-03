<img width="300" alt="image" src="https://user-images.githubusercontent.com/87626822/168064940-5d1bd5e5-bb2c-4882-a6cb-914c0338a8b3.jpeg">

# C&S--Create and Share project

## Technology Stack
react@17.0.2 + react-router-dom@6.3.0 + react-scripts@5.0.0 + axios@0.27.2 + immutable@4.0.0 + redux-immutable@4.0.0 + react-transition-group@4.4.2 + redux@4.2.0 +  redux-thunk@2.4.1 + styled-components@5.3.5 + antd + material UI + mangodb + Hock + bcrypt + cookie-parse + express + Tinymce + fs

### Technology Stack Tree

#### Back-end Tree
<img width="1000" alt="image" src="https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/main/img/tree1.png?token=GHSAT0AAAAAABUCAEOUUUUWGN46DO6KTBWMYUBDKFA">

#### Font-end Tree
<img width="1000" alt="image" src="https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/main/img/tree2.png?token=GHSAT0AAAAAABUCAEOUWZCHOCAXJ6M2T7YSYUBDMQQ">


## Background and Introduction
The 'C&S' project is a text collection web application. 'C&S' means "create and share" It allows users to post records of their literary creations. Their creations can be any form, an essay, a poem, a photograph, etc. We want to provide users with a simple way to manage their work and other convenient services. Users can browse the recommended articles on the home page and mark their favorites. It also allows users to comment, bookmark, and like others’ work.   
In this react project, we put our focus on the react web development the learn react components, which can enrich react related knowledge; Therefore as for the web data; Firstly，we create an api package in the public package in this project and use simulated JSON data to show the effect.
Secondly, we also learn and use MongoDB, express and related technologies to connect the database to deal with the back end issues. So it is a really challenging project; successfully, we finally finish this big project by ourselves.

## Installation the required packages/dependencies
1.  Clone the project in the local respository
2.  Link mongodb
3.  Connect mongodb 
4.  Create a database named test
5.  Open the project in the VSCode
6.  Access into the `server` file in the terminal
7.  Execute `npm install`
8.  Execute `npm start`
9.  Access into the `front` file in teh terminal
10.  Execute `npm install`
11.  Execute `npm start`
- The commend of npm install can install the required components according to package.json in the resulting node_modules folder
- If you encounter the problem of port occupation, you need to remove the proxy in the front-end package.json

## The introduction of the related component
This object uses the below component 
      $ yarn add styled-components
      $ yarn add react-transition-group
      $ yarn add redux
      $ yarn add redux-thunk
      $ yarn add react-redux
      $ yarn add immutable
      $ yarn add redux-immutable
      $ yarn add axios
      
### styled-components
Install the style component to avoid style conflicts, if we introduce index.css in the index.js file, so that the css can also be referenced in the App.js file, which will easily lead to style conflicts, so we need to install the style component to carry out the css layout of the react project, which can avoid style conflicts

### react-transition-group
In this project, we want to add some kind of transition animation to the display and disappearance of a component that can be a good addition to the user experience. Of course, we can implement these transition animations with native CSS, but the React community provides us with react-transition-group to complete the transition animations.   
This library helps us to easily implement the entry and exit animations of our components, and requires additional installation.
### redux
The official definition of it: Redux is a JavaScript state container that provides predictable state management.  

- Redux stores the entire application state (actually, data) in the Store
- The Store holds a state tree.
- The only way for a component to change its state is by calling the dispatch method of the store, which triggers an action that is processed by the corresponding reducer, and the state is updated.
- The component can dispatch the action to the store, instead of notifying other components directly.
- Other components can refresh their views by subscribing to the state in the store.  
The data flow chart. 
<img width="453" alt="image" src="https://user-images.githubusercontent.com/87626822/168093574-186aad52-11d6-4888-b32b-49fa7fc752bc.png">

### immutable
Just like its name means, the user cannot change the value or state of a variable after it has been assigned or the object has been created.

### axios
A front-end communication framework, react does not have communication capabilities, we need to use an additional communication framework to interact with the server.

## Test/Preview
### The home page
It concludes the header left body page and right body page.  
As for header, it contains the logo, search box, login, sign up, and head-portrait.  
For the body part, there are recommend articles and books list.  
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/87626822/168472468-416a6be6-46e1-4b5b-aab1-e6e6ffa9d1d2.png">


### Login Pages
On the login page, we verify the username and password.
<img width="1000" hight="500" alt="image" src="https://user-images.githubusercontent.com/87626822/168477870-551372e2-2eec-433f-bde0-f65c3f804207.png">

### Registe Page
<img width="1000" hight="500" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/blob/df173161aece2c579f081108f50a3597e4f1fb92/img/RegisteFalse">
<img width="1000" hight="500" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/blob/7d00b7baf42d693705c2d5e24471469490c7ba5a/img/RegisteNameRepeat.jpeg">

### The detailed page
It shows the detailed information for the article.
<img width="1000" hight="500" alt="image" src="https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/main/img/ArtileDetail.png?token=GHSAT0AAAAAABUCAEOUOKNQEVOBK2ANMIW2YUA6BMA">

### Book List Page
<img width="1000" hight="500" alt="image" src="https://user-images.githubusercontent.com/87626822/168477961-95350b03-70ce-421f-a374-8c492fc207f6.png">
<img width="1000" hight="500" alt="image" src="https://user-images.githubusercontent.com/87626822/168477986-0808a6e7-fecf-4855-bbad-296f31649285.png">


### Book Detail Page
![image](https://user-images.githubusercontent.com/87626822/168477996-5231f3c5-1cd7-4d6e-bece-b0b6c7a451cc.png)

### Write article page
Users can write the article in this page.
<img width="1000" hight="500" alt="image" src="https://github.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/blob/7d00b7baf42d693705c2d5e24471469490c7ba5a/img/Write1.jpeg">
Upload Pictures
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87626822/168472776-44dc2de1-3103-4ab8-a763-e86c42b4df93.png">

### About
<img width="1440" alt="image" src="https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/project-group-azure-alligators/main/img/About.jpeg?token=GHSAT0AAAAAABUCAEOVU22OEG2KOZIQ5YPIYUBDS4Q">

### Personal Center
![image]()
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87626822/168478018-cc6772af-feac-48f5-acc0-4f8790e152fe.png">


### Personal Article Page
![image](https://user-images.githubusercontent.com/87626822/168478032-ccce62c9-f61f-4990-9248-661ed9b3a4b1.png)
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/87626822/168478032-ccce62c9-f61f-4990-9248-661ed9b3a4b1.png">


## Innovation Points
1. Make a distinction between dynamic and static
2. Use hock instead of traditional methods
3. Avoid sending meaningless requests and improve component performance. Every time you click a search box, the content of the popular search will be requested once, but the content of the popular search only needs to be loaded once, the later loading is meaningless.
4. Use iconfont to load multiple fonts in a text file to improve the performance of the page and reduce the number of requests
5. SCU (ShouldComponentUpdate) optimization Home page data using the connect and store connection, once the store data is changed, the home page of the subcomponents will be re-rendered, that is, render re-execute, regardless of the changed data and subcomponents have no relationship, which will make the performance is lower.
Therefore, the shouldComponentUpdate lifecycle function determines whether the changed data is related to the component. If it's not, it returns false and won't trigger the update.
6. The scroll event is triggered when the progress bar scrolls, which is very frequent, but it is not necessary to trigger the event that often, if it is triggered every 0.5 seconds, that is enough. It is convenient to use the debounce and throttle of the lodash module to achieve anti-jitter and throttle.

## Contributing
- We made a reasonable functional division of labor for the previously discussed requirements
- First of all, the following thing is is our out of the functional diagram
- 
### The necessary functions of our project can be shown into these pages.
<img width="687" alt="image" src="https://user-images.githubusercontent.com/87626822/168478118-52e0389c-e988-4c36-ab38-af57b091994e.png">

### The additional functions of our project
<img width="861" alt="image" src="https://user-images.githubusercontent.com/87626822/168478072-c9bdd449-edc4-4be0-a765-9925f540b061.png">

- Secondly, Our project is a separation of front and back end, Jinyan and Yaru are mainly involved in front-end page layout and production, Baoyi and Xinmiao mainly focus on the back-end technology, but the four project team members have mutual involvement in the whole project.
- The main contribution can be divided into the following situation
- Jinyan Duan: Home page, BookList page, Book Detailed page, About page

- Yaru Liu: Home page, Index page, Detailed page, Login page

- Baoyi Zhai: Login and Register Function, Personal Center Page

- Xinmiao Bai: Write Article page, Detailed page, Write related function pages.
- All of us in the group contributed very much to this project, which was a challenging one.
