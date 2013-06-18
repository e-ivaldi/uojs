var UO = {
  packets: {},
  login: {
    username: 'tissemand', 
    password: 'b0rkb0rk', 
    charslot: 0
  }
};

/**
 * Decompression Huffman Tree
 * An initialized version of the decompression binary tree; negative denotes a leaf node, all else represents a pointer.
 */
UO.packets.huffman = [[2,1],[4,3],[0,5],[7,6],[9,8],[11,10],[13,12],[14,-256],[16,15],[18,17],[20,19],[22,21],[23,-1],[25,24],[27,26],[29,28],[31,30],[33,32],[35,34],[37,36],[39,38],[-64,40],[42,41],[44,43],[45,-6],[47,46],[49,48],[51,50],[52,-119],[53,-32],[-14,54],[-5,55],[57,56],[59,58],[-2,60],[62,61],[64,63],[66,65],[68,67],[70,69],[72,71],[73,-51],[75,74],[77,76],[-111,-101],[-97,-4],[79,78],[80,-110],[-116,81],[83,82],[-255,84],[86,85],[88,87],[90,89],[-10,-15],[92,91],[93,-21],[94,-117],[96,95],[98,97],[100,99],[101,-114],[102,-105],[103,-26],[105,104],[107,106],[109,108],[111,110],[-3,112],[-7,113],[-131,114],[-144,115],[117,116],[118,-20],[120,119],[122,121],[124,123],[126,125],[128,127],[-100,129],[-8,130],[132,131],[134,133],[135,-120],[-31,136],[138,137],[-234,-109],[140,139],[142,141],[144,143],[145,-112],[146,-19],[148,147],[-66,149],[-145,150],[-65,-13],[152,151],[154,153],[155,-30],[157,156],[158,-99],[160,159],[162,161],[163,-23],[164,-29],[165,-11],[-115,166],[168,167],[170,169],[171,-16],[172,-34],[-132,173],[-108,174],[-22,175],[-9,176],[-84,177],[-37,-17],[178,-28],[180,179],[182,181],[184,183],[186,185],[-104,187],[-78,188],[-61,189],[-178,-79],[-134,-59],[-25,190],[-18,-83],[-57,191],[192,-67],[193,-98],[-68,-12],[195,194],[-128,-55],[-50,-24],[196,-70],[-33,-94],[-129,197],[198,-74],[199,-82],[-87,-56],[200,-44],[201,-248],[-81,-163],[-123,-52],[-113,202],[-41,-48],[-40,-122],[-90,203],[204,-54],[-192,-86],[206,205],[-130,207],[208,-53],[-45,-133],[210,209],[-91,211],[213,212],[-88,-106],[215,214],[217,216],[-49,218],[220,219],[222,221],[224,223],[226,225],[-102,227],[228,-160],[229,-46],[230,-127],[231,-103],[233,232],[234,-60],[-76,235],[-121,236],[-73,237],[238,-149],[-107,239],[240,-35],[-27,-71],[241,-69],[-77,-89],[-118,-62],[-85,-75],[-58,-72],[-80,-63],[-42,242],[-157,-150],[-236,-139],[-243,-126],[-214,-142],[-206,-138],[-146,-240],[-147,-204],[-201,-152],[-207,-227],[-209,-154],[-254,-153],[-156,-176],[-210,-165],[-185,-172],[-170,-195],[-211,-232],[-239,-219],[-177,-200],[-212,-175],[-143,-244],[-171,-246],[-221,-203],[-181,-202],[-250,-173],[-164,-184],[-218,-193],[-220,-199],[-249,-190],[-217,-230],[-216,-169],[-197,-191],[243,-47],[245,244],[247,246],[-159,-148],[249,248],[-93,-92],[-225,-96],[-95,-151],[251,250],[252,-241],[-36,-161],[254,253],[-39,-135],[-124,-187],[-251,255],[-238,-162],[-38,-242],[-125,-43],[-253,-215],[-208,-140],[-235,-137],[-237,-158],[-205,-136],[-141,-155],[-229,-228],[-168,-213],[-194,-224],[-226,-196],[-233,-183],[-167,-231],[-189,-174],[-166,-252],[-222,-198],[-179,-188],[-182,-223],[-186,-180],[-247,-245]];

/**
 * A registry of the packets sent by the server.
 * The keys are the packet, the values contain a human-readable name and it's expected size; negative values denote a 16-bit size at packet[1].
 */
 
//region

