// ChanLay Myanmar Web Viewer

(function () {
	//  Disable MUA Web Converter to prevent duplicate converting.
	var disableMUA = document.createElement('div');
	disableMUA.setAttribute('style', 'display: none');
	disableMUA.setAttribute('id', 'disableMUA');
	document.body.appendChild(disableMUA);

	// add css to html
	// var style = document.createElement("style");
	// style.innerHTML = ' @keyframes changecolorhover { to { border-left: 4px solid #FD1100; }} '
	//                 + ' ._c_o_nvert_:hover{ animation-name: changecolorhover; animation-duration: 1s; animation-timing-function: linear; animation-iteration-count: infinite; animation-direction: alternate; } '
	//                 + ' ._c_o_nvert_{ border-left: 4px solid #DDDFE2; padding-left: .6em; } ';
	// document.head.appendChild(style);
})();

// start code from rabbit
var Rabbit = {
	zg2uni: zg2uni,
	uni2zg: uni2zg,
};

function uni2zg(output) {
	var rule = [
		{
			from: '\u1004\u103a\u1039',
			to: '\u1064',
		},
		{
			from: '\u1039\u1010\u103d',
			to: '\u1096',
		},
		{
			from: '\u102b\u103a',
			to: '\u105a',
		},
		{
			from: '\u100b\u1039\u100c',
			to: '\u1092',
		},
		{
			from: '\u102d\u1036',
			to: '\u108e',
		},
		{
			from: '\u104e\u1004\u103a\u1038',
			to: '\u104e',
		},
		{
			from: '[\u1025\u1009](?=[\u1039\u102f\u1030])',
			to: '\u106a',
		},
		{
			from: '[\u1025\u1009](?=[\u1037]?[\u103a])',
			to: '\u1025',
		},
		{
			from: '\u100a(?=[\u1039\u103d])',
			to: '\u106b',
		},
		{
			from: '(\u1039[\u1000-\u1021])(\u102D){0,1}\u102f',
			to: '$1$2\u1033',
		},
		{
			from: '(\u1039[\u1000-\u1021])\u1030',
			to: '$1\u1034',
		},
		{
			from: '\u1014(?=[\u102d\u102e]?[\u1030\u103d\u103e\u102f\u1039])',
			to: '\u108f',
		},
		{
			from: '\u1014\u103c',
			to: '\u108f\u103c',
		},
		{
			from: '\u1039\u1000',
			to: '\u1060',
		},
		{
			from: '\u1039\u1001',
			to: '\u1061',
		},
		{
			from: '\u1039\u1002',
			to: '\u1062',
		},
		{
			from: '\u1039\u1003',
			to: '\u1063',
		},
		{
			from: '\u1039\u1005',
			to: '\u1065',
		},
		{
			from: '\u1039\u1006',
			to: '\u1066',
		},
		{
			from: '\u1039\u1007',
			to: '\u1068',
		},
		{
			from: '\u1039\u1008',
			to: '\u1069',
		},
		{
			from: '\u1039\u100b',
			to: '\u106c',
		},
		{
			from: '\u1039\u100c',
			to: '\u106d',
		},
		{
			from: '\u100d\u1039\u100d',
			to: '\u106e',
		},
		{
			from: '\u100d\u1039\u100e',
			to: '\u106f',
		},
		{
			from: '\u1039\u100f',
			to: '\u1070',
		},
		{
			from: '\u1039\u1010',
			to: '\u1071',
		},
		{
			from: '\u1039\u1011',
			to: '\u1073',
		},
		{
			from: '\u1039\u1012',
			to: '\u1075',
		},
		{
			from: '\u1039\u1013',
			to: '\u1076',
		},
		{
			from: '\u1039[\u1014\u108f]',
			to: '\u1077',
		},
		{
			from: '\u1039\u1015',
			to: '\u1078',
		},
		{
			from: '\u1039\u1016',
			to: '\u1079',
		},
		{
			from: '\u1039\u1017',
			to: '\u107a',
		},
		{
			from: '\u1039\u1018',
			to: '\u107b',
		},
		{
			from: '\u1039\u1019',
			to: '\u107c',
		},
		{
			from: '\u1039\u101c',
			to: '\u1085',
		},
		{
			from: '\u103f',
			to: '\u1086',
		},
		{
			from: '\u103d\u103e',
			to: '\u108a',
		},
		{
			from: '(\u1064)([\u1000-\u1021])([\u103b\u103c]?)\u102d',
			to: '$2$3\u108b',
		},
		{
			from: '(\u1064)([\u1000-\u1021])([\u103b\u103c]?)\u102e',
			to: '$2$3\u108c',
		},
		{
			from: '(\u1064)([\u1000-\u1021])([\u103b\u103c]?)\u1036',
			to: '$2$3\u108d',
		},
		{
			from: '(\u1064)([\u1000-\u1021])([\u103b\u103c]?)([\u1031]?)',
			to: '$2$3$4$1',
		},
		{
			from: '\u101b(?=([\u102d\u102e]?)[\u102f\u1030\u103d\u108a])',
			to: '\u1090',
		},
		{
			from: '\u100f\u1039\u100d',
			to: '\u1091',
		},
		{
			from: '\u100b\u1039\u100b',
			to: '\u1097',
		},
		{
			from:
				'([\u1000-\u1021\u108f\u1029\u1090\u1092])([\u1060-\u1069\u106c\u106d\u1070-\u107c\u1085\u108a])?([\u103b-\u103e]*)?\u1031',
			to: '\u1031$1$2$3',
		},
		{
			from: '\u103c\u103e',
			to: '\u103c\u1087',
		},
		{
			from:
				'([\u1000-\u1021\u108f\u1029])([\u1060-\u1069\u106c\u106d\u1070-\u107c\u1085])?(\u103c)',
			to: '$3$1$2',
		},
		{
			from: '\u103a',
			to: '\u1039',
		},
		{
			from: '\u103b',
			to: '\u103a',
		},
		{
			from: '\u103c',
			to: '\u103b',
		},
		{
			from: '\u103d',
			to: '\u103c',
		},
		{
			from: '\u103e',
			to: '\u103d',
		},
		{
			from: '([^\u103a\u100a])\u103d([\u102d\u102e]?)\u102f',
			to: '$1\u1088$2',
		},
		{
			from:
				'([\u101b\u103a\u103c\u108a\u1088\u1090])([\u1030\u103d])?([\u1032\u1036\u1039\u102d\u102e\u108b\u108c\u108d\u108e]?)(\u102f)?\u1037',
			to: '$1$2$3$4\u1095',
		},
		{
			from:
				'([\u102f\u1014\u1030\u103d])([\u1032\u1036\u1039\u102d\u102e\u108b\u108c\u108d\u108e]?)\u1037',
			to: '$1$2\u1094',
		},
		{
			from:
				'([\u103b])([\u1000-\u1021])([\u1087]?)([\u1036\u102d\u102e\u108b\u108c\u108d\u108e]?)\u102f',
			to: '$1$2$3$4\u1033',
		},
		{
			from:
				'([\u103b])([\u1000-\u1021])([\u1087]?)([\u1036\u102d\u102e\u108b\u108c\u108d\u108e]?)\u1030',
			to: '$1$2$3$4\u1034',
		},
		{
			from:
				'([\u103a\u103c\u100a\u1020\u1025])([\u103d]?)([\u1036\u102d\u102e\u108b\u108c\u108d\u108e]?)\u102f',
			to: '$1$2$3\u1033',
		},
		{
			from:
				'([\u103a\u103c\u100a\u101b])(\u103d?)([\u1036\u102d\u102e\u108b\u108c\u108d\u108e]?)\u1030',
			to: '$1$2$3\u1034',
		},
		{
			from: '\u100a\u103d',
			to: '\u100a\u1087',
		},
		{
			from: '\u103d\u1030',
			to: '\u1089',
		},
		{
			from:
				'\u103b([\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101a\u101e\u101f])',
			to: '\u107e$1',
		},
		{
			from:
				'\u107e([\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101a\u101e\u101f])([\u103c\u108a])([\u1032\u1036\u102d\u102e\u108b\u108c\u108d\u108e])',
			to: '\u1084$1$2$3',
		},
		{
			from:
				'\u107e([\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101a\u101e\u101f])([\u103c\u108a])',
			to: '\u1082$1$2',
		},
		{
			from:
				'\u107e([\u1000\u1003\u1006\u100f\u1010\u1011\u1018\u101a\u101c\u101a\u101e\u101f])([\u1033\u1034]?)([\u1032\u1036\u102d\u102e\u108b\u108c\u108d\u108e])',
			to: '\u1080$1$2$3',
		},
		{
			from:
				'\u103b([\u1000-\u1021])([\u103c\u108a])([\u1032\u1036\u102d\u102e\u108b\u108c\u108d\u108e])',
			to: '\u1083$1$2$3',
		},
		{
			from: '\u103b([\u1000-\u1021])([\u103c\u108a])',
			to: '\u1081$1$2',
		},
		{
			from:
				'\u103b([\u1000-\u1021])([\u1033\u1034]?)([\u1032\u1036\u102d\u102e\u108b\u108c\u108d\u108e])',
			to: '\u107f$1$2$3',
		},
		{
			from: '\u103a\u103d',
			to: '\u103d\u103a',
		},
		{
			from: '\u103a([\u103c\u108a])',
			to: '$1\u107d',
		},
		{
			from: '([\u1033\u1034])\u1094',
			to: '$1\u1095',
		},
		{
			from: '\u108F\u1071',
			to: '\u108F\u1072',
		},
		{
			from: '([\u1000-\u1021])([\u107B\u1066])\u102C',
			to: '$1\u102C$2',
		},
		{
			from: '\u102C([\u107B\u1066])\u1037',
			to: '\u102C$1\u1094',
		},
	];
	return replace_with_rule(rule, output);
}

