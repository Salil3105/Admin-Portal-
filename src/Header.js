import React from 'react';
import "../src/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
// import SearchIcon from "@material-ui/core";

function Header() {
    return(
        <div className='header'>

            <div className='header_info'>
                <div className='info'>

                </div>
            </div>

            <div className='header_search'>
                <IconButton>
                    <searchIcon />
                </IconButton>
                <input placeholder="Search here" type="text" name="Search"/>
            </div>

            <div className='header_right'>
                <IconButton>
                    <Avatar  />
                </IconButton>
            </div>

        </div>
    )
}

export default Header;