//endregion
UO.packets.registry = { 
//[ID]: [[Name]                 [Length]]
  0x0B: ['Damage',                     7], 
  0x11: ['Mob Status Compact',        -1], 
  0x1A: ['World Item',                -1],
  0x1B: ['Login Confirm',             37],
  0x1C: ['Ascii Message',             -1],
  0x1D: ['Remove Entity',              5],
  0x20: ['Mobile Update',             19],
  0x21: ['Movement Rejection',         8],
  0x22: ['Move Ack',                   3],
  0x23: ['Drag Effect',               26],
  0x24: ['Open Container',             7],
  0x25: ['Container Content Update',  21],
  0x27: ['Lift Rejection',             2],
  0x2C: ['Resurect Menu',              2],
  0x2D: ['Mob Attributes',            17],
  0x2E: ['Worn Item',                 15],
  0x2F: ['Swing',                     10],
  0x3A: ['Skills List',               -1],
  0x3C: ['Container Content',         -1],
  0x4E: ['Personal Light Level',       6],
  0x4F: ['Overall Light Level',        2],
  0x53: ['Popup Message',              2],
  0x54: ['Play Sound Effect',         12],
  0x55: ['Login Complete',             1],
  0x5B: ['Time',                       4],
  0x65: ['Set Weather',                4],
  0x6C: ['Target Cursor',             19],
  0x6D: ['Play Music',                 3],
  0x6E: ['Character Animation',       14],
  0x70: ['Graphical Effect 1',        28],
  0x72: ['War Mode',                   5],
  0x73: ['Ping',                       2],
  0x74: ['Vendor Buy List',           -1],
  0x76: ['New Subserver',             16],
  0x77: ['Mobile Moving',             17],
  0x78: ['Mobile Incomming',          -1],
  0x7C: ['Display Menu',              -1],
  0x82: ['Login Rejection',            2],
  0x85: ['Del Char Response',          2],
  0x86: ['Char List Update',          -1],
  0x88: ['Open Paperdoll',            66],
  0x89: ['Corpse Clothing',           -1],
  0x8C: ['Server Relay',              11],
  0x97: ['Player Move',                2],
  0x98: ['Request Name Response',     -1],
  0x99: ['Target Cursor Mul Obj',     26],
  0x9E: ['Vendor Sell List',          -1],
  0xA1: ['Update Current Health',      9],
  0xA2: ['Update Current Mana',        9],
  0xA3: ['Update Current Stam',        9],
  0xA5: ['Open Browser',              -1],
  0xA6: ['Tip/Notice Window',         -1],
  0xA8: ['Game Server List',          -1],
  0xA9: ['Chars/Start Loc',           -1],
  0xAA: ['Change Combatant',           5],
  0xAE: ['Unicode Message',           -1],
  0xAF: ['Death Animation',           13],
  0xB0: ['Disp. Gump Fast',           -1],
  0xB7: ['Obj Help Response',         -1],
  0xB9: ['Supported Features',         3],
  0xBA: ['Quest Arrow',                6],
  0xBC: ['Seasonal Change',            3],
  0xBD: ['Version Request',            2],
  0xBF: ['General Information',       -1],
  0xC0: ['Hued Effect',               36],
  0xC1: ['Message Localized',         -1],
  0xC6: ['Invalid Map Enable',         1],
  0xC7: ['Particle Effect',           49],
  0xCB: ['Global Queue Count',         7],
  0xCC: ['Message Local Aff.',        -1],
  0xD3: ['Extended 0x78',             -1],
  0xD6: ['Mega Cliloc',               -1],
  0xD8: ['Send Custom House',         -1],
  0xDC: ['SE Introduced Rev',          9],
  0xDD: ['Compressed Gump',           -1]
};

UO.number = {
  int: 4, // 32-bit integer (dword)
  short: 2,   // 16-bit integer (word)
  byte: 1,    // 8-bit
};
UO.system = {
  version: '0.0.1-alpha',
  pingTime: 45000,
  refreshInterval: 300,
  playerRange: 10,
  debug: true,
  textHeight: 30,
  forwader: 'http://127.0.0.1:2580/',
  
  write: function() {
    var formatted = arguments[0];
    var date = new Date();
    var log = document.getElementById("log");
    for(var i = 1; i < arguments.length; i++ ) 
      formatted = formatted.replace(new RegExp('\\{'+(i-1)+'\\}', 'gi'), arguments[i]);
    log.innerHTML += ('[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds() + '] ') + formatted.replace('<', "&lt;").replace('>', "&gt;") + "<br />";
    if(document.getElementById('autoscroll').checked)
      log.scrollTop = log.scrollHeight;
    //.scrollTo(0,document.body.offsetHeight);
  },
};
UO.convert = {
  toInt: function(n) { return n | 0; },
  toChar: String.fromCharCode
};

// Prototypes
Object.prototype.build = function(o) {
  var n = Object.create(this);
  for(var p in o)
    n[p] = o[p];
  return n;
};
Object.prototype.contains = function(k) {
    return this[k] != undefined;
};
// Encodes and sends a binary packet, array or string
WebSocket.prototype.sendbin = function(data){
  if (data instanceof Array)
    data = UO.convert.toChar.apply(null, data);
  var a = btoa(data);	
  this.send(a);
};
// Converts an unsigned number to signed
Number.prototype.toSigned = function() {
  //TODO: convert this to signed number
  return 0;
};
Number.prototype.toUnsigned = function() {
  return this >>> 0;
};
// Gets a hexidecimal representation of a number
Number.prototype.toHex = function() {
  var x = this.toString(16).toUpperCase();
  return (x.length == 1) ? ('0' + x) : x;
};
// Formats a string, like string.format() in C#
String.prototype.format = function() {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp('\\{'+i+'\\}', 'gi');
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};
// Pads a string
String.prototype.pad = function(l, s, t){
    return s || (s = " "), (l -= this.length) > 0 ? (s = new Array(Math.ceil(l / s.length)
        + 1).join(s)).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2))
        + this + s.substr(0, l - t) : this;
};

// Dumps a packet
String.prototype.dump = function() {
  UO.system.write('dumping packet ({0}), length: {1}', this.charCodeAt(0).toHex(), this.length);
  UO.system.write('start dump--------');
  var line = ''
  for(var i = 0; i < this.length; i++) {
    var c = (this.charCodeAt(i) & 0xFF).toHex();
    line += c + ' ';
    if(i%8 == 7) {
      UO.system.write(line);
      line = '';
    }
  }
  if(line != null)
    UO.system.write(line);
  UO.system.write('end dump----------');
};
// Gets a number at offset of `start` and of length `size`
String.prototype.getNumberAt = function(start, size) {
  var number;
  for(var i = 0; i < size; i++)
    number |= ((this.charCodeAt(start+i) & 0xFF) << 8*(size-i-1));
  return number;
}