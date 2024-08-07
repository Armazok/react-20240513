import {Button} from 'components/Button';


export const SelectRestaurants = ({restaurants, onClickSelectTab}) => {
    return (
        <>
            {!!restaurants && restaurants.map(({id, name}) => {
                    return (
                        <Button key={id} onClick={() => onClickSelectTab(id)}>
                            {name}
                        </Button>
                    )
                }
            )}
        </>
    );
};
