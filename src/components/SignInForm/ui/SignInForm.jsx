import {Input} from 'components/Input';
import {Button} from 'components/Button';
import cls from './SignInForm.module.scss';

export const SignInForm = ({onClick}) => {


    return (
        <form className={cls.SignInForm}>
            <Input type="text" placeholder="Your Name"/>
            <Button onClick={(e) => onClick(e)}>Войти</Button>
        </form>
    );
};
