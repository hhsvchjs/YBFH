var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"sample0",
			"sample1",
			"sample2",
			"sample3",
			"MT0"
		],
		"images": [
			"bg.jpg",
			"winskin.png"
		],
		"tilesets": [],
		"animates": [
			"hand",
			"sword",
			"zone"
		],
		"bgms": [ //bgm存放处
			"永不复还奏鸣曲.mp3",
			"寂静之森.mp3",
			"厄泽城.mp3"
		],
		"sounds": [
			"floor.mp3",
			"attack.mp3",
			"openDoor.ogg",
			"openDoor2.ogg",
			"item.mp3",
			"equip.mp3",
			"zone.mp3",
			"jump.mp3",
			"pickaxe.mp3",
			"bomb.mp3",
			"centerFly.mp3"
		],
		"startBackground": "bg.jpg",
		"startLogoStyle": "color: black",
		"levelChoose": [
			[
				"初心试炼",
				"Easy难度"
			],
			[
				"冒险篇章",
				"Normal难度"
			],
			[
				"传奇史诗",
				"Hard难度"
			],
			[
				"圣域主宰",
				"Hell难度"
			]
		],
		"equipName": [
			"武器",
			"盾牌"
		],
		"statusLeftBackground": "url(project/images/UI.png) no-repeat",
		"statusTopBackground": "url(project/images/UI.png) no-repeat",
		"toolsBackground": "url(project/images/ground.png) repeat",
		"borderColor": "white", //white
		"statusBarColor": "white",
		"hardLabelColor": "red",
		"floorChangingBackground": "black",
		"floorChangingTextColor": "white",
		"font": "Consolas"
	},
	"firstData": {
		"title": "永不复还",
		"name": "template",
		"version": "Ver 2.5.3",
		"floorId": "sample0",
		"hero": {
			"name": "贾斯汀",
			"lv": "下级佣兵",
			"hpmax": 4000,
			"hp": 4000,
			"mana": 0,
			"atk": 3,
			"def": 2,
			"mdef": 0,
			"money": 0,
			"experience": 0,
			"equipment": [],
			"items": {
				"keys": {
					"yellowKey": 10,
					"blueKey": 10,
					"redKey": 10
				},
				"constants": {},
				"tools": {},
				"equips": {}
			},
			"flyRange": [],
			"loc": {
				"direction": "up",
				"x": 2,
				"y": 12
			},
			"flags": {},
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "在这里可以用事件来自定义绘制标题界面的背景图等"
			},
			{
				"type": "showImage",
				"code": 1,
				"image": "bg.jpg",
				"loc": [
					0,
					0
				],
				"dw": 100,
				"dh": 100,
				"opacity": 1,
				"time": 0
			},
			{
				"type": "comment",
				"text": "给用户提供选择项，这里简单的使用了choices事件"
			},
			{
				"type": "comment",
				"text": "也可以贴按钮图然后使用循环处理+等待操作来完成"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "开始游戏",
						"action": [
							{
								"type": "comment",
								"text": "检查bgm状态，下同"
							},
							{
								"type": "function",
								"function": "function(){\ncore.control.checkBgm()\n}"
							},
							{
								"type": "if",
								"condition": "core.flags.startDirectly",
								"true": [
									{
										"type": "comment",
										"text": "直接开始游戏，设置初始化数据"
									},
									{
										"type": "function",
										"function": "function(){\ncore.events.setInitData('')\n}"
									}
								],
								"false": [
									{
										"type": "comment",
										"text": "动态生成难度选择项"
									},
									{
										"type": "function",
										"function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\"text\": one[0], \"action\": [\n\t\t{\"type\": \"function\", \"function\": \"function() { core.status.hard = '\"+one[1]+\"'; core.events.setInitData('\"+one[1]+\"'); }\"}\n\t]});\n})\ncore.insertAction({\"type\": \"choices\", \"choices\": choices});\n}"
									}
								]
							},
							{
								"type": "hideImage",
								"code": 1,
								"time": 0
							},
							{
								"type": "comment",
								"text": "成功选择难度"
							}
						]
					},
					{
						"text": "读取存档",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.control.checkBgm()\n}"
							},
							{
								"type": "hideImage",
								"code": 1,
								"time": 0
							},
							{
								"type": "comment",
								"text": "这段代码会结束事件，打开读档页面，读取存档或重新开始"
							},
							{
								"type": "function",
								"function": "function(){\ncore.insertAction([{\"type\": \"exit\"}], null, null, function() {\n\tcore.status.played = false;\n\tcore.load();\n})\n}"
							},
							{
								"type": "comment",
								"text": "不管读档有没有成功，都会重新开始，这个地方不会被执行到"
							}
						]
					},
					{
						"text": "回放录像",
						"action": [
							{
								"type": "function",
								"function": "function(){\ncore.control.checkBgm()\n}"
							},
							{
								"type": "hideImage",
								"code": 1,
								"time": 0
							},
							{
								"type": "comment",
								"text": "这段代码会结束事件，选择录像文件，播放录像或重新开始"
							},
							{
								"type": "function",
								"function": "function(){\ncore.insertAction([{\"type\": \"exit\"}], null, null, function() {\n\tcore.restart();\n\tcore.chooseReplayFile();\n})\n}"
							},
							{
								"type": "comment",
								"text": "不管录像有没有成功，都会重新开始，这个地方不会被执行到"
							}
						]
					}
				]
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			}
		],
		"startText": [
// 			"初心试炼的福利包括初始装备格子上限1，初始黄钥匙+5，护甲值+3",
// 			"初始攻击+1，初始防御+1，初始经验增加40",
// 			"身体，仿佛撕裂一般痛苦",
// 			"不，或许我早已没有身体存在......",
// 			"四周弥漫的着是阴影与死亡的气息，那令人沉醉的.....",
// 			"灵魂。",
// 			"脑海里视乎还有许多挥之不去的影像。那是属于我的东西吗？",
// 			"或许，我应将它们完全纳入到我的脑海中，让我看看，我，究竟来自于何方......",
// 			"              辉煌大陆西北角，寂静之森。",
// 			"一个普通的不能再普通的小佣兵。十四岁成为佣兵后在温饱线上已经挣扎了两年。",
// 			"在辉煌大陆，寻常佣兵根本没有什么地位可言。所接到的任务也不过是类似看家护院找猫找狗的垃圾任务。",
// 			"而真正能够拿到高报酬的任务，却不是什么佣兵都有资格接的。即使不限制接取资格，佣兵们大多都会为了自己的小命着想。",
// 			"然而，人总会有那么一时头脑发热，做出不该做的选择。贾斯汀所在的佣兵小队的队长就是这样的一个人。",
// 			"高级佣兵认证资格，却接了一个连特级佣兵都有可能丧命在里面的寂静之森任务，任务是在森林里寻找一座建筑。",
// 			"于是，贾斯汀的噩梦就这样开始了......",
			"                     第一章 厄泽往事"
		],
		"shops": [
			{
				"id": "moneyShop1",
				"name": "贪婪之神",
				"icon": "blueShop",
				"textInList": "1F金币商店",
				"use": "money",
				"need": "20+10*times*(times+1)",
				"text": "勇敢的武士啊，给我${need}金币就可以：",
				"choices": [
					{
						"text": "生命+800",
						"effect": "status:hp+=800"
					},
					{
						"text": "攻击+4",
						"effect": "status:atk+=4"
					},
					{
						"text": "防御+4",
						"effect": "status:def+=4"
					},
					{
						"text": "魔防+10",
						"effect": "status:mdef+=10"
					}
				]
			},
			{
				"id": "expShop1",
				"name": "经验之神",
				"icon": "pinkShop",
				"textInList": "1F经验商店",
				"use": "experience",
				"need": "-1",
				"text": "勇敢的武士啊，给我若干经验就可以：",
				"choices": [
					{
						"text": "等级+1",
						"need": "100",
						"effect": "status:lv+=1;status:hp+=1000;status:atk+=7;status:def+=7"
					},
					{
						"text": "攻击+5",
						"need": "30",
						"effect": "status:atk+=5"
					},
					{
						"text": "防御+5",
						"need": "30",
						"effect": "status:def+=5"
					}
				]
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "下级佣兵",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "20",
				"title": "中级佣兵",
				"action": [
					{
						"type": "setValue",
						"name": "status:atk",
						"value": "status:atk+10"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"value": "status:def+10"
					}
				]
			},
			{
				"need": "40",
				"title": "高级佣兵",
				"action": [
					{
						"type": "tip",
						"text": "恭喜升级"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redJewel": 3,
		"blueJewel": 3,
		"greenJewel": 5,
		"redPotion": 100,
		"bluePotion": 250,
		"yellowPotion": 500,
		"greenPotion": 800,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"moveSpeed": 100,
		"animateSpeed": 300,
		"floorChangeTime": 800
	},
	"flags": {
		"enableFloor": true, //当前地图名
		"enableName": false,
		"enableLv": true, //当前等级
		"enableHPMax": true, //最大hp
		"enableMana": true, //当前mp
		"enableMDef": true, //当前魔防
		"enableMoney": true, //当前金钱
		"enableExperience": true, //当前经验
		"enableLevelUp": false,
		"levelUpLeftMode": false,
		"enableKeys": true,
		"enablePZF": false,
		"enableDebuff": false,
		"enableSkill": false, //当前技能
		"flyNearStair": true,
		"pickaxeFourDirections": false,
		"bombFourDirections": false,
		"snowFourDirections": false,
		"bigKeyIsBox": false,
		"equipment": false,
		"equipboxButton": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"hatredDecrease": true,
		"betweenAttackCeil": false,
		"useLoop": false,
		"startUsingCanvas": false,
		"startDirectly": false,
		"statusCanvas": false, //false
		"statusCanvasRowsOnMobile": 3, //3
		"canOpenBattleAnimate": true,
		"showBattleAnimateConfirm": false,
		"battleAnimate": false,
		"displayEnemyDamage": true,
		"displayCritical": true,
		"displayExtraDamage": true,
		"enableGentleClick": true,
		"potionWhileRouting": false,
		"portalWithoutTrigger": true, //穿过门不触发事件
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableDisabledShop": true,
		"disableShopOnDamage": false,
		"checkConsole": false
	}
}