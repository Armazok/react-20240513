import {useContext} from 'react';
import {Button} from 'components/Button';
import {Modal} from 'components/Modal';
import {SignInForm} from 'components/SignInForm';
import {useModalWindow} from 'src/customHooks';
import {ThemeContext, UserContext} from 'components/Provider';

export const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [auth, setAuth] = useContext(UserContext);
    const [isModalOpen, openModal, closeModal] = useModalWindow();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const signIn = (e) => {
        e.preventDefault();
        setAuth('Nikolay');
        closeModal();
    }

    const signOut = () => {
        setAuth('');
    }

    return (
        <header>
            Header

            {!auth
                ? <Button onClick={openModal}>Войти</Button>
                : <Button onClick={signOut}>Выйти</Button>
            }

            {!!isModalOpen &&
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <SignInForm onClick={signIn}/>
                </Modal>
            }

            <Button onClick={toggleTheme}>Theme Toggle</Button>
        </header>
    );
};
