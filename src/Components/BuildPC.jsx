import React from "react";
import "../Styles/BuildPC.scss";

export default function BuildPC({ handleBuildPC, money, selectedOption }) {
    return (
        <div className="buildPC">
            <div className="button">
                <button onClick={handleBuildPC}>Start over</button>
            </div>
            <div className="type-pc">
                <span>{selectedOption}</span>
            </div>
            <div className="form-build-PC">
                <span>CPU</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>GPU</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>Motherboard</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>RAM</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>Cooler</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>PSU</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>Storage</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="form-build-PC">
                <span>Case</span>
                <span>PC</span>
                <span>PC</span>
            </div>
            <div className="total-money">
                <span>Total</span>
                <span>{money} $</span>
            </div>
            <div className="button">
                <button onClick={handleBuildPC}>Start over</button>
            </div>
        </div>
    )
}