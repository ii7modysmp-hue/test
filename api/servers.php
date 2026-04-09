<style>

    .angry-grid {

        display: grid;

        grid-template-rows: 1fr 1fr;

        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

        gap: 1px;

        justify-content: center;

        align-items: center;

        justify-items: center;

        align-content: center;

        border-bottom: 1px solid #fff;

    }



    .angry-grid a.active {

        border: 2px solid red;

    }



    .tab-pane {

        display: none;

    }



    .tab-pane.active {

        display: block;

    }



    [id*="wwc_room_item_"]:hover {

        background-color: yellow;

        color: black;

    }



    [id*="wwc_room_item_"] a:hover {

        color: black;

    }



    .modal {

        display: none;

        position: fixed;

        top: 0;

        right: 0;

        bottom: 0;

        left: 0;

        padding: 15px;

        overflow: auto;

        background-color: rgba(0, 0, 0, 0.88);

        -webkit-animation-duration: 0.35s;

        animation-duration: 0.35s;

        -webkit-animation-fill-mode: both;

        animation-fill-mode: both;

        -webkit-animation-name: fadeIn;

        animation-name: fadeIn;

        /* Modifiers */

        /* States */

    }



    .modal__dialog {

        position: relative;

        max-width: 500px;

        padding: 20px;

        margin: auto;

        border-radius: 4px;

        background-color: #fff;

    }



    .modal__close {

        position: absolute;

        top: 20px;

        right: 20px;

        padding: 0;

        border: none;

        color: #ccc;

        background-color: transparent;

        background-image: none;

    }



    .modal__close:focus {

        outline: 0;

    }



    .modal__header {

        border-bottom: 1px solid #e2e2e2;

    }



    .modal__title {

        margin: 0 0 15px;

    }



    .modal__content {

        padding: 10px 0;

        font-size: 13px;

        line-height: 1.6;

        color: #555;

    }



    .modal__footer {

        padding-top: 20px;

        border-top: 1px solid #e2e2e2;

        text-align: right;

    }



    .modal--fullscreen {

        padding: 5px;

    }



    .modal--fullscreen .modal__dialog {

        width: 100%;

        max-width: none;

        height: 100%;

        border-radius: 0;

    }



    .modal.is-modal-active {

        display: flex;

    }



    .apoio-aqui {

        display: flex;

        align-content: center;

        justify-content: space-around;

        align-items: center;

        flex-wrap: nowrap;

        flex-direction: row;

        border-bottom: 2px solid #fff;

        padding-bottom: 8px;

    }



    .sprite {

        background-image: url(../../images/flags_region.png);

        background-repeat: no-repeat;

        background-size: 135px 120px;

        display: block;

        margin: 6px 0;

    }



    .sprite-ae-flag {

        width: 40px;

        height: 25px;

        background-position: -3px -4px;

    }



    .sprite-au-flag {

        width: 40px;

        height: 25px;

        background-position: -48px -3px;

    }



    .sprite-br-flag {

        width: 40px;

        height: 25px;

        background-position: -2px -33px;

    }



    .sprite-ca-flag {

        width: 40px;

        height: 25px;

        background-position: -48px -33px;

    }



    .sprite-fr-flag {

        width: 40px;

        height: 25px;

        background-position: -2px -62px;

    }



    .sprite-de-flag {

        width: 40px;

        height: 25px;

        background-position: -48px -62px;

    }



    .sprite-jp-flag {

        width: 40px;

        height: 25px;

        background-position: -48px -92px;

    }



    .sprite-mx-flag {

        width: 40px;

        height: 25px;

        background-position: -92px -3px;

    }



    .sprite-sg-flag {

        width: 40px;

        height: 25px;

        background-position: -92px -33px;

    }



    .sprite-uk-flag {

        width: 40px;

        height: 25px;

        background-position: -92px -92px;

    }



    .sprite-us-flag {

        width: 40px;

        height: 25px;

        background-position: -92px -92px;

    }

</style>





<div id="load_page_apoiador">

    <div class="title-worm-world-connect" style="position: absolute; top: 0; z-index: 1; width: 92%">

        <img src="../../images/favicon64x64.png" width="20" align="center" alt="">

