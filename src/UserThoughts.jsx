import "./UserThoughts.css";
import SwipeCard from "./SwipeCard";
import { useState, useEffect, createElement } from "react";
import React from "react";

const MAX_VISIBILITY = 5;

export default function UserThoughts({ children }) {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className="UserThoughts">
            <div id="SwipeCardsPanel">
                {React.Children.map(children, (child, i) => (
                    <div
                        className="card-container"
                        style={{
                            "--active": i === active ? 1 : 0,
                            "--offset": (active - i) / 3,
                            "--direction": Math.sign(active - i),
                            "--abs-offset": Math.abs(active - i) / 3,
                            "pointer-events": active === i ? "auto" : "none",
                            opacity: i - 1 > active ? "0" : "1",
                            display:
                                Math.abs(active - i) > MAX_VISIBILITY
                                    ? "none"
                                    : "block",
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div id="LabelandButtonsPanel">
                <h2>
                    KULLANICILARIMIZ HAKKIMIZDA <br />
                    NELER DÜŞÜNÜYOR?
                </h2>
                <div className="SwipeButtons">
                    <button
                        onClick={() => {
                            if (active > 0) {
                                setActive((i) => i - 1);
                            } else {
                                setActive(count - 1);
                            }
                        }}
                    >
                        <img src="src\assets\downLeft.png" alt="" />
                    </button>
                    <button
                        onClick={() => {
                            if (active < count - 1) {
                                setActive((i) => i + 1);
                            }
                        }}
                    >
                        <img src="src\assets\downRight.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
