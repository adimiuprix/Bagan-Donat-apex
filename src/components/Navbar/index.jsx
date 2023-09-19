import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Index() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar expand="md" className='mb-2'>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/dashboard'>
                            Dashboard
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default Index;