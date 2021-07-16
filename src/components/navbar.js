import React from 'react';
import { Link } from 'gatsby';


export default function Navbar() {
    return (
        <nav>
            <div className= "links">
                <Link to= "/">Home</Link>
            </div>
        </nav>
    )
}