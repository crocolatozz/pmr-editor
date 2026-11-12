// app.js - PMR Editor Logsheet (Operator 1, 2, 3) - Fixed Ultra-Speed PMR Export

const EMBEDDED_DATA = {
  operator1: [
  {
    "id": "p1",
    "index": 1,
    "equipment": "Level Oil U-FA122",
    "tag": "LG-801",
    "unit": "%",
    "label": "Level Oil U-FA122 (LG-801)",
    "type": "number"
  },
  {
    "id": "p2",
    "index": 2,
    "equipment": "Temp. U-FA122",
    "tag": "TG-802",
    "unit": "°C",
    "label": "Temp. U-FA122 (TG-802)",
    "type": "number"
  },
  {
    "id": "p3",
    "index": 3,
    "equipment": "Press. Exhaust Fan U-FA122",
    "tag": "PG-809",
    "unit": "Kg/cm²",
    "label": "Press. Exhaust Fan U-FA122 (PG-809)",
    "type": "number"
  },
  {
    "id": "p4",
    "index": 4,
    "equipment": "PDT OIL FILTER",
    "tag": "PDT-801",
    "unit": "Kg/cm²",
    "label": "PDT OIL FILTER (PDT-801)",
    "type": "number"
  },
  {
    "id": "p5",
    "index": 5,
    "equipment": "LUBE OIL COOLER U-EA122",
    "tag": "TG-802",
    "unit": "°C",
    "label": "LUBE OIL COOLER U-EA122 (TG-802)",
    "type": "number"
  },
  {
    "id": "p6",
    "index": 6,
    "equipment": "LUBE OIL COOLER U-EA122",
    "tag": "TG-803",
    "unit": "°C",
    "label": "LUBE OIL COOLER U-EA122 (TG-803)",
    "type": "number"
  },
  {
    "id": "p7",
    "index": 7,
    "equipment": "LUBE OIL COOLER U-EA122",
    "tag": "U-EA122A/B",
    "unit": "A/B",
    "label": "LUBE OIL COOLER U-EA122 (U-EA122A/B)",
    "type": "number"
  },
  {
    "id": "p8",
    "index": 8,
    "equipment": "L/O Pump GB101-GA122",
    "tag": "U-GA122A",
    "unit": "B",
    "label": "L/O Pump GB101-GA122 (U-GA122A)",
    "type": "number"
  },
  {
    "id": "p9",
    "index": 9,
    "equipment": "Ampere GA122A/B",
    "tag": "06II-813A/B",
    "unit": "Amp",
    "label": "Ampere GA122A/B (06II-813A/B)",
    "type": "number"
  },
  {
    "id": "p10",
    "index": 10,
    "equipment": "Suct. Press. GA122A/B",
    "tag": "PG-801/802",
    "unit": "Kg/cm ²",
    "label": "Suct. Press. GA122A/B (PG-801/802)",
    "type": "number"
  },
  {
    "id": "p11",
    "index": 11,
    "equipment": "Disc. Press. GA122A/B",
    "tag": "PG-804/805",
    "unit": "Kg/cm ²",
    "label": "Disc. Press. GA122A/B (PG-804/805)",
    "type": "number"
  },
  {
    "id": "p12",
    "index": 12,
    "equipment": "Control Oil Supply",
    "tag": "PG-807",
    "unit": "Kg/cm²",
    "label": "Control Oil Supply (PG-807)",
    "type": "number"
  },
  {
    "id": "p13",
    "index": 13,
    "equipment": "Lube Oil Supply",
    "tag": "PG-808",
    "unit": "Kg/cm²",
    "label": "Lube Oil Supply (PG-808)",
    "type": "number"
  },
  {
    "id": "p14",
    "index": 14,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-891",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-891)",
    "type": "text"
  },
  {
    "id": "p15",
    "index": 15,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-892",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-892)",
    "type": "text"
  },
  {
    "id": "p16",
    "index": 16,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-811",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-811)",
    "type": "text"
  },
  {
    "id": "p17",
    "index": 17,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-812",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-812)",
    "type": "text"
  },
  {
    "id": "p18",
    "index": 18,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-813",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-813)",
    "type": "text"
  },
  {
    "id": "p19",
    "index": 19,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-814",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-814)",
    "type": "text"
  },
  {
    "id": "p20",
    "index": 20,
    "equipment": "OIL RETURN BEARING TEMP",
    "tag": "TG-815",
    "unit": "°C",
    "label": "OIL RETURN BEARING TEMP (TG-815)",
    "type": "text"
  },
  {
    "id": "p21",
    "index": 21,
    "equipment": "Return Condensate Pump U-GA107A/B",
    "tag": "U-GA107A",
    "unit": "B",
    "label": "Return Condensate Pump U-GA107A/B (U-GA107A)",
    "type": "number"
  },
  {
    "id": "p22",
    "index": 22,
    "equipment": "Ampere U-GA107A/B",
    "tag": "II-107A/B",
    "unit": "Amp",
    "label": "Ampere U-GA107A/B (II-107A/B)",
    "type": "number"
  },
  {
    "id": "p23",
    "index": 23,
    "equipment": "Disc. Press. U-GA107A/B",
    "tag": "PG-918/923",
    "unit": "Kg/cm²",
    "label": "Disc. Press. U-GA107A/B (PG-918/923)",
    "type": "number"
  },
  {
    "id": "p24",
    "index": 24,
    "equipment": "PDT Press. Suct. Strainer U-GA107A/B",
    "tag": "PDG-924/925",
    "unit": "Kg/cm²",
    "label": "PDT Press. Suct. Strainer U-GA107A/B (PDG-924/925)",
    "type": "number"
  },
  {
    "id": "p25",
    "index": 25,
    "equipment": "U-EA105",
    "tag": "PG-901",
    "unit": "Kg/cm²",
    "label": "U-EA105 (PG-901)",
    "type": "number"
  },
  {
    "id": "p26",
    "index": 26,
    "equipment": "U-EA105",
    "tag": "TG-903",
    "unit": "°C",
    "label": "U-EA105 (TG-903)",
    "type": "number"
  },
  {
    "id": "p27",
    "index": 27,
    "equipment": "U-EA105",
    "tag": "LG-904",
    "unit": "%",
    "label": "U-EA105 (LG-904)",
    "type": "number"
  },
  {
    "id": "p28",
    "index": 28,
    "equipment": "U-EA105",
    "tag": "TG-105A",
    "unit": "°C",
    "label": "U-EA105 (TG-105A)",
    "type": "number"
  },
  {
    "id": "p29",
    "index": 29,
    "equipment": "U-EA105",
    "tag": "TG-105B",
    "unit": "°C",
    "label": "U-EA105 (TG-105B)",
    "type": "number"
  },
  {
    "id": "p30",
    "index": 30,
    "equipment": "U-EA105 INTER / AFTER COOLER",
    "tag": "PG-913",
    "unit": "Kg/cm²",
    "label": "U-EA105 INTER / AFTER COOLER (PG-913)",
    "type": "number"
  },
  {
    "id": "p31",
    "index": 31,
    "equipment": "U-EA105-EE1A",
    "tag": "PG-908B",
    "unit": "Kg/cm²",
    "label": "U-EA105-EE1A (PG-908B)",
    "type": "number"
  },
  {
    "id": "p32",
    "index": 32,
    "equipment": "U-EA105-EE1A",
    "tag": "PG-909B",
    "unit": "Kg/cm²",
    "label": "U-EA105-EE1A (PG-909B)",
    "type": "number"
  },
  {
    "id": "p33",
    "index": 33,
    "equipment": "U-EA105 EE1B",
    "tag": "PG-908C",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE1B (PG-908C)",
    "type": "number"
  },
  {
    "id": "p34",
    "index": 34,
    "equipment": "U-EA105 EE1B",
    "tag": "PG-909C",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE1B (PG-909C)",
    "type": "number"
  },
  {
    "id": "p35",
    "index": 35,
    "equipment": "U-EA105 INTER / AFTER COOLER",
    "tag": "TG-911",
    "unit": "°C",
    "label": "U-EA105 INTER / AFTER COOLER (TG-911)",
    "type": "number"
  },
  {
    "id": "p36",
    "index": 36,
    "equipment": "U-EA105 EE2A",
    "tag": "PG-908D",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE2A (PG-908D)",
    "type": "number"
  },
  {
    "id": "p37",
    "index": 37,
    "equipment": "U-EA105 EE2A",
    "tag": "PG-909D",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE2A (PG-909D)",
    "type": "number"
  },
  {
    "id": "p38",
    "index": 38,
    "equipment": "U-EA105 EE2B",
    "tag": "PG-908E",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE2B (PG-908E)",
    "type": "number"
  },
  {
    "id": "p39",
    "index": 39,
    "equipment": "U-EA105 EE2B",
    "tag": "PG-909E",
    "unit": "Kg/cm²",
    "label": "U-EA105 EE2B (PG-909E)",
    "type": "number"
  },
  {
    "id": "p40",
    "index": 40,
    "equipment": "U-EA105 INTER / AFTER COOLER",
    "tag": "TG-912",
    "unit": "°C",
    "label": "U-EA105 INTER / AFTER COOLER (TG-912)",
    "type": "number"
  },
  {
    "id": "p41",
    "index": 41,
    "equipment": "1 ST STAGE U-GB101",
    "tag": "LG-871",
    "unit": "%",
    "label": "1 ST STAGE U-GB101 (LG-871)",
    "type": "number"
  },
  {
    "id": "p42",
    "index": 42,
    "equipment": "1 ST STAGE U-GB101",
    "tag": "PG-871",
    "unit": "Kg/cm²",
    "label": "1 ST STAGE U-GB101 (PG-871)",
    "type": "number"
  },
  {
    "id": "p43",
    "index": 43,
    "equipment": "1 ST STAGE U-GB101",
    "tag": "TG-871",
    "unit": "°C",
    "label": "1 ST STAGE U-GB101 (TG-871)",
    "type": "number"
  },
  {
    "id": "p44",
    "index": 44,
    "equipment": "1 ST STAGE U-GB101",
    "tag": "PG-872",
    "unit": "Kg/cm²",
    "label": "1 ST STAGE U-GB101 (PG-872)",
    "type": "number"
  },
  {
    "id": "p45",
    "index": 45,
    "equipment": "1 ST STAGE U-GB101",
    "tag": "TG-872",
    "unit": "°C",
    "label": "1 ST STAGE U-GB101 (TG-872)",
    "type": "number"
  },
  {
    "id": "p46",
    "index": 46,
    "equipment": "2 ND STAGE U-GB101",
    "tag": "LG-885",
    "unit": "%",
    "label": "2 ND STAGE U-GB101 (LG-885)",
    "type": "number"
  },
  {
    "id": "p47",
    "index": 47,
    "equipment": "2 ND STAGE U-GB101",
    "tag": "PG-873",
    "unit": "Kg/cm²",
    "label": "2 ND STAGE U-GB101 (PG-873)",
    "type": "number"
  },
  {
    "id": "p48",
    "index": 48,
    "equipment": "2 ND STAGE U-GB101",
    "tag": "TG-873",
    "unit": "°C",
    "label": "2 ND STAGE U-GB101 (TG-873)",
    "type": "number"
  },
  {
    "id": "p49",
    "index": 49,
    "equipment": "2 ND STAGE U-GB101",
    "tag": "PG-874",
    "unit": "Kg/cm²",
    "label": "2 ND STAGE U-GB101 (PG-874)",
    "type": "number"
  },
  {
    "id": "p50",
    "index": 50,
    "equipment": "2 ND STAGE U-GB101",
    "tag": "TG-874",
    "unit": "°C",
    "label": "2 ND STAGE U-GB101 (TG-874)",
    "type": "number"
  },
  {
    "id": "p51",
    "index": 51,
    "equipment": "PRES PA IN",
    "tag": "PG-721",
    "unit": "Kg/cm²",
    "label": "PRES PA IN (PG-721)",
    "type": "number"
  },
  {
    "id": "p52",
    "index": 52,
    "equipment": "3 RD STAGE U-GB101",
    "tag": "LG-879",
    "unit": "%",
    "label": "3 RD STAGE U-GB101 (LG-879)",
    "type": "number"
  },
  {
    "id": "p53",
    "index": 53,
    "equipment": "3 RD STAGE U-GB101",
    "tag": "PG-875",
    "unit": "Kg/cm²",
    "label": "3 RD STAGE U-GB101 (PG-875)",
    "type": "number"
  },
  {
    "id": "p54",
    "index": 54,
    "equipment": "3 RD STAGE U-GB101",
    "tag": "TG-875",
    "unit": "°C",
    "label": "3 RD STAGE U-GB101 (TG-875)",
    "type": "number"
  },
  {
    "id": "p55",
    "index": 55,
    "equipment": "3 RD STAGE U-GB101",
    "tag": "PG-876",
    "unit": "Kg/cm²",
    "label": "3 RD STAGE U-GB101 (PG-876)",
    "type": "number"
  },
  {
    "id": "p56",
    "index": 56,
    "equipment": "3 RD STAGE U-GB101",
    "tag": "TG-876",
    "unit": "°C",
    "label": "3 RD STAGE U-GB101 (TG-876)",
    "type": "number"
  },
  {
    "id": "p57",
    "index": 57,
    "equipment": "4 TH STAGE U-GB101",
    "tag": "LG-883",
    "unit": "%",
    "label": "4 TH STAGE U-GB101 (LG-883)",
    "type": "number"
  },
  {
    "id": "p58",
    "index": 58,
    "equipment": "4 TH STAGE U-GB101",
    "tag": "PG-877",
    "unit": "Kg/cm²",
    "label": "4 TH STAGE U-GB101 (PG-877)",
    "type": "number"
  },
  {
    "id": "p59",
    "index": 59,
    "equipment": "4 TH STAGE U-GB101",
    "tag": "TG-877",
    "unit": "°C",
    "label": "4 TH STAGE U-GB101 (TG-877)",
    "type": "number"
  },
  {
    "id": "p60",
    "index": 60,
    "equipment": "4 TH STAGE U-GB101",
    "tag": "PG-878",
    "unit": "Kg/cm²",
    "label": "4 TH STAGE U-GB101 (PG-878)",
    "type": "number"
  },
  {
    "id": "p61",
    "index": 61,
    "equipment": "4 TH STAGE U-GB101",
    "tag": "TG-878",
    "unit": "°C",
    "label": "4 TH STAGE U-GB101 (TG-878)",
    "type": "number"
  },
  {
    "id": "p62",
    "index": 62,
    "equipment": "LABYRINTH SEAL",
    "tag": "PG-821",
    "unit": "Kg/cm2",
    "label": "LABYRINTH SEAL (PG-821)",
    "type": "number"
  },
  {
    "id": "p63",
    "index": 63,
    "equipment": "LABYRINTH SEAL",
    "tag": "PG-822",
    "unit": "Kg/cm2",
    "label": "LABYRINTH SEAL (PG-822)",
    "type": "number"
  },
  {
    "id": "p64",
    "index": 64,
    "equipment": "LABYRINTH SEAL",
    "tag": "PG-823",
    "unit": "Kg/cm2",
    "label": "LABYRINTH SEAL (PG-823)",
    "type": "number"
  },
  {
    "id": "p65",
    "index": 65,
    "equipment": "LABYRINTH SEAL",
    "tag": "FI-801",
    "unit": "kg/h",
    "label": "LABYRINTH SEAL (FI-801)",
    "type": "number"
  },
  {
    "id": "p66",
    "index": 66,
    "equipment": "TURBINE U-GT101",
    "tag": "PG-881",
    "unit": "Kg/cm2",
    "label": "TURBINE U-GT101 (PG-881)",
    "type": "number"
  },
  {
    "id": "p67",
    "index": 67,
    "equipment": "TURBINE U-GT101",
    "tag": "TG-881",
    "unit": "°C",
    "label": "TURBINE U-GT101 (TG-881)",
    "type": "number"
  },
  {
    "id": "p68",
    "index": 68,
    "equipment": "TURBINE U-GT101",
    "tag": "TG-882",
    "unit": "°C",
    "label": "TURBINE U-GT101 (TG-882)",
    "type": "number"
  },
  {
    "id": "p69",
    "index": 69,
    "equipment": "TURBINE U-GT101",
    "tag": "PG-883",
    "unit": "Kg/cm2",
    "label": "TURBINE U-GT101 (PG-883)",
    "type": "number"
  },
  {
    "id": "p70",
    "index": 70,
    "equipment": "TURBINE U-GT101",
    "tag": "TG-883",
    "unit": "°C",
    "label": "TURBINE U-GT101 (TG-883)",
    "type": "number"
  },
  {
    "id": "p71",
    "index": 71,
    "equipment": "TURBINE U-GT101",
    "tag": "PG-882",
    "unit": "Kg/cm2",
    "label": "TURBINE U-GT101 (PG-882)",
    "type": "number"
  },
  {
    "id": "p72",
    "index": 72,
    "equipment": "TURBINE U-GT101",
    "tag": "PG-885",
    "unit": "Kg/cm2",
    "label": "TURBINE U-GT101 (PG-885)",
    "type": "number"
  },
  {
    "id": "p73",
    "index": 73,
    "equipment": "TURBINE U-GT101",
    "tag": "TG-885",
    "unit": "Krpm",
    "label": "TURBINE U-GT101 (TG-885)",
    "type": "number"
  },
  {
    "id": "p74",
    "index": 74,
    "equipment": "TURBINE U-GT101",
    "tag": "HP G.V",
    "unit": "%",
    "label": "TURBINE U-GT101 (HP G.V)",
    "type": "number"
  },
  {
    "id": "p75",
    "index": 75,
    "equipment": "TURBINE U-GT101",
    "tag": "LP G.V",
    "unit": "%",
    "label": "TURBINE U-GT101 (LP G.V)",
    "type": "number"
  },
  {
    "id": "p76",
    "index": 76,
    "equipment": "U-FA104",
    "tag": "PG-131",
    "unit": "Kg/cm²",
    "label": "U-FA104 (PG-131)",
    "type": "number"
  },
  {
    "id": "p77",
    "index": 77,
    "equipment": "U-FA104",
    "tag": "LG-131",
    "unit": "%",
    "label": "U-FA104 (LG-131)",
    "type": "number"
  },
  {
    "id": "p78",
    "index": 78,
    "equipment": "Ammonia Boost-up Pump",
    "tag": "U-GA103A",
    "unit": "B",
    "label": "Ammonia Boost-up Pump (U-GA103A)",
    "type": "number"
  },
  {
    "id": "p79",
    "index": 79,
    "equipment": "Ampere GA103A/B",
    "tag": "06II-103A/B",
    "unit": "Amp",
    "label": "Ampere GA103A/B (06II-103A/B)",
    "type": "number"
  },
  {
    "id": "p80",
    "index": 80,
    "equipment": "Disc. Press. GA103A/B",
    "tag": "PG-134A/B",
    "unit": "Kg/cm²",
    "label": "Disc. Press. GA103A/B (PG-134A/B)",
    "type": "number"
  },
  {
    "id": "p81",
    "index": 81,
    "equipment": "Lvl. Glicol GA103A/B",
    "tag": "LG-933/934",
    "unit": "%",
    "label": "Lvl. Glicol GA103A/B (LG-933/934)",
    "type": "number"
  },
  {
    "id": "p82",
    "index": 82,
    "equipment": "Press. Glicol GA103A/B",
    "tag": "PG-933/PG-934",
    "unit": "Kg/cm²",
    "label": "Press. Glicol GA103A/B (PG-933/PG-934)",
    "type": "number"
  },
  {
    "id": "p83",
    "index": 83,
    "equipment": "NH3 FEED PUMP U-GA101A/B",
    "tag": "06II-101A/B",
    "unit": "amp",
    "label": "NH3 FEED PUMP U-GA101A/B (06II-101A/B)",
    "type": "text"
  },
  {
    "id": "p84",
    "index": 84,
    "equipment": "NH3 FEED PUMP U-GA101A/B",
    "tag": "PG-132",
    "unit": "Kg/cm²",
    "label": "NH3 FEED PUMP U-GA101A/B (PG-132)",
    "type": "text"
  },
  {
    "id": "p85",
    "index": 85,
    "equipment": "NH3 FEED PUMP U-GA101A/B",
    "tag": "PG-133",
    "unit": "Kg/cm²",
    "label": "NH3 FEED PUMP U-GA101A/B (PG-133)",
    "type": "text"
  },
  {
    "id": "p86",
    "index": 86,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "LG-630",
    "unit": "%",
    "label": "LUBE OIL SYSTEM U-GA101A/B (LG-630)",
    "type": "text"
  },
  {
    "id": "p87",
    "index": 87,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-630",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-630)",
    "type": "text"
  },
  {
    "id": "p88",
    "index": 88,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "PG-630",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA101A/B (PG-630)",
    "type": "text"
  },
  {
    "id": "p89",
    "index": 89,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "PG-631",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA101A/B (PG-631)",
    "type": "text"
  },
  {
    "id": "p90",
    "index": 90,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-631",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-631)",
    "type": "text"
  },
  {
    "id": "p91",
    "index": 91,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "PDG-630",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA101A/B (PDG-630)",
    "type": "text"
  },
  {
    "id": "p92",
    "index": 92,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-632",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-632)",
    "type": "text"
  },
  {
    "id": "p93",
    "index": 93,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-600",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-600)",
    "type": "text"
  },
  {
    "id": "p94",
    "index": 94,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-601",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-601)",
    "type": "text"
  },
  {
    "id": "p95",
    "index": 95,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-604",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-604)",
    "type": "text"
  },
  {
    "id": "p96",
    "index": 96,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-605",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-605)",
    "type": "text"
  },
  {
    "id": "p97",
    "index": 97,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-606",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-606)",
    "type": "text"
  },
  {
    "id": "p98",
    "index": 98,
    "equipment": "LUBE OIL SYSTEM U-GA101A/B",
    "tag": "TG-607",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA101A/B (TG-607)",
    "type": "text"
  },
  {
    "id": "p99",
    "index": 99,
    "equipment": "SEALING WATER U-GA101A/B",
    "tag": "PG-600",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA101A/B (PG-600)",
    "type": "number"
  },
  {
    "id": "p100",
    "index": 100,
    "equipment": "SEALING WATER U-GA101A/B",
    "tag": "PG-601",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA101A/B (PG-601)",
    "type": "number"
  },
  {
    "id": "p101",
    "index": 101,
    "equipment": "SEALING WATER U-GA101A/B",
    "tag": "PG-602",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA101A/B (PG-602)",
    "type": "number"
  },
  {
    "id": "p102",
    "index": 102,
    "equipment": "SEALING WATER U-GA101A/B",
    "tag": "TG-602",
    "unit": "°C",
    "label": "SEALING WATER U-GA101A/B (TG-602)",
    "type": "number"
  },
  {
    "id": "p103",
    "index": 103,
    "equipment": "SEALING WATER U-GA101A/B",
    "tag": "TG-603",
    "unit": "°C",
    "label": "SEALING WATER U-GA101A/B (TG-603)",
    "type": "number"
  },
  {
    "id": "p104",
    "index": 104,
    "equipment": "CARBAMAT FEED PUMP U-GA102A/B",
    "tag": "06II-102A/B",
    "unit": "Amp",
    "label": "CARBAMAT FEED PUMP U-GA102A/B (06II-102A/B)",
    "type": "text"
  },
  {
    "id": "p105",
    "index": 105,
    "equipment": "CARBAMAT FEED PUMP U-GA102A/B",
    "tag": "PG-116",
    "unit": "Kg/cm²",
    "label": "CARBAMAT FEED PUMP U-GA102A/B (PG-116)",
    "type": "text"
  },
  {
    "id": "p106",
    "index": 106,
    "equipment": "CARBAMAT FEED PUMP U-GA102A/B",
    "tag": "PG-106",
    "unit": "MPa",
    "label": "CARBAMAT FEED PUMP U-GA102A/B (PG-106)",
    "type": "text"
  },
  {
    "id": "p107",
    "index": 107,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "LG-680",
    "unit": "%",
    "label": "LUBE OIL SYSTEM U-GA102A/B (LG-680)",
    "type": "text"
  },
  {
    "id": "p108",
    "index": 108,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-680",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-680)",
    "type": "text"
  },
  {
    "id": "p109",
    "index": 109,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "PG-680",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA102A/B (PG-680)",
    "type": "text"
  },
  {
    "id": "p110",
    "index": 110,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "PG-681",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA102A/B (PG-681)",
    "type": "text"
  },
  {
    "id": "p111",
    "index": 111,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-681",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-681)",
    "type": "text"
  },
  {
    "id": "p112",
    "index": 112,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "PG-682",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA102A/B (PG-682)",
    "type": "text"
  },
  {
    "id": "p113",
    "index": 113,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "PDG-680",
    "unit": "M Pa",
    "label": "LUBE OIL SYSTEM U-GA102A/B (PDG-680)",
    "type": "text"
  },
  {
    "id": "p114",
    "index": 114,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-650",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-650)",
    "type": "text"
  },
  {
    "id": "p115",
    "index": 115,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-651",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-651)",
    "type": "text"
  },
  {
    "id": "p116",
    "index": 116,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-654",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-654)",
    "type": "text"
  },
  {
    "id": "p117",
    "index": 117,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-655",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-655)",
    "type": "text"
  },
  {
    "id": "p118",
    "index": 118,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-656",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-656)",
    "type": "text"
  },
  {
    "id": "p119",
    "index": 119,
    "equipment": "LUBE OIL SYSTEM U-GA102A/B",
    "tag": "TG-657",
    "unit": "°C",
    "label": "LUBE OIL SYSTEM U-GA102A/B (TG-657)",
    "type": "text"
  },
  {
    "id": "p120",
    "index": 120,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "PG-650",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA102A/B (PG-650)",
    "type": "number"
  },
  {
    "id": "p121",
    "index": 121,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "PG-651",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA102A/B (PG-651)",
    "type": "number"
  },
  {
    "id": "p122",
    "index": 122,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "PG-652",
    "unit": "Kg/cm²",
    "label": "SEALING WATER U-GA102A/B (PG-652)",
    "type": "number"
  },
  {
    "id": "p123",
    "index": 123,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "TG-652",
    "unit": "°C",
    "label": "SEALING WATER U-GA102A/B (TG-652)",
    "type": "number"
  },
  {
    "id": "p124",
    "index": 124,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "TG-653",
    "unit": "°C",
    "label": "SEALING WATER U-GA102A/B (TG-653)",
    "type": "number"
  },
  {
    "id": "p125",
    "index": 125,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "FI-650",
    "unit": "m³/h",
    "label": "SEALING WATER U-GA102A/B (FI-650)",
    "type": "number"
  },
  {
    "id": "p126",
    "index": 126,
    "equipment": "SEALING WATER U-GA102A/B",
    "tag": "FI-651",
    "unit": "m³/h",
    "label": "SEALING WATER U-GA102A/B (FI-651)",
    "type": "number"
  },
  {
    "id": "p127",
    "index": 127,
    "equipment": "SEALING WATER",
    "tag": "LG-701",
    "unit": "%",
    "label": "SEALING WATER (LG-701)",
    "type": "number"
  },
  {
    "id": "p128",
    "index": 128,
    "equipment": "SEALING WATER",
    "tag": "06II-121A/B",
    "unit": "Amp",
    "label": "SEALING WATER (06II-121A/B)",
    "type": "number"
  },
  {
    "id": "p129",
    "index": 129,
    "equipment": "SEALING WATER",
    "tag": "PG-702",
    "unit": "Kg/cm²",
    "label": "SEALING WATER (PG-702)",
    "type": "number"
  },
  {
    "id": "p130",
    "index": 130,
    "equipment": "SEALING WATER",
    "tag": "PDT-709",
    "unit": "mmH2O",
    "label": "SEALING WATER (PDT-709)",
    "type": "number"
  },
  {
    "id": "p131",
    "index": 131,
    "equipment": "STEAM SATURATION DRUM U-FA101",
    "tag": "LG-102",
    "unit": "%",
    "label": "STEAM SATURATION DRUM U-FA101 (LG-102)",
    "type": "text"
  },
  {
    "id": "p132",
    "index": 132,
    "equipment": "STEAM CONDENSATE TANK U-FA103",
    "tag": "LG-705",
    "unit": "%",
    "label": "STEAM CONDENSATE TANK U-FA103 (LG-705)",
    "type": "text"
  },
  {
    "id": "p133",
    "index": 133,
    "equipment": "STEAM CONDENSATE PUMP U-GA106A/B",
    "tag": "06II-106A/B",
    "unit": "Amp",
    "label": "STEAM CONDENSATE PUMP U-GA106A/B (06II-106A/B)",
    "type": "text"
  },
  {
    "id": "p134",
    "index": 134,
    "equipment": "STEAM CONDENSATE PUMP U-GA106A/B",
    "tag": "PG-701",
    "unit": "Kg/cm²",
    "label": "STEAM CONDENSATE PUMP U-GA106A/B (PG-701)",
    "type": "text"
  },
  {
    "id": "p135",
    "index": 135,
    "equipment": "LOW PRESS FLOODING PUMP U-GA104A/B",
    "tag": "06II-104A/B",
    "unit": "Amp",
    "label": "LOW PRESS FLOODING PUMP U-GA104A/B (06II-104A/B)",
    "type": "text"
  },
  {
    "id": "p136",
    "index": 136,
    "equipment": "LOW PRESS FLOODING PUMP U-GA104A/B",
    "tag": "PG-703",
    "unit": "Kg/cm²",
    "label": "LOW PRESS FLOODING PUMP U-GA104A/B (PG-703)",
    "type": "text"
  },
  {
    "id": "p137",
    "index": 137,
    "equipment": "STEAM CONDENSATE CIRCULATION PUMP U-GA109A/B",
    "tag": "06II-109A/B",
    "unit": "Amp",
    "label": "STEAM CONDENSATE CIRCULATION PUMP U-GA109A/B (06II-109A/B)",
    "type": "text"
  },
  {
    "id": "p138",
    "index": 138,
    "equipment": "STEAM CONDENSATE CIRCULATION PUMP U-GA109A/B",
    "tag": "PG-109",
    "unit": "Kg/cm²",
    "label": "STEAM CONDENSATE CIRCULATION PUMP U-GA109A/B (PG-109)",
    "type": "text"
  },
  {
    "id": "p139",
    "index": 139,
    "equipment": "STEAM CONDENSATE MAKEUP PUMP U-GA110A/B",
    "tag": "PG-118",
    "unit": "Kg/cm²",
    "label": "STEAM CONDENSATE MAKEUP PUMP U-GA110A/B (PG-118)",
    "type": "text"
  },
  {
    "id": "p140",
    "index": 140,
    "equipment": "UREA SOLUTION TANK U-FA201",
    "tag": "FI-210",
    "unit": "kg/h",
    "label": "UREA SOLUTION TANK U-FA201 (FI-210)",
    "type": "number"
  },
  {
    "id": "p141",
    "index": 141,
    "equipment": "Equalizing U-FA201",
    "tag": "EQ-201",
    "unit": "Putaran",
    "label": "Equalizing U-FA201 (EQ-201)",
    "type": "number"
  },
  {
    "id": "p142",
    "index": 142,
    "equipment": "EC201 Coil di U-FA201",
    "tag": "EC-201",
    "unit": "Putaran",
    "label": "EC201 Coil di U-FA201 (EC-201)",
    "type": "number"
  },
  {
    "id": "p143",
    "index": 143,
    "equipment": "UREA SOLUTION PUMP U-GA201A/B",
    "tag": "06II-201A/B",
    "unit": "Amp",
    "label": "UREA SOLUTION PUMP U-GA201A/B (06II-201A/B)",
    "type": "text"
  },
  {
    "id": "p144",
    "index": 144,
    "equipment": "UREA SOLUTION PUMP U-GA201A/B",
    "tag": "PG-205",
    "unit": "Kg/cm²",
    "label": "UREA SOLUTION PUMP U-GA201A/B (PG-205)",
    "type": "text"
  },
  {
    "id": "p145",
    "index": 145,
    "equipment": "DRAIN RECOVERY PUMP U-GA504",
    "tag": "U-GA504M",
    "unit": "ON/OFF",
    "label": "DRAIN RECOVERY PUMP U-GA504 (U-GA504M)",
    "type": "text"
  },
  {
    "id": "p146",
    "index": 146,
    "equipment": "DRAIN RECOVERY PUMP U-GA504",
    "tag": "PG-709",
    "unit": "Kg/cm²",
    "label": "DRAIN RECOVERY PUMP U-GA504 (PG-709)",
    "type": "text"
  },
  {
    "id": "p147",
    "index": 147,
    "equipment": "EFFLUENT WATER PUMP U-GA704",
    "tag": "U-GA704M",
    "unit": "ON/OFF",
    "label": "EFFLUENT WATER PUMP U-GA704 (U-GA704M)",
    "type": "text"
  },
  {
    "id": "p148",
    "index": 148,
    "equipment": "EFFLUENT WATER PUMP U-GA704",
    "tag": "PG-704",
    "unit": "Kg/cm²",
    "label": "EFFLUENT WATER PUMP U-GA704 (PG-704)",
    "type": "text"
  },
  {
    "id": "p149",
    "index": 149,
    "equipment": "CARBONATE SOLUTION TANK U-FA401",
    "tag": "TG-401",
    "unit": "°C",
    "label": "CARBONATE SOLUTION TANK U-FA401 (TG-401)",
    "type": "number"
  },
  {
    "id": "p150",
    "index": 150,
    "equipment": "CARBONATE SOLUTION TANK U-FA401",
    "tag": "FI-405",
    "unit": "kg/h",
    "label": "CARBONATE SOLUTION TANK U-FA401 (FI-405)",
    "type": "number"
  },
  {
    "id": "p151",
    "index": 151,
    "equipment": "CARBONATE SOLUTION TANK U-GA403",
    "tag": "FI-403",
    "unit": "Ton/h",
    "label": "CARBONATE SOLUTION TANK U-GA403 (FI-403)",
    "type": "number"
  },
  {
    "id": "p152",
    "index": 152,
    "equipment": "CARBAMAT BOOST-UP PUMP U-GA401",
    "tag": "06II-401A/B",
    "unit": "Amp",
    "label": "CARBAMAT BOOST-UP PUMP U-GA401 (06II-401A/B)",
    "type": "text"
  },
  {
    "id": "p153",
    "index": 153,
    "equipment": "CARBAMAT BOOST-UP PUMP U-GA401",
    "tag": "PG-401",
    "unit": "Kg/cm²",
    "label": "CARBAMAT BOOST-UP PUMP U-GA401 (PG-401)",
    "type": "text"
  },
  {
    "id": "p154",
    "index": 154,
    "equipment": "HP ABSORBENT PUMP U-GA402",
    "tag": "06II-402A/B",
    "unit": "Amp",
    "label": "HP ABSORBENT PUMP U-GA402 (06II-402A/B)",
    "type": "text"
  },
  {
    "id": "p155",
    "index": 155,
    "equipment": "HP ABSORBENT PUMP U-GA402",
    "tag": "PG-402",
    "unit": "Kg/cm²",
    "label": "HP ABSORBENT PUMP U-GA402 (PG-402)",
    "type": "text"
  },
  {
    "id": "p156",
    "index": 156,
    "equipment": "NO.2 HP ABSORBENT PUMP U-GA404",
    "tag": "06II-404A/B",
    "unit": "Amp",
    "label": "NO.2 HP ABSORBENT PUMP U-GA404 (06II-404A/B)",
    "type": "text"
  },
  {
    "id": "p157",
    "index": 157,
    "equipment": "NO.2 HP ABSORBENT PUMP U-GA404",
    "tag": "PG-404",
    "unit": "Kg/cm²",
    "label": "NO.2 HP ABSORBENT PUMP U-GA404 (PG-404)",
    "type": "text"
  },
  {
    "id": "p158",
    "index": 158,
    "equipment": "TEMPERED WATER PUMP U-GA405",
    "tag": "06II-405A/B",
    "unit": "Amp",
    "label": "TEMPERED WATER PUMP U-GA405 (06II-405A/B)",
    "type": "text"
  },
  {
    "id": "p159",
    "index": 159,
    "equipment": "TEMPERED WATER PUMP U-GA405",
    "tag": "PG-407",
    "unit": "Kg/cm²",
    "label": "TEMPERED WATER PUMP U-GA405 (PG-407)",
    "type": "text"
  },
  {
    "id": "p160",
    "index": 160,
    "equipment": "N2 COMPRESSOR U-GB701",
    "tag": "06-II171A/B",
    "unit": "Amp",
    "label": "N2 COMPRESSOR U-GB701 (06-II171A/B)",
    "type": "text"
  },
  {
    "id": "p161",
    "index": 161,
    "equipment": "N2 COMPRESSOR U-GB701",
    "tag": "PG-971",
    "unit": "Kg/cm²",
    "label": "N2 COMPRESSOR U-GB701 (PG-971)",
    "type": "text"
  },
  {
    "id": "p162",
    "index": 162,
    "equipment": "N2 COMPRESSOR U-GB701",
    "tag": "PG-972",
    "unit": "Kg/cm²",
    "label": "N2 COMPRESSOR U-GB701 (PG-972)",
    "type": "text"
  },
  {
    "id": "p163",
    "index": 163,
    "equipment": "SPT001",
    "tag": "FI-744",
    "unit": "kg/h",
    "label": "SPT001 (FI-744)",
    "type": "number"
  },
  {
    "id": "p164",
    "index": 164,
    "equipment": "SPT002",
    "tag": "FI-745",
    "unit": "kg/h",
    "label": "SPT002 (FI-745)",
    "type": "number"
  },
  {
    "id": "p165",
    "index": 165,
    "equipment": "SPT003",
    "tag": "FI-747",
    "unit": "kg/h",
    "label": "SPT003 (FI-747)",
    "type": "number"
  },
  {
    "id": "p166",
    "index": 166,
    "equipment": "D-51001",
    "tag": "LG-302",
    "unit": "%",
    "label": "D-51001 (LG-302)",
    "type": "number"
  },
  {
    "id": "p167",
    "index": 167,
    "equipment": "D-51001",
    "tag": "TG-301",
    "unit": "°C",
    "label": "D-51001 (TG-301)",
    "type": "number"
  }
],
  operator2: [
  {
    "id": "p1",
    "index": 1,
    "equipment": "U-EA101",
    "tag": "PG-101",
    "unit": "kg/cm2G",
    "label": "U-EA101 (PG-101)",
    "type": "number"
  },
  {
    "id": "p2",
    "index": 2,
    "equipment": "U-EA102",
    "tag": "TG-117",
    "unit": "°C",
    "label": "U-EA102 (TG-117)",
    "type": "number"
  },
  {
    "id": "p3",
    "index": 3,
    "equipment": "U-EA103",
    "tag": "PG-108",
    "unit": "kg/cm2G",
    "label": "U-EA103 (PG-108)",
    "type": "number"
  },
  {
    "id": "p4",
    "index": 4,
    "equipment": "U-FA101",
    "tag": "PG-107",
    "unit": "kg/cm2G",
    "label": "U-FA101 (PG-107)",
    "type": "number"
  },
  {
    "id": "p5",
    "index": 5,
    "equipment": "U-FA101",
    "tag": "LG-102",
    "unit": "%",
    "label": "U-FA101 (LG-102)",
    "type": "number"
  },
  {
    "id": "p6",
    "index": 6,
    "equipment": "U-FA102",
    "tag": "PG-104",
    "unit": "kg/cm2G",
    "label": "U-FA102 (PG-104)",
    "type": "number"
  },
  {
    "id": "p7",
    "index": 7,
    "equipment": "U-FA102",
    "tag": "LG-101",
    "unit": "%",
    "label": "U-FA102 (LG-101)",
    "type": "number"
  },
  {
    "id": "p8",
    "index": 8,
    "equipment": "U-FA102",
    "tag": "FI-110AA",
    "unit": "t/h",
    "label": "U-FA102 (FI-110AA)",
    "type": "number"
  },
  {
    "id": "p9",
    "index": 9,
    "equipment": "U-FA102",
    "tag": "TG-102",
    "unit": "°C",
    "label": "U-FA102 (TG-102)",
    "type": "number"
  },
  {
    "id": "p10",
    "index": 10,
    "equipment": "U-FA105",
    "tag": "PG-117",
    "unit": "kg/cm2G",
    "label": "U-FA105 (PG-117)",
    "type": "number"
  },
  {
    "id": "p11",
    "index": 11,
    "equipment": "U-FA105",
    "tag": "LG-104",
    "unit": "%",
    "label": "U-FA105 (LG-104)",
    "type": "number"
  },
  {
    "id": "p12",
    "index": 12,
    "equipment": "U-DA201",
    "tag": "PG-203",
    "unit": "kg/cm2G",
    "label": "U-DA201 (PG-203)",
    "type": "number"
  },
  {
    "id": "p13",
    "index": 13,
    "equipment": "U-DA201",
    "tag": "FI-201",
    "unit": "kg/h",
    "label": "U-DA201 (FI-201)",
    "type": "number"
  },
  {
    "id": "p14",
    "index": 14,
    "equipment": "U-FA206",
    "tag": "LG-202",
    "unit": "%",
    "label": "U-FA206 (LG-202)",
    "type": "number"
  },
  {
    "id": "p15",
    "index": 15,
    "equipment": "U-DA202",
    "tag": "PG-204",
    "unit": "kg/cm2G",
    "label": "U-DA202 (PG-204)",
    "type": "number"
  },
  {
    "id": "p16",
    "index": 16,
    "equipment": "U-FA207",
    "tag": "LG-201",
    "unit": "%",
    "label": "U-FA207 (LG-201)",
    "type": "number"
  },
  {
    "id": "p17",
    "index": 17,
    "equipment": "U-EA201",
    "tag": "PG-209",
    "unit": "kg/cm2G",
    "label": "U-EA201 (PG-209)",
    "type": "number"
  },
  {
    "id": "p18",
    "index": 18,
    "equipment": "U-FA202",
    "tag": "PG-218",
    "unit": "mmHg",
    "label": "U-FA202 (PG-218)",
    "type": "number"
  },
  {
    "id": "p19",
    "index": 19,
    "equipment": "U-FA202",
    "tag": "FI-209",
    "unit": "kg/h",
    "label": "U-FA202 (FI-209)",
    "type": "number"
  },
  {
    "id": "p20",
    "index": 20,
    "equipment": "U-EA202",
    "tag": "PG-212",
    "unit": "kg/cm2G",
    "label": "U-EA202 (PG-212)",
    "type": "number"
  },
  {
    "id": "p21",
    "index": 21,
    "equipment": "U-FA203",
    "tag": "PG-210",
    "unit": "mmHg",
    "label": "U-FA203 (PG-210)",
    "type": "number"
  },
  {
    "id": "p22",
    "index": 22,
    "equipment": "U-FA203",
    "tag": "FI-206",
    "unit": "kg/h",
    "label": "U-FA203 (FI-206)",
    "type": "number"
  },
  {
    "id": "p23",
    "index": 23,
    "equipment": "U-FA203",
    "tag": "SG-FA203",
    "unit": "%",
    "label": "U-FA203 (SG-FA203)",
    "type": "number"
  },
  {
    "id": "p24",
    "index": 24,
    "equipment": "U-EE201",
    "tag": "PG-211",
    "unit": "kg/cm2G",
    "label": "U-EE201 (PG-211)",
    "type": "number"
  },
  {
    "id": "p25",
    "index": 25,
    "equipment": "U-GA204",
    "tag": "U-GA204AM/BM",
    "unit": "A/B",
    "label": "U-GA204 (U-GA204AM/BM)",
    "type": "text"
  },
  {
    "id": "p26",
    "index": 26,
    "equipment": "U-GA204",
    "tag": "06II-204A/B",
    "unit": "Amp.",
    "label": "U-GA204 (06II-204A/B)",
    "type": "number"
  },
  {
    "id": "p27",
    "index": 27,
    "equipment": "U-GA204",
    "tag": "PG-213",
    "unit": "kg/cm2G",
    "label": "U-GA204 (PG-213)",
    "type": "number"
  },
  {
    "id": "p28",
    "index": 28,
    "equipment": "U-EA401",
    "tag": "PG-202",
    "unit": "kg/cm2G",
    "label": "U-EA401 (PG-202)",
    "type": "number"
  },
  {
    "id": "p29",
    "index": 29,
    "equipment": "U-EA401",
    "tag": "PG-406",
    "unit": "kg/cm2G",
    "label": "U-EA401 (PG-406)",
    "type": "number"
  },
  {
    "id": "p30",
    "index": 30,
    "equipment": "Sight Glass U-EA401",
    "tag": "SG-EA401",
    "unit": "%",
    "label": "Sight Glass U-EA401 (SG-EA401)",
    "type": "number"
  },
  {
    "id": "p31",
    "index": 31,
    "equipment": "Sight Glass U-DA401",
    "tag": "SG-DA401",
    "unit": "%",
    "label": "Sight Glass U-DA401 (SG-DA401)",
    "type": "number"
  },
  {
    "id": "p32",
    "index": 32,
    "equipment": "FI-402 for U-EA402",
    "tag": "FI-402",
    "unit": "kg/h",
    "label": "FI-402 for U-EA402 (FI-402)",
    "type": "number"
  },
  {
    "id": "p33",
    "index": 33,
    "equipment": "Sight Glass U-EA402",
    "tag": "SG-EA402",
    "unit": "%",
    "label": "Sight Glass U-EA402 (SG-EA402)",
    "type": "number"
  },
  {
    "id": "p34",
    "index": 34,
    "equipment": "Press. U-FA402",
    "tag": "PG-408",
    "unit": "kg/cm2G",
    "label": "Press. U-FA402 (PG-408)",
    "type": "number"
  },
  {
    "id": "p35",
    "index": 35,
    "equipment": "Level Glass U-FA402",
    "tag": "LG-401",
    "unit": "%",
    "label": "Level Glass U-FA402 (LG-401)",
    "type": "number"
  },
  {
    "id": "p36",
    "index": 36,
    "equipment": "U-EA403A/B",
    "tag": "U-EA403A/B",
    "unit": "A/B",
    "label": "U-EA403A/B (U-EA403A/B)",
    "type": "number"
  },
  {
    "id": "p37",
    "index": 37,
    "equipment": "U-EA403",
    "tag": "TG-403",
    "unit": "°C",
    "label": "U-EA403 (TG-403)",
    "type": "number"
  },
  {
    "id": "p38",
    "index": 38,
    "equipment": "U-EA403",
    "tag": "TG-407",
    "unit": "°C",
    "label": "U-EA403 (TG-407)",
    "type": "number"
  },
  {
    "id": "p39",
    "index": 39,
    "equipment": "U-EA501",
    "tag": "PG-501",
    "unit": "mmHg",
    "label": "U-EA501 (PG-501)",
    "type": "number"
  },
  {
    "id": "p40",
    "index": 40,
    "equipment": "U-EA501",
    "tag": "TG-501",
    "unit": "°C",
    "label": "U-EA501 (TG-501)",
    "type": "number"
  },
  {
    "id": "p41",
    "index": 41,
    "equipment": "U-EA503",
    "tag": "PG-503",
    "unit": "mmHg",
    "label": "U-EA503 (PG-503)",
    "type": "number"
  },
  {
    "id": "p42",
    "index": 42,
    "equipment": "U-EA503",
    "tag": "TG-503",
    "unit": "°C",
    "label": "U-EA503 (TG-503)",
    "type": "number"
  },
  {
    "id": "p43",
    "index": 43,
    "equipment": "U-EA502",
    "tag": "PG-502",
    "unit": "mmHg",
    "label": "U-EA502 (PG-502)",
    "type": "number"
  },
  {
    "id": "p44",
    "index": 44,
    "equipment": "U-EA502",
    "tag": "TG-502",
    "unit": "°C",
    "label": "U-EA502 (TG-502)",
    "type": "number"
  },
  {
    "id": "p45",
    "index": 45,
    "equipment": "U-EA506",
    "tag": "PG-512",
    "unit": "mmHg",
    "label": "U-EA506 (PG-512)",
    "type": "number"
  },
  {
    "id": "p46",
    "index": 46,
    "equipment": "U-EA506",
    "tag": "TG-512",
    "unit": "°C",
    "label": "U-EA506 (TG-512)",
    "type": "number"
  },
  {
    "id": "p47",
    "index": 47,
    "equipment": "U-EE501",
    "tag": "PG-214",
    "unit": "kg/cm2G",
    "label": "U-EE501 (PG-214)",
    "type": "number"
  },
  {
    "id": "p48",
    "index": 48,
    "equipment": "U-EE502",
    "tag": "PG-215",
    "unit": "kg/cm2G",
    "label": "U-EE502 (PG-215)",
    "type": "number"
  },
  {
    "id": "p49",
    "index": 49,
    "equipment": "NITROGEN",
    "tag": "FI-742",
    "unit": "kg/h",
    "label": "NITROGEN (FI-742)",
    "type": "number"
  },
  {
    "id": "p50",
    "index": 50,
    "equipment": "NITROGEN",
    "tag": "FI-743",
    "unit": "kg/h",
    "label": "NITROGEN (FI-743)",
    "type": "number"
  },
  {
    "id": "p51",
    "index": 51,
    "equipment": "NITROGEN",
    "tag": "FI-746",
    "unit": "kg/h",
    "label": "NITROGEN (FI-746)",
    "type": "number"
  }
],
  operator3: [
  {
    "id": "p1",
    "index": 1,
    "equipment": "Level U-FA302",
    "tag": "LT-302",
    "unit": "%",
    "label": "Level U-FA302 (LT-302)",
    "type": "number"
  },
  {
    "id": "p2",
    "index": 2,
    "equipment": "U-GA302",
    "tag": "U-GA302AM/BM",
    "unit": "A/B",
    "label": "U-GA302 (U-GA302AM/BM)",
    "type": "text"
  },
  {
    "id": "p3",
    "index": 3,
    "equipment": "U-GA302",
    "tag": "PG-304",
    "unit": "kg/cm2G",
    "label": "U-GA302 (PG-304)",
    "type": "number"
  },
  {
    "id": "p4",
    "index": 4,
    "equipment": "U-GA302",
    "tag": "PG-305",
    "unit": "kg/cm2G",
    "label": "U-GA302 (PG-305)",
    "type": "number"
  },
  {
    "id": "p5",
    "index": 5,
    "equipment": "Ampere U-GB302",
    "tag": "06II-132",
    "unit": "Amp.",
    "label": "Ampere U-GB302 (06II-132)",
    "type": "number"
  },
  {
    "id": "p6",
    "index": 6,
    "equipment": "Damper U-GB302",
    "tag": "06HIC-981",
    "unit": "%",
    "label": "Damper U-GB302 (06HIC-981)",
    "type": "number"
  },
  {
    "id": "p7",
    "index": 7,
    "equipment": "U-GB302",
    "tag": "PG-310",
    "unit": "kg/cm2G",
    "label": "U-GB302 (PG-310)",
    "type": "number"
  },
  {
    "id": "p8",
    "index": 8,
    "equipment": "U-GB302",
    "tag": "TG-310",
    "unit": "°C",
    "label": "U-GB302 (TG-310)",
    "type": "number"
  },
  {
    "id": "p9",
    "index": 9,
    "equipment": "EC301 di U-FD306 U-GB302",
    "tag": "EC-301",
    "unit": "%",
    "label": "EC301 di U-FD306 U-GB302 (EC-301)",
    "type": "number"
  },
  {
    "id": "p10",
    "index": 10,
    "equipment": "Ampere U-GB301 A",
    "tag": "06II-131A",
    "unit": "Amp.",
    "label": "Ampere U-GB301 A (06II-131A)",
    "type": "number"
  },
  {
    "id": "p11",
    "index": 11,
    "equipment": "Ampere U-GB301 B",
    "tag": "06II-131B",
    "unit": "Amp.",
    "label": "Ampere U-GB301 B (06II-131B)",
    "type": "number"
  },
  {
    "id": "p12",
    "index": 12,
    "equipment": "Ampere U-GB301 C",
    "tag": "06II-131C",
    "unit": "Amp.",
    "label": "Ampere U-GB301 C (06II-131C)",
    "type": "number"
  },
  {
    "id": "p13",
    "index": 13,
    "equipment": "Ampere U-GB301 D",
    "tag": "06II-131D",
    "unit": "Amp.",
    "label": "Ampere U-GB301 D (06II-131D)",
    "type": "number"
  },
  {
    "id": "p14",
    "index": 14,
    "equipment": "Diff. Vacuum Dust Chamber PRILLING TOWER",
    "tag": "PDG-301",
    "unit": "mmH2O",
    "label": "Diff. Vacuum Dust Chamber PRILLING TOWER (PDG-301)",
    "type": "number"
  },
  {
    "id": "p15",
    "index": 15,
    "equipment": "Vacuum Dust Chamber PRILLING TOWER",
    "tag": "PG-311",
    "unit": "mmH2O",
    "label": "Vacuum Dust Chamber PRILLING TOWER (PG-311)",
    "type": "number"
  },
  {
    "id": "p16",
    "index": 16,
    "equipment": "U-GA301",
    "tag": "U-GA301AM/BM",
    "unit": "A/B",
    "label": "U-GA301 (U-GA301AM/BM)",
    "type": "text"
  },
  {
    "id": "p17",
    "index": 17,
    "equipment": "Ampere U-GA301 A/B",
    "tag": "06II-301A/B",
    "unit": "Amp.",
    "label": "Ampere U-GA301 A/B (06II-301A/B)",
    "type": "number"
  },
  {
    "id": "p18",
    "index": 18,
    "equipment": "U-GA301",
    "tag": "PG-302",
    "unit": "kg/cm2G",
    "label": "U-GA301 (PG-302)",
    "type": "number"
  },
  {
    "id": "p19",
    "index": 19,
    "equipment": "U-GA301",
    "tag": "PG-306",
    "unit": "kg/cm2G",
    "label": "U-GA301 (PG-306)",
    "type": "number"
  },
  {
    "id": "p20",
    "index": 20,
    "equipment": "Level Pump Pit U-GA301",
    "tag": "LI-305A",
    "unit": "%",
    "label": "Level Pump Pit U-GA301 (LI-305A)",
    "type": "number"
  },
  {
    "id": "p21",
    "index": 21,
    "equipment": "Level Head Tank U-FA301",
    "tag": "LI-306",
    "unit": "%",
    "label": "Level Head Tank U-FA301 (LI-306)",
    "type": "number"
  },
  {
    "id": "p22",
    "index": 22,
    "equipment": "Temp. U-FA301",
    "tag": "TG-301",
    "unit": "°C",
    "label": "Temp. U-FA301 (TG-301)",
    "type": "number"
  },
  {
    "id": "p23",
    "index": 23,
    "equipment": "U-FA301",
    "tag": "PG-309",
    "unit": "kg/cm2G",
    "label": "U-FA301 (PG-309)",
    "type": "number"
  },
  {
    "id": "p24",
    "index": 24,
    "equipment": "U-FJ301 Online",
    "tag": "U-FJ301A-I",
    "unit": "ea",
    "label": "U-FJ301 Online (U-FJ301A-I)",
    "type": "number"
  },
  {
    "id": "p25",
    "index": 25,
    "equipment": "U-FJ301 Standby",
    "tag": "U-FJ301 Standby",
    "unit": "Huruf",
    "label": "U-FJ301 Standby (U-FJ301 Standby)",
    "type": "number"
  },
  {
    "id": "p26",
    "index": 26,
    "equipment": "U-GA803",
    "tag": "U-GA803AM/BM",
    "unit": "A/B",
    "label": "U-GA803 (U-GA803AM/BM)",
    "type": "text"
  },
  {
    "id": "p27",
    "index": 27,
    "equipment": "Press. Disc. U-GA803",
    "tag": "PG-761",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA803 (PG-761)",
    "type": "number"
  },
  {
    "id": "p28",
    "index": 28,
    "equipment": "Level Anti-Caking U-FA802",
    "tag": "LG-761",
    "unit": "%",
    "label": "Level Anti-Caking U-FA802 (LG-761)",
    "type": "number"
  },
  {
    "id": "p29",
    "index": 29,
    "equipment": "Flow Anti-Caking U-GA803",
    "tag": "ANTICAKING-FLOW",
    "unit": "ml/min",
    "label": "Flow Anti-Caking U-GA803 (ANTICAKING-FLOW)",
    "type": "number"
  },
  {
    "id": "p30",
    "index": 30,
    "equipment": "U-GA801",
    "tag": "U-GA801AM/BM",
    "unit": "A/B",
    "label": "U-GA801 (U-GA801AM/BM)",
    "type": "text"
  },
  {
    "id": "p31",
    "index": 31,
    "equipment": "Press. Disc. U-GA801",
    "tag": "PG-751",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA801 (PG-751)",
    "type": "number"
  },
  {
    "id": "p32",
    "index": 32,
    "equipment": "Level Pewarna U-FA801",
    "tag": "LG-751",
    "unit": "%",
    "label": "Level Pewarna U-FA801 (LG-751)",
    "type": "number"
  },
  {
    "id": "p33",
    "index": 33,
    "equipment": "Flow Pewarna U-GA801",
    "tag": "COLOR-FLOW",
    "unit": "ml/min",
    "label": "Flow Pewarna U-GA801 (COLOR-FLOW)",
    "type": "number"
  },
  {
    "id": "p34",
    "index": 34,
    "equipment": "Level Small U-FA501",
    "tag": "LG-501",
    "unit": "%",
    "label": "Level Small U-FA501 (LG-501)",
    "type": "number"
  },
  {
    "id": "p35",
    "index": 35,
    "equipment": "Level Big U-FA501",
    "tag": "LG-505",
    "unit": "%",
    "label": "Level Big U-FA501 (LG-505)",
    "type": "number"
  },
  {
    "id": "p36",
    "index": 36,
    "equipment": "Ampere U-GA501A/B",
    "tag": "06II-501A/B",
    "unit": "Amp.",
    "label": "Ampere U-GA501A/B (06II-501A/B)",
    "type": "number"
  },
  {
    "id": "p37",
    "index": 37,
    "equipment": "Press. Disc. U-GA501A/B",
    "tag": "PG-504",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA501A/B (PG-504)",
    "type": "number"
  },
  {
    "id": "p38",
    "index": 38,
    "equipment": "Ampere U-GA502A/B",
    "tag": "06II-502A/B",
    "unit": "Amp.",
    "label": "Ampere U-GA502A/B (06II-502A/B)",
    "type": "number"
  },
  {
    "id": "p39",
    "index": 39,
    "equipment": "Press. Disc. U-GA502A/B",
    "tag": "PG-508",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA502A/B (PG-508)",
    "type": "number"
  },
  {
    "id": "p40",
    "index": 40,
    "equipment": "Ampere U-GA503A/B",
    "tag": "06II-503A/B",
    "unit": "Amp.",
    "label": "Ampere U-GA503A/B (06II-503A/B)",
    "type": "number"
  },
  {
    "id": "p41",
    "index": 41,
    "equipment": "Press. Disc. U-GA503A/B",
    "tag": "PG-509",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA503A/B (PG-509)",
    "type": "number"
  },
  {
    "id": "p42",
    "index": 42,
    "equipment": "U-EA504",
    "tag": "U-EA504A/B",
    "unit": "A/B",
    "label": "U-EA504 (U-EA504A/B)",
    "type": "number"
  },
  {
    "id": "p43",
    "index": 43,
    "equipment": "Level U-FA305",
    "tag": "LG-301",
    "unit": "%",
    "label": "Level U-FA305 (LG-301)",
    "type": "number"
  },
  {
    "id": "p44",
    "index": 44,
    "equipment": "Ampere U-GA303A/B",
    "tag": "06-II303A/B",
    "unit": "Amp.",
    "label": "Ampere U-GA303A/B (06-II303A/B)",
    "type": "number"
  },
  {
    "id": "p45",
    "index": 45,
    "equipment": "Press. Disc. U-GA303A/B",
    "tag": "PG-514",
    "unit": "kg/cm2G",
    "label": "Press. Disc. U-GA303A/B (PG-514)",
    "type": "number"
  }
]
};