Wormate Friends Turkey

    </div>

    <div style="height: 285px; overflow: auto; border: 1px solid; margin: 6px auto" id="wwc_tabs">

        <div class="angry-grid f32">

            <a href="#tabs0" id="linktab_0">

                <i class="sprite sprite-br-flag"></i>

            </a>

            <a href="#tabs1" id="linktab_1">

                <i class="sprite sprite-us-flag"></i>

            </a>

            <a href="#tabs2" id="linktab_2">

                <i class="sprite sprite-ca-flag"></i>

            </a>

            <a href="#tabs3" id="linktab_3">

                <i class="sprite sprite-mx-flag"></i>

            </a>

            <a href="#tabs4" id="linktab_4">

                <i class="sprite sprite-de-flag"></i>

            </a>

            <a href="#tabs5" id="linktab_5">

                <i class="sprite sprite-fr-flag"></i>

            </a>

            <a href="#tabs6" id="linktab_6">

                <i class="sprite sprite-sg-flag"></i>

            </a>

            <a href="#tabs7" id="linktab_7">

                <i class="sprite sprite-jp-flag"></i>

            </a>

            <a href="#tabs8" id="linktab_8">

                <i class="sprite sprite-au-flag"></i>

            </a>

            <a href="#tabs9" id="linktab_9">

                <i class="sprite sprite-ae-flag"></i>

            </a>

        </div>

        <div class="tab-pane" id="tabs0" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30560/wormy" data-room="1br" data-type="false">

                    <strong>

01 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31713/wormy" data-room="2br" data-type="false">

                    <strong>

02 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31750/wormy" data-room="3br" data-type="false">

                    <strong>

03 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31713/wormy" data-room="4br" data-type="false">

                    <strong>

04 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31750/wormy" data-room="5br" data-type="false">

                    <strong>

05 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30135/wormy" data-room="6br" data-type="false">

                    <strong>

06 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30135/wormy" data-room="7br" data-type="false">

                    <strong>

07 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31975/wormy" data-room="8br" data-type="false">

                    <strong>

08 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31091/wormy" data-room="9br" data-type="false">

                    <strong>

09 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30809/wormy" data-room="10br" data-type="false">

                    <strong>

10 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:32703/wormy" data-room="11br" data-type="false">

                    <strong>

11 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31975/wormy" data-room="12br" data-type="false">

                    <strong>

12 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30135/wormy" data-room="13br" data-type="false">

                    <strong>

13 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30392/wormy" data-room="14br" data-type="false">

                    <strong>

14 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30171/wormy" data-room="15br" data-type="false">

                    <strong>

15 &nbsp;BRAZIL SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com"><img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

            </div>

        </div>


        <div class="tab-pane" id="tabs1" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30407/wormy" data-room="1us" data-type="false">

                    <strong>

01 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:32584/wormy" data-room="2us" data-type="false">

                    <strong>

02 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31750/wormy" data-room="3us" data-type="false">

                    <strong>

03 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32368/wormy" data-room="4us" data-type="false">

                    <strong>

04 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30162/wormy" data-room="5us" data-type="false">

                    <strong>

05 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30296/wormy" data-room="6us" data-type="false">

                    <strong>

06 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32111/wormy" data-room="7us" data-type="false">

                    <strong>

07 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32403/wormy" data-room="8us" data-type="false">

                    <strong>

08 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32465/wormy" data-room="9us" data-type="false">

                    <strong>

09 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32111/wormy" data-room="10us" data-type="false">

                    <strong>

10 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30296/wormy" data-room="11us" data-type="false">

                    <strong>

11 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32746/wormy" data-room="12us" data-type="false">

                    <strong>

12 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30162/wormy" data-room="13us" data-type="false">

                    <strong>

13 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30536/wormy" data-room="14us" data-type="false">

                    <strong>

14 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:31279/wormy" data-room="15us" data-type="false">

                    <strong>

15 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_16" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32091/wormy" data-room="16us" data-type="false">

                    <strong>

16 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_17" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32214/wormy" data-room="17us" data-type="false">

                    <strong>

17 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_18" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30042/wormy" data-room="18us" data-type="false">

                    <strong>

18 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_19" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32746/wormy" data-room="19us" data-type="false">

                    <strong>

19 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_20" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30296/wormy" data-room="20us" data-type="false">

                    <strong>

20 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_21" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30135/wormy" data-room="21us" data-type="false">

                    <strong>

21 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_22" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:30072/wormy" data-room="22us" data-type="false">

                    <strong>

22 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_23" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:31000/wormy" data-room="23us" data-type="false">

                    <strong>

