import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';


const SharedLayout = () => {

    return (
        <>
            <AppBar/>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
};

export default SharedLayout;