let currentParameters = [];
let currentOperatorKey = 'operator1';

document.addEventListener('DOMContentLoaded', () => {
  const defaultOp = document.getElementById('selectOperator').value || 'operator1';
  loadParameter(defaultOp);
});

async function loadParameter(operatorKey) {
  const statusInfo = document.getElementById('statusInfo');
  const badge = document.getElementById('totalCellBadge');

  if (!operatorKey) {
    if (statusInfo) statusInfo.textContent = 'Belum ada operator dipilih';
    if (badge) badge.textContent = '0 Cell';
    return;
  }

  currentOperatorKey = operatorKey;
  if (statusInfo) statusInfo.textContent = `Memuat data (${operatorKey})...`;

  try {
    const response = await fetch(`./data/${operatorKey}.json`);
    if (response.ok) {
      currentParameters = await response.json();
    } else {
      throw new Error("Gagal HTTP Fetch, gunakan embedded data");
    }
  } catch (error) {
    console.warn("Menggunakan Embedded Data Fallback:", error.message);
    currentParameters = EMBEDDED_DATA[operatorKey] || [];
  }

  const labelOp = operatorKey === 'operator1' ? 'Operator 1 (167 Parameter)' : (operatorKey === 'operator2' ? 'Operator 2 (51 Parameter)' : 'Operator 3 (45 Parameter)');
  if (statusInfo) statusInfo.textContent = `Aktif: ${labelOp}`;
  if (badge) badge.textContent = `${currentParameters.length} Cell Fix`;

  renderHorizontalExcel(currentParameters);
}