23 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_24" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:31555/wormy" data-room="24us" data-type="false">

                    <strong>

24 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_25" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30407/wormy" data-room="25us" data-type="false">

                    <strong>

25 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_26" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31750/wormy" data-room="26us" data-type="false">

                    <strong>

26 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_27" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30208/wormy" data-room="27us" data-type="false">

                    <strong>

27 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_28" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30332/wormy" data-room="28us" data-type="false">

                    <strong>

28 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_29" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:32746/wormy" data-room="29us" data-type="false">

                    <strong>

29 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_30" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30703/wormy" data-room="30us" data-type="false">

                    <strong>

30 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_31" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31026/wormy" data-room="31us" data-type="false">

                    <strong>

31 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_32" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31142/wormy" data-room="32us" data-type="false">

                    <strong>

32 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_33" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31211/wormy" data-room="33us" data-type="false">

                    <strong>

33 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_34" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31311/wormy" data-room="34us" data-type="false">

                    <strong>

34 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_35" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31516/wormy" data-room="35us" data-type="false">

                    <strong>

35 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_36" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32053/wormy" data-room="36us" data-type="false">

                    <strong>

36 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_37" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32212/wormy" data-room="37us" data-type="false">

                    <strong>

37 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_38" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sao-a.wormate.io:31163/wormy" data-room="38us" data-type="false">

                    <strong>

38 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_39" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32500/wormy" data-room="39us" data-type="false">

                    <strong>

39 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_40" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30809/wormy" data-room="40us" data-type="false">

                    <strong>

40 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_41" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30725/wormy" data-room="41us" data-type="false">

                    <strong>

41 &nbsp;USA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs2" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30162/wormy" data-room="1ca" data-type="false">

                    <strong>

01 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31091/wormy" data-room="2ca" data-type="false">

                    <strong>

02 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31230/wormy" data-room="3ca" data-type="false">

                    <strong>

03 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31282/wormy" data-room="4ca" data-type="false">

                    <strong>

04 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31290/wormy" data-room="5ca" data-type="false">

                    <strong>

05 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30135/wormy" data-room="6ca" data-type="false">

                    <strong>

06 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30165/wormy" data-room="7ca" data-type="false">

                    <strong>

07 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30339/wormy" data-room="8ca" data-type="false">

                    <strong>

08 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:31084/wormy" data-room="9ca" data-type="false">

                    <strong>

09 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:30786/wormy" data-room="10ca" data-type="false">

                    <strong>

10 &nbsp;CANADA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs3" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dal-b.wormate.io:32584/wormy" data-room="1mx" data-type="false">

                    <strong>

01 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30703/wormy" data-room="2mx" data-type="false">

                    <strong>

02 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31211/wormy" data-room="3mx" data-type="false">

                    <strong>

03 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32053/wormy" data-room="4mx" data-type="false">

                    <strong>

04 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32212/wormy" data-room="5mx" data-type="false">

                    <strong>

05 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30135/wormy" data-room="6mx" data-type="false">

                    <strong>

06 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31216/wormy" data-room="7mx" data-type="false">

                    <strong>

07 &nbsp;MEXIKO SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs4" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30055/wormy" data-room="1de" data-type="false">

                    <strong>

01 &nbsp;☾☆ K R D N Z ☾☆ 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/krdnz.jpeg" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31091/wormy" data-room="2de" data-type="false">

                    <strong>

02 &nbsp;👑TC TEAM Ailesi👑 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/tc.jpeg" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32584/wormy" data-room="3de" data-type="false">

                    <strong>

03 &nbsp;𝓨 𝓘⎳⚡ 𝓭 𝓸 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/takimlar100x100/yildo.jpeg" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31038/wormy" data-room="4de" data-type="false">

                    <strong>

04 &nbsp;⭐E R E N R E I S⭐ 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31695/wormy" data-room="5de" data-type="false">

                    <strong>

05 &nbsp;💥H U Y S U Z💥

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30809/wormy" data-room="6de" data-type="false">

                    <strong>

06 &nbsp;💣B O R D O O💣 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30106/wormy" data-room="7de" data-type="false">

                    <strong>

07 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31750/wormy" data-room="8de" data-type="false">

                    <strong>

08 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30265/wormy" data-room="9de" data-type="false">

                    <strong>

09 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31819/wormy" data-room="10de" data-type="false">

                    <strong>

