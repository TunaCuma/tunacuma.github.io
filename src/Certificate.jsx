import "./Certificate.css";

export default function Certificate(props) {
    return (
        <div className="Certificate">
            <img src={props.image} alt="" className="certificateImg" />
            <p>{props.children}</p>
        </div>
    );
}
