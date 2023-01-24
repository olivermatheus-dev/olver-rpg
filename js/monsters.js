class Monster {
  constructor(level) {
    this.name = "default";
    this.typeMonster = "default";
    this.hp = 100;
    this.level = level;
    this.damage = 20;
    this.xpValue = 10;
  }

  startMonster(levelHero) {
    typeMonsterGeneretor();
    nameGeneretor();
    levelGeneretor(levelHero);
    hpGeneretor();
    damageGeneretor();
    xpValueGeneretor();
  }

  typeMonsterGeneretor() {
    /* aqui teremos uma array de tipos de monstros, o objetivo dessa
    função é apenas sortear um typeMonster aleatório e reatribuir ao this.typeMonster*/
    const typesMonsters = [
      "Dragon",
      "Orc",
      "Druid",
      "Thief",
      "Elf",
      "Witcher",
      "Caçador",
      "Mage",
      "Warrior",
      "Spider",
    ];
    let randomElement =
      typesMonsters[Math.floor(Math.random() * typesMonsters.length)];

    this.typeMonster = randomElement;
  }

  nameGeneretor() {
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

      this.name = randomElement;
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

      this.name = randomElement;
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

      this.name = randomElement;
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

      this.name = randomElement;
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

      this.name = randomElement;
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

      this.name = randomElement;
    }
  }
  levelGeneretor() {}
}