function zg2uni(output) {
	var rule = [
		{
			from: '([\u102D\u102E\u103D\u102F\u1037\u1095])\\1+',
			to: '$1',
		},
		{
			from: '\u200B',
			to: '',
		},
		{
			from: '(\u103d|\u1087)',
			to: '\u103e',
		},
		{
			from: '\u103c',
			to: '\u103d',
		},
		{
			from: '(\u103b|\u107e|\u107f|\u1080|\u1081|\u1082|\u1083|\u1084)',
			to: '\u103c',
		},
		{
			from: '(\u103a|\u107d)',
			to: '\u103b',
		},
		{
			from: '\u1039',
			to: '\u103a',
		},
		{
			from: '(\u1066|\u1067)',
			to: '\u1039\u1006',
		},
		{
			from: '\u106a',
			to: '\u1009',
		},
		{
			from: '\u106b',
			to: '\u100a',
		},
		{
			from: '\u106c',
			to: '\u1039\u100b',
		},
		{
			from: '\u106d',
			to: '\u1039\u100c',
		},
		{
			from: '\u106e',
			to: '\u100d\u1039\u100d',
		},
		{
			from: '\u106f',
			to: '\u100d\u1039\u100e',
		},
		{
			from: '\u1070',
			to: '\u1039\u100f',
		},
		{
			from: '(\u1071|\u1072)',
			to: '\u1039\u1010',
		},
		{
			from: '\u1060',
			to: '\u1039\u1000',
		},
		{
			from: '\u1061',
			to: '\u1039\u1001',
		},
		{
			from: '\u1062',
			to: '\u1039\u1002',
		},
		{
			from: '\u1063',
			to: '\u1039\u1003',
		},
		{
			from: '\u1065',
			to: '\u1039\u1005',
		},
		{
			from: '\u1068',
			to: '\u1039\u1007',
		},
		{
			from: '\u1069',
			to: '\u1039\u1008',
		},
		{
			from: '(\u1073|\u1074)',
			to: '\u1039\u1011',
		},
		{
			from: '\u1075',
			to: '\u1039\u1012',
		},
		{
			from: '\u1076',
			to: '\u1039\u1013',
		},
		{
			from: '\u1077',
			to: '\u1039\u1014',
		},
		{
			from: '\u1078',
			to: '\u1039\u1015',
		},
		{
			from: '\u1079',
			to: '\u1039\u1016',
		},
		{
			from: '\u107a',
			to: '\u1039\u1017',
		},
		{
			from: '\u107c',
			to: '\u1039\u1019',
		},
		{
			from: '\u1085',
			to: '\u1039\u101c',
		},
		{
			from: '\u1033',
			to: '\u102f',
		},
		{
			from: '\u1034',
			to: '\u1030',
		},
		{
			from: '\u103f',
			to: '\u1030',
		},
		{
			from: '\u1086',
			to: '\u103f',
		},
		{
			from: '\u1036\u1088',
			to: '\u1088\u1036',
		},
		{
			from: '\u1088',
			to: '\u103e\u102f',
		},
		{
			from: '\u1089',
			to: '\u103e\u1030',
		},
		{
			from: '\u108a',
			to: '\u103d\u103e',
		},
		{
			from: '\u103B\u1064',
			to: '\u1064\u103B',
		},
		{
			from: '(\u1031)?([\u1000-\u1021])\u1064',
			to: '\u1004\u103a\u1039$1$2',
		},
		{
			from: '(\u1031)?([\u1000-\u1021])\u108b',
			to: '\u1004\u103a\u1039$1$2\u102d',
		},
		{
			from: '(\u1031)?([\u1000-\u1021])\u108c',
			to: '\u1004\u103a\u1039$1$2\u102e',
		},
		{
			from: '(\u1031)?([\u1000-\u1021])\u108d',
			to: '\u1004\u103a\u1039$1$2\u1036',
		},
		{
			from: '\u108e',
			to: '\u102d\u1036',
		},
		{
			from: '\u108f',
			to: '\u1014',
		},
		{
			from: '\u1090',
			to: '\u101b',
		},
		{
			from: '\u1091',
			to: '\u100f\u1039\u100d',
		},
		{
			from: '\u1019\u102c(\u107b|\u1093)',
			to: '\u1019\u1039\u1018\u102c',
		},
		{
			from: '(\u107b|\u1093)',
			to: '\u1039\u1018',
		},
		{
			from: '(\u1094|\u1095)',
			to: '\u1037',
		},
		{
			from: '([\u1000-\u1021])\u1037\u1032',
			to: '$1\u1032\u1037',
		},
		{
			from: '\u1096',
			to: '\u1039\u1010\u103d',
		},
		{
			from: '\u1097',
			to: '\u100b\u1039\u100b',
		},
		{
			from: '\u103c([\u1000-\u1021])([\u1000-\u1021])?',
			to: '$1\u103c$2',
		},
		{
			from: '([\u1000-\u1021])\u103c\u103a',
			to: '\u103c$1\u103a',
		},
		{
			from: '\u1047(?=[\u102c-\u1030\u1032\u1036-\u1038\u103d\u1038])',
			to: '\u101b',
		},
		{
			from: '\u1031\u1047',
			to: '\u1031\u101b',
		},
		{
			from: '\u1040(\u102e|\u102f|\u102d\u102f|\u1030|\u1036|\u103d|\u103e)',
			to: '\u101d$1',
		},
		{
			from:
				'([^\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049])\u1040\u102b',
			to: '$1\u101d\u102b',
		},
		{
			from:
				'([\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049])\u1040\u102b(?!\u1038)',
			to: '$1\u101d\u102b',
		},
		{
			from: '^\u1040(?=\u102b)',
			to: '\u101d',
		},
		{
			from: '\u1040\u102d(?!\u0020?/)',
			to: '\u101d\u102d',
		},
		{
			from: '([^\u1040-\u1049])\u1040([^\u1040-\u1049\u0020]|[\u104a\u104b])',
			to: '$1\u101d$2',
		},
		{
			from: '([^\u1040-\u1049])\u1040(?=[\\f\\n\\r])',
			to: '$1\u101d',
		},
		{
			from: '([^\u1040-\u1049])\u1040$',
			to: '$1\u101d',
		},
		{
			from: '\u1031([\u1000-\u1021])(\u103e)?(\u103b)?',
			to: '$1$2$3\u1031',
		},
		{
			from: '([\u1000-\u1021])\u1031([\u103b\u103c\u103d\u103e]+)',
			to: '$1$2\u1031',
		},
		{
			from: '\u1032\u103d',
			to: '\u103d\u1032',
		},
		{
			from: '([\u102d\u102e])\u103b',
			to: '\u103b$1',
		},
		{
			from: '\u103d\u103b',
			to: '\u103b\u103d',
		},
		{
			from: '\u103a\u1037',
			to: '\u1037\u103a',
		},
		{
			from: '\u102f(\u102d|\u102e|\u1036|\u1037)\u102f',
			to: '\u102f$1',
		},
		{
			from: '(\u102f|\u1030)(\u102d|\u102e)',
			to: '$2$1',
		},
		{
			from: '(\u103e)(\u103b|\u103c)',
			to: '$2$1',
		},
		{
			from: '\u1025(?=[\u1037]?[\u103a\u102c])',
			to: '\u1009',
		},
		{
			from: '\u1025\u102e',
			to: '\u1026',
		},
		{
			from: '\u1005\u103b',
			to: '\u1008',
		},
		{
			from: '\u1036(\u102f|\u1030)',
			to: '$1\u1036',
		},
		{
			from: '\u1031\u1037\u103e',
			to: '\u103e\u1031\u1037',
		},
		{
			from: '\u1031\u103e\u102c',
			to: '\u103e\u1031\u102c',
		},
		{
			from: '\u105a',
			to: '\u102b\u103a',
		},
		{
			from: '\u1031\u103b\u103e',
			to: '\u103b\u103e\u1031',
		},
		{
			from: '(\u102d|\u102e)(\u103d|\u103e)',
			to: '$2$1',
		},
		{
			from: '\u102c\u1039([\u1000-\u1021])',
			to: '\u1039$1\u102c',
		},
		{
			from: '\u103c\u1004\u103a\u1039([\u1000-\u1021])',
			to: '\u1004\u103a\u1039$1\u103c',
		},
		{
			from: '\u1039\u103c\u103a\u1039([\u1000-\u1021])',
			to: '\u103a\u1039$1\u103c',
		},
		{
			from: '\u103c\u1039([\u1000-\u1021])',
			to: '\u1039$1\u103c',
		},
		{
			from: '\u1036\u1039([\u1000-\u1021])',
			to: '\u1039$1\u1036',
		},

		{
			from: '\u1031\u1092',
			to: '\u1092\u1031',
		},
		{
			from: '\u1092',
			to: '\u100b\u1039\u100c',
		},
		{
			from: '\u104e',
			to: '\u104e\u1004\u103a\u1038',
		},
		{
			from: '\u1040(\u102b|\u102c|\u1036)',
			to: '\u101d$1',
		},
		{
			from: '\u1025\u1039',
			to: '\u1009\u1039',
		},
		{
			from: '([\u1000-\u1021])\u103c\u1031\u103d',
			to: '$1\u103c\u103d\u1031',
		},
		{
			from: '([\u1000-\u1021])\u103b\u1031\u103d(\u103e)?',
			to: '$1\u103b\u103d$2\u1031',
		},
		{
			from: '([\u1000-\u1021])\u103d\u1031\u103b',
			to: '$1\u103b\u103d\u1031',
		},
		{
			from: '([\u1000-\u1021])\u1031(\u1039[\u1000-\u1021])',
			to: '$1$2\u1031',
		},
		{
			from: '\u1038\u103a',
			to: '\u103a\u1038',
		},
		{
			from: '\u102d\u103a|\u103a\u102d',
			to: '\u102d',
		},
		{
			from: '\u102d\u102f\u103a',
			to: '\u102d\u102f',
		},
		{
			from: '\u0020\u1037',
			to: '\u1037',
		},
		{
			from: '\u1037\u1036',
			to: '\u1036\u1037',
		},
		{
			from: ' \u1037',
			to: '\u1037',
		},
		{
			from: '[\u102d]+',
			to: '\u102d',
		},
		{
			from: '[\u103a]+',
			to: '\u103a',
		},
		{
			from: '[\u103d]+',
			to: '\u103d',
		},
		{
			from: '[\u1037]+',
			to: '\u1037',
		},
		{
			from: '[\u102e]+',
			to: '\u102e',
		},
		{
			from: '\u102d\u102e|\u102e\u102d',
			to: '\u102e',
		},
		{
			from: '\u102f\u102d',
			to: '\u102d\u102f',
		},
		{
			from: '\u1037\u1037',
			to: '\u1037',
		},
		{
			from: '\u1032\u1032',
			to: '\u1032',
		},
		{
			from: '\u1044\u1004\u103a\u1038',
			to: '\u104E\u1004\u103a\u1038',
		},
		{
			from: '([\u102d\u102e])\u1039([\u1000-\u1021])',
			to: '\u1039$2$1',
		},
		{
			from: '(\u103c\u1031)\u1039([\u1000-\u1021])',
			to: '\u1039$2$1',
		},
		{
			from: '\u1036\u103d',
			to: '\u103d\u1036',
		},
	];
	return replace_with_rule(rule, output);
}

