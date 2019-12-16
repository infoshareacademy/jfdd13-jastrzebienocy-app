import React from "react";
import styles from "./Footer.module.css";

class Privacy extends React.Component {
    render() {
        return (
            <div>
         <div className={styles.privacy}>
      <h1>Polityka prywatności serwisu.</h1>
      <div className={styles.policyText}>
        <p>Polityka prywatności (plików cookies) serwisu.</p>

        <p>
          1. Serwis zbiera w sposób automatyczny tylko informacje zawarte w
          plikach cookies.
        </p>
        <p>
          2. Pliki (cookies) są plikami tekstowymi, które przechowywane są w
          urządzeniu końcowym użytkownika serwisu. Przeznaczone są do
          korzystania ze stron serwisu. Przede wszystkim zawierają nazwę strony
          internetowej swojego pochodzenia, swój unikalny numer, czas
          przechowywania na urządzeniu końcowym.
        </p>
        <p>
          3. Operator serwisu ciasteczka.org.pl jest podmiotem zamieszczającym
          na urządzeniu końcowym swojego użytkownika pliki cookies oraz mającym
          do nich dostęp.
        </p>
        <p>
          4. Operator serwisu ciasteczka.org.pl wykorzystuje pliki (cookies) w
          celu:
        </p>

        <p>
          a) dopasowania zawartości strony internetowej do indywidualnych
          preferencji użytkownika, przede wszystkim pliki te rozpoznają jego
          urządzenie, aby zgodnie z jego preferencjami wyświetlić stronę;
        </p>

        <p>
          b) przygotowywania statystyk pomagających poznaniu preferencji i
          zachowań użytkowników, analiza tych statystyk jest anonimowa i
          umożliwia dostosowanie zawartości i wyglądu serwisu do panujących
          trendów, statystyki stosuje się też do oceny popularności strony;
        </p>

        <p>c) możliwości logowania do serwisu;</p>

        <p>
          d) utrzymania logowania użytkownika na każdej kolejnej stronie
          serwisu.
        </p>

        <p>
          5. Serwis stosuje dwa zasadnicze rodzaje plików (cookies) - sesyjne i
          stałe. Pliki sesyjne są tymczasowe, przechowuje się je do momentu
          opuszczenia strony serwisu (poprzez wejście na inną stronę,
          wylogowanie lub wyłączenie przeglądarki). Pliki stałe przechowywane są
          w urządzeniu końcowym użytkownika do czasu ich usunięcia przez
          użytkownika lub przez czas wynikający z ich ustawień.
        </p>
        <p>
          6. Użytkownik może w każdej chwili dokonać zmiany ustawień swojej
          przeglądarki, aby zablokować obsługę plików (cookies) lub każdorazowo
          uzyskiwać informacje o ich umieszczeniu w swoim urządzeniu. Inne
          dostępne opcje można sprawdzić w ustawieniach swojej przeglądarki
          internetowej. Należy pamiętać, że większość przeglądarek domyślnie
          jest ustawione na akceptację zapisu plików (cookies)w urządzeniu
          końcowym.
        </p>
        <p>
          7. Operator Serwisu informuje, że zmiany ustawień w przeglądarce
          internetowej użytkownika mogą ograniczyć dostęp do niektórych funkcji
          strony internetowej serwisu.
        </p>
        <p>
          8. Pliki (cookies) z których korzysta serwis (zamieszczane w
          urządzeniu końcowym użytkownika) mogą być udostępnione jego partnerom
          oraz współpracującym z nim reklamodawcą.
        </p>
        <p>
          9. Informacje dotyczące ustawień przeglądarek internetowych dostępne
          są w jej menu (pomoc) lub na stronie jej producenta.
        </p>
        <p>
          10. Bardziej szczegółowe informacje na temat plików (cookies) dostępne
          są na stronie ciasteczka.org.pl
        </p>
      </div>
    </div>
    </div>
        )
    }
}

export default Privacy;