import "./Perk.css";

export default function Perk(props) {
    return (
        <div className="Perk">
            <img src={props.perkIcon} alt="" className="perkIcon" />
            <div className="PerkDesc">{props.children}</div>
        </div>
    );
}