function renderHorizontalExcel(params) {
  const headerEqRow = document.getElementById('headerEquipmentRow');
  const headerTagRow = document.getElementById('headerTagRow');
  const headerUnitRow = document.getElementById('headerUnitRow');
  const inputCellsRow = document.getElementById('inputCellsRow');

  headerEqRow.innerHTML = '';
  headerTagRow.innerHTML = '';
  headerUnitRow.innerHTML = '';
  inputCellsRow.innerHTML = '';

  if (!params || params.length === 0) return;

  let currentEq = null;
  let currentSpan = 0;
  let eqHeaderCells = [];

  params.forEach((item, idx) => {
    const eqName = item.equipment || 'Lain-lain';

    if (eqName !== currentEq) {
      if (currentEq !== null) {
        eqHeaderCells.push({ name: currentEq, span: currentSpan });
      }
      currentEq = eqName;
      currentSpan = 1;
    } else {
      currentSpan++;
    }

    const thTag = document.createElement('th');
    thTag.className = 'tag-header';
    thTag.setAttribute('data-col', idx);
    thTag.innerHTML = `<span class="col-index">#${item.index}</span>${item.tag || item.equipment}`;
    headerTagRow.appendChild(thTag);

    const thUnit = document.createElement('th');
    thUnit.className = 'unit-header';
    thUnit.setAttribute('data-col', idx);
    thUnit.textContent = item.unit || '-';
    headerUnitRow.appendChild(thUnit);

    const tdInput = document.createElement('td');
    tdInput.setAttribute('data-search', `${item.equipment} ${item.tag} ${item.label}`.toLowerCase());
    tdInput.setAttribute('id', `cell_col_${idx}`);

    const input = document.createElement('input');
    input.type = 'text';
    input.inputMode = 'decimal';
    input.className = 'excel-input';
    input.id = `input_${item.id}`;
    input.name = item.id;
    input.setAttribute('data-index', idx);
    input.placeholder = '...';

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        focusInput(idx + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        focusInput(idx - 1);
      }
    });

    tdInput.appendChild(input);
    inputCellsRow.appendChild(tdInput);
  });

  if (currentEq !== null) {
    eqHeaderCells.push({ name: currentEq, span: currentSpan });
  }

  eqHeaderCells.forEach(eq => {
    const th = document.createElement('th');
    th.className = 'eq-header';
    th.colSpan = eq.span;
    th.textContent = eq.name;
    headerEqRow.appendChild(th);
  });
}

