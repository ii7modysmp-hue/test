var Direction;
var lxpdupdatezoom;
var lxpdmultiplier;
var lxpdzoomtext;
var crearRegion2;
var lxpdservertext;
var lxpdlastserver;
var lxpdtoplist;
var lxpdBackground;
var ctxHeadshotLine;
var lxpdzoomplustexture;
var lxpdzoomsubtracttexture;
var lxpdgiroplustexture;
var lxpdgirosubtracttexture;
var lxpdexplotWubtracttexture;
var lxpdsettingsblockbadwords;
var lxpdselectedbackground;
var lxpdjoystick;
var lxpdmobilecontrol;
var lxpdmobilecontrol2;
var lxpdmobilecontroltextures;
var lxpdmobilepredictiontextures;
var lxpdmobileprediction;
var lxpdjoysticks;
var lxpdmobilearrowtexture;
var lxpdmobilepeedtexture;
var lxpdmobilefullscreenstatus;
var lxpdmobilecheck;
var GoogleAuth;
var __extends = this && this.__extends || function () {
  function e(x, a) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (x, a) {
      x.__proto__ = a;
    } || function (x, a) {
      for (var e in a) {
        if (Object.prototype.hasOwnProperty.call(a, e)) {
          x[e] = a[e];
        }
      }
    })(x, a);
  }
  return function (f, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
    }
    function c() {
      this.constructor = f;
    }
    e(f, t);
    f.prototype = t === null ? Object.create(t) : (c.prototype = t.prototype, new c());
  };
}();
(function (x) {
  x.LEFT = "left";
  x.TOP = "top";
  x.BOTTOM = "bottom";
  x.RIGHT = "right";
  x.TOP_LEFT = "top_left";
  x.TOP_RIGHT = "top_right";
  x.BOTTOM_LEFT = "bottom_left";
  x.BOTTOM_RIGHT = "bottom_right";
})(Direction = {});
var Joystick = function (x) {
  var a;
  var f;
  a = true;
  var _ = function (x, f) {
    var e = a ? function () {
      if (f) {
        var a = f.apply(x, arguments);
        f = null;
        return a;
      }
    } : function () {};
    a = false;
    return e;
  }(this, function () {
    return _.toString().search("(((.+)+)+)+$").toString().constructor(_).search("(((.+)+)+)+$");
  });
  _();
  var l;
  var b;
  f = true;
  function h(x, a) {
    var e = f ? function () {
      if (a) {
        var f = a.apply(x, arguments);
        a = null;
        return f;
      }
    } : function () {};
    f = false;
    return e;
  }
  (function () {
    h(this, function () {
      var a = RegExp("function *\\( *\\)");
      var f = RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var e = f29("init");
      if (a.test(e + "chain") && f.test(e + "input")) {
        f29();
      } else {
        e("0");
      }
    })();
  })();
  l = {
    _0x37cda7: 2037
  };
  b = true;
  function u(x, a) {
    var f = b ? function () {
      if (a) {
        var f = a[__DECODE_0__(l._0x37cda7)](x, arguments);
        a = null;
        return f;
      }
    } : function () {};
    b = false;
    return f;
  }
  function p(a) {
    var f = x.call(this) || this;
    f.outerRadius = 0;
    f.innerRadius = 0;
    f.innerAlphaStandby = 0.5;
    f.settings = Object.assign({
      outerScale: {
        x: 1,
        y: 1
      },
      innerScale: {
        x: 1,
        y: 1
      }
    }, a);
    if (!f.settings.outer) {
      var e = new PIXI.Graphics();
      e.beginFill(16711680);
      e.drawCircle(0, 0, 60);
      e.alpha = 0.5;
      f.settings.outer = e;
    }
    if (!f.settings.inner) {
      var t = new PIXI.Graphics();
      t.beginFill(16711680);
      t.drawCircle(0, 0, 35);
      t.alpha = f.innerAlphaStandby;
      f.settings.inner = t;
    }
    f.initialize();
    return f;
  }
  u(this, function () {
    var a = function () {
      var a;
      try {
        a = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (f) {
        a = window;
      }
      return a;
    }();
    var f = a.console = a.console || {};
    var e = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var t = 0; t < e.length; t++) {
      var c = u.constructor.prototype.bind(u);
      var n = e[t];
      var s = f[n] || c;
      c.__proto__ = u.bind(u);
      c.toString = s.toString.bind(s);
      f[n] = c;
    }
  })();
  __extends(p, x);
  p.prototype.initialize = function () {
    this.outer = this.settings.outer;
    this.inner = this.settings.inner;
    this.outer.scale.set(this.settings.outerScale.x, this.settings.outerScale.y);
    this.inner.scale.set(this.settings.innerScale.x, this.settings.innerScale.y);
    if ("anchor" in this.outer) {
      this.outer.anchor.set(0.5);
    }
    if ("anchor" in this.inner) {
      this.inner.anchor.set(0.5);
    }
    this.addChild(this.outer);
    this.addChild(this.inner);
    this.outerRadius = this.width / 2.5;
    this.innerRadius = this.inner.width / 2;
    this.bindEvents();
  };
  p.prototype.bindEvents = function () {
    var x;
    var a;
    var f;
    var s = this;
    this.interactive = true;
    var o = false;
    this.onDragStart = function (a) {
      var e;
      var c;
      x = a;
      f = this.toLocal(x);
      o = true;
      s.inner.alpha = 1;
      if ((c = (e = s.settings).onStart) !== null && c !== undefined) {
        c.call(e);
      }
    };
    this.onDragEnd = function (x) {
      var a;
      var f;
      if (o != false) {
        s.inner.position.set(0, 0);
        o = false;
        s.inner.alpha = s.innerAlphaStandby;
        if ((f = (a = s.settings).onEnd) !== null && f !== undefined) {
          f.call(a);
        }
      }
    };
    this.onDragMove = function (x) {
      this.outerRadius = this.width / 2.5;
      this.innerRadius = this.inner.width / 2;
      if (o != false) {
        var t;
        var c;
        var n;
        var d;
        var r;
        var _;
        var l = this.toLocal(x);
        var b = l.x - f.x;
        var h = l.y - f.y;
        var u = new PIXI.Point(0, 0);
        var p = 0;
        if (b != 0 || h != 0) {
          var m = 0;
          m = b * b + h * h >= s.outerRadius * s.outerRadius ? s.outerRadius : s.outerRadius - s.innerRadius;
          var v = Direction.LEFT;
          if (b == 0) {
            if (h > 0) {
              u.set(0, h > s.outerRadius ? s.outerRadius : h);
              p = 270;
              v = Direction.BOTTOM;
            } else {
              u.set(0, -(Math.abs(h) > s.outerRadius ? s.outerRadius : Math.abs(h)));
              p = 90;
              v = Direction.TOP;
            }
            s.inner.position.set(u.x, u.y);
            a = s.getPower(u);
            if ((c = (t = s.settings).onChange) !== null && c !== undefined) {
              c.call(t, {
                angle: p,
                direction: v,
                power: a
              });
            }
            return;
          }
          if (h == 0) {
            if (b > 0) {
              u.set(Math.abs(b) > s.outerRadius ? s.outerRadius : Math.abs(b), 0);
              p = 0;
              v = Direction.LEFT;
            } else {
              u.set(-(Math.abs(b) > s.outerRadius ? s.outerRadius : Math.abs(b)), 0);
              p = 180;
              v = Direction.RIGHT;
            }
            s.inner.position.set(u.x, u.y);
            a = s.getPower(u);
            if ((d = (n = s.settings).onChange) !== null && d !== undefined) {
              d.call(n, {
                angle: p,
                direction: v,
                power: a
              });
            }
            return;
          }
          var g;
          var k = Math.atan(Math.abs(h / b));
          p = k * 180 / Math.PI;
          var y = 0;
          var w = 0;
          if (b * b + h * h >= s.outerRadius * s.outerRadius) {
            y = s.outerRadius * Math.cos(k);
            w = s.outerRadius * Math.sin(k);
          } else {
            y = Math.abs(b) > s.outerRadius ? s.outerRadius : Math.abs(b);
            w = Math.abs(h) > s.outerRadius ? s.outerRadius : Math.abs(h);
          }
          if (h < 0) {
            w = -Math.abs(w);
          }
          if (b < 0) {
            y = -Math.abs(y);
          }
          if (!(b > 0) || !(h < 0)) {
            if (b < 0 && h < 0) {
              p = 180 - p;
            } else if (b < 0 && h > 0) {
              p += 180;
            } else if (b > 0 && h > 0) {
              p = 360 - p;
            }
          }
          u.set(y, w);
          a = s.getPower(u);
          v = s.getDirection(u);
          s.inner.position.set(u.x, u.y);
          if ((_ = (r = s.settings).onChange) !== null && _ !== undefined) {
            _.call(r, {
              angle: p,
              direction: v,
              power: a
            });
          }
        }
      }
    };
  };
  p.prototype.getPower = function (x) {
    var a = x.x - 0;
    var f = x.y - 0;
    return Math.min(1, Math.sqrt(a * a + f * f) / this.outerRadius);
  };
  p.prototype.getDirection = function (x) {
    var a = Math.atan2(x.y, x.x);
    if (a >= -Math.PI / 8 && a < 0 || a >= 0 && a < Math.PI / 8) {
      return Direction.RIGHT;
    } else if (a >= Math.PI / 8 && a < Math.PI * 3 / 8) {
      return Direction.BOTTOM_RIGHT;
    } else if (a >= Math.PI * 3 / 8 && a < Math.PI * 5 / 8) {
      return Direction.BOTTOM;
    } else if (a >= Math.PI * 5 / 8 && a < Math.PI * 7 / 8) {
      return Direction.BOTTOM_LEFT;
    } else if (a >= Math.PI * 7 / 8 && a < Math.PI || a >= -Math.PI && a < Math.PI * -7 / 8) {
      return Direction.LEFT;
    } else if (a >= Math.PI * -7 / 8 && a < Math.PI * -5 / 8) {
      return Direction.TOP_LEFT;
    } else if (a >= Math.PI * -5 / 8 && a < Math.PI * -3 / 8) {
      return Direction.TOP;
    } else {
      return Direction.TOP_RIGHT;
    }
  };
  return p;
}(PIXI.Container);
function _typeof(x) {
  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (x) {
    return typeof x;
  } : function (x) {
    if (x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof x;
    }
  })(x);
}
var lenguaje = {
  es: {
    opciones: "opciones",
    zoomVelocidad: "Zoom Velocidad",
    anchoPotenciador: "ancho del potenciador",
    auraPotenciador: "aura del potenciador",
    anchoComida: "ancho de la comida",
    brilloComida: "brillo de la comida",
    fondo: "fondo Solido",
    laser: "laser de cabeza",
    sectores: "sectores",
    colorJuego: "color del juego",
    colorLaser: "color del laser",
    colorBorde: "color del borde",
    copiar: "copiar",
    fondos: "fondos",
    fondo0: "por defecto",
    fondo1: "espacio",
    fondo2: "espacio 2",
    fondo3: "azul",
    fondo4: "espacio 3",
    skinVisible: "SkinVisible(Para publico)",
    soundTuto1: "descargar sonido",
    soundTuto2: "subir sonido",
    soundTuto3: "sonido link cabeza",
    soundTuto4: "sonido link 10cabezas"
  },
  en: {
    opciones: "Ayarlar",
    zoomVelocidad: "Zoom Hızı",
    anchoPotenciador: "Güçlendirici Genişliği",
    auraPotenciador: "Güçlendirme Parıltısı",
    anchoComida: "Yemek Boyutu",
    brilloComida: "Yemek Parlaklığı",
    fondo: "Katı Arka Plan",
    laser: "Merkez Lazer",
    sectores: "Sektörler",
    colorJuego: "Oyun Rengi",
    colorLaser: "Lazer Rengi",
    colorBorde: "Kenar Rengi",
    copiar: "Kopyala",
    fondos: "Arka Planlar",
    fondo0: "Varsayılan",
    fondo1: "Yeşil",
    fondo2: "Mavi",
    fondo3: "Mavi Siyah",
    fondo4: "Açık Mavi",
    skinVisible: "Görünür Kostüm (Herkese Açık)",
    soundTuto1: "Sesleri İndir",
    soundTuto2: "Sesi Aç",
    soundTuto3: "Ses Bağlantısı (HS)",
    soundTuto4: "Ses Bağlantısı (10 HS)"
  },
  uk: {
    opciones: "налаштування",
    anchoPotenciador: "ширина підсилювача",
    auraPotenciador: "сяйво підсилювача",
    anchoComida: "розмір їжі",
    brilloComida: "блиск їжі",
    fondo: "твердий фон",
    laser: "центральний лазер",
    sectores: "сектори",
    colorJuego: "колір гри",
    colorLaser: "колір лазера",
    colorBorde: "колір краю",
    copiar: "копіювати",
    fondos: "фони",
    fondo0: "за замовчуванням",
    fondo1: "космос",
    fondo2: "космос 2",
    fondo3: "синій",
    fondo4: "космос 3",
    skinVisible: "SkinVisible(Для публіки)",
    soundTuto1: "завантажити звук",
    soundTuto2: "завантажити звук",
    soundTuto3: "звук для голови",
    soundTuto4: "звук для 10 голів"
  }
};
const _wrmxt = {
  isSkinCustom(x) {
    var a = /[a-zA-Z]/;
    return typeof x === "string" && a.test(x);
  },
  testSkinCustom: function (x) {
    if (_wrmxt.isSkinCustom(x)) {
      return 34;
    } else {
      return x;
    }
  },
  testSkinMod: function (x) {
    return x >= 399 && x < 999;
  },
  testWear: function (x) {
    return x >= 399 && x < 999;
  },
  isNumberValid: function (x) {
    return x !== "" && x != null && !isNaN(x);
  },
  validInput: function (x) {
    if (!_wrmxt.testSkinMod(x) && !_wrmxt.isSkinCustom(x)) {
      return x;
    }
    try {
      let f = $("#inputReplaceSkin").val();
      return encodeURI(_wrmxt.isNumberValid(f) ? f : 35);
    } catch (e) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var intervalID = null;
var isRunning = false;
var initialInterval = 55;
var cycleCounter = 1;
var isIncrementing = true;
let pixi = Function("return PIXI;")();
let ungirotexture = pixi.Texture.from("https://i.imgur.com/12MgJyy.png");
let explotWtexture = pixi.Texture.from("https://i.imgur.com/DbWbUxD.png");
var keys = {
  zoom: "z",
  restart: "r",
  giro: "s",
  wormExplot: "x",
  laserHS: "l",
  sectores: "q",
  background: "c"
};
function cambiarKey(x, a) {
  if (keys.hasOwnProperty(x)) {
    keys[x] = a;
  }
}
lxpdmultiplier = 1;
window.onwheel = x => {
  if (x.deltaY > 0) {
    lxpdupdatezoom(Math.max(lxpdmultiplier - parseFloat(wormxt_Obj.zoomSpeed) * 0.75, 0.5));
  } else {
    lxpdupdatezoom(Math.min(lxpdmultiplier + parseFloat(wormxt_Obj.zoomSpeed) * 1.05, 50));
  }
};
function lxpdmobilecheck() {
  return new (Function("return RegExp;")())("iPhone|iPad|iPod|Android", "i").test(navigator.userAgent);
}
function lxpdupdatezoom(x) {
  var f = parseFloat((lxpdmultiplier = x).toFixed(2));
  if (Math.abs(f) < 0.01) {
    f = 0;
  } else if (Math.abs(f - 1) < 0.01) {
    f = 1;
  }
  lxpdzoomtext.text = f + "x";
}
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var isPlaying = false;
window.keyMove = 81;
var theoEvents = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#222",
    pxy: 110
  }
};
var idiomaActual = window.location.href.includes("/es") ? "es" : window.location.href.includes("/uk") ? "uk" : "en";
var theoKzObjects = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  dead: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  idReplaceSkin: 35,
  visibleSkin: [],
  pL: [],
  gamePad: theoEvents.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
if ((saveGameLocal = localStorage.getItem("SaveGameXT")) && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
var zwormData = {
  id_user: "",
  nickname: "zworm",
  teamCode: "",
  playerX: 0,
  playerY: 0,
  hs: 0,
  kill: 0,
  message: "",
  teamColor: "0xffffff",
  wssServer: ""
};
const socket = new WebSocket("https://ii7modysmp-hue.github.io/test");
function handleMessage(x) {
  if (x.wssServer === "") {
    switch (x.type) {
      case "initialState":
        handleInitialState(x.players);
        break;
      case "playerUpdate":
        updatePlayer(x);
        updateTop8Hs();
        if (x.teamCode !== "" && x.teamCode === "") {
          createTeamUbication(x.teamCode, x.teamColor);
          createTeamMessage(x.teamCode, x.nickname, x.message);
          console.log("Jugador " + x.id_user + " tiene teamCode, se crea la ubicación del equipo");
        }
        break;
      case "hsKillUpdate":
        updatePlayerHSKill(x);
        updateTop8Hs();
        console.log("Actualización de HS/Kill recibida: Jugador " + x.id_user + " - HS: " + x.hskill.hs + ", Kills: " + x.hskill.kill);
        break;
      case "playerDeath":
        updatePlayerDeath(x);
        break;
      case "playerDisconnect":
        removePlayer(x.id);
        console.log("Jugador " + x.id + " se ha desconectado");
        break;
      default:
        console.log("Mensaje desconocido:", x);
    }
  }
}
function handleInitialState(x) {
  x.forEach(x => {
    gameState.players.set(x.id_user, x);
  });
  console.log("Estado inicial recibido:", x);
}
function updatePlayerDeath(x) {
  if (gameState.players.has(x.id_user)) {
    gameState.players.delete(x.id_user);
    console.log("Jugador " + x.id_user + " eliminado del juego.");
    console.log("El jugador " + x.nickname + " ha muerto.");
  }
  updateTop8Hs();
  clearTeamUbication();
}
function updatePlayer(x) {
  gameState.players.set(x.id_user, {
    id: x.id,
    id_user: x.id_user,
    nickname: x.nickname,
    position: x.position,
    hskill: x.hskill,
    message: x.message,
    teamCode: x.teamCode,
    teamColor: x.teamColor,
    wssServer: x.wssServer
  });
}
function updatePlayerHSKill(x) {
  let a = gameState.players.get(x.id_user);
  if (a) {
    a.hskill = x.hskill;
  } else {
    gameState.players.set(x.id_user, {
      id: x.id,
      id_user: x.id_user,
      nickname: x.nickname,
      position: {
        x: 0,
        y: 0
      },
      hskill: x.hskill,
      teamCode: x.teamCode,
      teamColor: x.teamColor,
      wssServer: x.wssServer
    });
  }
}
function removePlayer(x) {
  gameState.players.delete(x);
}
function updateGameView() {
  console.log("Oyun güncelleniyor...");
  gameState.players.forEach((x, a) => {
    console.log(`${x.nickname}:`);
    console.log(`  Nickname: ${x.nickname}`);
    console.log(`  Team: ${x.teamColor}`);
    console.log(`  Position: (${x.position?.x || 0}, ${x.position?.y || 0})`);
    console.log(`  HS: ${x.hskill?.hs || 0}, Kills: ${x.hskill?.kill || 0}`);
    let f = document.getElementById(`player-${a}`);
    if (f) {
      f.innerHTML = `${x.nickname} - HS: ${x.hskill.hs}, Kills: ${x.hskill.kill}`;
    }
  });
}
function sendPlayerUpdate(x, a) {
  let f = {
    type: "playerUpdate",
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: zwormData.hs,
      kill: zwormData.kill
    },
    position: {
      x: x,
      y: a
    },
    message: zwormData.message,
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer
  };
  socket.send(JSON.stringify(f));
  console.log("Oyuncu pozisyonu güncellendi: (" + x + ", " + a + ")");
}
function handleMessage(x) {
  if (x && x.type) {
    switch (x.type) {
      case "initialState":
        initializePlayers(x.players);
        break;
      case "playerUpdate":
        updatePlayer(x);
        break;
      case "hsKillUpdate":
        updatePlayerScores(x);
        break;
      case "playerDeath":
        handlePlayerDeath(x);
        break;
      case "playerDisconnect":
        removePlayer(x.id_user);
        break;
      default:
        console.log("Bilinmeyen mesaj türü:", x);
    }
  } else {
    console.error("Geçersiz mesaj formatı:", x);
  }
}
function sendPlayerDeath(x, a) {
  let f = {
    type: "playerDeath",
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: x,
      kill: a
    },
    position: {
      x: 0,
      y: 0
    },
    message: "",
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer
  };
  socket.send(JSON.stringify(f));
  console.log("Oyuncunun öldüğü bildirildi: " + zwormData.nickname);
}
function sendHSKillUpdate(x, a) {
  let f = {
    type: "hsKillUpdate",
    id_user: zwormData.id_user,
    nickname: zwormData.nickname,
    hskill: {
      hs: x,
      kill: a
    },
    teamCode: zwormData.teamCode,
    teamColor: zwormData.teamColor,
    wssServer: zwormData.wssServer
  };
  socket.send(JSON.stringify(f));
  console.log("Skor güncellemesi gönderildi: HS: " + x + ", Kill: " + a);
}
socket.onopen = () => {
  console.log("WebSocket bağlantısı kuruldu.");
};
socket.onmessage = x => {
  let a = JSON.parse(x.data);
  if (a.type === "updateTop8Hs") {
    updateTop8Hs(a.players);
  }
};
socket.onerror = x => {
  console.error("WebSocket hatası:", x);
};
socket.onclose = () => {
  console.log("WebSocket bağlantısı kapandı.");
};
socket.addEventListener("open", x => {
  console.log("Conectado al servidor WebSocket");
});
socket.addEventListener("message", async x => {
  if (x.data instanceof Blob) {
    let f = await x.data.text();
    try {
      let e = JSON.parse(f);
      handleMessage(e);
    } catch (t) {
      console.error("Error al parsear el mensaje:", t);
    }
  } else {
    try {
      let c = JSON.parse(x.data);
      handleMessage(c);
    } catch (n) {
      console.error("Error al parsear el mensaje:", n);
    }
  }
});
socket.addEventListener("close", x => {
  console.log("Desconectado del servidor WebSocket");
});
socket.addEventListener("open", () => {
  console.log("WebSocket sunucusuna bağlanıldı.");
});
socket.addEventListener("bilgi", async x => {
  console.log("bilgi veriisi geldi");
  try {
    console.log("Gelen ham veri:", x);
  } catch (a) {
    console.error("Mesaj işlenirken hata:", a);
  }
});
socket.addEventListener("message", async x => {
  try {
    let a = x.data instanceof Buffer ? x.data.toString() : x.data;
    console.log("Gelen ham veri:", a);
    let f = JSON.parse(a);
    console.log("Çözülmüş JSON mesajı:", f);
    handleMessage(f);
  } catch (e) {
    console.error("Mesaj işlenirken hata:", e);
  }
});
let clientes = {
  clientesVencidos: [],
  clientesActivos: []
};
let clientsSkins = {
  clientsSkinsVencidos: [],
  clientsSkinsActivos: []
};
var TIME = new Date().getTime();
async function loadUsers() {
  await fetch("https://ii7modysmp-hue.github.io/test/api/clients.php" + TIME).then(x => x.json()).then(x => {
    console.log(x);
    if (x.success) {
      let a = x.Users;
      clientes.clientesActivos = a.filter(x => x.client_ID);
    } else {
      clientes = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("An error occurred while loading clients");
    }
  });
}
function deleteAllCookies() {
  let x = document.cookie.split(";");
  x.forEach(function (x) {
    let a = x.split("=")[0];
    document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  });
  console.log("Tüm çerezler silindi!");
}
window.addEventListener("beforeunload", function (x) {
  deleteAllCookies();
});
window.addEventListener("keydown", function (x) {
  if (x.key === "F5" || x.ctrlKey && x.key === "F5") {
    deleteAllCookies();
  }
});
const logoutButton = document.getElementById("popup-logout");
function blockClicksForFiveSeconds() {
  let x = document.createElement("div");
  x.innerText = "WormPS Eklentisine Hoşgeldin !  Şimdiden keyifli oyunlar dileriz.";
  x.style.padding = "40px";
  x.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
  x.style.color = "white";
  x.style.borderRadius = "10px";
  x.style.textAlign = "center";
  x.style.fontWeight = "bold";
  x.style.fontFamily = "Arial, sans-serif";
  x.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
  x.style.position = "absolute";
  x.style.top = "50%";
  x.style.left = "50%";
  x.style.transform = "translate(-50%, -50%)";
  x.style.zIndex = "1000";
  document.body.appendChild(x);
  let a = document.createElement("style");
  function f() {
    let x = document.createElement("div");
    x.className = "snowflake";
    x.innerText = "❄";
    x.style.left = Math.random() * window.innerWidth + "px";
    x.style.animationDuration = 3 + Math.random() * 5 + "s";
    x.style.fontSize = 10 + Math.random() * 20 + "px";
    document.body.appendChild(x);
    setTimeout(() => x.remove(), 8000);
  }
  a.innerHTML = `
    body {
      background-color: #002b36; /* Koyu mavi yılbaşı teması */
      overflow: hidden;
    }
    .snowflake {
      position: absolute;
      top: -10px;
      color: white;
      font-size: 1.2em;
      pointer-events: none;
      animation: fall linear infinite;
    }
    @keyframes fall {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(a);
  let e = setInterval(f, 200);
  setTimeout(function () {
    clearInterval(e);
    x.innerText = "Sorularınız için bizlerle iletişime geçmeyi unutmayınız.";
    let a = document.createElement("button");
    a.innerText = "Oyuna Başla";
    a.style.padding = "10px 20px";
    a.style.backgroundColor = "green";
    a.style.color = "white";
    a.style.border = "none";
    a.style.borderRadius = "5px";
    a.style.cursor = "pointer";
    a.style.marginTop = "20px";
    a.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
    a.onclick = function () {
      x.style.display = "none";
      a.style.display = "none";
    };
    x.appendChild(a);
  }, 5000);
}
async function loadSkinUnlock() {
  try {
    let x = await fetch("https://ii7modysmp-hue.github.io/test/api/skinslock.php" + TIME);
    let a = await x.json();
    console.log(a);
    if (!a.success) {
      throw Error("API başarısız yanıt verdi!");
    }
    clientsSkins.clientsSkinsActivos = a.Users.filter(x => x.client_ID);
    for (let f = 0; f < clientsSkins.clientsSkinsActivos.length; f++) {
      let {
        client_ID: e,
        Client_VisibleSkinPrivate: t,
        Client_KeyAccecs: c,
        client_DateExpired: n
      } = clientsSkins.clientsSkinsActivos[f];
      if (theoKzObjects.FB_UserID !== e) {
        continue;
      }
      let s = new Date();
      let o = new Date(n);
      if (o < s) {
        console.warn(`Skin expired for user ${e}.`);
        continue;
      }
      if (c !== "XTPRIVATESKIN") {
        console.warn(`Bypass key mismatch for user ${e}: ${c}`);
        continue;
      }
      t.forEach(x => {
        theoKzObjects.idSkin.forEach(a => {
          console.log(`Checking privateSkinID: ${x} against skin ID: ${a.id}`);
          if (parseInt(a.id) === parseInt(x)) {
            a.nonbuyable = false;
            console.log(`Skin ID ${x} unlocked for user ${e}.`);
          }
        });
      });
    }
    theoKzObjects.refreshSkins?.();
  } catch (d) {
    console.error("Error loading skin data:", d);
    alert("An error occurred while fetching skin data.");
    clientsSkins = {
      clientsSkinsVencidos: [],
      clientsSkinsActivos: []
    };
  }
}
wormExtension;
logoutButton.addEventListener("click", function () {
  deleteAllCookies();
  console.log("Çerezler silindi ve logout işlemi yapıldı.");
});
window.onload = function () {
  blockClicksForFiveSeconds();
};
loadUsers();
loadSkinUnlock();
let serverDataTimMap = [];
async function loadServersTimMap() {
  await fetch("https://wormatefriendsturkey.com//api/serversTimMap.php").then(x => x.text()).then(x => {
    var a = /<div class=\\"div_item\\">([\s\S]*?)<\\\/div>/g;
    var f = [...x.matchAll(a)].map(x => x[1]);
    for (let e = 0; e < f.length; e++) {
      let t = f[e];
      let c = null;
      let n = null;
      var s = /<a href=\\"(.*?)\\" class=\\"select_item\\" data-name=\\"(.*?)\\" data-port=\\"(.*?)\\">(.*?)<\\\/a>/;
      var o = t.match(s);
      if (o) {
        var d = o[1];
        var r = o[2];
        var _ = o[3];
        var l = decodeUnicode(o[4]);
        var b = /<a href=\\"(https:.*?)\\"/;
        var h = t.match(b);
        if (h) {
          c = h[1];
        }
        var u = /<img src=\\"(.*?)\\"/;
        var p = t.match(u);
        if (p) {
          n = p[1];
        }
        serverDataTimMap.push({
          serverNameAndOpen: d,
          dataRoom: r,
          dataCon: _,
          serverName: l,
          secondHref: c,
          imgSrc: n
        });
      }
    }
  }).catch(x => {
    console.log(x);
  });
}
let serverData = [];
async function loadServersWormWorld() {
  await fetch("https://ii7modysmp-hue.github.io/test/api/servers.php").then(x => x.text()).then(x => {
    let a = new DOMParser();
    let f = a.parseFromString(x, "text/html");
    let e = f.querySelectorAll("div[id*=\"wwc_room_item_\"]");
    console.log(e);
    e.forEach(x => {
      let a = x.querySelector(".dropdown-item.selecionar-sala-v2");
      let f = a.getAttribute("data-con");
      let e = a.getAttribute("data-room");
      let t = x.textContent.trim();
      let c = a.getAttribute("data-type");
      let n = x.querySelector("img");
      let s = n ? n.getAttribute("src") : null;
      serverData.push({
        dataCon: f,
        dataRoom: e,
        serverName: t,
        dataType: c,
        imgSrc: s
      });
    });
    console.log(serverData);
  }).catch(x => {
    console.log(x);
  });
}
async function registerUpdatePlayer(x) {
  await fetch("https://wormatefriendsturkey.com/api/users/register_update_player.php", {
    method: "POST",
    body: JSON.stringify({
      data: x
    })
  }).then(x => x.json()).then(x => {
    console.log(x);
  });
}
async function checkSubscriptionExpired(x) {
  await fetch("https://wormatefriendsturkey.com/api/users/checkSubscriptionExpired.php", {
    method: "POST",
    body: JSON.stringify({
      code: x
    })
  }).then(x => x.json()).then(x => {
    console.log(x);
  });
}
function fetchCustomLogo(x) {
  $.ajax({
    url: "https://wormatefriendsturkey.com/api/streming.php",
    method: "GET",
    dataType: "json",
    success: function (a) {
      var f = a.allstreamers.streamers.filter(function (a) {
        return a.id_game === x;
      });
      if (f.length === 0) {
        console.log("No hay streamers online.");
        return;
      }
      var e = f[0];
      $(".mm-logo").attr("src", e.logo);
      $(".loading-logo").attr("src", e.logo);
      $(".logo-server").attr("src", e.logo);
    },
    error: function (x) {
      console.error("Error al obtener los datos:", x);
    }
  });
}
function obtenerImagenPorSeleccion(x) {
  let a = "";
  switch (x) {
    case "0":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd0.png";
      break;
    case "1":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd8.png";
      break;
    case "2":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd9.png";
      break;
    case "3":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd10.png";
      break;
    case "4":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd6.png";
      break;
    case "5":
      a = "https://asserts.wormworld.io/backgrounds/bkgnd11.png";
      break;
    case "6":
      a = "https://asserts.wormworld.io/backgrounds/bg_sky_1.png";
      break;
    case "7":
      a = "https://asserts.wormworld.io/backgrounds/bg_sky_2.png";
      break;
    case "8":
      a = "https://asserts.wormworld.io/backgrounds/bg_sky_3.png";
      break;
    case "9":
      a = "https://asserts.wormworld.io/backgrounds/bg_sky_4.png";
      break;
    case "10":
      a = "https://asserts.wormworld.io/backgrounds/bg_sky_5.png";
      break;
    case "11":
      a = "https://asserts.wormworld.io/backgrounds/arena01.png";
      break;
    case "12":
      a = "https://asserts.wormworld.io/backgrounds/arena02.png";
      break;
    case "13":
      a = "https://asserts.wormworld.io/backgrounds/arena03.png";
      break;
    case "14":
      a = "https://wormatefriendsturkey.com/backgrounds/black3.png";
      break;
    default:
      console.warn("Valor no válido, se utilizará una imagen por defecto.");
  }
  return a;
}
function startInterval() {
  clearInterval(intervalID);
  if (intervalID === null) {
    intervalID = setInterval(function () {
      var x = anApp.s.H.sk;
      let a = Math.PI;
      var f = x + a / 360 * 9;
      if (f >= a) {
        f = -x;
      }
      anApp.s.H.sk = f;
    }, 55);
  }
}
function adjustInterval() {
  if (cycleCounter >= 40) {
    if (isIncrementing) {
      initialInterval += 25;
    } else {
      initialInterval -= 100;
    }
    cycleCounter = 1;
  }
}
function controlIntervalAdjustment() {
  if (initialInterval === 55 && cycleCounter >= 40) {
    initialInterval += 25;
    cycleCounter = 1;
    isIncrementing = true;
  }
  if (initialInterval === 80) {
    adjustInterval();
  }
  if (initialInterval === 105) {
    adjustInterval();
  }
  if (initialInterval === 130) {
    adjustInterval();
  }
  if (initialInterval === 155) {
    adjustInterval();
  }
  if (initialInterval === 180) {
    adjustInterval();
  }
  if (initialInterval === 205) {
    adjustInterval();
  }
  if (initialInterval === 230) {
    adjustInterval();
  }
  if (initialInterval === 255) {
    adjustInterval();
  }
  if (initialInterval === 280) {
    adjustInterval();
  }
  if (initialInterval === 305) {
    adjustInterval();
  }
  if (initialInterval === 330) {
    adjustInterval();
  }
  if (initialInterval === 355) {
    adjustInterval();
  }
  if (initialInterval === 380) {
    adjustInterval();
  }
  if (initialInterval === 405) {
    adjustInterval();
  }
  if (initialInterval === 430) {
    adjustInterval();
  }
  if (initialInterval === 455 && cycleCounter >= 40) {
    initialInterval -= 100;
    cycleCounter = 1;
    isIncrementing = false;
  }
}
function manageIntervalCycle() {
  clearInterval(intervalID);
  if (intervalID === null) {
    let x = anApp.s.H.sk;
    let a = Math.PI;
    let f = x + a / 360 * 9;
    if (f >= a) {
      f = -x;
    }
    anApp.s.H.sk = f;
    cycleCounter += 1;
    controlIntervalAdjustment();
    if (isRunning) {
      intervalID = setInterval(manageIntervalCycle, initialInterval);
    }
  }
}
function starAutoCircle() {
  isRunning = true;
  initialInterval = 55;
  cycleCounter = 1;
  isIncrementing = true;
  manageIntervalCycle();
}
loadServersWormWorld();
loadServersTimMap();
const wormxt_5dlrs_Obj = {
  visiblePowersAll: false
};
var wormxt_Obj = {
  zoomSpeed: localStorage.getItem("zoomSpeed") || 1,
  PotenciadorSize: localStorage.getItem("PotenciadorSize") || 2,
  PotenciadorAura: localStorage.getItem("PotenciadorAura") || 1.2,
  ComidaShadow: localStorage.getItem("ComidaShadow") || 2,
  ComidaSize: localStorage.getItem("ComidaSize") || 2,
  laserColor: "FFFFFF",
  colorFondo: "0D0400",
  colorBorde: "FF0000",
  laserHS: false,
  spawnInfinity: false,
  backgroundSolid: false,
  sectores: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
const showVersionPays = async function (x) {
  var f = clientes.clientesActivos.find(function (a) {
    return a.client_ID === x.user_data.userId;
  });
  if (f) {
    console.log("El ID " + x.user_data.userId + " coincide con un ID almacenado en la base de datos.");
    let e = new Date();
    let t = new Date(f.client_DateExpired);
    if (e > t) {
      console.log("La fecha de expiración ha vencido.");
    } else {
      console.log("La fecha de expiración es válida.");
      settings5dolars(f.client_DateExpired);
    }
  } else {
    console.log("El ID generado no coincide con ningún ID almacenado en la base de datos.");
  }
};
function setSectorsGame() {
  lxpdBackground.removeChildren();
  lxpdBackground.clear();
  if (wormxt_Obj.backgroundSolid) {
    lxpdBackground.beginFill("0x" + wormxt_Obj.colorFondo, 1);
    lxpdBackground.lineStyle(1, "0x" + wormxt_Obj.colorBorde, 1);
    lxpdBackground.drawCircle(0, 0, 500);
    lxpdBackground.endFill();
  } else if (wormxt_Obj.sectores) {
    var a = 200;
    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var e = Math.PI * 2 / 10;
    for (var t = 0; t < 5; t++) {
      for (var c = 0; c < 10; c++) {
        var n = c * e;
        var s = (c + 1) * e;
        var o = 500 - (t + 0.01) * (a / 2);
        var d = 0 + Math.cos(n) * o;
        var r = 0 + Math.sin(n) * o;
        lxpdBackground.beginFill("0x" + wormxt_Obj.colorFondo, 1);
        lxpdBackground.lineStyle(0.5, "0x" + wormxt_Obj.colorBorde, 1);
        lxpdBackground.moveTo(0, 0);
        lxpdBackground.lineTo(d, r);
        lxpdBackground.arc(0, 0, o, n, s);
        lxpdBackground.lineTo(0, 0);
        lxpdBackground.endFill();
        if (t < 4) {
          var _ = f[t] + (c + 1);
          if (!lxpdBackground.getChildByName(_)) {
            var l = new PIXI.TextStyle({
              fontSize: "15px",
              fill: "0x00243E"
            });
            var b = new PIXI.Text(_, l);
            b.anchor.set(0.5);
            var h = n + (s - n) / 2;
            var u = o - a / 4;
            var p = 0 + Math.cos(h) * u;
            var m = 0 + Math.sin(h) * u;
            b.position.set(p, m);
            b.name = _;
            lxpdBackground.addChild(b);
          }
        }
      }
    }
  } else {
    lxpdBackground.removeChildren();
    lxpdBackground.clear();
    lxpdBackground.lineStyle(1, 16711680, 1);
    lxpdBackground.drawCircle(0, 0, 500);
    lxpdBackground.endFill();
  }
}
function decodeUnicode(x) {
  return x.replace(/\\u[\dA-F]{4}/gi, function (x) {
    return String.fromCharCode(parseInt(x.replace(/\\u/, ""), 16));
  }).replace(/\\u[0-9A-F]{2}/g, function (x) {
    return String.fromCharCode(parseInt(x.replace(/\\u/, ""), 16));
  });
}
const settings5dolars = async function (x) {
  function l(x, a, f) {
    $(x).on("input", function () {
      wormxt_Obj[a] = $(this).val();
      localStorage.setItem(f, $(this).val());
      console.log("Valor guardado en localStorage:", localStorage.getItem(f));
    });
  }
  wormxt_5dlrs_Obj.visiblePowersAll = true;
  $("#game-view").append("<i class=\"material-icons\"  id=\"user_config\" style=\"position: absolute;background-color: transparent;border-radius: 5px;\">menu</i>");
  $("#user_config").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("position", "absolute").css("display", "block");
    giroActive = false;
    toggleGiro();
  });
  $("#user_config").after("\n        <div id=\"settings-container2\">\n            <button id=\"clossed_Setings\">X</button>\n            <div class=\"label\" id=\"titleSetings\">Settings</div>\n            <div class=\"display_setting\">\n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"zoomVelocidad\"> " + lenguaje[idiomaActual].zoomVelocidad + "</span>\n                    <input id=\"zoomSpeed\" class=\"range\" type=\"range\" min=\"0.1\" max=\"5\" value=\"" + wormxt_Obj.zoomSpeed + "\" step=\"0.1\" oninput=\"zoomSpeedvalue.value=value\" />\n                    <output id=\"zoomSpeedvalue\">" + wormxt_Obj.zoomSpeed + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\" id=\"anchoPotenciador\" > " + lenguaje[idiomaActual].anchoPotenciador + "</span>\n                    <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"" + wormxt_Obj.PotenciadorSize + "\" step=\"1\" oninput=\"rangevalue1.value=value\" />\n                    <output id=\"rangevalue1\">" + wormxt_Obj.PotenciadorSize + "</output>\n                </div>\n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"auraPotenciador\"> " + lenguaje[idiomaActual].auraPotenciador + "</span>\n                    <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"" + wormxt_Obj.PotenciadorAura + "\" step=\"0.2\" oninput=\"PortionAuravalue.value=value\" />\n                    <output id=\"PortionAuravalue\">" + wormxt_Obj.PotenciadorAura + "</output>\n                </div>\n                <div class=\"container\">\n                    <span class=\"names_settings\" id=\"anchoComida\"> " + lenguaje[idiomaActual].anchoComida + "</span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaSize + "\" step=\"0.5\" oninput=\"rangevalue2.value=value\" />\n                    <output id=\"rangevalue2\">" + wormxt_Obj.ComidaSize + "</output>\n                </div>\n                <div class=\"container\">\n                <span class=\"names_settings\" id=\"brilloComida\"> " + lenguaje[idiomaActual].brilloComida + "</span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"" + wormxt_Obj.ComidaShadow + "\" step=\"0.5\" oninput=\"FoodShadowvalue.value=value\" />\n                    <output id=\"FoodShadowvalue\">" + wormxt_Obj.ComidaShadow + "</output>\n                </div>\n                <div class=\"settings-checkbox\">\n                    <input type=\"checkbox\" id=\"settings-backgroundSolid-switch\">\n                    <span class=\"names_settings\" id=\"fondo\"> " + lenguaje[idiomaActual].fondo + "</span>\n                </div>\n                <div id=\"settings5dolars\"></div>\n            </div>\n        </div>\n    ");
  $("#settings-backgroundSolid-switch").prop("checked", wormxt_Obj.backgroundSolid);
  $("#settings-backgroundSolid-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.backgroundSolid = true;
      setSectorsGame();
    } else {
      wormxt_Obj.backgroundSolid = false;
      setSectorsGame();
    }
  });
  $("#clossed_Setings").on("click", function () {
    $("#settings-container2, #clossed_Setings").css("display", "none");
    giroActive = true;
    toggleGiro();
  });
  l("#zoomSpeed", "zoomSpeed", "zoomSpeed");
  l("#PortionSize", "PotenciadorSize", "PotenciadorSize");
  l("#PortionAura", "PotenciadorAura", "PotenciadorAura");
  l("#FoodSize", "ComidaSize", "ComidaSize");
  l("#FoodShadow", "ComidaShadow", "ComidaShadow");
  let b = $("<div class=\"icon-selector\"></div>");
  for (let h = 1; h < 42; h++) {
    let u = "https://deltav4.gitlab.io/v7/assets/cursors/cursor_" + h.toString().padStart(2, "0") + ".cur";
    let p = h === 1 ? "active" : "";
    let m = $("<img>").attr({
      src: u
    });
    let v = $("<div>").addClass("cursor-box icon-selector__item").addClass(p).append(m);
    b.append(v);
  }
  $("#premium-panel").replaceWith(`
    <div id="premium-panel" style="box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 0px; text-align: left; overflow: hidden; width: 70%;">
        <h2 style="color: #00FF00; padding-left: 0;">Premium aktif edildi!</h2>
        <p style="color: #f9f9f9; padding-left: 0;">Premium version siz değerli oyuncularımıza değer katmaktadır.</p>
        <p style="color: #fff; font-weight: bold; padding-left: 0;">
        

    </div>
`);
  $("#user-section").after(`
  <div id="hotkeys-section" class="settings-secsat" style="display:none">
      <div class="settings-line" id="key-settings">
          <label for="zoom-key">Zoom:</label>
          <input type="text" id="zoom-key" class="key-input"><br>

          <label for="restart-key">Tekrar:</label>
          <input type="text" id="restart-key" class="key-input"><br>

          <label for="wormExplot-key">T. Başla:</label>
          <input type="text" id="wormExplot-key" class="key-input"><br>

          <label for="laserHSkey-key">Lazer Hs:</label>
          <input type="text" id="laserHSkey-key" class="key-input"><br>

          <label for="sectores-key">Sekt\xf6r:</label>
          <input type="text" id="sectores-key" class="key-input"><br>

          <label for="background-key">A. Plan:</label>
          <input type="text" id="background-key" class="key-input"><br>

          <label for="giro-key">Oto D\xf6n\xfcş:</label>
          <input type="text" id="giro-key" class="key-input"><br>

      </div>
  </div>
`);
  $("#zoom-key").val("z");
  $("#restart-key").val("r");
  $("#laserHSkey-key").val("l");
  $("#wormExplot-key").val("x");
  $("#giro-key").val("s");
  $("#sectores-key").val("q");
  $("#background-key").val("c");
  $("#hotkeys-icon").on("click", function () {
    $("#hotkeys-icon").addClass("active");
    $("#user-icon").removeClass("active");
    $("#hotkeys-section").toggle();
    $("#user-section").hide();
  });
  $(".key-input").keydown(function (x) {
    x.stopPropagation();
  });
  $(".key-input").keypress(function (x) {
    x.preventDefault();
    var a = x.key.toLowerCase();
    $(this).val(a);
    var f = $(this).attr("id");
    switch (f) {
      case "zoom-key":
        cambiarKey("zoom", a);
        break;
      case "restart-key":
        cambiarKey("restart", a);
        break;
      case "wormExplot-key":
        cambiarKey("wormExplot", a);
        break;
      case "laserHSkey-key":
        cambiarKey("laserHS", a);
        break;
      case "giro-key":
        cambiarKey("giro", a);
        break;
      case "sectores-key":
        cambiarKey("sectores", a);
        break;
      case "background-key":
        cambiarKey("background", a);
    }
    $(this).blur();
  });
  $("#user-section").append(b);
  $(".cursor-box").on("click", function () {
    var x = $(this).find("img").attr("src");
    $("body").css("cursor", "url(" + x + "), auto");
    $(".cursor-box").removeClass("active");
    $(this).addClass("active");
  });
  $("#mm-event-text").html("<span style='color: #98928a;' class='settings_span'>🎅 Üyelik Tarihi: " + x + "</span>");
  $("#wtr-settings-version").after("\n        <a href=\"https://www.myinstants.com/en/index/us/\" target=\"_blank\">1: " + lenguaje[idiomaActual].soundTuto1 + "</a>\n        <br>\n        <a href=\"https://catbox.moe/\" target=\"_blank\">2: " + lenguaje[idiomaActual].soundTuto2 + "</a>\n        <br>\n        <label for=\"sound-hs\">" + lenguaje[idiomaActual].soundTuto3 + ": </label>\n        <input type=\"text\" id=\"sound-hs\" class=\"sounds-input\"><br>\n        <label for=\"sound-hs\">" + lenguaje[idiomaActual].soundTuto4 + ": </label>\n        <input type=\"text\" id=\"sound-10hs\" class=\"sounds-input\"><br>\n    ");
  $("#sound-hs").val("https://wormatefriendsturkey.com/wormExtension/sounds/headshot_4.mp3");
  $("#sound-10hs").val("https://wormatefriendsturkey.com/wormExtension/sounds/hea-hea-headshot.mp3");
  lxpdhssound = new Audio($("#sound-hs").val());
  lxpdlaughsound = new Audio($("#sound-10hs").val());
  $("#sound-hs").on("input", function () {
    lxpdhssound.src = $(this).val();
  });
  $("#sound-10hs").on("input", function () {
    lxpdlaughsound.src = $(this).val();
  });
  $("#settings5dolars").after("<div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-laserHS-switch\"><span class=\"names_settings\" id=\"laser\"> " + lenguaje[idiomaActual].laser + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-sectores-switch\"><span class=\"names_settings\" id=\"sectores\"> " + lenguaje[idiomaActual].sectores + "</span></div><div class=\"settings-checkbox\"><input type=\"checkbox\" id=\"settings-notAbilityAll-switch\"><span class=\"names_settings\"> : notAbilityAll Show</span></div><div id=\"display_color\"><div class=\"container\"><input id=\"color_paletRGB\" type=\"color\" value=\"#000A11\"><span class=\"names_settings\"  id=\"colorJuego\" > " + lenguaje[idiomaActual].colorJuego + " </span></div><div class=\"container\"><input id=\"color_palet\" type=\"color\" value=\"#00243E\"><span class=\"names_settings\" id=\"colorLaser\"> " + lenguaje[idiomaActual].colorLaser + " </span></div><div class=\"container\"><input id=\"color_palet2\" type=\"color\" value=\"#01D9CC\"><span class=\"names_settings\" id=\"colorBorde\"> " + lenguaje[idiomaActual].colorBorde + "</span></div>");
  let g = {
    color_paletRGB: x => wormxt_Obj.colorFondo = x,
    color_palet: x => wormxt_Obj.laserColor = x,
    color_palet2: x => wormxt_Obj.colorBorde = x
  };
  $("#color_paletRGB, #color_palet, #color_palet2").change(function () {
    let x = $(this).attr("id");
    let a = $(this).val().replace("#", "");
    setSectorsGame();
    console.log("Recibiendo el color reemplazado para " + x + ": " + a);
    if (g[x]) {
      g[x](a);
    }
    setSectorsGame();
  });
  wormxt_5dlrs_Obj.visiblePowersAll = true;
  $("#settings-notAbilityAll-switch").prop("checked", wormxt_5dlrs_Obj.visiblePowersAll);
  $("#settings-notAbilityAll-switch").on("click", function () {
    if (this.checked) {
      wormxt_5dlrs_Obj.visiblePowersAll = true;
    } else {
      wormxt_5dlrs_Obj.visiblePowersAll = false;
    }
  });
  $("#settings-laserHS-switch").prop("checked", wormxt_Obj.laserHS);
  $("#settings-laserHS-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.laserHS = true;
    } else {
      wormxt_Obj.laserHS = false;
    }
  });
  $("#settings-interactive-switch").prop("checked", wormxt_Obj.interactive);
  $("#settings-interactive-switch").on("click", function () {
    if (this.checked) {
      lxpdexplotWubtracttexture.interactive = false;
    }
  });
  $("#settings-sectores-switch").prop("checked", wormxt_Obj.sectores);
  $("#settings-sectores-switch").on("click", function () {
    if (this.checked) {
      wormxt_Obj.sectores = true;
      setSectorsGame();
    } else {
      wormxt_Obj.sectores = false;
      setSectorsGame();
    }
  });
};
var TIME = new Date().getTime();
var linkCSS = "https://ii7modysmp-hue.github.io/test/css/game.css?v=" + TIME;
async function unlockSkinsPrivate(x) {
  var e = x.u.si.userId;
  var t = clientsSkins.clientsSkinsActivos.find(x => x.client_ID === e);
  if (t && t.Client_VisibleSkinPrivate) {
    console.log(t);
    let c = new Date();
    let n = new Date(t.client_DateExpired);
    if (c > n) {
      console.log("La fecha de skins expiración ha vencido.");
    } else {
      console.log("La fecha de skins expiración es válida.");
      let s = Array.isArray(t.Client_VisibleSkinPrivate) ? t.Client_VisibleSkinPrivate : [t.Client_VisibleSkinPrivate];
      s.forEach(x => {
        let a = theoKzObjects.idSkin.find(a => a.id === x);
        if (a) {
          a.nonbuyable = false;
        }
      });
      console.log("Skins privadas desbloqueadas para el usuario " + e + ":", s);
    }
  } else {
    console.log("No se encontraron skins privadas para el usuario " + e + ".");
  }
}
let giroActive = false;
function toggleGiro() {
  if (giroActive) {
    lxpdgirosubtracttexture.texture = ungirotexture;
    lxpdgirosubtracttexture.alpha = 0.25;
    console.log("Giro deactivated");
    isRunning = false;
    initialInterval = 55;
    cycleCounter = 1;
    isIncrementing = true;
    clearInterval(intervalID);
    intervalID = null;
  } else {
    lxpdgirosubtracttexture.alpha = 0.75;
    console.log("Giro activated");
    startInterval();
    isRunning = true;
  }
  giroActive = !giroActive;
}
const showServer2 = async function (x) {
  function d() {
    lxpdexplotWubtracttexture.interactive = false;
    var x = 0.0075;
    var a = 0;
    var f = setInterval(function () {
      var e = 1 - x * a;
      lxpdexplotWubtracttexture.alpha = e;
      if (++a > 100) {
        clearInterval(f);
        lxpdexplotWubtracttexture.alpha = 0.25;
        lxpdexplotWubtracttexture.interactive = true;
      }
    }, 100);
  }
  unlockSkinsPrivate(x);
  fetchCustomLogo(x.u.si.userId);
  zwormData.id_user = x.u.si.userId;
  loadStylesheet(linkCSS);
  loadStylesheet("https://fonts.googleapis.com/icon?family=Material+Icons");
  console.log(x, x.u.si.userId);
  lxpdhssound = new Audio("https://wormatefriendsturkey.com/wormExtension/sounds/headshot_4.mp3");
  lxpdlaughsound = new Audio("https://wormatefriendsturkey.com/wormExtension/sounds/hea-hea-headshot.mp3");
  (lxpdexplotWubtracttexture = new pixi.Sprite()).texture = explotWtexture;
  lxpdexplotWubtracttexture.interactive = true;
  lxpdexplotWubtracttexture.buttonMode = true;
  lxpdexplotWubtracttexture.x = -45;
  lxpdexplotWubtracttexture.y = 10;
  lxpdexplotWubtracttexture.alpha = 0.25;
  lxpdexplotWubtracttexture.on("mouseup", function () {
    d();
    let x = new Uint8Array([NaN, NaN]);
    anApp.o.Wb(x);
    setTimeout(() => {
      let x = lxpdlastserver;
      $(".overlay-2").css("position", "static");
      if (x) {
        anApp.r.Hd();
        anApp.sa(x);
      }
    }, 1000);
  });
  (lxpdgirosubtracttexture = new pixi.Sprite()).texture = ungirotexture;
  lxpdgirosubtracttexture.interactive = true;
  lxpdgirosubtracttexture.buttonMode = true;
  lxpdgirosubtracttexture.x = -10;
  lxpdgirosubtracttexture.y = 10;
  lxpdgirosubtracttexture.alpha = 0.25;
  lxpdgirosubtracttexture.on("mouseup", function () {
    toggleGiro();
  });
  if (lxpdmobilecheck()) {
    lxpdgirosubtracttexture.x = -75;
    lxpdexplotWubtracttexture.x = -10;
    lxpdexplotWubtracttexture.y = 45;
    let r = Function("return PIXI;")();
    let _ = r.Texture.from("https://i.imgur.com/kGjR9yf.png");
    let l = r.Texture.from("https://i.imgur.com/4JZUa1u.png");
    (lxpdzoomplustexture = new r.Sprite()).texture = _;
    lxpdzoomplustexture.interactive = true;
    lxpdzoomplustexture.buttonMode = true;
    lxpdzoomplustexture.x = -10;
    lxpdzoomplustexture.y = 10;
    lxpdzoomplustexture.alpha = 0.25;
    lxpdzoomplustexture.on("mouseup", function () {
      lxpdupdatezoom(Math.min(lxpdmultiplier + 0.25, 50));
    });
    (lxpdzoomsubtracttexture = new r.Sprite()).texture = l;
    lxpdzoomsubtracttexture.interactive = true;
    lxpdzoomsubtracttexture.buttonMode = true;
    lxpdzoomsubtracttexture.x = -43;
    lxpdzoomsubtracttexture.y = 10;
    lxpdzoomsubtracttexture.alpha = 0.25;
    lxpdzoomsubtracttexture.on("mouseup", function () {
      lxpdupdatezoom(Math.max(lxpdmultiplier - 0.25, 0.25));
    });
  }
  $("#game-canvas").after("<input type=\"text\" id=\"chatInput\" style=\"display: none; position: absolute;\" placeholder=\"Escribe tu mensaje...\" />");
  function b() {
    $("#chatInput").css("display", "none").val("");
    $("#game-canvas").focus();
  }
  function h() {
    let x = $("#chatInput").val();
    if ($.trim(x) !== "") {
      console.log("Mensaje enviado:", x);
      zwormData.message = x;
      setTimeout(() => {
        zwormData.message = "";
      }, 1500);
    }
  }
  $("#chatInput").on("keydown", function (x) {
    if (x.key === "Enter") {
      h();
      b();
    } else if (x.key === "Escape") {
      b();
    }
  });
  $("#mm-action-play").html("<i class=\"material-icons\">play_circle_filled</i><span>PLAY</span>");
  $("#mm-settings").html("<i class=\"material-icons\">settings</i>");
  $("#mm-leaders").html("<i class=\"material-icons\">leaderboard</i>");
  $("#mm-store").html("<i class=\"material-icons\">store</i>");
  $("#mm-wtr-settings").html("<i class=\"material-icons\">manage_accounts</i>");
  $("#mm-wtr-settings").after("<div id=\"mm-wtr-discord\"><i class=\"mdi--discord\"></i></div>");
  $("#mm-wtr-discord").on("click", function () {
    window.open("https://discord.com/invite/K9qj2sXHuX", "_blank");
  });
  $("#user-icon").on("click", function () {
    $("#user-icon").addClass("active");
    $("#hotkeys-icon").removeClass("active");
    $("#user-section").toggle();
    $("#hotkeys-section").hide();
  });
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/n9ebRPU.png);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
  $("#game-view").append("<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>");
  $("#aqnvgcpz05orkobh").replaceWith(`
    <div id="premium-panel" style="box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px; background-color: transparent; border-radius: 8px; padding: 0; text-align: left; width: 70%; margin: -10 auto;">
        <h2 style="color: #FF0000; margin: 10px 0;">Premium version al!</h2>
        <p style="color: #f9f9f9; margin: 5px 0;">Premium farkını yaşayın bir \xe7ok \xf6zellikler ile.</p>
        <p style="color: #fff; font-weight: bold; margin: 5px 0;">Bize hemen ulaşın!</p>

        <!-- Button to redirect to Discord -->
        <button id="buy-premium" style="background-color: #7289da; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; display: block; text-align: left; margin: 10px 0;">
            Hemen Ulaş
        </button>


        
    </div>
`);
  $("#buy-premium").on("click", function () {
    window.open("https://discord.com/invite/K9qj2sXHuX", "_blank");
  });
  $("#social-buttons").replaceWith("");
  $("#mm-skin-prev svg").remove();
  $("#mm-skin-next svg").remove();
  $(".mm-logo").attr("src", "https://i.imgur.com/RhyMHgw.png");
  $(".loading-logo").attr("src", "https://i.imgur.com/RhyMHgw.png");
  $("#mm-coins-buy span").remove();
  $("#mm-coins-box .mm-coins-img").remove();
  $("#mm-action-play, #wtrplayagain, #final-replay").click(function () {
    $(".overlay-2").css("position", "static");
  });
  $("#mm-wtr-settings").click(function () {
    $("#settings-view").css("display", "none");
  });
  $("#mm-skin-next").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin");
    }, 100);
  });
  $("#mm-skin-prev").click(function () {
    $("#mm-skin-canv").addClass("cambio-skin2");
    setTimeout(function () {
      $("#mm-skin-canv").removeClass("cambio-skin2");
    }, 100);
  });
  let u = ["#mm-action-play", "#mm-settings", "#mm-leaders", "#mm-store", "#mm-wtr-settings"];
  u.forEach(function (x) {
    $(x).hover(function () {
      $(this).css({
        "box-shadow": "inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)"
      });
    }, function () {
      $(this).css({
        "box-shadow": "0 1px 1px 0 rgba(0,0,0,.5)"
      });
    });
  });
  $(".mm-merchant-cont").replaceWith("");
  $("#fullscreen").prepend("<i class=\"material-icons\">fullscreen</i>");
  $("#wtrplayagain").prepend("<i class=\"material-icons\">replay</i>");
  $(".description-text").replaceWith("<div class=\"description-text\">");
  $(".description-text").prepend("<img class=\"logo-server\" src=\"https://i.imgur.com/YBLQK9N.gif\">");
  var p = [{
    code: "br",
    name: "Peru"
  }, {
    code: "mx",
    name: "Mexico"
  }, {
    code: "us",
    name: "EEUU"
  }, {
    code: "ca",
    name: "Canada"
  }, {
    code: "de",
    name: "Germania"
  }, {
    code: "fr",
    name: "Francia"
  }, {
    code: "sg",
    name: "Singapur"
  }, {
    code: "jp",
    name: "Japon"
  }, {
    code: "au",
    name: "Australia"
  }, {
    code: "gb",
    name: "Granbretana"
  }];
  var m = $("<ul class=\"ui-tabs-nav\"></ul>");
  for (var v = 0; v < p.length; v++) {
    var g = p[v];
    var k = "ui-tabs-tab ui-tab ui-tab-inactive" + v;
    var y = $("<li class=\"" + k + "\" ><a><span class=\"flag " + g.code + "\"></span></a></li>");
    y.attr("data-country-name", g.name);
    m.append(y);
    y.click(function () {
      $(".ui-tab-active").removeClass("ui-tab-active");
      $(this).addClass("ui-tab-active");
    });
  }
  $(".logo-server").after(m);
  $(".ui-tab-inactive0").addClass("ui-tab-active");
  m.after("<div class=\"servers-container\"><div class=\"servers-peru\"></div><div class=\"servers-mexico\" style=\"display: none;\"></div><div class=\"servers-eeuu\" style=\"display: none;\"></div><div class=\"servers-canada\" style=\"display: none;\"></div><div class=\"servers-germania\" style=\"display: none;\"></div><div class=\"servers-francia\" style=\"display: none;\"></div><div class=\"servers-singapur\" style=\"display: none;\"></div><div class=\"servers-japon\" style=\"display: none;\"></div><div class=\"servers-australia\" style=\"display: none;\"></div><div class=\"servers-granbretana\" style=\"display: none;\"></div>");
  $(".ui-tab").on("click", account);
  for (var w = 0; w < serverData.length; w++) {
    var j = serverData[w].dataCon;
    var S = serverData[w].dataRoom;
    var I = serverData[w].serverName;
    ".com";
    var C = serverData[w].imgSrc;
    let P = "<a>\n                        <img src=\"" + C + "\"    style=\" width: 30px;\">\n                    </a>";
    let A = S.match(/[a-zA-Z]+/g).join("");
    let M = document.createElement("p");
    M.innerHTML = I;
    let z = document.createElement("div");
    z.setAttribute("class", "conteiner");
    if (A == "br") {
      $(".servers-peru").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "mx") {
      $(".servers-mexico").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "us") {
      $(".servers-eeuu").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "ca") {
      $(".servers-canada").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "de") {
      $(".servers-germania").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "fr") {
      $(".servers-francia").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "sg") {
      $(".servers-singapur").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "jp") {
      $(".servers-japon").append(z);
      $(z).after(M);
    } else if (A == "au") {
      $(".servers-australia").append(z);
      $(z).append(M);
      $(M).after(P);
    } else if (A == "ae") {
      $(".servers-granbretana").append(z);
      $(z).append(M);
      $(M).after(P);
    }
    $(M).attr("class", "selectSala");
    $(M).attr("value", S);
    $(M).attr("data-con", j);
    $(M).click(function () {
      $(".overlay-2").css("position", "static");
      let a = $(this).attr("data-con");
      console.log(a);
      if (a) {
        x.r.Hd();
        x.sa(a);
        lxpdservertext.text = $(this).text();
        console.log($(this).text());
      }
    });
  }
  $(".logo-server").on("click", function () {
    var s = prompt("Extension 'W' or 'T':");
    if (s === "W") {
      $(".logo-server").text("Loading.");
      setTimeout(() => {
        $(".logo-server").text("Loading..");
        setTimeout(() => {
          $(".logo-server").text("Loading...");
          setTimeout(() => {
            $(".logo-server").text("WormWorld");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (w = 0; w < serverData.length; w++) {
          var f = serverData[w].dataCon;
          var e = serverData[w].dataRoom;
          var c = serverData[w].serverName;
          "https://xd";
          ".com";
          var n = serverData[w].imgSrc;
          let s = "<a>\n                        <img src=\"" + n + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let o = e.match(/[a-zA-Z]+/g).join("");
          let d = document.createElement("p");
          d.value = f;
          d.innerHTML = c;
          let r = document.createElement("div");
          r.setAttribute("class", "conteiner");
          if (o == "br") {
            $(".servers-peru").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "mx") {
            $(".servers-mexico").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "us") {
            $(".servers-eeuu").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "ca") {
            $(".servers-canada").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "de") {
            $(".servers-germania").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "fr") {
            $(".servers-francia").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "sg") {
            $(".servers-singapur").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "jp") {
            $(".servers-japon").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "au") {
            $(".servers-australia").append(r);
            $(r).append(d);
            $(d).append(s);
          } else if (o == "ae") {
            $(".servers-granbretana").append(r);
            $(r).append(d);
            $(d).append(s);
          }
          $(d).attr("class", "selectSala");
          $(d).attr("value", e);
          $(d).attr("data-con", f);
          $(d).click(function () {
            $(".overlay-2").css("position", "static");
            let f = $(this).attr("data-con");
            console.log(f);
            if (f) {
              x.r.Hd();
              x.sa(f);
              lxpdservertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 3000);
    } else if (s === "T") {
      $(".logo-server").text("Loading.");
      setTimeout(() => {
        $(".logo-server").text("Loading..");
        setTimeout(() => {
          $(".logo-server").text("Loading...");
          setTimeout(() => {
            $(".logo-server").text("Tim Map");
          }, 2000);
        }, 1500);
      }, 1000);
      $(".servers-peru").html("");
      $(".servers-mexico").html("");
      $(".servers-eeuu").html("");
      $(".servers-canada").html("");
      $(".servers-germania").html("");
      $(".servers-francia").html("");
      $(".servers-singapur").html("");
      $(".servers-japon").html("");
      $(".servers-australia").html("");
      $(".servers-granbretana").html("");
      setTimeout(() => {
        for (w = 0; w < serverDataTimMap.length; w++) {
          var f = serverDataTimMap[w].dataCon;
          var t = serverDataTimMap[w].dataRoom;
          var c = serverDataTimMap[w].serverName;
          var n = serverDataTimMap[w].imgSrc;
          serverDataTimMap[w].secondHref;
          let s = t.match(/[a-zA-Z]+/g).join("");
          let o = document.createElement("p");
          o.value = f;
          let d = "<a>\n                        <img src=\"" + n + "\"    style=\"margin-left: 100px;\">\n                    </a>";
          let r = /<a\s+href="null"[^>]*>[\s\S]*?<img\s+src="([^"]+)"[^>]*>([^"]+)<\/a>/;
          if (r.test(d)) {
            d = d.replace(r, "");
          }
          let _ = "<span style=\"background-color: #4dff00;width: 12px;height: 12px;border-radius: 12px;margin-top: 4px;float: right;\"></span>";
          let l = /<span style=\\"(.*?)"><\\\/span>/;
          if (l.test(c)) {
            c = c.replace(l, _);
          }
          o.innerHTML = c;
          let b = document.createElement("div");
          b.setAttribute("class", "conteiner");
          if (s == "BR") {
            $(".servers-peru").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "MX") {
            $(".servers-mexico").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "US") {
            $(".servers-eeuu").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "CA") {
            $(".servers-canada").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "DE") {
            $(".servers-germania").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "FR") {
            $(".servers-francia").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "SG") {
            $(".servers-singapur").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "JP") {
            $(".servers-japon").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "AU") {
            $(".servers-australia").append(b);
            $(b).append(o);
            $(o).append(d);
          } else if (s == "AE") {
            $(".servers-granbretana").append(b);
            $(b).append(o);
            $(o).append(d);
          }
          $(o).attr("class", "selectSala");
          $(o).attr("value", t);
          $(o).attr("data-con", f);
          $(o).click(function () {
            $(".overlay-2").css("position", "static");
            let f = $(this).attr("data-con");
            console.log(f);
            if (f) {
              x.r.Hd();
              x.sa(f);
              lxpdservertext.text = $(this).text();
              console.log($(this).text());
            }
          });
        }
      }, 3000);
    } else {
      alert("Ingresa 'W' o 'T' para continuar.");
    }
  });
};
const ctx = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
timeFontColors = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
for (let index = 0; index < timeFontColors.length; index++) {
  let color = timeFontColors[index];
  ctx.fontStyle["tfc" + index] = new PIXI.TextStyle({
    align: "center",
    fill: color,
    fontSize: 25,
    lineJoin: "round",
    whiteSpace: "normal",
    wordWrap: true,
    dropShadow: true,
    dropShadowBlur: 6,
    fontWeight: "bold"
  });
}
ctx.ptc = {};
const portionTimes = [40, 40, 40, 120, 40, 20, 40];
for (let i = 0; i < portionTimes.length; i++) {
  let name = "clock_ad" + i;
  ctx.ptc[name] = new PIXI.Text(portionTimes[i], ctx.fontStyle["tfc" + i]);
  ctx.ptc[name].y = 61;
}
ctx.imgTest_desactived = PIXI.Texture.fromImage("https://i.imgur.com/K7UPjJJ.jpg");
ctx.containerImgTest = new PIXI.Sprite(ctx.imgTest_desactived);
ctx.containerImgTest.anchor.set(0.5);
ctx.containerImgTest.x = window.innerWidth / 2;
ctx.containerImgTest.y = window.innerHeight / 2;
ctx.containerImgTest.alpha = 0.3;
ctx.pointsContainer = new PIXI.Container();
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    console.error("Error: window.coords no está definido correctamente o no contiene playerX y playerY.");
    return;
  }
  let a = "team_2";
  if (!ctx[a]) {
    ctx[a] = new PIXI.Graphics();
    ctx[a].zIndex = 2;
    ctx[a].alpha = 0.9;
    ctx[a].beginFill(16711680);
    ctx[a].drawCircle(0, 0, 2.4);
    ctx[a].endFill();
    ctx[a].lineStyle(1, "black");
    ctx[a].drawCircle(0, 0, 2.4);
    ctx[a].endFill();
  }
  ctx[a].x = window.coords.playerX;
  ctx[a].y = window.coords.playerY;
  if (ctx.pointsContainer) {
    ctx.pointsContainer.addChild(ctx[a]);
  } else {
    console.error("Error: ctx.pointsContainer no está definido.");
  }
};
ctx.teamsContainer = new PIXI.Container();
function createTeamMessage(x, a, f) {
  if (f.trim() !== "") {
    gameState.players.forEach((e, c) => {
      if (e.teamCode === x && e.nickname !== a) {
        let n = e.nickname.length > 12 ? e.nickname.slice(0, 12) : e.nickname;
        toastr.options = {
          closeButton: false,
          debug: false,
          newestOnTop: true,
          progressBar: true,
          positionClass: "toast-top-center",
          preventDuplicates: true,
          onclick: null,
          showDuration: "300",
          hideDuration: "1000",
          timeOut: "5000",
          extendedTimeOut: "1000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "fadeIn",
          hideMethod: "fadeOut"
        };
        toastr.success("" + f, "" + a, {
          iconClass: "toast-info"
        });
        console.log("Mensaje enviado por " + a + " recibido por el jugador " + n + " (" + c + ") del equipo " + x);
      }
    });
  }
}
function createTeamUbication(x, a) {
  gameState.players.forEach((f, t) => {
    if (f.teamCode === x) {
      console.log(f);
      let c = f.teamColor ? parseInt(f.teamColor) : a;
      if (!ctx[t]) {
        ctx[t] = new PIXI.Graphics();
        ctx[t].zIndex = 2;
        ctx[t].alpha = 0.9;
        if (ctx.teamsContainer) {
          ctx.teamsContainer.addChild(ctx[t]);
        } else {
          console.error("Error: ctx.teamsContainer is not defined.");
        }
      }
      ctx[t].clear();
      ctx[t].beginFill(c);
      ctx[t].drawCircle(0, 0, 2.4);
      ctx[t].endFill();
      ctx[t].lineStyle(1, 0);
      ctx[t].drawCircle(0, 0, 2.4);
      ctx[t].endFill();
      ctx[t].x = f.position.x;
      ctx[t].y = f.position.y;
    }
  });
}
function clearTeamUbication() {
  if (ctx.teamsContainer) {
    Object.keys(ctx).forEach(x => {
      if (ctx[x] instanceof PIXI.Graphics && ctx[x].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[x]);
        ctx[x].destroy(true);
        delete ctx[x];
      }
      if (ctx[x + "_text"] && ctx[x + "_text"].parent === ctx.teamsContainer) {
        ctx.teamsContainer.removeChild(ctx[x + "_text"]);
        ctx[x + "_text"].destroy(true);
        delete ctx[x + "_text"];
      }
    });
  } else {
    console.error("Error: ctx.teamsContainer is not defined.");
  }
}
ctx.titleRec = new PIXI.Text("Top 8 (T)", ctx.fontStyle.blanco);
ctx.titleRec.y = -5;
ctx.containerHsRec = new PIXI.Container();
ctx.containerHsRec.x = -55;
ctx.containerHsRec.y = 135;
const colors = [16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215, 16777215];
const textStyle = {
  align: "center",
  fontSize: 12,
  lineJoin: "round",
  strokeThickness: 1,
  whiteSpace: "normal",
  wordWrap: true,
  wordWrapWidth: 100
};
for (let index = 0; index < 8; index++) {
  let wallBounce = index + 1;
  let deltaCoordinate = new PIXI.Text(wallBounce + ".", ctx.fontStyle.blanco);
  deltaCoordinate.x = index >= 9 ? -5 : 0;
  deltaCoordinate.y = wallBounce * 13;
  ctx.containerHsRec.addChild(deltaCoordinate);
  let playerNameText = new PIXI.Text("--", {
    fill: colors[index % colors.length],
    ...textStyle
  });
  playerNameText.x = 15;
  playerNameText.y = wallBounce * 13;
  ctx.containerHsRec.addChild(playerNameText);
  let playerHsText = new PIXI.Text("--", {
    fill: colors[index % colors.length],
    ...textStyle
  });
  playerHsText.x = 100;
  playerHsText.y = wallBounce * 13;
  ctx.containerHsRec.addChild(playerHsText);
}
ctx.containerHsRec.addChild(ctx.titleRec);
const updateTop8Hs = x => {
  let a = x.slice(0, 8);
  for (let f = 0; f < 8; f++) {
    let e = a[f] || {
      nickname: "--",
      hs: "--"
    };
    if (ctx.containerHsRec.children[f * 3 + 1]) {
      ctx.containerHsRec.children[f * 3 + 1].text = e.nickname;
    }
    if (ctx.containerHsRec.children[f * 3 + 2]) {
      ctx.containerHsRec.children[f * 3 + 2].text = e.hs;
    }
  }
};
const testPlayers = [{
  nickname: "T☪ Unal",
  hs: 19
}, {
  nickname: "T☪rzu.gaming",
  hs: 13
}, {
  nickname: "Ƭɨ̇Ҝ.𝓨𝐈⎳⚡𝕯🅾",
  hs: 11
}, {
  nickname: "ＭｅｖｏＲｅｉｓ",
  hs: 9
}, {
  nickname: "𝓼𝓲𝓶𝓪𝓿43",
  hs: 6
}, {
  nickname: "ENERJİ",
  hs: 4
}, {
  nickname: "DadaşBey",
  hs: 3
}, {
  nickname: "Boluybeyi",
  hs: 3
}];
function assignPtcValues(x, a, f) {
  let t = portionTimes[a] - parseInt((f == 0.99 ? 1 : f) * portionTimes[a] / 1);
  let c = "clock_ad" + a;
  x.Tf[a].addChild(ctx.ptc[c]);
  if (ctx.ptc[c]) {
    ctx.ptc[c].x = t >= 100 ? 11 : t >= 10 ? 18 : 26;
    ctx.ptc[c].text = t;
  }
}
function account() {
  $(".servers-container > div").hide();
  $(".ui-tab").on("click", function () {
    var x = $(this).attr("data-country-name");
    $(".ui-tab").removeClass("ui-tab-active");
    $(this).addClass("ui-tab-active");
    $(".servers-container > div").hide();
    $(".servers-" + x.toLowerCase()).fadeIn(200);
    $(".servers-container > div").not(".servers-" + x.toLowerCase()).fadeOut(100);
  });
}
function obtieneUSER() {
  var f = {};
  window.onclick = function () {
    if ((f = window.nodes) && Object.keys(f).length > 0 && (console.log(f), f)) {
      var x = window.mouseX - f.qj.If.x;
      var e = window.mouseY - f.qj.If.y;
      var t = f.Mb.ad;
      var c = Math.sqrt(x * x + e * e);
      console.log("Cell:", f, "nickname: ", t, "Distance:", c);
    }
  };
}
function loadScript2(x, a = true) {
  return new Promise((e, t) => {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.src = x;
    c.defer = a;
    c.onload = e;
    c.onerror = t;
    document.head.appendChild(c);
  });
}
function loadStylesheet(x) {
  return new Promise((f, e) => {
    var t = document.createElement("link");
    t.rel = "stylesheet";
    t.type = "text/css";
    t.href = x;
    t.onload = f;
    t.onerror = e;
    document.head.appendChild(t);
  });
}
updateTop8Hs(testPlayers);
loadStylesheet("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");
loadScript2("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js");
loadStylesheet("https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css");
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (x) {
  return typeof x;
} : function (x) {
  if (x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof x;
  }
};
(function () {
  try {
    console.log(function (x, f) {
      for (var e = 0; e < f.length; e += 2) {
        x = x.replaceAll(f[e], f[e + 1]);
      }
      return x;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (f) {}
})();
window.addEventListener("load", function () {
  function f2() {
    (function (t, c, n) {
      function r(x, a) {
        return (x === undefined ? "undefined" : _typeof(x)) === a;
      }
      function _() {
        if (typeof c.createElement != "function") {
          return c.createElement(arguments[0]);
        } else if (g) {
          return c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return c.createElement.apply(c, arguments);
        }
      }
      var l = [];
      var b = [];
      var h = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (x, a) {
          var f = this;
          setTimeout(function () {
            a(f[x]);
          }, 0);
        },
        addTest: function (x, a, f) {
          b.push({
            name: x,
            fn: a,
            options: f
          });
        },
        addAsyncTest: function (x) {
          b.push({
            name: null,
            fn: x
          });
        }
      };
      function u() {}
      u.prototype = h;
      u = new u();
      var p = false;
      try {
        p = "WebSocket" in t && t.WebSocket.CLOSING === 2;
      } catch (m) {}
      u.addTest("websockets", p);
      var v = c.documentElement;
      var g = v.nodeName.toLowerCase() === "svg";
      u.addTest("canvas", function () {
        var x = _("canvas");
        return !!x.getContext && !!x.getContext("2d");
      });
      u.addTest("canvastext", function () {
        return u.canvas !== false && typeof _("canvas").getContext("2d").fillText == "function";
      });
      (function () {
        var x;
        var a;
        var f;
        var e;
        var t;
        var c;
        var n;
        for (var s in b) {
          if (b.hasOwnProperty(s)) {
            x = [];
            if ((a = b[s]).name && (x.push(a.name.toLowerCase()), a.options && a.options.aliases && a.options.aliases.length)) {
              for (f = 0; f < a.options.aliases.length; f++) {
                x.push(a.options.aliases[f].toLowerCase());
              }
            }
            t = 0;
            for (e = r(a.fn, "function") ? a.fn() : a.fn; t < x.length; t++) {
              if ((n = (c = x[t]).split(".")).length === 1) {
                u[n[0]] = e;
              } else {
                if (!!u[n[0]] && !(u[n[0]] instanceof Boolean)) {
                  u[n[0]] = new Boolean(u[n[0]]);
                }
                u[n[0]][n[1]] = e;
              }
              l.push((e ? "" : "no-") + n.join("-"));
            }
          }
        }
      })();
      (function (x) {
        var a = v.className;
        var f = u._config.classPrefix || "";
        if (g) {
          a = a.baseVal;
        }
        if (u._config.enableJSClass) {
          var e = RegExp("(^|\\s)" + f + "no-js(\\s|$)");
          a = a.replace(e, "$1" + f + "js$2");
        }
        if (u._config.enableClasses) {
          a += " " + f + x.join(" " + f);
          if (g) {
            v.className.baseVal = a;
          } else {
            v.className = a;
          }
        }
      })(l);
      delete h.addTest;
      delete h.addAsyncTest;
      for (var k = 0; k < u._q.length; k++) {
        u._q[k]();
      }
      t.Modernizr = u;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f2()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f3() {
      return window.anApp = vUndefined2;
    }
    function f4(x) {
      let a = x + "=";
      let f = document.cookie.split(";");
      for (let e = 0; e < f.length; e++) {
        let t = f[e];
        while (t.charAt(0) === " ") {
          t = t.substring(1);
        }
        if (t.indexOf(a) === 0) {
          return t.substring(a.length, t.length);
        }
      }
      return "";
    }
    function f5(x, a, f) {
      var e = new Date();
      e.setTime(e.getTime() + f * 86400000);
      var t = "expires=" + e.toUTCString();
      document.cookie = x + "=" + a + "; " + t + "; path=/";
    }
    function f6(x) {
      return window.I18N_MESSAGES[x];
    }
    function f7(x) {
      if (x[v2]) {
        return x[v2];
      } else if (x.en) {
        return x.en;
      } else {
        return x.x;
      }
    }
    function f8(x) {
      var a = (Math.floor(x) % 60).toString();
      var f = (Math.floor(x / 60) % 60).toString();
      var e = (Math.floor(x / 3600) % 24).toString();
      var t = Math.floor(x / 86400).toString();
      var c = f6("util.time.days");
      var n = f6("util.time.hours");
      var s = f6("util.time.min");
      var o = f6("util.time.sec");
      if (t > 0) {
        return t + " " + c + " " + e + " " + n + " " + f + " " + s + " " + a + " " + o;
      } else if (e > 0) {
        return e + " " + n + " " + f + " " + s + " " + a + " " + o;
      } else if (f > 0) {
        return f + " " + s + " " + a + " " + o;
      } else {
        return a + " " + o;
      }
    }
    function f9(x) {
      if (x.includes("href")) {
        return x.replaceAll("href", "target=\"_black\" href");
      } else {
        return x;
      }
    }
    function f10(x, a, f) {
      var e = document.createElement("script");
      var t = true;
      if (a) {
        e.id = a;
      }
      e.async = "async";
      e.type = "text/javascript";
      e.src = x;
      if (f) {
        e.onload = e.onreadystatechange = function () {
          t = false;
          try {
            f();
          } catch (x) {
            console.log(x);
          }
          e.onload = e.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
    }
    function f11(x, a) {
      a.prototype = Object.create(x.prototype);
      a.prototype.constructor = a;
      a.parent = x;
      return a;
    }
    function f12(x) {
      if ((x %= v10) < 0) {
        return x + v10;
      } else {
        return x;
      }
    }
    function f13(x, a, f) {
      return f14(f, x, a);
    }
    function f14(x, a, f) {
      if (x > f) {
        return f;
      } else if (x < a) {
        return a;
      } else if (Number.isFinite(x)) {
        return x;
      } else {
        return (a + f) * 0.5;
      }
    }
    function f15(x, a, f, e) {
      if (a > x) {
        return Math.min(a, x + f * e);
      } else {
        return Math.max(a, x - f * e);
      }
    }
    function f16(x, a, f, e, t) {
      return a + (x - a) * Math.pow(1 - e, f / t);
    }
    function f17(x, a, f) {
      return x * (1 - f) + a * f;
    }
    function f18(x, a, f, e) {
      var t = a + e;
      if (x == null) {
        throw TypeError("this is null or not defined");
      }
      var c = x.length >>> 0;
      var n = f >> 0;
      var s = n < 0 ? Math.max(c + n, 0) : Math.min(n, c);
      var o = a >> 0;
      var d = o < 0 ? Math.max(c + o, 0) : Math.min(o, c);
      var r = t === undefined ? c : t >> 0;
      var _ = r < 0 ? Math.max(c + r, 0) : Math.min(r, c);
      var l = Math.min(_ - d, c - s);
      var b = 1;
      for (d < s && s < d + l && (b = -1, d += l - 1, s += l - 1); l > 0;) {
        if (d in x) {
          x[s] = x[d];
        } else {
          delete x[s];
        }
        d += b;
        s += b;
        l--;
      }
      return x;
    }
    function f19(x) {
      if (x.parent != null) {
        x.parent.removeChild(x);
      }
    }
    function f20(x) {
      return x[parseInt(Math.random() * x.length)];
    }
    function f21() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f22(x, a, f) {
      var e = (1 - Math.abs(f * 2 - 1)) * a;
      var t = e * (1 - Math.abs(x / 60 % 2 - 1));
      var c = f - e / 2;
      if (x >= 0 && x < 60) {
        return [c + e, c + t, c + 0];
      } else if (x >= 60 && x < 120) {
        return [c + t, c + e, c + 0];
      } else if (x >= 120 && x < 180) {
        return [c + 0, c + e, c + t];
      } else if (x >= 180 && x < 240) {
        return [c + 0, c + t, c + e];
      } else if (x >= 240 && x < 300) {
        return [c + t, c + 0, c + e];
      } else {
        return [c + e, c + 0, c + t];
      }
    }
    function f23() {
      function t() {
        let a = theoKzObjects.adblock ? 1 : 5;
        $("#adbl-1").text(f6("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f6("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f6("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f6("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f6("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + o).fadeIn(500);
        var f = a;
        for (var t = 0; t < a; t++) {
          setTimeout(function () {
            f--;
            $("#adbl-4").text(f6("index.game.antiadblocker.msg4").replace("{0}", f));
            if (f === 0) {
              console.log("aipAABC");
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (a) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (t + 1) * 1000);
        }
      }
      var c = false;
      function n() {}
      var s = {};
      var o = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + o).fadeOut(500);
        n(false);
      });
      s.a = function (x) {
        n = x;
        if (!c) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (x) {
                  console.log("aipC");
                  n(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + o).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (a) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            c = true;
          } catch (s) {}
        }
      };
      s.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (a) {}
          t();
        } else {
          console.log("aipAABS");
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (f) {}
          t();
        }
      };
      return s;
    }
    function f24(x, a) {
      var e = $("#" + x);
      var t = {};
      var c = false;
      t.a = function () {
        if (!c) {
          e.empty();
          e.append("<div id='" + a + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (x) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(a);
            });
            c = true;
          } catch (f) {}
        }
      };
      t.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (x) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(a);
          });
        } catch (e) {}
      };
      return t;
    }
    function f25() {
      function d(x) {
        var a = x + Math.floor(Math.random() * 65535) * 37;
        f5(vF6.d, a, 30);
      }
      function r() {
        return parseInt(f4(vF6.d)) % 37;
      }
      return function () {
        var u = r();
        console.log("init1 pSC: " + u);
        if (!(u >= 0) || !(u < v172.e)) {
          u = Math.max(0, v172.e - 2);
          console.log("init2 pSC: " + u);
        }
        var p = {};
        vUndefined2 = p;
        p.f = v172;
        p.g = false;
        p.i = Date.now();
        p.j = 0;
        p.k = 0;
        p.l = null;
        p.m = vUndefined;
        p.n = v2;
        p.o = null;
        p.p = null;
        p.q = null;
        p.r = null;
        p.s = null;
        p.t = null;
        p.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (x) {
              if (x.coords !== undefined) {
                var a = x.coords;
                if (a.latitude !== undefined && a.longitude !== undefined) {
                  p.l = x;
                }
              }
            }, function (x) {});
          }
        } catch (m) {}
        p.v = function () {
          p.p = new vF2();
          p.q = new vF19();
          p.r = new vF4();
          p.s = new vF20();
          p.t = new vF16();
          p.u = new vF22();
          p.o = new f26();
          p.o.z = new vF12(p.o);
          p.a();
        };
        p.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (a) {}
          p.o.A = function () {
            p.o.B();
          };
          p.o.C = function () {
            var a = p.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", a);
            } catch (f) {}
            p.r.G(vF4.AudioState.H);
            p.s.I(p.s.H.J());
          };
          p.o.B = function () {
            var x;
            var a;
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e) {}
            if ($("body").height() >= 430) {
              p.f.K.c();
            }
            p.p.L();
            x = Math.floor(p.o.N.M);
            a = p.o.O;
            if (p.u.P()) {
              p.u.Q(function () {
                p.R(x, a);
              });
            } else {
              p.R(x, a);
            }
          };
          p.o.S = function (x) {
            x(p.s.H.T(), p.s.H.U());
          };
          p.u.V(function () {
            if (p.p.W) {
              p.r.G(vF4.AudioState.F);
              p.s.I(p.s.F);
            }
            if (p.u.P()) {
              try {
                var x = p.u.X();
                ga("set", "userId", x);
              } catch (a) {}
            }
            if (p.Y() && p.u.P() && !p.u.Z()) {
              p.$(false, false);
              p.s.aa._(new vV171());
            } else {
              p.ba(true);
            }
          });
          p.p.ca(function () {
            p.r.G(vF4.AudioState.F);
            p.s.I(p.s.F);
          });
          p.q.a(function () {
            p.o.a();
            p.r.a();
            p.s.a();
            p.t.a();
            p.p.a();
            p.u.a();
            if (p.Y() && !p.Z()) {
              p.s.aa._(new vV171());
            } else {
              p.ba(true);
            }
          });
        };
        p.da = function (x) {
          if (p.u.P()) {
            var a = p.u.ea();
            $.get(vAtob + "/pub/wuid/" + a + "/consent/change?value=" + encodeURI(x), function (x) {});
          }
        };
        p.fa = function (x) {
          var a = p.u.ea();
          var f = p.s.F.D();
          var e = p.s.F.ga();
          var t = p.t.ha(vF17.ia);
          var c = p.t.ha(vF17.ja);
          var n = p.t.ha(vF17.ka);
          var s = p.t.ha(vF17.la);
          var o = p.t.ha(vF17.ma);
          var d = 0;
          if (p.l != null) {
            var r = p.l.coords.latitude;
            var l = p.l.coords.longitude;
            d = Math.max(0, Math.min(32767, (r + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (l + 180) / 360 * 65536)) << 16;
          }
          _wrmxt.testSkinCustom(t);
          let b = "WFT_" + (t > 9999 ? "0000" : t.toString().padStart(4, 0)) + (o > 99999 ? "00000" : o.toString().padStart(5, 0));
          e = (e = (e.length >= 32 ? e.substr(0, 16) : e.substr(0, 16).padEnd(16)) + b).trim().replace(/\s/g, "ㅤ");
          console.log(e);
          zwormData.nickname = e;
          var h = vAtob + "/pub/wuid/" + a + "/start?gameMode=" + encodeURI(f) + "&gh=" + d + "&nickname=" + encodeURI(e) + "&skinId=" + _wrmxt.validInput(t) + "&eyesId=" + encodeURI(c) + "&mouthId=" + encodeURI(n) + "&glassesId=" + encodeURI(s) + "&hatId=" + encodeURI(o);
          console.log("urlRequest: " + h);
          $.get(h, function (a) {
            var f = a.server_url;
            x(f);
          });
        };
        p.na = function () {
          u++;
          console.log("start pSC: " + u);
          if (!p.f.oa && u >= p.f.e) {
            p.s.I(p.s.pa);
            p.r.G(vF4.AudioState.qa);
            p.f.ra.b();
          } else {
            d(u);
            p.sa();
            lxpdservertext.text = "";
          }
        };
        p.sa = function (x) {
          lxpdkillcount = 0;
          lxpdhscount = 0;
          if (p.o.ta()) {
            p.s.I(p.s.ua);
            p.r.G(vF4.AudioState.ua);
            var f = p.s.F.D();
            f5(vF6.va, f, 30);
            console.log("save gm: " + f);
            var e = p.s.xa.wa();
            f5(vF6.ya, e, 30);
            console.log("save sPN: " + e);
            if (p.u.P()) {
              p.fa(function (f) {
                lxpdlastserver = x || f;
                zwormData.wssServer = lxpdlastserver;
                p.o.za(x || f, p.u.ea());
              });
            } else {
              var t = p.s.F.ga();
              f5(vF6.Aa, t, 30);
              var n = p.t.ha(vF17.ia);
              f5(vF6.Ba, n, 30);
              p.fa(function (a) {
                lxpdlastserver = x || a;
                zwormData.wssServer = lxpdlastserver;
                p.o.Ca(x || a, t, n);
              });
            }
          }
        };
        p.R = function (x, a) {
          var f = p.s.F.ga();
          p.s.H.Da(x, a, f);
          p.r.G(vF4.AudioState.Ea);
          p.s.I(p.s.H.Fa());
        };
        p.Ga = function () {
          if (!p.Ha()) {
            return p.t.Ia();
          }
          var x = parseInt(f4(vF6.Ba));
          if (x != null && p.t.Ja(x, vF17.ia)) {
            return x;
          } else {
            return p.t.Ia();
          }
        };
        p.Ka = function (x) {
          f5(vF6.La, !!x, 1800);
        };
        p.Ha = function () {
          return f4(vF6.La) === "true";
        };
        p.ba = function (x) {
          if (x != p.g) {
            p.g = x;
            var a = a || {};
            a.consented = x;
            a.gdprConsent = x;
            p.f.Ma.a();
            p.f.K.a();
            p.f.ra.a(function (x) {
              if (x) {
                d(u = 0);
              }
              p.sa();
            });
          }
        };
        p.$ = function (x, a) {
          f5(vF6.Na, x ? "true" : "false");
          if (a) {
            p.da(x);
          }
          p.ba(x);
        };
        p.Z = function () {
          return f4(vF6.Na) === "true";
        };
        p.Y = function () {
          try {
            return !!window.isIPInEEA || p.l != null && !!vF7.Oa(p.l.coords.latitude, p.l.coords.longitude);
          } catch (x) {
            return true;
          }
        };
        p.Pa = function () {
          p.j = Date.now();
          p.k = p.j - p.i;
          p.o.Qa(p.j, p.k);
          p.s.Qa(p.j, p.k);
          p.i = p.j;
        };
        p.Ra = function () {
          p.s.Ra();
        };
        return p;
      }();
    }
    function f26() {
      var e = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF10(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      e.fb.ub = 500;
      e.N = new vF25(e.fb);
      e.a = function () {
        e.N.vb(f3().s.H.wb);
        setInterval(function () {
          e.S(function (x, a) {
            e.xb(x, a);
          });
        }, 10);
      };
      e.yb = function (x, a, f, t) {
        e.lb = x;
        e.mb = a;
        e.nb = f;
        e.ob = t;
        e.zb();
      };
      e.Ab = function (x) {
        e.kb = x;
        e.zb();
      };
      e.zb = function () {
        e.pb = e.lb - e.kb;
        e.qb = e.mb + e.kb;
        e.rb = e.nb - e.kb;
        e.sb = e.ob + e.kb;
      };
      e.Qa = function (x, a) {
        e.$a += a;
        e.Za -= e.Ya * 0.2 * a;
        e.z.Bb();
        if (e.db != null && (e.cb === 2 || e.cb === 3)) {
          e.Cb(x, a);
          e.jb = 4 + e.ib * e.N.Db;
        }
        var t = 1000 / Math.max(1, a);
        var c = 0;
        for (var n = 0; n < e.Xa.length - 1; n++) {
          c += e.Xa[n];
          e.Xa[n] = e.Xa[n + 1];
        }
        e.Xa[e.Xa.length - 1] = t;
        e.Wa = (c + t) / e.Xa.length;
      };
      e.Eb = function (x, a) {
        return x > e.pb && x < e.qb && a > e.rb && a < e.sb;
      };
      e.Cb = function (x, a) {
        var f;
        var t;
        var c = (e.$a + e.Za - e._a) / (e.ab - e._a);
        e.N.Fb(x, a);
        e.N.Gb(x, a, c, e.Eb);
        var n = 0;
        for (f in e.hb) {
          var s = e.hb[f];
          s.Fb(x, a);
          s.Gb(x, a, c, e.Eb);
          if (s.Hb && s.Db > n) {
            n = s.Db;
          }
          if (!s.Ib && (!!(s.Jb < 0.005) || !s.Hb)) {
            s.Kb();
            delete e.hb[s.Mb.Lb];
          }
        }
        e.Ab(n * 3);
        for (t in e.gb) {
          var o = e.gb[t];
          o.Fb(x, a);
          o.Gb(x, a, e.Eb);
          if (o.Nb && (o.Jb < 0.005 || !e.Eb(o.Ob, o.Pb))) {
            o.Kb();
            delete e.gb[o.Mb.Lb];
          }
        }
      };
      e.Qb = function (x, a) {
        if (e.cb === 1) {
          e.cb = 2;
          e.C();
        }
        var t = f3().j;
        e.bb = x;
        if (x === 0) {
          e._a = t - 95;
          e.ab = t;
          e.$a = e._a;
          e.Za = 0;
        } else {
          e._a = e.ab;
          e.ab = e.ab + a;
        }
        var c = e.$a + e.Za;
        e.Ya = (c - e._a) / (e.ab - e._a);
      };
      e.Rb = function () {
        if (e.cb === 1 || e.cb === 2) {
          e.cb = 3;
          var x = e.db;
          setTimeout(function () {
            if (e.cb === 3) {
              e.cb = 0;
            }
            if (x != null && x === e.db) {
              e.db.close();
              e.db = null;
            }
          }, 5000);
          e.B();
        }
      };
      e.ta = function () {
        return e.cb !== 2 && (e.cb = 1, e.z.Sb(), e.gb = {}, e.hb = {}, e.N.Tb(), e.db != null && (e.db.close(), e.db = null), true);
      };
      e.Ub = function () {
        e.db = null;
        e.z.Sb();
        if (e.cb !== 3) {
          e.A();
        }
        e.cb = 0;
      };
      e.za = function (x, a) {
        e.Vb(x, function () {
          console.log(a);
          if (wormxt_Obj.spawnInfinity) {
            var x = document.getElementById("mm-params-nickname").value;
            var t = Math.min(32, x.length);
            var c = new ArrayBuffer(7 + t * 2);
            var n = new DataView(c);
            var s = 0;
            n.setInt8(s, 129);
            s += 1;
            n.setInt16(s, 2800);
            s += 2;
            n.setInt8(s, 0);
            s += 1;
            n.setInt16(s, 128);
            s += 2;
            n.setInt8(s, t);
            s++;
            for (var o = 0; o < t; o++) {
              n.setInt16(s, x.charCodeAt(o));
              s += 2;
            }
            e.Wb(c);
          } else {
            var t = Math.min(2048, a.length);
            var c = new ArrayBuffer(6 + t * 2);
            var d = new DataView(c);
            var s = 0;
            d.setInt8(s, 129);
            s += 1;
            d.setInt16(s, 2800);
            s += 2;
            d.setInt8(s, 1);
            s += 1;
            d.setInt16(s, t);
            s += 2;
            for (var o = 0; o < t; o++) {
              d.setInt16(s, a.charCodeAt(o));
              s += 2;
            }
            e.Wb(c);
          }
        });
      };
      e.Ca = function (x, a, f) {
        e.Vb(x, function () {
          var x = Math.min(32, a.length);
          var c = new ArrayBuffer(7 + x * 2);
          var n = new DataView(c);
          var s = 0;
          n.setInt8(s, 129);
          s += 1;
          n.setInt16(s, 2800);
          s += 2;
          n.setInt8(s, 0);
          s += 1;
          n.setInt16(s, f);
          s += 2;
          n.setInt8(s, x);
          s++;
          for (var o = 0; o < x; o++) {
            n.setInt16(s, a.charCodeAt(o));
            s += 2;
          }
          e.Wb(c);
          console.log(c);
        });
      };
      e.Wb = function (x) {
        try {
          if (e.db != null && e.db.readyState === WebSocket.OPEN) {
            e.db.send(x);
          }
        } catch (a) {
          console.log("Socket send error: " + a);
          e.Ub();
        }
      };
      e.xb = function (x, a) {
        var f = a ? 128 : 0;
        var t = f12(x) / v10 * 128 & 127;
        var c = (f | t) & 255;
        if (e.eb !== c) {
          var n = new ArrayBuffer(1);
          new DataView(n).setInt8(0, c);
          e.Wb(n);
          e.eb = c;
        }
      };
      e.Vb = function (f, t) {
        var c = e.db = new WebSocket(f);
        c.binaryType = "arraybuffer";
        window.onOpen = c.onopen = function () {
          if (e.db === c) {
            console.log("Socket opened");
            t();
          }
          isPlaying = true;
        };
        window.onclose = c.onclose = function () {
          _wrmxt.aload = false;
          if (e.db === c) {
            console.log("Socket closed");
            e.Ub();
          }
          isPlaying = false;
        };
        c.onerror = function (x) {
          if (e.db === c) {
            console.log("Socket error");
            e.Ub();
          }
          isPlaying = false;
        };
        c.onmessage = function (x) {
          if (e.db === c) {
            e.z.Xb(x.data);
          }
        };
      };
      return e;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var vAtob = "https://gateway.wormate.io";
    var vAtob2 = "https://resources.wormate.io";
    var v2 = window.I18N_LANG;
    if (!v2) {
      v2 = "en";
    }
    var vUndefined = undefined;
    switch (v2) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v3;
    var v4;
    var v5;
    var v6;
    var v7;
    var v8;
    var v9;
    var vUndefined2 = undefined;
    v4 = (v3 = {
      Yb: eval("PIXI")
    }).Yb["BLEND_MODES"];
    v5 = v3.Yb["WRAP_MODES"];
    var vO = {
      Zb: v3.Yb["Container"],
      $b: v3.Yb["BaseTexture"],
      _b: v3.Yb["Texture"],
      ac: v3.Yb["Renderer"],
      bc: v3.Yb["Graphics"],
      cc: v3.Yb["Shader"],
      dc: v3.Yb["Rectangle"],
      ec: v3.Yb["Sprite"],
      fc: v3.Yb["Text"],
      gc: v3.Yb["Geometry"],
      hc: v3.Yb["Mesh"],
      ic: {
        jc: v4["ADD"]
      },
      kc: {
        lc: v5["REPEAT"],
        CLAMP: v3.Yb.WRAP_MODES.CLAMP
      }
    };
    var v10 = Math.PI * 2;
    v7 = (v6 = "Z2V0") + "SW50";
    v8 = v6 + "RmxvYXQ";
    v9 = [atob(v7 + "OA=="), atob(v7 + "MTY="), atob(v7 + "MzI="), atob(v8 + "zMg=="), atob(v8 + "2NA==")];
    DataView.prototype.mc = function (x) {
      return this[v9[0]](x);
    };
    DataView.prototype.nc = function (x) {
      return this[v9[1]](x);
    };
    DataView.prototype.oc = function (x) {
      return this[v9[2]](x);
    };
    DataView.prototype.pc = function (x) {
      return this[v9[3]](x);
    };
    DataView.prototype.qc = function (x) {
      return this[v9[4]](x);
    };
    var v11;
    var v12;
    var v13;
    var v14;
    var v15;
    var v16;
    var v17;
    var v18;
    var v19;
    var v20;
    var v21;
    var v22;
    var v23;
    var v24;
    var v25;
    var v26;
    var v27;
    var v28;
    var v29;
    var v30;
    var v31;
    var v32;
    var v33;
    var v34;
    var v35;
    var v36;
    var v37;
    var v38;
    var v39;
    var v40;
    var v41;
    var v42;
    var v43;
    var v44;
    var v45;
    var v46;
    var v47;
    var v48;
    var v49;
    var v50;
    var v51;
    var v52;
    var v53;
    var v54;
    var v55;
    var v56;
    var v57;
    var v58;
    var v59;
    var v60;
    var v61;
    var v62;
    var v63;
    var v64;
    var v65;
    var v66;
    var v67;
    var v68;
    var v69;
    var v70;
    var v71;
    var v72;
    var v73;
    var v74;
    var v75;
    var v76;
    var v77;
    var v78;
    var v79;
    var v80;
    var v81;
    var v82;
    var v83;
    var v84;
    var v85;
    var v86;
    var v87;
    var v88;
    var v89;
    var v90;
    var v91;
    var v92;
    var v93;
    var v94;
    var v95;
    var v96;
    var v97;
    var v98;
    var v99;
    var v100;
    var v101;
    var v102;
    var v103;
    var v104;
    var v105;
    var v106;
    var v107;
    var v108;
    var v109;
    var v110;
    var v111;
    var v112;
    var v113;
    var v114;
    var v115;
    var v116;
    var v117;
    var v118;
    var v119;
    var v120;
    var v121;
    var v122;
    var v123;
    var v124;
    var v125;
    var v126;
    var v127;
    var v128;
    var v129;
    var v130;
    var v131;
    var v132;
    var v133;
    var v134;
    var v135;
    var v136;
    var v137;
    var v138;
    var v139;
    var v140;
    var v141;
    var v142;
    var v143;
    var v144;
    var v145;
    var v146;
    var v147;
    var v148;
    var v149;
    var v150;
    var v151;
    var v152;
    var v153;
    var v154;
    var v155;
    var v156;
    var v157;
    var v158;
    var v159;
    var v160;
    var v161;
    var v162;
    var v163;
    var v164;
    var v165;
    var v166;
    var v167;
    var v168;
    var v169;
    var v170;
    var v171;
    var vF = function () {
      function x(x) {
        this.rc = x;
        this.sc = false;
        this.tc = 1;
      }
      x.VELOCITY_TYPE = 0;
      x.FLEXIBLE_TYPE = 1;
      x.MAGNETIC_TYPE = 2;
      x.ZOOM_TYPE = 6;
      x.X2_TYPE = 3;
      x.X5_TYPE = 4;
      x.X10_TYPE = 5;
      return x;
    }();
    var vF2 = function () {
      function f() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF3.yc();
      }
      function e(x, a) {
        for (var f in x) {
          if (x.hasOwnProperty(f)) {
            a(f, x[f]);
          }
        }
      }
      f.prototype.a = function () {
        this.L();
      };
      f.prototype.W = function () {
        return this.wc != null;
      };
      f.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f.prototype.Ac = function () {
        return this.wc;
      };
      f.prototype.L = function () {
        var x = this;
        $.get(vAtob2 + "/dynamic/assets/revision.json", function (a) {
          if (a > x.zc()) {
            x.Bc();
          }
        });
      };
      f.prototype.Bc = function () {
        var x = this;
        $.ajax({
          type: "POST",
          url: "https://ii7modysmp-hue.github.io/test/api/skins.php",
          data: JSON.stringify({
            reason: 1
          }),
          contentType: "application/json",
          success: function (a) {
            theoKzObjects.visibleSkin = a.visibleSkin;
            delete a.visibleSkin;
            theoKzObjects.pL = a.propertyList;
            theoKzObjects.idSkin = a.skinArrayDict;
            if (a.revision > x.zc()) {
              x.Cc(a);
            }
          },
          error: function (x, a, f) {
            console.error("Error al realizar la solicitud GET:", f);
          }
        });
      };
      f.prototype.ca = function (x) {
        this.uc.push(x);
      };
      f.prototype.Dc = function () {
        return this.xc;
      };
      f.prototype.Ec = function () {
        for (var x = 0; x < this.uc.length; x++) {
          this.uc[x]();
        }
      };
      f.prototype.Fc = function (x, f) {
        if (!(x.revision <= this.zc())) {
          e(this.vc, function (x, e) {
            var t = f[x];
            if (t == null || e.Gc !== t.Gc) {
              print("disposing prev texture: " + x + " at " + e.Gc);
              e.Hc.destroy();
            }
          });
          this.vc = f;
          this.wc = x;
          this.xc = vF3.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f.prototype.Cc = function (a) {
        var f = {};
        var e = [];
        var t = [];
        var c = 0;
        for (var n in a.textureDict) {
          if (a.textureDict.hasOwnProperty(n)) {
            var s = a.textureDict[n];
            var o = s.isCustom ? s.relativePath : vAtob2 + s.relativePath;
            var d = s.fileSize;
            var r = s.sha256;
            var _ = {
              id: n,
              path: o,
              fileSize: d,
              sha256: r
            };
            e.push(_);
            t.push(_);
            c += d;
            var o = s.relativePath;
            if (!s.isCustom) {
              o = vAtob2 + s.relativePath;
            }
            try {
              f[n] = new vF9(o, vO.$b.from(s.file || o));
            } catch (l) {
              console.log(o);
            }
          }
        }
        this.Fc(a, f);
      };
      return f;
    }();
    var vF3 = function () {
      function c() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function n(x, a) {
        for (var f in x) {
          if (x.hasOwnProperty(f)) {
            a(f, x[f]);
          }
        }
      }
      c.yc = function () {
        var x = new vF3();
        x.Jc = {};
        x.Kc = {
          Zc: null,
          $c: null
        };
        x.Lc = {};
        x.Mc = {
          Zc: null
        };
        x.Nc = {};
        x.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        x.Pc = {};
        x.Qc = {
          ad: {},
          bd: x.Oc,
          cd: x.Kc
        };
        x.Rc = {};
        x.Sc = {
          Zc: []
        };
        x.Tc = {};
        x.Uc = {
          Zc: []
        };
        x.Vc = {};
        x.Wc = {
          Zc: []
        };
        x.Xc = {};
        x.Yc = {
          Zc: []
        };
        return x;
      };
      c.Ic = function (t, c) {
        var _ = new vF3();
        var l = {};
        n(t.colorDict, function (x, a) {
          l[x] = a;
        });
        var b = {};
        n(t.regionDict, function (x, a) {
          b[x] = new vF18(c[a.texture].Hc, a.x, a.y, a.w, a.h, a.px, a.py, a.pw, a.ph);
        });
        _.Nc = {};
        for (var h = 0; h < t.skinArrayDict.length; h++) {
          var u = t.skinArrayDict[h];
          _.Nc[u.id] = new vF3.WormSkinData("#" + l[u.prime], u.base.map(function (x) {
            return b[x];
          }), u.glow.map(function (x) {
            return b[x];
          }));
        }
        var p = t.skinUnknown;
        _.Oc = new vF3.WormSkinData("#" + l[p.prime], p.base.map(function (x) {
          return b[x];
        }), p.glow.map(function (x) {
          return b[x];
        }));
        _.Rc = {};
        n(t.eyesDict, function (x, a) {
          x = parseInt(x);
          _.Rc[x] = new vF3.WearSkinData(a.base.map(function (x) {
            return b[x.region];
          }));
        });
        _.Sc = new vF3.WearSkinData(t.eyesUnknown.base.map(function (x) {
          return b[x.region];
        }));
        _.Tc = {};
        n(t.mouthDict, function (x, a) {
          x = parseInt(x);
          _.Tc[x] = new vF3.WearSkinData(a.base.map(function (x) {
            return b[x.region];
          }));
        });
        _.Uc = new vF3.WearSkinData(t.mouthUnknown.base.map(function (x) {
          return b[x.region];
        }));
        _.Vc = {};
        n(t.glassesDict, function (x, a) {
          x = parseInt(x);
          _.Vc[x] = new vF3.WearSkinData(a.base.map(function (x) {
            return b[x.region];
          }));
        });
        _.Wc = new vF3.WearSkinData(t.glassesUnknown.base.map(function (x) {
          return b[x.region];
        }));
        _.Xc = {};
        n(t.hatDict, function (x, a) {
          x = parseInt(x);
          _.Xc[x] = new vF3.WearSkinData(a.base.map(function (x) {
            return b[x.region];
          }));
        });
        _.Yc = new vF3.WearSkinData(t.hatUnknown.base.map(function (x) {
          return b[x.region];
        }));
        _.Jc = {};
        n(t.portionDict, function (x, a) {
          x = parseInt(x);
          _.Jc[x] = new vF3.PortionSkinData(b[a.base], b[a.glow]);
        });
        var m = t.portionUnknown;
        _.Kc = new vF3.PortionSkinData(b[m.base], b[m.glow]);
        _.Lc = {};
        n(t.abilityDict, function (x, f) {
          x = parseInt(x);
          _.Lc[x] = new vF3.AbilitySkinData(b[f.base]);
        });
        var v = t.abilityUnknown;
        _.Mc = new vF3.AbilitySkinData(b[v.base]);
        _.Pc = {};
        n(t.teamDict, function (a, f) {
          a = parseInt(a);
          _.Pc[a] = new vF3.TeamSkinData(f.name, new vF3.WormSkinData("#" + l[f.skin.prime], [], f.skin.glow.map(function (x) {
            return b[x];
          })), new vF3.PortionSkinData([], b[f.portion.glow]));
        });
        _.Qc = new vF3.TeamSkinData({}, _.Oc, _.Kc);
        return _;
      };
      c.prototype.dd = function (x) {
        return this.Nc[x] || this.Oc;
      };
      c.prototype.ed = function (x) {
        return this.Pc[x] || this.Qc;
      };
      c.prototype.fd = function (x) {
        return this.Rc[x] || this.Sc;
      };
      c.prototype.gd = function (x) {
        return this.Tc[x] || this.Uc;
      };
      c.prototype.hd = function (x) {
        return this.Vc[x] || this.Wc;
      };
      c.prototype.jd = function (x) {
        return this.Xc[x] || this.Yc;
      };
      c.prototype.kd = function (x) {
        return this.Jc[x] || this.Kc;
      };
      c.prototype.ld = function (x) {
        return this.Lc[x] || this.Mc;
      };
      c.TeamSkinData = function () {
        function x(x, a, f) {
          this.ad = x;
          this.bd = a;
          this.cd = f;
        }
        return x;
      }();
      c.WormSkinData = function () {
        function x(x, a, f) {
          this._c = x;
          this.Zc = a;
          this.$c = f;
        }
        return x;
      }();
      c.WearSkinData = function () {
        function x(x) {
          this.Zc = x;
        }
        return x;
      }();
      c.PortionSkinData = function () {
        function x(x, a) {
          this.Zc = x;
          this.$c = a;
        }
        return x;
      }();
      c.AbilitySkinData = function () {
        function x(x) {
          this.Zc = x;
        }
        return x;
      }();
      return c;
    }();
    var vF4 = function () {
      function c() {
        this.md = vF4.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      c.prototype.a = function () {};
      c.prototype.rd = function (x) {
        this.od = x;
      };
      c.prototype.G = function (x) {
        this.md = x;
        this.sd();
      };
      c.prototype.td = function (x) {
        this.nd = x;
        this.sd();
      };
      c.prototype.sd = function () {};
      c.prototype.ud = function (x, a) {
        if (!f3().p.W) {
          return null;
        }
        var f = x[a];
        if (f == null || f.length == 0) {
          return null;
        } else {
          return f[Math.floor(Math.random() * f.length)].cloneNode();
        }
      };
      c.prototype.vd = function (x, a, f) {
        if (this.od && !(f <= 0)) {
          var t = this.ud(x, a);
          if (t != null) {
            t.volume = Math.min(1, f);
            t.play();
          }
        }
      };
      c.prototype.wd = function (x, a) {
        if (this.md.xd) {
          this.vd(app.q.yd, x, a);
        }
      };
      c.prototype.zd = function (x, a) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, x, a);
        }
      };
      c.prototype.Cd = function () {};
      c.prototype.Dd = function () {};
      c.prototype.Ed = function () {};
      c.prototype.Fd = function () {};
      c.prototype.Gd = function () {};
      c.prototype.Hd = function () {};
      c.prototype.Id = function (x, a, f) {};
      c.prototype.Jd = function (x) {};
      c.prototype.Kd = function (x) {};
      c.prototype.Ld = function (x) {};
      c.prototype.Md = function (x) {};
      c.prototype.Nd = function (x) {};
      c.prototype.Od = function (x) {};
      c.prototype.Pd = function (x) {};
      c.prototype.Qd = function (x) {};
      c.prototype.Rd = function (x) {};
      c.prototype.Sd = function (x) {};
      c.prototype.Td = function (x) {};
      c.prototype.Ud = function (x) {};
      c.prototype.Vd = function (x) {};
      c.prototype.Wd = function (x) {};
      c.prototype.Xd = function (x, a) {};
      c.prototype.Yd = function (x) {};
      c.prototype.Zd = function (x, a, f) {};
      (function () {
        function a(a) {
          this.$d = new n(a, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        a.prototype.be = function (x) {
          if (x) {
            this.b();
          } else {
            this.ce();
          }
        };
        a.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        a.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function t(x) {
          this.ge = x.map(function (x) {
            return new n(x, 0.4);
          });
          c(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function c(x, a, f) {
          for (var e = f - 1; e > a; e--) {
            var t = a + Math.floor(Math.random() * (e - a + 1));
            var c = x[e];
            x[e] = x[t];
            x[t] = c;
          }
        }
        t.prototype.be = function (x) {
          if (x) {
            this.b();
          } else {
            this.ce();
          }
        };
        t.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        t.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        t.prototype.ke = function (x) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(x, 100);
            var a = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var t = this;
            var c = setTimeout(function () {
              if (t.ae && c == t.ie) {
                t.he.fe(t.je, 100);
                t.he = t.le();
                t.he._d.currentTime = 0;
                t.ke(t.je);
              }
            }, a);
            this.ie = c;
          }
        };
        t.prototype.le = function () {
          var a = this.ge[0];
          var f = Math.max(1, this.ge.length / 2);
          c(this.ge, f, this.ge.length);
          this.ge.push(this.ge.shift());
          return a;
        };
      })();
      var n = function () {
        function e(a, f) {
          this._d = a;
          this.me = f;
          this.de = 0;
          a.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        e.prototype.ee = function (x, a) {
          console.log("fade IN " + this._d.src);
          this.pe(true, x, a);
        };
        e.prototype.fe = function (x, a) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, x, a);
        };
        e.prototype.pe = function (x, f, e) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var t = this;
          var c = 1 / (f / e);
          var n = setInterval(function () {
            if (t.oe && n != t.ne) {
              clearInterval(n);
              return;
            }
            if (x) {
              t.de = Math.min(1, t.de + c);
              t._d.volume = t.de * t.me;
              if (t.de >= 1) {
                t.oe = false;
                clearInterval(n);
              }
            } else {
              t.de = Math.max(0, t.de - c);
              t._d.volume = t.de * t.me;
              if (t.de <= 0) {
                t._d.pause();
                t.oe = false;
                clearInterval(n);
              }
            }
          }, e);
          this.oe = true;
          this.ne = n;
          this._d.play();
        };
        return e;
      }();
      c.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return c;
    }();
    var vF5 = function () {
      function f(x) {
        this.se = x;
        this.te = x.get()[0];
        this.ue = new vO.ac({
          view: this.te,
          backgroundColor: 0,
          antialias: true
        });
        this.ve = new vO.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      function e(x, a) {
        return x + Math.random(a - x);
      }
      function t(x) {
        if (x >= 0) {
          return Math.cos(x % v10);
        } else {
          return Math.cos(x % v10 + v10);
        }
      }
      function c(x) {
        if (x >= 0) {
          return Math.sin(x % v10);
        } else {
          return Math.sin(x % v10 + v10);
        }
      }
      var n = [{
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: e(0, v10),
        Ae: e(0, v10),
        Be: e(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f.prototype.a = function () {
        var x = f3();
        this.ue.backgroundColor = 0;
        this.we = Array(n.length);
        for (var f = 0; f < this.we.length; f++) {
          this.we[f] = new vO.ec();
          this.we[f].texture = x.q.Fe;
          this.we[f].anchor.set(0.5);
          this.we[f].zIndex = 1;
        }
        this.xe = Array(x.q.Ge.length);
        for (var e = 0; e < this.xe.length; e++) {
          this.xe[e] = new vO.ec();
          this.xe[e].texture = x.q.Ge[e];
          this.xe[e].anchor.set(0.5);
          this.xe[e].zIndex = 2;
          this.ve.addChild(this.xe[e]);
        }
        this.ye = Array(this.xe.length);
        for (var t = 0; t < this.ye.length; t++) {
          this.ye[t] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f.sc = false;
      f.Le = function (x) {
        f.sc = x;
      };
      f.prototype.Ra = function () {
        var x = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var a = this.se.width();
        var f = this.se.height();
        this.ue.resize(a, f);
        this.ue.resolution = x;
        this.te.width = x * a;
        this.te.height = x * f;
        var e = Math.max(a, f) * 0.8;
        for (var t = 0; t < this.we.length; t++) {
          this.we[t].width = e;
          this.we[t].height = e;
        }
      };
      f.prototype.Pa = function (a, e) {
        if (f.sc) {
          var s = a / 1000;
          var o = e / 1000;
          var d = this.se.width();
          var r = this.se.height();
          for (var _ = 0; _ < this.we.length; _++) {
            var l = n[_ % n.length];
            var b = this.we[_];
            var h = t(l.Ce * (s * 0.08) + l.Ae);
            var u = c(l.De * (s * 0.08));
            var p = 0.2 + t(l.Ae + l.Be * s) * 0.2;
            b.tint = l.Ee;
            b.alpha = p;
            b.position.set(d * (0.2 + (h + 1) * 0.5 * 0.6), r * (0.1 + (u + 1) * 0.5 * 0.8));
          }
          var m = Math.max(d, r) * 0.05;
          for (var v = 0; v < this.xe.length; v++) {
            var g = this.ye[v];
            var k = this.xe[v];
            var y = v10 * v / this.xe.length + g.He;
            g.Ke += g.Ie * o;
            if (g.Ke > 1.3) {
              g.He = Math.random() * v10;
              g.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              g.Je = 0.15 + Math.random() * 0.7;
              g.Ke = -0.3;
            }
            var w = g.Je + Math.sin(Math.sin(y + s * 0.48) * 6) * 0.03;
            var j = g.Ke;
            var S = f14(Math.sin(Math.PI * j), 0.1, 1);
            var I = (0.4 + (1 + Math.sin(y + s * 0.12)) * 0.5 * 1.2) * 0.5;
            var C = y + g.Ie * 2 * s;
            k.alpha = S;
            k.position.set(d * w, r * j);
            k.rotation = C;
            var P = k.texture.width / k.texture.height;
            k.width = I * m;
            k.height = I * m * P;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f;
    }();
    var vF6 = function () {
      function x() {}
      x.Na = "consent_state_2";
      x.ya = "showPlayerNames";
      x.Me = "musicEnabled";
      x.Ne = "sfxEnabled";
      x.Oe = "account_type";
      x.va = "gameMode";
      x.Aa = "nickname";
      x.Ba = "skin";
      x.d = "prerollCount";
      x.La = "shared";
      return x;
    }();
    var vF7 = function () {
      function x(x, a, f) {
        var e = false;
        var t = f.length;
        var c = 0;
        for (var n = t - 1; c < t; n = c++) {
          if (f[c][1] > a != f[n][1] > a && x < (f[n][0] - f[c][0]) * (a - f[c][1]) / (f[n][1] - f[c][1]) + f[c][0]) {
            e = !e;
          }
        }
        return e;
      }
      var a = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (f, e) {
          return x(e, f, a);
        }
      };
    }();
    var vF8 = function () {
      function f(x) {
        var a = undefined;
        a = x > 0 ? "+" + Math.floor(x) : x < 0 ? "-" + Math.floor(x) : "0";
        var f = Math.min(1.5, 0.5 + x / 600);
        var e = undefined;
        if (x < 1) {
          e = "0xFFFFFF";
        } else if (x < 30) {
          var c = (x - 1) / 29;
          e = t((1 - c) * 1 + c * 0.96, (1 - c) * 1 + c * 0.82, (1 - c) * 1 + c * 0);
        } else if (x < 300) {
          var s = (x - 30) / 270;
          e = t((1 - s) * 0.96 + s * 0.93, (1 - s) * 0.82 + s * 0.34, (1 - s) * 0 + s * 0.25);
        } else if (x < 700) {
          var o = (x - 300) / 400;
          e = t((1 - o) * 0.93 + o * 0.98, (1 - o) * 0.34 + o * 0, (1 - o) * 0.25 + o * 0.98);
        } else {
          e = t(0.98, 0, 0.98);
        }
        var d = Math.random();
        var r = 1 + Math.random() * 0.5;
        return new n(a, e, true, 0.5, f, d, r);
      }
      function e(x, a) {
        var f = undefined;
        var e = undefined;
        if (a) {
          f = 1.3;
          e = t(0.93, 0.34, 0.25);
        } else {
          f = 1.1;
          e = t(0.96, 0.82, 0);
        }
        return new n(x, e, true, 0.5, f, 0.5, 0.7);
      }
      function t(x, a, f) {
        return ((x * 255 & 255) << 16) + ((a * 255 & 255) << 8) + (f * 255 & 255);
      }
      var c = f11(vO.Zb, function () {
        vO.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      c.prototype.Re = function (x) {
        this.Qe += x;
        if (this.Qe >= 1) {
          var a = Math.floor(this.Qe);
          this.Qe -= a;
          var e = f(a);
          this.addChild(e);
          this.Pe.push(e);
        }
      };
      c.prototype.Se = function (x) {
        if (x) {
          lxpdhscount += 1;
          zwormData.hs = lxpdhscount;
          if (lxpdhscount % 10) {
            lxpdhssound.play();
          } else {
            lxpdlaughsound.play();
          }
          var a = e(f6("index.game.floating.headshot") + "☠️", true);
          this.addChild(a);
          this.Pe.push(a);
        } else {
          lxpdkillcount += 1;
          var a = e(f6("index.game.floating.wellDone") + "🔪", false);
          this.addChild(a);
          this.Pe.push(a);
        }
      };
      c.prototype.Te = function (x, f) {
        var e = f3().s.H.wb;
        var t = e.ue.width / e.ue.resolution;
        var c = e.ue.height / e.ue.resolution;
        for (var n = 0; n < this.Pe.length;) {
          var s = this.Pe[n];
          s.Ue = s.Ue + f / 2000 * s.Ve;
          s.We = s.We + f / 2000 * s.Xe;
          s.alpha = Math.sin(Math.PI * s.We) * 0.5;
          s.scale.set(s.Ue);
          s.position.x = t * (0.25 + s.Ye * 0.5);
          s.position.y = s.Ze ? c * (1 - (1 + s.We) * 0.5) : c * (1 - (0 + s.We) * 0.5);
          if (s.We > 1) {
            f19(s);
            this.Pe.splice(n, 1);
            n--;
          }
          n++;
        }
      };
      var n = f11(vO.fc, function (a, f, e, t, c, n, s) {
        vO.fc.call(this, a, {
          fill: f,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.Ze = e;
        this.Ue = t;
        this.Ve = c;
        this.Ye = n;
        this.We = 0;
        this.Xe = s;
      });
      return c;
    }();
    var vF9 = function () {
      function x(x, a) {
        this.Gc = x;
        this.Hc = a;
      }
      return x;
    }();
    var vO2 = {
      $e: 0,
      _e: 16
    };
    var vF10 = function () {
      function x() {
        this.af = vO2.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      x.TEAM_DEFAULT = 0;
      x.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return x;
    }();
    var vF11 = function () {
      function s(x) {
        this.se = x;
        this.te = x.get()[0];
        this.ue = new vO.ac({
          view: this.te,
          backgroundColor: 0,
          antialias: true
        });
        this.ve = new vO.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF23();
        this.mf = new vO.bc();
        this.nf = new vO.Zb();
        this.pf = new vO.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vO.Zb();
        this.rf = new vO.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vO.Zb();
        this.tf = new w();
        this.uf = new j();
        this.vf = new S();
        this.wf = new vF8();
        this.xf = new vO.ec();
        this.yf = {
          x: 0,
          y: 0
        };
        this.a();
      }
      s.prototype.a = function () {
        lxpdjoysticks = [];
        lxpdjoystick = -1;
        (lxpdservertext = new vO.fc("", {
          fontFamily: "Arial",
          fontSize: 12,
          fill: "#ffffff",
          align: "center"
        })).x = 25;
        if (lxpdmobilecheck()) {
          lxpdjoysticks[0] = new Joystick({
            onChange(x) {
              x.aradian = x.angle * (Math.PI / 180);
              anApp.s.H.sk = x.aradian <= Math.PI ? x.aradian * -1 : Math.PI - (x.aradian - Math.PI);
            }
          });
          lxpdjoysticks[0].visible = false;
          lxpdjoysticks[1] = new Joystick({
            outer: vO.ec.from("https://i.imgur.com/UKIZZmr.png"),
            inner: vO.ec.from("https://i.imgur.com/IqQGK58.png"),
            onChange(x) {
              x.aradian = x.angle * (Math.PI / 180);
              anApp.s.H.sk = x.aradian <= Math.PI ? x.aradian * -1 : Math.PI - (x.aradian - Math.PI);
            }
          });
          lxpdjoysticks[1].visible = false;
          lxpdjoysticks[2] = new Joystick({
            outer: vO.ec.from("https://i.imgur.com/Hg3sKn0.png"),
            inner: vO.ec.from("https://i.imgur.com/ZFifUoX.png"),
            onChange(a) {
              a.aradian = a.angle * (Math.PI / 180);
              anApp.s.H.sk = a.aradian <= Math.PI ? a.aradian * -1 : Math.PI - (a.aradian - Math.PI);
            }
          });
          lxpdjoysticks[2].visible = false;
          for (let e = 0; e < lxpdjoysticks.length; e++) {
            this.rf.addChild(lxpdjoysticks[e]);
          }
        }
        (lxpdzoomtext = new vO.fc("", {
          align: "center",
          fill: "#fff",
          fontSize: 12,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        })).x = 100;
        lxpdzoomtext.y = 90;
        this.rf.addChild(lxpdzoomtext);
        this.ue.backgroundColor = 0;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        (lxpdBackground = new vO.bc()).zIndex = 20;
        this.ve.addChild(lxpdBackground);
        (ctxHeadshotLine = new vO.bc()).zIndex = 20;
        this.ve.addChild(ctxHeadshotLine);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f3().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      s.prototype.Ra = function () {
        var x = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var a = this.se.width();
        var f = this.se.height();
        this.ue.resize(a, f);
        this.ue.resolution = x;
        this.te.width = x * a;
        this.te.height = x * f;
        this.jf = Math.min(Math.min(a, f), Math.max(a, f) * 0.625);
        this.xf.position.x = a / 2;
        this.xf.position.y = f / 2;
        this.xf.width = a;
        this.xf.height = f;
        this.tf.position.x = 60;
        this.tf.position.y = 60;
        this.uf.position.x = 110;
        this.uf.position.y = 10;
        this.vf.position.x = a - 225;
        this.vf.position.y = 1;
        this.tf.addChild(ctx.pointsContainer);
        this.tf.addChild(ctx.teamsContainer);
        this.tf.addChild(ctx.containerHsRec);
      };
      s.prototype.Te = function (x, a) {
        var f = f3();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(x.af == vO2.$e ? f.q.Cf : f.q.Df);
        if (wormxt_Obj && wormxt_Obj.backgroundSolid || wormxt_Obj.sectores) {
          setSectorsGame();
        } else {
          lxpdBackground.removeChildren();
          lxpdBackground.clear();
          lxpdBackground.lineStyle(1, 16711680, 1);
          lxpdBackground.drawCircle(0, 0, 500);
          lxpdBackground.endFill();
        }
        this.vf.Ef = a;
        this.sf.visible = a;
      };
      s.prototype.Pa = function (x, a) {
        if (!(this.ue.width <= 5)) {
          var f = f3();
          var e = f.o.N;
          var t = this.ue.width / this.ue.resolution;
          var c = this.ue.height / this.ue.resolution;
          this.if = f15(this.if, f.o.jb, a, 0.002);
          var n = this.jf / (this.if * lxpdmultiplier);
          var s = f.o.N.Ff[vF.ZOOM_TYPE];
          var o = s != null && s.sc;
          this.kf = f13(0, 1, this.kf + a / 1000 * ((o ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + a * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(x / 1200 * 2 * Math.PI);
          var d = e.Gf();
          this.yf.x = f16(this.yf.x, d.x, a, theoKzObjects.smoothCamera, 33.333);
          this.yf.y = f16(this.yf.y, d.y, a, 0.5, 33.333);
          var r = t / n / 2;
          var _ = c / n / 2;
          f.o.yb(this.yf.x - r * 1.3, this.yf.x + r * 1.3, this.yf.y - _ * 1.3, this.yf.y + _ * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, r * 2, _ * 2);
          var l = f.o.fb.ub;
          this.ve.scale.x = n;
          this.ve.scale.y = n;
          this.ve.position.x = t / 2 - this.yf.x * n;
          this.ve.position.y = c / 2 - this.yf.y * n;
          if (theoKzObjects.dead) {
            window.coords = {
              playerX: this.tf.Jf.position.x,
              playerY: this.tf.Jf.position.y
            };
          }
          zwormData.playerX = this.tf.Jf.position.x;
          zwormData.playerY = this.tf.Jf.position.y;
          if (wormxt_Obj.laserHS) {
            ctxHeadshotLine.clear();
            ctxHeadshotLine.lineStyle(0.1, "0x" + wormxt_Obj.laserColor, 1);
            ctxHeadshotLine.moveTo(d.x, d.y);
            ctxHeadshotLine.lineTo(0, 0);
            ctxHeadshotLine.endFill();
          } else {
            ctxHeadshotLine.clear();
          }
          var b = Math.hypot(d.x, d.y);
          if (b > l - 10) {
            this.hf = f13(0, 1, 1 + (b - l) / 10);
            var h = Math.cos(this.ff * v10 / 360) * (1 - this.hf) + this.hf * 1;
            var u = Math.sin(this.ff * v10 / 360) * (1 - this.hf);
            var p = (Math.atan2(u, h) + v10) % v10 * 360 / v10;
            var m = this.hf * (0.5 + this.gf * 0.5);
            var v = f22(Math.floor(p), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(v[0], v[1], v[2], 0.1 + m * 0.2);
          } else {
            this.hf = 0;
            var g = f22(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(g[0], g[1], g[2], 0.1);
          }
          for (var k = 0; k < this.sf.children.length; k++) {
            var y = this.sf.children[k];
            y.position.x = t / 2 - (this.yf.x - y.If.x) * n;
            y.position.y = c / 2 - (this.yf.y - y.If.y) * n;
          }
          this.tf.Jf.position.x = d.x / l * this.tf.Kf;
          this.tf.Jf.position.y = d.y / l * this.tf.Kf;
          this.tf.WLp.position.x = -25 - this.tf.WLp.width / 2;
          this.tf.WLp.text = parseInt(lxpdhscount);
          this.tf.MLb.position.x = 25 - this.tf.MLb.width / 2;
          this.tf.MLb.text = parseInt(lxpdkillcount);
          this.uf.Qa(x);
          this.wf.Te(x, a);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      s.prototype.Lf = function (x, a) {
        a.Of.Nf.Mf().zIndex = (x + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(a.Of.Pf.Mf());
        this.pf.addChild(a.Of.Nf.Mf());
      };
      s.prototype.Qf = function (x, a, f) {
        $(".Worm_cerca").text(" : " + f.text);
        a.Rf.zIndex = f3().o.fb.bf ? 0 : 10 + (x + 32768) / 65536 * 5000;
        this.qf.addChild(a.Rf);
        if (x != f3().o.fb.bf) {
          this.sf.addChild(f);
        }
      };
      var o;
      var d;
      var r;
      var _;
      var l;
      var b;
      var h;
      var u;
      var p;
      var m;
      var v;
      var g;
      var k;
      var y;
      o = {
        _0x944f96: 2625,
        _0x20cc5e: 1971,
        _0x2dbc03: 631,
        _0x5cc243: 2162,
        _0x2de505: 1015,
        _0x4476d7: 1463,
        _0xbaf87f: 631,
        _0x536fd3: 1806,
        _0xadfd12: 1661,
        _0x3ea656: 1416,
        _0x360f1c: 1746,
        _0x30c6b0: 1369,
        _0x1c3ef3: 1416,
        _0x30dc09: 886,
        _0x547b93: 2704,
        _0x521981: 1991,
        _0x5d8bfe: 1220,
        _0x2f8078: 886,
        _0x412f51: 613,
        _0x554ef9: 1949,
        _0x1aeb34: 2238,
        _0x11d492: 2133,
        _0x26395d: 1231,
        _0x5b1f9d: 2384,
        _0x567c8c: 2670,
        _0x2c2b3f: 1231,
        _0xda7ce1: 613,
        _0x364280: 2670,
        _0x44d3be: 2238,
        _0x4eed8d: 1231,
        _0x1f3b24: 1949,
        _0x181d9e: 1049,
        _0x56a5ff: 1231,
        _0x426b7f: 2751,
        _0x13d989: 1806,
        _0x239b3f: 1806
      };
      d = {
        _0x3cde71: 1735,
        _0x4083f3: 2670
      };
      r = {
        _0x25bcb8: 2670
      };
      _ = {
        _0x3c5904: 2133,
        _0x120225: 2670,
        _0x270e60: 2670,
        _0x1f71e1: 1735
      };
      l = {
        _0x15c3b7: 1735
      };
      var w = f11(vO.Zb, function () {
        vO.Zb[__DECODE_0__(o._0x944f96)](this);
        this.Kf = 40;
        this.Sf = new vO.ec();
        this.Sf.anchor.set(0.5);
        this.Jf = new vO.bc();
        var x = new vO.bc();
        x[__DECODE_0__(o._0x20cc5e)]("black", 0.4);
        x.drawCircle(0, 0, this.Kf);
        x[__DECODE_0__(o._0x2dbc03)]();
        x.lineStyle(2, 14930642);
        x.drawCircle(0, 0, this.Kf);
        x.moveTo(0, -this.Kf);
        x.lineTo(0, +this.Kf);
        x.moveTo(-this.Kf, 0);
        x[__DECODE_0__(o._0x5cc243)](+this.Kf, 0);
        x.endFill();
        this.Sf.alpha = 0.5;
        this.Jf.zIndex = 2;
        this.Jf[__DECODE_0__(o._0x2de505)] = 0.9;
        this.Jf.beginFill(65307);
        this.Jf[__DECODE_0__(o._0x4476d7)](0, 0, this.Kf * 0.12);
        this.Jf.endFill();
        this.Jf.lineStyle(1, "black");
        this.Jf.drawCircle(0, 0, this.Kf * 0.12);
        this.Jf[__DECODE_0__(o._0xbaf87f)]();
        this[__DECODE_0__(o._0x536fd3)](x);
        this[__DECODE_0__(o._0x536fd3)](this.Sf);
        this.addChild(this.Jf);
        console.log(this.Jf);
        var a = new vO.fc("HS", {
          fontFamily: __DECODE_0__(o._0xadfd12),
          fontSize: 16,
          fill: __DECODE_0__(o._0x3ea656),
          align: "center"
        });
        a[__DECODE_0__(o._0x360f1c)].y = 50;
        a.position.x = -35;
        var f = new vO.fc(__DECODE_0__(o._0x30c6b0), {
          fontFamily: __DECODE_0__(o._0xadfd12),
          fontSize: 16,
          fill: __DECODE_0__(o._0x1c3ef3),
          align: __DECODE_0__(o._0x30dc09)
        });
        f[__DECODE_0__(o._0x360f1c)].y = 50;
        f.position.x = 10;
        this.addChild(a);
        this.addChild(f);
        lxpdkillcount = 0;
        lxpdhscount = 0;
        this.WLp = new vO.fc("", {
          fontFamily: "Arial",
          fontSize: 14,
          fill: __DECODE_0__(o._0x547b93),
          align: __DECODE_0__(o._0x30dc09)
        });
        this[__DECODE_0__(o._0x521981)].position.y = 67;
        this.WLp.position.x = -45;
        this[__DECODE_0__(o._0x5d8bfe)] = new vO.fc("", {
          fontFamily: "Arial",
          fontSize: 14,
          fill: "#FFFFFF",
          align: __DECODE_0__(o._0x2f8078)
        });
        this.MLb.position.y = 67;
        this.MLb.position.x = 20;
        this.addChild(this.WLp);
        this.addChild(this.MLb);
        let e = new vO._b(vO.$b.from("https://i.imgur.com/VPkrI9l.png"));
        var t = new vO.ec();
        t.texture = e;
        t.width = 100;
        t.height = 100;
        t.x = -50;
        t.y = -50;
        this.addChild(t);
        if (lxpdmobilecheck()) {
          var c = document.getElementById("game-cont");
          lxpdmobilecontrol = 0;
          lxpdmobilecontrol2 = -1;
          lxpdmobileprediction = 0;
          lxpdmobilepredictiontextures = [];
          (lxpdmobilecontroltextures = [])[0] = new vO.ec.from(__DECODE_0__(o._0x412f51) + __DECODE_0__(o._0x554ef9) + "aOyOob6.png");
          lxpdmobilecontroltextures[0][__DECODE_0__(o._0x1aeb34)] = 80;
          lxpdmobilecontroltextures[0].height = 40;
          lxpdmobilecontroltextures[0].x = -100 + c[__DECODE_0__(o._0x11d492) + "h"] * 0.5;
          lxpdmobilecontroltextures[0].y = -60;
          lxpdmobilecontroltextures[0].on("tap", () => {
            lxpdmobilecontrol++;
            lxpdjoystick = 0;
            lxpdmobileprediction = -1;
            for (let x = 0; x < lxpdmobilepredictiontextures[__DECODE_0__(l._0x15c3b7)]; x++) {
              lxpdmobilepredictiontextures[x].visible = false;
            }
            for (let a = 0; a < lxpdmobilecontroltextures.length; a++) {
              lxpdmobilecontroltextures[a].visible = lxpdmobilecontrol === a;
            }
          });
          lxpdmobilecontroltextures[1] = new vO.ec[__DECODE_0__(o._0x26395d)]("https://i.imgur.com/9ui2KwE.png");
          lxpdmobilecontroltextures[1].width = 80;
          lxpdmobilecontroltextures[1][__DECODE_0__(o._0x5b1f9d)] = 40;
          lxpdmobilecontroltextures[1].x = -100 + c.offsetWidth * 0.5;
          lxpdmobilecontroltextures[1].y = -60;
          lxpdmobilecontroltextures[1][__DECODE_0__(o._0x567c8c)] = false;
          lxpdmobilecontroltextures[1].on("tap", () => {
            if (lxpdmobilecontrol2 !== 1) {
              if (++lxpdmobilecontrol2 == 0) {
                lxpdmobilearrowtexture.x = 15;
                lxpdmobilepeedtexture.x = -250 + c[__DECODE_0__(_._0x3c5904) + "h"];
                lxpdmobilearrowtexture[__DECODE_0__(_._0x120225)] = true;
                lxpdmobilepeedtexture.visible = true;
              }
              if (lxpdmobilecontrol2 === 1) {
                lxpdmobilearrowtexture.x = -250 + c.offsetWidth;
                lxpdmobilepeedtexture.x = 15;
              }
              lxpdmobileprediction = 1;
              lxpdjoystick = -1;
              for (let x = 0; x < lxpdmobilepredictiontextures.length; x++) {
                lxpdmobilepredictiontextures[x].visible = lxpdmobileprediction === x;
              }
              return;
            }
            lxpdmobilearrowtexture.visible = false;
            lxpdmobilepeedtexture[__DECODE_0__(_._0x270e60)] = false;
            lxpdjoystick = 1;
            lxpdmobilecontrol++;
            for (let a = 0; a < lxpdmobilecontroltextures[__DECODE_0__(_._0x1f71e1)]; a++) {
              lxpdmobilecontroltextures[a][__DECODE_0__(_._0x120225)] = lxpdmobilecontrol === a;
            }
          });
          lxpdmobilecontroltextures[2] = new vO.ec[__DECODE_0__(o._0x2c2b3f)](__DECODE_0__(o._0xda7ce1) + __DECODE_0__(o._0x554ef9) + "NKAyYa8.png");
          lxpdmobilecontroltextures[2].width = 80;
          lxpdmobilecontroltextures[2][__DECODE_0__(o._0x5b1f9d)] = 40;
          lxpdmobilecontroltextures[2].x = -100 + c.offsetWidth * 0.5;
          lxpdmobilecontroltextures[2].y = -60;
          lxpdmobilecontroltextures[2][__DECODE_0__(o._0x364280)] = false;
          lxpdmobilecontroltextures[2].on("tap", () => {
            lxpdmobilecontrol++;
            lxpdmobileprediction = 2;
            lxpdjoystick = 2;
            for (let x = 0; x < lxpdmobilepredictiontextures.length; x++) {
              lxpdmobilepredictiontextures[x][__DECODE_0__(r._0x25bcb8)] = lxpdmobileprediction === x;
            }
            for (let a = 0; a < lxpdmobilecontroltextures.length; a++) {
              lxpdmobilecontroltextures[a].visible = lxpdmobilecontrol === a;
            }
          });
          lxpdmobilecontroltextures[3] = new vO.ec[__DECODE_0__(o._0x26395d)]("https://i.imgur.com/n1jVrwm.png");
          lxpdmobilecontroltextures[3][__DECODE_0__(o._0x44d3be)] = 80;
          lxpdmobilecontroltextures[3].height = 40;
          lxpdmobilecontroltextures[3].x = -100 + c[__DECODE_0__(o._0x11d492) + "h"] * 0.5;
          lxpdmobilecontroltextures[3].y = -60;
          lxpdmobilecontroltextures[3].visible = false;
          lxpdmobilecontroltextures[3].on("tap", () => {
            lxpdmobilecontrol = 0;
            lxpdmobilecontrol2 = -1;
            lxpdmobileprediction = 0;
            lxpdjoystick = -1;
            for (let x = 0; x < lxpdmobilepredictiontextures[__DECODE_0__(d._0x3cde71)]; x++) {
              lxpdmobilepredictiontextures[x][__DECODE_0__(d._0x4083f3)] = lxpdmobileprediction === x;
            }
            for (let a = 0; a < lxpdmobilecontroltextures.length; a++) {
              lxpdmobilecontroltextures[a].visible = lxpdmobilecontrol === a;
            }
          });
          lxpdmobilepredictiontextures[0] = new vO.ec[__DECODE_0__(o._0x4eed8d)]("https://i." + __DECODE_0__(o._0x1f3b24) + "4ccZ556.png");
          lxpdmobilepredictiontextures[0].width = 16;
          lxpdmobilepredictiontextures[0].height = 16;
          lxpdmobilepredictiontextures[0].x = 0;
          lxpdmobilepredictiontextures[0].y = 0;
          lxpdmobilepredictiontextures[0][__DECODE_0__(o._0x2de505)] = 0;
          lxpdmobilepredictiontextures[1] = new vO.ec[__DECODE_0__(o._0x2c2b3f)]("https://i." + __DECODE_0__(o._0x554ef9) + __DECODE_0__(o._0x181d9e) + "g");
          lxpdmobilepredictiontextures[1].width = 16;
          lxpdmobilepredictiontextures[1].height = 16;
          lxpdmobilepredictiontextures[1].x = 0;
          lxpdmobilepredictiontextures[1].y = 0;
          lxpdmobilepredictiontextures[1].visible = false;
          lxpdmobilepredictiontextures[2] = new vO.ec.from("https://i.imgur.com/WqWsDfi.png");
          lxpdmobilepredictiontextures[2].width = 16;
          lxpdmobilepredictiontextures[2].height = 16;
          lxpdmobilepredictiontextures[2].x = 0;
          lxpdmobilepredictiontextures[2].y = 0;
          lxpdmobilepredictiontextures[2][__DECODE_0__(o._0x567c8c)] = false;
          (lxpdmobilearrowtexture = new vO.ec[__DECODE_0__(o._0x56a5ff)](__DECODE_0__(o._0x412f51) + "imgur.com/mHp0ozi.png")).width = 100;
          lxpdmobilearrowtexture.height = 100;
          lxpdmobilearrowtexture.x = 15;
          lxpdmobilearrowtexture.y = -210 + c.offsetHeight;
          lxpdmobilearrowtexture.visible = false;
          (lxpdmobilepeedtexture = new vO.ec[__DECODE_0__(o._0x2c2b3f)]("https://i.imgur.com/" + __DECODE_0__(o._0x426b7f) + "g")).width = 80;
          lxpdmobilepeedtexture[__DECODE_0__(o._0x5b1f9d)] = 80;
          lxpdmobilepeedtexture.x = -250 + c[__DECODE_0__(o._0x11d492) + "h"];
          lxpdmobilepeedtexture.y = -200 + c.offsetHeight;
          lxpdmobilepeedtexture.visible = false;
          lxpdmobilepeedtexture.alpha = 0.5;
          this[__DECODE_0__(o._0x13d989)](lxpdmobilearrowtexture);
          this[__DECODE_0__(o._0x239b3f)](lxpdmobilepeedtexture);
          for (let n = 0; n < lxpdmobilecontroltextures.length; n++) {
            this.addChild(lxpdmobilecontroltextures[n]);
          }
          for (let s = 0; s < lxpdmobilepredictiontextures.length; s++) {
            this[__DECODE_0__(o._0x239b3f)](lxpdmobilepredictiontextures[s]);
          }
        }
      });
      (b = f11(vO.Zb, function () {
        vO.Zb.call(this);
        this.Tf = {};
      })).prototype.Qa = function (x) {
        var a;
        var f = 0.5 + Math.cos(v10 * (x / 1000 / 1.6)) * 0.5;
        for (a in this.Tf) {
          var e = this.Tf[a];
          var t = e.Uf;
          e.alpha = 1 - t + t * f;
        }
      };
      b.prototype.Te = function (x) {
        for (a in this.Tf) {
          if (x[a] == null || !x[a].sc) {
            f19(this.Tf[a]);
            delete this.Tf[a];
          }
        }
        var a;
        var f;
        var t = 0;
        for (f in x) {
          var c = x[f];
          if (c.sc) {
            var n = this.Tf[f];
            if (!n) {
              var s = f3().p.Dc().ld(c.rc).Zc;
              (n = new h()).texture = s.Hc;
              n.width = 40;
              n.height = 40;
              this.Tf[f] = n;
              this.addChild(n);
            }
            assignPtcValues(this, f, c.tc);
            n.Uf = c.tc;
            n.position.x = t;
            t += 40;
          }
        }
      };
      h = f11(vO.ec, function () {
        vO.ec.call(this);
        this.Uf = 0;
      });
      var j = b;
      u = {
        _0x3014d4: 1746,
        _0x29cd58: 1735,
        _0x3f4d9c: 1735,
        _0x396efd: 1746,
        _0x203699: 1806
      };
      (p = f11(vO.Zb, function () {
        vO.Zb.call(this);
        this.Ef = true;
        this.Vf = 12;
        this.Wf = 9;
        this.Pe = [];
        for (var x = 0; x < 14; x++) {
          this.Xf();
        }
      })).prototype.Te = function (x) {
        if (lxpdzoomplustexture) {
          this.addChild(lxpdzoomplustexture);
        }
        if (lxpdzoomsubtracttexture) {
          this.addChild(lxpdzoomsubtracttexture);
        }
        if (lxpdgirosubtracttexture) {
          this.addChild(lxpdgirosubtracttexture);
        }
        if (lxpdexplotWubtracttexture) {
          this.addChild(lxpdexplotWubtracttexture);
        }
        if (lxpdservertext.text !== "") {
          this.addChild(lxpdservertext);
        }
        if (zwormData) {
          sendPlayerUpdate(zwormData.playerX, zwormData.playerY);
        } else {
          console.log("Las coordenadas de zwormData no están definidas aún.");
        }
        var f = f3();
        var e = f.o.fb.af == vO2._e;
        var t = 0;
        var c = 0;
        if (c >= this.Pe.length) {
          this.Xf();
        }
        this.Pe[c].Yf(1, "white");
        this.Pe[c].Zf("", lxpdservertext.text === "" ? "Top " + lxpdtoplist : "", `(${f.o.tb} 🌍)`);
        this.Pe[c].position.y = t;
        t += this.Vf;
        c += 1;
        if (x.$f.length > 0) {
          t += this.Wf;
        }
        for (var n = 0; n < x.$f.length; n++) {
          var s = x.$f[n];
          var o = f.p.Dc().ed(s._f);
          if (c >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[c].Yf(0.8, o.bd._c);
          console.log(o);
          this.Pe[c].Zf("" + (n + 1), "Equipos / Teams", "" + Math.floor(s.M));
          this.Pe[c].position.y = t;
          t += this.Vf;
          c += 1;
        }
        if (x.ag.length > 0) {
          t += this.Wf;
        }
        for (var d = 0; d < x.ag.length; d++) {
          var r = x.ag[d];
          var _ = f.o.fb.bf == r.bg;
          var l = undefined;
          var b = undefined;
          if (_) {
            l = "white";
            b = f.o.N.Mb.ad;
          } else {
            var h = f.o.hb[r.bg];
            if (h != null) {
              l = e ? f.p.Dc().ed(h.Mb.cg).bd._c : f.p.Dc().dd(h.Mb.dg)._c;
              b = this.Ef ? h.Mb.ad : "---";
            } else {
              l = "gray";
              b = "?";
            }
          }
          if (_) {
            t += this.Wf;
          }
          if (c >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[c].Yf(_ ? 1 : 0.8, l);
          if (f.o.O === c) {
            this.Pe[c].Yf(1, "white");
          }
          var u = Math.floor(r.M);
          u.customFormat();
          this.Pe[c].Zf("" + (d + 1), b, "" + u.customFormat());
          this.Pe[c].position.y = t;
          t += this.Vf;
          c += 1;
          if (_) {
            t += this.Wf;
          }
        }
        for (f.o.O > x.ag.length && (t += this.Wf, c >= this.Pe.length && this.Xf(), this.Pe[c].Yf(1, "#FFFFFF"), window.tuNewScore = Math.floor(f.o.N.M), window.tuNewScore.customFormat(), this.Pe[c].Zf("" + f.o.O, f.o.N.Mb.ad, "" + window.tuNewScore.customFormat()), this.Pe[c].position.y = t, t += this.Vf, c += 1, t += this.Wf); this.Pe.length > c;) {
          f19(this.Pe.pop());
        }
      };
      p.prototype.Xf = function () {
        var x = new y();
        x[__DECODE_0__(u._0x3014d4)].y = 0;
        if (this.Pe[__DECODE_0__(u._0x29cd58)] > 0) {
          x.position.y = this.Pe[this.Pe[__DECODE_0__(u._0x3f4d9c)] - 1][__DECODE_0__(u._0x396efd)].y + this.Vf;
        }
        this.Pe.push(x);
        this[__DECODE_0__(u._0x203699)](x);
      };
      m = {
        _0x5bfb64: 849,
        _0x57361d: 1540
      };
      v = {
        _0x4cbc95: 1785,
        _0x2f0589: 1785,
        _0x2f3b5a: 491
      };
      g = {
        _0x5a7e9f: 2625,
        _0x26e47d: 551,
        _0x3a6eae: 1746,
        _0xb74984: 1806,
        _0x32a9d1: 551,
        _0x20789d: 803,
        _0x3fb913: 1746
      };
      (k = f11(vO.Zb, function () {
        vO.Zb[__DECODE_0__(g._0x5a7e9f)](this);
        this.eg = new vO.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: __DECODE_0__(g._0x26e47d),
          dropShadowDistance: 3,
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.eg.anchor.x = 1;
        this.eg[__DECODE_0__(g._0x3a6eae)].x = 30;
        this.addChild(this.eg);
        this.fg = new vO.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: "#707070",
          dropShadowDistance: 3,
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.fg.anchor.x = 0;
        this.fg.position.x = 35;
        this[__DECODE_0__(g._0xb74984)](this.fg);
        this.gg = new vO.fc("", {
          dropShadow: false,
          dropShadowBlur: 5,
          dropShadowColor: __DECODE_0__(g._0x32a9d1),
          dropShadowDistance: 3,
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.gg[__DECODE_0__(g._0x20789d)].x = 1;
        this.gg[__DECODE_0__(g._0x3fb913)].x = 220;
        this.addChild(this.gg);
      })).prototype.Zf = function (x, a, f) {
        this.eg[__DECODE_0__(v._0x4cbc95)] = x;
        this.gg[__DECODE_0__(v._0x2f0589)] = f;
        var e = a;
        for (this.fg.text = e; this.fg.width > 100;) {
          e = e[__DECODE_0__(v._0x2f3b5a)](0, e.length - 1);
          this.fg.text = e + "..";
        }
      };
      k.prototype.Yf = function (x, a) {
        this.eg.alpha = x;
        this.eg[__DECODE_0__(m._0x5bfb64)].fill = a;
        this.fg.alpha = x;
        this.fg.style.fill = a;
        this.gg.alpha = x;
        this.gg.style[__DECODE_0__(m._0x57361d)] = a;
      };
      y = k;
      var S = p;
      return s;
    }();
    var vF12 = function () {
      function t(x) {
        this.o = x;
        this.hg = [];
        this.ig = 0;
      }
      t.prototype.Xb = function (x) {
        this.hg.push(new DataView(x));
      };
      t.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      t.prototype.Bb = function () {
        for (var x = 0; x < 10; x++) {
          if (this.hg.length === 0) {
            return;
          }
          var a = this.hg.shift();
          try {
            this.jg(a);
          } catch (f) {
            console.log("DataReader error: " + f);
            throw f;
          }
        }
      };
      t.prototype.jg = function (x) {
        switch (x.mc(0) & 255) {
          case 0:
            this.kg(x, 1);
            return;
          case 1:
            this.lg(x, 1);
            return;
          case 2:
            this.mg(x, 1);
            return;
          case 3:
            this.ng(x, 1);
            return;
          case 4:
            this.og(x, 1);
            return;
          case 5:
            this.pg(x, 1);
            return;
        }
      };
      t.prototype.kg = function (x, a) {
        console.log("sgp1");
        this.o.fb.af = x.mc(a);
        a += 1;
        var f = x.nc(a);
        a += 2;
        this.o.fb.bf = f;
        this.o.N.Mb.Lb = f;
        this.o.fb.ub = x.pc(a);
        a += 4;
        this.o.fb.cf = x.pc(a);
        a += 4;
        this.o.fb.df = x.pc(a);
        a += 4;
        f3().s.H.wb.Te(this.o.fb, f3().s.xa.wa());
        console.log("sgp2");
        return a;
      };
      t.prototype.lg = function (x, a) {
        var f = this.ig++;
        var e = x.nc(a);
        a += 2;
        var t = undefined;
        t = this.qg(x, a);
        a += this.rg(t);
        for (var c = 0; c < t; c++) {
          a = this.sg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var n = 0; n < t; n++) {
          a = this.tg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var s = 0; s < t; s++) {
          a = this.ug(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var o = 0; o < t; o++) {
          a = this.vg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var d = 0; d < t; d++) {
          a = this.wg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var r = 0; r < t; r++) {
          a = this.xg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var _ = 0; _ < t; _++) {
          a = this.yg(x, a);
        }
        t = this.qg(x, a);
        a += this.rg(t);
        for (var l = 0; l < t; l++) {
          a = this.zg(x, a);
        }
        if (f > 0) {
          a = this.Ag(x, a);
        }
        this.o.Qb(f, e);
        return a;
      };
      t.prototype.vg = function (x, a) {
        var f = new vF25.Config();
        f.Lb = x.nc(a);
        a += 2;
        f.cg = this.o.fb.af == vO2._e ? x.mc(a++) : vF10.TEAM_DEFAULT;
        f.dg = x.nc(a);
        let t = a;
        a += 2;
        f.Bg = x.nc(a);
        let c = a;
        a += 2;
        f.Cg = x.nc(a);
        let n = a;
        a += 2;
        f.Dg = x.nc(a);
        let s = a;
        a += 2;
        f.Eg = x.nc(a);
        let o = a;
        a += 2;
        var d = x.mc(a);
        a += 1;
        var r = "";
        for (var _ = 0; _ < d; _++) {
          r += String.fromCharCode(x.nc(a));
          a += 2;
        }
        if (a > 210) {
          for (let l in this.o.hb) {
            var b = this.o.hb[l].Mb.dg;
            if (b >= 32 && b <= 35) {
              var h = Math.floor(Math.random() * 49) + 1500;
              this.o.hb[l].Mb.dg = h;
            }
            if (/^(.+?)@(.+)/.test(this.o.hb[l].Mb.ad)) {
              let u = this.o.hb[l].Mb.dg;
              if (u >= 32 && u <= 35) {
                let p = Math.floor(Math.random() * 49) + 1500;
                this.o.hb[l].Mb.dg = p;
              }
            }
            if (/^(.+?)[a-zA-Z1-9@]+_+\d+(.+)/.test(this.o.hb[l].Mb.ad)) {
              let m = this.o.hb[l].Mb.dg;
              if (m >= 32 && m <= 35) {
                let v = Math.floor(Math.random() * 49) + 1500;
                this.o.hb[l].Mb.dg = v;
              }
            }
            if (/^(.{16})(WFT_\d{9})$/.test(this.o.hb[l].Mb.ad)) {
              console.log("nombre: " + this.o.hb[l].Mb.ad);
              var g = this.o.hb[l].Mb.ad.substr(-10);
              console.log("digitos: " + g);
              let k = g.substr(1, 4);
              console.log("skinId_A: " + k);
              let y = g.substr(5, 5);
              console.log("hatId_A: " + y);
              let w = g.substr(6, 3);
              console.log("eyesId_A: " + w);
              let j = g.substr(9, 3);
              console.log("mouthId_A: " + j);
              if (k !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(k)) !== -1) {
                this.o.hb[l].Mb.dg = parseInt(k);
              }
              if (y !== "00000") {
                this.o.hb[l].Mb.Eg = parseInt(y);
              }
              if (w !== "000") {
                this.o.hb[l].Mb.Bg = parseInt(w);
              }
              if (j !== "000") {
                this.o.hb[l].Mb.Cg = parseInt(j);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === f.Lb) {
          f.dg = theoKzObjects.PropertyManager.rh;
          f.Bg = theoKzObjects.PropertyManager.sh;
          f.Cg = theoKzObjects.PropertyManager.th;
          f.Dg = theoKzObjects.PropertyManager.uh;
          f.Eg = theoKzObjects.PropertyManager.vh;
          x.setInt16(t, f.dg);
          x.setInt16(c, f.Bg);
          x.setInt16(n, f.Cg);
          x.setInt16(s, f.Dg);
          x.setInt16(o, f.Eg);
          _wrmxt.aload = true;
          _wrmxt.aId = t;
        }
        f.ad = r;
        if (this.o.fb.bf === f.Lb) {
          this.o.N.Fg(f);
          f.Mb = f.Lb;
          f.bd = f.ad;
        } else {
          var S = this.o.hb[f.Lb];
          if (S != null) {
            S.Kb();
          }
          var I = new vF25(this.o.fb);
          I.vb(f3().s.H.wb);
          this.o.hb[f.Lb] = I;
          I.Fg(f);
        }
        return a;
      };
      t.prototype.wg = function (x, a) {
        var f = x.nc(a);
        a += 2;
        var e = x.mc(a);
        a++;
        var t = !!(e & 1);
        var c = !!(e & 2);
        var n = 0;
        if (t) {
          n = x.nc(a);
          a += 2;
        }
        var s = this.Gg(f);
        if (s === undefined || (s.Ib = false, !s.Hb)) {
          return a;
        }
        var o = this.Gg(f);
        if (t && o !== undefined && o.Hb) {
          if (n === this.o.fb.bf) {
            var d = this.o.N.Gf();
            var r = s.Hg(d.x, d.y);
            r.distance;
            this.o.jb;
            if (r.distance < this.o.jb * 0.5) {
              f3().s.H.wb.wf.Se(c);
            }
          } else if (f === this.o.fb.bf) {} else {
            var _ = this.o.N.Gf();
            s.Hg(_.x, _.y).distance;
            this.o.jb;
          }
        } else if (f === this.o.fb.bf) {} else {
          var l = this.o.N.Gf();
          s.Hg(l.x, l.y).distance;
          this.o.jb;
        }
        return a;
      };
      t.prototype.zg = function (x, a) {
        var e = x.nc(a);
        a += 2;
        var t = e === this.o.fb.bf ? null : this.o.hb[e];
        var c = x.mc(a);
        a += 1;
        var n = !!(c & 1);
        if (c & 2) {
          var s = x.pc(a);
          a += 4;
          if (t) {
            t.Ig(s);
          }
        }
        var o = this.Jg(x.mc(a++), x.mc(a++), x.mc(a++));
        var d = this.Jg(x.mc(a++), x.mc(a++), x.mc(a++));
        if (t) {
          t.Kg(o, d, n);
          var r = this.o.N.Gf();
          var _ = t.Gf();
          var l = Math.max(0, 1 - Math.hypot(r.x - _.x, r.y - _.y) / (this.o.jb * 0.5));
          f3().r.Zd(l, e, n);
        }
        var b = this.qg(x, a);
        a += this.rg(b);
        if (t) {
          for (var h in t.Ff) {
            var u = t.Ff[h];
            if (u) {
              u.sc = false;
            }
          }
        }
        for (var p = 0; p < b; p++) {
          var m = x.mc(a);
          a++;
          var v = x.mc(a);
          a++;
          if (t) {
            var g = t.Ff[m];
            if (!g) {
              g = t.Ff[m] = new vF(m);
            }
            g.sc = true;
            g.tc = Math.min(1, Math.max(0, v / 100));
          }
        }
        return a;
      };
      t.prototype.Ag = function (x, a) {
        var f = this.o.N;
        var e = x.mc(a);
        a += 1;
        var t = !!(e & 1);
        var c = !!(e & 2);
        var n = !!(e & 4);
        if (c) {
          var s = f.M;
          f.Ig(x.pc(a));
          a += 4;
          if ((s = f.M - s) > 0) {
            f3().s.H.wb.wf.Re(s);
          }
        }
        if (n) {
          this.o.ib = x.pc(a);
          a += 4;
        }
        var o = this.Jg(x.mc(a++), x.mc(a++), x.mc(a++));
        var d = this.Jg(x.mc(a++), x.mc(a++), x.mc(a++));
        f.Kg(o, d, t);
        f3().r.Zd(0.5, this.o.fb.bf, t);
        var r = this.qg(x, a);
        a += this.rg(r);
        for (var _ in f.Ff) {
          var l = f.Ff[_];
          if (l) {
            l.sc = false;
          }
        }
        for (var b = 0; b < r; b++) {
          var h = x.mc(a);
          a++;
          var u = x.mc(a);
          a++;
          var p = f.Ff[h];
          if (!p) {
            p = new vF(h);
            f.Ff[h] = p;
          }
          p.sc = true;
          p.tc = Math.min(1, Math.max(0, u / 100));
        }
        f3().s.H.wb.uf.Te(f.Ff);
      };
      t.prototype.xg = function (x, f) {
        var t = this;
        var c = x.nc(f);
        f += 2;
        var n = this.Gg(c);
        var s = x.pc(f);
        f += 4;
        var o = [];
        for (var d in n.Ff) {
          if (d == 0) {
            o.push("velocidad");
            $(".v0").fadeIn();
          } else if (d == 1) {
            o.push("movimiento");
            $(".v1").fadeIn();
          } else if (d == 2) {
            o.push("iman");
            $(".v2").fadeIn();
          } else if (d == 3) {
            o.push("comidax2");
            $(".v3").fadeIn();
          } else if (d == 4) {
            o.push("comidax5");
            $(".v4").fadeIn();
          } else if (d == 5) {
            o.push("comidax10");
            $(".v5").fadeIn();
          } else if (d == 6) {
            o.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = o;
        if (n.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        }
        var r = this.qg(x, f);
        f += this.rg(r);
        if (n) {
          n.Ig(s);
          n.Lg(function () {
            return t.Jg(x.mc(f++), x.mc(f++), x.mc(f++));
          }, r);
          n.Mg(true);
          var _ = this.o.N.Gf();
          var l = n.Gf();
          var b = Math.max(0, 1 - Math.hypot(_.x - l.x, _.y - l.y) / (this.o.jb * 0.5));
          f3().r.Xd(b, c);
        } else {
          f += r * 6;
        }
        return f;
      };
      t.prototype.yg = function (x, a) {
        var f = x.nc(a);
        a += 2;
        var e = this.o.hb[f];
        if (e && e.Ib) {
          e.Mg(false);
        }
        f3().r.Yd(f);
        return a;
      };
      t.prototype.sg = function (a, f) {
        var e = new vF14.Config();
        e.Lb = a.oc(f);
        f += 4;
        e.cg = this.o.fb.af === vO2._e ? a.mc(f++) : vF10.TEAM_DEFAULT;
        e.Ng = this.Jg(a.mc(f++), a.mc(f++), a.mc(f++));
        e.dg = a.mc(f++);
        var t = this.o.gb[e.Lb];
        if (t != null) {
          t.Kb();
        }
        var c = new vF14(e, f3().s.H.wb);
        c.Og(this.Pg(e.Lb), this.Qg(e.Lb), true);
        this.o.gb[e.Lb] = c;
        return f;
      };
      t.prototype.tg = function (x, a) {
        var f = x.oc(a);
        a += 4;
        var e = this.o.gb[f];
        if (e) {
          e.Rg = 0;
          e.Sg = e.Sg * 1.5;
          e.Nb = true;
        }
        return a;
      };
      t.prototype.ug = function (x, a) {
        var f = x.oc(a);
        a += 4;
        var e = x.nc(a);
        a += 2;
        var t = this.o.gb[f];
        if (t) {
          t.Rg = 0;
          t.Sg = t.Sg * 0.1;
          t.Nb = true;
          var c = this.Gg(e);
          if (c && c.Hb) {
            this.o.fb.bf;
            var n = c.Gf();
            t.Og(n.x, n.y, false);
          }
        }
        return a;
      };
      var c = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      t.prototype.mg = function (x) {
        var a = f3().q.Ug.Tg;
        var f = a.getImageData(0, 0, 80, 80);
        var e = c[0];
        var t = 80 - e;
        var n = 0;
        for (var s = 0; s < 628; s++) {
          var o = x.mc(1 + s);
          for (var d = 0; d < 8; d++) {
            var r = (e + n * 80) * 4;
            if ((o >> d & 1) != 0) {
              f.data[r] = 255;
              f.data[r + 1] = 255;
              f.data[r + 2] = 255;
              f.data[r + 3] = 255;
            } else {
              f.data[r + 3] = 0;
            }
            if (++e >= t && ++n < 80) {
              t = 80 - (e = c[n]);
            }
          }
        }
        a.putImageData(f, 0, 0);
        var _ = f3().s.H.wb.tf.Sf;
        _.texture = f3().q.Ug.Hc;
        _.texture.update();
      };
      t.prototype.og = function (x, a) {
        var f = x.oc(a);
        a += 4;
        console.log("Wormy Error: " + f);
      };
      t.prototype.pg = function (x, a) {
        if (lxpdjoystick !== -1) {
          lxpdjoysticks[lxpdjoystick].visible = false;
        }
        theoKzObjects.emoji = false;
        theoKzObjects.dead = true;
        createCircle();
        zwormData.hs = 0;
        sendPlayerDeath(0, 0);
        sendPlayerUpdate(999999, 999999);
        clearTeamUbication();
        console.log("g.o");
      };
      t.prototype.ng = function (x, a) {
        this.o.tb = x.nc(a);
        a += 2;
        this.o.O = x.nc(a);
        a += 2;
        var f = new vF21();
        f.ag = [];
        var e = x.mc(a++);
        for (var t = 0; t < e; t++) {
          var c = x.nc(a);
          a += 2;
          var n = x.pc(a);
          a += 4;
          f.ag.push(vF21.Vg(c, n));
        }
        f.$f = [];
        if (this.o.fb.af === vO2._e) {
          var s = x.mc(a++);
          for (var o = 0; o < s; o++) {
            var d = x.mc(a);
            a += 1;
            var r = x.pc(a);
            a += 4;
            f.$f.push(vF21.Wg(d, r));
          }
        }
        f3().s.H.wb.vf.Te(f);
      };
      t.prototype.Gg = function (x) {
        if (x === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[x];
        }
      };
      t.prototype.Jg = function (x, a, f) {
        return (((f & 255 | a << 8 & 65280 | x << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      t.prototype.Pg = function (x) {
        return ((x & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      t.prototype.Qg = function (x) {
        return ((x >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      t.prototype.qg = function (x, a) {
        var f = x.mc(a);
        if ((f & 128) == 0) {
          return f;
        }
        var e = x.mc(a + 1);
        if ((e & 128) == 0) {
          return e | f << 7 & 16256;
        }
        var t = x.mc(a + 2);
        if ((t & 128) == 0) {
          return t | e << 7 & 16256 | f << 14 & 2080768;
        }
        var c = x.mc(a + 3);
        if ((c & 128) == 0) {
          return c | t << 7 & 16256 | e << 14 & 2080768 | f << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      t.prototype.rg = function (x) {
        if (x < 128) {
          return 1;
        } else if (x < 16384) {
          return 2;
        } else if (x < 2097152) {
          return 3;
        } else if (x < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return t;
    }();
    var vF13 = function () {
      function x(x) {
        this.Xg = x;
      }
      x.Yg = function () {
        return new vF13(null);
      };
      x.Zg = function (x) {
        return new vF13(x);
      };
      x.prototype.$g = function () {
        return this.Xg;
      };
      x.prototype._g = function () {
        return this.Xg != null;
      };
      x.prototype.ah = function (x) {
        if (this.Xg != null) {
          x(this.Xg);
        }
      };
      return x;
    }();
    var vF14 = function () {
      function a(x, a) {
        this.Mb = x;
        this.bh = x.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : x.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF15();
        this.gh.hh(f3().o.fb.af, this.Mb.cg === vF10.TEAM_DEFAULT ? null : f3().p.Dc().ed(this.Mb.cg), f3().p.Dc().kd(this.Mb.dg));
        a.Lf(x.Lb, this.gh);
      }
      a.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      a.prototype.Og = function (x, a, f) {
        this.Ob = x;
        this.Pb = a;
        if (f) {
          this.ch = x;
          this.dh = a;
        }
      };
      a.prototype.Fb = function (x, a) {
        var f = Math.min(0.5, this.Sg * 1);
        var e = Math.min(2.5, this.Sg * 1.5);
        this.eh = f15(this.eh, f, a, 0.0025);
        this.fh = f15(this.fh, e, a, 0.0025);
        this.Jb = f15(this.Jb, this.Rg, a, 0.0025);
      };
      a.prototype.Gb = function (x, a, f) {
        this.ch = f15(this.ch, this.Ob, a, theoKzObjects.eat_animation);
        this.dh = f15(this.dh, this.Pb, a, 0.0025);
        this.gh.Te(this, x, a, f);
      };
      a.Config = function () {
        function a() {
          this.Lb = 0;
          this.cg = vF10.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return a;
      }();
      return a;
    }();
    var vF15 = function () {
      function a() {
        this.Of = new f(new vF24(), new vF24());
        this.Of.Pf.jh.blendMode = vO.ic.jc;
        this.Of.Pf.jh.zIndex = 100;
        this.Of.Nf.jh.zIndex = 500;
      }
      a.prototype.hh = function (x, a, f) {
        var e = f.Zc;
        if (e != null) {
          this.Of.Nf.kh(e);
        }
        var t = x == vO2._e && a != null ? a.cd.$c : f.$c;
        if (t != null) {
          this.Of.Pf.kh(t);
        }
      };
      a.prototype.Te = function (x, a, f, e) {
        if (!e(x.ch, x.dh)) {
          this.Of.lh();
          return;
        }
        var t = x.fh * (1 + Math.cos(x.Ae + a / 200) * 0.3);
        if (x.bh) {
          this.Of.mh(x.ch, x.dh, wormxt_Obj.PotenciadorSize * x.eh, x.Jb * 1, wormxt_Obj.PotenciadorAura * t, x.Jb * 0.8);
        } else {
          this.Of.mh(x.ch, x.dh, wormxt_Obj.ComidaSize * x.eh, x.Jb * 1, wormxt_Obj.ComidaShadow * t, x.Jb * 0.3);
        }
      };
      var f = function () {
        function x(x, a) {
          this.Nf = x;
          this.Pf = a;
        }
        x.prototype.mh = function (x, a, f, e, t, c) {
          this.Nf.Mg(true);
          this.Nf.nh(x, a);
          this.Nf.oh(f);
          this.Nf.qh(e);
          this.Pf.Mg(true);
          this.Pf.nh(x, a);
          this.Pf.oh(t);
          this.Pf.qh(c);
        };
        x.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return x;
      }();
      return a;
    }();
    var vF16 = function () {
      function t() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function c(x, a) {
        if (!f3().p.W()) {
          return null;
        }
        var f = f3().p.Ac();
        if (a === vF17.ia) {
          var e = n(f.skinArrayDict, x);
          if (e < 0) {
            return null;
          } else {
            return f.skinArrayDict[e];
          }
        }
        switch (a) {
          case vF17.ja:
            return f.eyesDict[x];
          case vF17.ka:
            return f.mouthDict[x];
          case vF17.la:
            return f.glassesDict[x];
          case vF17.ma:
            return f.hatDict[x];
        }
        return null;
      }
      function n(x, a) {
        for (var f = 0; f < x.length; f++) {
          if (x[f].id == a) {
            return f;
          }
        }
        return -1;
      }
      t.prototype.a = function () {};
      t.prototype.ha = function (x) {
        if (!theoKzObjects.loading) {
          theoKzObjects.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        }
        switch (x) {
          case vF17.ia:
            return this.rh;
          case vF17.ja:
            return this.sh;
          case vF17.ka:
            return this.th;
          case vF17.la:
            return this.uh;
          case vF17.ma:
            return this.vh;
        }
        return 0;
      };
      t.prototype.xh = function (x) {
        this.wh.push(x);
        this.yh();
      };
      t.prototype.Ia = function () {
        if (!f3().p.W()) {
          return f20([32, 33, 34, 35]);
        }
        var x = f3().p.Ac();
        var a = [];
        for (var e = 0; e < x.skinArrayDict.length; e++) {
          var t = x.skinArrayDict[e];
          if (this.Ja(t.id, vF17.ia)) {
            a.push(t);
          }
        }
        if (a.length === 0) {
          return 0;
        } else {
          return a[parseInt(a.length * Math.random())].id;
        }
      };
      t.prototype.zh = function () {
        if (f3().p.W) {
          var x = f3().p.Ac().skinArrayDict;
          var f = n(x, this.rh);
          if (!(f < 0)) {
            for (var e = f + 1; e < x.length; e++) {
              if (this.Ja(x[e].id, vF17.ia)) {
                this.rh = x[e].id;
                this.yh();
                return;
              }
            }
            for (var t = 0; t < f; t++) {
              if (this.Ja(x[t].id, vF17.ia)) {
                this.rh = x[t].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      t.prototype.Ah = function () {
        if (f3().p.W) {
          var a = f3().p.Ac().skinArrayDict;
          var f = n(a, this.rh);
          if (!(f < 0)) {
            for (var e = f - 1; e >= 0; e--) {
              if (this.Ja(a[e].id, vF17.ia)) {
                this.rh = a[e].id;
                this.yh();
                return;
              }
            }
            for (var t = a.length - 1; t > f; t--) {
              if (this.Ja(a[t].id, vF17.ia)) {
                this.rh = a[t].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      t.prototype.Bh = function (x, a) {
        if (!f3().p.W() || this.Ja(x, a)) {
          switch (a) {
            case vF17.ia:
              if (this.rh != x) {
                this.rh = x;
                this.yh();
              }
              return;
            case vF17.ja:
              if (this.sh != x) {
                this.sh = x;
                this.yh();
              }
              return;
            case vF17.ka:
              if (this.th != x) {
                this.th = x;
                this.yh();
              }
              return;
            case vF17.la:
              if (this.uh != x) {
                this.uh = x;
                this.yh();
              }
              return;
            case vF17.ma:
              if (this.vh != x) {
                this.vh = x;
                this.yh();
              }
              return;
          }
        }
      };
      t.prototype.Ja = function (x, a) {
        var f = c(x, a);
        return f != null && (f3().u.P() ? f.price == 0 && !f.nonbuyable || f3().u.Ch(x, a) : f.guest);
      };
      t.prototype.yh = function () {
        for (var x = 0; x < this.wh.length; x++) {
          this.wh[x]();
        }
      };
      return t;
    }();
    var vF17 = function () {
      function x() {}
      x.ia = "SKIN";
      x.ja = "EYES";
      x.ka = "MOUTH";
      x.la = "GLASSES";
      x.ma = "HAT";
      return x;
    }();
    var vF18 = function () {
      function x(x, a, f, e, t, c, n, s, o) {
        this.Hc = new vO._b(x, new vO.dc(a, f, e, t));
        this.Dh = a;
        this.Eh = f;
        this.Fh = e;
        this.Gh = t;
        this.Hh = c || (s || e) / 2;
        this.Ih = n || (o || t) / 2;
        this.Jh = s || e;
        this.Kh = o || t;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return x;
    }();
    var vF19 = function () {
      function a() {
        this.fn_o = f;
        this.Fe = new vO._b(vO.$b.from("/images/bg-obstacle.png"));
        var a;
        var e = vO.$b.from("https://i.imgur.com/gvMlosm.png");
        this.Ge = [new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128)), new vO._b(e, new vO.dc(0, 0, 128, 128))];
        this.Cf = new vO._b(f());
        (a = vO.$b.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = vO.kc.lc;
        this.Df = new vO._b(a);
        this.Af = new vO._b(vO.$b.from("/images/lens.png"));
        var t = vO.$b.from("https://i.imgur.com/VPh6J5u.png");
        this.Ph = new vF18(t, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF18(t, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var c;
        var n = vO.$b.from("https://i.imgur.com/n4d2rM7.png");
        var s = vO.$b.from("https://i.imgur.com/iqKabEA.png");
        this.emoji = new vF18(s, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Rh = new vF18(n, 156, 4, 87, 74, 285, 63.5, 128, 128);
        this.X_x5 = new vF18(n, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x2 = new vF18(n, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.X_x10 = new vF18(n, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF18(n, 79, 8, 75, 77, 265, 1.5, 128, 128);
        (c = window.document.createElement("canvas")).width = 80;
        c.height = 80;
        this.Ug = {
          te: c,
          Tg: c.getContext("2d"),
          Hc: new vO._b(vO.$b.from(c))
        };
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f(x) {
        var a = vO.$b.from(x || "/images/bg-pattern-pow2-ARENA.png");
        a.wrapMode = vO.kc.lc;
        return a;
      }
      a.prototype.a = function (x) {
        function a() {
          if (--f == 0) {
            x();
          }
        }
        var f = 4;
        this.Bd = {};
        a();
        this.yd = {};
        a();
        this.Sh = [];
        a();
        this.Th = null;
        a();
      };
      return a;
    }();
    var vF20 = function () {
      function a() {
        this.H = new vF29();
        this.F = new vV44();
        this.Uh = new vV154();
        this.Vh = new vV167();
        this.Wh = new vV58();
        this.Xh = new vV64();
        this.Yh = new vV86();
        this.Zh = new vV69();
        this.xa = new vV98();
        this.wtrset = new vV127();
        this.$h = new vV116();
        this._h = new vV122();
        this.ai = new vV149();
        this.aa = new vV49();
        this.ua = new vV17();
        this.pa = new vV46();
        this.bi = [];
        this.ci = null;
      }
      function f(x, a) {
        if (a != 0) {
          var f = x[a];
          f18(x, 0, 1, a);
          x[0] = f;
        }
      }
      function e(x, a) {
        if (a != x.length + 1) {
          var f = x[a];
          f18(x, a + 1, a, x.length - a - 1);
          x[x.length - 1] = f;
        }
      }
      function t(a, f) {
        for (var e = 0; e < a.length; e++) {
          if (a[e] == f) {
            return e;
          }
        }
        return -1;
      }
      a.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.wtrset, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var x = 0; x < this.bi.length; x++) {
          this.bi[x].a();
        }
        this.ci = new vF5(vF28.di);
      };
      a.prototype.Qa = function (x, a) {
        for (var f = this.bi.length - 1; f >= 0; f--) {
          this.bi[f].Pa(x, a);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(x, a);
        }
      };
      a.prototype.Ra = function () {
        for (var x = this.bi.length - 1; x >= 0; x--) {
          this.bi[x].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      a.prototype.I = function (x) {
        var a = t(this.bi, x);
        if (!(a < 0)) {
          this.bi[0].ei();
          f(this.bi, a);
          this.fi();
        }
      };
      a.prototype.gi = function () {
        this.bi[0].ei();
        do {
          e(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      a.prototype.fi = function () {
        var x = this.bi[0];
        x.ii();
        x.ji();
        this.ki();
      };
      a.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      a.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return a;
    }();
    var vF21 = function () {
      function x() {
        this.ag = [];
        this.$f = [];
      }
      x.Vg = function (x, a) {
        return {
          bg: x,
          M: a
        };
      };
      x.Wg = function (x, a) {
        return {
          _f: x,
          M: a
        };
      };
      return x;
    }();
    var vF22 = function () {
      function p() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = m;
        this.si = {};
        this.ti = null;
      }
      var m = "guest";
      p.prototype.a = function () {
        this.vi();
      };
      p.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      p.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      p.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      p.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      p.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      p.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      p.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      p.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      p.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      p.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      p.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      p.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      p.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      p.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      p.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      p.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      p.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      p.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      p.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      p.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      p.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      p.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      p.prototype.V = function (x) {
        this.ni.push(x);
        x();
      };
      p.prototype.Pi = function (x) {
        this.oi.push(x);
        x();
      };
      p.prototype.Qi = function (x) {
        this.pi.push(x);
      };
      p.prototype.Ch = function (x, a) {
        var f = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!f) {
          return false;
        }
        for (var e = 0; e < f.length; e++) {
          var t = f[e];
          if (t.id == x && t.type === a) {
            return true;
          }
        }
        return false;
      };
      p.prototype.P = function () {
        return this.qi;
      };
      p.prototype.ea = function () {
        return this.ri;
      };
      p.prototype.Q = function (x) {
        var a = this;
        if (this.qi) {
          this.Ri(function (f) {
            if (f) {
              var e = a.zi();
              var t = a.Ai();
              a.si = f;
              f27(a.si);
              a.Si();
              var c = a.zi();
              var n = a.Ai();
              if (n > 1 && n != t) {
                f3().s.aa.Ti(new vV170(n));
              }
              var s = c - e;
              if (s >= 20) {
                f3().s.aa.Ti(new vV169(s));
              }
            }
            if (x) {
              x();
            }
          });
        }
      };
      p.prototype.Ri = function (x) {
        $.get(vAtob + "/pub/wuid/" + this.ri + "/getUserData", function (a) {
          x(a.user_data);
        });
      };
      p.prototype.Ui = function (x, a, f) {
        var e = this;
        $.get(vAtob + "/pub/wuid/" + this.ri + "/buyProperty?id=" + x + "&type=" + a, function (x) {
          if (x.code == 1200) {
            e.Q(f);
          } else {
            f();
          }
        }).fail(function () {
          f();
        });
      };
      p.prototype.Vi = function () {
        var x = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (a) {
          if (a.status === "connected") {
            if (a.authResponse && a.authResponse.accessToken) {
              x.Yi("facebook", "fb_" + a.authResponse.accessToken);
            } else {
              x.Xi();
            }
            return;
          }
          FB.login(function (a) {
            if (a.status === "connected" && a.authResponse && a.authResponse.accessToken) {
              x.Yi("facebook", "fb_" + a.authResponse.accessToken);
            } else {
              x.Xi();
            }
          });
        });
      };
      p.prototype.Zi = function () {
        var a = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log("gsi:l");
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log("gsi:sil");
            var f = GoogleAuth.currentUser.get();
            a.Yi("google", "gg_" + f.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (f) {
            if (typeof f.error !== "undefined") {
              console.log("gsi:e: " + f.error);
              a.Xi();
              return;
            }
            if (f.isSignedIn()) {
              console.log("gsi:s");
              a.Yi("google", "gg_" + f.getAuthResponse().id_token);
            } else {
              console.log("gsi:c");
              a.Xi();
            }
          });
        });
      };
      p.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var x = this.ri;
        var a = this.ti;
        this.qi = false;
        this.ri = m;
        this.si = {};
        this.ti = null;
        f5(vF6.Oe, "", 60);
        switch (a) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (x !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      p.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vAtob + "/pub/wuid/" + this.ri + "/deleteAccount", function (x) {
            if (x.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      p.prototype.vi = function () {
        console.log("rs");
        var x = f4(vF6.Oe);
        var a = this;
        if (x == "facebook") {
          console.log("rs:fb");
          (function x() {
            if (typeof FB != "undefined") {
              a.Vi();
            } else {
              setTimeout(x, 100);
            }
          })();
        } else if (x == "google") {
          console.log("rs:gg");
          (function x() {
            if (GoogleAuth !== undefined) {
              a.Zi();
            } else {
              setTimeout(x, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      p.prototype.aj = function () {
        for (var x = 0; x < this.ni.length; x++) {
          this.ni[x]();
        }
        this.Si();
      };
      p.prototype.Si = function () {
        for (var x = 0; x < this.oi.length; x++) {
          this.oi[x]();
        }
        var a = this.pi;
        this.pi = [];
        for (var f = 0; f < a.length; f++) {
          a[f]();
        }
      };
      p.prototype.Yi = function (x, a) {
        var t = this;
        $.get(vAtob + "/pub/wuid/" + a + "/login", function (f) {
          if (f && f.user_data) {
            checkSubscriptionExpired(f.user_data.userId);
            registerUpdatePlayer(f.user_data);
            f27(f.user_data);
            var c = this.ri;
            t.qi = true;
            t.ri = a;
            t.si = f.user_data;
            t.ti = x;
            f5(vF6.Oe, t.ti, 60);
            console.log(t);
            showServer2(vUndefined2);
            showVersionPays(f);
            lxpduserId = f.user_data.userId;
            $("#wtr-settings-id").text("ID: " + lxpduserId);
            theoKzObjects.loading = false;
            if (c !== a) {
              t.aj();
            } else {
              t.Si();
            }
          } else {
            t.Xi();
          }
        }).fail(function () {
          t.Xi();
        });
      };
      p.prototype.Xi = function () {
        this.Wi();
      };
      p.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      p.prototype._i = function () {
        console.log("lo:gg");
        GoogleAuth.signOut();
      };
      return p;
    }();
    var vF23 = function () {
      function a() {
        this.cj = {};
        this.cj[n] = [1, 0.5, 0.25, 0.5];
        this.cj[s] = vO._b.WHITE;
        this.cj[o] = [0, 0];
        this.cj[d] = [0, 0];
        var x = vO.cc.from(l, b, this.cj);
        this.zf = new vO.hc(_, x);
      }
      var f = "a1_" + f21();
      var e = "a2_" + f21();
      var t = "translationMatrix";
      var c = "projectionMatrix";
      var n = "u3_" + f21();
      var s = "u4_" + f21();
      var o = "u5_" + f21();
      var d = "u6_" + f21();
      var r = "v1_" + f21();
      var _ = new vO.gc().addAttribute(f, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var l = "precision mediump float;attribute vec2 " + f + ";attribute vec2 " + e + ";uniform mat3 " + t + ";uniform mat3 " + c + ";varying vec2 " + r + ";void main(){" + r + "=" + e + ";gl_Position=vec4((" + c + "*" + t + "*vec3(" + f + ",1.0)).xy,0.0,1.0);}";
      var b = "precision highp float;varying vec2 " + r + ";uniform vec4 " + n + ";uniform sampler2D " + s + ";uniform vec2 " + o + ";uniform vec2 " + d + ";void main(){vec2 coord=" + r + "*" + o + "+" + d + ";vec4 v_color_mix=" + n + ";gl_FragColor=texture2D(" + s + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      a.prototype.Hf = function (x, a, f, e) {
        var t = this.cj[n];
        t[0] = x;
        t[1] = a;
        t[2] = f;
        t[3] = e;
      };
      a.prototype.Bf = function (x) {
        this.cj[s] = x;
      };
      a.prototype.Te = function (a, f, e, t) {
        this.zf.position.x = a;
        this.zf.position.y = f;
        this.zf.scale.x = e;
        this.zf.scale.y = t;
        var c = this.cj[o];
        c[0] = e * 0.2520615384615385;
        c[1] = t * 0.4357063736263738;
        var n = this.cj[d];
        n[0] = a * 0.2520615384615385;
        n[1] = f * 0.4357063736263738;
      };
      return a;
    }();
    var vF24 = function () {
      function c() {
        this.jh = new vO.ec();
        this.dj = 0;
        this.ej = 0;
      }
      c.prototype.kh = function (x) {
        this.jh.texture = x.Hc;
        this.jh.anchor.set(x.Lh, x.Mh);
        this.dj = x.Nh;
        this.ej = x.Oh;
      };
      c.prototype.oh = function (x) {
        this.jh.width = x * this.dj;
        this.jh.height = x * this.ej;
      };
      c.prototype.fj = function (x) {
        this.jh.rotation = x;
      };
      c.prototype.nh = function (x, a) {
        this.jh.position.set(x, a);
      };
      c.prototype.Mg = function (x) {
        this.jh.visible = x;
      };
      c.prototype.gj = function () {
        return this.jh.visible;
      };
      c.prototype.qh = function (x) {
        this.jh.alpha = x;
      };
      c.prototype.Mf = function () {
        return this.jh;
      };
      c.prototype.ih = function () {
        f19(this.jh);
      };
      return c;
    }();
    var vF25 = function () {
      function f(x) {
        this.fb = x;
        this.Mb = new vF25.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      f.prototype.Kb = function () {
        if (this.pj != null) {
          f19(this.pj.Rf);
        }
        if (this.qj != null) {
          f19(this.qj);
        }
      };
      f.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f.prototype.Fg = function (x) {
        this.Mb = x;
        this.rj(this.Hb);
      };
      f.prototype.Mg = function (x) {
        var a = this.Hb;
        this.Hb = x;
        this.rj(a);
      };
      f.prototype.Ig = function (x) {
        this.M = x * 50;
        var a = x;
        if (x > this.fb.cf) {
          a = Math.atan((x - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var f = Math.sqrt(Math.pow(a * 5, 0.707106781186548) * 4 + 25);
        var e = Math.min(200, Math.max(3, (f - 5) * 5 + 1));
        var t = this.kj;
        this.Db = (5 + f * 0.9) * 0.025;
        this.kj = Math.floor(e);
        this.ij = e - this.kj;
        if (t > 0 && t < this.kj) {
          var c = this.lj[t * 2 - 2];
          var n = this.lj[t * 2 - 1];
          var s = this.mj[t * 2 - 2];
          var o = this.mj[t * 2 - 1];
          var d = this.nj[t * 2 - 2];
          var r = this.nj[t * 2 - 1];
          for (var _ = t; _ < this.kj; _++) {
            this.lj[_ * 2] = c;
            this.lj[_ * 2 + 1] = n;
            this.mj[_ * 2] = s;
            this.mj[_ * 2 + 1] = o;
            this.nj[_ * 2] = d;
            this.nj[_ * 2 + 1] = r;
          }
        }
      };
      f.prototype.Lg = function (x, a) {
        this.kj = a;
        for (var f = 0; f < this.kj; f++) {
          this.lj[f * 2] = this.mj[f * 2] = this.nj[f * 2] = x();
          this.lj[f * 2 + 1] = this.mj[f * 2 + 1] = this.nj[f * 2 + 1] = x();
        }
      };
      f.prototype.Kg = function (x, a, f) {
        this.hj = f;
        for (var e = 0; e < this.kj; e++) {
          this.lj[e * 2] = this.mj[e * 2];
          this.lj[e * 2 + 1] = this.mj[e * 2 + 1];
        }
        var t = x - this.mj[0];
        var c = a - this.mj[1];
        this.sj(t, c, this.kj, this.mj);
      };
      f.prototype.sj = function (x, a, f, e) {
        var t = Math.hypot(x, a);
        if (!(t <= 0)) {
          var c = e[0];
          var n = undefined;
          e[0] += x;
          var s = e[1];
          var o = undefined;
          e[1] += a;
          var d = this.Db / (this.Db + t);
          var r = 1 - d * 2;
          var _ = 1;
          for (var l = f - 1; _ < l; _++) {
            n = e[_ * 2];
            e[_ * 2] = e[_ * 2 - 2] * r + (n + c) * d;
            c = n;
            o = e[_ * 2 + 1];
            e[_ * 2 + 1] = e[_ * 2 - 1] * r + (o + s) * d;
            s = o;
          }
          r = 1 - (d = this.ij * this.Db / (this.ij * this.Db + t)) * 2;
          e[f * 2 - 2] = e[f * 2 - 4] * r + (e[f * 2 - 2] + c) * d;
          e[f * 2 - 1] = e[f * 2 - 3] * r + (e[f * 2 - 1] + s) * d;
        }
      };
      f.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f.prototype.Hg = function (x, a) {
        var f = 1000000;
        var e = x;
        var t = a;
        for (var c = 0; c < this.kj; c++) {
          var n = this.nj[c * 2];
          var s = this.nj[c * 2 + 1];
          var o = Math.hypot(x - n, a - s);
          if (o < f) {
            f = o;
            e = n;
            t = s;
          }
        }
        return {
          x: e,
          y: t,
          distance: f
        };
      };
      f.prototype.vb = function (x) {
        this.oj = x;
      };
      f.prototype.Fb = function (x, f) {
        this.Jb = f15(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(x / 400 * Math.PI) * 0.1 : 1 : 0, f, 0.00125);
        this.jj = f15(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, f, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f.prototype.Gb = function (x, a, f, e) {
        if (this.Hb && this.Ib) {
          var t = Math.pow(0.11112, a / 95);
          for (var c = 0; c < this.kj; c++) {
            var n = f17(this.lj[c * 2], this.mj[c * 2], f);
            var s = f17(this.lj[c * 2 + 1], this.mj[c * 2 + 1], f);
            this.nj[c * 2] = f17(n, this.nj[c * 2], t);
            this.nj[c * 2 + 1] = f17(s, this.nj[c * 2 + 1], t);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, x, a, e);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f.prototype.rj = function (x) {
        if (this.Hb) {
          if (!x) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f19(this.pj.Rf);
          }
          if (this.qj != null) {
            f19(this.qj);
          }
        }
      };
      f.prototype.uj = function () {
        var a = f3();
        if (this.pj == null) {
          this.pj = new vF26();
        } else {
          f19(this.pj.Rf);
        }
        this.pj.hh(a.o.fb.af, a.p.Dc().ed(this.Mb.cg), a.p.Dc().dd(this.Mb.dg), a.p.Dc().fd(this.Mb.Bg), a.p.Dc().gd(this.Mb.Cg), a.p.Dc().hd(this.Mb.Dg), a.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF112("");
          this.qj.style.fontFamily = "PTSans";
          this.qj.anchor.set(0.5);
        } else {
          f19(this.qj);
        }
        this.qj.style.fontSize = 14;
        this.qj.style.fill = a.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f.Config = function () {
        function x() {
          this.Lb = 0;
          this.cg = vF10.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return x;
      }();
      return f;
    }();
    v11 = {
      _0x95e00c: 2625
    };
    var vF112 = f11(vO.fc, function (x, a, f) {
      vO.fc[__DECODE_0__(v11._0x95e00c)](this, x, a, f);
      this.If = {
        x: 0,
        y: 0
      };
    });
    var vF26 = function () {
      function s() {
        this.Rf = new vO.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new D();
        this.vj.zIndex = 1.6;
        this.wj = 0;
        this.xj = Array(797);
        this.xj[0] = this.yj(0, new vF24(), new vF24());
        for (var x = 1; x < 797; x++) {
          this.xj[x] = this.yj(x, new vF24(), new vF24());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var o;
      var d;
      var r;
      var _;
      var l;
      var b;
      var h;
      var u;
      var p;
      var m;
      var v;
      var g;
      var k;
      var y = Math.PI * 0.1;
      var w = -0.06640625;
      var j = -0.03515625;
      var S = -0.0625;
      var I = w * 3 + 0.84375;
      var C = 0.2578125 - w * 3;
      var P = w + j;
      var A = S + S;
      var M = j * 3 + 0.2578125;
      var z = 0.84375 - j * 3;
      var T = j + w;
      s.prototype.yj = function (x, a, f) {
        var e = new O(a, f);
        a.jh.zIndex = ((797 - x) * 2 + 1 + 3) * 0.001;
        f.jh.zIndex = ((797 - x) * 2 - 2 + 3) * 0.001;
        return e;
      };
      s.prototype.hh = function (x, a, f, e, t, c, s) {
        var o = f.Zc;
        var d = x == vO2._e ? a.bd.$c : f.$c;
        if (o.length > 0 && d.length > 0) {
          for (var r = 0; r < this.xj.length; r++) {
            this.xj[r].Nf.kh(o[r % o.length]);
            this.xj[r].Pf.kh(d[r % d.length]);
          }
        }
        this.vj.hh(e, t, c, s);
      };
      o = {
        _0x3654e3: 2670
      };
      d = {
        _0x28c8ac: 1458
      };
      r = {
        _0x309915: 2541,
        _0x510d40: 2670
      };
      _ = {
        _0x4fbace: 2093,
        _0x34553e: 2670
      };
      l = {
        _0x197723: 1015
      };
      b = {
        _0x597a7f: 1015
      };
      h = {
        _0x379b25: 395,
        _0x79af5a: 1015,
        _0x10dea0: 1015
      };
      u = {
        _0x3c2cd4: 1015
      };
      p = {
        _0xba3c5f: 2670
      };
      m = {
        _0xdf4a4: 1735
      };
      v = {
        _0x44d7e5: 2670,
        _0x3c6282: 1746,
        _0x4b694c: 1735
      };
      g = {
        _0x53706b: 1735
      };
      (k = f11(vO.Zb, function () {
        vO.Zb.call(this);
        this.sortableChildren = true;
        this.Cj = [];
        this.Dj = [];
        this.Ej = [];
        this.Fj = [];
        this.Gj = new vO.Zb();
        this.Hj = [];
        for (var x = 0; x < 4; x++) {
          var a = new vF24();
          a.kh(f3().q.Ph);
          this.Gj.addChild(a.jh);
          this.Hj.push(a);
        }
        this.Gj.zIndex = 0.0011;
        this.addChild(this.Gj);
        this.Ij();
        this.Jj = new vF24();
        this.Jj.kh(f3().q.Qh);
        this.Jj.jh.zIndex = 0.001;
        this.addChild(this.Jj.jh);
        this.Kj();
        this.flx = new vF24();
        this.flx.kh(f3().q.Rh);
        this.flx.jh.zIndex = 0.001;
        this.addChild(this.flx.jh);
        this.flexx();
        this.xxx5 = new vF24();
        this.xxx5.kh(f3().q.X_x5);
        this.xxx5.jh.zIndex = 0.001;
        this.addChild(this.xxx5.jh);
        this.xXx5();
        this.xxx2 = new vF24();
        this.xxx2.kh(f3().q.X_x2);
        this.xxx2.jh.zIndex = 0.001;
        this.addChild(this.xxx2.jh);
        this.xXx2();
        this.xxx10 = new vF24();
        this.xxx10.kh(f3().q.X_x10);
        this.xxx10.jh.zIndex = 0.001;
        this.addChild(this.xxx10.jh);
        this.xXx10();
        this.xxxLupatype = new vF24();
        this.xxxLupatype.kh(f3().q.X_xxlupa);
        this.xxxLupatype.jh.zIndex = 0.001;
        this.addChild(this.xxxLupatype.jh);
        this.xXxLupaZ();
        this.xxxEmojiType = new vF24();
        this.xxxEmojiType.kh(f3().q.emoji);
        this.xxxEmojiType.jh.zIndex = 0.001;
        this.addChild(this.xxxEmojiType.jh);
        this.x_emoji();
      })).prototype.hh = function (x, a, f, e) {
        this.Lj(0.002, this.Cj, x.Zc);
        this.Lj(0.003, this.Dj, a.Zc);
        this.Lj(0.004, this.Fj, e.Zc);
        this.Lj(0.005, this.Ej, f.Zc);
      };
      k.prototype.Lj = function (x, a, f) {
        while (f.length > a.length) {
          var e = new vF24();
          a.push(e);
          this.addChild(e.Mf());
        }
        while (f[__DECODE_0__(g._0x53706b)] < a.length) {
          a.pop().ih();
        }
        var t = x;
        for (var c = 0; c < f.length; c++) {
          t += 0.0001;
          var n = a[c];
          n.kh(f[c]);
          n.jh.zIndex = t;
        }
      };
      k.prototype.mh = function (x, a, f, e) {
        this[__DECODE_0__(v._0x44d7e5)] = true;
        this[__DECODE_0__(v._0x3c6282)].set(x, a);
        this.rotation = e;
        for (var t = 0; t < this.Cj.length; t++) {
          this.Cj[t].oh(f);
        }
        for (var c = 0; c < this.Dj[__DECODE_0__(v._0x4b694c)]; c++) {
          this.Dj[c].oh(f);
        }
        for (var n = 0; n < this.Ej.length; n++) {
          this.Ej[n].oh(f);
        }
        for (var s = 0; s < this.Fj.length; s++) {
          this.Fj[s].oh(f);
        }
      };
      k.prototype.lh = function () {
        this.visible = false;
      };
      k.prototype.Mj = function (x, a, f, e) {
        this.Gj.visible = true;
        var t = f / 1000;
        var c = 1 / this.Hj.length;
        for (var n = 0; n < this.Hj[__DECODE_0__(m._0xdf4a4)]; n++) {
          var s = 1 - (t + c * n) % 1;
          this.Hj[n].jh.alpha = 1 - s;
          this.Hj[n].oh(a * (0.5 + s * 4.5));
        }
      };
      k.prototype.Ij = function () {
        this.Gj[__DECODE_0__(p._0xba3c5f)] = false;
      };
      k.prototype.Nj = function (x, a, f, e) {
        this.Jj.jh.visible = true;
        this.Jj.jh[__DECODE_0__(u._0x3c2cd4)] = f15(this.Jj.jh.alpha, x.hj ? 0.9 : 0.2, e, 0.0025);
        this.Jj.oh(a);
      };
      k.prototype.Nflex = function (x, a, f, e) {
        this.flx.jh.visible = true;
        this[__DECODE_0__(h._0x379b25)].jh[__DECODE_0__(h._0x79af5a)] = f15(this.Jj.jh[__DECODE_0__(h._0x10dea0)], x.hj ? 0.9 : 0.2, e, 0.0025);
        this[__DECODE_0__(h._0x379b25)].oh(a);
      };
      k.prototype.flexx = function () {
        this.flx.jh.visible = false;
      };
      k.prototype.ActiveX5 = function (x, a, f, e) {
        this.xxx5.jh.visible = true;
        this.xxx5.jh[__DECODE_0__(b._0x597a7f)] = f15(this.Jj.jh.alpha, x.hj ? 0.9 : 0.2, e, 0.0025);
        this.xxx5.oh(a);
      };
      k.prototype.xXx5 = function () {
        this.xxx5.jh.visible = false;
      };
      k.prototype.ActiveEmoji = function (x, a, f, e) {
        this.xxxEmojiType.jh.visible = true;
        this.xxxEmojiType.oh(a);
      };
      k.prototype.x_emoji = function () {
        this.xxxEmojiType.jh.visible = false;
      };
      k.prototype.ActiveX2 = function (x, a, f, e) {
        this.xxx2.jh.visible = true;
        this.xxx2.jh.alpha = f15(this.Jj.jh[__DECODE_0__(l._0x197723)], x.hj ? 0.9 : 0.2, e, 0.0025);
        this.xxx2.oh(a);
      };
      k.prototype.xXx2 = function () {
        this[__DECODE_0__(_._0x4fbace)].jh[__DECODE_0__(_._0x34553e)] = false;
      };
      k.prototype.ActiveX10 = function (x, a, f, t) {
        this.xxx10.jh.visible = true;
        this.xxx10.jh.alpha = f15(this.Jj.jh.alpha, x.hj ? 0.9 : 0.2, t, 0.0025);
        this.xxx10.oh(a);
      };
      k.prototype.xXx10 = function () {
        this[__DECODE_0__(r._0x309915)].jh[__DECODE_0__(r._0x510d40)] = false;
      };
      k.prototype.ActiveZlupa = function (x, a, f, e) {
        this.xxxLupatype.jh.visible = true;
        this.xxxLupatype.jh.alpha = f15(this.Jj.jh.alpha, x.hj ? 0.9 : 0.2, e, 0.0025);
        this.xxxLupatype.oh(a);
      };
      k.prototype.xXxLupaZ = function () {
        this[__DECODE_0__(d._0x28c8ac) + "e"].jh.visible = false;
      };
      k.prototype.Kj = function () {
        this.Jj.jh[__DECODE_0__(o._0x3654e3)] = false;
      };
      var D = k;
      s.prototype.Oj = function (x) {
        return this.Aj + this.Bj * Math.sin(x * y - this.zj);
      };
      s.prototype.tj = function (x, f, e, t) {
        var c;
        var n;
        var s;
        var o;
        var d;
        var r;
        var _;
        var l;
        var b = x.Db * 2;
        var h = x.nj;
        var u = x.kj;
        var p = u * 4 - 3;
        this.zj = f / 400 * Math.PI;
        this.Aj = b * 1.5;
        this.Bj = b * 0.1 * x.jj;
        if (t(n = h[0], r = h[1])) {
          s = h[2];
          _ = h[3];
          o = h[4];
          var m = Math.atan2((l = h[5]) + r * 2 - _ * 3, o + n * 2 - s * 3);
          this.vj.mh(n, r, b, m);
          this.xj[0].mh(n, r, b, this.Oj(0), m);
          this.xj[1].mh(I * n + C * s + P * o, I * r + C * _ + P * l, b, this.Oj(1), O.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(n * 0.375 + s * 0.75 + A * o, r * 0.375 + _ * 0.75 + A * l, b, this.Oj(2), O.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(M * n + z * s + T * o, M * r + z * _ + T * l, b, this.Oj(3), O.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var v = 4;
        var g = 2;
        for (var k = u * 2 - 4; g < k; g += 2) {
          if (t(n = h[g], r = h[g + 1])) {
            c = h[g - 2];
            d = h[g - 1];
            s = h[g + 2];
            _ = h[g + 3];
            o = h[g + 4];
            l = h[g + 5];
            this.xj[v].mh(n, r, b, this.Oj(v), O.angleBetween(this.xj[v - 1], this.xj[v + 1]));
            v++;
            this.xj[v].mh(w * c + n * 0.84375 + s * 0.2578125 + j * o, w * d + r * 0.84375 + _ * 0.2578125 + j * l, b, this.Oj(v), O.angleBetween(this.xj[v - 1], this.xj[v + 1]));
            v++;
            this.xj[v].mh(S * c + n * 0.5625 + s * 0.5625 + S * o, S * d + r * 0.5625 + _ * 0.5625 + S * l, b, this.Oj(v), O.angleBetween(this.xj[v - 1], this.xj[v + 1]));
            v++;
            this.xj[v].mh(j * c + n * 0.2578125 + s * 0.84375 + w * o, j * d + r * 0.2578125 + _ * 0.84375 + w * l, b, this.Oj(v), O.angleBetween(this.xj[v - 1], this.xj[v + 1]));
            v++;
          } else {
            this.xj[v].lh();
            v++;
            this.xj[v].lh();
            v++;
            this.xj[v].lh();
            v++;
            this.xj[v].lh();
            v++;
          }
        }
        if (t(n = h[u * 2 - 4], r = h[u * 2 - 3])) {
          c = h[u * 2 - 6];
          d = h[u * 2 - 5];
          s = h[u * 2 - 2];
          _ = h[u * 2 - 1];
          this.xj[p - 5].mh(n, r, b, this.Oj(p - 5), O.angleBetween(this.xj[p - 6], this.xj[p - 4]));
          this.xj[p - 4].mh(T * c + z * n + M * s, T * d + z * r + M * _, b, this.Oj(p - 4), O.angleBetween(this.xj[p - 5], this.xj[p - 3]));
          this.xj[p - 3].mh(A * c + n * 0.75 + s * 0.375, A * d + r * 0.75 + _ * 0.375, b, this.Oj(p - 3), O.angleBetween(this.xj[p - 4], this.xj[p - 2]));
          this.xj[p - 2].mh(P * c + C * n + I * s, P * d + C * r + I * _, b, this.Oj(p - 2), O.angleBetween(this.xj[p - 3], this.xj[p - 1]));
          this.xj[p - 1].mh(s, _, b, this.Oj(p - 1), O.angleBetween(this.xj[p - 2], this.xj[p - 1]));
        } else {
          this.xj[p - 5].lh();
          this.xj[p - 4].lh();
          this.xj[p - 3].lh();
          this.xj[p - 2].lh();
          this.xj[p - 1].lh();
        }
        if (this.wj == 0 && p > 0) {
          this.Rf.addChild(this.vj);
        }
        for (this.wj > 0 && p == 0 && f19(this.vj); this.wj < p;) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > p) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        if (theoKzObjects.emoji && x && x.Mb && x.Mb.Mb) {
          this.vj.ActiveEmoji(x, b, f, e);
        } else {
          this.vj.x_emoji();
        }
        var y = x.Ff[vF.MAGNETIC_TYPE];
        if (this.xj[0].gj() && y != null && y.sc) {
          this.vj.Mj(x, b, f, e);
        } else {
          this.vj.Ij();
        }
        var D = x.Ff[vF.VELOCITY_TYPE];
        if (this.xj[0].gj() && D != null && D.sc) {
          this.vj.Nj(x, b, f, e);
        } else {
          this.vj.Kj();
        }
        var E = x.Ff[vF.FLEXIBLE_TYPE];
        if (wormxt_5dlrs_Obj.visiblePowersAll && this.xj[0].gj() && E != null && E.sc) {
          this.vj.Nflex(x, b, f, e);
        } else {
          this.vj.flexx();
        }
        var F = x.Ff[vF.X5_TYPE];
        if (wormxt_5dlrs_Obj.visiblePowersAll && this.xj[0].gj() && F != null && F.sc) {
          this.vj.ActiveX5(x, b, f, e);
        } else {
          this.vj.xXx5();
        }
        var L = x.Ff[vF.X2_TYPE];
        if (wormxt_5dlrs_Obj.visiblePowersAll && this.xj[0].gj() && L != null && L.sc) {
          this.vj.ActiveX2(x, b, f, e);
        } else {
          this.vj.xXx2();
        }
        var H = x.Ff[vF.X10_TYPE];
        if (wormxt_5dlrs_Obj.visiblePowersAll && this.xj[0].gj() && H != null && H.sc) {
          this.vj.ActiveX10(x, b, f, e);
        } else {
          this.vj.xXx10();
        }
        var N = x.Ff[vF.ZOOM_TYPE];
        if (wormxt_5dlrs_Obj.visiblePowersAll && this.xj[0].gj() && N != null && N.sc) {
          this.vj.ActiveZlupa(x, b, f, e);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var O = function () {
        function a(x, a) {
          this.Nf = x;
          this.Nf.Mg(false);
          this.Pf = a;
          this.Pf.Mg(false);
        }
        a.prototype.mh = function (x, a, f, e, t) {
          this.Nf.Mg(true);
          this.Nf.nh(x, a);
          this.Nf.oh(f);
          this.Nf.fj(t);
          this.Pf.Mg(true);
          this.Pf.nh(x, a);
          this.Pf.oh(e);
          this.Pf.fj(t);
        };
        a.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        a.prototype.gj = function () {
          return this.Nf.gj();
        };
        a.angleBetween = function (a, f) {
          return Math.atan2(a.Nf.jh.position.y - f.Nf.jh.position.y, a.Nf.jh.position.x - f.Nf.jh.position.x);
        };
        return a;
      }();
      return s;
    }();
    var vF27 = function () {
      function a(a) {
        this.se = a;
        this.te = a.get()[0];
        this.ue = new vO.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF26();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var f = this;
        f3().p.ca(function () {
          if (f3().p.W()) {
            f.Fb();
          }
        });
      }
      a.prototype.Fb = function () {
        var x = f3();
        this.Pj.hh(vO2.$e, null, x.p.Dc().dd(this.rh), x.p.Dc().fd(this.sh), x.p.Dc().gd(this.th), x.p.Dc().hd(this.uh), x.p.Dc().jd(this.vh));
      };
      a.prototype.Le = function (x) {
        this.sc = x;
      };
      a.prototype.ak = function (x, a, f) {
        this.rh = x;
        this.Sj = a;
        this.Xj = f;
        this.Fb();
      };
      a.prototype.bk = function (x, a, f) {
        this.sh = x;
        this.Tj = a;
        this.Yj = f;
        this.Fb();
      };
      a.prototype.ck = function (x, a, f) {
        this.th = x;
        this.Uj = a;
        this.Zj = f;
        this.Fb();
      };
      a.prototype.dk = function (x, a, f) {
        this.uh = x;
        this.Vj = a;
        this.$j = f;
        this.Fb();
      };
      a.prototype.ek = function (x, a, f) {
        this.vh = x;
        this.Wj = a;
        this._j = f;
        this.Fb();
      };
      a.prototype.Ra = function () {
        var x = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = x;
        this.te.width = x * this.Qj;
        this.te.height = x * this.Rj;
        this.Ng = this.Rj / 4;
        var a = f13(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != a) {
          for (var f = a; f < this.Pj.xj.length; f++) {
            this.Pj.xj[f].lh();
          }
          while (this.Pj.wj < a) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > a) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      a.prototype.Pa = function () {
        if (this.sc && f3().p.W) {
          var x = Date.now() / 200;
          var a = Math.sin(x);
          var f = this.Ng;
          var e = this.Ng * 1.5;
          var t = this.Qj - (this.Qj - f * 0.5 * (this.Pj.wj - 1)) * 0.5;
          var c = this.Rj * 0.5;
          var n = 0;
          var s = 0;
          for (var o = -1; o < this.Pj.wj; o++) {
            var d = o;
            var r = Math.cos(d * 1 / 12 * Math.PI - x) * (1 - Math.pow(16, d * -1 / 12));
            if (o >= 0) {
              var _ = t + f * -0.5 * d;
              var l = c + f * 0.5 * r;
              var b = f * 2;
              var h = e * 2;
              var u = Math.atan2(s - r, d - n);
              if (o == 0) {
                this.Pj.vj.mh(_, l, b, u);
              }
              this.Pj.xj[o].mh(_, l, b, h, u);
              var p = this.Sj ? this.Xj ? 0.4 + a * 0.2 : 0.9 + a * 0.1 : this.Xj ? 0.4 : 1;
              this.Pj.xj[o].Nf.qh(p);
              this.Pj.xj[o].Pf.qh(p);
            }
            n = d;
            s = r;
          }
          for (var m = 0; m < this.Pj.vj.Cj.length; m++) {
            var v = this.Tj ? this.Yj ? 0.4 + a * 0.2 : 0.9 + a * 0.1 : this.Yj ? 0.4 : 1;
            this.Pj.vj.Cj[m].qh(v);
          }
          for (var g = 0; g < this.Pj.vj.Dj.length; g++) {
            var k = this.Uj ? this.Zj ? 0.4 + a * 0.2 : 0.9 + a * 0.1 : this.Zj ? 0.4 : 1;
            this.Pj.vj.Dj[g].qh(k);
          }
          for (var y = 0; y < this.Pj.vj.Ej.length; y++) {
            var w = this.Vj ? this.$j ? 0.4 + a * 0.2 : 0.9 + a * 0.1 : this.$j ? 0.4 : 1;
            this.Pj.vj.Ej[y].qh(w);
          }
          for (var j = 0; j < this.Pj.vj.Fj.length; j++) {
            var S = this.Wj ? this._j ? 0.4 + a * 0.2 : 0.9 + a * 0.1 : this._j ? 0.4 : 1;
            this.Pj.vj.Fj[j].qh(S);
          }
          this.ue.render(this.Pj.Rf);
        }
      };
      return a;
    }();
    var vF28 = function () {
      function x(x) {
        this.rc = x;
      }
      x.fk = $("#game-view");
      x.gk = $("#results-view");
      x.hk = $("#main-menu-view");
      x.ik = $("#popup-view");
      x.jk = $("#toaster-view");
      x.kk = $("#loading-view");
      x.lk = $("#stretch-box");
      x.mk = $("#game-canvas");
      x.di = $("#background-canvas");
      x.nk = $("#social-buttons");
      x.ok = $("#markup-wrap");
      x.prototype.a = function () {};
      x.prototype.ii = function () {};
      x.prototype.ji = function () {};
      x.prototype.ei = function () {};
      x.prototype.Ra = function () {};
      x.prototype.Pa = function (x, a) {};
      return x;
    }();
    var vF29 = function () {
      function s(x, a, f, e, t, c) {
        var s = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + x + "</span></div>";
        var o = $(s);
        o.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: a,
              name: f,
              caption: e,
              description: t,
              picture: c
            }, function () {});
          }
        });
        return o;
      }
      var o = $("#final-capsat");
      var d = $("#final-continue");
      var r = $("#congrats-bg");
      var _ = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var l = $("#final-share-fb");
      var b = $("#final-message");
      var h = $("#final-score");
      var u = $("#final-place");
      var p = $("#final-board");
      var m = f11(vF28, function () {
        vF28.call(this, 0);
        var h = this;
        var u = f3();
        var p = vF28.mk.get()[0];
        console.log("sSE=" + v172.qk);
        o.text(f6("index.game.result.title"));
        d.text(f6("index.game.result.continue"));
        d.click(function () {
          u.r.Cd();
          u.r.G(vF4.AudioState.F);
          u.s.I(u.s.F);
        });
        $("#game-canvas").attr("tabindex", 0).focus();
        $("#game-canvas").click();
        $("#game-canvas").keypress(function (x) {
          console.log(x);
          if (x.target.type !== "text") {
            if (x.key.toLowerCase() === keys.zoom) {
              lxpdupdatezoom(1);
            }
            if (x.key.toLowerCase() === keys.restart) {
              let f = lxpdlastserver;
              $(".overlay-2").css("position", "static");
              if (f) {
                anApp.r.Hd();
                anApp.sa(f);
              }
            }
            if (x.key.toLowerCase() === keys.wormExplot) {
              let e = new Uint8Array([NaN, NaN]);
              anApp.o.Wb(e);
              setTimeout(() => {
                let x = lxpdlastserver;
                $(".overlay-2").css("position", "static");
                if (x) {
                  anApp.r.Hd();
                  anApp.sa(x);
                }
              }, 1000);
            }
            if (x.key.toLowerCase() === keys.laserHS) {
              $("#settings-laserHS-switch").click();
            }
            if (x.key.toLowerCase() === keys.sectores) {
              $("#settings-sectores-switch").click();
            }
            if (x.key.toLowerCase() === keys.background) {
              $("#settings-backgroundSolid-switch").click();
            }
            if (x.key.toLowerCase() === keys.giro) {
              if (isRunning) {
                isRunning = false;
                initialInterval = 55;
                cycleCounter = 1;
                isIncrementing = true;
                clearInterval(intervalID);
                intervalID = null;
                lxpdgirosubtracttexture.texture = ungirotexture;
                lxpdgirosubtracttexture.alpha = 0.25;
              } else {
                lxpdgirosubtracttexture.alpha = 0.75;
                startInterval();
                isRunning = true;
              }
            }
          }
        });
        $("#game-canvas").keydown(function (x) {
          if (x.key === "Enter") {
            m();
          }
          if (x.keyCode == 32) {
            h.rk = true;
          }
          if (x.keyCode == 49) {
            theoKzObjects.emoji = true;
            setTimeout(() => {
              theoKzObjects.emoji = false;
            }, 2000);
          }
          x.keyCode;
        }).keyup(function (x) {
          if (x.keyCode == 32) {
            h.rk = false;
          }
        });
        function m() {
          $("#chatInput").css("display", "block").focus();
        }
        p.addEventListener("touchstart", function (x) {
          if (x = x || window.event) {
            h.rk = x.touches.length >= 2;
          }
          x.preventDefault();
        }, true);
        p.addEventListener("touchend", function (x) {
          if (x = x || window.event) {
            h.rk = x.touches.length >= 2;
          }
        }, true);
        p.addEventListener("mousemove", function (x) {
          if ((x = x || window.event && typeof x.clientX !== "undefined") && !isRunning) {
            var a = x.clientX;
            var f = x.clientY;
            window.mouseX = a;
            window.mouseY = f;
            h.sk = Math.atan2(f - p.offsetHeight * 0.5, a - p.offsetWidth * 0.5);
          }
        }, true);
        p.addEventListener("mousedown", function (x) {
          h.rk = true;
        }, true);
        p.addEventListener("mouseup", function (x) {
          h.rk = false;
        }, true);
        if (lxpdmobilecheck()) {
          var g;
          var k = -1;
          p.addEventListener("touchmove", function (x) {
            if (x = x || window.event) {
              x = x.touches[0];
              var a = p.offsetWidth * 0.5;
              var e = p.offsetHeight * 0.5;
              if (lxpdmobilearrowtexture.visible) {
                a = lxpdmobilearrowtexture.x + 110;
                e = lxpdmobilearrowtexture.y + 110;
              }
              if (lxpdjoystick === -1) {
                h.sk = Math.atan2(x.pageY - e, x.pageX - a);
              }
              if (lxpdmobileprediction != -1) {
                var t = Math.sqrt((a - x.pageX) * (a - x.pageX) + (e - x.pageY) * (e - x.pageY));
                lxpdmobilepredictiontextures[lxpdmobileprediction].x = p.offsetWidth * 0.5 + (t < 110 ? t : 110) * Math.cos(h.sk) - 68;
                lxpdmobilepredictiontextures[lxpdmobileprediction].y = p.offsetHeight * 0.5 + (t < 110 ? t : 110) * Math.sin(h.sk) - 68;
                lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 1;
              }
            }
          }, true);
          p.addEventListener("touchend", function (x) {
            if (lxpdmobileprediction != -1) {
              lxpdmobilepredictiontextures[lxpdmobileprediction].alpha = 0.25;
            }
            if (x && k === -1) {
              h.rk = x.touches.length >= 2;
            }
          }, true);
          p.addEventListener("pointerdown", function (x) {
            let f = lxpdzoomplustexture.getGlobalPosition();
            let e = lxpdzoomsubtracttexture.getGlobalPosition();
            let t;
            let c;
            if (lxpdgirosubtracttexture !== undefined && lxpdexplotWubtracttexture !== undefined) {
              t = lxpdgirosubtracttexture.getGlobalPosition();
              c = lxpdexplotWubtracttexture.getGlobalPosition();
            }
            let n = lxpdmobilecontroltextures[lxpdmobilecontrol].getGlobalPosition();
            let s = lxpdmobilepeedtexture.getGlobalPosition();
            if (c !== undefined && t !== undefined) {
              if (x.clientX > c.x && x.clientX <= c.x + lxpdexplotWubtracttexture.width && x.clientY > c.y && x.clientY <= c.y + lxpdexplotWubtracttexture.height) {
                lxpdexplotWubtracttexture.emit("mouseup");
                return;
              }
              if (x.clientX > t.x && x.clientX <= t.x + lxpdgirosubtracttexture.width && x.clientY > t.y && x.clientY <= t.y + lxpdgirosubtracttexture.height) {
                lxpdgirosubtracttexture.emit("mouseup");
                return;
              }
            }
            if (x.clientX > f.x && x.clientX <= f.x + lxpdzoomplustexture.width && x.clientY > f.y && x.clientY <= f.y + lxpdzoomplustexture.height) {
              lxpdzoomplustexture.emit("mouseup");
              return;
            }
            if (x.clientX > e.x && x.clientX <= e.x + lxpdzoomsubtracttexture.width && x.clientY > e.y && x.clientY <= e.y + lxpdzoomsubtracttexture.height) {
              lxpdzoomsubtracttexture.emit("mouseup");
              return;
            }
            if (x.clientX > n.x && x.clientX <= n.x + lxpdmobilecontroltextures[lxpdmobilecontrol].width && x.clientY > n.y && x.clientY <= n.y + lxpdmobilecontroltextures[lxpdmobilecontrol].height) {
              lxpdmobilecontroltextures[lxpdmobilecontrol].emit("tap");
              return;
            }
            if (lxpdmobilepeedtexture.visible && x.clientX > s.x && x.clientX <= s.x + lxpdmobilepeedtexture.width && x.clientY > s.y && x.clientY <= s.y + lxpdmobilepeedtexture.height) {
              k = x.pointerId;
              h.rk = true;
              lxpdmobilepeedtexture.alpha = 1;
              return;
            }
            if (lxpdjoystick !== -1 && !lxpdjoysticks[lxpdjoystick].visible) {
              g = x.pointerId;
              lxpdjoysticks[lxpdjoystick].x = x.clientX;
              lxpdjoysticks[lxpdjoystick].y = x.clientY;
              lxpdjoysticks[lxpdjoystick].visible = true;
              lxpdjoysticks[lxpdjoystick].onDragStart(x);
            }
          }, true);
          p.addEventListener("pointerup", function (x) {
            if (x.pointerId == k) {
              h.rk = false;
              k = -1;
              lxpdmobilepeedtexture.alpha = 0.5;
            }
            if (x.pointerId == g && lxpdjoystick !== -1) {
              lxpdjoysticks[lxpdjoystick].visible = false;
              lxpdjoysticks[lxpdjoystick].onDragEnd(x);
            }
          }, true);
          p.addEventListener("pointermove", function (a) {
            if (a.pointerId == g && lxpdjoystick !== -1) {
              lxpdjoysticks[lxpdjoystick].onDragMove(a);
            }
          }, true);
        }
        this.wb = new vF11(vF28.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        theoEvents.eventoPrincipal = h;
      });
      m.prototype.a = function () {};
      m.prototype.ii = function () {
        if (this.cb == 0) {
          vF28.fk.stop();
          vF28.fk.fadeIn(500);
          vF28.gk.stop();
          vF28.gk.fadeOut(1);
          vF28.hk.stop();
          vF28.hk.fadeOut(50);
          vF28.ik.stop();
          vF28.ik.fadeOut(50);
          vF28.jk.stop();
          vF28.jk.fadeOut(50);
          vF28.kk.stop();
          vF28.kk.fadeOut(50);
          vF28.lk.stop();
          vF28.lk.fadeOut(1);
          vF28.di.stop();
          vF28.di.fadeOut(50);
          vF5.Le(false);
          vF28.nk.stop();
          vF28.nk.fadeOut(50);
          vF28.ok.stop();
          vF28.ok.fadeOut(50);
        } else {
          vF28.fk.stop();
          vF28.fk.fadeIn(500);
          vF28.gk.stop();
          vF28.gk.fadeIn(500);
          vF28.hk.stop();
          vF28.hk.fadeOut(50);
          vF28.ik.stop();
          vF28.ik.fadeOut(50);
          vF28.jk.stop();
          vF28.jk.fadeOut(50);
          vF28.kk.stop();
          vF28.kk.fadeOut(50);
          vF28.lk.stop();
          vF28.lk.fadeOut(1);
          vF28.di.stop();
          vF28.di.fadeOut(50);
          vF5.Le(false);
          vF28.nk.stop();
          vF28.nk.fadeOut(50);
          vF28.ok.stop();
          vF28.ok.fadeOut(50);
        }
      };
      m.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      m.prototype.Fa = function () {
        console.log("re");
        r.hide();
        setTimeout(function () {
          console.log("fi_bg");
          r.fadeIn(100);
        }, 100);
        _.hide();
        setTimeout(function () {
          console.log("fi_aw");
          _.fadeIn(100);
        }, 100);
        this.cb = 1;
        return this;
      };
      m.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f3().r.Gd();
        }
      };
      m.prototype.Ra = function () {
        this.wb.Ra();
      };
      m.prototype.Pa = function (x, a) {
        this.wb.Pa(x, a);
      };
      m.prototype.Da = function (a, f, e) {
        var t = undefined;
        var c = undefined;
        var n = undefined;
        if (f >= 1 && f <= 10) {
          t = f6("index.game.result.place.i" + f);
          c = f6("index.game.result.placeInBoard");
          n = f6("index.game.social.shareResult.messGood").replace("{0}", e).replace("{1}", a).replace("{2}", t);
        } else {
          t = "";
          c = f6("index.game.result.tryHit");
          n = f6("index.game.social.shareResult.messNorm").replace("{0}", e).replace("{1}", a);
        }
        b.html(f6("index.game.result.your"));
        h.html(a);
        u.html(t);
        p.html(c);
        if (v172.qk) {
          var o = f6("index.game.result.share");
          f6("index.game.social.shareResult.caption");
          l.empty().append(s(o, "https://wormate.io", "wormate.io", n, n, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      m.prototype.T = function () {
        return this.sk;
      };
      m.prototype.U = function () {
        return this.rk;
      };
      return m;
    }();
    v12 = {
      _0x2a5444: 535,
      _0x409668: 1270,
      _0x294f9f: 910,
      _0x5eb855: 1735,
      _0x19a03a: 693,
      _0x128bba: 2048,
      _0x5c49ab: 535,
      _0x202c1a: 2048,
      _0x36d65a: 535,
      _0x4d52d9: 1270
    };
    v13 = $("#loading-worm-a");
    v14 = $("#loading-worm-b");
    v15 = $("#loading-worm-c");
    v16 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
    (v17 = f11(vF28, function () {
      vF28.call(this, 0);
    })).prototype.a = function () {};
    v17.prototype.ii = function () {
      vF28.fk.stop();
      vF28.fk.fadeOut(50);
      vF28.gk.stop();
      vF28.gk.fadeOut(50);
      vF28.hk.stop();
      vF28.hk.fadeOut(50);
      vF28.ik.stop();
      vF28.ik.fadeOut(50);
      vF28.jk.stop();
      vF28.jk.fadeOut(50);
      vF28.kk.stop();
      vF28.kk.fadeIn(500);
      vF28.lk.stop();
      vF28.lk.fadeIn(1);
      vF28.di.stop();
      vF28.di.fadeIn(500);
      vF5.Le(true);
      vF28.nk.stop();
      vF28.nk.fadeOut(50);
      vF28.ok.stop();
      vF28.ok.fadeOut(50);
    };
    v17.prototype.ji = function () {
      this.tk();
    };
    v17.prototype.tk = function () {
      v13.css(__DECODE_0__(v12._0x2a5444) + __DECODE_0__(v12._0x409668), __DECODE_0__(v12._0x294f9f));
      for (var x = 0; x < v16[__DECODE_0__(v12._0x5eb855)]; x++) {
        var a = Math.floor(Math[__DECODE_0__(v12._0x19a03a)]() * v16.length);
        var f = v16[x];
        v16[x] = v16[a];
        v16[a] = f;
      }
      v13[__DECODE_0__(v12._0x128bba)](__DECODE_0__(v12._0x5c49ab) + "-position", v16[0]);
      v14.css(__DECODE_0__(v12._0x5c49ab) + "-position", v16[1]);
      v15[__DECODE_0__(v12._0x202c1a)](__DECODE_0__(v12._0x36d65a) + __DECODE_0__(v12._0x4d52d9), v16[2]);
    };
    var vV17 = v17;
    v18 = {
      _0x2079fa: 892,
      _0x16b393: 653,
      _0x371a7b: 2744,
      _0xee123: 2648,
      _0x355896: 1008,
      _0x57814c: 653,
      _0x4e5786: 388,
      _0x2e1fb6: 909,
      _0x339d44: 1928,
      _0xc6a910: 2185,
      _0x1fbcc4: 1879,
      _0x4aef02: 2666,
      _0x286484: 942,
      _0x3c7c56: 1924,
      _0x399212: 2078,
      _0x3b2fca: 2400,
      _0xe351b9: 2045,
      _0x307b5e: 405,
      _0x3727c4: 1992,
      _0x12beb5: 516,
      _0x356464: 2181,
      _0x4396c1: 675,
      _0x496f24: 2487,
      _0x1d1ebe: 2395,
      _0x5d974b: 1742,
      _0x4189aa: 1377,
      _0x1636f9: 2306,
      _0x13fbf4: 459,
      _0xd0a312: 496,
      _0x368b38: 2382,
      _0x7699a0: 548,
      _0x202955: 665,
      _0x1c4d80: 1698,
      _0x188389: 1462,
      _0x27cc05: 2170,
      _0x524fd8: 1297,
      _0x32930e: 1326,
      _0x5c079b: 2277,
      _0x1d290c: 1879,
      _0x152e91: 2666,
      _0x50bcce: 1342,
      _0x12616d: 2560,
      _0x5d276b: 2769,
      _0x29f819: 2759,
      _0x5aeb0c: 466,
      _0x349999: 878,
      _0x4ed958: 2403,
      _0x2e70b3: 1480,
      _0x4c2437: 2288,
      _0x39cd9f: 1419,
      _0x1f63d6: 690,
      _0x1cb83b: 2338,
      _0x3bf2d3: 1452,
      _0x1298e7: 2052,
      _0x18d8e4: 524,
      _0x3dabe1: 376,
      _0x5f2724: 486,
      _0x555dbb: 1872,
      _0x3e3477: 1878,
      _0x5e0693: 1853,
      _0x5c66ae: 1801
    };
    v19 = {
      _0x1526af: 1666
    };
    v20 = {
      _0x4da425: 2659,
      _0x280950: 2034,
      _0xcdd464: 1824,
      _0x14e4c9: 508,
      _0x3efb45: 598,
      _0x5f2b55: 2238
    };
    v21 = {
      _0x468ff3: 1326,
      _0x1a77b4: 1326,
      _0xe848a5: 1048,
      _0x1eb5f0: 1937,
      _0x2f1de6: 590,
      _0x2ae2d5: 2539,
      _0x321892: 1726,
      _0x175072: 619,
      _0x35ca94: 1916,
      _0x2d4937: 1391,
      _0x47d3c8: 534,
      _0x297da0: 2777,
      _0x942f95: 2604,
      _0x589344: 1843,
      _0x53a713: 507,
      _0x52d9af: 389,
      _0x546fc3: 1934,
      _0x96d648: 1571,
      _0x3f32a7: 2002,
      _0xd6d939: 1326,
      _0x44a4b8: 2701,
      _0x272ced: 1709,
      _0xc37044: 2646,
      _0x513c33: 1762,
      _0x3e734f: 2703
    };
    $("#mm-event-text");
    v22 = $("#mm-skin-canv");
    v23 = $("#mm-skin-prev");
    v24 = $("#mm-skin-next");
    v25 = $("#mm-skin-over");
    v26 = $("#mm-skin-over-button-list");
    v27 = $("#mm-params-nickname");
    v28 = $("#mm-params-game-mode");
    v29 = $("#mm-action-buttons");
    v30 = $("#mm-action-play");
    v31 = $("#mm-action-guest");
    v32 = $("#mm-action-login");
    v33 = $("#mm-player-info");
    v34 = $("#mm-store");
    v35 = $("#mm-leaders");
    v36 = $("#mm-settings");
    v37 = $("#mm-coins-box");
    v38 = $("#mm-player-avatar");
    v39 = $("#mm-player-username");
    v40 = $("#mm-coins-val");
    v41 = $("#mm-player-exp-bar");
    v42 = $("#mm-player-exp-val");
    v43 = $("#mm-player-level");
    (v44 = f11(vF28, function () {
      vF28.call(this, 1);
      var a = f3();
      this.uk = new vF27(v22);
      v28[__DECODE_0__(v21._0x468ff3)](function () {
        a.r.Cd();
      });
      v22.click(function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s.$h);
        }
      });
      v23[__DECODE_0__(v21._0x1a77b4)](function () {
        a.r.Cd();
        a.t.Ah();
      });
      v24.click(function () {
        a.r.Cd();
        a.t.zh();
      });
      v27.keypress(function (x) {
        if (x.keyCode == 13) {
          a.na();
        }
      });
      v30.click(function () {
        a.r.Cd();
        a.na();
      });
      v31.click(function () {
        a.r.Cd();
        a.na();
      });
      v32.click(function () {
        a.r.Cd();
        a.s.I(a.s.Zh);
      });
      v36.click(function () {
        a.r.Cd();
        a.s.I(a.s.xa);
      });
      v33.click(function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s.Yh);
        }
      });
      v35.click(function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s.Xh);
        }
      });
      v34.click(function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s._h);
        }
      });
      v37[__DECODE_0__(v21._0x468ff3)](function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s.Wh);
        }
      });
      this.vk();
      this.wk();
      $("#final-continue").after("<div id=\"final-replay\">Tekrar Başla</div>");
      $("#final-replay").click(function () {
        let x = lxpdlastserver;
        if (x) {
          anApp.r.Hd();
          anApp.sa(x);
        }
      });
      v34.after("<div id=\"mm-wtr-settings\" style=\"\">Settings</div>");
      $("#mm-advice-cont").html(`
    <div id="mm-advice-cont" style="display: flex; justify-content: flex-start; align-items: center; gap: 10px; width: 100%; padding-top: 0px; margin-left: 12%;">
        <button 
            id="fullscreen" 
            style="
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 40%; 
                max-width: 150px; 
                height: 40px; 
                font-size: 14px; 
                font-weight: bold; 
                text-align: center; 
                border: none; 
                border-radius: 6px; 
                background-color: #007BFF; 
                color: white; 
                cursor: pointer; 
                margin-top: -10px; 
                gap: 8px;">
            <i class="fas fa-expand"></i> EKRAN
        </button>
        <button 
            id="wtrplayagain" 
            style="
                display: flex; 
                align-items: center; 
                justify-content: center; 
                width: 40%; 
                max-width: 150px; 
                height: 40px; 
                font-size: 14px; 
                font-weight: bold; 
                text-align: center; 
                border: none; 
                border-radius: 6px; 
                background-color: #28A745; 
                color: white; 
                cursor: pointer;
                margin-top: -10px;
                gap: 8px;">
            <i class="fas fa-redo"></i> TEKRAR
        </button>
    </div>
`);
      $("#fullscreen")[__DECODE_0__(v21._0xd6d939)](function () {
        if (lxpdmobilefullscreenstatus) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.body.webkitExitFullscreen) {
            document.body.webkitExitFullscreen();
          }
          lxpdmobilefullscreenstatus = false;
        } else {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
          }
          lxpdmobilefullscreenstatus = true;
        }
      });
      $(__DECODE_0__(v21._0x44a4b8) + "ttings").click(function () {
        if (a.u.P()) {
          a.r.Cd();
          a.s.I(a.s.wtrset);
        }
      });
      var f = f4(vF6.va);
      if (__DECODE_0__(v21._0x272ced) != f && __DECODE_0__(v21._0xc37044) != f) {
        f = __DECODE_0__(v21._0x272ced);
      }
      v28[__DECODE_0__(v21._0x513c33)](f);
      console[__DECODE_0__(v21._0x3e734f)]("Load GM: " + f);
    })).prototype.a = function () {
      var x = f3();
      var a = this;
      x.u.V(function () {
        x.s.F.xk();
      });
      x.u.Pi(function () {
        if (x.u.P()) {
          x.t.Bh(x.u.Di(), vF17.ia);
          x.t.Bh(x.u.Ei(), vF17.ja);
          x.t.Bh(x.u.Fi(), vF17.ka);
          x.t.Bh(x.u.Gi(), vF17.la);
          x.t.Bh(x.u.Hi(), vF17.ma);
        } else {
          x.t.Bh(x.Ga(), vF17.ia);
          x.t.Bh(0, vF17.ja);
          x.t.Bh(0, vF17.ka);
          x.t.Bh(0, vF17.la);
          x.t.Bh(0, vF17.ma);
        }
      });
      x.u.Pi(function () {
        v30[__DECODE_0__(v20._0x4da425)](x.u.P());
        v32[__DECODE_0__(v20._0x4da425)](!x.u.P());
        v31.toggle(!x.u.P());
        v35.toggle(x.u.P());
        v34.toggle(x.u.P());
        v37.toggle(x.u.P());
        if (x.u.P()) {
          v25[__DECODE_0__(v20._0x280950)]();
          v39.html(x.u.wi());
          v38.attr("src", x.u.xi());
          v40.html(x.u.zi());
          v41.width(x.u.Bi() * 100 / x.u.Ci() + "%");
          v42.html(x.u.Bi() + __DECODE_0__(v20._0xcdd464) + x.u.Ci());
          v43.html(x.u.Ai());
          v27.val(x.u.ga());
        } else {
          v25.toggle(v172.qk && !x.Ha());
          v39.html(v39[__DECODE_0__(v20._0x14e4c9)]("guest"));
          v38.attr("src", vLSimagesguestavatarxma);
          v40[__DECODE_0__(v20._0x3efb45)]("10");
          v41[__DECODE_0__(v20._0x5f2b55)]("0");
          v42.html("");
          v43.html(1);
          v27.val(f4(vF6.Aa));
        }
      });
      x.t.xh(function () {
        a.uk.ak(x.t.ha(vF17.ia), false, false);
        a.uk.bk(x.t.ha(vF17.ja), false, false);
        a.uk.ck(x.t.ha(vF17.ka), false, false);
        a.uk.dk(x.t.ha(vF17.la), false, false);
        a.uk.ek(x.t.ha(vF17.ma), false, false);
      });
    };
    v44.prototype.ii = function () {
      vF28.fk.stop();
      vF28.fk.fadeOut(50);
      vF28.gk.stop();
      vF28.gk.fadeOut(50);
      vF28.hk.stop();
      vF28.hk.fadeIn(500);
      vF28.ik.stop();
      vF28.ik.fadeOut(50);
      vF28.jk.stop();
      vF28.jk.fadeOut(50);
      vF28.kk.stop();
      vF28.kk.fadeOut(50);
      vF28.lk.stop();
      vF28.lk.fadeIn(1);
      vF28.di.stop();
      vF28.di.fadeIn(500);
      vF5.Le(true);
      vF28.nk.stop();
      vF28.nk.fadeIn(500);
      vF28.ok.stop();
      vF28.ok.fadeIn(500);
    };
    v44.prototype.ji = function () {
      f3().r.Dd();
      this.uk.Le(true);
    };
    v44.prototype.ei = function () {
      this.uk.Le(false);
    };
    v44.prototype.Ra = function () {
      this.uk.Ra();
    };
    v44.prototype.Pa = function (x, a) {
      this.uk.Pa();
    };
    v44.prototype.ga = function () {
      return v27.val();
    };
    v44.prototype.D = function () {
      return v28.val();
    };
    v44.prototype.xk = function () {
      v29.show();
    };
    v44.prototype.vk = function () {
      var x = $("#mm-advice-cont").children();
      var a = 0;
      setInterval(function () {
        x.eq(a)[__DECODE_0__(v19._0x1526af)](500, function () {
          if (++a >= x.length) {
            a = 0;
          }
          x.eq(a).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    v44.prototype.wk = function () {
      function x() {
        a.Ka(true);
        setTimeout(function () {
          v25.hide();
        }, 3000);
      }
      var a = f3();
      if (v172.qk && !a.Ha()) {
        v25[__DECODE_0__(v18._0x2079fa)]();
        var f = f6("index.game" + __DECODE_0__(v18._0x16b393) + ".unlockSkins.share");
        var e = encodeURIComponent(f6("index.game" + __DECODE_0__(v18._0x16b393) + ".unlockSkins.comeAndPlay") + (__DECODE_0__(v18._0x371a7b) + "ormate.io/ #wormate " + __DECODE_0__(v18._0xee123)));
        var t = encodeURIComponent(f6(__DECODE_0__(v18._0x355896) + __DECODE_0__(v18._0x57814c) + __DECODE_0__(v18._0x4e5786) + "ns.comeAnd" + __DECODE_0__(v18._0x2e1fb6)));
        v26[__DECODE_0__(v18._0x339d44)]($("<a class=\"mm-skin-ov" + __DECODE_0__(v18._0xc6a910) + __DECODE_0__(v18._0x1fbcc4) + "in-over-tw" + __DECODE_0__(v18._0x4aef02) + "_blank\" href=\"http:/" + __DECODE_0__(v18._0x286484) + "om/intent/" + __DECODE_0__(v18._0x3c7c56) + __DECODE_0__(v18._0x399212) + e + ("\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxu" + __DECODE_0__(v18._0x3b2fca) + "ovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIg" + __DECODE_0__(v18._0xe351b9) + "Q1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIG" + __DECODE_0__(v18._0x307b5e) + __DECODE_0__(v18._0x3727c4) + "kgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOT" + __DECODE_0__(v18._0x12beb5) + "MyAwLTUgMC04IDQtMyAy" + __DECODE_0__(v18._0x356464) + "0zNSAwIDAt" + __DECODE_0__(v18._0x4396c1) + "AxMCAwIDAgMCAwIDAgMCAwIDAgMCAw" + __DECODE_0__(v18._0x496f24) + "EgMjctMTgg" + __DECODE_0__(v18._0x1d1ebe) + "AwLTE0IDct" + __DECODE_0__(v18._0x5d974b) + __DECODE_0__(v18._0x4189aa) + "MTAgMyAtMTMtMTMtMzAtMjItNTAtMj" + __DECODE_0__(v18._0x1636f9) + __DECODE_0__(v18._0x13fbf4) + "kgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAg" + __DECODE_0__(v18._0xd0a312) + __DECODE_0__(v18._0x368b38) + "IDAtMTYtMS" + __DECODE_0__(v18._0x7699a0) + __DECODE_0__(v18._0x202955) + "U0IDY4IDAg" + __DECODE_0__(v18._0x1c4d80) + "MwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlM" + __DECODE_0__(v18._0x188389) + __DECODE_0__(v18._0x27cc05) + "I0ZGRiIvPj") + "wvc3ZnPg==" + __DECODE_0__(v18._0x524fd8) + f + "</span></a>")[__DECODE_0__(v18._0x32930e)](x));
        v26[__DECODE_0__(v18._0x339d44)]($("<a class=\"" + __DECODE_0__(v18._0x5c079b) + "er-button\"" + __DECODE_0__(v18._0x1d290c) + "in-over-fb" + __DECODE_0__(v18._0x152e91) + "_blank\" href=\"https:" + __DECODE_0__(v18._0x50bcce) + "book.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwo" + __DECODE_0__(v18._0x12616d) + __DECODE_0__(v18._0x5d276b) + "i=https%3A%2F%2Fwormate.io&has" + __DECODE_0__(v18._0x29f819) + "rmateio&qu" + __DECODE_0__(v18._0x5aeb0c) + t + (__DECODE_0__(v18._0x349999) + "=\"data:image/svg+xml;base64,PH" + __DECODE_0__(v18._0x4ed958) + "cz0iaHR0cDovL3d3dy53" + __DECODE_0__(v18._0x2e70b3) + "AwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT" + __DECODE_0__(v18._0x4c2437) + __DECODE_0__(v18._0x39cd9f) + __DECODE_0__(v18._0x1f63d6) + __DECODE_0__(v18._0x1cb83b) + "pzcGFjZT0icHJlc2Vydm" + __DECODE_0__(v18._0x3bf2d3) + __DECODE_0__(v18._0x1298e7) + "QuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3" + __DECODE_0__(v18._0x18d8e4) + "LTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC" + __DECODE_0__(v18._0x3dabe1) + "IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41" + __DECODE_0__(v18._0x5f2724) + __DECODE_0__(v18._0x555dbb) + "MVY0NTZ6IiBmaWxsPSIj" + __DECODE_0__(v18._0x3e3477)) + __DECODE_0__(v18._0x5e0693) + "pan>" + f + __DECODE_0__(v18._0x5c66ae) + ">")[__DECODE_0__(v18._0x32930e)](x));
      }
    };
    var vV44 = v44;
    v45 = {
      _0x993729: 1666,
      _0x49969d: 1666,
      _0x28960b: 1345
    };
    (v46 = f11(vF28, function () {
      vF28.call(this, 0);
    })).prototype.a = function () {};
    v46.prototype.ii = function () {
      vF28.fk.stop();
      vF28.fk[__DECODE_0__(v45._0x993729)](50);
      vF28.gk.stop();
      vF28.gk.fadeOut(50);
      vF28.hk.stop();
      vF28.hk[__DECODE_0__(v45._0x993729)](50);
      vF28.ik.stop();
      vF28.ik.fadeOut(50);
      vF28.jk.stop();
      vF28.jk.fadeOut(50);
      vF28.kk.stop();
      vF28.kk[__DECODE_0__(v45._0x993729)](50);
      vF28.lk.stop();
      vF28.lk.fadeOut(1);
      vF28.di.stop();
      vF28.di[__DECODE_0__(v45._0x49969d)](50);
      vF5.Le(false);
      vF28.nk[__DECODE_0__(v45._0x28960b)]();
      vF28.nk.fadeOut(50);
      vF28.ok[__DECODE_0__(v45._0x28960b)]();
      vF28.ok[__DECODE_0__(v45._0x993729)](50);
    };
    var vV46 = v46;
    v47 = {
      _0x4e7cf4: 1321
    };
    v48 = $("#toaster-stack");
    (v49 = f11(vF28, function () {
      vF28.call(this, 0);
      this.yk = [];
      this.zk = null;
    })).prototype.a = function () {};
    v49.prototype.ii = function () {
      vF28.fk.stop();
      vF28.fk.fadeOut(50);
      vF28.gk.stop();
      vF28.gk.fadeOut(50);
      vF28.hk.stop();
      vF28.hk.fadeOut(50);
      vF28.ik.stop();
      vF28.ik.fadeOut(50);
      vF28.jk.stop();
      vF28.jk.fadeIn(500);
      vF28.kk.stop();
      vF28.kk.fadeOut(50);
      vF28.lk.stop();
      vF28.lk.fadeIn(1);
      vF28.di.stop();
      vF28.di.fadeIn(500);
      vF5.Le(true);
      vF28.nk.stop();
      vF28.nk.fadeOut(50);
      vF28.ok.stop();
      vF28.ok.fadeIn(500);
    };
    v49.prototype.ji = function () {
      this.Ak();
    };
    v49.prototype.mi = function () {
      return this.zk != null || this.yk.length > 0;
    };
    v49.prototype._ = function (x) {
      this.yk[__DECODE_0__(v47._0x4e7cf4)](x);
      setTimeout(function () {
        f3().s.ki();
      }, 0);
    };
    v49.prototype.Ti = function (x) {
      this.yk.push(x);
      setTimeout(function () {
        f3().s.ki();
      }, 0);
    };
    v49.prototype.Ak = function () {
      var a = this;
      if (this.zk == null) {
        if (this.yk.length == 0) {
          f3().s.gi();
          return;
        }
        var f = this.yk.shift();
        this.zk = f;
        var e = f.Bk();
        e.hide();
        e.fadeIn(300);
        v48.append(e);
        f.Ck = function () {
          e.fadeOut(300);
          setTimeout(function () {
            e.remove();
          }, 300);
          if (a.zk == f) {
            a.zk = null;
          }
          a.Ak();
        };
        f.ji();
      }
    };
    var vV49 = v49;
    var vF30 = function () {
      var e = $("#popup-menu-label");
      var t = $("#popup-menu-coins-box");
      var c = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var x = f3();
        x.r.Cd();
        x.s.gi();
      });
      t.click(function () {
        var x = f3();
        if (x.u.P()) {
          x.r.Cd();
          x.s.I(x.s.Wh);
        }
      });
      var n = f11(vF28, function (x, a) {
        vF28.call(this, 1);
        this.ad = x;
        this.Dk = a;
      });
      var s = "<div id=\"wormtr-settings-view\" class=\"base-popup-view\" style=\"opacity: 1;\"><div class=\"settings-icons\"><span id=\"user-icon\" class=\"material-icons\">account_circle</span><span id=\"hotkeys-icon\" class=\"material-icons\">keyboard</span></div><div id=\"user-section\" class=\"settings-section\"><div class=\"settings-line\"><span id=\"wtr-settings-id\" class=\"settings-label\">ID: </span><button id=\"idkopyala\">" + lenguaje[idiomaActual].copiar + "</button></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">You Color Map: </span><input type=\"color\" id=\"colorPicker\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Team Code: </span><input type=\"text\" id=\"teamCodeInput\" placeholder=\"Enter team code\" /></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">" + lenguaje[idiomaActual].fondos + "</span><select id=\"arkaplan\"><option value=\"0\">" + lenguaje[idiomaActual].fondo0 + "</option><option value=\"1\">" + lenguaje[idiomaActual].fondo1 + "</option><option value=\"2\">" + lenguaje[idiomaActual].fondo2 + "</option><option value=\"3\">" + lenguaje[idiomaActual].fondo3 + "</option><option value=\"4\">" + lenguaje[idiomaActual].fondo4 + "</option><option value=\"5\">Textil</option><option value=\"6\">Sky Blue</option><option value=\"7\">Sky Purp</option><option value=\"8\">Sky Violet</option><option value=\"9\">Sky Orange</option><option value=\"10\">Sky Write</option><option value=\"11\">Arena 1</option><option value=\"12\">Arena 2</option><option value=\"13\">Arena 3</option><option value=\"14\">Özel Arka 4</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings-label\">Top</span><select id=\"wtrtop\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></div><div class=\"popup-sep\"></div><div class=\"settings-line\"><span class=\"settings_span\" >" + lenguaje[idiomaActual].skinVisible + "</span><input style=\"width: 60px\" type=\"text\" name=\"inputReplaceSkin\" id=\"inputReplaceSkin\" value=\"35\" maxlength=\"4\" onchange=\"setIdReplaceSkin(this)\"></div><div class=\"popup-sep\"></div><span id=\"wtr-settings-version\" class=\"settings-line\"></span></div></div>";
      $("#settings-view").after(s);
      $("#teamCodeInput").on("input", function () {
        zwormData.teamCode = $(this).val();
        console.log("Team Code updated:", zwormData.teamCode);
      });
      $("#colorPicker").on("input", function () {
        let x = $(this).val();
        zwormData.teamColor = "0x" + x.substring(1);
      });
      lxpdselectedbackground = 0;
      lxpdtoplist = 10;
      var o = $("#arkaplan");
      var d = $("#wtrtop");
      var r = localStorage.getItem("wtr-background");
      if (r) {
        var _ = parseInt(r);
        o.val(_);
        lxpdselectedbackground = _;
      }
      let l = localStorage.getItem("wtr-toplist");
      if (l) {
        let b = parseInt(l);
        lxpdtoplist = b;
      }
      let h = _wrmxt.isNumberValid(theoKzObjects.idReplaceSkin);
      if (h) {
        $("#inputReplaceSkin").val(theoKzObjects.idReplaceSkin);
      } else {
        let u = $("#inputReplaceSkin").val();
        h = _wrmxt.isNumberValid(u);
        theoKzObjects.idReplaceSkin = h ? u : 35;
      }
      d.val(lxpdtoplist);
      o.change(function (x) {
        lxpdselectedbackground = this.value;
        var a = obtenerImagenPorSeleccion(lxpdselectedbackground);
        if (a) {
          anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(a));
        }
        localStorage.setItem("wtr-background", this.value.toString());
      });
      d.change(function (x) {
        lxpdtoplist = this.value;
        localStorage.setItem("wtr-toplist", this.value.toString());
      });
      $("#idkopyala").click(function () {
        navigator.clipboard.writeText(lxpduserId);
      });
      n.prototype.a = function () {
        n.parent.prototype.a.call(this);
        if (!n.Ek) {
          n.Ek = true;
          var f = f3();
          f.u.Pi(function () {
            if (f.u.P()) {
              c.html(f.u.zi());
            } else {
              c.html("0");
            }
          });
        }
      };
      n.Fk = $("#coins-view");
      n.Gk = $("#leaders-view");
      n.Hk = $("#profile-view");
      n.Ik = $("#settings-view");
      n.Jk = $("#login-view");
      n.Kk = $("#skins-view");
      n.Lk = $("#store-view");
      n.wtrset = $("#wormtr-settings-view");
      n.Mk = $("#wear-view");
      n.Nk = $("#withdraw-consent-view");
      n.Ok = $("#delete-account-view");
      n.Pk = $("#please-wait-view");
      n.prototype.ii = function () {
        vF28.fk.stop();
        vF28.fk.fadeOut(200);
        vF28.gk.stop();
        vF28.gk.fadeOut(200);
        vF28.hk.stop();
        vF28.hk.fadeOut(200);
        vF28.ik.stop();
        vF28.ik.fadeIn(200);
        vF28.jk.stop();
        vF28.jk.fadeOut(200);
        vF28.kk.stop();
        vF28.kk.fadeOut(200);
        vF28.nk.stop();
        vF28.nk.fadeIn(200);
        vF28.ok.stop();
        vF28.ok.fadeIn(200);
        e.html(this.ad);
        t.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      n.prototype.Rk = function () {};
      n.prototype.Sk = function () {
        vF30.Pk.stop();
        vF30.Pk.fadeIn(300);
      };
      n.prototype.Qk = function () {
        vF30.Pk.stop();
        vF30.Pk.fadeOut(300);
      };
      return n;
    }();
    v50 = {
      _0x219525: 1345,
      _0x34f713: 1345,
      _0x49f7a7: 1666,
      _0x246d55: 1345,
      _0xf10ed: 1717,
      _0x108b7e: 1345
    };
    v51 = {
      _0x161878: 2004
    };
    v52 = $("#store-buy-coins_125000");
    v53 = $("#store-buy-coins_50000");
    v54 = $("#store-buy-coins_16000");
    v55 = $("#store-buy-coins_7000");
    v56 = $("#store-buy-coins_3250");
    v57 = $("#store-buy-coins_1250");
    (v58 = f11(vF30, function () {
      vF30.call(this, f6("index.game.popup.menu.coins.tab"), false);
      var a = f3();
      var f = this;
      v52.click(function () {
        a.r.Cd();
        f.Tk("coins_125000");
      });
      v53.click(function () {
        a.r.Cd();
        f.Tk("coins_50000");
      });
      v54.click(function () {
        a.r.Cd();
        f.Tk("coins_16000");
      });
      v55.click(function () {
        a.r.Cd();
        f.Tk("coins_7000");
      });
      v56.click(function () {
        a.r.Cd();
        f.Tk("coins_3250");
      });
      v57.click(function () {
        a.r.Cd();
        f.Tk(__DECODE_0__(v51._0x161878));
      });
    })).prototype.a = function () {
      v58.parent.prototype.a.call(this);
    };
    v58.prototype.Rk = function () {
      vF30.Fk[__DECODE_0__(v50._0x219525)]();
      vF30.Fk.fadeIn(200);
      vF30.Gk[__DECODE_0__(v50._0x219525)]();
      vF30.Gk.fadeOut(50);
      vF30.Hk.stop();
      vF30.Hk.fadeOut(50);
      vF30.Jk[__DECODE_0__(v50._0x34f713)]();
      vF30.Jk[__DECODE_0__(v50._0x49f7a7)](50);
      vF30.Ik.stop();
      vF30.Ik.fadeOut(50);
      vF30.Kk[__DECODE_0__(v50._0x246d55)]();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk.fadeOut(50);
      vF30[__DECODE_0__(v50._0xf10ed)].stop();
      vF30.wtrset[__DECODE_0__(v50._0x49f7a7)](50);
      vF30.Nk.stop();
      vF30.Nk[__DECODE_0__(v50._0x49f7a7)](50);
      vF30.Ok[__DECODE_0__(v50._0x108b7e)]();
      vF30.Ok.fadeOut(50);
    };
    v58.prototype.ji = function () {
      f3().r.Dd();
    };
    v58.prototype.Tk = function (x) {};
    var vV58 = v58;
    v59 = {
      _0x2cc948: 875,
      _0x57fe5a: 2556,
      _0x5c4599: 2135,
      _0x15f191: 465,
      _0x48cd0b: 1580,
      _0x165956: 2126,
      _0x194ef3: 1963,
      _0x1f8360: 1928
    };
    v60 = $("#highscore-table");
    v61 = $("#leaders-button-level");
    v62 = $("#leaders-button-highscore");
    v63 = $("#leaders-button-kills");
    (v64 = f11(vF30, function () {
      vF30.call(this, f6("index.game.popup.menu.leaders.tab"), true);
      var x = f3();
      var a = this;
      this.Uk = {};
      this.Vk = {
        Wk: {
          Xk: v61,
          Yk: "byLevel"
        },
        Zk: {
          Xk: v62,
          Yk: "byHighScore"
        },
        $k: {
          Xk: v63,
          Yk: "byKillsAndHeadShots"
        }
      };
      v61.click(function () {
        x.r.Cd();
        a._k(a.Vk.Wk);
      });
      v62.click(function () {
        x.r.Cd();
        a._k(a.Vk.Zk);
      });
      v63.click(function () {
        x.r.Cd();
        a._k(a.Vk.$k);
      });
    })).prototype.a = function () {
      v64.parent.prototype.a.call(this);
    };
    v64.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk.fadeOut(50);
      vF30.Gk.stop();
      vF30.Gk.fadeIn(200);
      vF30.Hk.stop();
      vF30.Hk.fadeOut(50);
      vF30.Jk.stop();
      vF30.Jk.fadeOut(50);
      vF30.Ik.stop();
      vF30.Ik.fadeOut(50);
      vF30.Kk.stop();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk.fadeOut(50);
      vF30.wtrset.stop();
      vF30.wtrset.fadeOut(50);
      vF30.Nk.stop();
      vF30.Nk.fadeOut(50);
      vF30.Ok.stop();
      vF30.Ok.fadeOut(50);
    };
    v64.prototype.ji = function () {
      f3().r.Dd();
      var x = this;
      this.Sk();
      $.get(vAtob + "/pub/leaders", function (a) {
        x.Uk = a;
        x._k(x.al ?? x.Vk.Wk);
        x.Qk();
      }).done(function () {
        x.Qk();
      });
    };
    v64.prototype._k = function (x) {
      this.al = x;
      for (var a in this.Vk) {
        if (this.Vk.hasOwnProperty(a)) {
          this.Vk[a].Xk.removeClass(__DECODE_0__(v59._0x2cc948));
        }
      }
      this.al.Xk.addClass("pressed");
      var f = this.Uk[this.al.Yk];
      var e = "";
      for (var t = 0; t < f.length; t++) {
        var c = f[t];
        e += "<div class" + __DECODE_0__(v59._0x57fe5a) + "w\"><span>" + (t + 1) + "</span><span><img src=\"" + c.avatarUrl + (__DECODE_0__(v59._0x5c4599) + "<span>") + c[__DECODE_0__(v59._0x15f191)] + "</span><span>" + c[__DECODE_0__(v59._0x48cd0b)] + "</span><span>" + c.highScore + "</span><sp" + __DECODE_0__(v59._0x165956) + c[__DECODE_0__(v59._0x194ef3)] + " / " + c.kills + "</span></div>";
      }
      v60.empty();
      v60[__DECODE_0__(v59._0x1f8360)](e);
    };
    var vV64 = v64;
    v65 = {
      _0x3a4ad1: 1666,
      _0x1aced6: 1345,
      _0x356b88: 1345,
      _0x4030ca: 1345,
      _0x4684a1: 1345,
      _0x16d579: 1717,
      _0x174bcd: 1666
    };
    v66 = {
      _0x2958d7: 2157,
      _0x735ccf: 1883
    };
    v67 = $("#popup-login-gg");
    $("#background-canvas").replaceWith("<canvas id=\"background-canvas\" style=\"background-image: url(https://i.imgur.com/EPwtNit.gif);background-repeat: no-repeat;background-size: cover;}\"></canvas>");
    v68 = $("#popup-login-fb");
    (v69 = f11(vF30, function () {
      vF30.call(this, f6("index.game" + __DECODE_0__(v66._0x2958d7) + __DECODE_0__(v66._0x735ccf) + "b"), false);
      var x = f3();
      var a = this;
      v67.click(function () {
        x.r.Cd();
        a.Sk();
        x.u.Qi(function () {
          a.Qk();
        });
        setTimeout(function () {
          a.Qk();
        }, 10000);
        x.u.Zi();
      });
      v68.click(function () {
        x.r.Cd();
        a.Sk();
        x.u.Qi(function () {
          a.Qk();
        });
        setTimeout(function () {
          a.Qk();
        }, 10000);
        x.u.Vi();
      });
    })).prototype.a = function () {
      v69.parent.prototype.a.call(this);
    };
    v69.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk[__DECODE_0__(v65._0x3a4ad1)](50);
      vF30.Gk[__DECODE_0__(v65._0x1aced6)]();
      vF30.Gk.fadeOut(50);
      vF30.Hk[__DECODE_0__(v65._0x356b88)]();
      vF30.Hk.fadeOut(50);
      vF30.Jk[__DECODE_0__(v65._0x4030ca)]();
      vF30.Jk.fadeIn(200);
      vF30.Ik[__DECODE_0__(v65._0x4684a1)]();
      vF30.Ik.fadeOut(50);
      vF30.Kk.stop();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v65._0x3a4ad1)](50);
      vF30[__DECODE_0__(v65._0x16d579)].stop();
      vF30.wtrset[__DECODE_0__(v65._0x3a4ad1)](50);
      vF30.Nk.stop();
      vF30.Nk.fadeOut(50);
      vF30.Ok.stop();
      vF30.Ok[__DECODE_0__(v65._0x174bcd)](50);
    };
    v69.prototype.ji = function () {
      f3().r.Dd();
    };
    var vV69 = v69;
    v70 = {
      _0x41fa6d: 825,
      _0x479f79: 598,
      _0x57aa45: 1651,
      _0x33a8fb: 2021,
      _0x311c1c: 1824
    };
    v71 = {
      _0x2e1060: 1345,
      _0xf372ad: 1666,
      _0x14ec3c: 937,
      _0x45500c: 1666,
      _0x59374f: 1666,
      _0xeb40bc: 1717
    };
    v72 = {
      _0x5c14dc: 2099
    };
    v73 = {
      _0x3fecca: 2625,
      _0x2fa520: 2157
    };
    v74 = $("#profile-avatar");
    v75 = $("#profile-username");
    v76 = $("#profile-experience-bar");
    v77 = $("#profile-experience-val");
    v78 = $("#profile-level");
    v79 = $("#profile-stat-highScore");
    v80 = $("#profile-stat-bestSurvivalTime");
    v81 = $("#profile-stat-kills");
    v82 = $("#profile-stat-headshots");
    v83 = $("#profile-stat-gamesPlayed");
    v84 = $("#profile-stat-totalTimeSpent");
    v85 = $("#profile-stat-registrationDate");
    (v86 = f11(vF30, function () {
      vF30[__DECODE_0__(v73._0x3fecca)](this, f6("index.game" + __DECODE_0__(v73._0x2fa520) + "u.profile.tab"), true);
    })).prototype.a = function () {
      v86[__DECODE_0__(v72._0x5c14dc)].prototype.a.call(this);
    };
    v86.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk.fadeOut(50);
      vF30.Gk[__DECODE_0__(v71._0x2e1060)]();
      vF30.Gk[__DECODE_0__(v71._0xf372ad)](50);
      vF30.Hk.stop();
      vF30.Hk[__DECODE_0__(v71._0x14ec3c)](200);
      vF30.Jk.stop();
      vF30.Jk.fadeOut(50);
      vF30.Ik[__DECODE_0__(v71._0x2e1060)]();
      vF30.Ik[__DECODE_0__(v71._0x45500c)](50);
      vF30.Kk.stop();
      vF30.Kk[__DECODE_0__(v71._0x59374f)](50);
      vF30.Lk.stop();
      vF30.Lk[__DECODE_0__(v71._0x59374f)](50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v71._0x59374f)](50);
      vF30[__DECODE_0__(v71._0xeb40bc)].stop();
      vF30.wtrset.fadeOut(50);
      vF30.Nk.stop();
      vF30.Nk.fadeOut(50);
      vF30.Ok.stop();
      vF30.Ok.fadeOut(50);
    };
    v86.prototype.ji = function () {
      var x = f3();
      x.r.Dd();
      var a = x.u.Oi();
      var f = moment([a.year, a[__DECODE_0__(v70._0x41fa6d)] - 1, a.day]).format("LL");
      v75[__DECODE_0__(v70._0x479f79)](x.u.wi());
      v74[__DECODE_0__(v70._0x57aa45)](__DECODE_0__(v70._0x33a8fb), x.u.xi());
      v76.width(x.u.Bi() * 100 / x.u.Ci() + "%");
      v77.html(x.u.Bi() + __DECODE_0__(v70._0x311c1c) + x.u.Ci());
      v78.html(x.u.Ai());
      v79[__DECODE_0__(v70._0x479f79)](x.u.Ii());
      v80.html(f8(x.u.Ji()));
      v81.html(x.u.Ki());
      v82[__DECODE_0__(v70._0x479f79)](x.u.Li());
      v83.html(x.u.Mi());
      v84.html(f8(x.u.Ni()));
      v85.html(f);
    };
    var vV86 = v86;
    v87 = {
      _0x2fd9b5: 1345,
      _0x9430af: 937,
      _0x4ff87f: 1345,
      _0x2ee9d0: 1666,
      _0x57d32b: 1666,
      _0x117db5: 1717
    };
    v88 = {
      _0x4235c5: 2189,
      _0x1f4f4e: 1455,
      _0x4856c1: 1688
    };
    v89 = {
      _0xb11074: 2659
    };
    v90 = $("#settings-music-enabled-switch");
    v91 = $("#settings-sfx-enabled-switch");
    v92 = $("#settings-show-names-switch");
    v93 = $("#popup-logout");
    v94 = $("#popup-logout-container");
    v95 = $("#popup-delete-account");
    v96 = $("#popup-delete-account-container");
    v97 = $("#popup-withdraw-consent");
    (v98 = f11(vF30, function () {
      vF30.call(this, f6("index.game.popup.menu.settings.tab"), false);
      var a = this;
      var f = f3();
      v90.click(function () {
        var x = !!v90.prop("checked");
        f5(vF6.Me, x, 30);
        f.r.td(x);
        f.r.Cd();
      });
      v91.click(function () {
        var a = !!v91.prop("checked");
        f5(vF6.Ne, a, 30);
        f.r.rd(a);
        f.r.Cd();
      });
      v92.click(function () {
        f.r.Cd();
      });
      v93.click(function () {
        f.r.Cd();
        a.Sk();
        setTimeout(function () {
          a.Qk();
        }, 2000);
        f.u.Wi();
      });
      v95.click(function () {
        if (f.u.P()) {
          f.r.Cd();
          f.s.I(f.s.Vh);
        } else {
          f.r.Hd();
        }
      });
      v97.click(function () {
        if (f.Y()) {
          f.r.Cd();
          f.s.I(f.s.Uh);
        } else {
          f.r.Hd();
        }
      });
    })).prototype.a = function () {
      v98.parent[__DECODE_0__(v88._0x4235c5)].a.call(this);
      var x = f3();
      var a = undefined;
      a = f4(vF6.Me) !== "false";
      v90.prop(__DECODE_0__(v88._0x1f4f4e), a);
      x.r.td(a);
      var f = undefined;
      f = f4(vF6.Ne) !== "false";
      v91.prop("checked", f);
      x.r.rd(f);
      var e = undefined;
      e = f4(vF6.ya) !== "false";
      console.log("Load sPN: " + e);
      v92[__DECODE_0__(v88._0x4856c1)]("checked", e);
      x.u.V(function () {
        v94[__DECODE_0__(v89._0xb11074)](x.u.P());
        v96.toggle(x.u.P());
      });
    };
    v98.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk.fadeOut(50);
      vF30.Gk.stop();
      vF30.Gk.fadeOut(50);
      vF30.Hk.stop();
      vF30.Hk.fadeOut(50);
      vF30.Jk.stop();
      vF30.Jk.fadeOut(50);
      vF30.Ik[__DECODE_0__(v87._0x2fd9b5)]();
      vF30.Ik[__DECODE_0__(v87._0x9430af)](200);
      vF30.Kk[__DECODE_0__(v87._0x4ff87f)]();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk[__DECODE_0__(v87._0x2ee9d0)](50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v87._0x57d32b)](50);
      vF30.wtrset.stop();
      vF30[__DECODE_0__(v87._0x117db5)].fadeOut(50);
      vF30.Nk.stop();
      vF30.Nk.fadeOut(50);
      vF30.Ok.stop();
      vF30.Ok.fadeOut(50);
    };
    v98.prototype.ji = function () {
      var x = f3();
      x.r.Dd();
      if (x.Y()) {
        v97.show();
      } else {
        v97.hide();
      }
    };
    v98.prototype.wa = function () {
      return v92.prop("checked");
    };
    var vV98 = v98;
    v99 = {
      _0x46a54d: 2635,
      _0x434f43: 2629,
      _0x58857e: 2315,
      _0x27c2a1: 1859,
      _0x5081bc: 1193
    };
    v100 = {
      _0x5d75dd: 2034,
      _0x1a44d1: 2520,
      _0x529f0f: 892,
      _0x1dcb9d: 889,
      _0x2a6d55: 2520,
      _0x3c6f72: 2740,
      _0x2808ba: 2520,
      _0x520d0a: 1274,
      _0x137c24: 892,
      _0xb57351: 598,
      _0x2fa510: 1865
    };
    v101 = {
      _0x233c98: 875,
      _0x46d4e7: 1865,
      _0x5ebee0: 598
    };
    v102 = {
      _0x18d835: 1928,
      _0x51fe3f: 1326
    };
    v103 = {
      _0x7f5f09: 1666,
      _0x407590: 1345,
      _0x5a723b: 1345,
      _0x5e7df5: 1345,
      _0x363f46: 1666,
      _0xb5628f: 937,
      _0x2f6b39: 1345,
      _0x49ba49: 1717,
      _0x4f1eff: 1345
    };
    v104 = {
      _0x2724b3: 1101,
      _0x4b0035: 1899,
      _0x4d4942: 2524
    };
    v105 = {
      _0x2568b0: 2625,
      _0x9405f4: 1326
    };
    v106 = $("#store-view-canv");
    v107 = $("#skin-description-text");
    v108 = $("#skin-group-description-text");
    v109 = $("#store-locked-bar");
    v110 = $("#store-locked-bar-text");
    v111 = $("#store-buy-button");
    v112 = $("#store-item-price");
    v113 = $("#store-groups");
    v114 = $("#store-view-prev");
    v115 = $("#store-view-next");
    (v116 = f11(vF30, function () {
      vF30[__DECODE_0__(v105._0x2568b0)](this, f6("index.game.popup.menu.skins.tab"), true);
      var x = this;
      var a = f3();
      this.bl = null;
      this.cl = [];
      this.dl = {};
      this.el = new vF27(v106);
      v111.click(function () {
        a.r.Cd();
        x.fl();
      });
      v114.click(function () {
        a.r.Cd();
        x.bl.gl();
      });
      v115[__DECODE_0__(v105._0x9405f4)](function () {
        a.r.Cd();
        x.bl.hl();
      });
    })).prototype.a = function () {
      v116.parent.prototype.a.call(this);
      var x = this;
      var a = f3();
      a.p.ca(function () {
        var f = a.p.Ac();
        if (f != null) {
          x.cl = [];
          for (var e = 0; e < f["skinGroupA" + __DECODE_0__(v104._0x2724b3)].length; e++) {
            x.cl.push(new v117(x, f.skinGroupArrayDict[e]));
          }
          x.dl = {};
          for (var t = 0; t < f["skinArrayD" + __DECODE_0__(v104._0x4b0035)].length; t++) {
            var c = f[__DECODE_0__(v104._0x4d4942) + "ict"][t];
            x.dl[c.id] = c;
          }
        }
      });
      this.il(false);
      a.t.xh(function () {
        x.il(false);
      });
    };
    v116.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk[__DECODE_0__(v103._0x7f5f09)](50);
      vF30.Gk[__DECODE_0__(v103._0x407590)]();
      vF30.Gk.fadeOut(50);
      vF30.Hk[__DECODE_0__(v103._0x5a723b)]();
      vF30.Hk[__DECODE_0__(v103._0x7f5f09)](50);
      vF30.Jk[__DECODE_0__(v103._0x5e7df5)]();
      vF30.Jk.fadeOut(50);
      vF30.Ik.stop();
      vF30.Ik[__DECODE_0__(v103._0x363f46)](50);
      vF30.Kk.stop();
      vF30.Kk[__DECODE_0__(v103._0xb5628f)](200);
      vF30.Lk[__DECODE_0__(v103._0x2f6b39)]();
      vF30.Lk[__DECODE_0__(v103._0x363f46)](50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v103._0x363f46)](50);
      vF30[__DECODE_0__(v103._0x49ba49)][__DECODE_0__(v103._0x407590)]();
      vF30.wtrset.fadeOut(50);
      vF30.Nk[__DECODE_0__(v103._0x4f1eff)]();
      vF30.Nk.fadeOut(50);
      vF30.Ok[__DECODE_0__(v103._0x5a723b)]();
      vF30.Ok[__DECODE_0__(v103._0x363f46)](50);
    };
    v116.prototype.ji = function () {
      f3().r.Dd();
      this.jl();
      this.el.Le(true);
    };
    v116.prototype.ei = function () {
      this.el.Le(false);
    };
    v116.prototype.Ra = function () {
      this.el.Ra();
    };
    v116.prototype.Pa = function (x, a) {
      this.el.Pa();
    };
    v116.prototype.jl = function () {
      var x = this;
      var a = this;
      var f = f3();
      v113.empty();
      for (var e = 0; e < this.cl.length; e++) {
        (function (e) {
          var t = x.cl[e];
          var c = document.createElement("li");
          v113[__DECODE_0__(v102._0x18d835)](c);
          var n = $(c);
          n.html(t.kl());
          n[__DECODE_0__(v102._0x51fe3f)](function () {
            f.r.Cd();
            a.ll(t);
          });
          t.ml = n;
        })(e);
      }
      if (this.cl.length > 0) {
        var t = f.t.ha(vF17.ia);
        for (var e = 0; e < this.cl.length; e++) {
          var c = this.cl[e];
          var n = c.nl.list;
          for (var s = 0; s < n.length; s++) {
            if (n[s] == t) {
              c.ol = s;
              this.ll(c);
              return;
            }
          }
        }
        this.ll(this.cl[0]);
      }
    };
    v116.prototype.ll = function (x) {
      if (this.bl != x) {
        var a = f3();
        this.bl = x;
        v113.children().removeClass("pressed");
        if (this.bl.ml) {
          this.bl.ml.addClass(__DECODE_0__(v101._0x233c98));
        }
        v108.html("");
        if (x.nl != null) {
          var f = a.p.Ac().textDict[x.nl[__DECODE_0__(v101._0x46d4e7) + "n"]];
          if (f != null) {
            v108[__DECODE_0__(v101._0x5ebee0)](f9(f7(f)));
          }
        }
        this.il(true);
      }
    };
    v116.prototype.pl = function () {
      if (this.bl == null) {
        return vF13.Yg();
      } else {
        return this.bl.ql();
      }
    };
    v116.prototype.fl = function () {
      var x = this;
      this.pl().ah(function (a) {
        x.rl(a);
      });
    };
    v116.prototype.rl = function (x) {
      var a = this;
      var f = f3();
      var e = this.dl[x].price;
      if (!(f.u.zi() < e)) {
        this.Sk();
        var t = f.t.ha(vF17.ia);
        var c = f.t.ha(vF17.ja);
        var n = f.t.ha(vF17.ka);
        var s = f.t.ha(vF17.la);
        var o = f.t.ha(vF17.ma);
        f.u.Ui(x, vF17.ia, function () {
          f.t.Bh(t, vF17.ia);
          f.t.Bh(c, vF17.ja);
          f.t.Bh(n, vF17.ka);
          f.t.Bh(s, vF17.la);
          f.t.Bh(o, vF17.ma);
          if (f.u.Ch(x, vF17.ia)) {
            f.t.Bh(x, vF17.ia);
          }
          a.Qk();
        });
      }
    };
    v116.prototype.il = function (x) {
      var a = f3();
      this.el.bk(a.t.ha(vF17.ja), false, false);
      this.el.ck(a.t.ha(vF17.ka), false, false);
      this.el.dk(a.t.ha(vF17.la), false, false);
      this.el.ek(a.t.ha(vF17.ma), false, false);
      var f = this.pl();
      if (f._g()) {
        var e = f.$g();
        var t = this.dl[e];
        var c = false;
        if (a.t.Ja(e, vF17.ia)) {
          v109.hide();
          v111[__DECODE_0__(v100._0x5d75dd)]();
        } else if (t == null || t[__DECODE_0__(v100._0x1a44d1)] == 1) {
          c = true;
          v109[__DECODE_0__(v100._0x529f0f)]();
          v111[__DECODE_0__(v100._0x5d75dd)]();
          v110.text(f6("index.game.popup.men" + __DECODE_0__(v100._0x1dcb9d) + "cked"));
          if (t != null && t[__DECODE_0__(v100._0x2a6d55)] && t[__DECODE_0__(v100._0x2a6d55) + "Cause"] != null) {
            var n = a.p.Ac()[__DECODE_0__(v100._0x3c6f72)][t[__DECODE_0__(v100._0x2808ba) + __DECODE_0__(v100._0x520d0a)]];
            if (n != null) {
              v110.text(f7(n));
            }
          }
        } else {
          v109.hide();
          v111[__DECODE_0__(v100._0x137c24)]();
          v112[__DECODE_0__(v100._0xb57351)](t.price);
        }
        v107.html("ID: " + e + " TYPE: " + vF17.ia);
        if (t != null && t.description != null) {
          var s = a.p.Ac().textDict[t[__DECODE_0__(v100._0x2fa510) + "n"]];
          if (s != null) {
            v107.html(f9(f7(s)));
          }
        }
        this.el.ak(e, true, c);
        if (x) {
          a.t.Bh(e, vF17.ia);
        }
      }
    };
    v117 = function () {
      function a(x, a) {
        this.sl = x;
        this.ol = 0;
        this.nl = a;
      }
      a.prototype.gl = function () {
        if (--this.ol < 0) {
          this.ol = this.nl.list.length - 1;
        }
        this.sl.il(true);
      };
      a.prototype.hl = function () {
        if (++this.ol >= this.nl.list.length) {
          this.ol = 0;
        }
        this.sl.il(true);
      };
      a.prototype.kl = function () {
        let x = f7(this.nl[__DECODE_0__(v99._0x46a54d)]);
        console.log(this.nl);
        if (this.nl[__DECODE_0__(v99._0x434f43)]) {
          x = __DECODE_0__(v99._0x58857e) + this.nl.img + (__DECODE_0__(v99._0x27c2a1) + __DECODE_0__(v99._0x5081bc) + "\"180\" />");
        }
        return x;
      };
      a.prototype.ql = function () {
        if (this.ol >= this.nl.list.length) {
          return vF13.Yg();
        } else {
          return vF13.Zg(this.nl.list[this.ol]);
        }
      };
      return a;
    }();
    var vV116 = v116;
    v118 = {
      _0x19f7cd: 1345,
      _0x2ee46c: 1666,
      _0x50760f: 937
    };
    v119 = $("#store-go-coins-button");
    v120 = $("#store-go-skins-button");
    v121 = $("#store-go-wear-button");
    (v122 = f11(vF30, function () {
      vF30.call(this, f6("index.game.popup.menu.store.tab"), true);
      var x = f3();
      v119.click(function () {
        x.r.Cd();
        x.s.I(x.s.Wh);
      });
      v120.click(function () {
        x.r.Cd();
        x.s.I(x.s.$h);
      });
      v121.click(function () {
        x.r.Cd();
        x.s.I(x.s.ai);
      });
    })).prototype.a = function () {
      v122.parent.prototype.a.call(this);
    };
    v122.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk.fadeOut(50);
      vF30.Gk.stop();
      vF30.Gk.fadeOut(50);
      vF30.Hk[__DECODE_0__(v118._0x19f7cd)]();
      vF30.Hk.fadeOut(50);
      vF30.Jk[__DECODE_0__(v118._0x19f7cd)]();
      vF30.Jk[__DECODE_0__(v118._0x2ee46c)](50);
      vF30.Ik.stop();
      vF30.Ik[__DECODE_0__(v118._0x2ee46c)](50);
      vF30.Kk.stop();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk[__DECODE_0__(v118._0x50760f)](200);
      vF30.Mk[__DECODE_0__(v118._0x19f7cd)]();
      vF30.Mk.fadeOut(50);
      vF30.wtrset.stop();
      vF30.wtrset.fadeOut(50);
      vF30.Nk.stop();
      vF30.Nk[__DECODE_0__(v118._0x2ee46c)](50);
      vF30.Ok.stop();
      vF30.Ok[__DECODE_0__(v118._0x2ee46c)](50);
    };
    v122.prototype.ji = function () {
      f3().r.Dd();
    };
    var vV122 = v122;
    v123 = {
      _0x252f6e: 1345,
      _0x2ea8d1: 1666,
      _0x1c1ef1: 1345,
      _0x49495f: 1345,
      _0x50e49a: 1666,
      _0x1db2b3: 1717,
      _0x225fb4: 937
    };
    v124 = {
      _0x5a8c98: 2189
    };
    v125 = {
      _0xaa60cf: 1455,
      _0x2aeb64: 2294,
      _0x3bbb1c: 1265,
      _0x5f2103: 2022
    };
    v126 = $("#settings-kufur-isim");
    (v127 = f11(vF30, function () {
      vF30.call(this, "WFT SETTINGS", 0);
      lxpdsettingsblockbadwords = localStorage.getItem("wtr-block-bad-words") === "true";
      v126.prop("checked", lxpdsettingsblockbadwords);
      v126.click(function () {
        let x = v126.prop(__DECODE_0__(v125._0xaa60cf));
        lxpdsettingsblockbadwords = x;
        localStorage[__DECODE_0__(v125._0x2aeb64)]("wtr-block-bad-words", x ? __DECODE_0__(v125._0x3bbb1c) : __DECODE_0__(v125._0x5f2103));
      });
    })).prototype.a = function () {
      v127.parent[__DECODE_0__(v124._0x5a8c98)].a.call(this);
    };
    v127.prototype.Rk = function () {
      vF30.Fk[__DECODE_0__(v123._0x252f6e)]();
      vF30.Fk[__DECODE_0__(v123._0x2ea8d1)](50);
      vF30.Gk.stop();
      vF30.Gk.fadeOut(50);
      vF30.Hk.stop();
      vF30.Hk[__DECODE_0__(v123._0x2ea8d1)](50);
      vF30.Jk[__DECODE_0__(v123._0x1c1ef1)]();
      vF30.Jk.fadeOut(50);
      vF30.Kk[__DECODE_0__(v123._0x49495f)]();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk[__DECODE_0__(v123._0x50e49a)](50);
      vF30.Mk.stop();
      vF30.Mk.fadeOut(50);
      vF30.Nk[__DECODE_0__(v123._0x1c1ef1)]();
      vF30.Nk.fadeOut(50);
      vF30.Ok[__DECODE_0__(v123._0x1c1ef1)]();
      vF30.Ok[__DECODE_0__(v123._0x2ea8d1)](50);
      vF30[__DECODE_0__(v123._0x1db2b3)].stop();
      vF30.wtrset[__DECODE_0__(v123._0x225fb4)](200);
    };
    v127.prototype.ji = function () {
      f3().r.Dd();
    };
    var vV127 = v127;
    v128 = {
      _0x5a042a: 2048,
      _0x13e9d9: 511,
      _0x17a93f: 2330,
      _0x3fbe46: 1413,
      _0x49bdbe: 2129
    };
    v129 = {
      _0x4e83d6: 1735
    };
    v130 = {
      _0x1ac544: 892,
      _0x3566f4: 2034,
      _0x85a111: 1785,
      _0x1f3746: 889,
      _0x3a854d: 1318,
      _0x143ee8: 1274,
      _0x4b7249: 2520,
      _0x3368d9: 598
    };
    v131 = {
      _0x3de410: 2128
    };
    v132 = {
      _0x5e8ec5: 2716,
      _0x182600: 875
    };
    v133 = {
      _0x484eb0: 1666,
      _0x37a2db: 1345,
      _0x337b70: 1717,
      _0x5ad80d: 1666
    };
    v134 = {
      _0x21eeb4: 833,
      _0x49707c: 972,
      _0x66915e: 1704,
      _0x6409f: 2039,
      _0x15aa22: 1039
    };
    v135 = {
      _0x42bbe1: 1008,
      _0x2698a5: 2157,
      _0x1637fd: 1392,
      _0xef9df: 1326,
      _0x552a4f: 393
    };
    v136 = $("#wear-view-canv");
    v137 = $("#wear-description-text");
    v138 = $("#wear-locked-bar");
    v139 = $("#wear-locked-bar-text");
    v140 = $("#wear-buy-button");
    v141 = $("#wear-item-price");
    v142 = $("#wear-eyes-button");
    v143 = $("#wear-mouths-button");
    v144 = $("#wear-glasses-button");
    v145 = $("#wear-hats-button");
    v146 = $("#wear-tint-chooser");
    v147 = $("#wear-view-prev");
    v148 = $("#wear-view-next");
    (v149 = f11(vF30, function () {
      var x = this;
      vF30.call(this, f6(__DECODE_0__(v135._0x42bbe1) + __DECODE_0__(v135._0x2698a5) + __DECODE_0__(v135._0x1637fd)), true);
      var a = f3();
      var f = this;
      this.tl = [];
      this.ja = new v150(this, vF17.ja, v142);
      this.ka = new v150(this, vF17.ka, v143);
      this.la = new v150(this, vF17.la, v144);
      this.ma = new v150(this, vF17.ma, v145);
      this.ul = null;
      this.vl = null;
      this.wl = null;
      this.xl = null;
      this.yl = null;
      this.zl = null;
      this.Al = new vF27(v136);
      v140.click(function () {
        a.r.Cd();
        f.Bl();
      });
      v147.click(function () {
        a.r.Cd();
        f.ul.Cl();
      });
      v148.click(function () {
        a.r.Cd();
        f.ul.Dl();
      });
      v142.click(function () {
        a.r.Cd();
        f.El(x.ja);
      });
      v143[__DECODE_0__(v135._0xef9df)](function () {
        a.r.Cd();
        f.El(x.ka);
      });
      v144.click(function () {
        a.r.Cd();
        f.El(x.la);
      });
      v145[__DECODE_0__(v135._0xef9df)](function () {
        a.r.Cd();
        f.El(x.ma);
      });
      this.tl[__DECODE_0__(v135._0x552a4f)](this.ja);
      this.tl.push(this.ka);
      this.tl.push(this.la);
      this.tl.push(this.ma);
    })).prototype.a = function () {
      v149.parent.prototype.a.call(this);
      var x = f3();
      var a = this;
      x.p.ca(function () {
        var f = x.p.Ac();
        if (f != null) {
          a.vl = f.eyesDict;
          a.wl = f.mouthDict;
          a.xl = f.glassesDict;
          a.yl = f[__DECODE_0__(v134._0x21eeb4)];
          a.zl = f[__DECODE_0__(v134._0x49707c)];
          a.ja.Fl(f[__DECODE_0__(v134._0x66915e) + __DECODE_0__(v134._0x6409f)]);
          a.ja.Gl(a.vl);
          a.ka.Fl(f[__DECODE_0__(v134._0x15aa22) + "ntArray"]);
          a.ka.Gl(a.wl);
          a.la.Fl(f.glassesVariantArray);
          a.la.Gl(a.xl);
          a.ma.Fl(f.hatVariantArray);
          a.ma.Gl(a.yl);
        }
      });
      this.il(false);
      x.t.xh(function () {
        a.il(false);
      });
    };
    v149.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk[__DECODE_0__(v133._0x484eb0)](50);
      vF30.Gk.stop();
      vF30.Gk.fadeOut(50);
      vF30.Hk.stop();
      vF30.Hk.fadeOut(50);
      vF30.Jk.stop();
      vF30.Jk.fadeOut(50);
      vF30.Ik[__DECODE_0__(v133._0x37a2db)]();
      vF30.Ik.fadeOut(50);
      vF30.Kk[__DECODE_0__(v133._0x37a2db)]();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk.fadeIn(200);
      vF30.wtrset.stop();
      vF30[__DECODE_0__(v133._0x337b70)].fadeOut(50);
      vF30.Nk.stop();
      vF30.Nk.fadeOut(50);
      vF30.Ok.stop();
      vF30.Ok[__DECODE_0__(v133._0x5ad80d)](50);
    };
    v149.prototype.ji = function () {
      f3().r.Dd();
      this.El(this.ul ?? this.ja);
      this.Al.Le(true);
    };
    v149.prototype.ei = function () {
      this.Al.Le(false);
    };
    v149.prototype.Ra = function () {
      this.Al.Ra();
    };
    v149.prototype.Pa = function (x, a) {
      this.Al.Pa();
    };
    v149.prototype.El = function (x) {
      this.ul = x;
      for (var a = 0; a < this.tl.length; a++) {
        this.tl[a].Xk[__DECODE_0__(v132._0x5e8ec5) + "s"](__DECODE_0__(v132._0x182600));
      }
      this.ul.Xk.addClass(__DECODE_0__(v132._0x182600));
      this.ul.ii();
    };
    v149.prototype.Hl = function () {
      if (this.ul == null) {
        return vF13.Yg();
      } else {
        return vF13.Zg({
          Lb: this.ul.ql(),
          rc: this.ul.rc
        });
      }
    };
    v149.prototype.Bl = function () {
      var x = this;
      this.Hl().ah(function (a) {
        x.Ui(a.Lb, a.rc);
      });
    };
    v149.prototype.Ui = function (x, a) {
      var f = this;
      var e = f3();
      var t = undefined;
      switch (a) {
        case vF17.ja:
          t = this.vl[x].price;
          break;
        case vF17.ka:
          t = this.wl[x][__DECODE_0__(v131._0x3de410)];
          break;
        case vF17.la:
          t = this.xl[x].price;
          break;
        case vF17.ma:
          t = this.yl[x][__DECODE_0__(v131._0x3de410)];
          break;
        default:
          return;
      }
      if (!(e.u.zi() < t)) {
        this.Sk();
        var c = e.t.ha(vF17.ia);
        var n = e.t.ha(vF17.ja);
        var s = e.t.ha(vF17.ka);
        var o = e.t.ha(vF17.la);
        var d = e.t.ha(vF17.ma);
        e.u.Ui(x, a, function () {
          e.t.Bh(c, vF17.ia);
          e.t.Bh(n, vF17.ja);
          e.t.Bh(s, vF17.ka);
          e.t.Bh(o, vF17.la);
          e.t.Bh(d, vF17.ma);
          if (e.u.Ch(x, a)) {
            e.t.Bh(x, a);
          }
          f.Qk();
        });
      }
    };
    v149.prototype.Il = function (x, a) {
      switch (a) {
        case vF17.ja:
          return this.vl[x];
        case vF17.ka:
          return this.wl[x];
        case vF17.la:
          return this.xl[x];
        case vF17.ma:
          return this.yl[x];
      }
      return null;
    };
    v149.prototype.il = function (x) {
      var a = f3();
      this.Al.ak(a.t.ha(vF17.ia), false, false);
      this.Al.bk(a.t.ha(vF17.ja), false, false);
      this.Al.ck(a.t.ha(vF17.ka), false, false);
      this.Al.dk(a.t.ha(vF17.la), false, false);
      this.Al.ek(a.t.ha(vF17.ma), false, false);
      var f = this.Hl();
      if (f._g()) {
        var e = f.$g();
        var t = this.Il(e.Lb, e.rc);
        var c = false;
        if (a.t.Ja(e.Lb, e.rc)) {
          v138.hide();
          v140.hide();
        } else if (t == null || t.nonbuyable == 1) {
          c = true;
          v138[__DECODE_0__(v130._0x1ac544)]();
          v140[__DECODE_0__(v130._0x3566f4)]();
          v139[__DECODE_0__(v130._0x85a111)](f6("index.game.popup.men" + __DECODE_0__(v130._0x1f3746) + __DECODE_0__(v130._0x3a854d)));
          if (t != null && t.nonbuyable && t["nonbuyable" + __DECODE_0__(v130._0x143ee8)] != null) {
            var n = a.p.Ac().textDict[t[__DECODE_0__(v130._0x4b7249) + "Cause"]];
            if (n != null) {
              v139.text(f7(n));
            }
          }
        } else {
          v138[__DECODE_0__(v130._0x3566f4)]();
          v140[__DECODE_0__(v130._0x1ac544)]();
          v141.html(t.price);
        }
        v137[__DECODE_0__(v130._0x3368d9)]("ID: " + e.Lb);
        if (t != null && t.description != null) {
          var s = a.p.Ac().textDict[t.description];
          if (s != null) {
            v137.html(f9(f7(s)));
          }
        }
        switch (e.rc) {
          case vF17.ja:
            this.Al.bk(e.Lb, true, c);
            break;
          case vF17.ka:
            this.Al.ck(e.Lb, true, c);
            break;
          case vF17.la:
            this.Al.dk(e.Lb, true, c);
            break;
          case vF17.ma:
            this.Al.ek(e.Lb, true, c);
        }
        if (x) {
          a.t.Bh(e.Lb, e.rc);
        }
      }
    };
    v150 = function () {
      function a(x, a, f) {
        this.sl = x;
        this.rc = a;
        this.Xk = f;
        this.Jl = {};
        this.Kl = [[]];
        this.Ll = -10;
        this.Ml = -10;
      }
      a.prototype.Fl = function (x) {
        this.Kl = x;
      };
      a.prototype.Gl = function (x) {
        this.Jl = x;
      };
      a.prototype.ii = function () {
        var x = f3().t.ha(this.rc);
        for (var a = 0; a < this.Kl.length; a++) {
          for (var f = 0; f < this.Kl[a].length; f++) {
            if (this.Kl[a][f] == x) {
              this.Nl(a);
              this.Ol(f);
              return;
            }
          }
        }
        this.Nl(0);
        this.Ol(0);
      };
      a.prototype.Cl = function () {
        var a = this.Ll - 1;
        if (a < 0) {
          a = this.Kl.length - 1;
        }
        this.Nl(a);
        this.Ol(this.Ml % this.Kl[a].length);
      };
      a.prototype.Dl = function () {
        var x = this.Ll + 1;
        if (x >= this.Kl[__DECODE_0__(v129._0x4e83d6)]) {
          x = 0;
        }
        this.Nl(x);
        this.Ol(this.Ml % this.Kl[x][__DECODE_0__(v129._0x4e83d6)]);
      };
      a.prototype.Nl = function (x) {
        var f = this;
        if (!(x < 0) && !(x >= this.Kl.length)) {
          this.Ll = x;
          v146.empty();
          var e = this.Kl[this.Ll];
          if (e.length > 1) {
            for (var t = 0; t < e.length; t++) {
              (function (x) {
                var t = e[x];
                var c = f.Jl[t];
                var n = "#" + f.sl.zl[c.prime];
                var s = $("<div style=\"border-color:" + n + "\"></div>");
                s.click(function () {
                  f3().r.Cd();
                  f.Ol(x);
                });
                v146.append(s);
              })(t);
            }
          }
        }
      };
      a.prototype.Ol = function (x) {
        if (!(x < 0) && !(x >= this.Kl[this.Ll].length)) {
          this.Ml = x;
          v146.children()[__DECODE_0__(v128._0x5a042a)]("background-color", __DECODE_0__(v128._0x13e9d9) + "t");
          var a = v146[__DECODE_0__(v128._0x17a93f)](":nth-child(" + (1 + x) + ")");
          a.css("background" + __DECODE_0__(v128._0x3fbe46), a.css(__DECODE_0__(v128._0x49bdbe) + "or"));
          this.sl.il(true);
        }
      };
      a.prototype.ql = function () {
        return this.Kl[this.Ll][this.Ml];
      };
      return a;
    }();
    var vV149 = v149;
    v151 = {
      _0x5696e6: 1666,
      _0x3893e5: 1666,
      _0x50a68f: 1345,
      _0x22ae18: 1666,
      _0x403c6c: 937
    };
    v152 = $("#withdraw-consent-yes");
    v153 = $("#withdraw-consent-no");
    (v154 = f11(vF30, function () {
      vF30.call(this, f6("index.game.popup.menu.consent.tab"), false);
      var x = f3();
      v152.click(function () {
        x.r.Cd();
        if (x.Y()) {
          x.s.I(x.s.F);
          x.$(false, true);
          x.s.aa._(new vV171());
        } else {
          x.s.gi();
        }
      });
      v153.click(function () {
        x.r.Cd();
        x.s.gi();
      });
    })).prototype.a = function () {
      v154.parent.prototype.a.call(this);
    };
    v154.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk[__DECODE_0__(v151._0x5696e6)](50);
      vF30.Gk.stop();
      vF30.Gk[__DECODE_0__(v151._0x3893e5)](50);
      vF30.Hk.stop();
      vF30.Hk.fadeOut(50);
      vF30.Jk.stop();
      vF30.Jk.fadeOut(50);
      vF30.Ik.stop();
      vF30.Ik.fadeOut(50);
      vF30.Kk[__DECODE_0__(v151._0x50a68f)]();
      vF30.Kk.fadeOut(50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v151._0x22ae18)](50);
      vF30.wtrset[__DECODE_0__(v151._0x50a68f)]();
      vF30.wtrset[__DECODE_0__(v151._0x22ae18)](50);
      vF30.Nk.stop();
      vF30.Nk[__DECODE_0__(v151._0x403c6c)](200);
      vF30.Ok[__DECODE_0__(v151._0x50a68f)]();
      vF30.Ok.fadeOut(50);
    };
    v154.prototype.ji = function () {
      f3().r.Dd();
    };
    var vV154 = v154;
    v155 = {
      _0x31cb28: 1345,
      _0x1a4457: 2034
    };
    v156 = {
      _0x1e61f2: 1785,
      _0x4e3ee2: 1051
    };
    v157 = {
      _0x595a03: 1785
    };
    v158 = {
      _0x4272d1: 601
    };
    v159 = {
      _0x16aa9c: 1785
    };
    v160 = {
      _0x1e7923: 495
    };
    v161 = {
      _0x28ed95: 2150
    };
    v162 = {
      _0x35babf: 1666,
      _0x1103c7: 1345,
      _0x39912b: 1666,
      _0x40548f: 1666,
      _0x45d6ca: 1666,
      _0x535db7: 1717,
      _0x125509: 1666,
      _0xb62089: 1666
    };
    v163 = {
      _0x1ac844: 1008,
      _0x14e76e: 1326
    };
    v164 = $("#delete-account-timer");
    v165 = $("#delete-account-yes");
    v166 = $("#delete-account-no");
    (v167 = f11(vF30, function () {
      vF30.call(this, f6(__DECODE_0__(v163._0x1ac844) + ".popup.menu.delete.tab"), false);
      var x = f3();
      v165.click(function () {
        x.r.Cd();
        if (x.u.P()) {
          x.u.bj();
          x.u.Wi();
        } else {
          x.s.gi();
        }
      });
      v166[__DECODE_0__(v163._0x14e76e)](function () {
        x.r.Cd();
        x.s.gi();
      });
      this.Pl = [];
    })).prototype.a = function () {
      v167.parent.prototype.a.call(this);
    };
    v167.prototype.Rk = function () {
      vF30.Fk.stop();
      vF30.Fk[__DECODE_0__(v162._0x35babf)](50);
      vF30.Gk.stop();
      vF30.Gk.fadeOut(50);
      vF30.Hk[__DECODE_0__(v162._0x1103c7)]();
      vF30.Hk.fadeOut(50);
      vF30.Jk.stop();
      vF30.Jk[__DECODE_0__(v162._0x35babf)](50);
      vF30.Ik.stop();
      vF30.Ik[__DECODE_0__(v162._0x39912b)](50);
      vF30.Kk.stop();
      vF30.Kk[__DECODE_0__(v162._0x40548f)](50);
      vF30.Lk.stop();
      vF30.Lk.fadeOut(50);
      vF30.Mk.stop();
      vF30.Mk[__DECODE_0__(v162._0x45d6ca)](50);
      vF30[__DECODE_0__(v162._0x535db7)].stop();
      vF30.wtrset[__DECODE_0__(v162._0x125509)](50);
      vF30.Nk.stop();
      vF30.Nk[__DECODE_0__(v162._0xb62089)](50);
      vF30.Ok[__DECODE_0__(v162._0x1103c7)]();
      vF30.Ok.fadeIn(200);
    };
    v167.prototype.ji = function () {
      f3().r.Hd();
      _a94ea0[__DECODE_0__(v155._0x31cb28)]();
      _a94ea0[__DECODE_0__(v155._0x1a4457)]();
      v164.stop();
      v164.show();
      v164.text(".. 10 ..");
      this.Ql();
      this.Rl(function () {
        v164.text(__DECODE_0__(v161._0x28ed95));
      }, 3000);
      this.Rl(function () {
        v164.text(__DECODE_0__(v160._0x1e7923));
      }, 3000);
      this.Rl(function () {
        v164[__DECODE_0__(v159._0x16aa9c)](".. 7 ..");
      }, 3000);
      this.Rl(function () {
        v164.text(".. 6 ..");
      }, 3000);
      this.Rl(function () {
        v164.text(__DECODE_0__(v158._0x4272d1));
      }, 3000);
      this.Rl(function () {
        v164[__DECODE_0__(v157._0x595a03)](".. 4 ..");
      }, 3000);
      this.Rl(function () {
        v164.text(".. 3 ..");
      }, 3000);
      this.Rl(function () {
        v164.text(".. 2 ..");
      }, 3000);
      this.Rl(function () {
        v164[__DECODE_0__(v156._0x1e61f2)](__DECODE_0__(v156._0x4e3ee2));
      }, 3000);
      this.Rl(function () {
        v164.hide();
        v165.fadeIn(300);
      }, 3000);
    };
    v167.prototype.Rl = function (x, a) {
      var f = setTimeout(x, a);
      this.Pl.push(f);
    };
    v167.prototype.Ql = function () {
      for (var x = 0; x < this.Pl.length; x++) {
        clearTimeout(this.Pl[x]);
      }
      this.Pl = [];
    };
    var vV167 = v167;
    var vF31 = function () {
      function x() {
        this.Ck = function () {};
      }
      x.prototype.Bk = function () {};
      x.prototype.ji = function () {};
      return x;
    }();
    v168 = {
      _0x311906: 963,
      _0x140fa7: 677,
      _0x19a159: 1393,
      _0x513d3c: 2627,
      _0x58ab94: 740,
      _0x149eb9: 2070,
      _0x34164b: 2296,
      _0x4f158d: 2174,
      _0x389b9a: 1521,
      _0x5bc9b7: 682,
      _0x24cf33: 842,
      _0x27867b: 2593,
      _0x27570b: 694,
      _0x39629a: 1326
    };
    (v169 = f11(vF31, function (x) {
      vF31.call(this);
      var a = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $(__DECODE_0__(v168._0x311906) + a + (__DECODE_0__(v168._0x140fa7) + "oaster toa" + __DECODE_0__(v168._0x19a159) + __DECODE_0__(v168._0x513d3c) + " class=\"to" + __DECODE_0__(v168._0x58ab94) + "s-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <" + __DECODE_0__(v168._0x149eb9) + __DECODE_0__(v168._0x34164b)) + __DECODE_0__(v168._0x4f158d) + "+" + x + ("</div>    " + __DECODE_0__(v168._0x389b9a) + "=\"toaster-coins-clos" + __DECODE_0__(v168._0x5bc9b7)) + f6("index.game" + __DECODE_0__(v168._0x24cf33) + "ontinue") + __DECODE_0__(v168._0x27867b) + "v>");
      var f = this;
      this.Sl[__DECODE_0__(v168._0x27570b)](".toaster-coins-close")[__DECODE_0__(v168._0x39629a)](function () {
        f3().r.Cd();
        f.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v169.prototype.ji = function () {
      f3().r.Fd();
    };
    var vV169 = v169;
    (v170 = f11(vF31, function (x) {
      vF31.call(this);
      var a = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $("<div id=\"" + a + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + x + "</div>    <div class=\"toaster-levelup-text\">" + f6("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f6("index.game.toaster.continue") + "</div></div>");
      var f = this;
      this.Sl.find(".toaster-levelup-close").click(function () {
        f3().r.Cd();
        f.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v170.prototype.ji = function () {
      f3().r.Ed();
    };
    var vV170 = v170;
    (v171 = f11(vF31, function () {
      vF31.call(this);
      var x = this;
      var a = f3();
      var f = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
      this.Sl = $("<div id=\"" + f + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f6("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f6("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f6("index.game.toaster.consent.iAccept") + "</div></div>");
      this.Tl = this.Sl.find(".toaster-consent-close");
      this.Tl.hide();
      this.Tl.click(function () {
        a.r.Cd();
        if (a.Y()) {
          a.$(true, true);
        }
        x.Ck();
      });
    })).prototype.Bk = function () {
      return this.Sl;
    };
    v171.prototype.ji = function () {
      var x = this;
      var a = f3();
      if (a.Y() && !a.Z()) {
        a.r.Hd();
        setTimeout(function () {
          x.Tl.fadeIn(300);
        }, 2000);
      } else {
        setTimeout(function () {
          x.Ck();
        }, 0);
      }
    };
    var vV171 = v171;
    var vO3 = {};
    vO3.main = {
      Ma: f24("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f24("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f23(),
      e: 4,
      oa: false,
      qk: true
    };
    vO3.miniclip = {
      Ma: f24("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f24("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f23(),
      e: 4,
      oa: false,
      qk: false
    };
    var v172 = vO3[window.ENV];
    if (!v172) {
      v172 = vO3.main;
    }
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (x) {
      x.preventDefault();
      x.stopPropagation();
      return false;
    });
    f10("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f10("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    (vUndefined2 = f25()).v();
    $("#mm-menu-cont").css("display", "block");
    theoKzObjects.loading = true;
    var vObtenerImagenPorSeleccion = obtenerImagenPorSeleccion(localStorage.getItem("wtr-background"));
    if (vObtenerImagenPorSeleccion) {
      anApp.q.Cf = new PIXI.Texture(anApp.q.fn_o(vObtenerImagenPorSeleccion));
      console.log("Fondo cargado desde almacenamiento:", vObtenerImagenPorSeleccion);
    }
    var v173;
    function f27(x) {
      if (theoKzObjects.PropertyManager) {
        x.skinId = theoKzObjects.PropertyManager.rh;
        x.eyesId = theoKzObjects.PropertyManager.sh;
        x.mouthId = theoKzObjects.PropertyManager.th;
        x.glassesId = theoKzObjects.PropertyManager.uh;
        x.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.customFormat) {
      Number.prototype.customFormat = function () {
        if (this >= 1000000) {
          return (this / 1000000).toFixed(1) + "M🍰";
        } else if (this >= 100000) {
          return (this / 1000).toFixed(0) + "k🍰";
        } else {
          return this.dotFormat();
        }
      };
    }
    (function x() {
      requestAnimationFrame(x);
      (window.anApp = vUndefined2).Pa();
    })();
    function f28() {
      var x = v$.width();
      var a = v$.height();
      var f = v$2.outerWidth();
      var e = v$2.outerHeight();
      var t = v$3.outerHeight();
      var c = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((a - v$4.outerHeight() - t) / e, x / f)) + ")";
      v$2.css({
        "-webkit-transform": c,
        "-moz-transform": c,
        "-ms-transform": c,
        "-o-transform": c,
        transform: c
      });
      (window.anApp = vUndefined2).Ra();
      window.scrollTo(0, 1);
    }
    var v$ = $("body");
    var v$2 = $("#stretch-box");
    var v$3 = $("#markup-header");
    var v$4 = $("#markup-footer");
    f28();
    $(window).resize(f28);
  })();
});
const FPS = 240;
const FRAME_INTERVAL = 1000 / FPS;
let lastFrameTime = 0;
const render = x => {
  let a = x - lastFrameTime;
  if (a < FRAME_INTERVAL) {
    requestAnimationFrame(render);
    return;
  }
  lastFrameTime = x;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updatePlayerMovement();
  requestAnimationFrame(render);
};
function updatePlayerMovement() {
  playerState.x += Math.cos(playerState.direction) * playerState.speed;
  playerState.y += Math.sin(playerState.direction) * playerState.speed;
  ctx.beginPath();
  ctx.arc(playerState.x, playerState.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
}
let lastUpdateTime = 0;
const updateInterval = 100;
function sendPlayerUpdate() {
  Date.now();
}
let resendTimeout;
let maxResendAttempts = 3;
function sendPacketWithRetry(x) {
  let a = 0;
  function f() {
    if (a < maxResendAttempts) {
      a++;
      socket.send(JSON.stringify(x));
      resendTimeout = setTimeout(f, 1000);
    } else {
      console.log("Paket gönderilemedi");
    }
  }
  f();
}
function f29(x) {
  function a(x) {
    if (typeof x == "string") {
      return function (x) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + x / x).length !== 1 || x % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugg22er").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugg222er").apply("stateObject");
    }
    a(++x);
  }
  try {
    if (x) {
      return a;
    }
    a(0);
  } catch (f) {}
}
function simulatePing(x) {
  setInterval(function () {
    console.log("Checking ping... Time elapsed: " + x + " ms");
  }, x);
}
console.log("GAME JS 2024 BY YILDO");
let R = 1000;
function pauseAnimation(x) {
  x.forEach(x => {
    x.style.animationPlayState = "paused";
  });
}
function startAnimation(x) {
  x.forEach(x => {
    x.style.animationPlayState = "running";
  });
}
async function fetchBadWords() {
  let x = f31;
  let a = x(195);
  try {
    let f = await fetch(a);
    if (!f.ok) {
      throw Error(x(190));
    }
    let e = await f[x(204)]();
    console[x(200)](x(209), e);
    return e[x(181)]("\n")[x(202)](a => a[x(203)]()[x(183)]())[x(207)](x => x !== "");
  } catch (t) {
    console.error(x(188), t);
    return [];
  }
}
function f30() {
  let x = ["filter", "18HrnISE", "Fetched bad words:", "length", "split", "319UgLyun", "toLowerCase", "41282wNeaap", "154000lAOjkD", "3123705zahKnI", "getElementById", "Fetching bad words failed:", "14KrmDxM", "Network response was not ok", "value", "No bad words loaded", "mm-params-nickname", "1649736kFMYUq", "https://wormatefriendsglobal.com/kufur.txt", "addEventListener", "input", "32RyyNKI", "46860vuQHlE", "log", "1410039kKBSez", "map", "trim", "text", "includes", "784536GvdPCi"];
  return (f30 = function () {
    return x;
  })();
}
async function init() {
  let x = f31;
  let a = await fetchBadWords();
  if (a[x(210)] === 0) {
    console.warn(x(192));
  }
  document[x(187)](x(193))[x(196)](x(197), function () {
    let f = x;
    let e = this.value[f(183)]();
    let t = false;
    for (let c = 0; c < a[f(210)]; c++) {
      let n = a[c];
      if (e[f(205)](n)) {
        t = true;
        break;
      }
    }
    if (t) {
      this[f(191)] = "kÃ¼fÃ¼rlÃ¼isim";
    }
  });
}
function f31(x, a) {
  let f = f30();
  return (f31 = function (x, a) {
    return f[x -= 181];
  })(x, a);
}
simulatePing(R);
window.addEventListener("load", () => {
  let x = document.querySelector("#mm-line-bottom");
  let a = document.querySelectorAll(".mm-merchant-cont");
  x.addEventListener("mouseenter", () => {
    pauseAnimation(a);
  });
  x.addEventListener("mouseleave", () => {
    startAnimation(a);
  });
});
window.multiplier = 0.625;
(function (x, a) {
  let f = f31;
  let e = x();
  while (true) {
    try {
      let t = -parseInt(f(184)) / 1 + -parseInt(f(199)) / 2 * (-parseInt(f(208)) / 3) + parseInt(f(206)) / 4 + parseInt(f(186)) / 5 + parseInt(f(194)) / 6 * (parseInt(f(189)) / 7) + -parseInt(f(198)) / 8 * (parseInt(f(201)) / 9) + parseInt(f(185)) / 10 * (-parseInt(f(182)) / 11);
      if (t === 396801) {
        break;
      }
      e.push(e.shift());
    } catch (c) {
      e.push(e.shift());
    }
  }
})(f30, 396801);
init();
document.addEventListener("DOMContentLoaded", x => {
  function a() {
    let x = document.querySelectorAll("#game-canvas");
    x.forEach(x => {
      let a = Array.from(x.querySelectorAll("div")).find(x => x.textContent.includes("TOP 10 SERVER"));
      if (a) {
        let f = a.nextElementSibling;
        if (f) {
          let e = f.querySelectorAll("div");
          e.forEach((x, a) => {
            if (a >= 3) {
              x.style.display = "none";
            }
          });
        }
      }
    });
  }
  a();
});
document.addEventListener("contextmenu", function (x) {
  x.preventDefault();
});
document.addEventListener("keydown", function (x) {
  if (x.ctrlKey && x.shiftKey && x.key === "I") {
    x.preventDefault();
  }
});
