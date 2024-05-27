import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Layout} from 'components/Layout';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="wrapper">
            <Layout>
                <main>
                    <App/>
                </main>
            </Layout>
        </div>
    </StrictMode>,
)
