import React from 'react'
import { NavBar, Banner, Map, Plans, Footer } from '../../components/index';

export default function Home() {
    return (
        <React.Fragment>
            <NavBar />
            <Banner />
            <Map />
            <Plans />
            <Footer />
        </React.Fragment>
    )
}

