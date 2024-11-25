import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { UsersProvider } from './context/UsersContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <UsersProvider>
                <App />
            </UsersProvider>
        </AuthProvider>
    </BrowserRouter>
) 
