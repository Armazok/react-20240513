import {restaurants} from './materials/mock.js';
import {Counter} from 'components/Counter';
import {Restaurants} from 'components/Restaurants';
import {FeedbackForm} from 'components/FeedbackForm';
import {useCount, useSelectTab} from 'src/customHooks';
import {UserContext} from 'components/Provider';
import {useContext} from 'react';

function App() {
    const {count, minusCount, plusCount} = useCount({MIN: 0, MAX: 5, initialState: 0});
    const [selectedTab, onClickSelectTab] = useSelectTab({initialState: restaurants[0].id});
    const [auth] = useContext(UserContext);

    return (
        <section>
            {!!auth
                ? <>
                    <Counter count={count} minusCount={minusCount} plusCount={plusCount}/>
                    <Restaurants
                        restaurants={restaurants}
                        selectedTab={selectedTab}
                        onClickSelectTab={onClickSelectTab}
                    />
                    <FeedbackForm/>
                </>
                : <div>Авторизуйтесь</div>
            }

        </section>
    )
}

export default App;
