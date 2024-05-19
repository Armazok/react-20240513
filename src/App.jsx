import {restaurants} from './materials/mock.js';
import {Header} from '../src/components/Header/Header.jsx';
import {Footer} from '../src/components/Footer/Footer.jsx';
import {Heading} from '../src/components/Heading/Heading.jsx';
import {List} from '../src/components/List/List.jsx';
import './App.css'

function App() {

    return (
        <>
            <Header/>

            {restaurants.map(({id, name, menu, reviews}) => {
                return (
                    <div key={id}>
                        <Heading level={1}>{name}</Heading>

                        <Heading level={3}>Menu</Heading>
                        <List
                            items={menu}
                            renderItem={({name}) => name}
                        />

                        <Heading level={3}>Reviews</Heading>
                        <List
                            items={reviews}
                            renderItem={({text}) => text}
                        />
                    </div>
                )
            })}

            <Footer/>
        </>
    )
}

export default App
