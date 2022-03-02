# 21 MERN: Book Search Engine

BrowseTheBooks is a book search engine initially created with restful API, which was then replaced with graphQL built & Apollo Server. GraphQL an open-source data query language for APIs, allowing us to fetch only the data we want from the database when we need it.

Users can search for books using the input field, displaying the book’s title, author, description, image, and a link to that book on the Google Books site. Users are provided the option to login/sign up with username, email address, and password which will provide them the ability to save books as needed.

This app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 


## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Technologies
* HTML, CSS, Javascript
* React
* Node.js
* Express.js
* GraphQL API
* JSON Web Token
* Apollo Server + Apollo Provider
* MongoDB + Mongoose 
* Heroku

## URLs
* Code: https://github.com/aubreyross/BrowseTheBooks
* Deployed: https://browsethebooks.herokuapp.com/


## Preview
![Screen Shot 2022-02-28 at 4 41 32 AM](https://user-images.githubusercontent.com/87405979/156309772-014b23a7-34e9-4eff-a1d1-930fecb5675b.png)

![Screen Shot 2022-03-02 at 12 50 27 AM](https://user-images.githubusercontent.com/87405979/156310018-fd70b2e1-5c67-4791-ab43-e717055d5e8a.png)



## Resources
* Project 3: ART-underground
* Student Mini Project
* ReadMe Requirements
* https://coding-boot-camp.github.io/full-stack/
* https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas
* https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas
* https://graphql.org/learn/queries/
* https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e
* A special thank you to the BCS learning assistant - Chris - that helped me solve the connectivity issues due to a bug in the recent apollo-express version
  






