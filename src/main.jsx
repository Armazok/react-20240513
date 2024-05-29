import {StrictMode} from 'react';
import App from './App.jsx'
import {Layout} from 'components/Layout';
import {ProgressBar} from 'components/ProgressBar';
import ReactDOM from 'react-dom/client'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProgressBar/>
        <div className="wrapper">
            <Layout>
                <main>
                    <App/>
                </main>
            </Layout>
        </div>
    </StrictMode>,
)
