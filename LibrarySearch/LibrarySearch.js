var AllBooks = [
    {  id:1, author: 'Miguel de Cervantes', title: 'Don Quixote', image: 'https://images-na.ssl-images-amazon.com/images/I/41d-rugLMRL._SL160_.jpg' },
    {  id:2, author: 'Homer', title: 'The Odyssey', image: 'https://images-na.ssl-images-amazon.com/images/I/51cUwb0DUPL._SL160_.jpg' },
    {  id:3, author: 'Leo Tolstoy', title: 'War and Peace', image: 'https://images-na.ssl-images-amazon.com/images/I/510UE7bvHoL._SL160_.jpg' },
    {  id:4, author: 'Dante Alighieri', title: 'The Divine Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/51zYBhmaIML._SL160_.jpg'},
    {  id:5, author: 'William Shakespeare', title:  'Hamlet', image: 'https://images-na.ssl-images-amazon.com/images/I/51xBp-sLaSL._SL160_.jpg'  },
    {  id:6, author: 'Mark Twain', title: ' The Adventures of Huckleberry Finn', image: 'https://images-na.ssl-images-amazon.com/images/I/51iUPRWPE6L._SL160_.jpg'  },
    {  id:7, author: 'F. Scott Fitzgerald', title: 'The Iliad', image: 'http://ecx.images-amazon.com/images/I/512j6byhjvL._SL160_.jpg'  } ,
    {  id:8, author: 'Gabriel Garcia Marquez', title: 'One Hundred Years of Solitude', image: 'https://images-na.ssl-images-amazon.com/images/I/51tkcSAhSDL._SL160_.jpg'  },
    {  id:9, author: 'Fyodor Dostoyevsky', title: 'Crime and Punishment', image: 'https://images-na.ssl-images-amazon.com/images/I/51zZH9paouL._SL160_.jpg'  } ,
    {  id:10, author: 'Jane Austen', title: 'Pride and Prejudice', image: 'https://images-na.ssl-images-amazon.com/images/I/413PzvxFZpL._SL160_.jpg'  }
];


 var Library = React.createClass ({
    render: function (){
    return (
        <li className = "book">
            <img className= "book-image" src = {this.props.image}/>
            <div className= "book-author"> {this.props.author} </div>
            <div className= "book-title"> {this.props.title} </div>
          </li>
        );
     }
 });

 var BookList = React.createClass  ({
     getInitialState: function(){
         return { displayedBooks: AllBooks
         };
     } ,

     handleSearch: function(event) {
     var searchQuery = event.target.value.toLocaleLowerCase();  // то что мы ищем = что ввели и привели к нижнему рег-ру чтобы поиск не зависед от регистра
         var displayedBooks = AllBooks.filter (function(el){    //отображаемые контакты=фильтр-ный массив эл-ов, для кот ф-я вернула true
          var searchAuthor = el.author.toLowerCase();
          var searchTitle = el.title.toLowerCase();
             return  ((searchAuthor.indexOf(searchQuery) !==-1) || (searchTitle.indexOf(searchQuery) !==-1));   //метод indexOf ищет часть строки и возвр -1 если не нашел
         } );

         this.replaceState({
             displayedBooks: displayedBooks       //обновление состояния и перерендер компонента
        }) ;
     },
        render: function () {
            return (
              <div className = "books">
                 <input  type = "text" className = "search-field" onChange={this.handleSearch}/>
                  <ul className = "book-list">   {
                      this.state.displayedBooks.map (function(el) {     // отобр контанты кот находятся в состоянии компонента(что отфильтровали)
                          return  <Library
                                    key = {el.id}
                                    author= {el.author}
                                    title= {el.title}
                                    image = {el.image}
                                                /> ;
                  })   }
                  </ul>
               </div>
                       );//в фигурных скобках можно вставлять JS конструкции
        }
    });
 ReactDOM.render(           // чтобы вывести в html
      <BookList />,       // название компонента
       document.getElementById('app')                     //куда кладем компонент
);
