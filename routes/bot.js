const _0x307cef = _0x39f8; (function (_0x344d1a, _0x137c45) { const _0x46f0c4 = _0x39f8, _0x42471 = _0x344d1a(); while (!![]) { try { const _0x4db498 = parseInt(_0x46f0c4(0x14d)) / 0x1 * (-parseInt(_0x46f0c4(0x117)) / 0x2) + -parseInt(_0x46f0c4(0x126)) / 0x3 * (-parseInt(_0x46f0c4(0x123)) / 0x4) + -parseInt(_0x46f0c4(0x138)) / 0x5 + parseInt(_0x46f0c4(0x14a)) / 0x6 + parseInt(_0x46f0c4(0x115)) / 0x7 * (parseInt(_0x46f0c4(0x148)) / 0x8) + parseInt(_0x46f0c4(0x158)) / 0x9 + parseInt(_0x46f0c4(0x154)) / 0xa; if (_0x4db498 === _0x137c45) break; else _0x42471['push'](_0x42471['shift']()); } catch (_0xe9fbf0) { _0x42471['push'](_0x42471['shift']()); } } }(_0x6fd5, 0x53632)); function _0x39f8(_0x424185, _0x193df2) { const _0x6fd5d2 = _0x6fd5(); return _0x39f8 = function (_0x39f807, _0x4b500f) { _0x39f807 = _0x39f807 - 0xf8; let _0x11a8ab = _0x6fd5d2[_0x39f807]; return _0x11a8ab; }, _0x39f8(_0x424185, _0x193df2); } const { default: makeWASocket, DisconnectReason, useSingleFileAuthState } = require(_0x307cef(0x11c)), router = require('express')[_0x307cef(0x168)](), awaitmysql = require('../function/awaitmysql'), { sign } = require(_0x307cef(0x152)), bcrypt = require('bcrypt'), randomstring = require('randomstring'), moment = require(_0x307cef(0x125)), { isvalid, isvaliddownload, isuser, checkplan } = require('../middlewares/user'), mysqlDump = require(_0x307cef(0x144)), Importer = require(_0x307cef(0x156)), path = require(_0x307cef(0x145)), fs = require('fs'), pino = require(_0x307cef(0x162)); var mime = require(_0x307cef(0x16a)); const e = require('express'); function _0x6fd5() { const _0x50475a = ['This\x20instance\x20was\x20not\x20longer\x20active,\x20Please\x20choose\x20another', '1122770pBkLYn', '\x27\x20,\x27', 'mysql-import', 'video', '219177XBORIf', 'key', 'json', 'open', 'notify', 'buttons', 'badSession', '1.0', 'section', 'UPDATE\x20bot\x20SET\x20status\x20=\x20\x27closed\x27\x20WHERE\x20unique_id\x20=\x20\x27', 'pino', 'ping', '/../sessions/', 'body', 'DELETE\x20FROM\x20instance\x20WHERE\x20client_id\x20=\x20\x27', '\x27,\x20\x27running\x27\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20', 'Router', 'query', 'mime-types', 'INSERT\x20INTO\x20bot\x20(uid,\x20unique_id,\x20templet_type,\x20templet_data,\x20client_id,\x20status)\x20VALUES\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27', 'allow_group_export', 'connection.update', 'Send\x20all\x20required\x20fields', 'map', 'timedOut', 'groupFetchAllParticipating', 'conversation', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20\x27', 'close', 'Saya\x20adalah\x20Bot!', 'sendMessage', 'message', 'decode', 'media', '/del', 'output', 'opned\x20connection', 'length', 'EDGE', '\x27,\x20\x27text\x27,\x20\x27', '/../client/public/user-media/', 'plan_data', 'end', 'toLowerCase', 'uid', 'Request\x20has\x20been\x20sent\x20check\x20status\x20in\x20bot\x20history.', '/get_running', 'list', 'footer', '1631tRLWrE', 'bot_type', '223030sKgopV', 'caption', '.json', 'fatal', 'connectionLost', '@adiwajshing/baileys', '\x27)\x20', 'text', 'title', 'Bot\x20was\x20deleted', 'left_msg', 'log', '142488TQKrHP', 'messages.upsert', 'moment', '45pVtZsa', 'remoteJid', 'statusCode', 'writeFile', 'image', 'buttonText', 'Your\x20plan\x20does\x20not\x20allow\x20you\x20to\x20export\x20group\x20data.\x20Please\x20change\x20your\x20plan.', 'fromMe', 'UPDATE\x20user\x20SET\x20left_msg\x20=\x20(\x27', 'indexOf', 'concat', 'bots', 'done', 'get', 'FFA', '/group.json', 'unique_id', 'UPDATE\x20user\x20SET\x20group_data\x20=\x20\x27', '2987975amYxbc', 'error', 'parse', 'readMessages', 'button', 'stringify', 'creds.update', 'exports', '/group', 'templateButtonReplyMessage', 'Pong', 'Your\x20plan\x20does\x20not\x20allow\x20you\x20to\x20add\x20a\x20bot.\x20Please\x20change\x20your\x20plan.', 'mysqldump', 'path', 'listResponseMessage', 'incoming', '1688qxcaTr', 'client_id', '1983246ngTdLt', 'outgoing', 'post', '1XimlpM', 'saved\x20json', 'unlinkSync', '/get_group_mem', '/add', 'jsonwebtoken']; _0x6fd5 = function () { return _0x50475a; }; return _0x6fd5(); } router['get'](_0x307cef(0x151), async (_0x4aa124, _0x13a248) => { const _0x55a742 = _0x307cef; try { _0x13a248[_0x55a742(0x15a)](_0x55a742(0x132)); const _0x322446 = _0x4aa124[_0x55a742(0x169)]['id'], _0x30f3c9 = __dirname + '/../sessions/', { state: _0x430d68, saveState: _0x4f915d } = useSingleFileAuthState(_0x30f3c9[_0x55a742(0x130)](_0x322446 + '.json')), _0x204e10 = makeWASocket({ 'printQRInTerminal': !![], 'auth': _0x430d68, 'logger': pino({ 'level': _0x55a742(0x11a) }), 'browser': [_0x55a742(0x134), _0x55a742(0x10a), _0x55a742(0x15f)] }); _0x204e10['ev']['on']('connection.update', async _0x16c720 => { const _0xf0a4f7 = _0x55a742, { connection: _0x4d9210, lastDisconnect: _0x739038, qr: _0xdeeac1, isNewLogin: _0x2308da } = _0x16c720; console[_0xf0a4f7(0x122)](_0x4d9210); if (_0x4d9210 === _0xf0a4f7(0x100)) { let _0x3ef1e6 = _0x739038[_0xf0a4f7(0x139)]?.[_0xf0a4f7(0x107)]?.[_0xf0a4f7(0x128)]; console[_0xf0a4f7(0x122)]({ 'statusCode': _0x3ef1e6 }); } _0x4d9210 === _0xf0a4f7(0x15b) && console['log'](_0xf0a4f7(0x108)); }), _0x204e10['ev']['on'](_0x55a742(0x124), async ({ messages: _0x3c15ca, type: _0x4d3732 }) => { const _0x54cf5f = _0x55a742; if (_0x4d3732 === 'notify') { const _0xf7df12 = _0x3c15ca[0x0][_0x54cf5f(0x103)]['conversation'], _0x5137d7 = _0x3c15ca[0x0]['message'][_0x54cf5f(0x146)], _0x435172 = _0x3c15ca[0x0][_0x54cf5f(0x103)]['buttonsResponseMessage'], _0x2b7ac2 = _0x3c15ca[0x0][_0x54cf5f(0x103)][_0x54cf5f(0x141)], _0x4c8403 = _0x3c15ca[0x0]['key'][_0x54cf5f(0x127)]; await _0x204e10[_0x54cf5f(0x13b)]([_0x3c15ca[0x0][_0x54cf5f(0x159)]]); const _0x5a9a19 = _0xf7df12['toLowerCase'](); !_0x3c15ca[0x0][_0x54cf5f(0x159)][_0x54cf5f(0x12d)] && _0x5a9a19 === _0x54cf5f(0x163) ? await _0x204e10[_0x54cf5f(0x102)](_0x4c8403, { 'text': _0x54cf5f(0x142) }, { 'quoted': _0x3c15ca[0x0] }) : await _0x204e10[_0x54cf5f(0x102)](_0x4c8403, { 'text': _0x54cf5f(0x101) }, { 'quoted': _0x3c15ca[0x0] }); } }); } catch (_0x291907) { console[_0x55a742(0x122)](_0x291907), _0x13a248[_0x55a742(0x15a)](_0x291907); } }), router[_0x307cef(0x14c)]('/add_text', isuser, checkplan, async (_0x2656b5, _0x5b96cc) => { const _0x73ff4d = _0x307cef; try { if (!_0x2656b5[_0x73ff4d(0x10d)]['allow_bot']) return _0x5b96cc[_0x73ff4d(0x15a)]({ 'msg': _0x73ff4d(0x143) }); const _0x42521f = _0x2656b5[_0x73ff4d(0x165)][_0x73ff4d(0x149)], _0x2d22e4 = _0x2656b5[_0x73ff4d(0x165)][_0x73ff4d(0x131)], _0x57c223 = __dirname + _0x73ff4d(0x164), _0x5c3c7a = _0x2656b5[_0x73ff4d(0x165)][_0x73ff4d(0x136)]; if (!_0x2d22e4?.[_0x73ff4d(0x109)] > 0x0 || !_0x42521f || !_0x5c3c7a) return _0x5b96cc[_0x73ff4d(0x15a)]({ 'msg': _0x73ff4d(0xfa) }); var _0x78c1b1 = __dirname + _0x73ff4d(0x164) + _0x42521f + _0x73ff4d(0x119); if (!_0x78c1b1 || _0x78c1b1 === undefined) return await awaitmysql[_0x73ff4d(0x169)](_0x73ff4d(0x166) + _0x42521f + '\x27\x20'), _0x5b96cc[_0x73ff4d(0x15a)]({ 'msg': _0x73ff4d(0x153) }); _0x5b96cc[_0x73ff4d(0x15a)]({ 'msg': _0x73ff4d(0x111), 'success': !![], 'body': _0x2656b5[_0x73ff4d(0x165)] }); const { state: _0x5203df, saveState: _0xcc9fb0 } = useSingleFileAuthState(_0x57c223[_0x73ff4d(0x130)](_0x42521f + _0x73ff4d(0x119))), _0x332e73 = makeWASocket({ 'printQRInTerminal': !![], 'auth': _0x5203df, 'logger': pino({ 'level': _0x73ff4d(0x11a) }), 'browser': [_0x73ff4d(0x134), _0x73ff4d(0x10a), _0x73ff4d(0x15f)] }); _0x332e73['ev']['on'](_0x73ff4d(0xf9), async _0x423d6a => { const _0x27d12d = _0x73ff4d, { connection: _0x247e31, lastDisconnect: _0x216fac, qr: _0x32a504, isNewLogin: _0x25c2e1 } = _0x423d6a; console[_0x27d12d(0x122)]({ 'connection': _0x247e31 }); if (_0x247e31 == _0x27d12d(0x100)) { let _0x564d6e = _0x216fac[_0x27d12d(0x139)]?.[_0x27d12d(0x107)]?.[_0x27d12d(0x128)]; console[_0x27d12d(0x122)]({ 'dis_reason': _0x564d6e }); if (_0x564d6e) { var _0x1b2184 = __dirname + _0x27d12d(0x164) + _0x42521f + _0x27d12d(0x119); _0x1b2184 && fs[_0x27d12d(0x14f)](_0x1b2184), await awaitmysql['query'](_0x27d12d(0x161) + _0x5c3c7a + '\x27\x20'), await awaitmysql[_0x27d12d(0x169)](_0x27d12d(0x166) + _0x42521f + '\x27\x20'), _0x332e73[_0x27d12d(0x10e)](); } } _0x247e31 === _0x27d12d(0x15b) && (await awaitmysql[_0x27d12d(0x169)](_0x27d12d(0x16b) + _0x2656b5[_0x27d12d(0x104)][_0x27d12d(0x110)] + '\x27,\x20\x27' + _0x5c3c7a + _0x27d12d(0x10b) + JSON[_0x27d12d(0x13d)](_0x2d22e4) + _0x27d12d(0x155) + _0x42521f + _0x27d12d(0x167)), console['log'](_0x27d12d(0x108))); }), _0x332e73['ev']['on'](_0x73ff4d(0x124), async ({ messages: _0x30e8e9, type: _0x47bf03 }) => { const _0xcbed70 = _0x73ff4d; if (_0x47bf03 === _0xcbed70(0x15c)) { const _0x4fd0e7 = _0x30e8e9[0x0][_0xcbed70(0x103)][_0xcbed70(0xfe)], _0x566264 = _0x30e8e9[0x0][_0xcbed70(0x159)][_0xcbed70(0x127)]; await _0x332e73[_0xcbed70(0x13b)]([_0x30e8e9[0x0][_0xcbed70(0x159)]]); const _0x765a7e = _0x4fd0e7[_0xcbed70(0x10f)](), _0x517544 = !![]; _0x2d22e4[_0xcbed70(0xfb)](async _0x39ea14 => { const _0x1214b7 = _0xcbed70; if (_0x39ea14['bot_type'] === _0x1214b7(0x11e)) { if (!_0x30e8e9[0x0][_0x1214b7(0x159)][_0x1214b7(0x12d)] && _0x765a7e === _0x39ea14[_0x1214b7(0x147)]) { if (_0x39ea14[_0x1214b7(0x105)]) { const _0x464b44 = mime['lookup'](__dirname + '/../client/public/user-media/' + _0x39ea14['media']), _0x5a98fd = _0x464b44['slice'](0x0, _0x464b44[_0x1214b7(0x12f)]('/')); if (_0x5a98fd == _0x1214b7(0x12a)) var _0x579243 = { 'image': { 'url': __dirname + '/../client/public/user-media/' + _0x39ea14['media'] }, 'caption': _0x39ea14['outgoing'] ? _0x39ea14['outgoing'] : null }; else { if (_0x5a98fd == _0x1214b7(0x157)) var _0x579243 = { 'video': { 'url': __dirname + '/../client/public/user-media/' + _0x39ea14[_0x1214b7(0x105)] }, 'caption': _0x39ea14[_0x1214b7(0x14b)] ? _0x39ea14['outgoing'] : null }; else { if (_0x5a98fd == 'audio') var _0x579243 = { 'audio': { 'url': __dirname + _0x1214b7(0x10c) + _0x39ea14[_0x1214b7(0x105)] }, 'caption': _0x39ea14[_0x1214b7(0x14b)] ? _0x39ea14[_0x1214b7(0x14b)] : null }; else var _0x579243 = { 'document': { 'url': __dirname + _0x1214b7(0x10c) + _0x39ea14[_0x1214b7(0x105)] }, 'mimetype': _0x464b44 }; } } await _0x332e73[_0x1214b7(0x102)](_0x566264, _0x579243); } else { await _0x332e73[_0x1214b7(0x102)](_0x566264, { 'text': _0x39ea14['outgoing'] }, { 'quoted': _0x30e8e9[0x0] }); const _0x4d5930 = await awaitmysql[_0x1214b7(0x169)](_0x1214b7(0xff) + _0x2656b5[_0x1214b7(0x104)][_0x1214b7(0x110)] + '\x27\x20'); if (_0x4d5930[_0x1214b7(0x109)] > 0x0 || _0x4d5930[0x0][_0x1214b7(0x121)]) { var _0xf6aefc = parseInt(_0x4d5930[0x0][_0x1214b7(0x121)]) - 0x1; await awaitmysql[_0x1214b7(0x169)](_0x1214b7(0x12e) + _0xf6aefc + _0x1214b7(0x11d)); } } } else { } } if (_0x39ea14[_0x1214b7(0x116)] === _0x1214b7(0x13c)) { if (!_0x30e8e9[0x0][_0x1214b7(0x159)][_0x1214b7(0x12d)] && _0x765a7e === _0x39ea14['incoming']) { if (_0x39ea14['outgoing']?.[_0x1214b7(0x118)] && _0x39ea14[_0x1214b7(0x14b)]?.[_0x1214b7(0x12a)]) { const _0x2d1c2f = __dirname + _0x1214b7(0x10c) + _0x39ea14[_0x1214b7(0x14b)]?.['image'], _0x2537a5 = { 'image': { 'url': _0x2d1c2f }, 'caption': _0x39ea14[_0x1214b7(0x14b)]?.[_0x1214b7(0x118)], 'footer': _0x39ea14[_0x1214b7(0x14b)]?.['footer'], 'buttons': JSON[_0x1214b7(0x13a)](_0x39ea14['outgoing']?.[_0x1214b7(0x15d)]), 'headerType': 0x4 }; await _0x332e73['sendMessage'](_0x566264, _0x2537a5); const _0x16aa32 = await awaitmysql['query'](_0x1214b7(0xff) + _0x2656b5[_0x1214b7(0x104)][_0x1214b7(0x110)] + '\x27\x20'); if (_0x16aa32[_0x1214b7(0x109)] > 0x0 || _0x16aa32[0x0]['left_msg']) { var _0xf6aefc = parseInt(_0x16aa32[0x0][_0x1214b7(0x121)]) - 0x1; await awaitmysql['query'](_0x1214b7(0x12e) + _0xf6aefc + _0x1214b7(0x11d)); } } else { const _0x54b01d = { 'text': _0x39ea14[_0x1214b7(0x14b)]?.['text'] || '', 'footer': _0x39ea14[_0x1214b7(0x14b)]?.[_0x1214b7(0x114)] || '', 'buttons': JSON[_0x1214b7(0x13a)](_0x39ea14[_0x1214b7(0x14b)]?.['buttons']), 'headerType': 0x1 }; await _0x332e73['sendMessage'](_0x566264, _0x54b01d); const _0x33a7fc = await awaitmysql[_0x1214b7(0x169)]('SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20\x27' + _0x2656b5['decode'][_0x1214b7(0x110)] + '\x27\x20'); if (_0x33a7fc['length'] > 0x0 || _0x33a7fc[0x0]['left_msg']) { var _0xf6aefc = parseInt(_0x33a7fc[0x0]['left_msg']) - 0x1; await awaitmysql[_0x1214b7(0x169)]('UPDATE\x20user\x20SET\x20left_msg\x20=\x20(\x27' + _0xf6aefc + _0x1214b7(0x11d)); } } } else { } } if (_0x39ea14[_0x1214b7(0x116)] === _0x1214b7(0x113)) { if (!_0x30e8e9[0x0][_0x1214b7(0x159)]['fromMe'] && _0x765a7e === _0x39ea14['incoming']) { const _0x70f133 = { 'text': _0x39ea14['outgoing']?.[_0x1214b7(0x11e)], 'footer': _0x39ea14['outgoing']?.['footer'], 'title': _0x39ea14[_0x1214b7(0x14b)]?.[_0x1214b7(0x11f)], 'buttonText': _0x39ea14['outgoing']?.[_0x1214b7(0x12b)], 'sections': JSON['parse'](_0x39ea14[_0x1214b7(0x14b)]?.[_0x1214b7(0x160)]) }; await _0x332e73[_0x1214b7(0x102)](_0x566264, _0x70f133); const _0x2e826d = await awaitmysql[_0x1214b7(0x169)]('SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20\x27' + _0x2656b5['decode']['uid'] + '\x27\x20'); if (_0x2e826d[_0x1214b7(0x109)] > 0x0 || _0x2e826d[0x0][_0x1214b7(0x121)]) { var _0xf6aefc = parseInt(_0x2e826d[0x0][_0x1214b7(0x121)]) - 0x1; await awaitmysql['query'](_0x1214b7(0x12e) + _0xf6aefc + _0x1214b7(0x11d)); } } else { } } }); } }), _0x332e73['ev']['on'](_0x73ff4d(0x13e), _0xcc9fb0); } catch (_0x5e6b89) { console[_0x73ff4d(0x122)](_0x5e6b89), _0x5b96cc['json'](_0x5e6b89); } }), router['get'](_0x307cef(0x112), isuser, async (_0x85fe17, _0x1cd7a8) => { const _0xf62fcd = _0x307cef; try { const _0x119039 = await awaitmysql[_0xf62fcd(0x169)]('SELECT\x20*\x20FROM\x20bot\x20WHERE\x20uid\x20=\x20\x27' + _0x85fe17[_0xf62fcd(0x104)]['uid'] + '\x27\x20'); _0x1cd7a8[_0xf62fcd(0x15a)]({ 'success': !![], 'data': _0x119039 }); } catch (_0x1b0a23) { console[_0xf62fcd(0x122)](_0x1b0a23), _0x1cd7a8[_0xf62fcd(0x15a)](_0x1b0a23); } }), router[_0x307cef(0x14c)](_0x307cef(0x106), isuser, async (_0x59172f, _0xc22d21) => { const _0x546c83 = _0x307cef; try { const _0x6eb56a = await awaitmysql[_0x546c83(0x169)]('DELETE\x20FROM\x20bot\x20WHERE\x20id\x20=\x20\x27' + _0x59172f[_0x546c83(0x165)]['id'] + '\x27\x20'); _0xc22d21['json']({ 'success': !![], 'msg': _0x546c83(0x120) }); } catch (_0x4834a1) { console[_0x546c83(0x122)](_0x4834a1), _0xc22d21['json'](_0x4834a1); } }), router[_0x307cef(0x14c)](_0x307cef(0x150), isuser, checkplan, async (_0x3137d1, _0x3fc605) => { const _0x531f01 = _0x307cef; try { console[_0x531f01(0x122)](_0x3137d1[_0x531f01(0x10d)][_0x531f01(0xf8)]); if (!_0x3137d1['plan_data'][_0x531f01(0xf8)]) return _0x3fc605[_0x531f01(0x15a)]({ 'msg': _0x531f01(0x12c) }); const _0xad4edc = _0x3137d1[_0x531f01(0x165)][_0x531f01(0x149)], _0x5bbb6a = __dirname + '/../sessions/'; if (!_0xad4edc) return _0x3fc605[_0x531f01(0x15a)]({ 'msg': _0x531f01(0xfa) }); _0x3fc605[_0x531f01(0x15a)]({ 'msg': 'Request\x20has\x20been\x20sent\x20your\x20data\x20will\x20be\x20reflect\x20here\x20if\x20your\x20instance\x20is\x20active\x20and\x20you\x20have\x20groups\x20to\x20extract.', 'success': !![] }); var _0x8e60d1 = __dirname + _0x531f01(0x164) + _0xad4edc + _0x531f01(0x119); if (!_0x8e60d1 || _0x8e60d1 === undefined) return await awaitmysql[_0x531f01(0x169)]('DELETE\x20FROM\x20instance\x20WHERE\x20client_id\x20=\x20\x27' + _0xad4edc + '\x27\x20'), _0x3fc605['json']({ 'msg': _0x531f01(0x153) }); const { state: _0x222d1c, saveState: _0x171fb2 } = useSingleFileAuthState(_0x5bbb6a[_0x531f01(0x130)](_0xad4edc + _0x531f01(0x119))), _0x4b7eec = makeWASocket({ 'printQRInTerminal': !![], 'auth': _0x222d1c, 'logger': pino({ 'level': _0x531f01(0x11a) }), 'browser': [_0x531f01(0x134), _0x531f01(0x10a), _0x531f01(0x15f)] }); _0x4b7eec['ev']['on']('connection.update', async _0x2997a8 => { const _0x535b34 = _0x531f01, { connection: _0xe31a57, lastDisconnect: _0x5f271f, qr: _0x46a638, isNewLogin: _0x57a7a7 } = _0x2997a8; console[_0x535b34(0x122)]({ 'connection': _0xe31a57 }); if (_0xe31a57 == _0x535b34(0x100)) { let _0x237fdb = _0x5f271f[_0x535b34(0x139)]?.[_0x535b34(0x107)]?.[_0x535b34(0x128)]; console['log']({ 'dis_reason': _0x237fdb }); if (_0x237fdb === DisconnectReason[_0x535b34(0xfc)] || _0x237fdb === DisconnectReason[_0x535b34(0x11b)] || _0x237fdb === DisconnectReason[_0x535b34(0x15e)]) { var _0x4af5aa = __dirname + _0x535b34(0x164) + _0xad4edc + _0x535b34(0x119); _0x4af5aa && fs[_0x535b34(0x14f)](_0x4af5aa), await awaitmysql[_0x535b34(0x169)](_0x535b34(0x166) + _0xad4edc + '\x27\x20'), _0x4b7eec[_0x535b34(0x10e)](); } } if (_0xe31a57 === _0x535b34(0x15b)) { const _0x5e6ac7 = await _0x4b7eec[_0x535b34(0xfd)](); await awaitmysql['query'](_0x535b34(0x137) + JSON['stringify'](_0x5e6ac7) + '\x27\x20'), _0x4b7eec['end'](); } }), _0x4b7eec['ev']['on'](_0x531f01(0x13e), _0x171fb2); } catch (_0x486e4b) { console[_0x531f01(0x122)](_0x486e4b), _0x3fc605[_0x531f01(0x15a)](_0x486e4b); } }), router[_0x307cef(0x133)](_0x307cef(0x140), checkplan, async (_0x5d1c43, _0x228cf1) => { const _0x4dd2fa = _0x307cef; try { _0x228cf1[_0x4dd2fa(0x15a)](_0x4dd2fa(0x132)); const _0x4b7a23 = _0x5d1c43[_0x4dd2fa(0x169)]['id'], _0x1a8fb0 = __dirname + _0x4dd2fa(0x164), { state: _0x71cc6, saveState: _0x2cc2a4 } = useSingleFileAuthState(_0x1a8fb0[_0x4dd2fa(0x130)](_0x4b7a23 + _0x4dd2fa(0x119))), _0xf82247 = makeWASocket({ 'printQRInTerminal': !![], 'auth': _0x71cc6, 'logger': pino({ 'level': _0x4dd2fa(0x11a) }), 'browser': [_0x4dd2fa(0x134), _0x4dd2fa(0x10a), _0x4dd2fa(0x15f)] }); _0xf82247['ev']['on'](_0x4dd2fa(0xf9), async _0x13ced8 => { const _0x22dc15 = _0x4dd2fa, { connection: _0x21f761, lastDisconnect: _0x38d2ca, qr: _0xd7e1d3, isNewLogin: _0x2478e6 } = _0x13ced8; console['log'](_0x21f761); if (_0x21f761 === _0x22dc15(0x100)) { let _0x263e04 = _0x38d2ca[_0x22dc15(0x139)]?.['output']?.[_0x22dc15(0x128)]; console[_0x22dc15(0x122)]({ 'statusCode': _0x263e04 }); } if (_0x21f761 === _0x22dc15(0x15b)) { console[_0x22dc15(0x122)](_0x22dc15(0x108)); const _0x15ef3d = await _0xf82247['groupFetchAllParticipating'](); fs[_0x22dc15(0x129)](__dirname + _0x22dc15(0x135), JSON[_0x22dc15(0x13d)](_0x15ef3d), 'utf8', () => { const _0x2c4bcd = _0x22dc15; console[_0x2c4bcd(0x122)](_0x2c4bcd(0x14e)); }); } }); } catch (_0x2116d9) { console[_0x4dd2fa(0x122)](_0x2116d9), _0x228cf1[_0x4dd2fa(0x15a)](_0x2116d9); } }), module[_0x307cef(0x13f)] = router;