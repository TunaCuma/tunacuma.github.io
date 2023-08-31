import "./Certificates.css";
import Certificate from "./Certificate";

export default function Certificates() {
    return (
        <div className="Certificates">
            <Certificate image="src\assets\Etbis.jpeg">
                ETBİS'e Kayıtlı Doğrulanmış Site
            </Certificate>
            <Certificate image="src\assets\isae.png">
                Uluslararası Bağımsız Denetim Güvence Standartı
            </Certificate>
            <Certificate image="src\assets\iso.png">
                Bilgi Güvenliği Yönetim Sistemi Sertifikası
            </Certificate>
            <Certificate image="src\assets\KVKK.jpg">
                Kişisel Verilerin Korunması Kanunu
            </Certificate>
            <Certificate image="src\assets\ssl.png">
                Katman Güvenliği Protokolü
            </Certificate>
        </div>
    );
}