function replace_with_rule(rule, output) {
	var max_loop = rule.length;
	for (i = 0; i < max_loop; i++) {
		var data = rule[i];
		var from = data['from'];
		var to = data['to'];

		var from_regex = new RegExp(from, 'g');
		output = output.replace(from_regex, to);
	}

	return output;
}

// End code from rabbit

('use strict');

// Detecting the browser's unicode rendering
function mmFontWidth(t) {
	var e = document.createElement('div');
	e.setAttribute('style', 'position: absolute; top: -999;');
	e.innerHTML = t;
	document.body.appendChild(e);
	var ew = e.clientWidth;
	e.parentNode.removeChild(e);
	return ew;
}

function isZawgyiBrowser() {
	return mmFontWidth('က္က') >= mmFontWidth('က') * 1.5;
}

var zawgyiUser = isZawgyiBrowser();
//  End of rendering detecting

/* If converter result is not correct we need to normalize the some error.
 *  eg. double (ု) error due to mac zawgyi keyboard.
 */
function uniNormalize(text) {
	text = text.replace(/(\u102F)(\u102F)/g, '$1');
	return text;
}

/* This method will check the user font and content font.
 *  If the content font is not equal the user font, this will convert to user font
 */

function autoConvert(text) {
	textIsZawgyi = isZawgyiTex(text);
	if (textIsZawgyi && !zawgyiUser) {
		text = Rabbit.zg2uni(text);
	} else if (!textIsZawgyi && zawgyiUser) {
		text = Rabbit.uni2zg(text);
	}
	return text;
}

