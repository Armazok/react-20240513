import {Heading} from 'components/Heading';
import {List} from 'components/List';
import {SelectRestaurants} from 'components/SelectRestaurants';
import {Fragment} from 'react';
import {useCount} from 'customHooks/useCount/useCount.js';
import {Counter} from 'components/Counter/index.js';

export const Restaurants = ({selectedTab, restaurants, onClickSelectTab}) => {
    const {count, minusCount, plusCount} = useCount({MIN: 0, MAX: 5, initialState: 0});

    return (
        <div style={{marginBottom: '30px'}}>
            <SelectRestaurants restaurants={restaurants} onClickSelectTab={onClickSelectTab}/>
            {!!restaurants && restaurants.map(({id, name, menu, reviews}) => {
                if (selectedTab === id) {
                    return (
                        <Fragment key={id}>

                            <Heading level={1}>{name}</Heading>

                            {!!menu && (
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Heading level={3}>Menu</Heading>
                                    <List
                                        items={menu}
                                        renderItem={({id, name}) => (
                                            <div key={id} style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: 20
                                            }}>
                                                <span>{name}</span>
                                                <Counter
                                                    count={count[id] || 0}
                                                    minusCount={() => minusCount(id)}
                                                    plusCount={() => plusCount(id)}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>
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
        </div>
    );
};
