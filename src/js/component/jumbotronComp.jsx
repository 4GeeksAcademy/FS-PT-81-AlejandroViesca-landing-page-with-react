import React from "react";

const JumbotronComp = () => {
    return (
        <>
            <div className="card border-0 rounded-1 rounded-top-0 bg-secondary bg-opacity-25">
                <div className="card-body">
                    <h1 className="card-title">A Warm Welcome!</h1>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur.
                    </p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </>
    )
}

export default JumbotronComp;