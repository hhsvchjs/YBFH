var maps_90f36752_8815_4be8_b32b_d7fad1d0542e =
{
    ////////////////////////// 地形部分 //////////////////////////

    // 0-20 地形
    '1':{'cls': 'terrains', 'id': 'yellowWall', 'pd': 'terrains', 'canBreak': true}, // 黄墙
    '2':{'cls': 'terrains', 'id': 'whiteWall', 'pd': 'terrains', 'canBreak': true}, // 白墙
    '3':{'cls': 'terrains', 'id': 'blueWall', 'pd': 'terrains', 'canBreak': true}, // 蓝墙
    '4':{'cls': 'animates', 'id': 'star', 'pd': 'animates', 'noPass': true}, // 星空
    '5':{'cls': 'animates', 'id': 'lava', 'pd': 'animates', 'noPass': true}, // 岩浆
    '6':{'cls': 'terrains', 'id': 'ice', 'pd': 'terrains'}, // 冰面
    '7':{'cls': 'terrains', 'id': 'blueShop-left', 'pd': 'terrains'}, // 蓝色商店左
    '8':{'cls': 'terrains', 'id': 'blueShop-right', 'pd': 'terrains'}, // 蓝色商店右
    '9':{'cls': 'terrains', 'id': 'pinkShop-left', 'pd': 'terrains'}, // 粉色商店左
    '10':{'cls': 'terrains', 'id': 'pinkShop-right', 'pd': 'terrains'}, // 粉色商店左
    '11':{'cls': 'animates', 'id': 'lavaNet', 'pd': 'animates', 'noPass': false, 'trigger': 'passNet'}, // 血网
    '12':{'cls': 'animates', 'id': 'poisonNet', 'pd': 'animates', 'noPass': false, 'trigger': 'passNet'}, // 毒网
    '13':{'cls': 'animates', 'id': 'weakNet', 'pd': 'animates', 'noPass': false, 'trigger': 'passNet'}, // 衰网
    '14':{'cls': 'animates', 'id': 'curseNet', 'pd': 'animates', 'noPass': false, 'trigger': 'passNet'}, // 咒网
    '15':{'cls': 'animates', 'id': 'blueWater', 'pd': 'animates', 'noPass': true}, // 水
    '16':{'cls': 'animates', 'id': 'water', 'pd': 'animates', 'noPass': true}, // 水
    // 在这里添加更多地形
    // 如果空位不足，可以从180以后开始继续放，只要不和现有的数字冲突即可

    // Autotile
    '20':{'cls': 'autotile', 'id': 'autotile', 'pd': 'autotile', 'noPass': true}, // autotile
	// 更多的autotile从151到160等，只要不和现有的数字冲突即可
    '151':{'cls': 'autotile', 'id': 'autotile1', 'pd': 'autotile', 'noPass': true},
    '152':{'cls': 'autotile', 'id': 'autotile2', 'pd': 'autotile', 'noPass': true},
    '153':{'cls': 'autotile', 'id': 'autotile3', 'pd': 'autotile', 'noPass': true},

    ////////////////////////// 物品部分 //////////////////////////

    // 21-80 物品
    '21':{'cls': 'items', 'id': 'yellowKey', 'pd': 'items'}, // 黄钥匙
    '22':{'cls': 'items', 'id': 'blueKey', 'pd': 'items'}, // 蓝钥匙
    '23':{'cls': 'items', 'id': 'redKey', 'pd': 'items'}, // 红钥匙
    '24':{'cls': 'items', 'id': 'greenKey', 'pd': 'items'}, // 绿钥匙
    '25':{'cls': 'items', 'id': 'steelKey', 'pd': 'items'}, // 铁门钥匙
    '26':{'cls': 'items', 'id': 'bigKey', 'pd': 'items'}, // 大黄门钥匙（钥匙盒）
    '27':{'cls': 'items', 'id': 'redJewel', 'pd': 'items'}, // 红宝石
    '28':{'cls': 'items', 'id': 'blueJewel', 'pd': 'items'}, // 蓝宝石
    '29':{'cls': 'items', 'id': 'greenJewel', 'pd': 'items'}, // 绿宝石
    '30':{'cls': 'items', 'id': 'yellowJewel', 'pd': 'items'}, // 黄宝石
    '31':{'cls': 'items', 'id': 'redPotion', 'pd': 'items'}, // 红血瓶
    '32':{'cls': 'items', 'id': 'bluePotion', 'pd': 'items'}, // 蓝血瓶
    '33':{'cls': 'items', 'id': 'greenPotion', 'pd': 'items'}, // 绿血瓶
    '34':{'cls': 'items', 'id': 'yellowPotion', 'pd': 'items'}, // 黄血瓶
    '35':{'cls': 'items', 'id': 'sword1', 'pd': 'items'}, // 铁剑
    '36':{'cls': 'items', 'id': 'shield1', 'pd': 'items'}, // 铁盾
    '37':{'cls': 'items', 'id': 'sword2', 'pd': 'items'}, // 银剑
    '38':{'cls': 'items', 'id': 'shield2', 'pd': 'items'}, // 银盾
    '39':{'cls': 'items', 'id': 'sword3', 'pd': 'items'}, // 骑士剑
    '40':{'cls': 'items', 'id': 'shield3', 'pd': 'items'}, // 骑士盾
    '41':{'cls': 'items', 'id': 'sword4', 'pd': 'items'}, // 圣剑
    '42':{'cls': 'items', 'id': 'shield4', 'pd': 'items'}, // 圣盾
    '43':{'cls': 'items', 'id': 'sword5', 'pd': 'items'}, // 神圣剑
    '44':{'cls': 'items', 'id': 'shield5', 'pd': 'items'}, // 神圣盾
    '45':{'cls': 'items', 'id': 'book', 'pd': 'items'}, // 怪物手册
    '46':{'cls': 'items', 'id': 'fly', 'pd': 'items'}, // 楼层传送器
    '47':{'cls': 'items', 'id': 'pickaxe', 'pd': 'items'}, // 破墙镐
    '48':{'cls': 'items', 'id': 'icePickaxe', 'pd': 'items'}, // 破冰镐
    '49':{'cls': 'items', 'id': 'bomb', 'pd': 'items'}, // 炸弹
    '50':{'cls': 'items', 'id': 'centerFly', 'pd': 'items'}, // 中心对称
    '51':{'cls': 'items', 'id': 'upFly', 'pd': 'items'}, // 上楼器
    '52':{'cls': 'items', 'id': 'downFly', 'pd': 'items'}, // 下楼器
    '53':{'cls': 'items', 'id': 'coin', 'pd': 'items'}, // 幸运金币
    '54':{'cls': 'items', 'id': 'snow', 'pd': 'items'}, // 冰冻徽章
    '55':{'cls': 'items', 'id': 'cross', 'pd': 'items'}, // 十字架
    '56':{'cls': 'items', 'id': 'superPotion', 'pd': 'items'}, // 圣水
    '57':{'cls': 'items', 'id': 'earthquake', 'pd': 'items'}, // 地震卷轴
    '58':{'cls': 'items', 'id': 'poisonWine', 'pd': 'items'}, // 解毒药水
    '59':{'cls': 'items', 'id': 'weakWine', 'pd': 'items'}, // 解衰药水
    '60':{'cls': 'items', 'id': 'curseWine', 'pd': 'items'}, // 解咒药水
    '61':{'cls': 'items', 'id': 'superWine', 'pd': 'items'}, // 万能药水
    '62':{'cls': 'items', 'id': 'knife', 'pd': 'items'}, // 屠龙匕首
    '63':{'cls': 'items', 'id': 'moneyPocket', 'pd': 'items'}, // 金钱袋
    '64':{'cls': 'items', 'id': 'shoes', 'pd': 'items'}, // 绿鞋
    '65':{'cls': 'items', 'id': 'hammer', 'pd': 'items'}, // 圣锤
    '68':{'cls': 'items', 'id': 'lifeWand', 'pd': 'items'}, // 生命魔杖
    '69':{'cls': 'items', 'id': 'jumpShoes', 'pd': 'items'}, // 生命魔杖
    '70':{'cls': 'items', 'id': 'sword0', 'pd': 'items'},
    '71':{'cls': 'items', 'id': 'shield0', 'pd': 'items'},
    '72':{'cls': 'items', 'id': 'skill1', 'pd': 'items'}, // 技能：二倍斩


    ////////////////////////// 门、楼梯、传送点部分 //////////////////////////

    // 81-100 门
    '81':{'cls': 'terrains', 'id': 'yellowDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 黄门
    '82':{'cls': 'terrains', 'id': 'blueDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 蓝门
    '83':{'cls': 'terrains', 'id': 'redDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 红门
    '84':{'cls': 'terrains', 'id': 'greenDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 绿门
    '85':{'cls': 'terrains', 'id': 'specialDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 机关门左
    '86':{'cls': 'terrains', 'id': 'steelDoor', 'pd': 'terrains', 'trigger': 'openDoor'}, // 铁门
    '87':{'cls': 'terrains', 'id': 'upFloor', 'pd': 'terrains', 'noPass': false}, // 上楼梯
    '88':{'cls': 'terrains', 'id': 'downFloor', 'pd': 'terrains', 'noPass': false}, // 下楼梯
    '89':{'cls': 'animates', 'id': 'portal', 'pd': 'animates', 'noPass': false}, // 传送门
    '90':{'cls': 'animates', 'id': 'starPortal', 'pd': 'animates', 'noPass': false}, // 星空传送门
    '91':{'cls': 'animates', 'id': 'upPortal', 'pd': 'animates', 'noPass': false}, // 上箭头
    '92':{'cls': 'animates', 'id': 'leftPortal', 'pd': 'animates', 'noPass': false}, // 左箭头
    '93':{'cls': 'animates', 'id': 'downPortal', 'pd': 'animates', 'noPass': false}, // 下箭头
    '94':{'cls': 'animates', 'id': 'rightPortal', 'pd': 'animates', 'noPass': false}, // 右箭头

    // 101~120 其他的animates
    '101':{'cls': 'animates', 'id': 'crystalUp', 'pd': 'animates'},
    '102':{'cls': 'animates', 'id': 'crystalBottom', 'pd': 'animates'},
    '103':{'cls': 'animates', 'id': 'fire', 'pd': 'animates'},
    '104':{'cls': 'animates', 'id': 'switch', 'pd': 'animates'},

    ////////////////////////// NPC部分 //////////////////////////

    // 121-150 NPC
    '121':{'cls': 'npcs', 'id': 'man', 'pd': 'npcs'},
    '122':{'cls': 'npcs', 'id': 'woman', 'pd': 'npcs'},
    '123':{'cls': 'npcs', 'id': 'thief', 'pd': 'npcs'},
    '124':{'cls': 'npcs', 'id': 'fairy', 'pd': 'npcs'},
    '125':{'cls': 'npcs', 'id': 'magician', 'pd': 'npcs'},
    '126':{'cls': 'npcs', 'id': 'womanMagician', 'pd': 'npcs'},
    '127':{'cls': 'npcs', 'id': 'oldMan', 'pd': 'npcs'},
    '128':{'cls': 'npcs', 'id': 'child', 'pd': 'npcs'},
    '129':{'cls': 'npcs', 'id': 'wood', 'pd': 'npcs'},
    '130':{'cls': 'npcs', 'id': 'pinkShop', 'pd': 'npcs'},
    '131':{'cls': 'npcs', 'id': 'blueShop', 'pd': 'npcs'},
    '132':{'cls': 'npcs', 'id': 'princess', 'pd': 'npcs'},
    '133': {'cls': 'npc48', 'id': 'npc0', 'pd': 'npc48'},
    '134': {'cls': 'npc48', 'id': 'npc1', 'pd': 'npc48'},
    '135': {'cls': 'npc48', 'id': 'npc2', 'pd': 'npc48'},
    '136': {'cls': 'npc48', 'id': 'npc3', 'pd': 'npc48'},
    '137': {'cls': 'npc48', 'id': 'npc4', 'pd': 'npc48'},
    
    '181': {'cls': 'npcs', 'id': 'wlt', 'pd': 'npcs'},
    '182': {'cls': 'npcs', 'id': 'wt', 'pd': 'npcs'},
    '183': {'cls': 'npcs', 'id': 'wrt', 'pd': 'npcs'},
    '184': {'cls': 'npcs', 'id': 'wl', 'pd': 'npcs'},
    '185': {'cls': 'npcs', 'id': 'wc', 'pd': 'npcs'},
    '186': {'cls': 'npcs', 'id': 'wr', 'pd': 'npcs'},
    '187': {'cls': 'npcs', 'id': 'wlb', 'pd': 'npcs'},
    '188': {'cls': 'npcs', 'id': 'wrb', 'pd': 'npcs'},
    '189': {'cls': 'npcs', 'id': 'dlt', 'pd': 'npcs'},
    '190': {'cls': 'npcs', 'id': 'dt', 'pd': 'npcs'},
    '191': {'cls': 'npcs', 'id': 'drt', 'pd': 'npcs'},
    '192': {'cls': 'npcs', 'id': 'dl', 'pd': 'npcs'},
    '193': {'cls': 'npcs', 'id': 'dc', 'pd': 'npcs'},
    '194': {'cls': 'npcs', 'id': 'dr', 'pd': 'npcs'},
    '195': {'cls': 'npcs', 'id': 'dlb', 'pd': 'npcs'},
    '196': {'cls': 'npcs', 'id': 'drb', 'pd': 'npcs'},

    ////////////////////////// 其他部分 //////////////////////////

    // 171-200 其他（单向箭头、灯、箱子等等）
    '161':{'cls': 'terrains', 'id': 'arrowUp', 'pd': 'terrains', 'noPass': false, "cannotOut": ["left","right","down"], "cannotIn": ["down"]}, // 单向上箭头
    '162':{'cls': 'terrains', 'id': 'arrowDown', 'pd': 'terrains', 'noPass': false, "cannotOut": ["left","right","up"], "cannotIn": ["up"]}, // 单向下箭头
    '163':{'cls': 'terrains', 'id': 'arrowLeft', 'pd': 'terrains', 'noPass': false, "cannotOut": ["up","down","right"], "cannotIn": ["right"]}, // 单向左箭头
    '164':{'cls': 'terrains', 'id': 'arrowRight', 'pd': 'terrains', 'noPass': false, "cannotOut": ["up","down","left"], "cannotIn": ["left"]}, // 单向右箭头
    '165':{'cls': 'terrains', 'id': 'light', 'pd': 'terrains', 'trigger': 'changeLight', 'noPass': false}, // 灯
    '166':{'cls': 'terrains', 'id': 'darkLight', 'pd': 'terrains', 'noPass': true}, // 暗灯
    '167':{'cls': 'terrains', 'id': 'ski', 'pd': 'terrains', 'trigger': 'ski', 'noPass': false}, // 滑冰
    '168':{'cls': 'terrains', 'id': 'flower', 'pd': 'terrains', 'noPass': false}, // 花
    '169':{'cls': 'terrains', 'id': 'box', 'pd': 'terrains', 'trigger': 'pushBox', 'noPass': true}, // 箱子
    '170':{'cls': 'terrains', 'id': 'boxed', 'pd': 'terrains', 'trigger': 'pushBox', 'noPass': true}, // 完成的箱子

    ////////////////////////// 怪物部分 //////////////////////////

    // 201-300 怪物
    '201':{'cls': 'enemys', 'id': 'greenSlime', 'pd': 'enemys'},
    '202':{'cls': 'enemys', 'id': 'redSlime', 'pd': 'enemys'},
    '203':{'cls': 'enemys', 'id': 'blackSlime', 'pd': 'enemys'},
    '204':{'cls': 'enemys', 'id': 'slimelord', 'pd': 'enemys'},
    '205':{'cls': 'enemys', 'id': 'bat', 'pd': 'enemys'},
    '206':{'cls': 'enemys', 'id': 'bigBat', 'pd': 'enemys'},
    '207':{'cls': 'enemys', 'id': 'redBat', 'pd': 'enemys'},
    '208':{'cls': 'enemys', 'id': 'vampire', 'pd': 'enemys'},
    '209':{'cls': 'enemys', 'id': 'skeleton', 'pd': 'enemys'},
    '210':{'cls': 'enemys', 'id': 'skeletonSoilder', 'pd': 'enemys'},
    '211':{'cls': 'enemys', 'id': 'skeletonCaptain', 'pd': 'enemys'},
    '212':{'cls': 'enemys', 'id': 'ghostSkeleton', 'pd': 'enemys'},
    '213':{'cls': 'enemys', 'id': 'zombie', 'pd': 'enemys'},
    '214':{'cls': 'enemys', 'id': 'zombieKnight', 'pd': 'enemys'},
    '215':{'cls': 'enemys', 'id': 'rock', 'pd': 'enemys'},
    '216':{'cls': 'enemys', 'id': 'slimeMan', 'pd': 'enemys'},
    '217':{'cls': 'enemys', 'id': 'bluePriest', 'pd': 'enemys'},
    '218':{'cls': 'enemys', 'id': 'redPriest', 'pd': 'enemys'},
    '219':{'cls': 'enemys', 'id': 'brownWizard', 'pd': 'enemys'},
    '220':{'cls': 'enemys', 'id': 'redWizard', 'pd': 'enemys'},
    '221':{'cls': 'enemys', 'id': 'yellowGuard', 'pd': 'enemys'},
    '222':{'cls': 'enemys', 'id': 'blueGuard', 'pd': 'enemys'},
    '223':{'cls': 'enemys', 'id': 'redGuard', 'pd': 'enemys'},
    '224':{'cls': 'enemys', 'id': 'swordsman', 'pd': 'enemys'},
    '225':{'cls': 'enemys', 'id': 'soldier', 'pd': 'enemys'},
    '226':{'cls': 'enemys', 'id': 'yellowKnight', 'pd': 'enemys'},
    '227':{'cls': 'enemys', 'id': 'redKnight', 'pd': 'enemys'},
    '228':{'cls': 'enemys', 'id': 'darkKnight', 'pd': 'enemys'},
    '229':{'cls': 'enemys', 'id': 'blackKing', 'pd': 'enemys'},
    '230':{'cls': 'enemys', 'id': 'yellowKing', 'pd': 'enemys'},
    '231':{'cls': 'enemys', 'id': 'greenKing', 'pd': 'enemys'},
    '232':{'cls': 'enemys', 'id': 'blueKnight', 'pd': 'enemys'},
    '233':{'cls': 'enemys', 'id': 'goldSlime', 'pd': 'enemys'},
    '234':{'cls': 'enemys', 'id': 'poisonSkeleton', 'pd': 'enemys'},
    '235':{'cls': 'enemys', 'id': 'poisonBat', 'pd': 'enemys'},
    '236':{'cls': 'enemys', 'id': 'steelRock', 'pd': 'enemys'},
    '237':{'cls': 'enemys', 'id': 'skeletonPriest', 'pd': 'enemys'},
    '238':{'cls': 'enemys', 'id': 'skeletonKing', 'pd': 'enemys'},
    '239':{'cls': 'enemys', 'id': 'skeletonWizard', 'pd': 'enemys'},
    '240':{'cls': 'enemys', 'id': 'redSkeletonCaption', 'pd': 'enemys'},
    '241':{'cls': 'enemys', 'id': 'badHero', 'pd': 'enemys'},
    '242':{'cls': 'enemys', 'id': 'demon', 'pd': 'enemys'},
    '243':{'cls': 'enemys', 'id': 'demonPriest', 'pd': 'enemys'},
    '244':{'cls': 'enemys', 'id': 'goldHornSlime', 'pd': 'enemys'},
    '245':{'cls': 'enemys', 'id': 'redKing', 'pd': 'enemys'},
    '246':{'cls': 'enemys', 'id': 'whiteKing', 'pd': 'enemys'},
    '247':{'cls': 'enemys', 'id': 'blackMagician', 'pd': 'enemys'},
    '248':{'cls': 'enemys', 'id': 'silverSlime', 'pd': 'enemys'},
    '249':{'cls': 'enemys', 'id': 'swordEmperor', 'pd': 'enemys'},
    '250':{'cls': 'enemys', 'id': 'whiteHornSlime', 'pd': 'enemys'},
    '251':{'cls': 'enemys', 'id': 'badPrincess', 'pd': 'enemys'},
    '252':{'cls': 'enemys', 'id': 'badFairy', 'pd': 'enemys'},
    '253':{'cls': 'enemys', 'id': 'grayPriest', 'pd': 'enemys'},
    '254':{'cls': 'enemys', 'id': 'redSwordsman', 'pd': 'enemys'},
    '255':{'cls': 'enemys', 'id': 'whiteGhost', 'pd': 'enemys'},
    '256':{'cls': 'enemys', 'id': 'poisonZombie', 'pd': 'enemys'},
    '257':{'cls': 'enemys', 'id': 'magicDragon', 'pd': 'enemys'},
    '258':{'cls': 'enemys', 'id': 'octopus', 'pd': 'enemys'},
    '259':{'cls': 'enemys', 'id': 'darkFairy', 'pd': 'enemys'},
    '260':{'cls': 'enemys', 'id': 'greenKnight', 'pd': 'enemys'},

    '261':{'cls': 'enemy48', 'id': 'angel', 'pd': 'enemy48'},
    '262':{'cls': 'enemy48', 'id': 'elemental', 'pd': 'enemy48'},
    '263':{'cls': 'enemy48', 'id': 'steelGuard', 'pd': 'enemy48'},
    '264':{'cls': 'enemy48', 'id': 'evilBat', 'pd': 'enemy48'},

    ////////////////////////// 待定... //////////////////////////
	
	/*- - - - - - - - - - - - - - - 敌人1 - - - - - - - - - - - - - - -*/
	'300': {'cls': 'newEnemys', 'id': 'hym', 'pd': 'newEnemy1'}, //荷依米
	'301': {'cls': 'newEnemys', 'id': 'bhm', 'pd': 'newEnemy1'}, //倍荷玛
	'304': {'cls': 'newEnemys', 'id': 'rng', 'pd': 'newEnemy2'}, //软泥怪
	'307': {'cls': 'newEnemys', 'id': 'hymzs', 'pd': 'newEnemy3'}, //荷依米战士
	'308': {'cls': 'newEnemys', 'id': 'bhmzs', 'pd': 'newEnemy3'}, //倍荷玛战士
	'310': {'cls': 'newEnemys', 'id': 'hhdsz', 'pd': 'newEnemy4'}, //复活的死者
	
	
	/*- - - - - - - - - - - - - - - 敌人2 - - - - - - - - - - - - - - -*/
	
	/*- - - - - - - - - - - - - - - npc1 - - - - - - - - - - - - - - -*/
	'600': {'cls': 'roleNpcs', 'id': 'role1', 'pd': 'role1'},
	
	/*- - - - - - - - - - - - - - - 地形1 - - - - - - - - - - - - - - -*/
	'700':{'cls': 'terrains', 'id': 'grass', 'pd': 'terrains'}, //浅草地
	'701':{'cls': 'terrains', 'id': 'grass2', 'pd': 'terrains'}, //深草地
	/*- - - - - - - - - - - - - - - autofile1 - - - - - - - - - - - - - - -*/
	'800':{'cls': 'newTerrains', 'id': 'grasspit11', 'pd': 'grasspit', 'noPass': true}, //草坑1
	'801':{'cls': 'newTerrains', 'id': 'grasspit12', 'pd': 'grasspit', 'noPass': true}, //草坑2
	'802':{'cls': 'newTerrains', 'id': 'grasspit13', 'pd': 'grasspit', 'noPass': true}, //草坑3
	'803':{'cls': 'newTerrains', 'id': 'grasspit21', 'pd': 'grasspit', 'noPass': true}, //草坑4
	'804':{'cls': 'newTerrains', 'id': 'grasspit22', 'pd': 'grasspit', 'noPass': true}, //草坑5
	'805':{'cls': 'newTerrains', 'id': 'grasspit23', 'pd': 'grasspit', 'noPass': true}, //草坑6
	'806':{'cls': 'newTerrains', 'id': 'grasspit31', 'pd': 'grasspit', 'noPass': true}, //草坑7
	'807':{'cls': 'newTerrains', 'id': 'grasspit32', 'pd': 'grasspit', 'noPass': true}, //草坑8
	'808':{'cls': 'newTerrains', 'id': 'grasspit33', 'pd': 'grasspit', 'noPass': true}, //草坑9
	'809':{'cls': 'newTerrains', 'id': 'grasspit41', 'pd': 'grasspit', 'noPass': true}, //草坑10
	'810':{'cls': 'newTerrains', 'id': 'grasspit42', 'pd': 'grasspit', 'noPass': true}, //草坑11
	'811':{'cls': 'newTerrains', 'id': 'grasspit43', 'pd': 'grasspit', 'noPass': true}, //草坑12
	
	/*- - - - - - - - - - - - - - - 物品1 - - - - - - - - - - - - - - -*/
	'900':{'cls': 'items', 'id': 'halfRedJewel', 'pd': 'items'}, //半月红宝石
	'901':{'cls': 'items', 'id': 'halfBlueJewel', 'pd': 'items'}, //半月蓝宝石
	'902':{'cls': 'items', 'id': 'halfGreenJewel', 'pd': 'items'}, //半月绿宝石
	'903':{'cls': 'items', 'id': 'halfYellowJewel', 'pd': 'items'}, //半月黄宝石
}