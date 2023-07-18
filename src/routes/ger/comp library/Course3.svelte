<script>

export let lang
export let background

</script>

<main>
    <div class="container">
        <div class="row">
                    <div class="block">
                        <div>
                            <ul class="infos">
                                <li class="bgr" style="--image: url({background});">
                                    <h3>BE {lang}</h3>
                                </li>
                                <li>
                                    <p>
                                       Lernen Sie {lang} von zu Hause aus 
                                       über Zoom mit qualifizierten Dozenten und einem ansprechenden Lernsystem.
                                    </p>
                                </li>
                                <li>Kleine Gruppen</li>
                                <li>4 Mal pro Woche</li>
                                <li>Von Montag bis Donnerstag</li>
                                    <!-- <li>
                                        <div class="time">
                                            <div>
                                                <p>
                                                8:30am
                                                </p>
                                                <p>
                                                <span style="font-size: 14px; font-weight: 500">to</span>
                                                </p>
                                                <p>
                                                11:30am
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                3pm
                                                </p>
                                                <p>
                                                <span style="font-size: 14px; font-weight: 500">to</span>
                                                </p>
                                                <p>
                                                6pm
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                6:15pm
                                                </p>
                                                <p>
                                                <span style="font-size: 14px; font-weight: 500">to</span>
                                                </p>
                                                <p>
                                                9:15pm
                                                </p>
                                            </div>
                                        </div>
                                    </li> -->
                                <!-- <li>
                                    <p>Price per person:</p>
                                    <h3>265€</h3>
                                </li> -->
                                <!-- <li>
                                    <p>Total hours for 4 weeks:</p>
                                    <h3>48h</h3>
                                </li> -->
                                <li>
                                    <button class="button" style="vertical-align:middle"><a href="/contact"><span>Mach Mit</span></a></button>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>

</main>

<style>

    * {
        font-family: "Poppins",sans-serif;
    }

    main {
    color: #111;
    min-width: auto;
    font-size: 14px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    position: relative;
    padding: 50px 20px;
    }

    .container {
        max-width: 300px;
    }

    .infos {
        text-align: center;
        border: 2px solid #5858585d;
        background-color: white;
        color: #777;
        font-size: 14px;
        padding-left: 0;
        margin: 10px 20px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        border-radius: 15px;
    }

    .bgr {
        background: var(--image);
        /*background: linear-gradient(100deg, rgba(5,6,8,1) 0%, rgba(222,31,38,0.8547794117647058) 55%, rgba(252,206,8,1) 100%);*/
        background-size: 370px 170px;
        background-repeat:no-repeat;
        background-position:center center;
        background-blend-mode: overlay;
        border-radius: 15px 15px 0px 0px;
        background-color: rgba(255, 255, 255, 0.15);
    }

    .bgr > h3 {
        font-size: 30px;
        font-weight: 700;
        text-shadow: 2px 2px 15px rgb(0, 0, 0);
        color:rgb(255, 255, 255);
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: rgb(0, 0, 0);
    }

    .infos li:first-child,
    .infos li:last-child {
        padding: 20px 13px;
    }

    .time {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .time > div {
        padding-bottom: 5px !important;
    }

    .infos > li {
        list-style: none;
        padding: 10px;
    }

    .infos > li + li {
        border-top: 1px solid #f0f0f0;
    }

    span {
        font-size: 10px;
        color: #999;
        font-weight: 300;
    }

    .infos > li:nth-last-child(2) {
        padding: 10px;
    }

    .button {
        display: inline-block;
        border-radius: 4px;
        /*background-color: #f4511e;*/
        background-color: #d6b18c;
        border: none;
        color: #FFFFFF;
        text-align: center;
        padding: 5px;
        width: 170px;
        height: 50px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }

    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -30px;
        transition: 0.4s;
    }

    .button:hover span {
        padding-right: 20px;
    }

    .button:hover span:after {
        opacity: 1;
        right: 0;
    }

    .button > a > span {
        font-size: 24px;
        font-weight: 500;
        color: #FFFFFF;
    }

    h3 {
        font-size: 28px;
        font-weight: 500;
    }

    li {
        font-size: 14px;
    }

    p {
        font-size: 14px;
    }
    li > h3 {
        padding: 0px;
        margin: 0px;
    }

    @media (min-width: 50px) and (max-width: 280px) {

        .infos {
            width: 200px;
            margin: 10px 10px;
        }

        .bgr > h3 {
            font-size: 30px;
            font-weight: 700;
        }

        h3 {
            font-size: 17px;
        }

        p {
            font-size: 12px;
        }

        li {
        font-size: 12px;
        }
    
    }


</style>