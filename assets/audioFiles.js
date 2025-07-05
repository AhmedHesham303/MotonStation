const files = [
  {
    title: "الأذكار والآداب",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0101AlAthkaar_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و علومه",
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
    category: "الحديث و علومه",
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
    title: "كتاب التوحيد",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0303KitaabAtTawheed_AbdulAzizAsSini.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "منظومة البيقونية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0401AlBayqooni_AbdulAzizAsSini.mp3",
    ],
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
    title: "المقدمة الآجرومية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0403AlAajurrumiyyah_AbdulAzizAsSini.mp3",
    ],
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
    title: "الرحبية",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0503ArRahbiyah_AbdulAzizAsSini.mp3",
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
    title: "بلوغ المرام",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/AbdulAzizAsSini/0601Buloogh_AbdulAzizAsSini.mp3",
    ],
    category: "الحديث و علومه",
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
    category: "الحديث و علومه",
  },
  {
    title: "ألفية العراقي في الحديث",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0805AlfiyyahAlIraaqi_YusufAlAynaaty.mp3",
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
    title: "مائة المعاني و البيان",
    url: [
      "https://files.a-alqasim.com/audio/Mutoon/YusufAlAynaaty/0813MiatAlMaaniWaAlBayaan_YusufAlAynaaty.mp3",
    ],
    category: "اللغة",
  },
  {
    title: "نونية القحطاني",
    url: [
      "https://media.islamway.net/lessons/scho864/347_Fares3abbad_NooniatAlQa7tany.mp3",
    ],
    category: "العقيدة",
  },
  {
    title: "حصن المسلم",
    url: [
      "https://media.islamway.net/audiobooks/15-HDrihim_HossnMoslim256.mp3",
    ],
    category: "الحديث و علومه",
  },
  {
    title: "ذوق الصلاة لابن القيم",
    url: ["https://media.islamway.net/audiobooks/4651/15_RHlibh_ThouqSlat.mp3"],
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
  {
    title: "الداء و الدواء",
    url: [
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa01.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa02.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa03.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa04.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa05.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa06.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa07.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa08.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa09.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa10.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa11.mp3",
      "https://media.islamway.net/audiobooks/615/125_Daa_Dawaa12.mp3",
    ],
    category: "كتب صوتية",
  },

  {
    title: "معالم السنة",
    url: [
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_01.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_02.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_03.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_04.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_05.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_06.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_07.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_08.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_09.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_10.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_11.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_12.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_13.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_14.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_15.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_16.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_17.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_18.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_19.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_20.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_21.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_22.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_23.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_24.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_25.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_26.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_27.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_28.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_29.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_30.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_31.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_32.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_33.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_34.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_35.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_36.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_37.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_38.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_39.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_40.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_41.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_42.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_43.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_44.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_45.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_46.mp3",
      "https://media.islamway.net/audiobooks/4912/Ma3alem_Sunnah_47.mp3",
    ],
    category: "كتب صوتية",
  },
];
