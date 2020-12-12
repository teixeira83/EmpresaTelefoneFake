import React from 'react'
import { Banner, Map, Plans, Footer } from '../../components/index';

export default function Home() {
    return (
        <React.Fragment>
            <Banner />
            <Map />
            <Plans />
            <Footer />
        </React.Fragment>
    )
}

