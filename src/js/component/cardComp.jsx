import React from "react";

const CardComp = (props) => {
    return (
        <div className="card p-0 my-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 cardComp__card">
            <img src={props.img} alt={props.title} className="card-img-top m-0 p-0" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default CardComp;