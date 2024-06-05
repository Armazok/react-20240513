import {useCallback, useReducer} from 'react';
import {Input} from 'components/Input';
import {RatingSelector} from 'components/RatingSelector';
import {Button} from 'components/Button';
import {feedbackFormState, initialState} from '../model/state/feedbackFormState.js';
import {setValue} from '../model/actions/actions.js';


export const FeedbackForm = () => {
    const [form, dispatch] = useReducer(feedbackFormState, initialState);
    const {name, text} = form;

    const handleNameChange = useCallback((e) => {
        dispatch(setValue('setName', e.target.value));
    }, [dispatch]);

    const handleTextChange = useCallback((e) => {
        dispatch(setValue('setText', e.target.value));
    }, [dispatch]);

    const handleRatingChange = useCallback((ratingNumber) => {
        dispatch(setValue('setRating', ratingNumber));
    }, [dispatch]);

    const handleSave = useCallback((e) => {
        e.preventDefault();
        dispatch(setValue('resetForm'));
    }, [dispatch]);


    return (
        <form>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                <Input
                    type={'text'}
                    value={text}
                    placeholder={'Your text'}
                    label={'Your text'}
                    onChange={handleTextChange}
                />
                <Input
                    type={'text'}
                    value={name}
                    placeholder={'Your name'}
                    label={'Your name'}
                    onChange={handleNameChange}
                />
            </div>

            <div style={{marginBottom: '20px'}}>
                <RatingSelector h3={'Rating'} min={1} max={5} onRatingChange={handleRatingChange}/>
            </div>

            <Button style={{marginBottom: '20px'}} onClick={(e) => handleSave(e)}>Save</Button>
        </form>
    );
};
