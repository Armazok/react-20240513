import {restaurants} from './materials/mock.js';
import {Counter} from 'components/Counter';
import {Restaurants} from 'components/Restaurants';
import './App.css';
import {useCount, useSelectTab} from 'src/customHooks';

function App() {
    const {count, minusCount, plusCount} = useCount({MIN: 0, MAX: 5, initialState: 0});
    const [selectedTab, onClickSelectTab] = useSelectTab({initialState: restaurants[0].id});

    return (
        <section>
            <Counter count={count} minusCount={minusCount} plusCount={plusCount}/>
            <Restaurants restaurants={restaurants} selectedTab={selectedTab} onClickSelectTab={onClickSelectTab}/>
        </section>
    )
}

export default App;
