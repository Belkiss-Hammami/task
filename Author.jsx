import './AUthor.css';

function Author({pic,fullname}){
    return(
        <div className='Author'>

        <div>< img src={pic} alt="error"/></div>
        <div><h1>{fullname}</h1></div>

        </div>
    );
}
export default AUthor