var zawgyiRegex =
	'\u1031\u103b' + // e+medial ra
	// beginning e or medial ra
	'|^\u1031|^\u103b' +
	// independent vowel, dependent vowel, tone , medial ra wa ha (no ya
	// because of 103a+103b is valid in unicode) , digit ,
	// symbol + medial ra
	'|[\u1022-\u1030\u1032-\u1039\u103b-\u103d\u1040-\u104f]\u103b' +
	// end with asat
	'|\u1039$' +
	// medial ha + medial wa
	'|\u103d\u103c' +
	// medial ra + medial wa
	'|\u103b\u103c' +
	// consonant + asat + ya ra wa ha independent vowel e dot below
	// visarga asat medial ra digit symbol
	'|[\u1000-\u1021]\u1039[\u101a\u101b\u101d\u101f\u1022-\u102a\u1031\u1037-\u1039\u103b\u1040-\u104f]' +
	// II+I II ae
	'|\u102e[\u102d\u103e\u1032]' +
	// ae + I II
	'|\u1032[\u102d\u102e]' +
	// I II , II I, I I, II II
	//+ "|[\u102d\u102e][\u102d\u102e]"
	// U UU + U UU
	//+ "|[\u102f\u1030][\u102f\u1030]" [ FIXED!! It is not so valuable zawgyi pattern ]
	// tall aa short aa
	//+ "|[\u102b\u102c][\u102b\u102c]" [ FIXED!! It is not so valuable zawgyi pattern ]
	// shan digit + vowel
	'|[\u1090-\u1099][\u102b-\u1030\u1032\u1037\u103c-\u103e]' +
	// consonant + medial ya + dependent vowel tone asat
	'|[\u1000-\u102a]\u103a[\u102c-\u102e\u1032-\u1036]' +
	// independent vowel dependent vowel tone digit + e [ FIXED !!! - not include medial ]
	'|[\u1023-\u1030\u1032-\u1039\u1040-\u104f]\u1031' +
	// other shapes of medial ra + consonant not in Shan consonant
	'|[\u107e-\u1084][\u1001\u1003\u1005-\u100f\u1012-\u1014\u1016-\u1018\u101f]' +
	// u + asat
	'|\u1025\u1039' +
	// eain-dray
	'|[\u1081\u1083]\u108f' +
	// short na + stack characters
	'|\u108f[\u1060-\u108d]' +
	// I II ae dow bolow above + asat typing error
	'|[\u102d-\u1030\u1032\u1036\u1037]\u1039' +
	// aa + asat awww
	'|\u102c\u1039' +
	// ya + medial wa
	'|\u101b\u103c' +
	// non digit + zero + \u102d (i vowel) [FIXED!!! rules tested zero + i vowel in numeric usage]
	'|[^\u1040-\u1049]\u1040\u102d' +
	// e + zero + vowel
	'|\u1031?\u1040[\u102b\u105a\u102e-\u1030\u1032\u1036-\u1038]' +
	// e + seven + vowel
	'|\u1031?\u1047[\u102c-\u1030\u1032\u1036-\u1038]' +
	// cons + asat + cons + virama
	//+ "|[\u1000-\u1021]\u103A[\u1000-\u1021]\u1039" [ FIXED!!! REMOVED!!! conflict with Mon's Medial ]
	// U | UU | AI + (zawgyi) dot below
	'|[\u102f\u1030\u1032]\u1094' +
	// virama + (zawgyi) medial ra
	'|\u1039[\u107E-\u1084]' +
	// rules add by thixpin
	// space + e + consonant
	'|[ $A-Za-z0-9]\u1031[\u1000-\u1021]' +
	// consonant + Visarga
	'|[\u1000-\u1021]\u1038';

