import Perk from "./Perk";
import "./Perks.css";

export default function Perks() {
    return (
        <div className="Perks">
            <Perk perkIcon="src/assets/money.png">
                Gerçekten <b>İhtiyacınız</b> varsa kredi kullanın.
            </Perk>
            <Perk perkIcon="src/assets/calculator.png">
                Aylık gelir ve giderlerinize göre <b>taksitler</b> belirleyin!
            </Perk>
            <Perk perkIcon="src/assets/decrease.png">
                Ödeme planınızı <b>kısa vadeli</b> olarak düzenleyin!
            </Perk>
            <Perk perkIcon="src/assets/calendar.png">
                Borcunuzu <b>eksiksiz ve zamanında</b> ödeyin!
            </Perk>
        </div>
    );
}
