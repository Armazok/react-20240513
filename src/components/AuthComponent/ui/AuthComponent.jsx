import {useContext} from 'react';
import {Button} from 'components/Button';
import {Modal} from 'components/Modal';
import {SignInForm} from 'components/SignInForm';
import {UserContext} from 'components/Provider';
import {useModalWindow} from 'src/customHooks';

export const AuthComponent = () => {
    const [auth, setAuth] = useContext(UserContext);
    const [isModalOpen, openModal, closeModal] = useModalWindow();

    const signIn = (e) => {
        e.preventDefault();
        setAuth('Nikolay');
        closeModal();
    }

    const signOut = () => {
        setAuth('');
    }

    return (
        <div>
            {!auth
                ? <Button onClick={openModal}>Войти</Button>
                : <Button onClick={signOut}>Выйти</Button>
            }

            {!!isModalOpen &&
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <SignInForm onClick={signIn}/>
                </Modal>
            }
        </div>
    );
};
