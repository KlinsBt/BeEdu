<script>

export let title = "";
export let point1 = "";
export let point2 = "";
export let point3 = "";
export let level = "";
export let level_text = "";
export let start = "";
export let start_text = "";
export let duration = "";
export let duration_text = "";
export let hours = "";
export let hours_text = "";
export let participants = "";
export let participants_text = "";
export let platform = "";
export let platform_text = "";
export let button = "";

</script>










  <div class="container">
    <div class="course-container">
      <div>
        <h3>{title}</h3>
        <ul>
          <li><span>✔</span> {point1}</li>
          <li><span>✔</span> {point2}</li>
          <li><span>✔</span> {point3}</li>
        </ul>
      </div>
      <div>
        <div>
          <p><span>🎓</span> {level}</p>
          <p style="font-weight:600;">{level_text}</p>
        </div>
        <div>
          <p><span>⌚</span> {start}</p>
          <p style="font-weight:600;">{start_text}</p>
        </div>
        <div>
          <p><span>📅</span> {duration}</p>
          <p style="font-weight:600;">{duration_text}</p>
        </div>
        <div>
          <p><span>⌛</span> {hours}</p>
          <p style="font-weight:600;">{hours_text}</p>
        </div>
        <div>
          <p><span>👥</span> {participants}</p>
          <p style="font-weight:600;">{participants_text}</p>
        </div>
        <div>
          <p><span>💻</span> {platform}</p>
          <p style="font-weight:600;">{platform_text}</p>
        </div>
        <!-- <div>
          <p><span>💳</span> Price</p>
          <p style="font-weight:600;"></p>
        </div> -->
      </div>
      <div class="button-container">
        <a itemprop="email" href="mailto:info@berndteducation.com">
          <button class="button-32">{button}</button>
        </a>
      </div>
    </div>
  </div>










<style>

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

@media (min-width: 550px) and (max-width: 700px) {
  .course-container > div:nth-child(2) {
    grid-template-columns: auto auto;
  }
}

@media (min-width: 0px) and (max-width: 549px) {
  .course-container > div:nth-child(2) {
    grid-template-columns: auto;
  }

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
    font-size: 17px;
  }

  .course-container > div > div > p  {
    font-size: 17px;
  }

}

</style>