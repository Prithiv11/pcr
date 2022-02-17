import React from "react";

function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.one}</h5>
                    <h6 className="card-price text-center">{props.data.two}<span class="period">{props.data.three}</span></h6>
                    <hr></hr>
                    <ul className="fa-ul">
                        {props.data.four}
                        {props.data.five}
                        {props.data.six}
                        {props.data.seven}
                        {props.data.eight}
                        {props.data.nine}
                        {props.data.ten}
                        {props.data.eleven}
                    </ul>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card