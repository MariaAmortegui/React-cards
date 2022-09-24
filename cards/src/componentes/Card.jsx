import React from "react";
import {PropTypes } from "prop-types";
import './cards.css';

const Card =({titulo,url,parr,urlpag})=>{
    return(
        <div className="card text-light text-center bg-dark animate__animated animate__backInDown">
            <div className="overflow">
            <img src={url} alt="imagen" className="card-img-top"/>
            </div>
            <div className="card-body border-radius">
                <h4 className="card-tittle">{titulo}</h4>
                <p className="card-text text-primary">
                    {
                        parr ? parr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint hic reiciendis soluta vero reprehenderit ipsam nulla possimus ipsum quia porro voluptatem sit, neque enim quam incidunt animi error debitis accusamus.'
                    }
                </p>
                <a href={urlpag} className="btn btn-outline-primary" target={"_blank"}>¡Show more!</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    url: PropTypes.string,
    Parr: PropTypes.string,
    urlpag: PropTypes.string
}
export default Card;