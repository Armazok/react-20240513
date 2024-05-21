import {restaurants} from './materials/mock.js';
import {Heading} from 'components/Heading';
import {Button} from 'components/Button';
import {List} from 'components/List';
import {useState} from 'react';
import './App.css'

function App() {

    let [count, setCount] = useState(0);
    let [selectedTab, setSelectedTab] = useState(restaurants[0].id);

    function plusCount() {
        setCount(prevCount => {
            if (prevCount < 5) {
                return ++prevCount;
            }
            return prevCount;
        });
    }

    function minusCount() {
        setCount(prevCount => {
            if (prevCount > 0 && prevCount <= 5) {
                return --prevCount;
            }
            return prevCount;
        });
    }

    const hiddenRestaurant = (id) => {
        setSelectedTab(id);
    };


    return (
        <section>


            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '20px'
            }}>
                <div style={{cursor: 'pointer', fontSize: '30px', userSelect: 'none'}} onClick={plusCount}>+</div>
                <span style={{fontSize: '30px'}}>{count}</span>
                <div style={{cursor: 'pointer', fontSize: '30px', userSelect: 'none'}} onClick={minusCount}>-</div>
            </div>

            {!!restaurants && restaurants.map(({id, name}) => (
                <Button key={id} onClick={() => hiddenRestaurant(id)}>
                    {name}
                </Button>
            ))}


            {!!restaurants && restaurants.map(({id, name, menu, reviews}) => {
                if (selectedTab === id) {
                    return (
                        <div key={id}>

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
                        </div>
                    )
                }
            })}

        </section>
    )
}

export default App
