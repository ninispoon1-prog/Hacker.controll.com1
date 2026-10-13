/* =====================================================
   LOGIN
===================================================== */

const login =
    document.getElementById("login");

const welcome =
    document.getElementById("welcome");

const system =
    document.getElementById("system");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const loginButton =
    document.getElementById("loginButton");

const loginStatus =
    document.getElementById("loginStatus");


function doLogin() {

    if (
        username.value === "Kevo" &&
        password.value === "Hacked"
    ) {

        loginStatus.textContent =
            "ACCESS GRANTED // DECRYPTING...";

        loginStatus.className =
            "success";


        loginButton.textContent =
            "ACCESS GRANTED";


        setTimeout(() => {

            login.style.display =
                "none";

            welcome.classList.remove(
                "hidden"
            );

        }, 600);


        setTimeout(() => {

            welcome.style.opacity =
                "0";

            welcome.style.transition =
                "opacity .8s ease";

        }, 2800);


        setTimeout(() => {

            welcome.style.display =
                "none";

            system.classList.remove(
                "hidden"
            );

            command.focus();

        }, 3700);


    } else {

        loginStatus.textContent =
            "ACCESS DENIED";

        loginStatus.className =
            "error";


        login.animate(
            [
                {
                    transform:
                        "translateX(0)"
                },
                {
                    transform:
                        "translateX(-12px)"
                },
                {
                    transform:
                        "translateX(12px)"
                },
                {
                    transform:
                        "translateX(-6px)"
                },
                {
                    transform:
                        "translateX(0)"
                }
            ],
            {
                duration: 250
            }
        );

    }

}


loginButton.addEventListener(
    "click",
    doLogin
);


password.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            doLogin();

        }

    }
);



/* =====================================================
   CLOCK
===================================================== */

const clock =
    document.getElementById("clock");


function updateClock() {

    clock.textContent =
        new Date().toLocaleTimeString();

}


setInterval(
    updateClock,
    1000
);

updateClock();



/* =====================================================
   BINARY RAIN
===================================================== */

const binary =
    document.getElementById(
        "binaryStream"
    );


function randomBinary(length = 160) {

    let result = "";

    for (
        let i = 0;
        i < length;
        i++
    ) {

        result +=
            Math.random() > .5
                ? "1"
                : "0";

        if (
            Math.random() > .85
        ) {

            result += " ";

        }

    }

    return result;

}


for (
    let i = 0;
    i < 4;
    i++
) {

    const column =
        document.createElement("div");

    column.className =
        "binary-column";

    column.textContent =
        randomBinary(400);

    column.style.animationDuration =
        (7 + Math.random() * 6) +
        "s";

    column.style.animationDelay =
        (-Math.random() * 8) +
        "s";

    binary.appendChild(
        column
    );

}



/* =====================================================
   TELEMETRY
===================================================== */

const cpu =
    document.getElementById("cpu");

const ram =
    document.getElementById("ram");

const packets =
    document.getElementById("packets");

const latency =
    document.getElementById("latency");


setInterval(() => {

    const c =
        Math.floor(
            35 +
            Math.random() * 35
        );

    const r =
        Math.floor(
            45 +
            Math.random() * 35
        );

    const p =
        8000 +
        Math.floor(
            Math.random() * 2500
        );

    const l =
        12 +
        Math.floor(
            Math.random() * 28
        );


    cpu.textContent =
        c + "%";

    ram.textContent =
        r + "%";

    packets.textContent =
        p.toLocaleString();

    latency.textContent =
        l + "ms";

}, 1700);



/* =====================================================
   UPTIME
===================================================== */

let uptimeSeconds = 0;

const uptime =
    document.getElementById(
        "uptime"
    );


setInterval(() => {

    uptimeSeconds++;


    const h =
        String(
            Math.floor(
                uptimeSeconds / 3600
            )
        ).padStart(2,"0");


    const m =
        String(
            Math.floor(
                (uptimeSeconds % 3600) / 60
            )
        ).padStart(2,"0");


    const s =
        String(
            uptimeSeconds % 60
        ).padStart(2,"0");


    uptime.textContent =
        `${h}:${m}:${s}`;

},1000);



