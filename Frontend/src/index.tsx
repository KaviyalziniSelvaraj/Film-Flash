import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux';
import Store from "./Redux/Store";
import './index.css';  
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container as HTMLElement);
root.render(
    <Provider store={Store}>  
         <App/>
    </Provider>
);