10 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31230/wormy" data-room="11de" data-type="false">

                    <strong>

11 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32054/wormy" data-room="12de" data-type="false">

                    <strong>

12 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30171/wormy" data-room="13de" data-type="false">

                    <strong>

13 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30702/wormy" data-room="14de" data-type="false">

                    <strong>

14 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31163/wormy" data-room="15de" data-type="false">

                    <strong>

15 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_16" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30909/wormy" data-room="16de" data-type="false">

                    <strong>

16 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_17" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30135/wormy" data-room="17de" data-type="false">

                    <strong>

17 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_18" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31392/wormy" data-room="18de" data-type="false">

                    <strong>

18 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_19" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31084/wormy" data-room="19de" data-type="false">

                    <strong>

19 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_20" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30725/wormy" data-room="20de" data-type="false">

                    <strong>

20 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_21" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31533/wormy" data-room="21de" data-type="false">

                    <strong>

21 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_22" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30208/wormy" data-room="22de" data-type="false">

                    <strong>

22 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_23" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30339/wormy" data-room="23de" data-type="false">

                    <strong>

23 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_24" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://hil-a.wormate.io:30213/wormy" data-room="24de" data-type="false">

                    <strong>

24 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_25" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32581/wormy" data-room="25de" data-type="false">

                    <strong>

25 &nbsp;TEAM &amp; TEAM 💥

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            </div>

        </div>

        <div class="tab-pane" id="tabs5" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30140/wormy" data-room="1fr" data-type="false">

                    <strong>

01 &nbsp;🔥G i c i k B e y🔥 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/gicikbey.jpeg" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32703/wormy" data-room="2fr" data-type="false">

                    <strong>

02 &nbsp;💫52 B U Z💫 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://www.wormatefriendsturkey.com/images/yayinci/52buz_tiktok.jpeg" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:31038/wormy" data-room="3fr" data-type="false">

                    <strong>

03 &nbsp;👑M E V O R E I S👑 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://www.wormatefriendsturkey.com/images/yayinci/mevo_tiktok.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31695/wormy" data-room="4fr" data-type="false">

                    <strong>

04 &nbsp;♨️R O O X W A L♨️ 

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/roox.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="5fr" data-type="false">

                    <strong>

05 &nbsp;🎲TIK A K I N C I🎲 🟢

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30106/wormy" data-room="6fr" data-type="false">

                    <strong>

06 &nbsp;👑S I M A V GAMING👑

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31392/wormy" data-room="7fr" data-type="false">

                    <strong>

07 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30327/wormy" data-room="8fr" data-type="false">

                    <strong>

08 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31908/wormy" data-room="9fr" data-type="false">

                    <strong>

09 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32405/wormy" data-room="10fr" data-type="false">

                    <strong>

10 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32577/wormy" data-room="11fr" data-type="false">

                    <strong>

11 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30161/wormy" data-room="12fr" data-type="false">

                    <strong>

12 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31859/wormy" data-room="13fr" data-type="false">

                    <strong>

13 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32611/wormy" data-room="14fr" data-type="false">

                    <strong>

14 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:32650/wormy" data-room="15fr" data-type="false">

                    <strong>

15 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_16" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:32054/wormy" data-room="15fr" data-type="false">

                    <strong>

16 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_17" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:31819/wormy" data-room="15fr" data-type="false">

                    <strong>

17 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_18" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:30265/wormy" data-room="15fr" data-type="false">

                    <strong>

18 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_19" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:30909/wormy" data-room="15fr" data-type="false">

                    <strong>

19 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_20" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wws://gra-a.wormate.io:32223/wormy" data-room="15fr" data-type="false">

                    <strong>

20 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_21" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31123/wormy" data-room="15fr" data-type="false">

                    <strong>

21 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_22" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="15fr" data-type="false">

                    <strong>

22 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_23" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="15fr" data-type="false">

                    <strong>

23 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_24" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32650/wormy" data-room="15fr" data-type="false">

                    <strong>

24 &nbsp;WORMATEFRIENDS

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_25" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://gra-a.wormate.io:30245/wormy" data-room="15fr" data-type="false">

                    <strong>

25 &nbsp;TEAM &amp; TEAM 💥

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs6" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:31764/wormy" data-room="1sg" data-type="false">

                    <strong>

01 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31764/wormy" data-room="2sg" data-type="false">

                    <strong>