/* =====================================================
   EVENTS
===================================================== */

const events =
    document.getElementById(
        "events"
    );


const eventTexts = [

    "DEVICE HEARTBEAT RECEIVED",

    "ENCRYPTED TELEMETRY UPDATED",

    "NODE ALPHA RESPONDED",

    "SIGNAL ROUTE SYNCHRONIZED",

    "POSITION LOCK MAINTAINED",

    "PACKET STREAM STABLE",

    "REMOTE CHANNEL VERIFIED",

    "RADAR SWEEP COMPLETE",

    "SYSTEM INTEGRITY CHECKED",

    "SESSION TOKEN REFRESHED"

];


function addEvent() {

    const text =
        eventTexts[
            Math.floor(
                Math.random() *
                eventTexts.length
            )
        ];


    const row =
        document.createElement("div");

    row.className =
        "event";


    row.innerHTML = `

        <span>
            ${text}
        </span>

        <b>
            OK
        </b>

    `;


    events.prepend(row);


    while (
        events.children.length > 5
    ) {

        events.lastElementChild.remove();

    }

}


for (
    let i = 0;
    i < 5;
    i++
) {

    addEvent();

}


setInterval(
    addEvent,
    2100
);



/* =====================================================
   TERMINAL
===================================================== */

const terminal =
    document.getElementById(
        "terminal"
    );

const command =
    document.getElementById(
        "command"
    );


function printTerminal(
    text,
    type = ""
) {

    const line =
        document.createElement("div");

    line.textContent =
        text;

    if (type) {

        line.className =
            type;

    }

    terminal.appendChild(
        line
    );


    terminal.scrollTop =
        terminal.scrollHeight;

}


function runCommand(input) {

    const cmd =
        input
            .trim()
            .toLowerCase();


    if (!cmd)
        return;


    printTerminal(
        "KEVO@SC97:~$ " + cmd
        "RENE@SC97:~$ " + cmd
    );


    switch (cmd) {


        case "help":

            printTerminal(
                "AVAILABLE COMMANDS:",
                "green"
            );

            printTerminal(
                "STATUS / SCAN / DEVICE / LOCATION / NODES / CLEAR"
            );

            break;


        case "status":

            printTerminal(
                "[OK] SECRET COMPUTER OPERATIONAL",
                "green"
            );

            printTerminal(
                "[OK] SECURE CHANNEL ACTIVE"
            );

            printTerminal(
                "[OK] TELEMETRY STREAM ACTIVE"
            );

            break;


        case "scan":

            printTerminal(
                "[SCAN] SEARCHING SIMULATED NETWORK..."
            );

            setTimeout(
                () => {

                    printTerminal(
                        "[SCAN] ALPHA-01 FOUND",
                        "green"
                    );

                },
                400
            );


            setTimeout(
                () => {

                    printTerminal(
                        "[SCAN] OMEGA-04 FOUND",
                        "green"
                    );

                },
                800
            );


            setTimeout(
                () => {

                    printTerminal(
                        "[SCAN] GHOST-09 UNSTABLE",
                        "yellow"
                    );

                },
                1200
            );

            break;


        case "device":

            printTerminal(
                "DEVICE: KEVO-07"
            );

            printTerminal(
                "STATUS: ONLINE",
                "green"
            );

            printTerminal(
                "SIGNAL: 98.7%"
            );

            printTerminal(
                "CHANNEL: SECURE"
            );

            break;


        case "location":

            printTerminal(
                "TARGET: HACKED DEVICE",
                "green"
            );

            printTerminal(
                "LAT: 46.6713"
            );

            printTerminal(
                "LONG: 11.1525"
            );

            printTerminal(
                "REGION: MERANO"
            );

            break;


        case "nodes":

            printTerminal(
                "3 SIMULATED NODES ONLINE",
                "green"
            );

            break;


        case "clear":

            terminal.innerHTML =
                "";

            break;


        default:

            printTerminal(
                "UNKNOWN COMMAND // TYPE HELP",
                "yellow"
            );

    }

}


command.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            runCommand(
                command.value
            );

            command.value =
                "";

        }

    }
);