var ZawgyiReg = new RegExp(zawgyiRegex);

/* Myanmar text checking regular expression
 *  is the part of Myanmar Font Tagger
 * http://userscripts-mirror.org/scripts/review/103745
 */
var MyanmarReg = new RegExp('[\u1000-\u1021]');

function isMyanmarText(input) {
	return MyanmarReg.test(input) ? true : false;
}

/*
 * This method will check and search Zawgyi Pattern with input text and
 * return true, if the text is Zawgyi encoding.
 * Parm = input text
 * return = boolean
 *
 */
function isZawgyiTex(input) {
	input = input.trim();
	//console.log(input);
	var textSplittedByLine = input.split(
		/[\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/
	);
	for (var i = 0; i < textSplittedByLine.length; i++) {
		var textSplitted = textSplittedByLine[i].split(' ');
		for (var j = 0; j < textSplitted.length; j++) {
			//  console.log(textSplitted[j]);
			if (j != 0) textSplitted[j] = ' ' + textSplitted[j];
			if (ZawgyiReg.test(textSplitted[j])) return true;
		}
	}
	return false;
}

function shouldIgnoreElement(node) {
	if (
		node.nodeName == 'INPUT' ||
		node.nodeName == 'SCRIPT' ||
		node.nodeName == 'TEXTAREA'
	) {
		return true;
	} else if (node.isContentEditable == true) {
		return true;
	}
	return false;
}

/*
 * This part are from Myanmar Font Tagger scripts developed by Ko Thant Thet Khin Zaw
 * http://userscripts-mirror.org/scripts/review/103745
 */
function convert_Tree(parent) {
	if (parent instanceof Node == false || parent instanceof SVGElement) {
		return;
	}
	if (
		parent.className != null &&
		parent.classList.contains('_c_o_nvert_') == true
	) {
		//console.log("converted return");
		return;
	}
	for (var i = 0; i < parent.childNodes.length; i++) {
		var child = parent.childNodes[i];
		if (child.nodeType != Node.TEXT_NODE && child.hasChildNodes()) {
			convert_Tree(child);
		} else if (child.nodeType == Node.TEXT_NODE) {
			var text = child.textContent.replace(/[\u200b\uFFFD]/g, '');
			if (text && isMyanmarText(text) && isZawgyiTex(text) != zawgyiUser) {
				if (shouldIgnoreElement(parent) == false) {
					child.textContent = autoConvert(text);
					if (
						parent.className == null ||
						(parent.classList.contains('_c_o_nvert_') == false &&
							parent.classList.contains('text_exposed_show') == false)
					) {
						parent.classList.add('_c_o_nvert_');
						// var parentElement = findParent(parent);
						// if(isDuplicated(parentElement)===false){
						//     parentElement.classList.add("i_am_zawgyi");
						// }
					}
				}
			}
		}
	}
}

function findParent(element) {
	var parentElement = element.parentNode;
	var end = false;
	while (end === false) {
		if (parentElement.childNodes.length > 1) {
			if (parentElement.lastChild.nodeName == 'DIV') {
				end = true;
			} else {
				parentElement = parentElement.parentNode;
			}
		} else {
			end = true;
		}
	}
	if (parentElement.nodeName == 'SPAN') {
		parentElement.style.display = 'block';
	} else if (parentElement.nodeName == 'A') {
		parentElement.style.display = 'inline-block';
	}
	return parentElement;
}

var runObserver = function () {
	var MutationObserver =
		window.MutationObserver ||
		window.WebKitMutationObserver ||
		window.MozMutationObserver;
	var list = document.querySelector('body');

	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type == 'childList') {
				for (var i = 0; i < mutation.addedNodes.length; i++) {
					var node = mutation.addedNodes[i];
					if (node.nodeType == Node.TEXT_NODE) {
						convert_Tree(node.parentNode);
					} else {
						convert_Tree(node);
					}
				}
			} else if (mutation.type == 'characterData') {
				convert_Tree(mutation.target);
			}
		});
	});

	if (list) {
		observer.observe(list, {
			childList: true,
			attributes: false,
			characterData: true,
			subtree: true,
		});
	}
};

var title = document.title;
if (isMyanmarText(title)) {
	document.title = autoConvert(title);
}

var list = document.querySelector('body');
if (!list) {
	if (document.addEventListener) {
		document.addEventListener(
			'DOMContentLoaded',
			function () {
				runObserver();
			},
			false
		);
	}
} else {
	convert_Tree(document.body);
	runObserver();
}