02 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30165/wormy" data-room="3sg" data-type="false">

                    <strong>

03 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32212/wormy" data-room="4sg" data-type="false">

                    <strong>

04 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30703/wormy" data-room="5sg" data-type="false">

                    <strong>

05 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31211/wormy" data-room="6sg" data-type="false">

                    <strong>

06 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:32677/wormy" data-room="7sg" data-type="false">

                    <strong>

07 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31026/wormy" data-room="8sg" data-type="false">

                    <strong>

08 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31211/wormy" data-room="9sg" data-type="false">

                    <strong>

09 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:31203/wormy" data-room="10sg" data-type="false">

                    <strong>

10 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31026/wormy" data-room="11sg" data-type="false">

                    <strong>

11 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30809/wormy" data-room="12sg" data-type="false">

                    <strong>

12 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32053/wormy" data-room="13sg" data-type="false">

                    <strong>

13 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:31764/wormy" data-room="14sg" data-type="false">

                    <strong>

14 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30208/wormy" data-room="15sg" data-type="false">

                    <strong>

15 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_16" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31533/wormy" data-room="16sg" data-type="false">

                    <strong>

16 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_17" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31750/wormy" data-room="17sg" data-type="false">

                    <strong>

17 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_18" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32677/wormy" data-room="18sg" data-type="false">

                    <strong>

18 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_19" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31353/wormy" data-room="19sg" data-type="false">

                    <strong>

19 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_20" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32053/wormy" data-room="20sg" data-type="false">

                    <strong>

20 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_21" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:30165/wormy" data-room="21sg" data-type="false">

                    <strong>

21 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_22" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-b.wormate.io:32677/wormy" data-room="22sg" data-type="false">

                    <strong>

22 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_23" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32500/wormy" data-room="23sg" data-type="false">

                    <strong>

23 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_24" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32609/wormy" data-room="24sg" data-type="false">

                    <strong>

24 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_25" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30135/wormy" data-room="25sg" data-type="false">

                    <strong>

25 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_26" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30161/wormy" data-room="26sg" data-type="false">

                    <strong>

26 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_27" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30171/wormy" data-room="27sg" data-type="false">

                    <strong>

27 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_28" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30208/wormy" data-room="28sg" data-type="false">

                    <strong>

28 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_29" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30327/wormy" data-room="29sg" data-type="false">

                    <strong>

29 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_30" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30339/wormy" data-room="30sg" data-type="false">

                    <strong>

30 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_31" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30371/wormy" data-room="31sg" data-type="false">

                    <strong>

31 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_32" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30702/wormy" data-room="32sg" data-type="false">

                    <strong>

32 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_33" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30725/wormy" data-room="33sg" data-type="false">

                    <strong>

33 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_34" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:30786/wormy" data-room="34sg" data-type="false">

                    <strong>

34 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_35" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31084/wormy" data-room="35sg" data-type="false">

                    <strong>

35 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_36" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31091/wormy" data-room="36sg" data-type="false">

                    <strong>

36 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_37" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31163/wormy" data-room="37sg" data-type="false">

                    <strong>

37 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_38" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31230/wormy" data-room="38sg" data-type="false">

                    <strong>

38 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_39" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32584/wormy" data-room="39sg" data-type="false">

                    <strong>

39 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_40" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31908/wormy" data-room="40sg" data-type="false">

                    <strong>

40 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_41" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32405/wormy" data-room="41sg" data-type="false">

                    <strong>

41 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_42" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32577/wormy" data-room="42sg" data-type="false">

                    <strong>

42 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_43" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32356/wormy" data-room="43sg" data-type="false">

                    <strong>

43 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_44" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31908/wormy" data-room="44sg" data-type="false">

                    <strong>

44 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_45" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:32405/wormy" data-room="45sg" data-type="false">

                    <strong>

45 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_46" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://sin-a.wormate.io:31230/wormy" data-room="46sg" data-type="false">

                    <strong>

46 &nbsp;SINGAPORE SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs7" style="display: none">

         <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32609/wormy" data-room="1jp" data-type="false">

                    <strong>

01 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31211/wormy" data-room="1jp" data-type="false">

                    <strong>

02 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


                        <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32053/wormy" data-room="1jp" data-type="false">

                    <strong>

03 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32212/wormy" data-room="1jp" data-type="false">

                    <strong>

04 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30703/wormy" data-room="1jp" data-type="false">

                    <strong>

