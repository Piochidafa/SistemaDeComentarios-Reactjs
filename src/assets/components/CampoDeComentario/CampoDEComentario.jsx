import photo from './Assets/Profile/cosa.png'

import './CampoDEComentario.css'


export const CampoDeComentario = ({onChange ,onClick, NomeDoUsuario}) => {
    return(
        <div className='LGdecomentar'>
            <div className='LPComentario'>
                <img className='PicComentario' src={photo} alt="" />
                <p className='PComentario'>{NomeDoUsuario}</p>
            </div>
            <div className='DVTextarea'>
                <textarea onChange={onChange} className="Txt" />
                <div className='BttDV'>
                    <input className='BttComentario' type="button" onClick={onClick} value='Publicar'/>
                </div>
            </div>
        </div>
    )
}