function focusInput(targetIdx) {
  if (targetIdx >= 0 && targetIdx < currentParameters.length) {
    const targetParam = currentParameters[targetIdx];
    const el = document.getElementById(`input_${targetParam.id}`);
    if (el) {
      el.focus();
      el.select();
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

function filterParameters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const inputs = document.querySelectorAll('.excel-input');
  
  inputs.forEach(input => input.classList.remove('highlight'));

  if (!query) return;

  let firstMatch = null;

  currentParameters.forEach((p, idx) => {
    const textData = `${p.equipment} ${p.tag} ${p.label}`.toLowerCase();
    if (textData.includes(query)) {
      const input = document.getElementById(`input_${p.id}`);
      if (input) {
        input.classList.add('highlight');
        if (!firstMatch) firstMatch = input;
      }
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const content = e.target.result;
      const json = JSON.parse(content);
      let populatedCount = 0;

      if (json.data) {
        document.querySelectorAll('.excel-input').forEach(inp => inp.value = "");
        Object.keys(json.data).forEach(paramId => {
          const input = document.getElementById(`input_${paramId}`);
          if (input) {
            let val = json.data[paramId].value !== undefined ? json.data[paramId].value : json.data[paramId];
            input.value = val !== null && val !== undefined ? val : "";
            if (input.value !== "") populatedCount++;
          }
        });
        alert(`✅ Sukses memuat ${populatedCount} data dari file JSON Logsheet!`);
        return;
      }

      if (json.events && Array.isArray(json.events)) {
        const extractedValues = parsePmrMacroEventsAccurate(json.events);
        const total = extractedValues.length;

        // Auto-detect operator berdasarkan jumlah cell (OP1: 167, OP2: 51, OP3: 45)
        let detectedOp = null;
        if (total > 60 && currentOperatorKey !== 'operator1') {
          detectedOp = 'operator1';
        } else if (total >= 48 && total <= 60 && currentOperatorKey !== 'operator2') {
          detectedOp = 'operator2';
        } else if (total >= 35 && total <= 47 && currentOperatorKey !== 'operator3') {
          detectedOp = 'operator3';
        }

        if (detectedOp) {
          const labelOp = detectedOp === 'operator1'
            ? 'Operator 1 (167 Parameter)'
            : (detectedOp === 'operator2' ? 'Operator 2 (51 Parameter)' : 'Operator 3 (45 Parameter)');
          if (confirm(`⚠️ File PMR ini berisi ${total} cell (cocok dengan ${labelOp}). Pindah ke ${labelOp} otomatis?`)) {
            document.getElementById('selectOperator').value = detectedOp;
            loadParameter(detectedOp).then(() => fillExtractedValues(extractedValues));
            return;
          }
        }

        fillExtractedValues(extractedValues);
        return;
      }

      if (Array.isArray(json)) {
        document.querySelectorAll('.excel-input').forEach(inp => inp.value = "");
        json.forEach((val, idx) => {
          if (idx < currentParameters.length) {
            const paramObj = currentParameters[idx];
            const input = document.getElementById(`input_${paramObj.id}`);
            if (input) {
              input.value = typeof val === 'object' ? (val.value || val.val || '') : val;
              if (input.value !== "") populatedCount++;
            }
          }
        });
        alert(`✅ Sukses memuat ${populatedCount} data dari Array JSON!`);
        return;
      }

      alert('⚠️ Format file JSON/PMR tidak dikenali.');
    } catch (err) {
      alert('❌ Gagal membaca file PMR/JSON: ' + err.message);
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function fillExtractedValues(extractedValues) {
  document.querySelectorAll('.excel-input').forEach(inp => inp.value = "");
  let populatedCount = 0;

  extractedValues.forEach((val, idx) => {
    if (idx < currentParameters.length) {
      const paramObj = currentParameters[idx];
      const input = document.getElementById(`input_${paramObj.id}`);
      if (input) {
        input.value = val;
        if (val !== "") populatedCount++;
      }
    }
  });

  alert(`✅ Sukses membaca file PMR Macro! Terbaca ${extractedValues.length} cell (${populatedCount} cell terisi).`);
}

function parsePmrMacroEventsAccurate(events) {
  const cells = [""];
  let colIndex = 0;
  let justNavigated = true;

  const nextColKeys = ['Key.right', 'Key.tab', 'Key.enter', 'Key.return'];
  const ignoreKeys = ['Key.up', 'Key.down'];

  const keyMap = {
    // Virtual Keycode Numpad & OEM Windows (<96> - <111>, <187> - <191>)
    '<96>': '0', '<97>': '1', '<98>': '2', '<99>': '3', '<100>': '4',
    '<101>': '5', '<102>': '6', '<103>': '7', '<104>': '8', '<105>': '9',
    '<106>': '*', '<107>': '+', '<109>': '-', '<110>': '.', '<111>': '/',
    '<187>': '+', '<188>': ',', '<189>': '-', '<190>': '.', '<191>': '/',
    // Nama key standar
    'Key.period': '.', 'Key.decimal': '.', 'Key.numpad_decimal': '.', 'Key.kp_decimal': '.',
    'Key.comma': ',',
    'Key.minus': '-', 'Key.hyphen': '-', 'Key.numpad_subtract': '-', 'Key.kp_subtract': '-',
    'Key.plus': '+', 'Key.numpad_add': '+',
    'Key.slash': '/', 'Key.divide': '/', 'Key.numpad_divide': '/',
    'Key.space': ' '
  };

  for (let i = 0; i <= 9; i++) {
    keyMap[`Key.numpad${i}`] = i.toString();
    keyMap[`Key.numpad_${i}`] = i.toString();
    keyMap[`Key.kp_${i}`] = i.toString();
    keyMap[`[${i}]`] = i.toString();
  }

  events.forEach(ev => {
    if (ev.type === 'keyboardEvent' && ev.pressed === true) {
      const key = ev.key;

      if (nextColKeys.includes(key)) {
        colIndex++;
        while (cells.length <= colIndex) {
          cells.push("");
        }
        justNavigated = true;
      } else if (key === 'Key.left') {
        if (colIndex > 0) colIndex--;
        justNavigated = true;
      } else if (ignoreKeys.includes(key)) {
        justNavigated = true;
      } else if (key === 'Key.backspace') {
        if (justNavigated) {
          cells[colIndex] = "";
          justNavigated = false;
        } else {
          cells[colIndex] = (cells[colIndex] || "").slice(0, -1);
        }
      } else {
        let ch = null;
        if (keyMap[key] !== undefined) {
          ch = keyMap[key];
        } else if (key.startsWith('Key.') || (key.startsWith('<') && key.endswith('>'))) {
          return;
        } else {
          let cleanKey = key.replace(/'/g, "");
          if (cleanKey.length === 1) {
            ch = cleanKey;
          }
        }

        if (ch !== null) {
          if (justNavigated) {
            cells[colIndex] = ch;
            justNavigated = false;
          } else {
            cells[colIndex] = (cells[colIndex] || "") + ch;
          }
        }
      }
    }
  });

  // Buang sel kosong di paling akhir jika operator kelebihan pencet Key.right/Tab di akhir rekaman
  while (cells.length > 1 && cells[cells.length - 1] === "") {
    cells.pop();
  }

  return cells;
}

function handleExport() {
  const formatSelect = document.getElementById('exportFormat');
  const format = formatSelect ? formatSelect.value : 'pmr';
  if (format === 'pmr') {
    exportMacroPmr();
  } else {
    exportData();
  }
}

function exportData() {
  const form = document.getElementById('pmrForm');
  const formData = new FormData(form);
  const result = {
    operator: currentOperatorKey,
    timestamp: new Date().toISOString(),
    total_cells: currentParameters.length,
    data: {}
  };

  currentParameters.forEach(p => {
    const val = formData.get(p.id);
    result.data[p.id] = {
      index: p.index,
      equipment: p.equipment,
      tag: p.tag,
      unit: p.unit,
      value: val !== null ? val : ""
    };
  });

  downloadBlob(JSON.stringify(result, null, 2), `Logsheet_${currentOperatorKey}_${new Date().toISOString().slice(0,10)}.json`, 'application/json');
}

// EXPORT PMR ULTRA-FAST OPTIMIZED
function exportMacroPmr() {
  const form = document.getElementById('pmrForm');
  const formData = new FormData(form);
  
  // Ambil pilihan delay dari dropdown UI (default 0.005s)
  const speedSelect = document.getElementById('macroSpeed');
  const charDelay = parseFloat(speedSelect ? speedSelect.value : "0.005");
  const pressDuration = 0.002; // Durasi pencet tombol ultra singkat (2ms)

  const events = [];

  currentParameters.forEach((p, idx) => {
    const val = (formData.get(p.id) || "").toString();

    for (let char of val) {
      events.push({ type: "keyboardEvent", key: char, pressed: true, timestamp: charDelay });
      events.push({ type: "keyboardEvent", key: char, pressed: false, timestamp: pressDuration });
    }

    if (idx < currentParameters.length - 1) {
      events.push({ type: "keyboardEvent", key: "Key.right", pressed: true, timestamp: charDelay });
      events.push({ type: "keyboardEvent", key: "Key.right", pressed: false, timestamp: pressDuration });
    }
  });

  const macroData = {
    settings: {
      Playback: { Speed: 1.0, Repeat: { Times: 1, For: 0, Interval: 0, Delay: 0, Scheduled: 0, Infinite: false } },
      Minimization: { When_Playing: false, When_Recording: false },
      After_Playback: { Mode: "Idle" }
    },
    events: events
  };

  downloadBlob(JSON.stringify(macroData, null, 2), `Logsheet_${currentOperatorKey}_${new Date().toISOString().slice(0,10)}.pmr`, 'application/json');
}

function downloadBlob(content, fileName, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}
