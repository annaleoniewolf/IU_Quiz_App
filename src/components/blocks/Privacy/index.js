import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'


const Privacy = () => {
    //Auth token
    const { token } = useContext(AuthContext)
    const [authToken] = localStorage.getItem("token")

    return (
        <S.Privacy token={(token || authToken !== null) ? true : false}>
            <S.Container>
                {(token || authToken !== null) ?
                    <NavLink to="/">
                        <S.Icon>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </S.Icon>
                    </NavLink>
                : 
                    <NavLink to="/login">
                        <S.Icon>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </S.Icon>
                    </NavLink>
                }
                <h1>Datenschutz</h1>
                <hr/>
                <h2>Wer wir sind </h2>
                <p>Die Adresse unserer Website ist: https://iu-quiz-app-site.herokuapp.com/login </p>
                <h2>Datenschutzerklärung</h2>
                <p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: Auftraggeber (IU.org) </p>
                <h5>Ihre Betroffenenrechte</h5>
                <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
                <ul>
                    <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                    <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
                    <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
                </ul>
                <p>
                    Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. <br/>
                    Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde. <br/>
                    Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>. 
                </p>
                <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
                <h5>Art und Zweck der Verarbeitung:</h5>
                <p>
                    Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften. <br/>
                    Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a href="https://www.google.com/policies/privacy/ ">https://www.google.com/policies/privacy/ </a>
                </p>
                <h5>Rechtsgrundlage:</h5>
                <p>Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). </p>
                <h5>Empfänger:</h5>
                <p>Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.</p>
                <h5>Speicherdauer:</h5>
                <p>
                    Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts. <br />
                    Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/.">https://www.google.com/policies/privacy/.</a>
                </p>
                <h5>Drittlandtransfer:</h5>
                <p>Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen <a href="https://www.privacyshield.gov/EU-US-Framework.">https://www.privacyshield.gov/EU-US-Framework.</a> </p>
                <h5>Bereitstellung vorgeschrieben oder erforderlich: </h5>
                <p>Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Allerdings kann ggfs. die korrekte Darstellung der Inhalte durch Standardschriften nicht möglich sein.</p>
                <h5>Widerruf der Einwilligung: </h5>
                <p>Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.</p>
                <h2>SSL-Verschlüsselung </h2>
                <p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS. </p>
                <h2>Änderung unserer Datenschutzbestimmungen </h2>
                <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. </p>



            </S.Container>
        </S.Privacy>
    )
}

export default Privacy