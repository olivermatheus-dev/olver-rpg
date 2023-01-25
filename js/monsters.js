class Monster {
  constructor() {
    // this.typeMonster = typeMonsterGenerator();
    // this.nameMonster = nameGenerator();
    // this.levelMonster = levelGenerator(levelHero);
    // this.hpMonster = hpMonsterGenerator();
    // this.baseDamageMonster = baseDamageMonster();
    // this.xpValue = xpValueGenerator();
    // this.imageMonster = 0;
    this.typeMonster = 0;
    this.nameMonster = 0;
    this.levelMonster = 0;
    this.hpMonster = 0;
    this.baseDamageMonster = 0;
    this.xpValue = 0;
    this.imageMonster = 0;
  }

  startMonster(levelHero) {
    this.typeMonsterGenerator();
    this.nameGenerator();
    this.levelGenerator(levelHero);
    this.hpMonsterGenerator();
    this.baseDamageMonsterGenerator();
    this.xpValueGenerator();
  }

  typeMonsterGenerator() {
    /* aqui teremos uma array de tipos de monstros, o objetivo dessa
    função é apenas sortear um typeMonster aleatório e reatribuir ao this.typeMonster*/
    const typesMonsters = [
      "Dragon",
      "Orc",
      "Druid",
      "Thief",
      "Elf",
      "Witcher",
      "Hunter",
    ];
    let randomElement =
      typesMonsters[Math.floor(Math.random() * typesMonsters.length)];

    this.typeMonster = randomElement;
  }

  nameGenerator() {
    // Dragon
    if (this.typeMonster === "Dragon") {
      const dragonNames = [
        "Arman",
        "Dagahra",
        "Diaval",
        "Droggo",
        "Eborsisk",
        "Eborsisk",
        "Viseris",
        "Rhaegal",
        "Ghidorah",
        "Leviatã",
        "Lockheed",
        "Smaug",
        "Attor",
        "Dracul",
        "Drakon",
        "Fafnir",
        "Knucker",
        "Nagendra",
        "Ormr",
      ];
      let randomElement =
        dragonNames[Math.floor(Math.random() * dragonNames.length)];

      this.nameMonster = randomElement;
    }
    // Orc
    if (this.typeMonster === "Orc") {
      const orcNames = [
        "Akanor",
        "Bator",
        "Groak",
        "Orkush",
        "Torkag",
        "Zirgur",
        "Thohand",
        "Deakgu",
        "Vorgarag",
        "Urdad",
        "Vitgut",
        "Margulg",
        "Bruvor",
        "Kurz",
        "Udorry",
        "Kog",
        "Zeakgu",
        "Grommok",
        "Zodok",
        "Naguk",
      ];
      let randomElement = orcNames[Math.floor(Math.random() * orcNames.length)];

      this.nameMonster = randomElement;
    }
    // Druid
    if (this.typeMonster === "Druid") {
      const druidNames = [
        "Leolamin",
        "Tradak",
        "Gabnik",
        "Thohand",
        "Godmenr",
        "Wilhorn",
        "Otiice",
        "Cruhorn",
        "Wilben",
        "Horaver",
        "Udogretor",
        "Davlamin",
        "Davfire",
        "Ianhand",
        "Seatiln",
      ];

      let randomElement =
        druidNames[Math.floor(Math.random() * druidNames.length)];

      this.nameMonster = randomElement;
    }
    //Thief
    if (this.typeMonster === "Thief") {
      const thiefNames = [
        "Ealmuel",
        "Beo",
        "Lettson",
        "Turpin",
        "Giso",
        "Irmgard",
        "Bilbino",
      ];

      let randomElement =
        thiefNames[Math.floor(Math.random() * thiefNames.length)];

      this.nameMonster = randomElement;
    }
    //Elf
    if (this.typeMonster === "Elf") {
      const elfNames = [
        "Neldor",
        "Leokalyn",
        "Thallan",
        "Venwarin",
        "Gaelin",
        "Wysanorin",
        "Aimon",
        "Akkar",
        "Beldroth",
        "Folre",
        "Iefyr",
        "Quinorin",
        "Trisro",
        "Kieran",
        "Trafina",
        "Thuridan",
        "Elkhazel",
        "Delmuth",
        "Dorsys",
        "Raloyd",
        "Aralar",
        "Farric",
      ];
      let randomElement = elfNames[Math.floor(Math.random() * elfNames.length)];

      this.nameMonster = randomElement;
    }
    //Witcher
    if (this.typeMonster === "Witcher") {
      const witcherNames = [
        "Yelbella",
        "Merlara",
        "Prinna",
        "Nissa",
        "Elle",
        "Hiedra",
        "Hazel",
        "Layla",
        "Fylgia",
        "Felicity",
        "Millenys",
      ];
      let randomElement =
        witcherNames[Math.floor(Math.random() * witcherNames.length)];

      this.nameMonster = randomElement;
    }
    //Hunter
    if (this.typeMonster === "Hunter") {
      const hunterNames = [
        "Falcon",
        "Stranger",
        "Doom",
        "Scratch",
        "Taint",
        "Buzz",
        "Musket",
        "Hawk",
        "Hook",
        "Spike",
        "Wanne",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];

      this.nameMonster = randomElement;
    }
  }
  levelGenerator(levelHero) {
    if (levelHero > 4) {
      const rangeMult = [-3, -2, -1, 0, 0, 0, 1, 2, 3];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterLevel = levelHero + randomMult;
      this.levelMonster = monsterLevel;
    } else {
      const rangeMult = [0, 0, 0, 1, 2];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterLevel = levelHero + randomMult;
      this.levelMonster = monsterLevel;
    }
  }

  hpMonsterGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxMonsterHp = (100 * this.levelMonster * randomMult) / 2;
    this.hpMonster = auxMonsterHp;
  }

  baseDamageMonsterGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxMonsterDamage = (20 * this.levelMonster * randomMult) / 2;
    this.baseDamageMonster = auxMonsterDamage;
  }

  xpValueGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxXpValueGenerator = (10 * this.levelMonster * randomMult) / 2;
    this.xpValue = auxXpValueGenerator;
  }
}

const monster = new Monster();
monster.startMonster(1);
console.log(monster);
