import React from 'react'
import SidebarMenu, { SidebarMenuCollapse } from 'react-bootstrap-sidebar-menu';
import NavMenuItem from './navMenuItem';

function SideBar() {
    return (
        <div>
            <SidebarMenu className='px-0 min-vh-100' expand={"md"} >
                <SidebarMenuCollapse>

                    <SidebarMenu.Header className='bg-body-tertiary py-3 border-bottom'>
                        <SidebarMenu.Brand href='/' className='text-black text-decoration-none' > 
                            Fictional Medical Clinic 
                        </SidebarMenu.Brand>
                    </SidebarMenu.Header>

                    <SidebarMenu.Body className=' bg-primary opacity-75 ' >
                        <NavMenuItem name={"patient"} icon={"Person"}></NavMenuItem>
                        <NavMenuItem name={"appointment"} icon={"Clock"} ></NavMenuItem>
                        <NavMenuItem name={"schedule"} icon={"Calendar2Week"}></NavMenuItem>
                    </SidebarMenu.Body >
                </SidebarMenuCollapse>
            </SidebarMenu>

        </div>
    )
}

export default SideBar