/* Buttons */

document
    .querySelectorAll(
        "[data-cmd]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                runCommand(
                    button.dataset.cmd
                );

            }
        );

    });



/* =====================================================
   GLOBE
===================================================== */

const canvas =
    document.getElementById(
        "globe"
    );

const ctx =
    canvas.getContext("2d");


let rotation = 0;


/*
    Stark vereinfachte Kontinentformen,
    damit keine externe Karte benötigt wird.
*/

const land = [

    [
        [-168,65],
        [-145,60],
        [-130,52],
        [-120,45],
        [-110,32],
        [-95,25],
        [-82,30],
        [-85,42],
        [-100,52],
        [-120,60],
        [-145,70]
    ],

    [
        [-82,10],
        [-75,0],
        [-70,-15],
        [-65,-28],
        [-68,-45],
        [-75,-55],
        [-80,-35],
        [-82,-10]
    ],

    [
        [-12,70],
        [10,65],
        [30,58],
        [45,50],
        [42,40],
        [30,35],
        [15,40],
        [0,48],
        [-15,55]
    ],

    [
        [20,35],
        [35,30],
        [48,15],
        [45,0],
        [35,-20],
        [20,-38],
        [10,-20],
        [15,5]
    ],

    [
        [55,55],
        [80,58],
        [110,52],
        [140,43],
        [155,30],
        [150,15],
        [125,18],
        [105,28],
        [80,35],
        [60,42]
    ],

    [
        [115,-5],
        [140,-10],
        [155,-25],
        [145,-40],
        [125,-42],
        [108,-25]
    ]

];


function resizeGlobe() {

    const rect =
        canvas.getBoundingClientRect();

    const dpr =
        window.devicePixelRatio || 1;


    canvas.width =
        rect.width * dpr;

    canvas.height =
        rect.height * dpr;


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

}


window.addEventListener(
    "resize",
    resizeGlobe
);


resizeGlobe();


function project(
    lon,
    lat,
    radius,
    cx,
    cy
) {

    const L =
        (
            lon + rotation
        ) *
        Math.PI / 180;


    const P =
        lat *
        Math.PI / 180;


    const x =
        Math.cos(P) *
        Math.sin(L);


    const y =
        Math.sin(P);


    const z =
        Math.cos(P) *
        Math.cos(L);


    return {

        x:
            cx + x * radius,

        y:
            cy - y * radius,

        z

    };

}


