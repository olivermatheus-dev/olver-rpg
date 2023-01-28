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
    this.hpMonsterMax = 0;
    this.baseDamageMonster = 0;
    this.xpValue = 0;
    this.imageMonster = 0;
    this.coinsValue = 0;
  }

  startMonster(levelHero) {
    this.typeMonsterGenerator();
    this.nameGenerator();
    this.levelGenerator(levelHero);
    this.hpMonsterGenerator();
    this.baseDamageMonsterGenerator();
    this.xpCoinValueGenerator();
  }

  typeMonsterGenerator() {
    /* aqui teremos uma array de tipos de monstros, o objetivo dessa
    função é apenas sortear um typeMonster aleatório e reatribuir ao this.typeMonster*/
    const typesMonsters = [
      "Draco",
      "Orc",
      "Druid",
      "Thief",
      "Elf",
      "Witcher",
      "Hunter",
      "Monk",
      "Scientist",
      "Explorer",
      "Samurai",
      "Paladin",
    ];
    let randomElement =
      typesMonsters[Math.floor(Math.random() * typesMonsters.length)];

    this.typeMonster = randomElement;
  }

  nameGenerator() {
    // Dragon
    if (this.typeMonster === "Draco") {
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
      this.imageMonster = "draco1.svg";
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
      const typesMonsters = [1, 2];
      let randomNumber =
        typesMonsters[Math.floor(Math.random() * typesMonsters.length)];
      this.imageMonster = `orc${randomNumber}.svg`;
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
      this.imageMonster = "druid1.svg";
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
      this.imageMonster = "thief1.svg";
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
      this.imageMonster = "elf1.svg";
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

      const typesMonsters = [1, 2, 3, 4, 5];
      let randomNumber =
        typesMonsters[Math.floor(Math.random() * typesMonsters.length)];
      this.imageMonster = `witcher${randomNumber}.svg`;
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
      this.imageMonster = "hunter1.svg";
      this.nameMonster = randomElement;
    }
    //Monk
    if (this.typeMonster === "Monk") {
      const hunterNames = [
        "Abhaya",
        "Aishi",
        "Anzan",
        "Bankei",
        "Bodhin",
        "Chen-chio",
        "Dae Shim",
        "Daiki",
        "Danan",
        "Eisho",
        "Fudoki",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];
      this.imageMonster = "monk1.svg";
      this.nameMonster = randomElement;
    }
    //Scientist
    if (this.typeMonster === "Scientist") {
      const hunterNames = [
        "Dr. Grief",
        "Prof. Aberrant",
        "Dr. Jeebies",
        "Dr. Ools",
        "Dr. Crow",
        "Dr. Jitters",
        "Dr. Jacket",
        "Dr. Clockwork",
        "Dr. Grim",
        "Dr. Hinks",
        "Dr. Venom",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];
      this.imageMonster = "scientist1.svg";
      this.nameMonster = randomElement;
    }
    //Explorer
    if (this.typeMonster === "Explorer") {
      const hunterNames = [
        "James",
        "Robert",
        "John Kart",
        "Michael Stan",
        "David Helis",
        "William Most",
        "Richard Hasm",
        "Joseph Pots",
        "Thomas Hanks",
        "Matthew",
        "Anthony",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];
      this.imageMonster = "explorer1.svg";
      this.nameMonster = randomElement;
    }
    //Samurai
    if (this.typeMonster === "Samurai") {
      const hunterNames = [
        "Asakura",
        "Imagawa",
        "Kenji",
        "Kusunoki",
        "Minamoto",
        "Moriyama",
        "Rinoie",
        "Saigo",
        "Tsunari",
        "Yasuke",
        "Yasumi",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];
      this.imageMonster = "samurai1.svg";
      this.nameMonster = randomElement;
    }
    //Paladin
    if (this.typeMonster === "Paladin") {
      const hunterNames = [
        "Randal",
        "Athelardus",
        "Wexford",
        "Tyrael",
        "Baratheus",
        "Magroth",
        "Harthal",
        "Guillemot",
        "Grummner",
        "Evelear",
        "Darian",
      ];
      let randomElement =
        hunterNames[Math.floor(Math.random() * hunterNames.length)];
      this.imageMonster = "paladin1.svg";
      this.nameMonster = randomElement;
    }
  }
  levelGenerator(levelHero) {
    if (levelHero > 10) {
      const rangeMult = [-3, -2, -1, 0, 0, 0, 1, 2];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterLevel = levelHero + randomMult;
      this.levelMonster = monsterLevel;
    } else {
      const rangeMult = [0, 0, 0, 0];
      let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
      let monsterLevel = levelHero + randomMult;
      this.levelMonster = monsterLevel;
    }
  }

  hpMonsterGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxMonsterHp = (100 * this.levelMonster * randomMult) / 2;
    this.hpMonster = Math.floor(auxMonsterHp);
    this.hpMonsterMax = Math.floor(auxMonsterHp);
  }

  baseDamageMonsterGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 2];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxMonsterDamage = (15 * this.levelMonster * randomMult) / 2;
    this.baseDamageMonster = auxMonsterDamage;
  }

  xpCoinValueGenerator() {
    const rangeMult = [0.8, 0.9, 1, 1, 1, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
    let randomMult = rangeMult[Math.floor(Math.random() * rangeMult.length)];
    let auxXpValueGenerator = (20 * this.levelMonster * randomMult) / 2;
    this.xpValue = auxXpValueGenerator;
    this.coinsValue = Math.floor(auxXpValueGenerator / 2);
  }
}
// ao instanciar o monstro aqui, não preciso de puxar ele para dentro do constructor
const monster = new Monster();
