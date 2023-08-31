import "./App.css";
import Perks from "./Perks";
import Certificates from "./Certificates";
import UserThoughts from "./UserThoughts";
import SwipeCard from "./SwipeCard";

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
                    <img src=".\src\assets\img1.png" alt="" />
                    <img src="\src\assets\img2.png" alt="" />
                    <img src=".\assets\img1.png" alt="" />
                </div>
            </main>
        </>
    );
}

export default App;
