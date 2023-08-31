import Perk from "./Perk";
import "./Perks.css";
import money from "./assets/money.png";
import calculator from "./assets/calculator.png";
import decrease from "./assets/decrease.png";
import calendar from "./assets/calendar.png";

export default function Perks() {
    return (
        <div className="Perks">
            <Perk perkIcon={money}>
                Gerçekten <b>İhtiyacınız</b> varsa kredi kullanın.
            </Perk>
            <Perk perkIcon={calculator}>
                Aylık gelir ve giderlerinize göre <b>taksitler</b> belirleyin!
            </Perk>
            <Perk perkIcon={decrease}>
                Ödeme planınızı <b>kısa vadeli</b> olarak düzenleyin!
            </Perk>
            <Perk perkIcon={calendar}>
                Borcunuzu <b>eksiksiz ve zamanında</b> ödeyin!
            </Perk>
        </div>
    );
}
