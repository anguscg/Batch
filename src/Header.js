import React from 'react';
import "./Header.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/Face';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
        <IconButton>
            <PeopleAltIcon fontSize="large"/>
        </IconButton>
        <IconButton>
            <MailOutlineIcon fontSize="large"/>
        </ IconButton>
        <IconButton>
            <FaceIcon fontSize="large"/>
        </ IconButton>
        </div>
    )
}

export default Header