import noImage from './no-image.jpg';
import CharacterCard from '../CharacterCard/CharacterCard';
import Paginator from '../Paginator/Paginator';
import './CharacterList.css';
import React from 'react';
import CustomModal from '../CustomModal/CustomModal';

const API_URL="https://api.disneyapi.dev/character?page=";



const CharacterList = () => {


    const [page, setPage] = React.useState(1);
    const [characterList, setCharacterList] = React.useState([]);
    const [totalPages, setTotalPages] = React.useState(0);
    const [clickedCharacter, setClickedCharacter] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);



    const goNext = () => {
        setPage(page+1);
    }

    const goPrevius = () => {
        setPage(page-1);
    }

    const showDetails = (id) =>{
        setClickedCharacter(id);
        openModal();
        console.log(id);
    }


    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }

    React.useEffect(() => {
            fetch(`${API_URL}${page}`)
            .then((response) => response.json())
            .then((data) => {
              setCharacterList(data.data);
              setTotalPages(data.info.totalPages);
            })
            .catch((error) => {
                alert("ERROR API");
                console.log(error +" - ERROR API");
            });
      }, [page]);

      return (
        <div className='characters'>
            <h1 className='title'>DISNEYPEDIA</h1>
            <div className='character-list'>
                { characterList.map((character) => {
                let characterImg=character.imageUrl ? character.imageUrl : noImage;
                return(
                    <div key={character._id}>
                        <CharacterCard showDetails={() => showDetails(character._id)} name={character.name} img={characterImg}/>
                    </div>
                )
            })}
            </div>
            <Paginator page={page} goNext={goNext} goPrevius={goPrevius} totalPages={totalPages}/>
            {showModal ? <CustomModal closeModal={closeModal} id={clickedCharacter}/> : ""}
        </div>
      )

}

export default CharacterList;