function drawGlobe() {

    const w =
        canvas.clientWidth;

    const h =
        canvas.clientHeight;


    const cx =
        w * .43;

    const cy =
        h * .5;


    const radius =
        Math.min(
            h * .40,
            w * .40
        );


    ctx.clearRect(
        0,
        0,
        w,
        h
    );


    /* Atmosphere */

    const atmosphere =
        ctx.createRadialGradient(
            cx - radius*.3,
            cy - radius*.35,
            radius*.05,
            cx,
            cy,
            radius*1.15
        );


    atmosphere.addColorStop(
        0,
        "rgba(120,210,130,.28)"
    );

    atmosphere.addColorStop(
        .55,
        "rgba(30,80,38,.30)"
    );

    atmosphere.addColorStop(
        1,
        "rgba(0,0,0,.95)"
    );


    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        radius,
        0,
        Math.PI*2
    );

    ctx.fillStyle =
        atmosphere;

    ctx.fill();


    /* Grid */

    for (
        let lon = -180;
        lon <= 180;
        lon += 20
    ) {

        ctx.beginPath();

        let drawing = false;


        for (
            let lat = -90;
            lat <= 90;
            lat += 2
        ) {

            const p =
                project(
                    lon,
                    lat,
                    radius,
                    cx,
                    cy
                );


            if (
                p.z > 0
            ) {

                if (!drawing) {

                    ctx.moveTo(
                        p.x,
                        p.y
                    );

                    drawing = true;

                } else {

                    ctx.lineTo(
                        p.x,
                        p.y
                    );

                }

            } else {

                drawing = false;

            }

        }


        ctx.strokeStyle =
            "rgba(108,210,120,.17)";

        ctx.lineWidth =
            .7;

        ctx.stroke();

    }


    for (
        let lat = -80;
        lat <= 80;
        lat += 20
    ) {

        ctx.beginPath();

        let drawing = false;


        for (
            let lon = -180;
            lon <= 180;
            lon += 2
        ) {

            const p =
                project(
                    lon,
                    lat,
                    radius,
                    cx,
                    cy
                );


            if (
                p.z > 0
            ) {

                if (!drawing) {

                    ctx.moveTo(
                        p.x,
                        p.y
                    );

                    drawing = true;

                } else {

                    ctx.lineTo(
                        p.x,
                        p.y
                    );

                }

            } else {

                drawing = false;

            }

        }


        ctx.strokeStyle =
            "rgba(108,210,120,.17)";

        ctx.lineWidth =
            .7;

        ctx.stroke();

    }


    /* Continents */

    land.forEach(
        polygon => {

            ctx.beginPath();

            let visible = false;


            polygon.forEach(
                ([lon,lat]) => {

                    const p =
                        project(
                            lon,
                            lat,
                            radius,
                            cx,
                            cy
                        );


                    if (
                        p.z <= 0
                    )
                        return;


                    if (!visible) {

                        ctx.moveTo(
                            p.x,
                            p.y
                        );

                        visible = true;

                    } else {

                        ctx.lineTo(
                            p.x,
                            p.y
                        );

                    }

                }
            );


            if (visible) {

                ctx.closePath();

                ctx.fillStyle =
                    "rgba(100,175,104,.22)";

                ctx.fill();

                ctx.strokeStyle =
                    "rgba(120,220,130,.30)";

                ctx.lineWidth =
                    .8;

                ctx.stroke();

            }

        }
    );


    /* Globe border */

    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        radius,
        0,
        Math.PI*2
    );

    ctx.strokeStyle =
        "rgba(120,255,150,.65)";

    ctx.lineWidth =
        1.5;

    ctx.stroke();


    /* Device location */

    const target =
        project(
            11.1525,
            46.6713,
            radius,
            cx,
            cy
        );


    if (
        target.z > 0
    ) {

        const pulse =
            7 +
            Math.sin(
                Date.now()/220
            ) * 4;


        /* outer pulse */

        ctx.beginPath();

        ctx.arc(
            target.x,
            target.y,
            pulse + 8,
            0,
            Math.PI*2
        );

        ctx.strokeStyle =
            "rgba(255,75,50,.45)";

        ctx.lineWidth =
            1;

        ctx.stroke();


        /* center */

        ctx.beginPath();

        ctx.arc(
            target.x,
            target.y,
            4,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
            "#ff573d";

        ctx.shadowColor =
            "#ff573d";

        ctx.shadowBlur =
            20;

        ctx.fill();

        ctx.shadowBlur =
            0;


        /* target beam */

        ctx.beginPath();

        ctx.moveTo(
            target.x + 8,
            target.y
        );

        ctx.lineTo(
            target.x + 65,
            target.y - 25
        );

        ctx.strokeStyle =
            "rgba(255,90,60,.7)";

        ctx.stroke();


        ctx.font =
            "8px Share Tech Mono";

        ctx.fillStyle =
            "#ff765b";

        ctx.fillText(
            "HACKED DEVICE",
            target.x + 70,
            target.y - 28
        );

    }


    /* Highlight */

    const highlight =
        ctx.createRadialGradient(
            cx-radius*.4,
            cy-radius*.45,
            radius*.05,
            cx,
            cy,
            radius
        );


    highlight.addColorStop(
        0,
        "rgba(180,255,190,.12)"
    );

    highlight.addColorStop(
        .7,
        "rgba(0,0,0,0)"
    );

    highlight.addColorStop(
        1,
        "rgba(0,0,0,.5)"
    );


    ctx.beginPath();

    ctx.arc(
        cx,
        cy,
        radius,
        0,
        Math.PI*2
    );

    ctx.fillStyle =
        highlight;

    ctx.fill();


    rotation += .12;


    requestAnimationFrame(
        drawGlobe
    );

}


drawGlobe();