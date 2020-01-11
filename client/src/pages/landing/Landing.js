import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div>
            Landing
            <Link to="/login">Login</Link>
        </div>
    );
}
