## Google Book Search

This is a full stack React application that allows users to search for their favorite books. Users are able to search the Google Books database using the Google Books API while the favorite and unfavorite buttons populate the MongoDB database to save their selection. Furthermore, users can click on the "view" button that will take them to their selected book's Google Books page where they can view more information about the various titles. 

![Alt Text](google-books.gif)

## Deployed Link
[Visit Deployed Site](https://google-book-search024.herokuapp.com/)


## **Built With**
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-router-dom](https://reactrouter.com/web/guides/quick-start)
* [axios](https://www.npmjs.com/package/axios)
* [Web Vitals](https://web.dev/vitals/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [if-env](https://www.npmjs.com/package/if-env)
* [mongo](https://www.mongodb.com/)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [heroku](https://dashboard.heroku.com/)
______________________________________________________________________________
  
#### **Code Snippet**

While building this application and using the Google Books API we discovered the site would crash when searching for certain titles as not every book had the specified requirements of title, image, author, and description. To prevent this, we implemented a conditional statement that allows books to be selected and favorited even if they were missing authors or descriptions.  
```
function favoriteBook(data) {
    var myBook = {
      title: data.title,
      image: data.image,
      description: data.description,
      link: data.link
    };
    if (!myBook.description || !myBook.author) {
      if (!myBook.description) {
        myBook.description = "No Description"
      }
      if (!data.author) {
        myBook.author = "No Author"
      }
      else {
        myBook.author = data.author[0]
      }
    }
    axiosRoutes.saveBook(myBook)
  }
```
Similarly, not all books have an associated image. Because of this , we implemented a second 
conditional statement in the event that the image was undefined. If the image was undefined, we returned the same data but with a placeholder image instead. 

```
 const results = books.map((book) => {
          if (book.volumeInfo.imageLinks === undefined) {
            return {
              title: book.volumeInfo.title,
              image: "https://via.placeholder.com/130x200.png",
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          } else {
            return {
              title: book.volumeInfo.title,
              image: book.volumeInfo.imageLinks.thumbnail,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              link: book.volumeInfo.infoLink
            };
          }
```
______________________________________________________________________________

### **Author Links**

* **Pamela Gutierrez**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **Peter Ting**
- [Link to Portfolio Site](https://portfolio-mk3.herokuapp.com/)
- [Link to Github](https://github.com/Pting1995) 
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)

* **Gloria C Varela**
* [GitHub Profile Page](https://github.com/gcvarela21)
* [Web Developer Portfoio Website](https://gcvarela21.github.io/glo.digital/)
* [Interactive Design Portfolio Website](https://www.glo.digital/)
* [LinkenIn](https://www.linkedin.com/in/glovarela/)

* **UC Berkeley Coding Bootcamp**
  
______________________________________________________________________________

#### **License**

This project is licensed under the MIT License