const files = [
  {
    title: "الأذكار والآداب",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0101AlAthkaar_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و علومه أهم الصوتيات",
  },
  {
    title: "نواقض الإسلام",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0203NawaaqidAlIslaam_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "القواعد الأربع",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0202AlQawaidAlArba_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "الأصول الثلاثة ودليلها",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0201AlUsulAtThalaath_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "الأربعين النووية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0204AlArbaunAnNawawiyah_AbdulAzizAsSini.mp3",
    ],
    category: "قسم الأطفال أهم الصوتيات الحديث و علومه",
  },
  {
    title: "تحفة الأطفال",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0301ThufatUlAtfaal_AbdulAzizAsSini.mp3",
    ],
    category: "التجويد و القراءات",
  },
  {
    title: "شروط الصلاة وأركانها وواجباتها",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0302ShurutAsSalaah_AbdulAzizAsSini.mp3",
    ],
    category: "الفقه و علومه",
  },
  {
    title: "منظومة التوحيد و الإيمان",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0302ShurutAsSalaah_AbdulAzizAsSini.mp3",
    ],
    category: "قسم الأطفال العقيدة",
  },
  {
    title: "نظم المقصود",
    url: [
      "https://ia801603.us.archive.org/29/items/Mutun_al-Arabiya/makhsood.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "الجوهر المكنون",
    url: [
      "https://ia801603.us.archive.org/29/items/Mutun_al-Arabiya/aljawhar.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "الجوهر المكنون",
    url: ["https://ia801603.us.archive.org/29/items/Mutun_al-Arabiya/abb.mp3"],
    category: "اللغة",
  },
  {
    title: "المختصر في السيرة",
    url: [
      "https://dn721609.ca.archive.org/0/items/Mokhtasar_fi_Sirra/01.mp3",
      "https://dn721609.ca.archive.org/0/items/Mokhtasar_fi_Sirra/02.mp3",
      "https://dn721609.ca.archive.org/0/items/Mokhtasar_fi_Sirra/03.mp3",
      "https://dn721609.ca.archive.org/0/items/Mokhtasar_fi_Sirra/04.mp3",
    ],
    category: "السيرة أهم الصوتيات",
    size: "big",
    duration: [14075, 16600, 20851, 21305],
    total_duration: 72831,
  },
  // {
  //   title: "رياض الصالحين",
  //   url: [
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/01.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/02.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/03.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/04.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/05.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/06.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/07.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/08.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/09.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/10.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/11.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/12.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/13.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/14.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/15.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/16.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/17.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/18.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/19.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/20.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/21.mp3",
  //   ],
  //   category: "الحديث و علومه",
  //   size: "big",
  //   duration: [
  //     5437, 5290, 5306, 5308, 5303, 5285, 5159, 5277, 3625, 3685, 3706, 3436,
  //     3635, 3455, 3670, 3398, 3398, 3661, 3640, 3648, 4217,
  //   ],
  //   total_duration: 76795,
  // },

  {
    title: "نظم الآجرومية",
    url: ["https://ia801603.us.archive.org/29/items/Mutun_al-Arabiya/abb.mp3"],
    category: "اللغة",
  },
  {
    title: "منظومة البيقونية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0401AlBayqooni_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و مصطلحه",
  },
  {
    title: "أحادييث مختارة من الؤلؤ و المرجان",
    url: ["https://media.islamway.net/lessons/Motoon/A7adeeth.mp3"],
    category: "الحديث و مصطلحه",
  },

  {
    title: "الخلاصة الحسناء في أذكار الصباح و المساء",
    url: ["https://www.mimham.net/audmat-1060"],
    category: "الحديث و مصطلحه",
  },
  {
    title: "غرامي صحيح",
    url: [" https://www.mimham.net/audmat-396"],
    category: "الحديث و مصطلحه",
  },

  {
    title: "قصيدة أبي إسحاق الإلبيري",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0402AlIlbiri_AbdulAzizAsSini.mp3",
    ],
    category: "الأدب و الرقائق",
  },

  {
    title: "لامية ابن الوردي",
    url: ["  https://www.mimham.net/audmat-624"],
    category: "الأدب و الرقائق",
  },

  {
    title: "خلاصة تعظيم العلم",
    url: ["https://www.mimham.net/audmat-768"],
    category: "الأدب و الرقائق",
  },

  {
    title: "المقدمة الآجرومية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0403AlAajurrumiyyah_AbdulAzizAsSini.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "منظومة أحسن الأخلاق",
    url: [
      "https://ia600905.us.archive.org/18/items/Media-way2Allah_1521/mnzwma_ahsn_alakhlak_nzm-_3amr_bhgt_-_elkaa-_3le_al3amre_med.mp3",
    ],
    category: "الأدب و الرقائق قسم الأطفال",
  },
  {
    title: "المنيرة في مهم علم السيرة",
    url: [
      "https://archive.org/download/Media-way2Allah_1881/kraaa_mnzwma_almnera_fe_mhm_3lm_alsera_-_llshekh_al3lama_salh_al3seme.mp3",
    ],
    category: "السيرة قسم الأطفال",
  },

  {
    title: "ملحة الإعراب",
    url: ["https://www.mimham.net/audmat-369"],
    category: "اللغة",
  },

  {
    title: "نظم مثلث قطرب",
    url: ["  https://www.mimham.net/audmat-614"],
    category: "اللغة",
  },

  {
    title: "العقيدة الواسطية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0404AlWaasitiyyah_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "الورقات",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0501AlWaraqat_AbdulAzizAsSini.mp3",
    ],
    category: "الفقه و علومه",
  },
  {
    title: "عنوان الحكم",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0502UnwanAlHikm_AbdulAzizAsSini.mp3",
    ],
    category: "الأدب و الرقائق",
  },
  {
    title: "نونية ابن القيم في وصف الجنة",
    url: [
      "https://media.islamway.net/lessons/scho864/347_Fares_Abbad_NoniatEbnelQaim_32.mp3",
    ],
    category: "الأدب و الرقائق",
  },
  {
    title: "بهجة الطلب في آداب الطلب",
    url: ["https://www.mimham.net/audmat-1058"],
    category: "الأدب و الرقائق",
  },
  {
    title: "الآداب العشرة",
    url: ["https://www.mimham.net/audmat-1059"],
    category: "الأدب و الرقائق",
  },

  {
    title: "الرحبية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0503ArRahbiyah_AbdulAzizAsSini.mp3",
    ],
    category: "الفقه و علومه",
  },
  {
    title: "منظومة القواعد الفقهية للسعدي",
    url: [" https://www.mimham.net/audmat-846"],
    category: "الفقه و علومه",
  },
  {
    title: "المقدمة الفقهية الصغري للعصيمي",
    url: [" https://www.mimham.net/audmat-859"],
    category: "الفقه و علومه",
  },

  {
    title: "النظم الجلي في الفقه الحنبلي",
    url: [
      "  https://dn721609.ca.archive.org/0/items/Media-way2Allah_2381/kraaa_alnzm_algle_kamla.mp3",
    ],
    category: "الفقه و علومه",
  },

  {
    title: "العقيدة الطحاوية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0504AtTahawiyah_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "بلوغ المرام من أدلة الأحكام",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0601Buloogh_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و علومه أهم الصوتيات",
  },
  {
    title: "زاد المستقنع في اختصار المقنع",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/MaajidMustafa/0602Zaad_MaajidMustafa.mp3",
    ],
    category: "الفقه و علومه",
  },
  {
    title: "ألفية ابن مالك",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulGhaniSaadiqAlFaqeeh/0603AlfiyyahIbnMaalik_AbdulGhaniSaadiqAlFaqeeh.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "نخبة الفكر",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/IbraheemAlMihdaar/0801Nukhbah_IbraheemAlMihdaar.mp3",
    ],
    category: "الحديث و علومه",
  },
  {
    title: "عمدة الأحكام",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0802AlUmdatuFilAhkaam_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و علومه أهم الصوتيات",
  },
  {
    title: "إذاعة السنة النبوية",
    url: ["https://radio.alukah.net/hadith"],
    category: "الحديث و علومه أهم الصوتيات",
  },
  // {
  //   title: "اللؤلؤ و المرجان في ما اتفق عليه الشيخان",
  //   url: [
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_01_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_02_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_03_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_04_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_05_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_06_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_07_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_08_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_09_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_10_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_11_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_12_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_13_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_14_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_15_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_16_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_17_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_18_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_19_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_20_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_21_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_22_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_23_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_24_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_25_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_26_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_27_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_28_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_29_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_30_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_31_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_32_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_33_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_34_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_35_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_36_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_37_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_38_Alloulou_walmrjan.mp3",
  //     "https://d1.islamhouse.com/data/ar/ih_sounds/chain_01/Alloulou_walmrjan/ar_39_Alloulou_walmrjan.mp3",
  //   ],
  //   category: "الحديث و علومه",
  // },

  // {
  //   title: "تفسير ابن جزي",
  //   url: [
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/001.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/002.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/003.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/004.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/005.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/006.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/007.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/008.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/009.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/010.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/011.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/012.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/013.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/014.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/015.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/016.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/017.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/018.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/019.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/020.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/021.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/022.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/023.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/024.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/025.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/026.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/027.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/028.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/029.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/030.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/031.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/032.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/033.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/034.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/035.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/036.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/037.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/038.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/039.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/040.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/041.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/042.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/043.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/044.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/045.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/046.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/047.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/048.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/049.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/050.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/051.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/052.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/053.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/054.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/055.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/056.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/057.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/058.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/059.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/060.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/061.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/062.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/063.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/064.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/065.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/066.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/067.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/068.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/069.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/070.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/071.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/072.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/073.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/074.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/075.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/076.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/077.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/078.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/079.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/080.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/081.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/082.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/083.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/084.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/085.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/086.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/087.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/088.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/089.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/090.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/091.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/092.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/093.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/094.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/095.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/096.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/097.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/098.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/099.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/100.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/101.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/102.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/103.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/104.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/105.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/106.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/107.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/108.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/109.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/110.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/111.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/112.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/113.mp3",
  //     "https://mirrors.quranicaudio.com/tafsir.one/ibn-juzay/114.mp3",
  //   ],

  //   category: "علوم القرآن و التفسير",
  // },

  {
    title: "فتاوي كبار العلماء",
    url: ["https://radio.alukah.net/hadith"],
    category: "الفقه و علومه",
  },
  {
    title: "منح الفعال نظم الورقات",
    url: ["https://www.mimham.net/audmat-1056"],
    category: "الفقه و علومه",
  },

  {
    title: "ألفية العراقي في الحديث",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0805AlfiyyahAlIraaqi_YusufAlAynaaty.mp3",
    ],
    category: "الحديث و علومه",
  },

  {
    title: "أذكار طرفي الليل و النهار",
    url: [
      "https://media.islamway.net/lessons/scho864/014-AtkarTrfyAlnahar.mp3",
    ],
    category: "الحديث و علومه",
  },

  {
    title: "الشاطبية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/MahmudHaleem/0814AsShaatibiyyah_MahmudHaleem.mp3",
    ],
    category: "التجويد و القراءات",
  },
  {
    title: "الحموية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YahfazAsShanqiti/0815AlHamawiyyah_YahfazAsShanqiti.mp3",
    ],
    category: "العقيدة",
  },

  {
    title: "فضل الإسلام",
    url: ["https://www.mimham.net/audmat-879"],
    category: "العقيدة",
  },

  {
    title: "ألفية العراقي في السيرة",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0807AlfiyyahAlIraaqiSeerah_AbdulAzizAsSini.mp3",
    ],
    category: "السيرة",
  },
  {
    title: "الجزرية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0803AlJazariyah_AbdulAzizAsSini.mp3",
    ],
    category: "التجويد و القراءات",
  },
  {
    title: "الدرة المضية",
    url: [
      "  https://ia600303.us.archive.org/8/items/Mutun_kiraat_mujtami3a/dorah.mp3",
    ],
    category: "التجويد و القراءات",
  },
  {
    title: "طيبة النشر",
    url: [
      "  https://ia600303.us.archive.org/8/items/Mutun_kiraat_mujtami3a/tayebatunashr.mp3",
    ],
    category: "التجويد و القراءات",
  },

  {
    title: "السلسبيل الشافي",
    url: [
      "https://media.islamway.net/lessons/scho977/440_Matn_Alsalsabel_Alshafy.mp3",
    ],
    category: "التجويد و القراءات",
  },

  {
    title: "كشف الشبهات",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulGhaniSaadiqAlFaqeeh/0804Kashf_AbdulGhaniSaadiqAlFaqeeh.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "الأرجوزة الميئية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0811AlMeiyyahSeerah_AbdulAzizAsSini.mp3",
    ],
    category: "السيرة",
  },
  {
    title: "لامية الأفعال",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0810LaamiyyahAlAfaal_YusufAlAynaaty.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "مقدمة في أصول التفسير",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/SayfAlRahmaanShaaheen/0812MuqaddimahTafseer_SayfAlRahmaanShaaheen.mp3",
    ],
    category: "علوم القرآن و التفسير",
  },

  {
    title: "معاني الفاتحة و قصار المفصل للعصيمي",
    url: ["  https://www.mimham.net/audmat-845"],
    category: "علوم القرآن و التفسير",
  },

  {
    title: "مائة المعاني و البيان",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0813MiatAlMaaniWaAlBayaan_YusufAlAynaaty.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "منظومة الزمزمي",
    url: ["https://www.mimham.net/audmat-1071"],
    category: "علوم القرآن و التفسير",
  },

  {
    title: "المختصر في التفسير",
    url: [" https://qurango.net/radio/mukhtasartafsir"],
    category: "علوم القرآن و التفسير أهم الصوتيات",
  },
  {
    title: "تفسير ابن عثيمين",
    url: ["https://qurango.net/radio/tafseer"],
    category: "علوم القرآن و التفسير أهم الصوتيات",
  },

  {
    title: "نونية القحطاني",
    url: [
      "https://media.islamway.net/lessons/scho864/347_Fares3abbad_NooniatAlQa7tany.mp3",
    ],
    category: "العقيدة",
  },

  {
    title: "سلم الوصول",
    url: ["  https://www.mimham.net/audmat-408"],
    category: "العقيدة",
  },

  {
    title: "حصن المسلم",
    url: [
      "https://media.islamway.net/audiobooks/15-HDrihim_HossnMoslim256.mp3",
    ],
    category: "قسم الأطفال أهم الصوتيات الحديث و علومه",
  },
  {
    title: "قصيدة أبي البقاء الرندي في رثاء الأندلس",
    url: ["https://media.islamway.net/several/Andalous.mp3"],
    category: "قصائد و أناشيد مختارة",
  },
  {
    title: "لامية العرب",
    url: ["https://www.mimham.net/audmat-631"],
    category: "قصائد و أناشيد مختارة",
  },

  {
    title: "أيا من يدعي الفهم",
    url: [" https://media.islamway.net//several/197/120.mp3"],
    category: "قصائد و أناشيد مختارة",
  },

  {
    title: "ذوق الصلاة لابن القيم",
    url: ["https://media.islamway.net/audiobooks/4651/15_RHlibh_ThouqSlat.mp3"],
    category: "كتب صوتية",
  },
  {
    title: "ذم قسوة القلب لابن رجب",
    url: ["https://www.mimham.net/audmat-380"],
    category: "كتب صوتية",
  },

  {
    title: "بيان فضل علم السلف علي الخلف",
    url: ["https://www.mimham.net/audmat-463"],
    category: "كتب صوتية",
  },

  {
    title: "الذل و الانكسار للعزيز الجبار لابن رجب",
    url: [
      "https://media.islamway.net/audiobooks/4651/15_RHlibh_ThilEnksarIbnrajab64.mp3",
    ],
    category: "كتب صوتية",
  },
  {
    title: "شرح حديث ما ذئبان جائعان لابن رجب",
    url: ["https://media.islamway.net/audiobooks/4651/15_RFHlibh_Theban.mp3"],
    category: "كتب صوتية",
  },
  // {
  //   title: "الداء و الدواء",
  //   url: [
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa01.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa02.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa03.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa04.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa05.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa06.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa07.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa08.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa09.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa10.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa11.mp3",
  //     "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa12.mp3",
  //   ],
  //   category: "كتب صوتية",
  // },
  // {
  //   title: "رياض الصالحين",
  //   url: [
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/01.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/02.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/03.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/04.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/05.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/06.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/07.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/08.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/09.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/10.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/11.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/12.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/13.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/14.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/15.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/16.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/17.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/18.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/19.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/20.mp3",
  //     "https://media.islamway.net/lessons/qattan/readalSAlhen/21.mp3",
  //   ],

  //   category: "كتب صوتية",
  // },

  // {
  //   title: "معالم السنة",
  //   url: [
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_01.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_02.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_03.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_04.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_05.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_06.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_07.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_08.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_09.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_10.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_11.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_12.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_13.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_14.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_15.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_16.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_17.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_18.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_19.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_20.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_21.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_22.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_23.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_24.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_25.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_26.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_27.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_28.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_29.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_30.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_31.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_32.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_33.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_34.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_35.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_36.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_37.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_38.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_39.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_40.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_41.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_42.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_43.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_44.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_45.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_46.mp3",
  //     "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_47.mp3",
  //   ],
  //   category: "كتب صوتية",
  // },
];
