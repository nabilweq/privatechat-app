# Chateyyu Private chat application

Here is the deployed link [Chateyyu](https://chateyyu.netlify.app/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I had used latest React libraries like - Hooks for frontend, and for backend i had used firebase for authentication, and for storing the data I used firebase firestore.
At the end the backend is completely depended on firebase.

The project is deployed on Netlify. it is a free service to host fronted code.

## App's work flow

- If a person is entering to this app at first time, he need to register by giving Display name, email id and password, then will redirect into Home page (Please not that the user is identified by the Display name here providing).

- Else if a person has an account in this app, he can login by entering email id and password that he had provided earlierly. After he will redirect into Home page.

- In Home page, there is a search bar in the left side, search your friend by entering his display name, that time the friend will be listed below.
Select the friend and start chating.

- We can send text messages, emogies and images also.

- After we typing the messages in the text box at below, need to hit `Send` button to send it.

- At the time of hitting the `Send` button, the message will deliver to the recieptent.

- If a friend messaged you, it will show at the top of the chat lists in left bar.

- You can share this app with your friends and start chating.

## Code base

 - The styling is done by scss. And the complete design elements is present in - /src/style.scss

 - There have 3 pages. 
1. Register
2. login
3. home

 - You can find the codes for these 3 pages at - /src/pages

 - The code for firebase initialization and the firebase modules is at - /src/firebase.js

- Checking if the user is loggined or not is done by react Context. You can see the code at - /src/context

- The images used in project is there in - /src/img

- The project is purely componet based. I did all features by creating components for each. The UI designs is splitted to components. Each api calls and dynamicity is saperately wrote on each components. And the components is there in - /src/components





 
