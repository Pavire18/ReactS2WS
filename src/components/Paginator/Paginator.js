import './Paginator.css';

const Paginator = ({page,goPrevius, goNext,totalPages}) =>{
    let buttonNext= page===totalPages ? true : false;
    let buttonPrevius= page!==1 ? false : true;
    return (
        <div className='paginator'>
            <button onClick={goPrevius} className="paginator__btn" disabled={buttonPrevius}>ANTERIOR</button>
            <p className='paginator__page'>{page}</p>
            <button onClick={goNext} className="paginator__btn" disabled={buttonNext}>SIGUIENTE</button>
        </div>
    )
}

export default Paginator;