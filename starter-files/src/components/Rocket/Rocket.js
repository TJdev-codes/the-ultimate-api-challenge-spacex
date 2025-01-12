import React, { Fragment } from 'react';
import RocketHeader from "../RocketHeader"
import TechInfo from "../TechInfo"
import "./style.scss"

const Rocket = ({ rocket }) => {
    const {id, name, height, cost_per_launch, diameter, stages, engines} = rocket
    return (
    <Fragment>
        <div className="rocket d-flex flex-column align-items-center justify-content-around">
            <RocketHeader id={id} name={name} />
            <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} />
        </div>
            <TechInfo name={engines.type} engine={engines} isEngine />
    </Fragment>
    );
};

export default Rocket;
