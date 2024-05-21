<script>

</script>

<main>

  <div class="container">

    <div class="course-container">

      <h4>Course 1</h4>
      <p>Learn German from home via Zoom qualified teachers and an engaging learning system.</p>

      <hr/>

      <ul class="list-container">
        <li>Small groups of 7-10 students</li>
        <li>4 times a week for 3 hours</li>
        <li>From Monday to Thursday</li>
      </ul>

      <hr/>

      <div class="times-container">

        <div class="time">
          <div>
            <p>
              8:30am
            </p>
          </div>
          <div>
            <p>
              <span style="font-size: 17px; font-weight: 500">to</span>
            </p>
          </div>
          <div> 
            <p>
              11:30am
            </p>
          </div>
        </div>

        <div class="time">
          <div>
            <p>
              3pm
            </p>
          </div>
          <div>
            <p>
              <span style="font-size: 17px; font-weight: 500">to</span>
            </p>
          </div>
          <div> 
            <p>
              6pm
            </p>
          </div>
        </div>

        <div class="time">
          <div>
            <p>
              6:15pm
            </p>
          </div>
          <div>
            <p>
              <span style="font-size: 17px; font-weight: 500">to</span>
            </p>
          </div>
          <div> 
            <p>
              9:15pm
            </p>
          </div>
        </div>

      </div>

      <br/>
      <br/>
      <hr/>
      <p id="price">Price per person: <strong>€333</strong></p>
      <p>Total hours for 4 weeks: <strong>48h</strong></p>


      <br/>

      <div class="button-container">
        <a href="mailto:dennyberndt@outlook.de? subject=contact"><button><span>Book Appointment </span></button></a>
      </div>

    </div>

  </div>

</main>

<style>

  main {
    display: flex;
    justify-content: center;
  }

    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    }

    .container > div > p {
        font-size: 20px;
    }

    .course-container {
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: 400;
        padding: 5px 10px 50px 10px;
        max-width: 500px;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 10px rgb(0, 0, 0);
        border-radius: 15px;
    }

    .course-container > * {
        margin-left: 30px;
    }

    main > div.container > div > h4 {
        padding: 50px 50px 20px 50px;
        margin: 0;
    }

    .list-container {
        font-size: 17px;
        font-weight: 400;
    }


    .times-container {
        float: left;
    }

    .time {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 50px 0px 0px;
        float: left;
    }

    .time > div {
        display: flex;
        justify-content: center;
        align-items: center;
        /*padding: 0px 0px 20px 0px;*/
    }

    .time > div > p {
        font-weight: 600;
        font-size: 18px;
    }

    #price {
        padding-top: 20px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }










    .container > div > div.button-container > a > button {
        display: inline-block;
        border-radius: 4px;
        background-color: #f4511e;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 300px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }
      
    .container > div > div.button-container > a > button > span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
      
    .container > div > div.button-container > a > button > span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
      
    body > section.sec-2 > div > div.button-container > a > button:hover span {
        padding-right: 25px;
    }
      
    body > section.sec-2 > div > div.button-container > a > button:hover span:after {
        opacity: 1;
        right: 0;
    }

</style>