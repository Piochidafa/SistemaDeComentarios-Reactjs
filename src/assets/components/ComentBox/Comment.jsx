import "./Comment.css";

import star from './Assets/svg/star-svgrepo-com.svg'
import like from './Assets/svg/like-svgrepo-com.svg'
import share from './Assets/svg/share-svgrepo-com.svg'
import profile from './Assets/Profile/cosa.png'





export const Comment = ({comentario, NomeDoUsuario}) => {


	return (
		<div className="ContainerComment">
			<div className="Content">
				<div className="FTline">
					<div className="FTp">
                        <div className="ProfInfo">
                        <img className="ProfPic" src={profile} alt="" />
                        <p>{NomeDoUsuario}</p>
                        </div>
						<p className="CTbody">{comentario}</p>
					</div>
					<div className="CTD">
						<p className="CTbody">...</p>
					</div>
				</div>
				    <div className="CTsvgs">
                        <img className="CTSVGL" src={like} alt="Like" />
                        <img className="CTSVGL" src={star} alt="Favoritar" />
                        <img className="CTSVGL" src={share} alt="Compartilhar" />
                    </div>
			</div>
		</div>
	);
};
