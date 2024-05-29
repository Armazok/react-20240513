import {useCallback, useReducer} from 'react';
import {Input} from 'components/Input';
import {RatingSelector} from 'components/RatingSelector';
import {Button} from 'components/Button';
import {feedbackFormSlice, initialState} from '../model/slice/feedbackFormSlice.js';
import {setValue} from '../model/actions/actions.js';


export const FeedbackForm = () => {
    const [form, dispatch] = useReducer(feedbackFormSlice, initialState);
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

    console.log('form: ', form)

    const inputFields = [
        {
            label: 'Your name',
            style: {marginLeft: '10px'},
            type: 'text',
            placeholder: 'Your name',
            value: name,
            onChange: handleNameChange
        },
        {
            label: 'Your text',
            style: {marginLeft: '10px'},
            type: 'text',
            placeholder: 'Your text',
            value: text,
            onChange: handleTextChange,
        },
    ];

    return (
        <form>
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                {inputFields.map((fieldProps, index) => (
                    <Input key={index} {...fieldProps} />
                ))}
            </div>

            <div style={{marginBottom: '20px'}}>
                <RatingSelector h3={'Rating'} min={1} max={5} onRatingChange={handleRatingChange}/>
            </div>

            <div>
                <Button onClick={(e) => handleSave(e)}>Save</Button>
            </div>

        </form>
    );
};
