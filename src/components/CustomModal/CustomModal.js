import React from 'react';
import Modal from 'react-modal';

const API_URL="https://api.disneyapi.dev/character/"

const CustomModal= ({id,closeModal}) =>{

    const [character, setCharacter] = React.useState({});

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '500px',
          marginRight: 'auto',
          textAlign:'center',
          padding:'60px',
          transform: 'translate(-50%, -50%)',
        },
      }

      React.useEffect(() => {
        fetch(`${API_URL}${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data.data);
        })
        .catch((error) => {
            alert("ERROR API");
            console.log(error +" - ERROR API");
        });
  }, []);

    return (
        <Modal
          id="test"
          contentLabel="modalA"
          closeTimeoutMS={150}
          isOpen={true}
          style={customStyles}
          onRequestClose={closeModal}>
          <h1>{character.name}</h1>
          <img src={character.imageUrl}/>
          {character.allies?.length!==0 ? <p><strong>Aliados:</strong>{character.allies?.join(" - ")}</p> : ""}
          {character.enemies?.length!==0 ? <p><strong>Enemigos:</strong>{character.enemies?.join(" - ")}</p> : ""}
          {character.films?.length!==0 ? <p><strong>Películas:</strong>{character.films?.join(" - ")}</p> : ""}
          {character.parkAttractions?.length!==0 ? <p><strong>Atracciones:</strong>{character.parkAttractions?.join(" - ")}</p> : ""}
          {character.shortFilms?.length!==0 ? <p><strong>Cortos:</strong>{character.shortFilms?.join(" - ")}</p> : ""}
          {character.tvShows?.length!==0 ? <p><strong>Series de TV:</strong>{character.tvShows?.join(" - ")}</p> : ""}
          {character.videoGames?.length!==0 ? <p><strong>Videojuegos:</strong>{character.videoGames?.join(" - ")}</p> : ""}
        </Modal>
      );
}



export default CustomModal;