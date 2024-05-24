import {Heading} from 'components/Heading';
import {List} from 'components/List';
import {SelectRestaurants} from 'components/SelectRestaurants';
import {Fragment} from 'react';

export const Restaurants = ({selectedTab, restaurants, onClickSelectTab}) => {
    return (
        <>
            <SelectRestaurants restaurants={restaurants} onClickSelectTab={onClickSelectTab}/>
            {!!restaurants && restaurants.map(({id, name, menu, reviews}) => {
                if (selectedTab === id) {
                    return (
                        <Fragment key={id}>

                            <Heading level={1}>{name}</Heading>

                            {!!menu && (
                                <>
                                    <Heading level={3}>Menu</Heading>
                                    <List
                                        items={menu}
                                        renderItem={({name}) => name}
                                    />
                                </>
                            )}

                            {!!reviews && (
                                <>
                                    <Heading level={3}>Reviews</Heading>
                                    <List
                                        items={reviews}
                                        renderItem={({text}) => text}
                                    />
                                </>
                            )}
                        </Fragment>
                    )
                }
                return null;
            })}
        </>
    );
};
