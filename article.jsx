import'./artcile.css';
function Article({topic,date,textrelated}){
    return(
        <div className='Article'>
         <h2>{topic}</h2>
        <label>
            <input type="date" value={date}/></label>
        </ br>
        <h3>{textrelated}</h3>

        </div>
    );
}
export default  article
