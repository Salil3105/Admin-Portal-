import React from 'react'
import '../src/Home.css'
// import Header from '../src/Header'
import { Redirect } from 'react-router-dom'
import { Avatar, IconButton } from "@material-ui/core";

function Home({ authorized }) {
    if (!authorized) {
        return (
            <>
                <Redirect to='/login' />
            </>
        );

    }
    else {
        return (
            <>
                <Header />
                <h1>Home Page</h1>
            </>
        );
    }

}

function Header() {
    return (
        <div className='header'>

            <div className='header_info'>
                <div className='info'>

                </div>
            </div>

            <div className='header_search'>
                <IconButton>
                    <searchIcon />
                </IconButton>
                <input placeholder="Search here" type="text" name="Search" />
            </div>

            <div className='header_right'>
                <IconButton>
                    <Avatar />
                </IconButton>
            </div>

        </div>
    );
}

export default Home
