import {restaurants} from './materials/mock.js';
import {Restaurants} from 'components/Restaurants';
import {FeedbackForm} from 'components/FeedbackForm';
import {useSelectTab} from 'src/customHooks';
import {UserContext} from 'components/Provider';
import {useContext} from 'react';

function App() {
    const [selectedTab, onClickSelectTab] = useSelectTab({initialState: restaurants[0].id});
    const [auth] = useContext(UserContext);

    return (
        <section>
            {!!auth
                ? <>
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
