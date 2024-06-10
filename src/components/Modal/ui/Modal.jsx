import {createPortal} from 'react-dom';
import {Button} from 'components/Button';
import cls from './Modal.module.scss';

export const Modal = ({isOpen, onClose, children}) => {

    const onClickModal = (e) => {
        e.stopPropagation();
    }

    return (
        <div>
            {createPortal(
                <div onClick={onClose} className={`${cls.modalOverlay} ${isOpen ? cls.modalOpen : ''}`}>
                    <div className={`${cls.modal} ${isOpen ? cls.modalContent : ''}`}
                         onClick={(e) => onClickModal(e)}
                    >
                        <div>
                            {children}
                        </div>
                        <Button onClick={onClose}>Отмена</Button>
                    </div>
                </div>,
                document.getElementById('modal')
            )}
        </div>
    );
};
