<script>

</script>

<main>

  <div class="container">

    <div class="course-container">

      <div>
      <h3>Individuelle Online-Kurse</h3>
      <ul>
        <li><span>✔</span> Lernen Sie nach Ihrem eigenen Tempo</li>
        <li><span>✔</span> Persönliche Betreuung</li>
        <li><span>✔</span> Individuelle Live-Sitzungen mit Ihrem Lehrer</li>
      </ul>
      </div>
      <div>
        <div>
          <p><span>🎓</span> Level</p>
          <p style="font-weight:600;">A1, A2, B1, B2, C1, C2</p>
        </div>
        <div>
          <p><span>⌚</span> Beginn</p>
          <p style="font-weight:600;">Jederzeit</p>
        </div>
        <div>
          <p><span>📅</span> Dauer</p>
          <p style="font-weight:600;">4 Wochen je Unterlevel; A1 und A2 12 Wochen jeweils</p>
        </div>
        <div>
          <p><span>⌛</span> Stunden die Woche</p>
          <p style="font-weight:600;">8 Stunden Selbststudium pro Woche 2-4 Live-Sitzungen nach Absprache</p>
        </div>
        <div>
          <p><span>👥</span> Teilnehmer</p>
          <p style="font-weight:600;">Nur Sie und Ihr Dozent</p>
        </div>
        <div>
          <p><span>💻</span> Zugang zur Lernplattform</p>
          <p style="font-weight:600;">Gesamte Kursdauer</p>
        </div>
        <!-- <div>
          <p><span>💳</span> Price</p>
          <p style="font-weight:600;"></p>
        </div> -->
      </div>

      <div class="button-container">
        <a itemprop="email" href="mailto:info@berndteducation.com"><button class="button-32">Kontaktiere Uns</button></a>
      </div>

    </div>

  </div>

</main>

<style>

    main {
      display: flex;
      justify-content: center;
      padding: 0px 20px;
    }

    h3 {
      text-align: center;
    }

    li {
      font-size: 20px;
      list-style-type: none;
    }

    li > span {
      color: green;
    }

    .course-container > div:nth-child(2) > div:nth-child(5) > p > span:nth-child(5) {
      background-color: rgb(131, 131, 255) !important;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(0.85)
    }

    .course-container {
      margin-top: -50px;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: 400;
      max-width: 900px;
      background-color: rgb(255, 255, 255);
      box-shadow: 1px 1px 10px rgb(0, 0, 0);
      border-radius: 15px;
    }

    .course-container > div:nth-child(1) {
      padding: 10px 25px;
    }

    .course-container > div:nth-child(2) {
      padding: 50px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 40px;
      border-top: 1px solid rgba(0, 0, 0, 0.5);
    }


    @media (min-width: 550px) and (max-width: 700px) {
      .course-container > div:nth-child(2) {
        grid-template-columns: auto auto;
      }
    }

    @media (min-width: 450px) and (max-width: 549px) {
      .course-container > div:nth-child(2) {
        grid-template-columns: auto;
      }
    }

    @media (min-width: 350px) and (max-width: 449px) {
      .course-container > div:nth-child(2) {
        grid-template-columns: auto;
      }

    }

    @media (min-width: 250px) and (max-width: 349px) {
      .course-container > div:nth-child(1) {
        padding: 10px 5px;
      }

      .course-container > div:nth-child(2) {
        padding: 25px 25px;
      }

      .course-container > div:nth-child(2) {
        grid-template-columns: auto;
      }

      .course-container > div > ul > li {
        font-size: 15px;
      }

      .course-container > div > div > p  {
        font-size: 15px;
      }

    }






.button-container {
  display: flex;
  justify-content: center;
  padding: 30px;
}


.button-32 {
  background-color: #d6b18c;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 200px;
  box-sizing: border-box;
  border: 1px solid rgba(90, 31, 146, 0.253);
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-32:not(:disabled):hover,
.button-32:not(:disabled):focus {
  outline: 0;
  background: #ffcd9b;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

.button-32:active {
  outline: 0;
  background: #d4ad85;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
  transform: scale(0.98)
}

.button-32:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}

</style>