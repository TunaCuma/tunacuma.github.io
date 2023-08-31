import "./SwipeCard.css";

export default function SwipeCard(props) {
    return (
        <div className="SwipeCard">
            <div className="profile">
                <img src={props.avatar} alt="" className="avatar" />
                <div className="profileData">
                    <h4 className="profileName">{props.profileName}</h4>
                    <h4 className="profileJob">{props.profileJob}</h4>
                </div>
            </div>
            <div>
                <h4 className="postTitle">{props.postTitle}</h4>
                <p>{props.children}</p>
            </div>
        </div>
    );
}
