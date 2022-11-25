import './index.scss';
import Sidebar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ()=>{
    return(
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <Outlet/>
        </div>
    </div>
    )
}

export default Layout