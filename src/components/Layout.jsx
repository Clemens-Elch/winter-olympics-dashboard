import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <div style={{ padding: "10px" }}>
                    <nav style={{paddingLeft: "25px", display: "flex",  gap: "100px"}}>
                        <Link to="/events">Events</Link>
                        <Link to="/countries">Country Flag Search</Link>
                        <Link to="/reactQuestions">Tasksheet React Questions</Link>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;