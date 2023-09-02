import "./UserThoughts.css";
import { useState } from "react";
import React from "react";

import downLeft from "./assets/downLeft.png";
import downRight from "./assets/downRight.png";

const MAX_VISIBILITY = 5;

export default function UserThoughts({ children }) {
    const [active, setActive] = useState(4);
    const count = React.Children.count(children);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isRightSwipe) {
            if (active > 0) {
                setActive((i) => i - 1);
            } else {
                setActive(count - 1);
            }
        } else if (isLeftSwipe) {
            if (active < count - 1) {
                setActive((i) => i + 1);
            }
        }
        // add your conditional logic here
    };

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
                            pointerEvents: active === i ? "auto" : "none",
                            opacity: i - 1 > active ? "0" : "1",
                            display:
                                Math.abs(active - i) > MAX_VISIBILITY
                                    ? "none"
                                    : "block",
                        }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <div id="LabelandButtonsPanel">
                <h2 className="smallScreenOnly">
                    KULLANICILARIMIZ HAKKIMIZDA NELER DÜŞÜNÜYOR?
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
                        <img src={downLeft} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            if (active < count - 1) {
                                setActive((i) => i + 1);
                            }
                        }}
                    >
                        <img src={downRight} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
