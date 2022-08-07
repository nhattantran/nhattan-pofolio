import React from "react";
import Footer from "../component/Footer.js";
import Header from "../component/Header.js";

function Homepage({children}) {
    return (
        <React.Fragment>
            <Header />
            <>
                {children}
            </>
            
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;