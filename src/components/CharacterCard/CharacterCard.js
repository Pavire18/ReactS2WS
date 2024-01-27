import './CharacterCard.css';


const CharacterCard = ({name, img,showDetails}) => {

    return (
        <div className='character-card' onClick={showDetails}>
            <img className="character-card__img" src={img}/>
            <p className="character-card__name">{name}</p>
        </div>
    )

}

export default CharacterCard;