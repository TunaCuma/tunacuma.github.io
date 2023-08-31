import "./App.css";
import Perks from "./Perks";
import Certificates from "./Certificates";
import UserThoughts from "./UserThoughts";
import SwipeCard from "./SwipeCard";
import img1 from "src/assets/img1.png";
import img2 from "./assets/img2.png";

function App() {
    return (
        <>
            <div className="bg">
                <div id="circle" className="bg"></div>
            </div>
            <main>
                <Perks></Perks>
                <h3>Bilgileriniz Bizimle Güvende</h3>
                <Certificates></Certificates>
                <UserThoughts>
                    <SwipeCard
                        avatar="src\assets\avatar1.png"
                        profileName="Selim Bey"
                        profileJob="İşletmeci"
                        postTitle='"Kredi hesaplamak artık çok kolay"'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quis laborum pariatur quaerat quae fugiat
                        autem cumque culpa ad quasi dolores praesentium, dolore
                        dolorum mollitia vel neque iure dolorem accusantium.
                    </SwipeCard>
                    <SwipeCard
                        avatar="src\assets\avatar1.png"
                        profileName="Selim Bey"
                        profileJob="İşletmeci"
                        postTitle='"Kredi hesaplamak artık çok kolay"'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quis laborum pariatur quaerat quae fugiat
                        autem cumque culpa ad quasi dolores praesentium, dolore
                        dolorum mollitia vel neque iure dolorem accusantium.
                    </SwipeCard>
                    <SwipeCard
                        avatar="src\assets\avatar1.png"
                        profileName="Selim Bey"
                        profileJob="İşletmeci"
                        postTitle='"Kredi hesaplamak artık çok kolay"'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quis laborum pariatur quaerat quae fugiat
                        autem cumque culpa ad quasi dolores praesentium, dolore
                        dolorum mollitia vel neque iure dolorem accusantium.
                    </SwipeCard>
                    <SwipeCard
                        avatar="src\assets\avatar1.png"
                        profileName="Selim Bey"
                        profileJob="İşletmeci"
                        postTitle='"Kredi hesaplamak artık çok kolay"'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quis laborum pariatur quaerat quae fugiat
                        autem cumque culpa ad quasi dolores praesentium, dolore
                        dolorum mollitia vel neque iure dolorem accusantium.
                    </SwipeCard>
                    <SwipeCard
                        avatar="src\assets\avatar1.png"
                        profileName="Selim Bey"
                        profileJob="İşletmeci"
                        postTitle='"Kredi hesaplamak artık çok kolay"'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quis laborum pariatur quaerat quae fugiat
                        autem cumque culpa ad quasi dolores praesentium, dolore
                        dolorum mollitia vel neque iure dolorem accusantium.
                    </SwipeCard>
                </UserThoughts>
                <div className="Images">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                </div>
            </main>
        </>
    );
}

export default App;
