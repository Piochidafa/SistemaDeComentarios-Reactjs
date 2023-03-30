import "./App.css";
import { Comment } from "./assets/components/ComentBox/Comment";
import { CampoDeComentario } from "./assets/components/CampoDeComentario/CampoDEComentario";
import { useState } from "react";




function App() {


	let value;
	let nomeUsu = 'Junin pocabosta';
	const [isGrande, setIsGrande] = useState(false)
	const [coments, setComents] = useState([])	
	
	function pega(e){value = e.target.value}

	function add() {
		
		setComents([...coments, value])	
	}


	return (
		<div className="App">
			<div className="Com">
				<div>
			 		<CampoDeComentario onChange={pega} onClick={add} NomeDoUsuario={nomeUsu}/>
				</div>
				<div className="Comentarios">
					{coments.map((ma, index) => <Comment key={index} comentario={coments} NomeDoUsuario={nomeUsu} Isgrande={isGrande} />)}
				</div>
			</div>
		</div>
	);
}




export default App;
