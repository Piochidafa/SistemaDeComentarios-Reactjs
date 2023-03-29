import "./App.css";
import { Comment } from "./assets/components/ComentBox/Comment";
import { CampoDeComentario } from "./assets/components/CampoDeComentario/CampoDEComentario";
import { useState } from "react";




function App() {


	let value;
	let isGrande = true;
	let nomeUsu = 'Junin pocabosta';

	const [coments, setComents] = useState([])
	
	function pega(e){

		value = e.target.value
	}

	function add() {
		setComents([...coments, value])

	}

	if(coments.length <= 3){
		isGrande = false;
	}


	return (
		<div className="App">
			<div className="Com">
				<div>
			 		<CampoDeComentario onChange={pega} onClick={add} NomeDoUsuario={nomeUsu}/>
				</div>
				<div className="Comentarios">
					{coments.map(ma => <Comment key={ma} comentario={ma} NomeDoUsuario={nomeUsu} Isgrande={isGrande} />)}
				</div>
			</div>
		</div>
	);
}

export default App;
