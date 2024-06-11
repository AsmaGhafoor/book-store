import React, { useState, useEffect } from 'react';
import BookItem from "./BooksItem";
import classes from './Css/BookItem.module.css'


const booksData = [
  {
    "author": "Stephen R Covey",
    "id": "b1",
    "imagePath": "https://www.libertybooks.com/image/cache/catalog/Zeeshan%20purchase/9781471165085-640x996.jpg?q6",
    "price": 1295,
    "title": "The 7 Habits Of Highly Effective People"
  },
  {
    "author": "Mark Manson",
    "id": "b2",
    "imagePath": "https://www.libertybooks.com/image/cache/catalog/fuck-640x996.jpg?q6",
    "price": 1150,
    "title": "The Subtle Art Of Not Giving A F*Ck"
  },
  {
    "author": "Danielle Town",
    "id": "b3",
    "imagePath": "https://www.libertybooks.com/image/cache/catalog/84925-640x996.jpg?q6",
    "price": 1646,
    "title": "Invested: How I Learned To Master My Mind"
  },
  {
    "author": "Jim Boulton",
    "id": "b4",
    "imagePath": "https://www.libertybooks.com/image/cache/./100-ideas-that-changed-the-web-9781780673707-640x996.jpg?q6",
    "price": 1946,
    "title": "100 Ideas That Changed The Web"
  }
]
const ShowBook = ()=>{
    const [BooksData, setBooksData] = useState(booksData);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);
    // useEffect(() => {
    //     const FetchBooks =async()=>{
    //         const response = await fetch ('https://react-app-38514-default-rtdb.firebaseio.com/bookStore.json');
    //         if(!response.ok){
    //             throw new Error("Something is Wrong");
    //         }
    //         const responseData = await response.json();
    //         const LoadedBooks = [];
    //         for(const key in responseData){
    //             LoadedBooks.push({
    //                 id:key,
    //                 title: responseData[key].title,
    //                 author : responseData[key].author,
    //                 price:responseData[key].price,
    //                 imagePath:responseData[key].imagePath,
    //             })
    //         } 
    //         console.log(LoadedBooks)
    //         setBooksData(LoadedBooks);
    //         setIsLoading(false);
    //     }
    
    //     FetchBooks().catch((error)=>{
    //         setIsLoading(false);
    //         setHttpError(error.message);
    //     });
    // }, [])
    const BookList = BooksData.map((book)=>(
        <BookItem 
        key={book.id}
        id = {book.id}
        title={book.title}
        author={book.author}
        price ={book.price}
        imagePath= {book.imagePath}
         />
    ));
    if(httpError){
        return (<div className={classes["grid-container"]}>
            <p>{httpError}</p>
            </div>)
    }

    return(<React.Fragment>
             <div className={classes["grid-container"]}>
        {!isLoading ? BookList : <p>Loading...</p>}
            </div>
      </React.Fragment>
    )
};

export default ShowBook;