import propTypes from 'prop-types';
import style from './Modal.module.css';

export const Modal = ({ enlargeImage, handleClose }) => {
    return (
        <div onClick={() => handleClose()} className={style.Overlay}>
            <div className={style.Modal}>
                <img src={enlargeImage.largeImageURL} alt={enlargeImage.tags} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    image: propTypes.object.isRequired,
    handleClose: propTypes.func.isRequired
};