05 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31026/wormy" data-room="1jp" data-type="false">

                    <strong>

06 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31142/wormy" data-room="1jp" data-type="false">

                    <strong>

07 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30165/wormy" data-room="1jp" data-type="false">

                    <strong>

08 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31311/wormy" data-room="1jp" data-type="false">

                    <strong>

09 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:31516/wormy" data-room="1jp" data-type="false">

                    <strong>

10 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30332/wormy" data-room="1jp" data-type="false">

                    <strong>

11 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:30407/wormy" data-room="1jp" data-type="false">

                    <strong>

12 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32368/wormy" data-room="1jp" data-type="false">

                    <strong>

13 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_14" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32500/wormy" data-room="1jp" data-type="false">

                    <strong>

14 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


            <div id="wwc_room_item_15" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://vin-a.wormate.io:32465/wormy" data-room="1jp" data-type="false">

                    <strong>

15 &nbsp;LITHUANIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>


         <div id="wwc_room_item_16" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:31091/wormy" data-room="1jp" data-type="false">

                    <strong>

01 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_17" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:30171/wormy" data-room="2jp" data-type="false">

                    <strong>

02 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_18" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:32499/wormy" data-room="3jp" data-type="false">

                    <strong>

03 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_19" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:30392/wormy" data-room="4jp" data-type="false">

                    <strong>

04 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_20" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:31859/wormy" data-room="5jp" data-type="false">

                    <strong>

05 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com/" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_21" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:30786/wormy" data-room="6jp" data-type="false">

                    <strong>

06 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_22" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:31770/wormy" data-room="7jp" data-type="false">

                    <strong>

07 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_23" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="&#39;wss://tok-b.wormate.io:32111/wormy" data-room="8jp" data-type="false">

                    <strong>

08 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_24" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://tok-b.wormate.io:32091/wormy" data-room="9jp" data-type="false">

                    <strong>

09 &nbsp;JAPAN SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs8" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://syd-a.wormate.io:31342/wormy" data-room="1au" data-type="false">

                    <strong>

01 &nbsp;AUSTRALIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://syd-a.wormate.io:30311/wormy" data-room="2au" data-type="false">

                    <strong>

02 &nbsp;AUSTRALIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://syd-a.wormate.io:30154/wormy" data-room="3au" data-type="false">

                    <strong>

03 &nbsp;AUSTRALIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://syd-a.wormate.io:31882/wormy" data-room="4au" data-type="false">

                    <strong>

04 &nbsp;AUSTRALIA SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

        <div class="tab-pane" id="tabs9" style="display: none">

            <div id="wwc_room_item_1" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="1ae" data-type="false">

                    <strong>

01 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_2" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:31975/wormy" data-room="2ae" data-type="false">

                    <strong>

02 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_3" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:31353/wormy" data-room="3ae" data-type="false">

                    <strong>

03 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_4" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32650/wormy" data-room="4ae" data-type="false">

                    <strong>

04 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_5" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="5ae" data-type="false">

                    <strong>

05 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_6" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30140/wormy" data-room="6ae" data-type="false">

                    <strong>

06 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_7" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://dxb-a.wormate.io:32703/wormy" data-room="7ae" data-type="false">

                    <strong>

07 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_8" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30573/wormy" data-room="8ae" data-type="false">

                    <strong>

08 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_9" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:30339/wormy" data-room="9ae" data-type="false">

                    <strong>

09 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_10" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31091/wormy" data-room="10ae" data-type="false">

                    <strong>

10 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_11" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31392/wormy" data-room="11ae" data-type="false">

                    <strong>

11 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_12" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31290/wormy" data-room="12ae" data-type="false">

                    <strong>

12 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

            <div id="wwc_room_item_13" style="

          display: grid;

          grid-template-columns: 1fr 30px;

          line-height: 28px;

        ">

                <div class="dropdown-item selecionar-sala-v2" style="cursor: pointer; line-height: 25px" data-con="wss://fra-c.wormate.io:31555/wormy" data-room="13ae" data-type="false">

                    <strong>

13 &nbsp;U.KINGDOM SERVER 🌍

</strong>

                </div>

                <a href="https://wormatefriendsturkey.com" target="_blank">

                    <img src="https://wormatefriendsturkey.com/images/team/wfc3.png" style="width: 25px; vertical-align: middle">

                </a>

            </div>

        </div>

    </div>

</div>

?v=20241116204139
