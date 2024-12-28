import React from "react";

const Layout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div>
            <h1 className="text-3xl">DASHBOARD</h1>
            <div>{children}</div>
        </div>
    )
}

export default Layout;