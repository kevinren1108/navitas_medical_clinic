import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useLocation } from 'react-router-dom';
import * as Icons from 'react-bootstrap-icons';

function NavMenuItem(props) {
    const location = useLocation();
    const { [props.icon]: Icon } = Icons

    return (
        <SidebarMenu.Nav 
            className={location.pathname === "/" + props.name ? 
            "p-3 bg-opacity-50 bg-black w-auto" 
            : 
            'p-3 w-auto'} 
        >
            <SidebarMenu.Nav.Link 
                className='text-white text-decoration-none rounded-2  p-2 w-auto' 
                href={"/" + props.name}
            >
                <SidebarMenu.Nav.Icon className=''>
                    <Icon  style={{width: "1em", height: "21px" }} ></Icon>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className='ps-3'>
                    {props.name.toUpperCase()}
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
        </ SidebarMenu.Nav >
    )
}

export default NavMenuItem