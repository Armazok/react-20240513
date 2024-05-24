import {restaurants} from './materials/mock.js';
import {Counter} from 'components/Counter';
import {Restaurants} from 'components/Restaurants';
import {useCount} from 'customHooks/useCount/useCount.jsx';
import {useSelectTab} from 'customHooks/useSelectTab/useSelectTab.jsx';
import './App.css';

function App() {
    const {count, minusCount, plusCount} = useCount();
    const [selectedTab, onClickSelectTab] = useSelectTab({initialState: restaurants[0].id});

    return (
        <section>
            <Counter count={count} minusCount={minusCount} plusCount={plusCount}/>
            <Restaurants restaurants={restaurants} selectedTab={selectedTab} onClickSelectTab={onClickSelectTab}/>
        </section>
    )
}

export default App
