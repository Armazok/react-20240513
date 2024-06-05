import ReactDOM from 'react-dom/client'
import {StrictMode} from 'react';
import App from 'src/App.jsx'
import {Layout} from 'components/Layout';
import {ProgressBar} from 'components/ProgressBar';
import {ThemesProvider, UserProvider} from 'components/Provider';
import './_global.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <ThemesProvider>
            <UserProvider>
                <div id="modal" style={{position: 'relative', zIndex: 2}}/>
                <div style={{position: 'relative', zIndex: 3}}/>
                <div style={{position: 'relative', zIndex: 4}}/>
                <div className="wrapper">
                    <Layout>
                        <main>
                            <App/>
                        </main>
                    </Layout>
                </div>
            </UserProvider>
            <ProgressBar/>
        </ThemesProvider>
    </StrictMode>
);

