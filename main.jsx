import'./navbar.jsx';
import'./article.jsx';
import'./MainArticle.jsx';
import'./Author.jsx';
function(){
    return(
        <div>
         <Navbar></Navbar>
         <MainArticle topic='development'></MainArticle>
         <AUthor pic="Author.jpg" fullname="bruno teixeira"></AUthor>
         <div className='art'>
            <article topic="development" date="07/02/2020" textrelated='text1'></article>
            <article topic="development" date="06/02/2020" textrelated='text2'></article>
         </div>
        </div>
    )
}
