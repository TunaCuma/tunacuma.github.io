import "./Certificates.css";
import Certificate from "./Certificate";
import etbis from "./assets/Etbis.jpeg";
import isae from "./assets/isae.png";
import iso from "./assets/iso.png";
import kvkk from "./assets/KVKK.jpg";
import ssl from "./assets/ssl.png";

export default function Certificates() {
    return (
        <div className="Certificates">
            <Certificate image={etbis}>
                ETBİS'e Kayıtlı Doğrulanmış Site
            </Certificate>
            <Certificate image={isae}>
                Uluslararası Bağımsız Denetim Güvence Standartı
            </Certificate>
            <Certificate image={iso}>
                Bilgi Güvenliği Yönetim Sistemi Sertifikası
            </Certificate>
            <Certificate image={kvkk}>
                Kişisel Verilerin Korunması Kanunu
            </Certificate>
            <Certificate image={ssl}>Katman Güvenliği Protokolü</Certificate>
        </div>
    );
}
