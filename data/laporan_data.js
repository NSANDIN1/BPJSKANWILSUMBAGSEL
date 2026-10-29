/* laporan_data.js - SATU-SATUNYA tempat data Monthly Report (dibaca oleh pelayanan/data.php).
   Kunci "6" = Juni, "7" = Juli, dst. Bulan yang tidak ada di sini tampil "Data belum tersedia".
   Diperbarui otomatis oleh pelayanan/tools/*.py saat file Excel/PDF diunggah. */
const REPORT_DATA = {
 "6": {
  "periode": "Juni 2026",
  "pdf": "assets/pdf/MONTHLY_REPORT_JUNI.pdf",
  "sections": {
   "esurveyKanwil": [
    {
     "nama": "SUMBARRIAU",
     "sangatTidakPuas": 660,
     "tidakPuas": 436,
     "kurangPuas": null,
     "cukupPuas": 3814,
     "puas": 16957,
     "sangatPuas": 43756,
     "skala5": 5.55,
     "skala100": 92.47,
     "status": "PASSED"
    },
    {
     "nama": "SUMBAGSEL",
     "sangatTidakPuas": 657,
     "tidakPuas": 546,
     "kurangPuas": 0,
     "cukupPuas": 4752,
     "puas": 17433,
     "sangatPuas": 45753,
     "skala5": 5.53,
     "skala100": 92.19,
     "status": "PASSED"
    },
    {
     "nama": "SULAWESI MALUKU",
     "sangatTidakPuas": 1146,
     "tidakPuas": 855,
     "kurangPuas": null,
     "cukupPuas": 7666,
     "puas": 32919,
     "sangatPuas": 75520,
     "skala5": 5.51,
     "skala100": 91.9,
     "status": "PASSED"
    },
    {
     "nama": "SUMBAGUT",
     "sangatTidakPuas": 786,
     "tidakPuas": 702,
     "kurangPuas": null,
     "cukupPuas": 5628,
     "puas": 21726,
     "sangatPuas": 45702,
     "skala5": 5.47,
     "skala100": 91.12,
     "status": "PASSED"
    },
    {
     "nama": "JATIM",
     "sangatTidakPuas": 946,
     "tidakPuas": 1041,
     "kurangPuas": null,
     "cukupPuas": 8855,
     "puas": 35641,
     "sangatPuas": 61181,
     "skala5": 5.42,
     "skala100": 90.36,
     "status": "PASSED"
    },
    {
     "nama": "KALIMANTAN",
     "sangatTidakPuas": 608,
     "tidakPuas": 741,
     "kurangPuas": null,
     "cukupPuas": 5908,
     "puas": 22465,
     "sangatPuas": 38220,
     "skala5": 5.41,
     "skala100": 90.12,
     "status": "PASSED"
    },
    {
     "nama": "BANUSPA",
     "sangatTidakPuas": 867,
     "tidakPuas": 699,
     "kurangPuas": 0,
     "cukupPuas": 6037,
     "puas": 26012,
     "sangatPuas": 42074,
     "skala5": 5.4,
     "skala100": 90.04,
     "status": "PASSED"
    },
    {
     "nama": "JAWA BARAT",
     "sangatTidakPuas": 1166,
     "tidakPuas": 1231,
     "kurangPuas": null,
     "cukupPuas": 10068,
     "puas": 30507,
     "sangatPuas": 52067,
     "skala5": 5.35,
     "skala100": 89.23,
     "status": "PASSED"
    },
    {
     "nama": "DKI JAKARTA",
     "sangatTidakPuas": 977,
     "tidakPuas": 902,
     "kurangPuas": 0,
     "cukupPuas": 6165,
     "puas": 22153,
     "sangatPuas": 35663,
     "skala5": 5.35,
     "skala100": 89.12,
     "status": "PASSED"
    },
    {
     "nama": "BANTEN",
     "sangatTidakPuas": 515,
     "tidakPuas": 476,
     "kurangPuas": 0,
     "cukupPuas": 4459,
     "puas": 13998,
     "sangatPuas": 21315,
     "skala5": 5.33,
     "skala100": 88.8,
     "status": "PASSED"
    },
    {
     "nama": "JATENG DAN DIY",
     "sangatTidakPuas": 1234,
     "tidakPuas": 1092,
     "kurangPuas": null,
     "cukupPuas": 9910,
     "puas": 36526,
     "sangatPuas": 43905,
     "skala5": 5.28,
     "skala100": 87.97,
     "status": "PASSED"
    }
   ],
   "esurveyCabang": [
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 18,
     "tidakPuas": 18,
     "kurangPuas": null,
     "cukupPuas": 122,
     "puas": 469,
     "sangatPuas": 4707,
     "skala5": 5.84,
     "skala100": 97.27,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 17,
     "tidakPuas": 9,
     "kurangPuas": null,
     "cukupPuas": 87,
     "puas": 457,
     "sangatPuas": 2738,
     "skala5": 5.77,
     "skala100": 96.21,
     "status": "PASSED"
    },
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 1,
     "tidakPuas": 11,
     "kurangPuas": null,
     "cukupPuas": 128,
     "puas": 298,
     "sangatPuas": 1990,
     "skala5": 5.75,
     "skala100": 95.86,
     "status": "PASSED"
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 1,
     "kurangPuas": null,
     "cukupPuas": 106,
     "puas": 241,
     "sangatPuas": 1493,
     "skala5": 5.74,
     "skala100": 95.69,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG UTARA KOTABUMI",
     "sangatTidakPuas": 21,
     "tidakPuas": 15,
     "kurangPuas": null,
     "cukupPuas": 96,
     "puas": 354,
     "sangatPuas": 1707,
     "skala5": 5.68,
     "skala100": 94.6,
     "status": "PASSED"
    },
    {
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "sangatTidakPuas": 8,
     "tidakPuas": 20,
     "kurangPuas": null,
     "cukupPuas": 146,
     "puas": 384,
     "sangatPuas": 1492,
     "skala5": 5.61,
     "skala100": 93.53,
     "status": "PASSED"
    },
    {
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "sangatTidakPuas": 20,
     "tidakPuas": 10,
     "kurangPuas": null,
     "cukupPuas": 136,
     "puas": 545,
     "sangatPuas": 1622,
     "skala5": 5.59,
     "skala100": 93.16,
     "status": "PASSED"
    },
    {
     "nama": "MERANGIN BANGKO",
     "sangatTidakPuas": 8,
     "tidakPuas": 10,
     "kurangPuas": null,
     "cukupPuas": 137,
     "puas": 467,
     "sangatPuas": 1317,
     "skala5": 5.58,
     "skala100": 92.94,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG SELATAN KALIANDA",
     "sangatTidakPuas": 22,
     "tidakPuas": 6,
     "kurangPuas": null,
     "cukupPuas": 127,
     "puas": 386,
     "sangatPuas": 1170,
     "skala5": 5.55,
     "skala100": 92.46,
     "status": "PASSED"
    },
    {
     "nama": "MUARO JAMBI SENGETI",
     "sangatTidakPuas": 12,
     "tidakPuas": 14,
     "kurangPuas": null,
     "cukupPuas": 69,
     "puas": 423,
     "sangatPuas": 962,
     "skala5": 5.54,
     "skala100": 92.38,
     "status": "PASSED"
    },
    {
     "nama": "BELITUNG TANJUNG PANDAN",
     "sangatTidakPuas": 14,
     "tidakPuas": 15,
     "kurangPuas": null,
     "cukupPuas": 173,
     "puas": 603,
     "sangatPuas": 1521,
     "skala5": 5.54,
     "skala100": 92.27,
     "status": "PASSED"
    },
    {
     "nama": "BANDAR LAMPUNG",
     "sangatTidakPuas": 92,
     "tidakPuas": 53,
     "kurangPuas": null,
     "cukupPuas": 547,
     "puas": 2434,
     "sangatPuas": 5075,
     "skala5": 5.49,
     "skala100": 91.46,
     "status": "PASSED"
    },
    {
     "nama": "PANGKAL PINANG",
     "sangatTidakPuas": 42,
     "tidakPuas": 51,
     "kurangPuas": null,
     "cukupPuas": 309,
     "puas": 1178,
     "sangatPuas": 2673,
     "skala5": 5.48,
     "skala100": 91.34,
     "status": "PASSED"
    },
    {
     "nama": "MUARO BUNGO",
     "sangatTidakPuas": 28,
     "tidakPuas": 27,
     "kurangPuas": null,
     "cukupPuas": 280,
     "puas": 803,
     "sangatPuas": 1952,
     "skala5": 5.48,
     "skala100": 91.31,
     "status": "PASSED"
    },
    {
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "sangatTidakPuas": null,
     "tidakPuas": 4,
     "kurangPuas": null,
     "cukupPuas": 70,
     "puas": 211,
     "sangatPuas": 387,
     "skala5": 5.45,
     "skala100": 90.9,
     "status": "PASSED"
    },
    {
     "nama": "PALEMBANG",
     "sangatTidakPuas": 88,
     "tidakPuas": 68,
     "kurangPuas": null,
     "cukupPuas": 438,
     "puas": 1767,
     "sangatPuas": 3774,
     "skala5": 5.45,
     "skala100": 90.89,
     "status": "PASSED"
    },
    {
     "nama": "PRINGSEWU SUDIRMAN",
     "sangatTidakPuas": 19,
     "tidakPuas": 9,
     "kurangPuas": null,
     "cukupPuas": 153,
     "puas": 559,
     "sangatPuas": 1065,
     "skala5": 5.45,
     "skala100": 90.8,
     "status": "PASSED"
    },
    {
     "nama": "REJANG LEBONG CURUP",
     "sangatTidakPuas": 2,
     "tidakPuas": 10,
     "kurangPuas": null,
     "cukupPuas": 88,
     "puas": 511,
     "sangatPuas": 710,
     "skala5": 5.44,
     "skala100": 90.7,
     "status": "PASSED"
    },
    {
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "sangatTidakPuas": 31,
     "tidakPuas": 42,
     "kurangPuas": null,
     "cukupPuas": 215,
     "puas": 791,
     "sangatPuas": 1680,
     "skala5": 5.44,
     "skala100": 90.67,
     "status": "PASSED"
    },
    {
     "nama": "PRABUMULIH SUDIRMAN",
     "sangatTidakPuas": 17,
     "tidakPuas": 16,
     "kurangPuas": null,
     "cukupPuas": 185,
     "puas": 609,
     "sangatPuas": 1110,
     "skala5": 5.42,
     "skala100": 90.29,
     "status": "PASSED"
    },
    {
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "sangatTidakPuas": 8,
     "tidakPuas": 8,
     "kurangPuas": null,
     "cukupPuas": 82,
     "puas": 356,
     "sangatPuas": 517,
     "skala5": 5.39,
     "skala100": 89.84,
     "status": "PASSED"
    },
    {
     "nama": "BENGKULU",
     "sangatTidakPuas": 17,
     "tidakPuas": 13,
     "kurangPuas": null,
     "cukupPuas": 152,
     "puas": 463,
     "sangatPuas": 782,
     "skala5": 5.37,
     "skala100": 89.44,
     "status": "PASSED"
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 34,
     "tidakPuas": 20,
     "kurangPuas": null,
     "cukupPuas": 211,
     "puas": 854,
     "sangatPuas": 1252,
     "skala5": 5.36,
     "skala100": 89.27,
     "status": "PASSED"
    },
    {
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "sangatTidakPuas": 39,
     "tidakPuas": 29,
     "kurangPuas": null,
     "cukupPuas": 155,
     "puas": 446,
     "sangatPuas": 959,
     "skala5": 5.34,
     "skala100": 89.08,
     "status": "PASSED"
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 22,
     "tidakPuas": 10,
     "kurangPuas": null,
     "cukupPuas": 120,
     "puas": 603,
     "sangatPuas": 695,
     "skala5": 5.32,
     "skala100": 88.59,
     "status": "PASSED"
    },
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 57,
     "tidakPuas": 50,
     "kurangPuas": null,
     "cukupPuas": 326,
     "puas": 793,
     "sangatPuas": 1564,
     "skala5": 5.31,
     "skala100": 88.47,
     "status": "PASSED"
    },
    {
     "nama": "ARGA MAKMUR",
     "sangatTidakPuas": 0,
     "tidakPuas": 0,
     "kurangPuas": 0,
     "cukupPuas": 0,
     "puas": 0,
     "sangatPuas": 0,
     "skala5": 0,
     "skala100": 0,
     "status": "PASSED"
    }
   ],
   "digitalKanwil": [
    {
     "peringkat": 1,
     "kode": "907",
     "nama": "KANWIL KALIMANTAN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 2,
     "kode": "910",
     "nama": "KANWIL BANTEN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 3,
     "kode": "903",
     "nama": "KANWIL DKI JAKARTA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 4,
     "kode": "904",
     "nama": "KANWIL JAWA BARAT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 5,
     "kode": "905",
     "nama": "KANWIL JATENG DAN DIY",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.7,
     "pencapaian": 99.7
    },
    {
     "peringkat": 6,
     "kode": "909",
     "nama": "KANWIL SUMBARRIAU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.55,
     "pencapaian": 99.55
    },
    {
     "peringkat": 7,
     "kode": "902",
     "nama": "KANWIL SUMBAGSEL",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 98.79,
     "pencapaian": 98.79
    },
    {
     "peringkat": 8,
     "kode": "908",
     "nama": "KANWIL SULAWESI MALUKU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 96.28,
     "pencapaian": 96.28
    },
    {
     "peringkat": 9,
     "kode": "901",
     "nama": "KANWIL SUMBAGUT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.78,
     "pencapaian": 95.78
    },
    {
     "peringkat": 10,
     "kode": "906",
     "nama": "KANWIL JATIM",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.39,
     "pencapaian": 95.39
    },
    {
     "peringkat": 11,
     "kode": "911",
     "nama": "KANWIL BANUSPA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.38,
     "pencapaian": 93.38
    }
   ],
   "digitalCabang": [
    {
     "kode": "E00",
     "nama": "Jambi",
     "targetJHT": 5706,
     "realJHT": 6758,
     "pctRealJHT": 1.1844,
     "pctCapJHT": 1,
     "targetJP": 602,
     "realJP": 945,
     "pctRealJP": 1.5698,
     "pctCapJP": 1,
     "targetBea": 8,
     "realBea": 13,
     "pctRealBea": 1.625,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "E01",
     "nama": "Muaro Bungo",
     "targetJHT": 1916,
     "realJHT": 1827,
     "pctRealJHT": 0.9535,
     "pctCapJHT": 0.9535,
     "targetJP": 185,
     "realJP": 332,
     "pctRealJP": 1.7946,
     "pctCapJP": 1,
     "targetBea": 8,
     "realBea": 24,
     "pctRealBea": 3,
     "pctCapBea": 1,
     "hasil": 0.9837
    },
    {
     "kode": "E02",
     "nama": "Merangin",
     "targetJHT": 832,
     "realJHT": 682,
     "pctRealJHT": 0.8197,
     "pctCapJHT": 0.8197,
     "targetJP": 31,
     "realJP": 46,
     "pctRealJP": 1.4839,
     "pctCapJP": 1,
     "targetBea": 1,
     "realBea": 2,
     "pctRealBea": 2,
     "pctCapBea": 1,
     "hasil": 0.9369
    },
    {
     "kode": "E03",
     "nama": "Muaro Jambi",
     "targetJHT": 806,
     "realJHT": 638,
     "pctRealJHT": 0.7916,
     "pctCapJHT": 0.7916,
     "targetJP": 45,
     "realJP": 64,
     "pctRealJP": 1.4222,
     "pctCapJP": 1,
     "targetBea": 1,
     "realBea": 4,
     "pctRealBea": 4,
     "pctCapBea": 1,
     "hasil": 0.927
    },
    {
     "kode": "E04",
     "nama": "Sarolangun",
     "targetJHT": 627,
     "realJHT": 504,
     "pctRealJHT": 0.8038,
     "pctCapJHT": 0.8038,
     "targetJP": 67,
     "realJP": 110,
     "pctRealJP": 1.6418,
     "pctCapJP": 1,
     "targetBea": 2,
     "realBea": 8,
     "pctRealBea": 4,
     "pctCapBea": 1,
     "hasil": 0.9313
    },
    {
     "kode": "E06",
     "nama": "Batang Hari",
     "targetJHT": 664,
     "realJHT": 540,
     "pctRealJHT": 0.8133,
     "pctCapJHT": 0.8133,
     "targetJP": 93,
     "realJP": 153,
     "pctRealJP": 1.6452,
     "pctCapJP": 1,
     "targetBea": 10,
     "realBea": 5,
     "pctRealBea": 0.5,
     "pctCapBea": 0.5,
     "hasil": 0.8346
    },
    {
     "kode": "E07",
     "nama": "Tanjung Jabung Barat",
     "targetJHT": 842,
     "realJHT": 885,
     "pctRealJHT": 1.0511,
     "pctCapJHT": 1,
     "targetJP": 69,
     "realJP": 101,
     "pctRealJP": 1.4638,
     "pctCapJP": 1,
     "targetBea": 0,
     "realBea": 1,
     "pctRealBea": 1,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "E08",
     "nama": "Sungai Penuh",
     "targetJHT": 685,
     "realJHT": 476,
     "pctRealJHT": 0.6949,
     "pctCapJHT": 0.6949,
     "targetJP": 40,
     "realJP": 58,
     "pctRealJP": 1.45,
     "pctCapJP": 1,
     "targetBea": 2,
     "realBea": 7,
     "pctRealBea": 3.5,
     "pctCapBea": 1,
     "hasil": 0.8932
    },
    {
     "kode": "G00",
     "nama": "Palembang",
     "targetJHT": 10089,
     "realJHT": 9862,
     "pctRealJHT": 0.9775,
     "pctCapJHT": 0.9775,
     "targetJP": 1442,
     "realJP": 2677,
     "pctRealJP": 1.8564,
     "pctCapJP": 1,
     "targetBea": 41,
     "realBea": 9,
     "pctRealBea": 0.2195,
     "pctCapBea": 0.2195,
     "hasil": 0.836
    },
    {
     "kode": "G01",
     "nama": "Bengkulu",
     "targetJHT": 2412,
     "realJHT": 2423,
     "pctRealJHT": 1.0046,
     "pctCapJHT": 1,
     "targetJP": 312,
     "realJP": 579,
     "pctRealJP": 1.8558,
     "pctCapJP": 1,
     "targetBea": 7,
     "realBea": 22,
     "pctRealBea": 3.1429,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "G02",
     "nama": "Pangkal Pinang",
     "targetJHT": 5195,
     "realJHT": 6726,
     "pctRealJHT": 1.2947,
     "pctCapJHT": 1,
     "targetJP": 340,
     "realJP": 619,
     "pctRealJP": 1.8206,
     "pctCapJP": 1,
     "targetBea": 11,
     "realBea": 16,
     "pctRealBea": 1.4545,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "G03",
     "nama": "Muara Enim",
     "targetJHT": 1735,
     "realJHT": 1752,
     "pctRealJHT": 1.0098,
     "pctCapJHT": 1,
     "targetJP": 397,
     "realJP": 751,
     "pctRealJP": 1.8917,
     "pctCapJP": 1,
     "targetBea": 6,
     "realBea": 23,
     "pctRealBea": 3.8333,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "G04",
     "nama": "Banyuasin",
     "targetJHT": 1304,
     "realJHT": 812,
     "pctRealJHT": 0.6227,
     "pctCapJHT": 0.6227,
     "targetJP": 111,
     "realJP": 184,
     "pctRealJP": 1.6577,
     "pctCapJP": 1,
     "targetBea": 4,
     "realBea": 4,
     "pctRealBea": 1,
     "pctCapBea": 1,
     "hasil": 0.8679
    },
    {
     "kode": "G05",
     "nama": "Belitung",
     "targetJHT": 1152,
     "realJHT": 1181,
     "pctRealJHT": 1.0252,
     "pctCapJHT": 1,
     "targetJP": 155,
     "realJP": 270,
     "pctRealJP": 1.7419,
     "pctCapJP": 1,
     "targetBea": 8,
     "realBea": 19,
     "pctRealBea": 2.375,
     "pctCapBea": 1,
     "hasil": 1
    },
    {
     "kode": "G06",
     "nama": "Lubuk Linggau",
     "targetJHT": 1636,
     "realJHT": 1418,
     "pctRealJHT": 0.8667,
     "pctCapJHT": 0.8667,
     "targetJP": 174,
     "realJP": 311,
     "pctRealJP": 1.7874,
     "pctCapJP": 1,
     "targetBea": 7,
     "realBea": 15,
     "pctRealBea": 2.1429,
     "pctCapBea": 1,
     "hasil": 0.9534
    },
    {
     "kode": "G07",
     "nama": "Lahat",
     "targetJHT": 1094,
     "realJHT": 857,
     "pctRealJHT": 0.7834,
     "pctCapJHT": 0.7834,
     "targetJP": 121,
     "realJP": 208,
     "pctRealJP": 1.719,
     "pctCapJP": 1,
     "targetBea": 2,
     "realBea": 5,
     "pctRealBea": 2.5,
     "pctCapBea": 1,
     "hasil": 0.9242
    },
    {
     "kode": "G08",
     "nama": "OKU Baturaja",
     "targetJHT": 725,
     "realJHT": 612,
     "pctRealJHT": 0.8441,
     "pctCapJHT": 0.8441,
     "targetJP": 112,
     "realJP": 192,
     "pctRealJP": 1.7143,
     "pctCapJP": 1,
     "targetBea": 2,
     "realBea": 4,
     "pctRealBea": 2,
     "pctCapBea": 1,
     "hasil": 0.9454
    },
    {
     "kode": "G09",
     "nama": "Prabumulih",
     "targetJHT": 1229,
     "realJHT": 994,
     "pctRealJHT": 0.8088,
     "pctCapJHT": 0.8088,
     "targetJP": 180,
     "realJP": 301,
     "pctRealJP": 1.6722,
     "pctCapJP": 1,
     "targetBea": 7,
     "realBea": 14,
     "pctRealBea": 2,
     "pctCapBea": 1,
     "hasil": 0.9331
    },
    {
     "kode": "G10",
     "nama": "Arga Makmur",
     "targetJHT": 860,
     "realJHT": 699,
     "pctRealJHT": 0.8128,
     "pctCapJHT": 0.8128,
     "targetJP": 55,
     "realJP": 94,
     "pctRealJP": 1.7091,
     "pctCapJP": 1,
     "targetBea": 0,
     "realBea": 1,
     "pctRealBea": 1,
     "pctCapBea": 1,
     "hasil": 0.9345
    },
    {
     "kode": "G11",
     "nama": "Rejang Lebong",
     "targetJHT": 763,
     "realJHT": 533,
     "pctRealJHT": 0.6986,
     "pctCapJHT": 0.6986,
     "targetJP": 29,
     "realJP": 51,
     "pctRealJP": 1.7586,
     "pctCapJP": 1,
     "targetBea": 1,
     "realBea": 2,
     "pctRealBea": 2,
     "pctCapBea": 1,
     "hasil": 0.8945
    },
    {
     "kode": "H00",
     "nama": "Bandar Lampung",
     "targetJHT": 6857,
     "realJHT": 6667,
     "pctRealJHT": 0.9723,
     "pctCapJHT": 0.9723,
     "targetJP": 935,
     "realJP": 1627,
     "pctRealJP": 1.7401,
     "pctCapJP": 1,
     "targetBea": 43,
     "realBea": 59,
     "pctRealBea": 1.3721,
     "pctCapBea": 1,
     "hasil": 0.9903
    },
    {
     "kode": "H01",
     "nama": "Lampung Tengah",
     "targetJHT": 1110,
     "realJHT": 1040,
     "pctRealJHT": 0.9369,
     "pctCapJHT": 0.9369,
     "targetJP": 360,
     "realJP": 665,
     "pctRealJP": 1.8472,
     "pctCapJP": 1,
     "targetBea": 16,
     "realBea": 37,
     "pctRealBea": 2.3125,
     "pctCapBea": 1,
     "hasil": 0.9779
    },
    {
     "kode": "H02",
     "nama": "Kalianda",
     "targetJHT": 796,
     "realJHT": 435,
     "pctRealJHT": 0.5465,
     "pctCapJHT": 0.5465,
     "targetJP": 80,
     "realJP": 142,
     "pctRealJP": 1.775,
     "pctCapJP": 1,
     "targetBea": 5,
     "realBea": 8,
     "pctRealBea": 1.6,
     "pctCapBea": 1,
     "hasil": 0.8413
    },
    {
     "kode": "H03",
     "nama": "Kotabumi",
     "targetJHT": 475,
     "realJHT": 323,
     "pctRealJHT": 0.68,
     "pctCapJHT": 0.68,
     "targetJP": 100,
     "realJP": 179,
     "pctRealJP": 1.79,
     "pctCapJP": 1,
     "targetBea": 7,
     "realBea": 22,
     "pctRealBea": 3.1429,
     "pctCapBea": 1,
     "hasil": 0.888
    },
    {
     "kode": "H04",
     "nama": "Pringsewu",
     "targetJHT": 766,
     "realJHT": 431,
     "pctRealJHT": 0.5627,
     "pctCapJHT": 0.5627,
     "targetJP": 95,
     "realJP": 171,
     "pctRealJP": 1.8,
     "pctCapJP": 1,
     "targetBea": 6,
     "realBea": 6,
     "pctRealBea": 1,
     "pctCapBea": 1,
     "hasil": 0.8469
    },
    {
     "kode": "H05",
     "nama": "Metro",
     "targetJHT": 924,
     "realJHT": 417,
     "pctRealJHT": 0.4513,
     "pctCapJHT": 0.4513,
     "targetJP": 62,
     "realJP": 99,
     "pctRealJP": 1.5968,
     "pctCapJP": 1,
     "targetBea": 4,
     "realBea": 2,
     "pctRealBea": 0.5,
     "pctCapBea": 0.5,
     "hasil": 0.708
    },
    {
     "kode": "H06",
     "nama": "Tulang Bawang",
     "targetJHT": 687,
     "realJHT": 602,
     "pctRealJHT": 0.8763,
     "pctCapJHT": 0.8763,
     "targetJP": 57,
     "realJP": 104,
     "pctRealJP": 1.8246,
     "pctCapJP": 1,
     "targetBea": 4,
     "realBea": 17,
     "pctRealBea": 4.25,
     "pctCapBea": 1,
     "hasil": 0.9567
    }
   ],
   "slaKlaim": [
    {
     "kode": "E00",
     "nama": "JAMBI",
     "jht": 4430,
     "jkk": 104,
     "jkm": 151,
     "jpn": 206,
     "total": 4891,
     "slaJht": 4429,
     "slaJkk": 104,
     "slaJkm": 151,
     "slaJpn": 206,
     "totalSla": 4890,
     "pencapaian": 0.9998,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "jht": 2899,
     "jkk": 43,
     "jkm": 165,
     "jpn": 72,
     "total": 3179,
     "slaJht": 2899,
     "slaJkk": 43,
     "slaJkm": 165,
     "slaJpn": 72,
     "totalSla": 3179,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "jht": 1592,
     "jkk": 12,
     "jkm": 96,
     "jpn": 26,
     "total": 1726,
     "slaJht": 1592,
     "slaJkk": 12,
     "slaJkm": 96,
     "slaJpn": 26,
     "totalSla": 1726,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "jht": 1620,
     "jkk": 13,
     "jkm": 52,
     "jpn": 30,
     "total": 1715,
     "slaJht": 1620,
     "slaJkk": 13,
     "slaJkm": 52,
     "slaJpn": 30,
     "totalSla": 1715,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS",
     "jht": 1260,
     "jkk": 5,
     "jkm": 87,
     "jpn": 23,
     "total": 1375,
     "slaJht": 1260,
     "slaJkk": 5,
     "slaJkm": 87,
     "slaJpn": 23,
     "totalSla": 1375,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "jht": 1286,
     "jkk": 26,
     "jkm": 93,
     "jpn": 70,
     "total": 1475,
     "slaJht": 1286,
     "slaJkk": 26,
     "slaJkm": 93,
     "slaJpn": 70,
     "totalSla": 1475,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA",
     "jht": 925,
     "jkk": 11,
     "jkm": 59,
     "jpn": 20,
     "total": 1015,
     "slaJht": 925,
     "slaJkk": 11,
     "slaJkm": 59,
     "slaJpn": 20,
     "totalSla": 1015,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "jht": 1590,
     "jkk": 8,
     "jkm": 70,
     "jpn": 28,
     "total": 1696,
     "slaJht": 1590,
     "slaJkk": 8,
     "slaJkm": 70,
     "slaJpn": 28,
     "totalSla": 1696,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "jht": 13510,
     "jkk": 215,
     "jkm": 344,
     "jpn": 654,
     "total": 14723,
     "slaJht": 13510,
     "slaJkk": 215,
     "slaJkm": 344,
     "slaJpn": 654,
     "totalSla": 14723,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "jht": 2822,
     "jkk": 36,
     "jkm": 91,
     "jpn": 119,
     "total": 3068,
     "slaJht": 2822,
     "slaJkk": 36,
     "slaJkm": 91,
     "slaJpn": 119,
     "totalSla": 3068,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "jht": 2804,
     "jkk": 35,
     "jkm": 262,
     "jpn": 138,
     "total": 3239,
     "slaJht": 2804,
     "slaJkk": 35,
     "slaJkm": 262,
     "slaJpn": 138,
     "totalSla": 3239,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "jht": 2372,
     "jkk": 24,
     "jkm": 106,
     "jpn": 177,
     "total": 2679,
     "slaJht": 2372,
     "slaJkk": 24,
     "slaJkm": 106,
     "slaJpn": 177,
     "totalSla": 2679,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "jht": 3053,
     "jkk": 6,
     "jkm": 74,
     "jpn": 94,
     "total": 3227,
     "slaJht": 3053,
     "slaJkk": 6,
     "slaJkm": 74,
     "slaJpn": 94,
     "totalSla": 3227,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "jht": 1766,
     "jkk": 18,
     "jkm": 42,
     "jpn": 84,
     "total": 1910,
     "slaJht": 1766,
     "slaJkk": 18,
     "slaJkm": 42,
     "slaJpn": 84,
     "totalSla": 1910,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "jht": 2879,
     "jkk": 24,
     "jkm": 73,
     "jpn": 53,
     "total": 3029,
     "slaJht": 2879,
     "slaJkk": 24,
     "slaJkm": 73,
     "slaJpn": 53,
     "totalSla": 3029,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "jht": 1673,
     "jkk": 14,
     "jkm": 34,
     "jpn": 46,
     "total": 1767,
     "slaJht": 1673,
     "slaJkk": 14,
     "slaJkm": 34,
     "slaJpn": 46,
     "totalSla": 1767,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA",
     "jht": 1560,
     "jkk": 14,
     "jkm": 63,
     "jpn": 71,
     "total": 1708,
     "slaJht": 1560,
     "slaJkk": 14,
     "slaJkm": 63,
     "slaJpn": 71,
     "totalSla": 1708,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "jht": 2403,
     "jkk": 5,
     "jkm": 58,
     "jpn": 120,
     "total": 2586,
     "slaJht": 2403,
     "slaJkk": 5,
     "slaJkm": 58,
     "slaJpn": 120,
     "totalSla": 2586,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "jht": 1552,
     "jkk": 12,
     "jkm": 21,
     "jpn": 36,
     "total": 1621,
     "slaJht": 1552,
     "slaJkk": 12,
     "slaJkm": 21,
     "slaJpn": 36,
     "totalSla": 1621,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "jht": 1431,
     "jkk": 3,
     "jkm": 26,
     "jpn": 9,
     "total": 1469,
     "slaJht": 1431,
     "slaJkk": 3,
     "slaJkm": 26,
     "slaJpn": 9,
     "totalSla": 1469,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "jht": 9300,
     "jkk": 113,
     "jkm": 204,
     "jpn": 341,
     "total": 9958,
     "slaJht": 9300,
     "slaJkk": 113,
     "slaJkm": 204,
     "slaJpn": 341,
     "totalSla": 9958,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "jht": 2149,
     "jkk": 51,
     "jkm": 80,
     "jpn": 172,
     "total": 2452,
     "slaJht": 2149,
     "slaJkk": 51,
     "slaJkm": 80,
     "slaJpn": 172,
     "totalSla": 2452,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "jht": 1917,
     "jkk": 7,
     "jkm": 50,
     "jpn": 36,
     "total": 2010,
     "slaJht": 1917,
     "slaJkk": 7,
     "slaJkm": 50,
     "slaJpn": 36,
     "totalSla": 2010,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "jht": 1352,
     "jkk": 19,
     "jkm": 53,
     "jpn": 57,
     "total": 1481,
     "slaJht": 1352,
     "slaJkk": 19,
     "slaJkm": 53,
     "slaJpn": 57,
     "totalSla": 1481,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 2112,
     "jkk": 10,
     "jkm": 37,
     "jpn": 54,
     "total": 2213,
     "slaJht": 2112,
     "slaJkk": 10,
     "slaJkm": 37,
     "slaJpn": 54,
     "totalSla": 2213,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "jht": 2324,
     "jkk": 12,
     "jkm": 35,
     "jpn": 78,
     "total": 2449,
     "slaJht": 2324,
     "slaJkk": 12,
     "slaJkm": 35,
     "slaJpn": 78,
     "totalSla": 2449,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR",
     "jht": 1387,
     "jkk": 8,
     "jkm": 35,
     "jpn": 34,
     "total": 1464,
     "slaJht": 1387,
     "slaJkk": 8,
     "slaJkm": 35,
     "slaJpn": 34,
     "totalSla": 1464,
     "pencapaian": 1,
     "bobot": 10,
     "skor": 10,
     "jkp": 0
    }
   ],
   "pengaduan": [
    {
     "kode": "E00",
     "nama": "JAMBI",
     "total": 3142,
     "sesuaiSla": 3142,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "total": 2633,
     "sesuaiSla": 2633,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "total": 1004,
     "sesuaiSla": 1003,
     "pencapaian": 99.9,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "total": 1478,
     "sesuaiSla": 1475,
     "pencapaian": 99.8,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "total": 2046,
     "sesuaiSla": 2046,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "total": 1184,
     "sesuaiSla": 1184,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "total": 675,
     "sesuaiSla": 675,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "total": 1182,
     "sesuaiSla": 1182,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "total": 5698,
     "sesuaiSla": 5698,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "total": 1612,
     "sesuaiSla": 1612,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "total": 5644,
     "sesuaiSla": 5644,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "total": 2375,
     "sesuaiSla": 2375,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "total": 2147,
     "sesuaiSla": 2147,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "total": 2839,
     "sesuaiSla": 2839,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "total": 3442,
     "sesuaiSla": 3442,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "total": 741,
     "sesuaiSla": 741,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "total": 2079,
     "sesuaiSla": 2079,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "total": 1397,
     "sesuaiSla": 1397,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "total": 465,
     "sesuaiSla": 465,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "total": 497,
     "sesuaiSla": 497,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "total": 6012,
     "sesuaiSla": 6012,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "total": 1955,
     "sesuaiSla": 1955,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "total": 1258,
     "sesuaiSla": 1258,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "total": 1587,
     "sesuaiSla": 1587,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "total": 720,
     "sesuaiSla": 720,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "total": 872,
     "sesuaiSla": 872,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "total": 765,
     "sesuaiSla": 765,
     "pencapaian": 100,
     "bobot": 6,
     "skor": 6
    }
   ],
   "esurveyKpi": {
    "peringkat": 2,
    "pctPuas": 91.39,
    "status": "PASSED",
    "skor": 5.53,
    "respondenPuas": 63186,
    "respondenTotal": 69141,
    "kategori": [
     {
      "kategori": "Sangat Puas",
      "responden": 45753,
      "persen": 66.17
     },
     {
      "kategori": "Puas",
      "responden": 17433,
      "persen": 25.21
     },
     {
      "kategori": "Cukup Puas",
      "responden": 4752,
      "persen": 6.87
     },
     {
      "kategori": "Kurang Puas",
      "responden": 0,
      "persen": 0.0
     },
     {
      "kategori": "Tidak Puas",
      "responden": 546,
      "persen": 0.79
     },
     {
      "kategori": "Sangat Tidak Puas",
      "responden": 657,
      "persen": 0.95
     }
    ]
   },
   "esurveyTop5": [
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 18,
     "tidakPuas": 18,
     "kurangPuas": null,
     "puas": 469,
     "sangatPuas": 4707,
     "skala5": 5.84
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 17,
     "tidakPuas": 9,
     "kurangPuas": null,
     "puas": 457,
     "sangatPuas": 2738,
     "skala5": 5.77
    },
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 1,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 298,
     "sangatPuas": 1990,
     "skala5": 5.75
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 1,
     "kurangPuas": null,
     "puas": 241,
     "sangatPuas": 1493,
     "skala5": 5.74
    },
    {
     "nama": "LAMPUNG UTARA KOTABUMI",
     "sangatTidakPuas": 21,
     "tidakPuas": 15,
     "kurangPuas": null,
     "puas": 354,
     "sangatPuas": 1707,
     "skala5": 5.68
    }
   ],
   "esurveyBottom5": [
    {
     "nama": "ARGA MAKMUR",
     "sangatTidakPuas": 0,
     "tidakPuas": 0,
     "kurangPuas": 0,
     "puas": 0,
     "sangatPuas": 0,
     "skala5": 0.0
    },
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 57,
     "tidakPuas": 50,
     "kurangPuas": null,
     "puas": 793,
     "sangatPuas": 1564,
     "skala5": 5.31
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 22,
     "tidakPuas": 10,
     "kurangPuas": null,
     "puas": 603,
     "sangatPuas": 695,
     "skala5": 5.32
    },
    {
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "sangatTidakPuas": 39,
     "tidakPuas": 29,
     "kurangPuas": null,
     "puas": 446,
     "sangatPuas": 959,
     "skala5": 5.34
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 34,
     "tidakPuas": 20,
     "kurangPuas": null,
     "puas": 854,
     "sangatPuas": 1252,
     "skala5": 5.36
    }
   ],
   "digitalKartu": {
    "targetJHT": 51887,
    "pctJHT": 96.54,
    "targetJP": 6249,
    "pctJP": 100.0,
    "targetBea": 213,
    "pctBea": 100.0,
    "peringkat": 7,
    "dari": 11
   },
   "slaKpi": {
    "total": 80125,
    "terpenuhi": 80124,
    "over": 1,
    "pct": 100.0
   },
   "slaTerendah": [
    {
     "nama": "JAMBI",
     "jht": 1,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 0,
     "jumlah": 1
    },
    {
     "nama": "MERANGIN BANGKO",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 0,
     "jumlah": 0
    },
    {
     "nama": "MUARO BUNGO",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 0,
     "jumlah": 0
    }
   ],
   "klaim": {
    "programs": [
     {
      "program": "JHT",
      "kasus": 117368,
      "nominal": 1467579151560
     },
     {
      "program": "JKM",
      "kasus": 5434,
      "nominal": 108111700000
     },
     {
      "program": "JKK",
      "kasus": 18212,
      "nominal": 83297696111
     },
     {
      "program": "JKP",
      "kasus": 19297,
      "nominal": 49004649062
     },
     {
      "program": "JP",
      "kasus": 2798,
      "nominal": 47005758210
     }
    ],
    "cabang": [
     {
      "nama": "JAMBI",
      "kasus": 17186,
      "nominal": 135948797730
     },
     {
      "nama": "MUARO BUNGO",
      "kasus": 7194,
      "nominal": 72358336664
     },
     {
      "nama": "MERANGIN BANGKO",
      "kasus": 2554,
      "nominal": 30199432658
     },
     {
      "nama": "MUARO JAMBI SENGETI",
      "kasus": 2583,
      "nominal": 30353969736
     },
     {
      "nama": "SAROLANGUN LINTAS SUMATERA",
      "kasus": 1784,
      "nominal": 25169519894
     },
     {
      "nama": "BATANGHARI MUARA BULIAN",
      "kasus": 2070,
      "nominal": 25307319039
     },
     {
      "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
      "kasus": 1771,
      "nominal": 18071299715
     },
     {
      "nama": "SUNGAI PENUH YOS SUDARSO",
      "kasus": 2099,
      "nominal": 30562898700
     },
     {
      "nama": "PALEMBANG",
      "kasus": 33705,
      "nominal": 363067571042
     },
     {
      "nama": "BENGKULU",
      "kasus": 7570,
      "nominal": 68316957366
     },
     {
      "nama": "PANGKAL PINANG",
      "kasus": 13272,
      "nominal": 108971720613
     },
     {
      "nama": "MUARA ENIM",
      "kasus": 9350,
      "nominal": 79503792295
     },
     {
      "nama": "BANYUASIN PANGKALAN BALAI",
      "kasus": 3898,
      "nominal": 57206427957
     },
     {
      "nama": "BELITUNG TANJUNG PANDAN",
      "kasus": 2370,
      "nominal": 38546840007
     },
     {
      "nama": "LUBUK LINGGAU YOS SUDARSO",
      "kasus": 3709,
      "nominal": 51523261360
     },
     {
      "nama": "LAHAT PASAR LAMA",
      "kasus": 2994,
      "nominal": 27411640023
     },
     {
      "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
      "kasus": 1989,
      "nominal": 28670287987
     },
     {
      "nama": "PRABUMULIH SUDIRMAN",
      "kasus": 2907,
      "nominal": 47130614271
     },
     {
      "nama": "ARGA MAKMUR",
      "kasus": 2494,
      "nominal": 24532662037
     },
     {
      "nama": "REJANG LEBONG CURUP",
      "kasus": 2286,
      "nominal": 26288940783
     },
     {
      "nama": "BANDAR LAMPUNG",
      "kasus": 19627,
      "nominal": 227522869231
     },
     {
      "nama": "LAMPUNG TENGAH",
      "kasus": 7305,
      "nominal": 72078415754
     },
     {
      "nama": "LAMPUNG SELATAN KALIANDA",
      "kasus": 2401,
      "nominal": 33031351058
     },
     {
      "nama": "LAMPUNG UTARA KOTABUMI",
      "kasus": 1927,
      "nominal": 24488102891
     },
     {
      "nama": "PRINGSEWU SUDIRMAN",
      "kasus": 2836,
      "nominal": 39062766815
     },
     {
      "nama": "KOTA METRO NASUTION",
      "kasus": 2877,
      "nominal": 43279484234
     },
     {
      "nama": "TULANG BAWANG BANJAR AGUNG",
      "kasus": 2351,
      "nominal": 26393675083
     }
    ]
   },
   "unit": {
    "jumlah": {
     "pmi": 3,
     "kabKota": 31
    },
    "petugas": [
     {
      "petugas": "KEKE ANISA PUTRI",
      "cabang": "Sungai Penuh",
      "mitra": "UL PMI KERINCI",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA SUNGAI PENUH"
     },
     {
      "petugas": "NURWINDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA TENGAH",
      "penempatan": "MPP Kabupaten Bangka Tengah"
     },
     {
      "petugas": "SUWANDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA SELATAN",
      "penempatan": "BANK BNI KCP TOBOALI"
     },
     {
      "petugas": "Muhammed Hafiid Al Fayed",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA BARAT",
      "penempatan": "MPP Kabupaten Bangka Barat"
     },
     {
      "petugas": "EVI NOVITASARI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA",
      "penempatan": "KANTOR PPN SUNGAILIAT KABUPATEN BANGKA"
     },
     {
      "petugas": "ILMAN ADHITIYA",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BELITUNG TIMUR",
      "penempatan": "DINAS PENANAMAN MODAL DAN PERIZINAN TERPADU SATU PINTU KABUPATEN BELITUNG TIMUR"
     },
     {
      "petugas": "MUSTRI LIZA",
      "cabang": "Palembang",
      "mitra": "UL KAB MUSI BANYUASIN",
      "penempatan": "Kantor Dinas Sosial Musi Banyuasin"
     },
     {
      "petugas": "SAFIRA SALBILLA DWINURFI",
      "cabang": "Palembang",
      "mitra": "UL KAB OGAN ILIR",
      "penempatan": "Mal Pelayanan Publik Kabupaten Ogan Ilir"
     },
     {
      "petugas": "NUR TYSA SHAFIRA",
      "cabang": "Palembang",
      "mitra": "UL PMI PALEMBANG",
      "penempatan": "KANTOR BP3MI SUMSEL"
     },
     {
      "petugas": "SHINTA RABIUL AWWALIYAH",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU SELATAN",
      "penempatan": "Dinas penanaman modal dan PTSP OKU Selatan"
     },
     {
      "petugas": "BAHKTI ALFAHREZI",
      "cabang": "Muaraenim",
      "mitra": "UL KAB MUSI RAWAS UTARA",
      "penempatan": "BANK BNI KCP MUSI RAWAS UTARA"
     },
     {
      "petugas": "HANI RUSITA",
      "cabang": "Muaraenim",
      "mitra": "UL KOTA PAGAR ALAM",
      "penempatan": "BANK BNI KOTA PAGAR ALAM"
     },
     {
      "petugas": "ABADI SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB PENUKAL ABAB LEMATANG ILIR",
      "penempatan": "KANTOR DPMPTSP KABUPATEN PALI"
     },
     {
      "petugas": "Ratih Permata Sari",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU TIMUR",
      "penempatan": "BANK BNI MARTAPURA OGAN KOMERING ULU TIMUR"
     },
     {
      "petugas": "Muhammad Waiz Al Qarny",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ILIR",
      "penempatan": "BPKAD KAB. OKI"
     },
     {
      "petugas": "NOPAN SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB EMPAT LAWANG",
      "penempatan": "BANK BNI EMPAT LAWANG"
     },
     {
      "petugas": "ANTON TRY WIJAYA",
      "cabang": "Muara Bungo",
      "mitra": "UL MALL MPP TEBO",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN TEBO"
     },
     {
      "petugas": "AKBAR DHARMA PUTRA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB TULANG BAWANG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK TULANG BAWANG BARAT"
     },
     {
      "petugas": "ASWAN IRFAN RIANSYAH",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB MESUJI",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN MESUJI"
     },
     {
      "petugas": "ARI WIRAWAN",
      "cabang": "Lampung Tengah",
      "mitra": "UL PESISIR BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK PESISIR BARAT"
     },
     {
      "petugas": "SELAMET ROCHMATUL ARDA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB LAMPUNG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK LAMPUNG BARAT"
     },
     {
      "petugas": "HENGKI",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB WAY KANAN",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN WAYKANAN"
     },
     {
      "petugas": "KURNIA LESTARI",
      "cabang": "Jambi",
      "mitra": "UL KAB TANJUNG JABUNG TIMUR",
      "penempatan": "BANK BNI MUARA SABAK"
     },
     {
      "petugas": "TANTI YOSEVA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB LEBONG",
      "penempatan": "MALL PELAYANAN PUBLIK KAB LEBONG"
     },
     {
      "petugas": "RENANTHERA CANDRA ERLAMBANG",
      "cabang": "Bengkulu",
      "mitra": "UL KAB BENGKULU SELATAN",
      "penempatan": "MPP KAB BENGKULU SELATAN"
     },
     {
      "petugas": "OZA TRIWIBOWO",
      "cabang": "Bengkulu",
      "mitra": "UL KAB MUKOMUKO",
      "penempatan": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kab Mukomuko"
     },
     {
      "petugas": "RIAN ADE SAPUTRA",
      "cabang": "Bengkulu",
      "mitra": "UL BENGKULU TENGAH",
      "penempatan": "MPP BENGKULU TENGAH"
     },
     {
      "petugas": "FENI JUITA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB KAUR",
      "penempatan": "BANK BENGKULU"
     },
     {
      "petugas": "CRISTIE SETIAWAN",
      "cabang": "Bengkulu",
      "mitra": "UL KAB SELUMA",
      "penempatan": "MALL PELAYANAN PUBLIK KAB SELUMA"
     },
     {
      "petugas": "NINDA ALYA SAHIRA",
      "cabang": "Bengkulu",
      "mitra": "UL KEPAHIANG",
      "penempatan": "MPP KEPAHIANG"
     },
     {
      "petugas": "JEPI LEONATA",
      "cabang": "Bengkulu",
      "mitra": "UL KOTA BENGKULU",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA BENGKULU"
     },
     {
      "petugas": "Sodikin",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB TANGGAMUS",
      "penempatan": "KANTOR DPMPPTSP KABUPATEN TANGGAMUS"
     },
     {
      "petugas": "MUHAMAD ROYNALDI",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB LAMPUNG TIMUR",
      "penempatan": "BANK BNI WAY JEPARA KAB LAMPUNG TIMUR"
     },
     {
      "petugas": "RINANTI REKHWAN",
      "cabang": "Bandar Lampung",
      "mitra": "UL PMI BANDAR LAMPUNG",
      "penempatan": "UPT BP2MI LAMPUNG di peringkat 2 nasional, terpaut 0,01 poin dari Sumbarriau (5,55) dan unggul 0,02 poin atas"
     }
    ]
   },
   "igi": {
    "matriks": [
     {
      "nama": "MUARA ENIM",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 11.88,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.61
     },
     {
      "nama": "PALEMBANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.23,
       "Juni": 14.93,
       "Juli": 14.97,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.89
     },
     {
      "nama": "BENGKULU",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.57,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.95
     },
     {
      "nama": "PANGKAL PINANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 14.85,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 14.87,
       "September": 15.0
      },
      "capaian": 14.97
     },
     {
      "nama": "MUARO BUNGO",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "JAMBI",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     }
    ],
    "berjalan": [
     {
      "nama": "PALEMBANG",
      "total": 1460,
      "sesuaiSla": 1453,
      "capaian": 99.52,
      "nilai": 14.93
     },
     {
      "nama": "JAMBI",
      "total": 651,
      "sesuaiSla": 651,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARO BUNGO",
      "total": 164,
      "sesuaiSla": 164,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARA ENIM",
      "total": 63,
      "sesuaiSla": 63,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "PANGKAL PINANG",
      "total": 344,
      "sesuaiSla": 344,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "total": 593,
      "sesuaiSla": 593,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BENGKULU",
      "total": 130,
      "sesuaiSla": 130,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "total": 371,
      "sesuaiSla": 371,
      "capaian": 100.0,
      "nilai": 15.0
     }
    ]
   }
  }
 },
 "7": {
  "periode": "Juli 2026",
  "pdf": "assets/pdf/MONTHLY_REPORT_JULI.pdf",
  "sections": {
   "esurveyCabang": [
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 20,
     "tidakPuas": 25,
     "kurangPuas": null,
     "cukupPuas": 180,
     "puas": 606,
     "sangatPuas": 4885,
     "skala5": 5.8,
     "skala100": 96.6,
     "status": "PASSED"
    },
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 1,
     "tidakPuas": 14,
     "kurangPuas": null,
     "cukupPuas": 166,
     "puas": 397,
     "sangatPuas": 2802,
     "skala5": 5.77,
     "skala100": 96.1,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 27,
     "tidakPuas": 11,
     "kurangPuas": null,
     "cukupPuas": 114,
     "puas": 583,
     "sangatPuas": 3343,
     "skala5": 5.76,
     "skala100": 95.95,
     "status": "PASSED"
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 2,
     "kurangPuas": null,
     "cukupPuas": 110,
     "puas": 264,
     "sangatPuas": 1502,
     "skala5": 5.73,
     "skala100": 95.47,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG UTARA KOTABUMI",
     "sangatTidakPuas": 23,
     "tidakPuas": 15,
     "kurangPuas": null,
     "cukupPuas": 116,
     "puas": 455,
     "sangatPuas": 1941,
     "skala5": 5.66,
     "skala100": 94.37,
     "status": "PASSED"
    },
    {
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "sangatTidakPuas": 33,
     "tidakPuas": 44,
     "kurangPuas": null,
     "cukupPuas": 274,
     "puas": 1028,
     "sangatPuas": 3966,
     "skala5": 5.64,
     "skala100": 94.02,
     "status": "PASSED"
    },
    {
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "sangatTidakPuas": 9,
     "tidakPuas": 20,
     "kurangPuas": null,
     "cukupPuas": 150,
     "puas": 440,
     "sangatPuas": 1606,
     "skala5": 5.61,
     "skala100": 93.52,
     "status": "PASSED"
    },
    {
     "nama": "MERANGIN BANGKO",
     "sangatTidakPuas": 8,
     "tidakPuas": 12,
     "kurangPuas": null,
     "cukupPuas": 172,
     "puas": 569,
     "sangatPuas": 1726,
     "skala5": 5.6,
     "skala100": 93.29,
     "status": "PASSED"
    },
    {
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "sangatTidakPuas": 22,
     "tidakPuas": 17,
     "kurangPuas": null,
     "cukupPuas": 177,
     "puas": 658,
     "sangatPuas": 1819,
     "skala5": 5.56,
     "skala100": 92.64,
     "status": "PASSED"
    },
    {
     "nama": "LAMPUNG SELATAN KALIANDA",
     "sangatTidakPuas": 39,
     "tidakPuas": 6,
     "kurangPuas": null,
     "cukupPuas": 140,
     "puas": 492,
     "sangatPuas": 1511,
     "skala5": 5.55,
     "skala100": 92.45,
     "status": "PASSED"
    },
    {
     "nama": "BELITUNG TANJUNG PANDAN",
     "sangatTidakPuas": 14,
     "tidakPuas": 15,
     "kurangPuas": null,
     "cukupPuas": 189,
     "puas": 724,
     "sangatPuas": 1748,
     "skala5": 5.54,
     "skala100": 92.37,
     "status": "PASSED"
    },
    {
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "sangatTidakPuas": 44,
     "tidakPuas": 37,
     "kurangPuas": null,
     "cukupPuas": 204,
     "puas": 564,
     "sangatPuas": 1993,
     "skala5": 5.53,
     "skala100": 92.14,
     "status": "PASSED"
    },
    {
     "nama": "MUARO JAMBI SENGETI",
     "sangatTidakPuas": 12,
     "tidakPuas": 16,
     "kurangPuas": null,
     "cukupPuas": 112,
     "puas": 558,
     "sangatPuas": 1213,
     "skala5": 5.53,
     "skala100": 92.1,
     "status": "PASSED"
    },
    {
     "nama": "PANGKAL PINANG",
     "sangatTidakPuas": 46,
     "tidakPuas": 52,
     "kurangPuas": null,
     "cukupPuas": 362,
     "puas": 1274,
     "sangatPuas": 3079,
     "skala5": 5.49,
     "skala100": 91.56,
     "status": "PASSED"
    },
    {
     "nama": "PRINGSEWU SUDIRMAN",
     "sangatTidakPuas": 21,
     "tidakPuas": 10,
     "kurangPuas": null,
     "cukupPuas": 181,
     "puas": 655,
     "sangatPuas": 1418,
     "skala5": 5.49,
     "skala100": 91.52,
     "status": "PASSED"
    },
    {
     "nama": "BANDAR LAMPUNG",
     "sangatTidakPuas": 102,
     "tidakPuas": 69,
     "kurangPuas": null,
     "cukupPuas": 638,
     "puas": 2950,
     "sangatPuas": 6035,
     "skala5": 5.49,
     "skala100": 91.47,
     "status": "PASSED"
    },
    {
     "nama": "MUARO BUNGO",
     "sangatTidakPuas": 40,
     "tidakPuas": 33,
     "kurangPuas": null,
     "cukupPuas": 312,
     "puas": 966,
     "sangatPuas": 2316,
     "skala5": 5.48,
     "skala100": 91.26,
     "status": "PASSED"
    },
    {
     "nama": "PALEMBANG",
     "sangatTidakPuas": 106,
     "tidakPuas": 78,
     "kurangPuas": null,
     "cukupPuas": 523,
     "puas": 2163,
     "sangatPuas": 4487,
     "skala5": 5.45,
     "skala100": 90.82,
     "status": "PASSED"
    },
    {
     "nama": "REJANG LEBONG CURUP",
     "sangatTidakPuas": 13,
     "tidakPuas": 11,
     "kurangPuas": null,
     "cukupPuas": 122,
     "puas": 658,
     "sangatPuas": 994,
     "skala5": 5.44,
     "skala100": 90.63,
     "status": "PASSED"
    },
    {
     "nama": "PRABUMULIH SUDIRMAN",
     "sangatTidakPuas": 22,
     "tidakPuas": 17,
     "kurangPuas": null,
     "cukupPuas": 238,
     "puas": 754,
     "sangatPuas": 1468,
     "skala5": 5.44,
     "skala100": 90.61,
     "status": "PASSED"
    },
    {
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "sangatTidakPuas": 22,
     "tidakPuas": 6,
     "kurangPuas": null,
     "cukupPuas": 90,
     "puas": 332,
     "sangatPuas": 597,
     "skala5": 5.38,
     "skala100": 89.72,
     "status": "PASSED"
    },
    {
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "sangatTidakPuas": 14,
     "tidakPuas": 11,
     "kurangPuas": null,
     "cukupPuas": 107,
     "puas": 493,
     "sangatPuas": 683,
     "skala5": 5.37,
     "skala100": 89.54,
     "status": "PASSED"
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 34,
     "tidakPuas": 22,
     "kurangPuas": null,
     "cukupPuas": 238,
     "puas": 1016,
     "sangatPuas": 1432,
     "skala5": 5.36,
     "skala100": 89.36,
     "status": "PASSED"
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 25,
     "tidakPuas": 11,
     "kurangPuas": null,
     "cukupPuas": 149,
     "puas": 770,
     "sangatPuas": 967,
     "skala5": 5.36,
     "skala100": 89.27,
     "status": "PASSED"
    },
    {
     "nama": "BENGKULU",
     "sangatTidakPuas": 19,
     "tidakPuas": 21,
     "kurangPuas": null,
     "cukupPuas": 173,
     "puas": 555,
     "sangatPuas": 903,
     "skala5": 5.35,
     "skala100": 89.23,
     "status": "PASSED"
    },
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 72,
     "tidakPuas": 65,
     "kurangPuas": null,
     "cukupPuas": 387,
     "puas": 944,
     "sangatPuas": 1707,
     "skala5": 5.26,
     "skala100": 87.73,
     "status": "PASSED"
    },
    {
     "nama": "ARGA MAKMUR",
     "sangatTidakPuas": 0,
     "tidakPuas": 0,
     "kurangPuas": 0,
     "cukupPuas": 0,
     "puas": 0,
     "sangatPuas": 0,
     "skala5": 0,
     "skala100": 0,
     "status": "PASSED"
    }
   ],
   "mlt": [
    {
     "kode": "E00",
     "nama": "Jambi",
     "targetUnit": 11,
     "targetNominal": 770000000,
     "targetUnit120": 13.2,
     "targetNominal120": 924000000,
     "realUnit": 6,
     "realNominal": 57901000000,
     "pctUnit": 0.5454545455,
     "pctNominal": 75.1961039
    },
    {
     "kode": "E01",
     "nama": "Muaro Bungo",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7.2,
     "targetNominal120": 504000000,
     "realUnit": 3,
     "realNominal": 37500000000,
     "pctUnit": 0.5,
     "pctNominal": 89.28571429
    },
    {
     "kode": "E02",
     "nama": "Merangin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "E03",
     "nama": "Muaro Jambi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": 1,
     "realNominal": 120000000,
     "pctUnit": 0.3333333333,
     "pctNominal": 1.333333333
    },
    {
     "kode": "E04",
     "nama": "Sarolangun",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "E06",
     "nama": "Batang Hari",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "E07",
     "nama": "Tanjung Jabung Barat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "E08",
     "nama": "Sungai Penuh",
     "targetUnit": 2,
     "targetNominal": 60000000,
     "targetUnit120": 2.4,
     "targetNominal120": 72000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G00",
     "nama": "Palembang",
     "targetUnit": 15,
     "targetNominal": 1050000000,
     "targetUnit120": 18,
     "targetNominal120": 1260000000,
     "realUnit": 2,
     "realNominal": 11307200000,
     "pctUnit": 0.1333333333,
     "pctNominal": 10.7687619
    },
    {
     "kode": "G01",
     "nama": "Bengkulu",
     "targetUnit": 8,
     "targetNominal": 560000000,
     "targetUnit120": 9.6,
     "targetNominal120": 672000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G02",
     "nama": "Pangkal Pinang",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7.2,
     "targetNominal120": 504000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G03",
     "nama": "Muara Enim",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7.2,
     "targetNominal120": 504000000,
     "realUnit": 2,
     "realNominal": 543000000,
     "pctUnit": 0.3333333333,
     "pctNominal": 1.292857143
    },
    {
     "kode": "G04",
     "nama": "Banyuasin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": 2,
     "realNominal": 19800000000,
     "pctUnit": 0.6666666667,
     "pctNominal": 220
    },
    {
     "kode": "G05",
     "nama": "Belitung",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G06",
     "nama": "Lubuk Linggau",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G07",
     "nama": "Lahat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G08",
     "nama": "OKU Baturaja",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G09",
     "nama": "Prabumulih",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G10",
     "nama": "Arga Makmur",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "G11",
     "nama": "Rejang Lebong",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H00",
     "nama": "Bandar Lampung",
     "targetUnit": 12,
     "targetNominal": 840000000,
     "targetUnit120": 14.4,
     "targetNominal120": 1008000000,
     "realUnit": 13,
     "realNominal": 24194000000,
     "pctUnit": 1.083333333,
     "pctNominal": 28.80238095
    },
    {
     "kode": "H01",
     "nama": "Lampung Tengah",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7.2,
     "targetNominal120": 504000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H02",
     "nama": "Kalianda",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H03",
     "nama": "Kotabumi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H04",
     "nama": "Pringsewu",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H05",
     "nama": "Metro",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "H06",
     "nama": "Tulang Bawang",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 3.6,
     "targetNominal120": 108000000,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": 0,
     "pctNominal": 0
    },
    {
     "kode": "902",
     "nama": "Kanwil Sumbagsel",
     "targetUnit": 0,
     "targetNominal": 113120000000,
     "targetUnit120": 0,
     "targetNominal120": null,
     "realUnit": null,
     "realNominal": null,
     "pctUnit": null,
     "pctNominal": null
    }
   ],
   "esurveyKanwil": [
    {
     "nama": "SUMBARRIAU",
     "skala5": 5.55,
     "skala100": 92.52
    },
    {
     "nama": "SUMBAGSEL",
     "skala5": 5.54,
     "skala100": 92.33,
     "sangatPuas": 57276,
     "puas": 21363,
     "cukupPuas": 5730,
     "kurangPuas": 0,
     "tidakPuas": 647,
     "sangatTidakPuas": 818,
     "status": "PASSED"
    },
    {
     "nama": "SULAWESI MALUKU",
     "skala5": 5.52,
     "skala100": 91.96
    },
    {
     "nama": "SUMBAGUT",
     "skala5": 5.46
    },
    {
     "nama": "JATIM",
     "skala5": 5.42
    },
    {
     "nama": "KALIMANTAN",
     "skala5": 5.41
    },
    {
     "nama": "BANUSPA",
     "skala5": 5.4
    },
    {
     "nama": "JAWA BARAT",
     "skala5": 5.35
    },
    {
     "nama": "DKI JAKARTA",
     "skala5": 5.35
    },
    {
     "nama": "BANTEN",
     "skala5": 5.33
    },
    {
     "nama": "JATENG DAN DIY",
     "skala5": 5.29
    }
   ],
   "esurveyKpi": {
    "peringkat": 2,
    "pctPuas": 91.62,
    "status": "PASSED",
    "skor": 5.54,
    "respondenPuas": 78639,
    "respondenTotal": 85834,
    "kategori": [
     {
      "kategori": "Sangat Puas",
      "responden": 57276,
      "persen": 66.73
     },
     {
      "kategori": "Puas",
      "responden": 21363,
      "persen": 24.89
     },
     {
      "kategori": "Cukup Puas",
      "responden": 5730,
      "persen": 6.68
     },
     {
      "kategori": "Kurang Puas",
      "responden": 0,
      "persen": 0.0
     },
     {
      "kategori": "Tidak Puas",
      "responden": 647,
      "persen": 0.75
     },
     {
      "kategori": "Sangat Tidak Puas",
      "responden": 818,
      "persen": 0.95
     }
    ]
   },
   "esurveyTop5": [
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 20,
     "tidakPuas": 25,
     "kurangPuas": null,
     "puas": 606,
     "sangatPuas": 4885,
     "skala5": 5.8
    },
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 1,
     "tidakPuas": 14,
     "kurangPuas": null,
     "puas": 397,
     "sangatPuas": 2802,
     "skala5": 5.77
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 27,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 583,
     "sangatPuas": 3343,
     "skala5": 5.76
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 2,
     "kurangPuas": null,
     "puas": 264,
     "sangatPuas": 1502,
     "skala5": 5.73
    },
    {
     "nama": "LAMPUNG UTARA KOTABUMI",
     "sangatTidakPuas": 23,
     "tidakPuas": 15,
     "kurangPuas": null,
     "puas": 455,
     "sangatPuas": 1941,
     "skala5": 5.66
    }
   ],
   "esurveyBottom5": [
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 72,
     "tidakPuas": 65,
     "kurangPuas": null,
     "puas": 944,
     "sangatPuas": 1707,
     "skala5": 5.26
    },
    {
     "nama": "BENGKULU",
     "sangatTidakPuas": 19,
     "tidakPuas": 21,
     "kurangPuas": null,
     "puas": 555,
     "sangatPuas": 903,
     "skala5": 5.35
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 34,
     "tidakPuas": 22,
     "kurangPuas": null,
     "puas": 1016,
     "sangatPuas": 1432,
     "skala5": 5.36
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 25,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 770,
     "sangatPuas": 967,
     "skala5": 5.36
    },
    {
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "sangatTidakPuas": 14,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 493,
     "sangatPuas": 683,
     "skala5": 5.37
    }
   ],
   "digitalKanwil": [
    {
     "peringkat": 1,
     "kode": "907",
     "nama": "KANWIL KALIMANTAN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 2,
     "kode": "910",
     "nama": "KANWIL BANTEN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 3,
     "kode": "903",
     "nama": "KANWIL DKI JAKARTA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 4,
     "kode": "904",
     "nama": "KANWIL JAWA BARAT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 100.0,
     "pencapaian": 100.0
    },
    {
     "peringkat": 5,
     "kode": "905",
     "nama": "KANWIL JATENG DAN DIY",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.7,
     "pencapaian": 99.7
    },
    {
     "peringkat": 6,
     "kode": "909",
     "nama": "KANWIL SUMBARRIAU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.55,
     "pencapaian": 99.55
    },
    {
     "peringkat": 7,
     "kode": "902",
     "nama": "KANWIL SUMBAGSEL",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 98.79,
     "pencapaian": 98.79
    },
    {
     "peringkat": 8,
     "kode": "908",
     "nama": "KANWIL SULAWESI MALUKU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 96.28,
     "pencapaian": 96.28
    },
    {
     "peringkat": 9,
     "kode": "901",
     "nama": "KANWIL SUMBAGUT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.78,
     "pencapaian": 95.78
    },
    {
     "peringkat": 10,
     "kode": "906",
     "nama": "KANWIL JATIM",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.39,
     "pencapaian": 95.39
    },
    {
     "peringkat": 11,
     "kode": "911",
     "nama": "KANWIL BANUSPA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.38,
     "pencapaian": 93.38
    }
   ],
   "digitalKartu": {
    "targetJHT": 60565,
    "pctJHT": 92.96,
    "targetJP": 7455,
    "pctJP": 100.0,
    "targetBea": 370,
    "pctBea": 100.0,
    "peringkat": 7,
    "dari": 11
   },
   "digitalCabang": [
    {
     "nama": "Jambi",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Pangkal Pinang",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Bengkulu",
     "pctCapJHT": 0.981,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9934
    },
    {
     "nama": "Belitung",
     "pctCapJHT": 0.9799,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.993
    },
    {
     "nama": "Tanjung Jabung Barat",
     "pctCapJHT": 0.9745,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9911
    },
    {
     "nama": "Muara Enim",
     "pctCapJHT": 0.972,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9902
    },
    {
     "nama": "Bandar Lampung",
     "pctCapJHT": 0.9423,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9798
    },
    {
     "nama": "Muaro Bungo",
     "pctCapJHT": 0.927,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9745
    },
    {
     "nama": "Lampung Tengah",
     "pctCapJHT": 0.9112,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9689
    },
    {
     "nama": "Tulang Bawang",
     "pctCapJHT": 0.8379,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9433
    },
    {
     "nama": "Lubuk Linggau",
     "pctCapJHT": 0.8367,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9428
    },
    {
     "nama": "OKU Baturaja",
     "pctCapJHT": 0.7864,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9253
    },
    {
     "nama": "Prabumulih",
     "pctCapJHT": 0.7845,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9246
    },
    {
     "nama": "Arga Makmur",
     "pctCapJHT": 0.7629,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.917
    },
    {
     "nama": "Merangin",
     "pctCapJHT": 0.7518,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9131
    },
    {
     "nama": "Muaro Jambi",
     "pctCapJHT": 0.7335,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9067
    },
    {
     "nama": "Lahat",
     "pctCapJHT": 0.7333,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9066
    },
    {
     "nama": "Sarolangun",
     "pctCapJHT": 0.7057,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.897
    },
    {
     "nama": "Palembang",
     "pctCapJHT": 0.9485,
     "pctCapJP": 1.0,
     "pctCapBea": 0.5303,
     "hasil": 0.888
    },
    {
     "nama": "Sungai Penuh",
     "pctCapJHT": 0.6549,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8792
    },
    {
     "nama": "Banyuasin",
     "pctCapJHT": 0.6217,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8676
    },
    {
     "nama": "Rejang Lebong",
     "pctCapJHT": 0.6204,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8671
    },
    {
     "nama": "Kotabumi",
     "pctCapJHT": 0.598,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8593
    },
    {
     "nama": "Kalianda",
     "pctCapJHT": 0.5146,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8301
    },
    {
     "nama": "Pringsewu",
     "pctCapJHT": 0.5032,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8261
    },
    {
     "nama": "Batang Hari",
     "pctCapJHT": 0.7815,
     "pctCapJP": 1.0,
     "pctCapBea": 0.4667,
     "hasil": 0.8169
    },
    {
     "nama": "Metro",
     "pctCapJHT": 0.3993,
     "pctCapJP": 1.0,
     "pctCapBea": 0.625,
     "hasil": 0.7148
    }
   ],
   "slaKlaim": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "jht": 1887,
     "jkk": 15,
     "jkm": 108,
     "jpn": 28,
     "totalSla": 2894,
     "pencapaian": 1.0,
     "jkp": 856,
     "total": 2894
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS",
     "jht": 1544,
     "jkk": 8,
     "jkm": 103,
     "jpn": 26,
     "totalSla": 2055,
     "pencapaian": 1.0,
     "jkp": 374,
     "total": 2055
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "jht": 1628,
     "jkk": 21,
     "jkm": 61,
     "jpn": 66,
     "totalSla": 2148,
     "pencapaian": 1.0,
     "jkp": 372,
     "total": 2148
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA",
     "jht": 1247,
     "jkk": 15,
     "jkm": 73,
     "jpn": 25,
     "totalSla": 2214,
     "pencapaian": 1.0,
     "jkp": 854,
     "total": 2214
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "jht": 16014,
     "jkk": 266,
     "jkm": 396,
     "jpn": 826,
     "totalSla": 21074,
     "pencapaian": 1.0,
     "jkp": 3572,
     "total": 21074
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "jht": 3337,
     "jkk": 50,
     "jkm": 111,
     "jpn": 153,
     "totalSla": 4418,
     "pencapaian": 1.0,
     "jkp": 767,
     "total": 4418
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "jht": 3218,
     "jkk": 42,
     "jkm": 300,
     "jpn": 174,
     "totalSla": 4322,
     "pencapaian": 1.0,
     "jkp": 588,
     "total": 4322
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR",
     "jht": 1607,
     "jkk": 9,
     "jkm": 42,
     "jpn": 39,
     "totalSla": 2696,
     "pencapaian": 1.0,
     "jkp": 999,
     "total": 2696
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "jht": 3383,
     "jkk": 7,
     "jkm": 80,
     "jpn": 106,
     "totalSla": 4165,
     "pencapaian": 1.0,
     "jkp": 589,
     "total": 4165
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "jht": 2116,
     "jkk": 20,
     "jkm": 56,
     "jpn": 102,
     "totalSla": 2689,
     "pencapaian": 1.0,
     "jkp": 395,
     "total": 2689
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "jht": 3460,
     "jkk": 32,
     "jkm": 89,
     "jpn": 65,
     "totalSla": 4263,
     "pencapaian": 1.0,
     "jkp": 617,
     "total": 4263
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA",
     "jht": 1898,
     "jkk": 18,
     "jkm": 75,
     "jpn": 89,
     "totalSla": 2290,
     "pencapaian": 1.0,
     "jkp": 210,
     "total": 2290
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "jht": 2772,
     "jkk": 5,
     "jkm": 74,
     "jpn": 143,
     "totalSla": 3162,
     "pencapaian": 1.0,
     "jkp": 168,
     "total": 3162
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "jht": 1829,
     "jkk": 18,
     "jkm": 24,
     "jpn": 47,
     "totalSla": 2838,
     "pencapaian": 1.0,
     "jkp": 920,
     "total": 2838
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "jht": 1762,
     "jkk": 4,
     "jkm": 32,
     "jpn": 12,
     "totalSla": 2674,
     "pencapaian": 1.0,
     "jkp": 864,
     "total": 2674
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "jht": 10930,
     "jkk": 128,
     "jkm": 234,
     "jpn": 410,
     "totalSla": 12519,
     "pencapaian": 1.0,
     "jkp": 817,
     "total": 12519
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "jht": 2619,
     "jkk": 64,
     "jkm": 102,
     "jpn": 218,
     "totalSla": 4172,
     "pencapaian": 1.0,
     "jkp": 1169,
     "total": 4172
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "jht": 2265,
     "jkk": 7,
     "jkm": 63,
     "jpn": 41,
     "totalSla": 2691,
     "pencapaian": 1.0,
     "jkp": 315,
     "total": 2691
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "jht": 2813,
     "jkk": 14,
     "jkm": 40,
     "jpn": 96,
     "totalSla": 3299,
     "pencapaian": 1.0,
     "jkp": 336,
     "total": 3299
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "jht": 1448,
     "jkk": 30,
     "jkm": 121,
     "jpn": 83,
     "totalSla": 2171,
     "pencapaian": 1.0,
     "jkp": 489,
     "total": 2171
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "jht": 2096,
     "jkk": 14,
     "jkm": 46,
     "jpn": 64,
     "totalSla": 3570,
     "pencapaian": 1.0,
     "jkp": 1350,
     "total": 3570
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "jht": 1848,
     "jkk": 10,
     "jkm": 84,
     "jpn": 36,
     "totalSla": 2376,
     "pencapaian": 1.0,
     "jkp": 398,
     "total": 2376
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "jht": 3361,
     "jkk": 55,
     "jkm": 195,
     "jpn": 100,
     "totalSla": 4011,
     "pencapaian": 1.0,
     "jkp": 300,
     "total": 4011
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "jht": 5076,
     "jkk": 137,
     "jkm": 168,
     "jpn": 251,
     "totalSla": 7538,
     "pencapaian": 1.0,
     "jkp": 1906,
     "total": 7538
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "jht": 2780,
     "jkk": 45,
     "jkm": 123,
     "jpn": 221,
     "totalSla": 4696,
     "pencapaian": 0.9998,
     "jkp": 1528,
     "total": 4697
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 2500,
     "jkk": 12,
     "jkm": 44,
     "jpn": 74,
     "totalSla": 3125,
     "pencapaian": 0.9994,
     "jkp": 497,
     "total": 3127
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "jht": 1950,
     "jkk": 17,
     "jkm": 62,
     "jpn": 39,
     "totalSla": 2941,
     "pencapaian": 0.9993,
     "jkp": 875,
     "total": 2943
    }
   ],
   "slaKpi": {
    "total": 117016,
    "terpenuhi": 117011,
    "over": 5,
    "pct": 99.99
   },
   "slaTerendah": [
    {
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARO JAMBI SENGETI",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARA ENIM",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 1,
     "jumlah": 1
    }
   ],
   "pengaduan": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "total": 1258,
     "sesuaiSla": 1257,
     "pencapaian": 99.92,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "total": 2026,
     "sesuaiSla": 2026,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "total": 1020,
     "sesuaiSla": 1020,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "total": 1493,
     "sesuaiSla": 1493,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "total": 1613,
     "sesuaiSla": 1613,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "total": 2715,
     "sesuaiSla": 2715,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "total": 2605,
     "sesuaiSla": 2605,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "total": 4002,
     "sesuaiSla": 4002,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "total": 4281,
     "sesuaiSla": 4281,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "total": 1069,
     "sesuaiSla": 1069,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "total": 2516,
     "sesuaiSla": 2516,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "total": 6553,
     "sesuaiSla": 6553,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "total": 620,
     "sesuaiSla": 620,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "total": 7564,
     "sesuaiSla": 7564,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "total": 2604,
     "sesuaiSla": 2604,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "total": 1745,
     "sesuaiSla": 1745,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "total": 1807,
     "sesuaiSla": 1807,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "total": 962,
     "sesuaiSla": 962,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "total": 1293,
     "sesuaiSla": 1293,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "total": 950,
     "sesuaiSla": 950,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "total": 7315,
     "sesuaiSla": 7315,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "total": 584,
     "sesuaiSla": 584,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "total": 1957,
     "sesuaiSla": 1957,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "total": 2033,
     "sesuaiSla": 2033,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "total": 2588,
     "sesuaiSla": 2588,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "total": 3271,
     "sesuaiSla": 3271,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "total": 4064,
     "sesuaiSla": 4064,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    }
   ],
   "mltKpi": {
    "realUnit": 29,
    "realNominal": 151365200000,
    "pctUnit": 23.02,
    "pctNominal": 126.45
   },
   "klaim": {
    "programs": [
     {
      "program": "JHT",
      "kasus": 138469,
      "nominal": 1757132478730
     },
     {
      "program": "JKM",
      "kasus": 7124,
      "nominal": 130430700000
     },
     {
      "program": "JKK",
      "kasus": 22710,
      "nominal": 105728136646
     },
     {
      "program": "JP",
      "kasus": 3505,
      "nominal": 58131992510
     },
     {
      "program": "JKP",
      "kasus": 22249,
      "nominal": 56171823672
     }
    ],
    "cabang": [
     {
      "nama": "JAMBI",
      "kasus": 20558,
      "nominal": 156988864073
     },
     {
      "nama": "MUARO BUNGO",
      "kasus": 8572,
      "nominal": 86584322424
     },
     {
      "nama": "MERANGIN BANGKO",
      "kasus": 2993,
      "nominal": 36605669912
     },
     {
      "nama": "MUARO JAMBI SENGETI",
      "kasus": 3052,
      "nominal": 37251894471
     },
     {
      "nama": "SAROLANGUN LINTAS SUMATERA",
      "kasus": 2179,
      "nominal": 31524803594
     },
     {
      "nama": "BATANGHARI MUARA BULIAN",
      "kasus": 2364,
      "nominal": 29665565847
     },
     {
      "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
      "kasus": 2327,
      "nominal": 23937985215
     },
     {
      "nama": "SUNGAI PENUH YOS SUDARSO",
      "kasus": 2458,
      "nominal": 38717391410
     },
     {
      "nama": "PALEMBANG",
      "kasus": 40720,
      "nominal": 437061887504
     },
     {
      "nama": "BENGKULU",
      "kasus": 8950,
      "nominal": 79863612327
     },
     {
      "nama": "PANGKAL PINANG",
      "kasus": 14721,
      "nominal": 127767151411
     },
     {
      "nama": "MUARA ENIM",
      "kasus": 11210,
      "nominal": 98397685256
     },
     {
      "nama": "BANYUASIN PANGKALAN BALAI",
      "kasus": 4332,
      "nominal": 64097418517
     },
     {
      "nama": "BELITUNG TANJUNG PANDAN",
      "kasus": 2855,
      "nominal": 46025457021
     },
     {
      "nama": "LUBUK LINGGAU YOS SUDARSO",
      "kasus": 4545,
      "nominal": 65173854692
     },
     {
      "nama": "LAHAT PASAR LAMA",
      "kasus": 3703,
      "nominal": 34689885853
     },
     {
      "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
      "kasus": 2427,
      "nominal": 35384390884
     },
     {
      "nama": "PRABUMULIH SUDIRMAN",
      "kasus": 3415,
      "nominal": 55561953037
     },
     {
      "nama": "ARGA MAKMUR",
      "kasus": 2921,
      "nominal": 29789501578
     },
     {
      "nama": "REJANG LEBONG CURUP",
      "kasus": 2762,
      "nominal": 31535736255
     },
     {
      "nama": "BANDAR LAMPUNG",
      "kasus": 23384,
      "nominal": 271980572990
     },
     {
      "nama": "LAMPUNG TENGAH",
      "kasus": 8913,
      "nominal": 87896883551
     },
     {
      "nama": "LAMPUNG SELATAN KALIANDA",
      "kasus": 2842,
      "nominal": 40283487240
     },
     {
      "nama": "LAMPUNG UTARA KOTABUMI",
      "kasus": 2261,
      "nominal": 30699128659
     },
     {
      "nama": "PRINGSEWU SUDIRMAN",
      "kasus": 3318,
      "nominal": 46355327635
     },
     {
      "nama": "KOTA METRO NASUTION",
      "kasus": 3481,
      "nominal": 52133646434
     },
     {
      "nama": "TULANG BAWANG BANJAR AGUNG",
      "kasus": 2794,
      "nominal": 31621053768
     }
    ],
    "beasiswa": {
     "totalAnak": 4978,
     "totalNominal": 20474200000,
     "jenjang": {
      "SD": {
       "kasus": 1811,
       "nominal": 2755500000
      },
      "KULIAH": {
       "nominal": 11748000000,
       "kasus": 968
      },
      "SMA": {
       "nominal": 3705000000,
       "kasus": 1156
      },
      "SMP": {
       "nominal": 2218000000,
       "kasus": 1033
      },
      "TK": {
       "nominal": 43500000,
       "kasus": 8
      },
      "LAINNYA": {
       "nominal": 4200000,
       "kasus": 2
      }
     }
    }
   },
   "unit": {
    "jumlah": {
     "pmi": 3,
     "kabKota": 31
    },
    "petugas": [
     {
      "petugas": "KEKE ANISA PUTRI",
      "cabang": "Sungai Penuh",
      "mitra": "UL PMI KERINCI",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA SUNGAI PENUH"
     },
     {
      "petugas": "NURWINDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA TENGAH",
      "penempatan": "MPP Kabupaten Bangka Tengah"
     },
     {
      "petugas": "SUWANDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA SELATAN",
      "penempatan": "BANK BNI KCP TOBOALI"
     },
     {
      "petugas": "Muhammed Hafiid Al Fayed",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA BARAT",
      "penempatan": "MPP Kabupaten Bangka Barat"
     },
     {
      "petugas": "EVI NOVITASARI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA",
      "penempatan": "KANTOR PPN SUNGAILIAT KABUPATEN BANGKA"
     },
     {
      "petugas": "ILMAN ADHITIYA",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BELITUNG TIMUR",
      "penempatan": "DINAS PENANAMAN MODAL DAN PERIZINAN TERPADU SATU PINTU KABUPATEN BELITUNG TIMUR"
     },
     {
      "petugas": "MUSTRI LIZA",
      "cabang": "Palembang",
      "mitra": "UL KAB MUSI BANYUASIN",
      "penempatan": "Kantor Dinas Sosial Musi Banyuasin"
     },
     {
      "petugas": "SAFIRA SALBILLA DWINURFI",
      "cabang": "Palembang",
      "mitra": "UL KAB OGAN ILIR",
      "penempatan": "Mal Pelayanan Publik Kabupaten Ogan Ilir"
     },
     {
      "petugas": "NUR TYSA SHAFIRA",
      "cabang": "Palembang",
      "mitra": "UL PMI PALEMBANG",
      "penempatan": "KANTOR BP3MI SUMSEL"
     },
     {
      "petugas": "SHINTA RABIUL AWWALIYAH",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU SELATAN",
      "penempatan": "Dinas penanaman modal dan PTSP OKU Selatan"
     },
     {
      "petugas": "BAHKTI ALFAHREZI",
      "cabang": "Muaraenim",
      "mitra": "UL KAB MUSI RAWAS UTARA",
      "penempatan": "BANK BNI KCP MUSI RAWAS UTARA"
     },
     {
      "petugas": "HANI RUSITA",
      "cabang": "Muaraenim",
      "mitra": "UL KOTA PAGAR ALAM",
      "penempatan": "BANK BNI KOTA PAGAR ALAM"
     },
     {
      "petugas": "ABADI SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB PENUKAL ABAB LEMATANG ILIR",
      "penempatan": "KANTOR DPMPTSP KABUPATEN PALI"
     },
     {
      "petugas": "Ratih Permata Sari",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU TIMUR",
      "penempatan": "BANK BNI MARTAPURA OGAN KOMERING ULU TIMUR"
     },
     {
      "petugas": "Muhammad Waiz Al Qarny",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ILIR",
      "penempatan": "BPKAD KAB. OKI"
     },
     {
      "petugas": "NOPAN SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB EMPAT LAWANG",
      "penempatan": "BANK BNI EMPAT LAWANG"
     },
     {
      "petugas": "ANTON TRY WIJAYA",
      "cabang": "Muara Bungo",
      "mitra": "UL MALL MPP TEBO",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN TEBO"
     },
     {
      "petugas": "AKBAR DHARMA PUTRA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB TULANG BAWANG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK TULANG BAWANG BARAT"
     },
     {
      "petugas": "ASWAN IRFAN RIANSYAH",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB MESUJI",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN MESUJI"
     },
     {
      "petugas": "ARI WIRAWAN",
      "cabang": "Lampung Tengah",
      "mitra": "UL PESISIR BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK PESISIR BARAT"
     },
     {
      "petugas": "SELAMET ROCHMATUL ARDA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB LAMPUNG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK LAMPUNG BARAT"
     },
     {
      "petugas": "HENGKI",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB WAY KANAN",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN WAYKANAN"
     },
     {
      "petugas": "KURNIA LESTARI",
      "cabang": "Jambi",
      "mitra": "UL KAB TANJUNG JABUNG TIMUR",
      "penempatan": "BANK BNI MUARA SABAK"
     },
     {
      "petugas": "TANTI YOSEVA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB LEBONG",
      "penempatan": "MALL PELAYANAN PUBLIK KAB LEBONG"
     },
     {
      "petugas": "RENANTHERA CANDRA ERLAMBANG",
      "cabang": "Bengkulu",
      "mitra": "UL KAB BENGKULU SELATAN",
      "penempatan": "MPP KAB BENGKULU SELATAN"
     },
     {
      "petugas": "OZA TRIWIBOWO",
      "cabang": "Bengkulu",
      "mitra": "UL KAB MUKOMUKO",
      "penempatan": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kab Mukomuko"
     },
     {
      "petugas": "RIAN ADE SAPUTRA",
      "cabang": "Bengkulu",
      "mitra": "UL BENGKULU TENGAH",
      "penempatan": "MPP BENGKULU TENGAH"
     },
     {
      "petugas": "FENI JUITA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB KAUR",
      "penempatan": "BANK BENGKULU"
     },
     {
      "petugas": "CRISTIE SETIAWAN",
      "cabang": "Bengkulu",
      "mitra": "UL KAB SELUMA",
      "penempatan": "MALL PELAYANAN PUBLIK KAB SELUMA"
     },
     {
      "petugas": "NINDA ALYA SAHIRA",
      "cabang": "Bengkulu",
      "mitra": "UL KEPAHIANG",
      "penempatan": "MPP KEPAHIANG"
     },
     {
      "petugas": "JEPI LEONATA",
      "cabang": "Bengkulu",
      "mitra": "UL KOTA BENGKULU",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA BENGKULU"
     },
     {
      "petugas": "Sodikin",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB TANGGAMUS",
      "penempatan": "KANTOR DPMPPTSP KABUPATEN TANGGAMUS"
     },
     {
      "petugas": "MUHAMAD ROYNALDI",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB LAMPUNG TIMUR",
      "penempatan": "BANK BNI WAY JEPARA KAB LAMPUNG TIMUR"
     },
     {
      "petugas": "RINANTI REKHWAN",
      "cabang": "Bandar Lampung",
      "mitra": "UL PMI BANDAR LAMPUNG",
      "penempatan": "UPT BP2MI LAMPUNG di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16"
     }
    ]
   },
   "igi": {
    "matriks": [
     {
      "nama": "MUARA ENIM",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 11.88,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.61
     },
     {
      "nama": "PALEMBANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.23,
       "Juni": 14.93,
       "Juli": 14.97,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.89
     },
     {
      "nama": "BENGKULU",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.57,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.95
     },
     {
      "nama": "PANGKAL PINANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 14.85,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 14.87,
       "September": 15.0
      },
      "capaian": 14.97
     },
     {
      "nama": "MUARO BUNGO",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "JAMBI",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     }
    ],
    "berjalan": [
     {
      "nama": "MUARA ENIM",
      "total": 312,
      "sesuaiSla": 247,
      "capaian": 79.17,
      "nilai": 11.88
     },
     {
      "nama": "PALEMBANG",
      "total": 1373,
      "sesuaiSla": 1370,
      "capaian": 99.78,
      "nilai": 14.97
     },
     {
      "nama": "JAMBI",
      "total": 709,
      "sesuaiSla": 709,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARO BUNGO",
      "total": 308,
      "sesuaiSla": 308,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "PANGKAL PINANG",
      "total": 246,
      "sesuaiSla": 246,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "total": 374,
      "sesuaiSla": 374,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BENGKULU",
      "total": 215,
      "sesuaiSla": 215,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "total": 508,
      "sesuaiSla": 508,
      "capaian": 100.0,
      "nilai": 15.0
     }
    ]
   },
   "narasi": {
    "esurvey": [
     {
      "label": "Ringkasan",
      "teks": "Berdasarkan hasil E-Survey Integrasi 2026, Kanwil Sumbagsel memperoleh skor kepuasan 5,54 dari skala 6 dengan kategori Sangat Puas dan menempati peringkat ke-2 dari 11 Kanwil secara nasional. Dari total 85.834 responden, sebanyak 78.639 responden atau 91,62% memberikan penilaian Puas dan Sangat Puas. Capaian ini menunjukkan bahwa secara umum kualitas pelayanan Kanwil Sumbagsel telah berjalan dengan sangat baik dan mendapatkan penerimaan positif dari peserta."
     }
    ],
    "digital": [
     {
      "label": null,
      "teks": "Kantor Wilayah Sumbagsel mencatatkan nila Digital Service sebesar 98,79% dari target sebesar 100,00 (dengan bobot sebesar 8). Hasil ini menempatkan Kanwil Sumbagsel di peringkat ke-7 dari total 11 Kantor Wilayah secara nasional. Secara umum capaian kinerja tergolong tinggi dan mendekati target sempurna namun, posisi Sumbagsel masih berada di papan tengah berada di bawah posisi Sumbarriau (99,55%) dan unggul dari Sulawesi Maluku (96,28%)."
     },
     {
      "label": null,
      "teks": "Keberhasilan Sumbagsel dalam mendekati target utama didorong oleh performa maksimal pada dua dari tiga indikator utama. JP Berkala JMO dengan target sebesar 7.455 dan program Beasiswa JMO dengan target sebesar 370 berhasil diselesaikan secara sempurna dengan pencapaian realisasi 100,00%. Namun, penentu utama belum optimalnya nilai Sumbagsel berada pada Target Klaim JHT melalui JMO. Dengan volume target terbesar yaitu sebesar 60.565, realisasi JHT JMO baru menyentuh angka 92,96% (terdapat gap sebesar 7,04%)."
     },
     {
      "label": "Ringkasan",
      "teks": "- Sektor Beasiswa JMO: Sebanyak 24 dari 27 cabang berhasil menyentuh angka maksimal 100,00%. Namun, terdapat 3 cabang yang capaian beasiswanya berada di bawah 100%, yaitu Palembang (53,03%), Batang Hari (46,67%), dan Metro (62,50%).\n- Sektor Klaim JHT via JMO (Single Point of Optimization): Menjadi variabel penentu utama. Capaian JHT bergerak sangat bervariasi dari yang tertinggi 100,00% (Jambi & Pangkal Pinang) hingga yang terendah 39,93% (Metro)."
     },
     {
      "label": "Insight",
      "teks": "- Satu-satunya Penentu Kenaikan Peringkat Kanwil adalah JHT JMO: Karena persentase JP Berkala dan Beasiswa JMO sudah maksimal (100,00%) secara agregat wilayah, kunci tunggal untuk mendorong nilai Kanwil Sumbagsel dari 98,79% menjadi 100,00% adalah dengan menaikkan realisasi Klaim JHT via JMO.\n- Adopsi JHT JMO di Tingkat Cabang: Sebanyak 15 dari 27 kantor cabang masih memiliki pencapaian JHT JMO di bawah 80,00%. Hal ini mengindikasikan bahwa sebagian besar pemohon klaim JHT di daerah masih cenderung menggunakan kanal onsite (kantor cabang) atau Lapak Asik ketimbang aplikasi JMO.\n- Dinamika Khusus Cabang Palembang: Cabang Palembang berhasil mencatatkan penetrasi JHT JMO yang sangat tinggi (94,85%). Namun, nilai akhir individual cabang Palembang tertahan di angka 88,80% murni karena capaian Beasiswa mandirinya (53,03%). Peningkatan Beasiswa di Palembang penting untuk memperbaiki rapor internal Cabang Palembang, meskipun secara agregat Sumbagsel target Beasiswa sudah 100,00%."
     },
     {
      "label": "Strategi",
      "teks": "- Menerapkan strategi Digital Onboarding langsung di ruang tunggu kantor cabang. Pemohon klaim JHT kriteria eligible (di bawah Rp15 juta) dipandu untuk memproses klaimnya secara mandiri menggunakan aplikasi JMO sebelum mengambil antrean fisik.\n- Fokus pendampingan pada cabang Kalianda (83,01%), Pringsewu (82,61%), Batang Hari (81,69%), dan Metro (71,48%) yang memiliki tingkat penetrasi JHT JMO sangat rendah (39% – 51%)."
     },
     {
      "label": "Rekomendasi",
      "teks": "- Menyediakan petugas di front office cabang untuk mengedukasi peserta bahwa klaim JHT via JMO secara langsung di tempat.\n- Melakukan monitoring dan pemantauan harian khusus untuk pergerakan angka Klaim JHT JMO di 15 cabang yang persentasenya masih di bawah 80,00%.\n- Mengadakan sharing session agar strategi JMO dari Cabang Jambi dan Pangkal Pinang (yang sukses mencatatkan angka 100,00% di semua indikator) dapat ditiru oleh cabang-cabang di kluster bawah."
     }
    ],
    "sla": [
     {
      "label": null,
      "teks": "Berdasarkan data Over SLA untuk Klaim JHT, JKK, JPN, dan JKM telah mencapai target 100% sesuai SLA. Sementara itu, Klaim JKP mencapai 99,98%, menjadi satu-satunya yang masih terdapat klaim tidak sesuai SLA 3 Hari Kerja."
     },
     {
      "label": null,
      "teks": "Terdapat 3 Kantor Cabang yang memiliki over SLA Klaim JKP, yaitu Kantor Cabang Pringsewu Sudirman sebanyak 2 klaim JKP, Kantor Cabang Muaro Jambi Sengeti sebanyak 2 klaim JKP, dan Kantor Cabang Muara Enim sebanyak 1 klaim JKP. Dengan demikian, seluruh klaim Over SLA sampai dengan saat ini berasal dari program JKP berjumlah 5 Klaim."
     },
     {
      "label": null,
      "teks": "Perlu dilakukan monitoring rutin khususnya terhadap klaim JKP yang belum memenuhi SLA 3 hari kerja ke seluruh Kantor Cabang Jajaran Kanwil Sumbagsel."
     },
     {
      "label": null,
      "teks": "Selain itu, perlu dilakukan identifikasi penyebab keterlambatan pembayaran Klaim agar kejadian serupa tidak berulang dan pencapaian SLA dapat dipertahankan pada 100% untuk seluruh program dan kantor cabang."
     }
    ],
    "pengaduan": [
     {
      "label": null,
      "teks": "Sepanjang periode s.d. Juli 2026, akumulasi pengaduan yang masuk untuk seluruh program di Kantor Wilayah Sumbagsel mencatatkan volume yang sangat tinggi yaitu mencapai 70.508 kasus. Dari total pengaduan tersebut, kinerja penyelesaian layanan berada pada tingkat yang sangat memuaskan dengan capaian kepatuhan Service Level Agreement (SLA) sebesar 100,00% (pembulatan), di mana sebanyak 70.506 pengaduan berhasil diselesaikan tepat waktu. Kondisi ini mencerminkan komitmen dan responsivitas operasional yang sangat solid di seluruh jajaran unit kerja, sehingga seluruh 27 kantor cabang berhasil mengamankan pencapaian Bobot KPI 6 dan Skor KPI Maksimal 6."
     },
     {
      "label": null,
      "teks": "Meskipun capaian secara umum sudah baik, evaluasi mendalam menunjukkan bahwa terdapat single point of leakage sebanyak 1 kasus yang mengalami keterlambatan atau tidak sesuai SLA. Kedua kasus tersebut di kantor cabang Merangin Bangko sebanyak 1 kasus dari total 1.258 pengaduan (pencapaian KPI 99,92%). Sementara itu, 26 Kantor cabang lainnya mencatatkan performa penyelesaian 100% sempurna tanpa adanya catatan over SLA."
     }
    ],
    "mlt": [
     {
      "label": null,
      "teks": "Penyaluran Manfaat Layanan Tambahan (MLT) di Kantor Wilayah Sumbagsel memperlihatkan dinamika pencapaian yang sangat kontras antara realisasi nilai nominal dan kuantitas unit. Secara nominal, Kanwil Sumbagsel mencatatkan kinerja yang luar biasa dengan total penyaluran nominal mencapai Rp151,36 Miliar atau setara dengan 126,45% dari target nominal wilayah. Namun di sisi lain, penyerapan dari kuantitas unit masih tergolong sangat rendah, yakni baru terealisasi sebanyak 29 unit dari keseluruhan target wilayah atau baru mencapai 23,02%."
     },
     {
      "label": null,
      "teks": "Ketimpangan ini mengindikasikan bahwa skema penyaluran MLT yang berjalan saat ini didominasi oleh pembiayaan bernilai besar (high-value/high- ticket size), tetapi jangkauan manfaatnya belum merata ke banyak peserta. Kondisi tersebut diperparah oleh tingkat pasivitas unit kerja yang tinggi, di mana penyaluran MLT saat ini hanya terkonsentrasi di 7 kantor cabang. Cabang Bandar Lampung tampil sebagai kontributor unit terbesar sekaligus satu-satunya cabang yang berhasil melampaui target unit (13 unit atau 108,33%), sementara Cabang Jambi dan Palembang menjadi penopang utama penyerapan nominal. Sebaliknya, sebanyak 20 dari 27 kantor cabang (74%) masih mencatatkan angka nihil atau belum memproses penyaluran MLT sama sekali."
     }
    ],
    "klaim": [
     {
      "label": null,
      "teks": "Realisasi Manfaat Beasiswa BPJS Ketenagakerjaan Kanwil Sumbagsel sampai dengan Juli 2026 telah mencapai 4.978 anak penerima manfaat, dengan total nominal manfaat sebesar Rp20,47 miliar."
     },
     {
      "label": null,
      "teks": "Secara keseluruhan, realisasi manfaat beasiswa sampai dengan Juli 2026 menunjukkan cakupan manfaat yang cukup luas, dengan porsi terbesar penerima berada pada jenjang pendidikan dasar hingga perguruan tinggi. Data ini menjadi gambaran kontribusi BPJS Ketenagakerjaan dalam mendukung keberlanjutan pendidikan anak peserta melalui pemberian manfaat beasiswa."
     }
    ],
    "unit": [
     {
      "label": null,
      "teks": "Unit Layanan di jajaran Kantor Wilayah Sumbagsel saat ini terdiri dari 34 titik yang mencakup 3 Unit Layanan PMI dan 31 Unit Layanan Kabupaten/Kota yang tersebar di Kabupaten Kota di Wilayah Sumbagsel dan terintegrasi secara langsung dengan skema pairing ke Kantor Cabang di Jajaran Kantor Wilayah Sumbagsel. Penempatan para petugas unit layanan menyebar secara strategis di berbagai area publik seperti di Mall Pelayanan Publik (MPP), Kantor Dinas Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu, Kantor BP3MI, BPKAD hingga Kantor Perbankan Mitra Kerjasama. Apabila dikombinasikan dengan jaringan 27 Kantor Cabang BPJS Ketenagakerjaan, Kanal layanan fisik di wilayah Sumbagsel telah menjangkau 48 dari total 50 total kabupaten/kota yang ada di Provinsi Sumsel, Bengkulu, Jambi, Lampung dan Bangka Belitung atau setara dengan 96% coverage wilayah."
     },
     {
      "label": null,
      "teks": "Berdasarkan analisis wilayah operasional, tiga provinsi di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan Bangka Belitung terlayani penuh di 7 kabupaten/kota melalui kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Timur) dan 2 Kantor Cabang (Pangkal Pinang dan Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 Unit Layanan (Kerinci, Tebo, Tanjung Jabung Timur) serta 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung Jabung Barat, Sarolangun). Sementara itu, Provinsi Bengkulu terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang (Arga Makmur dan Rejang Lebong Curup)."
     },
     {
      "label": null,
      "teks": "Sedangkan lokasi yang dikategorikan sebagai wilayah blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung lainnya sebenarnya telah tercover oleh 7 Unit Layanan dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16 kabupaten/kota Sumsel lainnya sudah terjangkau oleh 9 Unit Layanan dan 7 Kantor Cabang."
     }
    ],
    "igi": [
     {
      "label": null,
      "teks": "Kinerja penyelesaian klaim pending Jaminan Kecelakaan Kerja (JKK) melalui aplikasi e-PLKK sesuai Service Level Agreement (SLA) secara umum mencatatkan hasil yang cukup baik, di mana mayoritas kantor cabang berhasil konsisten menjaga skor sempurna. Berdasarkan data tren bulanan dari Februari hingga Juli, cabang Muaro Bungo, Jambi, Lampung Tengah, dan Bandar Lampung sukses mempertahankan capaian maksimal bernilai 15 secara penuh tanpa ada penurunan nilai."
     }
    ]
   }
  }
 },
 "8": {
  "periode": "Agustus 2026",
  "pdf": "assets/pdf/MONTHLY_REPORT_AGUSTUS.pdf",
  "sections": {
   "esurveyKanwil": [
    {
     "nama": "SUMBARRIAU",
     "skala5": 5.55,
     "skala100": 92.53
    },
    {
     "nama": "SUMBAGSEL",
     "skala5": 5.54,
     "skala100": 92.31,
     "sangatPuas": 66198,
     "puas": 24435,
     "cukupPuas": 6767,
     "kurangPuas": 0,
     "tidakPuas": 789,
     "sangatTidakPuas": 918,
     "status": "PASSED"
    },
    {
     "nama": "SULAWESI MALUKU",
     "skala5": 5.52,
     "skala100": 91.97
    },
    {
     "nama": "SUMBAGUT",
     "skala5": 5.44
    },
    {
     "nama": "JATIM",
     "skala5": 5.42
    },
    {
     "nama": "BANUSPA",
     "skala5": 5.4
    },
    {
     "nama": "KALIMANTAN",
     "skala5": 5.4
    },
    {
     "nama": "DKI JAKARTA",
     "skala5": 5.35
    },
    {
     "nama": "JAWA BARAT",
     "skala5": 5.35
    },
    {
     "nama": "BANTEN",
     "skala5": 5.32
    },
    {
     "nama": "JATENG DAN DIY",
     "skala5": 5.3
    }
   ],
   "esurveyKpi": {
    "peringkat": 2,
    "pctPuas": 91.45,
    "status": "PASSED",
    "skor": 5.54,
    "respondenPuas": 90633,
    "respondenTotal": 99107,
    "kategori": [
     {
      "kategori": "Sangat Puas",
      "responden": 66198,
      "persen": 66.79
     },
     {
      "kategori": "Puas",
      "responden": 24435,
      "persen": 24.66
     },
     {
      "kategori": "Cukup Puas",
      "responden": 6767,
      "persen": 6.83
     },
     {
      "kategori": "Kurang Puas",
      "responden": 0,
      "persen": 0.0
     },
     {
      "kategori": "Tidak Puas",
      "responden": 789,
      "persen": 0.8
     },
     {
      "kategori": "Sangat Tidak Puas",
      "responden": 918,
      "persen": 0.93
     }
    ]
   },
   "esurveyTop5": [
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 3,
     "tidakPuas": 19,
     "kurangPuas": null,
     "puas": 516,
     "sangatPuas": 3200,
     "skala5": 5.74
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 2,
     "kurangPuas": null,
     "puas": 265,
     "sangatPuas": 1526,
     "skala5": 5.73
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 34,
     "tidakPuas": 20,
     "kurangPuas": null,
     "puas": 1036,
     "sangatPuas": 4266,
     "skala5": 5.69
    },
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 44,
     "tidakPuas": 42,
     "kurangPuas": null,
     "puas": 1956,
     "sangatPuas": 6832,
     "skala5": 5.64
    },
    {
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "sangatTidakPuas": 44,
     "tidakPuas": 51,
     "kurangPuas": null,
     "puas": 1239,
     "sangatPuas": 5235,
     "skala5": 5.64
    }
   ],
   "esurveyBottom5": [
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 94,
     "tidakPuas": 81,
     "kurangPuas": null,
     "puas": 1032,
     "sangatPuas": 2007,
     "skala5": 5.27
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 135,
     "tidakPuas": 55,
     "kurangPuas": null,
     "puas": 2384,
     "sangatPuas": 3437,
     "skala5": 5.29
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 27,
     "tidakPuas": 16,
     "kurangPuas": null,
     "puas": 910,
     "sangatPuas": 1159,
     "skala5": 5.35
    },
    {
     "nama": "REJANG LEBONG CURUP",
     "sangatTidakPuas": 27,
     "tidakPuas": 34,
     "kurangPuas": null,
     "puas": 782,
     "sangatPuas": 1160,
     "skala5": 5.36
    },
    {
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "sangatTidakPuas": 14,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 563,
     "sangatPuas": 880,
     "skala5": 5.41
    }
   ],
   "digitalKanwil": [
    {
     "peringkat": 1,
     "kode": "903",
     "nama": "KANWIL DKI JAKARTA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.72,
     "pencapaian": 99.72
    },
    {
     "peringkat": 2,
     "kode": "904",
     "nama": "KANWIL JAWA BARAT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.12,
     "pencapaian": 99.12
    },
    {
     "peringkat": 3,
     "kode": "905",
     "nama": "KANWIL JATENG DAN DIY",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.93,
     "pencapaian": 97.93
    },
    {
     "peringkat": 4,
     "kode": "910",
     "nama": "KANWIL BANTEN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.63,
     "pencapaian": 97.63
    },
    {
     "peringkat": 5,
     "kode": "907",
     "nama": "KANWIL KALIMANTAN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.56,
     "pencapaian": 97.56
    },
    {
     "peringkat": 6,
     "kode": "909",
     "nama": "KANWIL SUMBARRIAU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.71,
     "pencapaian": 95.71
    },
    {
     "peringkat": 7,
     "kode": "906",
     "nama": "KANWIL JATIM",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 94.15,
     "pencapaian": 94.15
    },
    {
     "peringkat": 8,
     "kode": "901",
     "nama": "KANWIL SUMBAGUT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.67,
     "pencapaian": 93.67
    },
    {
     "peringkat": 9,
     "kode": "908",
     "nama": "KANWIL SULAWESI MALUKU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.6,
     "pencapaian": 93.6
    },
    {
     "peringkat": 10,
     "kode": "902",
     "nama": "KANWIL SUMBAGSEL",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.43,
     "pencapaian": 93.43
    },
    {
     "peringkat": 11,
     "kode": "911",
     "nama": "KANWIL BANUSPA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 92.34,
     "pencapaian": 92.34
    }
   ],
   "digitalKartu": {
    "targetJHT": 67772,
    "pctJHT": 91.34,
    "targetJP": 8445,
    "pctJP": 100.0,
    "targetBea": 449,
    "pctBea": 100.0,
    "peringkat": 10,
    "dari": 11
   },
   "digitalCabang": [
    {
     "nama": "Jambi",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Pangkal Pinang",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Bengkulu",
     "pctCapJHT": 0.9699,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9895
    },
    {
     "nama": "Belitung",
     "pctCapJHT": 0.9644,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9875
    },
    {
     "nama": "Muara Enim",
     "pctCapJHT": 0.9605,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9862
    },
    {
     "nama": "Tanjung Jabung Barat",
     "pctCapJHT": 0.9572,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.985
    },
    {
     "nama": "Bandar Lampung",
     "pctCapJHT": 0.9331,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9766
    },
    {
     "nama": "Muaro Bungo",
     "pctCapJHT": 0.9063,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9672
    },
    {
     "nama": "Lampung Tengah",
     "pctCapJHT": 0.8855,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9599
    },
    {
     "nama": "Tulang Bawang",
     "pctCapJHT": 0.8175,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9361
    },
    {
     "nama": "Lubuk Linggau",
     "pctCapJHT": 0.8073,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9325
    },
    {
     "nama": "Prabumulih",
     "pctCapJHT": 0.7887,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9261
    },
    {
     "nama": "OKU Baturaja",
     "pctCapJHT": 0.745,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9107
    },
    {
     "nama": "Arga Makmur",
     "pctCapJHT": 0.7428,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.91
    },
    {
     "nama": "Merangin",
     "pctCapJHT": 0.7211,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9024
    },
    {
     "nama": "Lahat",
     "pctCapJHT": 0.719,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9017
    },
    {
     "nama": "Muaro Jambi",
     "pctCapJHT": 0.6994,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8948
    },
    {
     "nama": "Sarolangun",
     "pctCapJHT": 0.6863,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8902
    },
    {
     "nama": "Palembang",
     "pctCapJHT": 0.9406,
     "pctCapJP": 1.0,
     "pctCapBea": 0.5526,
     "hasil": 0.8897
    },
    {
     "nama": "Sungai Penuh",
     "pctCapJHT": 0.6477,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8767
    },
    {
     "nama": "Banyuasin",
     "pctCapJHT": 0.6244,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8685
    },
    {
     "nama": "Rejang Lebong",
     "pctCapJHT": 0.5706,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8497
    },
    {
     "nama": "Kotabumi",
     "pctCapJHT": 0.5441,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8404
    },
    {
     "nama": "Kalianda",
     "pctCapJHT": 0.5291,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8352
    },
    {
     "nama": "Pringsewu",
     "pctCapJHT": 0.4756,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8165
    },
    {
     "nama": "Batang Hari",
     "pctCapJHT": 0.7473,
     "pctCapJP": 1.0,
     "pctCapBea": 0.4375,
     "hasil": 0.7991
    },
    {
     "nama": "Metro",
     "pctCapJHT": 0.373,
     "pctCapJP": 1.0,
     "pctCapBea": 0.5556,
     "hasil": 0.6917
    }
   ],
   "slaKlaim": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "jht": 2154,
     "jkk": 17,
     "jkm": 127,
     "jpn": 30,
     "totalSla": 3391,
     "pencapaian": 1.0,
     "jkp": 1063,
     "total": 3391
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS",
     "jht": 1814,
     "jkk": 18,
     "jkm": 138,
     "jpn": 30,
     "totalSla": 2377,
     "pencapaian": 1.0,
     "jkp": 377,
     "total": 2377
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "jht": 1989,
     "jkk": 25,
     "jkm": 72,
     "jpn": 87,
     "totalSla": 2545,
     "pencapaian": 1.0,
     "jkp": 372,
     "total": 2545
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA",
     "jht": 1503,
     "jkk": 17,
     "jkm": 83,
     "jpn": 31,
     "totalSla": 2593,
     "pencapaian": 1.0,
     "jkp": 959,
     "total": 2593
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "jht": 18929,
     "jkk": 304,
     "jkm": 464,
     "jpn": 1032,
     "totalSla": 25161,
     "pencapaian": 1.0,
     "jkp": 4432,
     "total": 25161
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "jht": 3869,
     "jkk": 60,
     "jkm": 130,
     "jpn": 183,
     "totalSla": 5080,
     "pencapaian": 1.0,
     "jkp": 838,
     "total": 5080
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "jht": 3671,
     "jkk": 46,
     "jkm": 341,
     "jpn": 205,
     "totalSla": 4932,
     "pencapaian": 1.0,
     "jkp": 669,
     "total": 4932
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR",
     "jht": 1827,
     "jkk": 10,
     "jkm": 47,
     "jpn": 50,
     "totalSla": 3040,
     "pencapaian": 1.0,
     "jkp": 1106,
     "total": 3040
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "jht": 3714,
     "jkk": 7,
     "jkm": 92,
     "jpn": 132,
     "totalSla": 4539,
     "pencapaian": 1.0,
     "jkp": 594,
     "total": 4539
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "jht": 2461,
     "jkk": 23,
     "jkm": 66,
     "jpn": 122,
     "totalSla": 3125,
     "pencapaian": 1.0,
     "jkp": 453,
     "total": 3125
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "jht": 4305,
     "jkk": 36,
     "jkm": 102,
     "jpn": 83,
     "totalSla": 5260,
     "pencapaian": 1.0,
     "jkp": 734,
     "total": 5260
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA",
     "jht": 2333,
     "jkk": 19,
     "jkm": 93,
     "jpn": 111,
     "totalSla": 2773,
     "pencapaian": 1.0,
     "jkp": 217,
     "total": 2773
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "jht": 3157,
     "jkk": 5,
     "jkm": 92,
     "jpn": 174,
     "totalSla": 3596,
     "pencapaian": 1.0,
     "jkp": 168,
     "total": 3596
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "jht": 2133,
     "jkk": 22,
     "jkm": 39,
     "jpn": 54,
     "totalSla": 3352,
     "pencapaian": 1.0,
     "jkp": 1104,
     "total": 3352
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "jht": 2101,
     "jkk": 4,
     "jkm": 39,
     "jpn": 14,
     "totalSla": 3075,
     "pencapaian": 1.0,
     "jkp": 917,
     "total": 3075
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "jht": 12450,
     "jkk": 148,
     "jkm": 279,
     "jpn": 496,
     "totalSla": 14281,
     "pencapaian": 1.0,
     "jkp": 908,
     "total": 14281
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "jht": 3188,
     "jkk": 75,
     "jkm": 123,
     "jpn": 271,
     "totalSla": 4989,
     "pencapaian": 1.0,
     "jkp": 1332,
     "total": 4989
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "jht": 2573,
     "jkk": 7,
     "jkm": 79,
     "jpn": 58,
     "totalSla": 3064,
     "pencapaian": 1.0,
     "jkp": 347,
     "total": 3064
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "jht": 3352,
     "jkk": 15,
     "jkm": 50,
     "jpn": 117,
     "totalSla": 3871,
     "pencapaian": 1.0,
     "jkp": 337,
     "total": 3871
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "jht": 1634,
     "jkk": 33,
     "jkm": 133,
     "jpn": 98,
     "totalSla": 2401,
     "pencapaian": 1.0,
     "jkp": 503,
     "total": 2401
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "jht": 2466,
     "jkk": 19,
     "jkm": 52,
     "jpn": 84,
     "totalSla": 4119,
     "pencapaian": 1.0,
     "jkp": 1498,
     "total": 4119
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "jht": 2047,
     "jkk": 13,
     "jkm": 95,
     "jpn": 52,
     "totalSla": 2697,
     "pencapaian": 1.0,
     "jkp": 490,
     "total": 2697
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "jht": 3896,
     "jkk": 74,
     "jkm": 227,
     "jpn": 121,
     "totalSla": 4629,
     "pencapaian": 1.0,
     "jkp": 311,
     "total": 4629
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "jht": 5909,
     "jkk": 177,
     "jkm": 209,
     "jpn": 314,
     "totalSla": 9363,
     "pencapaian": 1.0,
     "jkp": 2754,
     "total": 9363
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "jht": 3161,
     "jkk": 53,
     "jkm": 146,
     "jpn": 264,
     "totalSla": 5383,
     "pencapaian": 0.9998,
     "jkp": 1760,
     "total": 5384
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 2887,
     "jkk": 14,
     "jkm": 54,
     "jpn": 82,
     "totalSla": 3723,
     "pencapaian": 0.9995,
     "jkp": 688,
     "total": 3725
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "jht": 2317,
     "jkk": 18,
     "jkm": 75,
     "jpn": 54,
     "totalSla": 3384,
     "pencapaian": 0.9994,
     "jkp": 922,
     "total": 3386
    }
   ],
   "slaKpi": {
    "total": 136748,
    "terpenuhi": 136743,
    "over": 5,
    "pct": 100.0
   },
   "slaTerendah": [
    {
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARO JAMBI SENGETI",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARA ENIM",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 1,
     "jumlah": 1
    }
   ],
   "pengaduan": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "total": 1364,
     "sesuaiSla": 1363,
     "pencapaian": 99.93,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "total": 1701,
     "sesuaiSla": 1701,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "total": 2926,
     "sesuaiSla": 2926,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "total": 1274,
     "sesuaiSla": 1274,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "total": 2937,
     "sesuaiSla": 2937,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "total": 2302,
     "sesuaiSla": 2302,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "total": 6966,
     "sesuaiSla": 6966,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "total": 1958,
     "sesuaiSla": 1958,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "total": 2836,
     "sesuaiSla": 2836,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "total": 4364,
     "sesuaiSla": 4364,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "total": 4839,
     "sesuaiSla": 4839,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "total": 8491,
     "sesuaiSla": 8491,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "total": 2250,
     "sesuaiSla": 2250,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "total": 661,
     "sesuaiSla": 661,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "total": 668,
     "sesuaiSla": 668,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "total": 8595,
     "sesuaiSla": 8595,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "total": 2903,
     "sesuaiSla": 2903,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "total": 1951,
     "sesuaiSla": 1951,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "total": 2756,
     "sesuaiSla": 2756,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "total": 1085,
     "sesuaiSla": 1085,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "total": 1487,
     "sesuaiSla": 1487,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "total": 1056,
     "sesuaiSla": 1056,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "total": 1223,
     "sesuaiSla": 1223,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "total": 1657,
     "sesuaiSla": 1657,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "total": 2384,
     "sesuaiSla": 2384,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "total": 3617,
     "sesuaiSla": 3617,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "total": 4600,
     "sesuaiSla": 4600,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    }
   ],
   "mlt": [
    {
     "nama": "Jambi",
     "targetUnit": 11,
     "targetNominal": 770000000,
     "targetUnit120": 13,
     "targetNominal120": 924000000,
     "realUnit": 8,
     "realNominal": 68041000000,
     "pctUnit": 0.7273,
     "pctNominal": 88.3649
    },
    {
     "nama": "Muaro Bungo",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "realUnit": 3,
     "realNominal": 37500000000,
     "pctUnit": 0.5,
     "pctNominal": 89.2857
    },
    {
     "nama": "Merangin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Muaro Jambi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "realUnit": 1,
     "realNominal": 120000000,
     "pctUnit": 0.3333,
     "pctNominal": 1.3333
    },
    {
     "nama": "Sarolangun",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Batang Hari",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Tanjung Jabung Barat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Sungai Penuh",
     "targetUnit": 2,
     "targetNominal": 60000000,
     "targetUnit120": 2,
     "targetNominal120": 72000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Palembang",
     "targetUnit": 15,
     "targetNominal": 1050000000,
     "targetUnit120": 18,
     "targetNominal120": 1260000000,
     "realUnit": 2,
     "realNominal": 11307200000,
     "pctUnit": 0.1333,
     "pctNominal": 10.7688
    },
    {
     "nama": "Bengkulu",
     "targetUnit": 8,
     "targetNominal": 560000000,
     "targetUnit120": 10,
     "targetNominal120": 672000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Pangkal Pinang",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Muara Enim",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "realUnit": 2,
     "realNominal": 543000000,
     "pctUnit": 0.3333,
     "pctNominal": 1.2929
    },
    {
     "nama": "Banyuasin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "realUnit": 2,
     "realNominal": 19800000000,
     "pctUnit": 0.6667,
     "pctNominal": 220.0
    },
    {
     "nama": "Belitung",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Lubuk Linggau",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Lahat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "OKU Baturaja",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Prabumulih",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Arga Makmur",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Rejang Lebong",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Bandar Lampung",
     "targetUnit": 12,
     "targetNominal": 840000000,
     "targetUnit120": 14,
     "targetNominal120": 1008000000,
     "realUnit": 13,
     "realNominal": 24194000000,
     "pctUnit": 1.0833,
     "pctNominal": 28.8024
    },
    {
     "nama": "Lampung Tengah",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kalianda",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kotabumi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Pringsewu",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Metro",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Tulang Bawang",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kanwil Sumbagsel",
     "targetUnit": 0,
     "targetNominal": 113120000000,
     "targetUnit120": 0
    }
   ],
   "mltKpi": {
    "realUnit": 31,
    "realNominal": 161505200000,
    "pctUnit": 24.6,
    "pctNominal": 134.92
   },
   "klaim": {
    "programs": [
     {
      "program": "JHT",
      "kasus": 156880,
      "nominal": 2053975683580
     },
     {
      "program": "JKM",
      "kasus": 8258,
      "nominal": 150918600000
     },
     {
      "program": "JKK",
      "kasus": 25872,
      "nominal": 118533019185
     },
     {
      "program": "JP",
      "kasus": 4134,
      "nominal": 68402702170
     },
     {
      "program": "JKP",
      "kasus": 25310,
      "nominal": 63841334452
     }
    ],
    "cabang": [
     {
      "nama": "JAMBI",
      "kasus": 23615,
      "nominal": 181659454045
     },
     {
      "nama": "MUARO BUNGO",
      "kasus": 9560,
      "nominal": 104241180799
     },
     {
      "nama": "MERANGIN BANGKO",
      "kasus": 3441,
      "nominal": 44414044052
     },
     {
      "nama": "MUARO JAMBI SENGETI",
      "kasus": 3442,
      "nominal": 43799009151
     },
     {
      "nama": "SAROLANGUN LINTAS SUMATERA",
      "kasus": 2472,
      "nominal": 39445766979
     },
     {
      "nama": "BATANGHARI MUARA BULIAN",
      "kasus": 2601,
      "nominal": 32604641967
     },
     {
      "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
      "kasus": 2699,
      "nominal": 29251094855
     },
     {
      "nama": "SUNGAI PENUH YOS SUDARSO",
      "kasus": 2756,
      "nominal": 46478465862
     },
     {
      "nama": "PALEMBANG",
      "kasus": 46851,
      "nominal": 512500227765
     },
     {
      "nama": "BENGKULU",
      "kasus": 10200,
      "nominal": 91053231546
     },
     {
      "nama": "PANGKAL PINANG",
      "kasus": 16040,
      "nominal": 142255018296
     },
     {
      "nama": "MUARA ENIM",
      "kasus": 12629,
      "nominal": 111505816217
     },
     {
      "nama": "BANYUASIN PANGKALAN BALAI",
      "kasus": 4688,
      "nominal": 70804129097
     },
     {
      "nama": "BELITUNG TANJUNG PANDAN",
      "kasus": 3255,
      "nominal": 53564235491
     },
     {
      "nama": "LUBUK LINGGAU YOS SUDARSO",
      "kasus": 5412,
      "nominal": 79160565443
     },
     {
      "nama": "LAHAT PASAR LAMA",
      "kasus": 4212,
      "nominal": 40151583203
     },
     {
      "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
      "kasus": 2853,
      "nominal": 45781130113
     },
     {
      "nama": "PRABUMULIH SUDIRMAN",
      "kasus": 3818,
      "nominal": 65389317295
     },
     {
      "nama": "ARGA MAKMUR",
      "kasus": 3381,
      "nominal": 34847123108
     },
     {
      "nama": "REJANG LEBONG CURUP",
      "kasus": 3160,
      "nominal": 40380195899
     },
     {
      "nama": "BANDAR LAMPUNG",
      "kasus": 26329,
      "nominal": 308065194355
     },
     {
      "nama": "LAMPUNG TENGAH",
      "kasus": 10276,
      "nominal": 102876770154
     },
     {
      "nama": "LAMPUNG SELATAN KALIANDA",
      "kasus": 3188,
      "nominal": 47238222508
     },
     {
      "nama": "LAMPUNG UTARA KOTABUMI",
      "kasus": 2625,
      "nominal": 38116960824
     },
     {
      "nama": "PRINGSEWU SUDIRMAN",
      "kasus": 3817,
      "nominal": 54191004251
     },
     {
      "nama": "KOTA METRO NASUTION",
      "kasus": 4020,
      "nominal": 60611517374
     },
     {
      "nama": "TULANG BAWANG BANJAR AGUNG",
      "kasus": 3114,
      "nominal": 35285438738
     }
    ],
    "beasiswa": {
     "totalAnak": 5756,
     "totalNominal": 23537600000,
     "jenjang": {
      "KULIAH": {
       "nominal": 13464000000,
       "kasus": 1110
      },
      "SD": {
       "kasus": 2078,
       "nominal": 3156000000
      },
      "SMA": {
       "nominal": 4263000000,
       "kasus": 1341
      },
      "SMP": {
       "nominal": 2598500000,
       "kasus": 1214
      },
      "TK": {
       "nominal": 43500000,
       "kasus": 8
      },
      "LAINNYA": {
       "kasus": 5,
       "nominal": 12600000
      }
     }
    }
   },
   "unit": {
    "jumlah": {
     "pmi": 3,
     "kabKota": 31
    },
    "petugas": [
     {
      "petugas": "KEKE ANISA PUTRI",
      "cabang": "Sungai Penuh",
      "mitra": "UL PMI KERINCI",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA SUNGAI PENUH"
     },
     {
      "petugas": "NURWINDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA TENGAH",
      "penempatan": "MPP Kabupaten Bangka Tengah"
     },
     {
      "petugas": "SUWANDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA SELATAN",
      "penempatan": "BANK BNI KCP TOBOALI"
     },
     {
      "petugas": "Muhammed Hafiid Al Fayed",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA BARAT",
      "penempatan": "MPP Kabupaten Bangka Barat"
     },
     {
      "petugas": "EVI NOVITASARI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA",
      "penempatan": "KANTOR PPN SUNGAILIAT KABUPATEN BANGKA"
     },
     {
      "petugas": "ILMAN ADHITIYA",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BELITUNG TIMUR",
      "penempatan": "DINAS PENANAMAN MODAL DAN PERIZINAN TERPADU SATU PINTU KABUPATEN BELITUNG TIMUR"
     },
     {
      "petugas": "MUSTRI LIZA",
      "cabang": "Palembang",
      "mitra": "UL KAB MUSI BANYUASIN",
      "penempatan": "Kantor Dinas Sosial Musi Banyuasin"
     },
     {
      "petugas": "SAFIRA SALBILLA DWINURFI",
      "cabang": "Palembang",
      "mitra": "UL KAB OGAN ILIR",
      "penempatan": "Mal Pelayanan Publik Kabupaten Ogan Ilir"
     },
     {
      "petugas": "NUR TYSA SHAFIRA",
      "cabang": "Palembang",
      "mitra": "UL PMI PALEMBANG",
      "penempatan": "KANTOR BP3MI SUMSEL"
     },
     {
      "petugas": "SHINTA RABIUL AWWALIYAH",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU SELATAN",
      "penempatan": "Dinas penanaman modal dan PTSP OKU Selatan"
     },
     {
      "petugas": "BAHKTI ALFAHREZI",
      "cabang": "Muaraenim",
      "mitra": "UL KAB MUSI RAWAS UTARA",
      "penempatan": "BANK BNI KCP MUSI RAWAS UTARA"
     },
     {
      "petugas": "HANI RUSITA",
      "cabang": "Muaraenim",
      "mitra": "UL KOTA PAGAR ALAM",
      "penempatan": "BANK BNI KOTA PAGAR ALAM"
     },
     {
      "petugas": "ABADI SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB PENUKAL ABAB LEMATANG ILIR",
      "penempatan": "KANTOR DPMPTSP KABUPATEN PALI"
     },
     {
      "petugas": "Ratih Permata Sari",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU TIMUR",
      "penempatan": "BANK BNI MARTAPURA OGAN KOMERING ULU TIMUR"
     },
     {
      "petugas": "Muhammad Waiz Al Qarny",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ILIR",
      "penempatan": "BPKAD KAB. OKI"
     },
     {
      "petugas": "NOPAN SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB EMPAT LAWANG",
      "penempatan": "BANK BNI EMPAT LAWANG"
     },
     {
      "petugas": "ANTON TRY WIJAYA",
      "cabang": "Muara Bungo",
      "mitra": "UL MALL MPP TEBO",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN TEBO"
     },
     {
      "petugas": "AKBAR DHARMA PUTRA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB TULANG BAWANG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK TULANG BAWANG BARAT"
     },
     {
      "petugas": "ASWAN IRFAN RIANSYAH",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB MESUJI",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN MESUJI"
     },
     {
      "petugas": "ARI WIRAWAN",
      "cabang": "Lampung Tengah",
      "mitra": "UL PESISIR BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK PESISIR BARAT"
     },
     {
      "petugas": "SELAMET ROCHMATUL ARDA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB LAMPUNG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK LAMPUNG BARAT"
     },
     {
      "petugas": "HENGKI",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB WAY KANAN",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN WAYKANAN"
     },
     {
      "petugas": "KURNIA LESTARI",
      "cabang": "Jambi",
      "mitra": "UL KAB TANJUNG JABUNG TIMUR",
      "penempatan": "BANK BNI MUARA SABAK"
     },
     {
      "petugas": "TANTI YOSEVA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB LEBONG",
      "penempatan": "MALL PELAYANAN PUBLIK KAB LEBONG"
     },
     {
      "petugas": "RENANTHERA CANDRA ERLAMBANG",
      "cabang": "Bengkulu",
      "mitra": "UL KAB BENGKULU SELATAN",
      "penempatan": "MPP KAB BENGKULU SELATAN"
     },
     {
      "petugas": "OZA TRIWIBOWO",
      "cabang": "Bengkulu",
      "mitra": "UL KAB MUKOMUKO",
      "penempatan": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kab Mukomuko"
     },
     {
      "petugas": "RIAN ADE SAPUTRA",
      "cabang": "Bengkulu",
      "mitra": "UL BENGKULU TENGAH",
      "penempatan": "MPP BENGKULU TENGAH"
     },
     {
      "petugas": "FENI JUITA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB KAUR",
      "penempatan": "BANK BENGKULU"
     },
     {
      "petugas": "CRISTIE SETIAWAN",
      "cabang": "Bengkulu",
      "mitra": "UL KAB SELUMA",
      "penempatan": "MALL PELAYANAN PUBLIK KAB SELUMA"
     },
     {
      "petugas": "NINDA ALYA SAHIRA",
      "cabang": "Bengkulu",
      "mitra": "UL KEPAHIANG",
      "penempatan": "MPP KEPAHIANG"
     },
     {
      "petugas": "JEPI LEONATA",
      "cabang": "Bengkulu",
      "mitra": "UL KOTA BENGKULU",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA BENGKULU"
     },
     {
      "petugas": "Sodikin",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB TANGGAMUS",
      "penempatan": "KANTOR DPMPPTSP KABUPATEN TANGGAMUS"
     },
     {
      "petugas": "MUHAMAD ROYNALDI",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB LAMPUNG TIMUR",
      "penempatan": "BANK BNI WAY JEPARA KAB LAMPUNG TIMUR"
     },
     {
      "petugas": "RINANTI REKHWAN",
      "cabang": "Bandar Lampung",
      "mitra": "UL PMI BANDAR LAMPUNG",
      "penempatan": "UPT BP2MI LAMPUNG di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16"
     }
    ]
   },
   "igi": {
    "matriks": [
     {
      "nama": "MUARA ENIM",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 11.88,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.61
     },
     {
      "nama": "PALEMBANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.23,
       "Juni": 14.93,
       "Juli": 14.97,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.89
     },
     {
      "nama": "BENGKULU",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.57,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.95
     },
     {
      "nama": "PANGKAL PINANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 14.85,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 14.87,
       "September": 15.0
      },
      "capaian": 14.97
     },
     {
      "nama": "MUARO BUNGO",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "JAMBI",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     }
    ],
    "berjalan": [
     {
      "nama": "PANGKAL PINANG",
      "total": 338,
      "sesuaiSla": 335,
      "capaian": 99.11,
      "nilai": 14.87
     },
     {
      "nama": "JAMBI",
      "total": 435,
      "sesuaiSla": 435,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARO BUNGO",
      "total": 73,
      "sesuaiSla": 73,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "PALEMBANG",
      "total": 907,
      "sesuaiSla": 907,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARA ENIM",
      "total": 161,
      "sesuaiSla": 161,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "total": 391,
      "sesuaiSla": 391,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BENGKULU",
      "total": 136,
      "sesuaiSla": 136,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "total": 446,
      "sesuaiSla": 446,
      "capaian": 100.0,
      "nilai": 15.0
     }
    ]
   },
   "narasi": {
    "esurvey": [
     {
      "label": "Ringkasan",
      "teks": "Berdasarkan hasil E-Survey Integrasi 2026, Kanwil Sumbagsel memperoleh skor kepuasan 5,54 dari skala 6 dengan kategori Sangat Puas dan status \"PASSED\" (>5,00). Kanwil Sumbagsel berhasil menempati peringkat ke-2 dari 11 Kanwil secara nasional. Dari total 99.107 responden, sebanyak 90.633 responden atau 91,45% memberikan penilaian dalam persentase Puas (24,66% / 24.435 responden) dan Sangat Puas (66,79% / 66.198 responden). Capaian ini menunjukkan bahwa secara umum kualitas pelayanan Kanwil Sumbagsel telah berjalan sangat baik dan mendapatkan penerimaan positif dari peserta."
     }
    ],
    "digital": [
     {
      "label": null,
      "teks": "Kantor Wilayah Sumbagsel mencatatkan nilai Digital Service sebesar 93,43% dari target sebesar 100,00 (dengan bobot sebesar 8). Hasil ini menempatkan Kanwil Sumbagsel di peringkat ke-10 dari total 11 Kantor Wilayah secara nasional. Secara umum capaian kinerja berada di papan bawah, berada di bawah posisi Sulawesi Maluku (93,60%) dan unggul dari Banuspa (92,34%)."
     },
     {
      "label": null,
      "teks": "Capaian Sumbagsel didorong oleh performa maksimal pada dua dari tiga indikator utama. Target JP Berkala JMO dengan target sebesar 8.445 dan program Target Beasiswa JMO dengan target sebesar 449 berhasil diselesaikan secara sempurna dengan pencapaian realisasi 100,00%. Namun, penentu utama belum optimalnya nilai Sumbagsel berada pada Target JHT melalui JMO. Dengan volume target terbesar yaitu sebesar 67.772, realisasi JHT JMO baru menyentuh angka 91,34% (terdapat gap sebesar 8,66%)."
     },
     {
      "label": "Ringkasan",
      "teks": "- Sektor Beasiswa JMO: Sebanyak 24 dari 27 cabang berhasil menyentuh angka maksimal 100,00%. Namun, terdapat 3 cabang yang capaiannya berada di bawah target, yaitu Palembang (55,26%), Batang Hari (43,75%), dan Metro (55,56%).\n- Sektor Klaim JHT via JMO (Single Point of Optimization): Menjadi variabel penentu utama kinerja cabang. Capaian JHT JMO bergerak sangat bervariasi, dari yang tertinggi 100,00% (Jambi & Pangkal Pinang) hingga yang terendah 37,30% (Metro)."
     },
     {
      "label": "Insight",
      "teks": "- JHT JMO sebagai Penentu Utama Hasil Akhir: Karena persentase JP Berkala dan Beasiswa JMO sudah maksimal (100,00%) di mayoritas cabang, capaian JHT JMO menjadi kunci tunggal untuk mendongkrak Hasil Akhir kantor cabang maupun Kanwil.\n- Tingkat Adopsi JHT JMO Masih Low-Performing di Kluster Bawah: Terdapat 16 kantor cabang yang capaian JHT JMO-nya berada di bawah 80,00%, dengan 8 cabang di antaranya berada di bawah 70% (Muaro Jambi, Sarolangun, Sungai Penuh, Banyuasin, Rejang Lebong, Kotabumi, Kalianda, Pringsewu, dan Metro).\n- Dinamika Khusus Cabang Palembang: Cabang Palembang mencatatkan penetrasi JHT JMO yang sangat tinggi (94,06%), namun Hasil Akhir tertahan di angka 88,97% murni akibat rendahnya capaian Beasiswa JMO (55,26%).\n- Kendala Ganda pada Cabang Batang Hari & Metro: Batang Hari (Hasil Akhir 79,91%) dan Metro (Hasil Akhir 69,17%) mengalami kendala pada dua indikator sekaligus, yaitu JHT JMO (Batang Hari 74,73% & Metro 37,30%) serta Beasiswa JMO (Batang Hari 43,75% & Metro 55,56%)."
     },
     {
      "label": "Strategi",
      "teks": "- Digital Onboarding di Ruang Tunggu: Mewajibkan pendampingan aplikasi JMO bagi peserta kriteria eligible (klaim di bawah Rp15 juta) langsung di ruang tunggu cabang sebelum mengambil antrean fisik.\n- Intervensi Khusus Cabang Kluster Bawah: Memberikan pendampingan intensif pada cabang dengan capaian JHT JMO terendah, khususnya Metro (37,30%), Pringsewu (47,56%), Kalianda (52,91%), dan Kotabumi (54,41%).\n- Akselerasi Beasiswa JMO: Melakukan kejar target khusus layanan Beasiswa JMO untuk Cabang Palembang, Batang Hari, dan Metro guna menutup gap pencapaian."
     },
     {
      "label": "Rekomendasi",
      "teks": "- Menyiapkan petugas front office / greeter khusus di cabang untuk mengarahkan dan mengedukasi peserta memproses klaim JHT via JMO di tempat.\n- Melakukan pemantauan dan evaluasi harian terhadap pergerakan angka Klaim JHT JMO pada 16 cabang yang persentasenya masih di bawah 80,00%.\n- Mengadakan sharing session lintas cabang agar strategi optimalisasi JMO dari Cabang Jambi dan Pangkal Pinang (pencapaian 100,00% di seluruh indikator) dapat direplikasi oleh cabang-cabang lainnya."
     }
    ],
    "sla": [
     {
      "label": null,
      "teks": "Berdasarkan data Over SLA untuk Klaim JHT, JKK, JPN, dan JKM telah mencapai target 100% sesuai SLA. Sementara itu, Klaim JKP mencapai 99,98%, menjadi satu-satunya yang masih terdapat klaim tidak sesuai SLA 3 Hari Kerja."
     },
     {
      "label": null,
      "teks": "Terdapat 3 Kantor Cabang yang memiliki over SLA Klaim JKP, yaitu Kantor Cabang Pringsewu Sudirman sebanyak 2 klaim JKP, Kantor Cabang Muaro Jambi Sengeti sebanyak 2 klaim JKP, dan Kantor Cabang Muara Enim sebanyak 1 klaim JKP. Dengan demikian, seluruh klaim Over SLA sampai dengan saat ini berasal dari program JKP berjumlah 5 Klaim."
     },
     {
      "label": null,
      "teks": "Perlu dilakukan monitoring rutin khususnya terhadap klaim JKP yang belum memenuhi SLA 3 hari kerja ke seluruh Kantor Cabang Jajaran Kanwil Sumbagsel."
     },
     {
      "label": null,
      "teks": "Selain itu, perlu dilakukan identifikasi penyebab keterlambatan pembayaran Klaim agar kejadian serupa tidak berulang dan pencapaian SLA dapat dipertahankan pada 100% untuk seluruh program dan kantor cabang."
     }
    ],
    "pengaduan": [
     {
      "label": null,
      "teks": "Sepanjang periode s.d. Agustus 2026, akumulasi pengaduan yang masuk untuk seluruh program di Kantor Wilayah Sumbagsel mencatatkan volume yang sangat tinggi yaitu mencapai 78.851 kasus. Dari total pengaduan tersebut, kinerja penyelesaian layanan berada pada tingkat yang sangat memuaskan dengan capaian kepatuhan Service Level Agreement (SLA) sebesar 100,00% (pembulatan), di mana sebanyak 78.850 pengaduan berhasil diselesaikan tepat waktu. Kondisi ini mencerminkan komitmen dan responsivitas operasional yang sangat solid di seluruh jajaran unit kerja, sehingga seluruh 27 kantor cabang berhasil mengamankan pencapaian Bobot KPI 6 dan Skor KPI Maksimal 6."
     },
     {
      "label": null,
      "teks": "Meskipun capaian secara umum sudah baik, evaluasi mendalam menunjukkan bahwa terdapat single point of leakage sebanyak 1 kasus yang mengalami keterlambatan atau tidak sesuai SLA. Kasus tersebut di kantor cabang Merangin Bangko sebanyak 1 kasus dari total 1.364 pengaduan (pencapaian KPI 99,93%). Sementara itu, 26 Kantor cabang lainnya mencatatkan performa penyelesaian 100% sempurna tanpa adanya catatan over SLA."
     }
    ],
    "mlt": [
     {
      "label": null,
      "teks": "Penyaluran Manfaat Layanan Tambahan (MLT) di Kantor Wilayah Sumbagsel memperlihatkan dinamika pencapaian yang sangat kontras antara realisasi nilai nominal dan kuantitas unit. Secara nominal, Kanwil Sumbagsel mencatatkan kinerja yang luar biasa dengan total penyaluran nominal mencapai Rp161,51 Miliar atau setara dengan 134,92% dari target nominal wilayah. Namun di sisi lain, penyerapan dari kuantitas unit masih tergolong sangat rendah, yakni baru terealisasi sebanyak 31 unit dari keseluruhan target wilayah atau baru mencapai 24,60%."
     },
     {
      "label": null,
      "teks": "Ketimpangan ini mengindikasikan bahwa skema penyaluran MLT yang berjalan saat ini didominasi oleh pembiayaan bernilai besar (high-value/high- ticket size), tetapi jangkauan manfaatnya belum merata ke banyak peserta. Kondisi tersebut diperparah oleh tingkat pasivitas unit kerja yang tinggi, di mana penyaluran MLT saat ini hanya terkonsentrasi di 7 kantor cabang. Cabang Bandar Lampung tampil sebagai kontributor unit terbesar sekaligus satu-satunya cabang yang berhasil melampaui target unit (13 unit atau 108,33%), sementara Cabang Jambi dan Muaro Bungo menjadi penopang utama penyerapan nominal. Sebaliknya, sebanyak 20 dari 27 kantor cabang (74%) masih mencatatkan angka nihil atau belum memproses penyaluran MLT sama sekali."
     }
    ],
    "klaim": [
     {
      "label": null,
      "teks": "Dari jumlah kasus, 71.2% kasus klaim di Wilayah Sumbagsel didominasi oleh klaim JHT (156.880 kasus). Diikuti oleh klaim JKK sebesar 11.7% (25.872 kasus). Kasus JKP memiliki porsi 11.5% (25.310 kasus) dari total 220.454 kasus klaim seluruh program di Wilayah Sumbagsel. Selanjutnya, terdapat 3.7% kasus klaim JKM (8.258 kasus) yang kemudian diikuti oleh klaim JP dengan 1.9% (4.134 kasus)."
     },
     {
      "label": null,
      "teks": "Dari total Rp 2.455.671.339.387 nilai klaim di Wilayah Sumbagsel, 83.6% diantaranya didominasi oleh pembayaran klaim JHT (Rp 2.053.975.683.580). Diikuti oleh klaim JKM dengan porsi 6.1% (Rp 150.918.600.000). Juga dibayarkan klaim JKK sebesar Rp 118.533.019.185 atau 4.8% dari total nilai klaim. Selanjutnya, telah dibayarkan Rp 68.402.702.170 klaim JP atau 2.8% dari total nilai klaim. Diikuti oleh klaim JKP sebesar 2.6% (Rp 63.841.334.452)."
     }
    ],
    "unit": [
     {
      "label": null,
      "teks": "Unit Layanan di jajaran Kantor Wilayah Sumbagsel saat ini terdiri dari 34 titik yang mencakup 3 Unit Layanan PMI dan 31 Unit Layanan Kabupaten/Kota yang tersebar di Kabupaten Kota di Wilayah Sumbagsel dan terintegrasi secara langsung dengan skema pairing ke Kantor Cabang di Jajaran Kantor Wilayah Sumbagsel. Penempatan para petugas unit layanan menyebar secara strategis di berbagai area publik seperti di Mall Pelayanan Publik (MPP), Kantor Dinas Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu, Kantor BP3MI, BPKAD hingga Kantor Perbankan Mitra Kerjasama. Apabila dikombinasikan dengan jaringan 27 Kantor Cabang BPJS Ketenagakerjaan, Kanal layanan fisik di wilayah Sumbagsel telah menjangkau 48 dari total 50 total kabupaten/kota yang ada di Provinsi Sumsel, Bengkulu, Jambi, Lampung dan Bangka Belitung atau setara dengan 96% coverage wilayah."
     },
     {
      "label": null,
      "teks": "Berdasarkan analisis wilayah operasional, tiga provinsi di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan Bangka Belitung terlayani penuh di 7 kabupaten/kota melalui kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Timur) dan 2 Kantor Cabang (Pangkal Pinang dan Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 Unit Layanan (Kerinci, Tebo, Tanjung Jabung Timur) serta 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung Jabung Barat, Sarolangun). Sementara itu, Provinsi Bengkulu terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang (Arga Makmur dan Rejang Lebong Curup)."
     },
     {
      "label": null,
      "teks": "Sedangkan lokasi yang dikategorikan sebagai wilayah blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung lainnya sebenarnya telah tercover oleh 7 Unit Layanan dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16 kabupaten/kota Sumsel lainnya sudah terjangkau oleh 9 Unit Layanan dan 7 Kantor Cabang."
     }
    ],
    "igi": [
     {
      "label": null,
      "teks": "Kinerja penyelesaian klaim pending Jaminan Kecelakaan Kerja (JKK) melalui aplikasi e-PLKK sesuai Service Level Agreement (SLA) menunjukkan tren positif di mana mayoritas kantor cabang mampu menjaga konsistensi performa terbaiknya. Berdasarkan evaluasi historis dari bulan Februari hingga Agustus, empat kantor cabang yakni Muaro Bungo, Jambi, Lampung Tengah, dan Bandar Lampung berhasil mempertahankan capaian skor sempurna bernilai 15,00 secara konsisten tanpa mencatatkan penurunan sama sekali."
     }
    ]
   }
  }
 },
 "9": {
  "periode": "September 2026",
  "pdf": "uploads/20261027_214828_e2f782.pdf",
  "sections": {
   "esurveyKanwil": [
    {
     "nama": "SUMBARRIAU",
     "skala5": 5.55,
     "skala100": 92.53
    },
    {
     "nama": "SUMBAGSEL",
     "skala5": 5.54,
     "skala100": 92.34,
     "sangatPuas": 66198,
     "puas": 24435,
     "cukupPuas": 6767,
     "kurangPuas": 0,
     "tidakPuas": 789,
     "sangatTidakPuas": 918,
     "status": "PASSED"
    },
    {
     "nama": "SULAWESI MALUKU",
     "skala5": 5.52,
     "skala100": 91.97
    },
    {
     "nama": "SUMBAGUT",
     "skala5": 5.44
    },
    {
     "nama": "JATIM",
     "skala5": 5.42
    },
    {
     "nama": "KALIMANTAN",
     "skala5": 5.4
    },
    {
     "nama": "BANUSPA",
     "skala5": 5.4
    },
    {
     "nama": "DKI JAKARTA",
     "skala5": 5.35
    },
    {
     "nama": "JAWA BARAT",
     "skala5": 5.35
    },
    {
     "nama": "BANTEN",
     "skala5": 5.32
    },
    {
     "nama": "JATENG DAN DIY",
     "skala5": 5.3
    }
   ],
   "esurveyKpi": {
    "peringkat": 2,
    "pctPuas": 91.45,
    "status": "PASSED",
    "skor": 5.54,
    "respondenPuas": 90633,
    "respondenTotal": 99107,
    "kategori": [
     {
      "kategori": "Sangat Puas",
      "responden": 66198,
      "persen": 66.79
     },
     {
      "kategori": "Puas",
      "responden": 24435,
      "persen": 24.66
     },
     {
      "kategori": "Cukup Puas",
      "responden": 6767,
      "persen": 6.83
     },
     {
      "kategori": "Kurang Puas",
      "responden": 0,
      "persen": 0.0
     },
     {
      "kategori": "Tidak Puas",
      "responden": 789,
      "persen": 0.8
     },
     {
      "kategori": "Sangat Tidak Puas",
      "responden": 918,
      "persen": 0.93
     }
    ]
   },
   "esurveyTop5": [
    {
     "nama": "LAHAT PASAR LAMA",
     "sangatTidakPuas": 3,
     "tidakPuas": 19,
     "kurangPuas": null,
     "puas": 516,
     "sangatPuas": 3200,
     "skala5": 5.74
    },
    {
     "nama": "BATANGHARI MUARA BULIAN",
     "sangatTidakPuas": 4,
     "tidakPuas": 2,
     "kurangPuas": null,
     "puas": 265,
     "sangatPuas": 1526,
     "skala5": 5.73
    },
    {
     "nama": "LAMPUNG TENGAH",
     "sangatTidakPuas": 34,
     "tidakPuas": 20,
     "kurangPuas": null,
     "puas": 1036,
     "sangatPuas": 4266,
     "skala5": 5.69
    },
    {
     "nama": "MUARA ENIM",
     "sangatTidakPuas": 44,
     "tidakPuas": 42,
     "kurangPuas": null,
     "puas": 1956,
     "sangatPuas": 6832,
     "skala5": 5.64
    },
    {
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "sangatTidakPuas": 44,
     "tidakPuas": 51,
     "kurangPuas": null,
     "puas": 1239,
     "sangatPuas": 5235,
     "skala5": 5.64
    }
   ],
   "esurveyBottom5": [
    {
     "nama": "BANYUASIN PANGKALAN BALAI",
     "sangatTidakPuas": 94,
     "tidakPuas": 81,
     "kurangPuas": null,
     "puas": 1032,
     "sangatPuas": 2007,
     "skala5": 5.27
    },
    {
     "nama": "JAMBI",
     "sangatTidakPuas": 135,
     "tidakPuas": 55,
     "kurangPuas": null,
     "puas": 2384,
     "sangatPuas": 3437,
     "skala5": 5.29
    },
    {
     "nama": "KOTA METRO NASUTION",
     "sangatTidakPuas": 27,
     "tidakPuas": 16,
     "kurangPuas": null,
     "puas": 910,
     "sangatPuas": 1159,
     "skala5": 5.35
    },
    {
     "nama": "REJANG LEBONG CURUP",
     "sangatTidakPuas": 27,
     "tidakPuas": 34,
     "kurangPuas": null,
     "puas": 782,
     "sangatPuas": 1160,
     "skala5": 5.36
    },
    {
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "sangatTidakPuas": 14,
     "tidakPuas": 11,
     "kurangPuas": null,
     "puas": 563,
     "sangatPuas": 880,
     "skala5": 5.41
    }
   ],
   "digitalKanwil": [
    {
     "peringkat": 1,
     "kode": "903",
     "nama": "KANWIL DKI JAKARTA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.72,
     "pencapaian": 99.72
    },
    {
     "peringkat": 2,
     "kode": "904",
     "nama": "KANWIL JAWA BARAT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 99.12,
     "pencapaian": 99.12
    },
    {
     "peringkat": 3,
     "kode": "905",
     "nama": "KANWIL JATENG DAN DIY",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.93,
     "pencapaian": 97.93
    },
    {
     "peringkat": 4,
     "kode": "910",
     "nama": "KANWIL BANTEN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.63,
     "pencapaian": 97.63
    },
    {
     "peringkat": 5,
     "kode": "907",
     "nama": "KANWIL KALIMANTAN",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 97.56,
     "pencapaian": 97.56
    },
    {
     "peringkat": 6,
     "kode": "909",
     "nama": "KANWIL SUMBARRIAU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 95.71,
     "pencapaian": 95.71
    },
    {
     "peringkat": 7,
     "kode": "906",
     "nama": "KANWIL JATIM",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 94.15,
     "pencapaian": 94.15
    },
    {
     "peringkat": 8,
     "kode": "901",
     "nama": "KANWIL SUMBAGUT",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.67,
     "pencapaian": 93.67
    },
    {
     "peringkat": 9,
     "kode": "908",
     "nama": "KANWIL SULAWESI MALUKU",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.6,
     "pencapaian": 93.6
    },
    {
     "peringkat": 10,
     "kode": "902",
     "nama": "KANWIL SUMBAGSEL",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 93.43,
     "pencapaian": 93.43
    },
    {
     "peringkat": 11,
     "kode": "911",
     "nama": "KANWIL BANUSPA",
     "bobot": 8,
     "target": 100.0,
     "realisasi": 92.34,
     "pencapaian": 92.34
    }
   ],
   "digitalKartu": {
    "targetJHT": 67772,
    "pctJHT": 91.34,
    "targetJP": 8445,
    "pctJP": 100.0,
    "targetBea": 449,
    "pctBea": 100.0,
    "peringkat": 10,
    "dari": 11
   },
   "digitalCabang": [
    {
     "nama": "Jambi",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Pangkal Pinang",
     "pctCapJHT": 1.0,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 1.0
    },
    {
     "nama": "Belitung",
     "pctCapJHT": 0.9644,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9875
    },
    {
     "nama": "Muara Enim",
     "pctCapJHT": 0.9605,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9862
    },
    {
     "nama": "Tanjung Jabung Barat",
     "pctCapJHT": 0.9572,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.985
    },
    {
     "nama": "Bengkulu",
     "pctCapJHT": 0.9699,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9895
    },
    {
     "nama": "Bandar Lampung",
     "pctCapJHT": 0.9331,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9766
    },
    {
     "nama": "Muaro Bungo",
     "pctCapJHT": 0.9063,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9672
    },
    {
     "nama": "Lampung Tengah",
     "pctCapJHT": 0.8855,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9599
    },
    {
     "nama": "Tulang Bawang",
     "pctCapJHT": 0.8175,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9361
    },
    {
     "nama": "Prabumulih",
     "pctCapJHT": 0.7887,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9261
    },
    {
     "nama": "Lubuk Linggau",
     "pctCapJHT": 0.8073,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9325
    },
    {
     "nama": "Palembang",
     "pctCapJHT": 0.9406,
     "pctCapJP": 1.0,
     "pctCapBea": 0.5526,
     "hasil": 0.8897
    },
    {
     "nama": "Lahat",
     "pctCapJHT": 0.719,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9017
    },
    {
     "nama": "Arga Makmur",
     "pctCapJHT": 0.7428,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.91
    },
    {
     "nama": "Merangin",
     "pctCapJHT": 0.7211,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9024
    },
    {
     "nama": "Sarolangun",
     "pctCapJHT": 0.6863,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8902
    },
    {
     "nama": "OKU Baturaja",
     "pctCapJHT": 0.745,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.9107
    },
    {
     "nama": "Sungai Penuh",
     "pctCapJHT": 0.6477,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8767
    },
    {
     "nama": "Banyuasin",
     "pctCapJHT": 0.6244,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8685
    },
    {
     "nama": "Muaro Jambi",
     "pctCapJHT": 0.6994,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8948
    },
    {
     "nama": "Kalianda",
     "pctCapJHT": 0.5291,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8352
    },
    {
     "nama": "Rejang Lebong",
     "pctCapJHT": 0.5706,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8497
    },
    {
     "nama": "Kotabumi",
     "pctCapJHT": 0.5441,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8404
    },
    {
     "nama": "Pringsewu",
     "pctCapJHT": 0.4756,
     "pctCapJP": 1.0,
     "pctCapBea": 1.0,
     "hasil": 0.8165
    },
    {
     "nama": "Batang Hari",
     "pctCapJHT": 0.7473,
     "pctCapJP": 1.0,
     "pctCapBea": 0.4375,
     "hasil": 0.7991
    },
    {
     "nama": "Metro",
     "pctCapJHT": 0.373,
     "pctCapJP": 1.0,
     "pctCapBea": 0.5556,
     "hasil": 0.6917
    }
   ],
   "slaKlaim": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "jht": 2154,
     "jkk": 17,
     "jkm": 127,
     "jpn": 30,
     "totalSla": 3391,
     "pencapaian": 1.0,
     "jkp": 1063,
     "total": 3391
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS",
     "jht": 1814,
     "jkk": 18,
     "jkm": 138,
     "jpn": 30,
     "totalSla": 2377,
     "pencapaian": 1.0,
     "jkp": 377,
     "total": 2377
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "jht": 1989,
     "jkk": 25,
     "jkm": 72,
     "jpn": 87,
     "totalSla": 2545,
     "pencapaian": 1.0,
     "jkp": 372,
     "total": 2545
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA",
     "jht": 1503,
     "jkk": 17,
     "jkm": 83,
     "jpn": 31,
     "totalSla": 2593,
     "pencapaian": 1.0,
     "jkp": 959,
     "total": 2593
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "jht": 18929,
     "jkk": 304,
     "jkm": 464,
     "jpn": 1032,
     "totalSla": 25161,
     "pencapaian": 1.0,
     "jkp": 4432,
     "total": 25161
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "jht": 3869,
     "jkk": 60,
     "jkm": 130,
     "jpn": 183,
     "totalSla": 5080,
     "pencapaian": 1.0,
     "jkp": 838,
     "total": 5080
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "jht": 3671,
     "jkk": 46,
     "jkm": 341,
     "jpn": 205,
     "totalSla": 4932,
     "pencapaian": 1.0,
     "jkp": 669,
     "total": 4932
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR",
     "jht": 1827,
     "jkk": 10,
     "jkm": 47,
     "jpn": 50,
     "totalSla": 3040,
     "pencapaian": 1.0,
     "jkp": 1106,
     "total": 3040
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "jht": 3714,
     "jkk": 7,
     "jkm": 92,
     "jpn": 132,
     "totalSla": 4539,
     "pencapaian": 1.0,
     "jkp": 594,
     "total": 4539
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "jht": 2461,
     "jkk": 23,
     "jkm": 66,
     "jpn": 122,
     "totalSla": 3125,
     "pencapaian": 1.0,
     "jkp": 453,
     "total": 3125
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "jht": 4305,
     "jkk": 36,
     "jkm": 102,
     "jpn": 83,
     "totalSla": 5260,
     "pencapaian": 1.0,
     "jkp": 734,
     "total": 5260
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA",
     "jht": 2333,
     "jkk": 19,
     "jkm": 93,
     "jpn": 111,
     "totalSla": 2773,
     "pencapaian": 1.0,
     "jkp": 217,
     "total": 2773
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "jht": 3157,
     "jkk": 5,
     "jkm": 92,
     "jpn": 174,
     "totalSla": 3596,
     "pencapaian": 1.0,
     "jkp": 168,
     "total": 3596
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "jht": 2133,
     "jkk": 22,
     "jkm": 39,
     "jpn": 54,
     "totalSla": 3352,
     "pencapaian": 1.0,
     "jkp": 1104,
     "total": 3352
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "jht": 2101,
     "jkk": 4,
     "jkm": 39,
     "jpn": 14,
     "totalSla": 3075,
     "pencapaian": 1.0,
     "jkp": 917,
     "total": 3075
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "jht": 12450,
     "jkk": 148,
     "jkm": 279,
     "jpn": 496,
     "totalSla": 14281,
     "pencapaian": 1.0,
     "jkp": 908,
     "total": 14281
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "jht": 3188,
     "jkk": 75,
     "jkm": 123,
     "jpn": 271,
     "totalSla": 4989,
     "pencapaian": 1.0,
     "jkp": 1332,
     "total": 4989
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "jht": 2573,
     "jkk": 7,
     "jkm": 79,
     "jpn": 58,
     "totalSla": 3064,
     "pencapaian": 1.0,
     "jkp": 347,
     "total": 3064
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "jht": 3352,
     "jkk": 15,
     "jkm": 50,
     "jpn": 117,
     "totalSla": 3871,
     "pencapaian": 1.0,
     "jkp": 337,
     "total": 3871
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "jht": 1634,
     "jkk": 33,
     "jkm": 133,
     "jpn": 98,
     "totalSla": 2401,
     "pencapaian": 1.0,
     "jkp": 503,
     "total": 2401
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "jht": 2466,
     "jkk": 19,
     "jkm": 52,
     "jpn": 84,
     "totalSla": 4119,
     "pencapaian": 1.0,
     "jkp": 1498,
     "total": 4119
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "jht": 2047,
     "jkk": 13,
     "jkm": 95,
     "jpn": 52,
     "totalSla": 2697,
     "pencapaian": 1.0,
     "jkp": 490,
     "total": 2697
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "jht": 3896,
     "jkk": 74,
     "jkm": 227,
     "jpn": 121,
     "totalSla": 4629,
     "pencapaian": 1.0,
     "jkp": 311,
     "total": 4629
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "jht": 5909,
     "jkk": 177,
     "jkm": 209,
     "jpn": 314,
     "totalSla": 9363,
     "pencapaian": 1.0,
     "jkp": 2754,
     "total": 9363
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "jht": 3161,
     "jkk": 53,
     "jkm": 146,
     "jpn": 264,
     "totalSla": 5383,
     "pencapaian": 0.9998,
     "jkp": 1760,
     "total": 5384
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 2887,
     "jkk": 14,
     "jkm": 54,
     "jpn": 82,
     "totalSla": 3723,
     "pencapaian": 0.9995,
     "jkp": 688,
     "total": 3725
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "jht": 2317,
     "jkk": 18,
     "jkm": 75,
     "jpn": 54,
     "totalSla": 3384,
     "pencapaian": 0.9995,
     "jkp": 922,
     "total": 3386
    }
   ],
   "slaKpi": {
    "total": 136748,
    "terpenuhi": 136743,
    "over": 5,
    "pct": 100.0
   },
   "slaTerendah": [
    {
     "nama": "PRINGSEWU SUDIRMAN",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARO JAMBI SENGETI",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 2,
     "jumlah": 2
    },
    {
     "nama": "MUARA ENIM",
     "jht": 0,
     "jkk": 0,
     "jkm": 0,
     "jpn": 0,
     "jkp": 1,
     "jumlah": 1
    }
   ],
   "pengaduan": [
    {
     "kode": "E02",
     "nama": "MERANGIN BANGKO",
     "total": 1364,
     "sesuaiSla": 1363,
     "pencapaian": 99.93,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G06",
     "nama": "LUBUK LINGGAU YOS SUDARSO",
     "total": 4839,
     "sesuaiSla": 4839,
     "pencapaian": 99.98,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E06",
     "nama": "BATANGHARI MUARA BULIAN",
     "total": 1701,
     "sesuaiSla": 1701,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G03",
     "nama": "MUARA ENIM",
     "total": 2926,
     "sesuaiSla": 2926,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E07",
     "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
     "total": 1274,
     "sesuaiSla": 1274,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E04",
     "nama": "SAROLANGUN LINTAS SUMATERA",
     "total": 2937,
     "sesuaiSla": 2937,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G01",
     "nama": "BENGKULU",
     "total": 2302,
     "sesuaiSla": 2302,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G02",
     "nama": "PANGKAL PINANG",
     "total": 6966,
     "sesuaiSla": 6966,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H03",
     "nama": "LAMPUNG UTARA KOTABUMI",
     "total": 1958,
     "sesuaiSla": 1958,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G04",
     "nama": "BANYUASIN PANGKALAN BALAI",
     "total": 2836,
     "sesuaiSla": 2836,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G05",
     "nama": "BELITUNG TANJUNG PANDAN",
     "total": 4364,
     "sesuaiSla": 4364,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G00",
     "nama": "PALEMBANG",
     "total": 8491,
     "sesuaiSla": 8491,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G09",
     "nama": "PRABUMULIH SUDIRMAN",
     "total": 2250,
     "sesuaiSla": 2250,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G10",
     "nama": "ARGA MAKMUR",
     "total": 661,
     "sesuaiSla": 661,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G11",
     "nama": "REJANG LEBONG CURUP",
     "total": 668,
     "sesuaiSla": 668,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H00",
     "nama": "BANDAR LAMPUNG",
     "total": 8595,
     "sesuaiSla": 8595,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H01",
     "nama": "LAMPUNG TENGAH",
     "total": 2903,
     "sesuaiSla": 2903,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H02",
     "nama": "LAMPUNG SELATAN KALIANDA",
     "total": 1951,
     "sesuaiSla": 1951,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G08",
     "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
     "total": 2756,
     "sesuaiSla": 2756,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H04",
     "nama": "PRINGSEWU SUDIRMAN",
     "total": 1085,
     "sesuaiSla": 1085,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H05",
     "nama": "KOTA METRO NASUTION",
     "total": 1487,
     "sesuaiSla": 1487,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "H06",
     "nama": "TULANG BAWANG BANJAR AGUNG",
     "total": 1056,
     "sesuaiSla": 1056,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "G07",
     "nama": "LAHAT PASAR LAMA",
     "total": 1223,
     "sesuaiSla": 1223,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E08",
     "nama": "SUNGAI PENUH YOS SUDARSO",
     "total": 1657,
     "sesuaiSla": 1657,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E03",
     "nama": "MUARO JAMBI SENGETI",
     "total": 2384,
     "sesuaiSla": 2384,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E01",
     "nama": "MUARO BUNGO",
     "total": 3617,
     "sesuaiSla": 3617,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    },
    {
     "kode": "E00",
     "nama": "JAMBI",
     "total": 4600,
     "sesuaiSla": 4600,
     "pencapaian": 100.0,
     "bobot": 6,
     "skor": 6
    }
   ],
   "mlt": [
    {
     "nama": "Jambi",
     "targetUnit": 11,
     "targetNominal": 770000000,
     "targetUnit120": 13,
     "targetNominal120": 924000000,
     "realUnit": 8,
     "realNominal": 68041000000,
     "pctUnit": 0.7273,
     "pctNominal": 88.3649
    },
    {
     "nama": "Muaro Bungo",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "realUnit": 3,
     "realNominal": 37500000000,
     "pctUnit": 0.5,
     "pctNominal": 89.2857
    },
    {
     "nama": "Merangin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Muaro Jambi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "realUnit": 1,
     "realNominal": 120000000,
     "pctUnit": 0.3333,
     "pctNominal": 1.3333
    },
    {
     "nama": "Sarolangun",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Batang Hari",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Tanjung Jabung Barat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Sungai Penuh",
     "targetUnit": 2,
     "targetNominal": 60000000,
     "targetUnit120": 2,
     "targetNominal120": 72000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Palembang",
     "targetUnit": 15,
     "targetNominal": 1050000000,
     "targetUnit120": 18,
     "targetNominal120": 1260000000,
     "realUnit": 2,
     "realNominal": 11307200000,
     "pctUnit": 0.1333,
     "pctNominal": 10.7688
    },
    {
     "nama": "Bengkulu",
     "targetUnit": 8,
     "targetNominal": 560000000,
     "targetUnit120": 10,
     "targetNominal120": 672000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Pangkal Pinang",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Muara Enim",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "realUnit": 2,
     "realNominal": 543000000,
     "pctUnit": 0.3333,
     "pctNominal": 1.2929
    },
    {
     "nama": "Banyuasin",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "realUnit": 2,
     "realNominal": 19800000000,
     "pctUnit": 0.6667,
     "pctNominal": 220.0
    },
    {
     "nama": "Belitung",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Lubuk Linggau",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Lahat",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "OKU Baturaja",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Prabumulih",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Arga Makmur",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Rejang Lebong",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Bandar Lampung",
     "targetUnit": 12,
     "targetNominal": 840000000,
     "targetUnit120": 14,
     "targetNominal120": 1008000000,
     "realUnit": 13,
     "realNominal": 24194000000,
     "pctUnit": 1.0833,
     "pctNominal": 28.8024
    },
    {
     "nama": "Lampung Tengah",
     "targetUnit": 6,
     "targetNominal": 420000000,
     "targetUnit120": 7,
     "targetNominal120": 504000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kalianda",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kotabumi",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Pringsewu",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Metro",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Tulang Bawang",
     "targetUnit": 3,
     "targetNominal": 90000000,
     "targetUnit120": 4,
     "targetNominal120": 108000000,
     "pctUnit": 0.0,
     "pctNominal": 0.0
    },
    {
     "nama": "Kanwil Sumbagsel",
     "targetUnit": 0,
     "targetNominal": 113120000000,
     "targetUnit120": 0
    }
   ],
   "mltKpi": {
    "realUnit": 31,
    "realNominal": 161505200000,
    "pctUnit": 24.6,
    "pctNominal": 134.92
   },
   "klaim": {
    "programs": [
     {
      "program": "JHT",
      "kasus": 156880,
      "nominal": 2053975683580
     },
     {
      "program": "JKM",
      "kasus": 8258,
      "nominal": 150918600000
     },
     {
      "program": "JKK",
      "kasus": 25872,
      "nominal": 118533019185
     },
     {
      "program": "JP",
      "kasus": 4134,
      "nominal": 68402702170
     },
     {
      "program": "JKP",
      "kasus": 25310,
      "nominal": 63841334452
     }
    ],
    "cabang": [
     {
      "nama": "JAMBI",
      "kasus": 23615,
      "nominal": 181659454045
     },
     {
      "nama": "MUARO BUNGO",
      "kasus": 9560,
      "nominal": 104241180799
     },
     {
      "nama": "MERANGIN BANGKO",
      "kasus": 3441,
      "nominal": 44414044052
     },
     {
      "nama": "MUARO JAMBI SENGETI",
      "kasus": 3442,
      "nominal": 43799009151
     },
     {
      "nama": "SAROLANGUN LINTAS SUMATERA",
      "kasus": 2472,
      "nominal": 39445766979
     },
     {
      "nama": "BATANGHARI MUARA BULIAN",
      "kasus": 2601,
      "nominal": 32604641967
     },
     {
      "nama": "TANJUNG JABUNG BARAT KUALA TUNGKAL",
      "kasus": 2699,
      "nominal": 29251094855
     },
     {
      "nama": "SUNGAI PENUH YOS SUDARSO",
      "kasus": 2756,
      "nominal": 46478465862
     },
     {
      "nama": "PALEMBANG",
      "kasus": 46851,
      "nominal": 512500227765
     },
     {
      "nama": "BENGKULU",
      "kasus": 10200,
      "nominal": 91053231546
     },
     {
      "nama": "PANGKAL PINANG",
      "kasus": 16040,
      "nominal": 142255018296
     },
     {
      "nama": "MUARA ENIM",
      "kasus": 12629,
      "nominal": 111505816217
     },
     {
      "nama": "BANYUASIN PANGKALAN BALAI",
      "kasus": 4688,
      "nominal": 70804129097
     },
     {
      "nama": "BELITUNG TANJUNG PANDAN",
      "kasus": 3255,
      "nominal": 53564235491
     },
     {
      "nama": "LUBUK LINGGAU YOS SUDARSO",
      "kasus": 5412,
      "nominal": 79160565443
     },
     {
      "nama": "LAHAT PASAR LAMA",
      "kasus": 4212,
      "nominal": 40151583203
     },
     {
      "nama": "OGAN KOMERING ULU BATURAJA TIMUR",
      "kasus": 2853,
      "nominal": 45781130113
     },
     {
      "nama": "PRABUMULIH SUDIRMAN",
      "kasus": 3818,
      "nominal": 65389317295
     },
     {
      "nama": "ARGA MAKMUR",
      "kasus": 3381,
      "nominal": 34847123108
     },
     {
      "nama": "REJANG LEBONG CURUP",
      "kasus": 3160,
      "nominal": 40380195899
     },
     {
      "nama": "BANDAR LAMPUNG",
      "kasus": 26329,
      "nominal": 308065194355
     },
     {
      "nama": "LAMPUNG TENGAH",
      "kasus": 10276,
      "nominal": 102876770154
     },
     {
      "nama": "LAMPUNG SELATAN KALIANDA",
      "kasus": 3188,
      "nominal": 47238222508
     },
     {
      "nama": "LAMPUNG UTARA KOTABUMI",
      "kasus": 2625,
      "nominal": 38116960824
     },
     {
      "nama": "PRINGSEWU SUDIRMAN",
      "kasus": 3817,
      "nominal": 54191004251
     },
     {
      "nama": "KOTA METRO NASUTION",
      "kasus": 4020,
      "nominal": 60611517374
     },
     {
      "nama": "TULANG BAWANG BANJAR AGUNG",
      "kasus": 3114,
      "nominal": 35285438738
     }
    ],
    "beasiswa": {
     "totalAnak": 5756,
     "totalNominal": 23537600000,
     "jenjang": {
      "KULIAH": {
       "nominal": 13464000000,
       "kasus": 1110
      },
      "SD": {
       "kasus": 2078,
       "nominal": 3156000000
      },
      "SMA": {
       "nominal": 4263000000,
       "kasus": 1341
      },
      "SMP": {
       "nominal": 2598500000,
       "kasus": 1214
      },
      "TK": {
       "nominal": 43500000,
       "kasus": 8
      },
      "LAINNYA": {
       "kasus": 5,
       "nominal": 12600000
      }
     }
    }
   },
   "unit": {
    "jumlah": {
     "pmi": 3,
     "kabKota": 31
    },
    "petugas": [
     {
      "petugas": "KEKE ANISA PUTRI",
      "cabang": "Sungai Penuh",
      "mitra": "UL PMI KERINCI",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA SUNGAI PENUH"
     },
     {
      "petugas": "NURWINDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA TENGAH",
      "penempatan": "MPP Kabupaten Bangka Tengah"
     },
     {
      "petugas": "SUWANDI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA SELATAN",
      "penempatan": "BANK BNI KCP TOBOALI"
     },
     {
      "petugas": "Muhammed Hafiid Al Fayed",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA BARAT",
      "penempatan": "MPP Kabupaten Bangka Barat"
     },
     {
      "petugas": "EVI NOVITASARI",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BANGKA",
      "penempatan": "KANTOR PPN SUNGAILIAT KABUPATEN BANGKA"
     },
     {
      "petugas": "ILMAN ADHITIYA",
      "cabang": "Pangkal Pinang",
      "mitra": "UL KAB BELITUNG TIMUR",
      "penempatan": "DINAS PENANAMAN MODAL DAN PERIZINAN TERPADU SATU PINTU KABUPATEN BELITUNG TIMUR"
     },
     {
      "petugas": "MUSTRI LIZA",
      "cabang": "Palembang",
      "mitra": "UL KAB MUSI BANYUASIN",
      "penempatan": "Kantor Dinas Sosial Musi Banyuasin"
     },
     {
      "petugas": "SAFIRA SALBILLA DWINURFI",
      "cabang": "Palembang",
      "mitra": "UL KAB OGAN ILIR",
      "penempatan": "Mal Pelayanan Publik Kabupaten Ogan Ilir"
     },
     {
      "petugas": "NUR TYSA SHAFIRA",
      "cabang": "Palembang",
      "mitra": "UL PMI PALEMBANG",
      "penempatan": "KANTOR BP3MI SUMSEL"
     },
     {
      "petugas": "SHINTA RABIUL AWWALIYAH",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU SELATAN",
      "penempatan": "Dinas penanaman modal dan PTSP OKU Selatan"
     },
     {
      "petugas": "BAHKTI ALFAHREZI",
      "cabang": "Muaraenim",
      "mitra": "UL KAB MUSI RAWAS UTARA",
      "penempatan": "BANK BNI KCP MUSI RAWAS UTARA"
     },
     {
      "petugas": "HANI RUSITA",
      "cabang": "Muaraenim",
      "mitra": "UL KOTA PAGAR ALAM",
      "penempatan": "BANK BNI KOTA PAGAR ALAM"
     },
     {
      "petugas": "ABADI SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB PENUKAL ABAB LEMATANG ILIR",
      "penempatan": "KANTOR DPMPTSP KABUPATEN PALI"
     },
     {
      "petugas": "Ratih Permata Sari",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ULU TIMUR",
      "penempatan": "BANK BNI MARTAPURA OGAN KOMERING ULU TIMUR"
     },
     {
      "petugas": "Muhammad Waiz Al Qarny",
      "cabang": "Muaraenim",
      "mitra": "UL KAB OGAN KOMERING ILIR",
      "penempatan": "BPKAD KAB. OKI"
     },
     {
      "petugas": "NOPAN SAPUTRA",
      "cabang": "Muaraenim",
      "mitra": "UL KAB EMPAT LAWANG",
      "penempatan": "BANK BNI EMPAT LAWANG"
     },
     {
      "petugas": "ANTON TRY WIJAYA",
      "cabang": "Muara Bungo",
      "mitra": "UL MALL MPP TEBO",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN TEBO"
     },
     {
      "petugas": "AKBAR DHARMA PUTRA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB TULANG BAWANG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK TULANG BAWANG BARAT"
     },
     {
      "petugas": "ASWAN IRFAN RIANSYAH",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB MESUJI",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN MESUJI"
     },
     {
      "petugas": "ARI WIRAWAN",
      "cabang": "Lampung Tengah",
      "mitra": "UL PESISIR BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK PESISIR BARAT"
     },
     {
      "petugas": "SELAMET ROCHMATUL ARDA",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB LAMPUNG BARAT",
      "penempatan": "MALL PELAYANAN PUBLIK LAMPUNG BARAT"
     },
     {
      "petugas": "HENGKI",
      "cabang": "Lampung Tengah",
      "mitra": "UL KAB WAY KANAN",
      "penempatan": "MALL PELAYANAN PUBLIK KABUPATEN WAYKANAN"
     },
     {
      "petugas": "KURNIA LESTARI",
      "cabang": "Jambi",
      "mitra": "UL KAB TANJUNG JABUNG TIMUR",
      "penempatan": "BANK BNI MUARA SABAK"
     },
     {
      "petugas": "TANTI YOSEVA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB LEBONG",
      "penempatan": "MALL PELAYANAN PUBLIK KAB LEBONG"
     },
     {
      "petugas": "RENANTHERA CANDRA ERLAMBANG",
      "cabang": "Bengkulu",
      "mitra": "UL KAB BENGKULU SELATAN",
      "penempatan": "MPP KAB BENGKULU SELATAN"
     },
     {
      "petugas": "OZA TRIWIBOWO",
      "cabang": "Bengkulu",
      "mitra": "UL KAB MUKOMUKO",
      "penempatan": "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kab Mukomuko"
     },
     {
      "petugas": "RIAN ADE SAPUTRA",
      "cabang": "Bengkulu",
      "mitra": "UL BENGKULU TENGAH",
      "penempatan": "MPP BENGKULU TENGAH"
     },
     {
      "petugas": "FENI JUITA",
      "cabang": "Bengkulu",
      "mitra": "UL KAB KAUR",
      "penempatan": "BANK BENGKULU"
     },
     {
      "petugas": "CRISTIE SETIAWAN",
      "cabang": "Bengkulu",
      "mitra": "UL KAB SELUMA",
      "penempatan": "MALL PELAYANAN PUBLIK KAB SELUMA"
     },
     {
      "petugas": "NINDA ALYA SAHIRA",
      "cabang": "Bengkulu",
      "mitra": "UL KEPAHIANG",
      "penempatan": "MPP KEPAHIANG"
     },
     {
      "petugas": "JEPI LEONATA",
      "cabang": "Bengkulu",
      "mitra": "UL KOTA BENGKULU",
      "penempatan": "MALL PELAYANAN PUBLIK KOTA BENGKULU"
     },
     {
      "petugas": "Sodikin",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB TANGGAMUS",
      "penempatan": "KANTOR DPMPPTSP KABUPATEN TANGGAMUS"
     },
     {
      "petugas": "MUHAMAD ROYNALDI",
      "cabang": "Bandar Lampung",
      "mitra": "UL KAB LAMPUNG TIMUR",
      "penempatan": "BANK BNI WAY JEPARA KAB LAMPUNG TIMUR"
     },
     {
      "petugas": "RINANTI REKHWAN",
      "cabang": "Bandar Lampung",
      "mitra": "UL PMI BANDAR LAMPUNG",
      "penempatan": "UPT BP2MI LAMPUNG di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16"
     }
    ]
   },
   "igi": {
    "matriks": [
     {
      "nama": "MUARA ENIM",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 11.88,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.61
     },
     {
      "nama": "PALEMBANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.23,
       "Juni": 14.93,
       "Juli": 14.97,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.89
     },
     {
      "nama": "BENGKULU",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 14.57,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 14.95
     },
     {
      "nama": "PANGKAL PINANG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 14.85,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 14.87,
       "September": 15.0
      },
      "capaian": 14.97
     },
     {
      "nama": "MUARO BUNGO",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "JAMBI",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "bulan": {
       "Februari": 15.0,
       "Maret": 15.0,
       "April": 15.0,
       "Mei": 15.0,
       "Juni": 15.0,
       "Juli": 15.0,
       "Agustus": 15.0,
       "September": 15.0
      },
      "capaian": 15.0
     }
    ],
    "berjalan": [
     {
      "nama": "PANGKAL PINANG",
      "total": 338,
      "sesuaiSla": 335,
      "capaian": 99.11,
      "nilai": 14.87
     },
     {
      "nama": "JAMBI",
      "total": 435,
      "sesuaiSla": 435,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARO BUNGO",
      "total": 73,
      "sesuaiSla": 73,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "PALEMBANG",
      "total": 907,
      "sesuaiSla": 907,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "MUARA ENIM",
      "total": 161,
      "sesuaiSla": 161,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "LAMPUNG TENGAH",
      "total": 391,
      "sesuaiSla": 391,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BENGKULU",
      "total": 136,
      "sesuaiSla": 136,
      "capaian": 100.0,
      "nilai": 15.0
     },
     {
      "nama": "BANDAR LAMPUNG",
      "total": 446,
      "sesuaiSla": 446,
      "capaian": 100.0,
      "nilai": 15.0
     }
    ]
   },
   "narasi": {
    "esurvey": [
     {
      "label": "Ringkasan",
      "teks": "Berdasarkan hasil E-Survey Integrasi 2026, Kanwil Sumbagsel memperoleh skor kepuasan 5,54 dari skala 6 dengan kategori Sangat Puas dan status \"PASSED\" (>5,00). Kanwil Sumbagsel berhasil menempati peringkat ke-2 dari 11 Kanwil secara nasional. Dari total 99.107 responden, sebanyak 90.633 responden atau 91,45% memberikan penilaian dalam persentase Puas (24,66% / 24.435 responden) dan Sangat Puas (66,79% / 66.198 responden). Capaian ini menunjukkan bahwa secara umum kualitas pelayanan Kanwil Sumbagsel telah berjalan sangat baik dan mendapatkan penerimaan positif dari peserta."
     }
    ],
    "digital": [
     {
      "label": null,
      "teks": "Kantor Wilayah Sumbagsel mencatatkan nilai Digital Service sebesar 93,43% dari target sebesar 100,00 (dengan bobot sebesar 8). Hasil ini menempatkan Kanwil Sumbagsel di peringkat ke-10 dari total 11 Kantor Wilayah secara nasional. Secara umum capaian kinerja berada di papan bawah, berada di bawah posisi Sulawesi Maluku (93,60%) dan unggul dari Banuspa (92,34%)."
     },
     {
      "label": null,
      "teks": "Capaian Sumbagsel didorong oleh performa maksimal pada dua dari tiga indikator utama. Target JP Berkala JMO dengan target sebesar 8.445 dan program Target Beasiswa JMO dengan target sebesar 449 berhasil diselesaikan secara sempurna dengan pencapaian realisasi 100,00%. Namun, penentu utama belum optimalnya nilai Sumbagsel berada pada Target JHT melalui JMO. Dengan volume target terbesar yaitu sebesar 67.772, realisasi JHT JMO baru menyentuh angka 91,34% (terdapat gap sebesar 8,66%)."
     },
     {
      "label": "Ringkasan",
      "teks": "- Sektor Beasiswa JMO: Sebanyak 24 dari 27 cabang berhasil menyentuh angka maksimal 100,00%. Namun, terdapat 3 cabang yang capaiannya berada di bawah target, yaitu Palembang (55,26%), Batang Hari (43,75%), dan Metro (55,56%).\n- Sektor Klaim JHT via JMO (Single Point of Optimization): Menjadi variabel penentu utama kinerja cabang. Capaian JHT JMO bergerak sangat bervariasi, dari yang tertinggi 100,00% (Jambi & Pangkal Pinang) hingga yang terendah 37,30% (Metro)."
     },
     {
      "label": "Insight",
      "teks": "- JHT JMO sebagai Penentu Utama Hasil Akhir: Karena persentase JP Berkala dan Beasiswa JMO sudah maksimal (100,00%) di mayoritas cabang, capaian JHT JMO menjadi kunci tunggal untuk mendongkrak Hasil Akhir kantor cabang maupun Kanwil.\n- Tingkat Adopsi JHT JMO Masih Low-Performing di Kluster Bawah: Terdapat 16 kantor cabang yang capaian JHT JMO-nya berada di bawah 80,00%, dengan 8 cabang di antaranya berada di bawah 70% (Muaro Jambi, Sarolangun, Sungai Penuh, Banyuasin, Rejang Lebong, Kotabumi, Kalianda, Pringsewu, dan Metro).\n- Dinamika Khusus Cabang Palembang: Cabang Palembang mencatatkan penetrasi JHT JMO yang sangat tinggi (94,06%), namun Hasil Akhir tertahan di angka 88,97% murni akibat rendahnya capaian Beasiswa JMO (55,26%).\n- Kendala Ganda pada Cabang Batang Hari & Metro: Batang Hari (Hasil Akhir 79,91%) dan Metro (Hasil Akhir 69,17%) mengalami kendala pada dua indikator sekaligus, yaitu JHT JMO (Batang Hari 74,73% & Metro 37,30%) serta Beasiswa JMO (Batang Hari 43,75% & Metro 55,56%)."
     },
     {
      "label": "Strategi",
      "teks": "- Digital Onboarding di Ruang Tunggu: Mewajibkan pendampingan aplikasi JMO bagi peserta kriteria eligible (klaim di bawah Rp15 juta) langsung di ruang tunggu cabang sebelum mengambil antrean fisik.\n- Intervensi Khusus Cabang Kluster Bawah: Memberikan pendampingan intensif pada cabang dengan capaian JHT JMO terendah, khususnya Metro (37,30%), Pringsewu (47,56%), Kalianda (52,91%), dan Kotabumi (54,41%).\n- Akselerasi Beasiswa JMO: Melakukan kejar target khusus layanan Beasiswa JMO untuk Cabang Palembang, Batang Hari, dan Metro guna menutup gap pencapaian."
     },
     {
      "label": "Rekomendasi",
      "teks": "- Menyiapkan petugas front office / greeter khusus di cabang untuk mengarahkan dan mengedukasi peserta memproses klaim JHT via JMO di tempat.\n- Melakukan pemantauan dan evaluasi harian terhadap pergerakan angka Klaim JHT JMO pada 16 cabang yang persentasenya masih di bawah 80,00%.\n- Mengadakan sharing session lintas cabang agar strategi optimalisasi JMO dari Cabang Jambi dan Pangkal Pinang (pencapaian 100,00% di seluruh indikator) dapat direplikasi oleh cabang-cabang lainnya."
     }
    ],
    "sla": [
     {
      "label": null,
      "teks": "Berdasarkan data Over SLA untuk Klaim JHT, JKK, JPN, dan JKM telah mencapai target 100% sesuai SLA. Sementara itu, Klaim JKP mencapai 99,98%, menjadi satu-satunya yang masih terdapat klaim tidak sesuai SLA 3 Hari Kerja."
     },
     {
      "label": null,
      "teks": "Terdapat 3 Kantor Cabang yang memiliki over SLA Klaim JKP, yaitu Kantor Cabang Pringsewu Sudirman sebanyak 2 klaim JKP, Kantor Cabang Muaro Jambi Sengeti sebanyak 2 klaim JKP, dan Kantor Cabang Muara Enim sebanyak 1 klaim JKP. Dengan demikian, seluruh klaim Over SLA sampai dengan saat ini berasal dari program JKP berjumlah 5 Klaim."
     },
     {
      "label": null,
      "teks": "Perlu dilakukan monitoring rutin khususnya terhadap klaim JKP yang belum memenuhi SLA 3 hari kerja ke seluruh Kantor Cabang Jajaran Kanwil Sumbagsel."
     },
     {
      "label": null,
      "teks": "Selain itu, perlu dilakukan identifikasi penyebab keterlambatan pembayaran Klaim agar kejadian serupa tidak berulang dan pencapaian SLA dapat dipertahankan pada 100% untuk seluruh program dan kantor cabang."
     }
    ],
    "pengaduan": [
     {
      "label": null,
      "teks": "Meskipun capaian secara umum sudah baik, evaluasi mendalam menunjukkan bahwa terdapat single point of leakage sebanyak 1 kasus yang mengalami keterlambatan atau tidak sesuai SLA. Kasus tersebut di kantor cabang Merangin Bangko sebanyak 1 kasus dari total 1.364 pengaduan (pencapaian KPI 99,93%). Sementara itu, 26 Kantor cabang lainnya mencatatkan performa penyelesaian 100% sempurna tanpa adanya catatan over SLA."
     }
    ],
    "mlt": [
     {
      "label": null,
      "teks": "Penyaluran Manfaat Layanan Tambahan (MLT) di Kantor Wilayah Sumbagsel memperlihatkan dinamika pencapaian yang sangat kontras antara realisasi nilai nominal dan kuantitas unit. Secara nominal, Kanwil Sumbagsel mencatatkan kinerja yang luar biasa dengan total penyaluran nominal mencapai Rp161,51 Miliar atau setara dengan 134,92% dari target nominal wilayah. Namun di sisi lain, penyerapan dari kuantitas unit masih tergolong sangat rendah, yakni baru terealisasi sebanyak 31 unit dari keseluruhan target wilayah atau baru mencapai 24,60%."
     },
     {
      "label": null,
      "teks": "Ketimpangan ini mengindikasikan bahwa skema penyaluran MLT yang berjalan saat ini didominasi oleh pembiayaan bernilai besar (high-value/high- ticket size), tetapi jangkauan manfaatnya belum merata ke banyak peserta. Kondisi tersebut diperparah oleh tingkat pasivitas unit kerja yang tinggi, di mana penyaluran MLT saat ini hanya terkonsentrasi di 7 kantor cabang. Cabang Bandar Lampung tampil sebagai kontributor unit terbesar sekaligus satu-satunya cabang yang berhasil melampaui target unit (13 unit atau 108,33%), sementara Cabang Jambi dan Muaro Bungo menjadi penopang utama penyerapan nominal. Sebaliknya, sebanyak 20 dari 27 kantor cabang (74%) masih mencatatkan angka nihil atau belum memproses penyaluran MLT sama sekali."
     }
    ],
    "klaim": [
     {
      "label": null,
      "teks": "Dari jumlah kasus, 71.2% kasus klaim di Wilayah Sumbagsel didominasi oleh klaim JHT (156.880 kasus). Diikuti oleh klaim JKK sebesar 11.7% (25.872 kasus). Kasus JKP memiliki porsi 11.5% (25.310 kasus) dari total 220.454 kasus klaim seluruh program di Wilayah Sumbagsel. Selanjutnya, terdapat 3.7% kasus klaim JKM (8.258 kasus) yang kemudian diikuti oleh klaim JP dengan 1.9% (4.134 kasus)."
     },
     {
      "label": null,
      "teks": "Dari total Rp 2.455.671.339.387 nilai klaim di Wilayah Sumbagsel, 83.6% diantaranya didominasi oleh pembayaran klaim JHT (Rp 2.053.975.683.580). Diikuti oleh klaim JKM dengan porsi 6.1% (Rp 150.918.600.000). Juga dibayarkan klaim JKK sebesar Rp 118.533.019.185 atau 4.8% dari total nilai klaim. Selanjutnya, telah dibayarkan Rp 68.402.702.170 klaim JP atau 2.8% dari total nilai klaim. Diikuti oleh klaim JKP sebesar 2.6% (Rp 63.841.334.452)."
     }
    ],
    "unit": [
     {
      "label": null,
      "teks": "Unit Layanan di jajaran Kantor Wilayah Sumbagsel saat ini terdiri dari 34 titik yang mencakup 3 Unit Layanan PMI dan 31 Unit Layanan Kabupaten/Kota yang tersebar di Kabupaten Kota di Wilayah Sumbagsel dan terintegrasi secara langsung dengan skema pairing ke Kantor Cabang di Jajaran Kantor Wilayah Sumbagsel. Penempatan para petugas unit layanan menyebar secara strategis di berbagai area publik seperti di Mall Pelayanan Publik (MPP), Kantor Dinas Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu, Kantor BP3MI, BPKAD hingga Kantor Perbankan Mitra Kerjasama. Apabila dikombinasikan dengan jaringan 27 Kantor Cabang BPJS Ketenagakerjaan, Kanal layanan fisik di wilayah Sumbagsel telah menjangkau 48 dari total 50 total kabupaten/kota yang ada di Provinsi Sumsel, Bengkulu, Jambi, Lampung dan Bangka Belitung atau setara dengan 96% coverage wilayah."
     },
     {
      "label": null,
      "teks": "Berdasarkan analisis wilayah operasional, tiga provinsi di jajaran Kanwil Sumbagsel telah mencapai 100% tanpa adanya blind spot. Provinsi Kepulauan Bangka Belitung terlayani penuh di 7 kabupaten/kota melalui kombinasi 5 Unit Layanan (Bangka, Bangka Barat, Bangka Selatan, Bangka Tengah, Belitung Timur) dan 2 Kantor Cabang (Pangkal Pinang dan Belitung Tanjung Pandan). Provinsi Jambi juga terlayani 100% di 11 kabupaten/kota yang ditopang oleh 3 Unit Layanan (Kerinci, Tebo, Tanjung Jabung Timur) serta 8 Kantor Cabang (Jambi, Sungai Penuh, Batanghari, Merangin, Muaro Jambi, Bungo, Tanjung Jabung Barat, Sarolangun). Sementara itu, Provinsi Bengkulu terjangkau penuh di 10 kabupaten/kota melalui perpaduan 8 Unit Layanan dan 2 Kantor Cabang (Arga Makmur dan Rejang Lebong Curup)."
     },
     {
      "label": null,
      "teks": "Sedangkan lokasi yang dikategorikan sebagai wilayah blind spot yakni di Kabupaten Pesawaran di Provinsi Lampung, di mana 14 kabupaten/kota Lampung lainnya sebenarnya telah tercover oleh 7 Unit Layanan dan 7 Kantor Cabang, serta Kabupaten Musi Rawas di Provinsi Sumatera Selatan, di mana 16 kabupaten/kota Sumsel lainnya sudah terjangkau oleh 9 Unit Layanan dan 7 Kantor Cabang."
     }
    ],
    "igi": [
     {
      "label": null,
      "teks": "Kinerja penyelesaian klaim pending Jaminan Kecelakaan Kerja (JKK) melalui aplikasi e-PLKK sesuai Service Level Agreement (SLA) menunjukkan tren positif di mana mayoritas kantor cabang mampu menjaga konsistensi performa terbaiknya. Berdasarkan evaluasi historis dari bulan Februari hingga Agustus, empat kantor cabang yakni Muaro Bungo, Jambi, Lampung Tengah, dan Bandar Lampung berhasil mempertahankan capaian skor sempurna bernilai 15,00 secara konsisten tanpa mencatatkan penurunan sama sekali."
     }
    ]
   }
  }
 }
};
