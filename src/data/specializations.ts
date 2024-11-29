import { ISpecializations } from "../types/types";

export const specializations: ISpecializations = {
  psychologist: {
    id: "1",
    description:
      "Психолог - специалист, который помогает людям справляться с эмоциональными и психическими трудностями, проводя консультации и терапию.",
    label: "Психолог",
    name: "psychologist",
    imgPath: "psychologist.webp",
    universities: [
      {
        id: "ac3136e9-9af8-46e1-ab05-d18d43822807",
        name: "Российский государственный социальный университет",
        link: "https://rgsu.net",
      },
      {
        id: "63e80baf-6bda-4694-aca3-087c9376b789",
        name: "Московский городской педагогический университет",
        link: "https://www.mgpu.ru",
      },
      {
        id: "021b0ff6-8074-48ae-8c8a-145d759921a8",
        name: "РАНХиГС Санкт-Петербург",
        link: "https://spb.ranepa.ru",
      },
      {
        id: "0ce2b786-e718-462a-89fe-9c6a96d286e8",
        name: "Ломоносовский институт (филиал) Ленинградского государственного университета имени А.С. Пушкина",
        link: "https://lomonosov.lengu.ru",
      },
      {
        id: "92d98b77-f707-4b4c-84bc-3350716f67eb",
        name: "Южный федеральный университет",
        link: "https://sfedu.ru",
      },
      {
        id: "b8601b25-4ddb-46fd-a89f-8a9e0dd30dd3",
        name: "Международный колледж искусств и коммуникаций",
        link: "https://igumo.ru/collej",
      },
    ],
  },
  sociologist: {
    id: "1",
    description:
      "Социолог - изучает общественные отношения, группы и институты, анализируя, как они влияют на жизнь отдельных людей и общества в целом.",
    label: "Социолог",
    name: "sociologist",
    imgPath: "sociologist.webp",
    universities: [
      {
        id: "f8baba79-15a8-438f-b41f-7944acd1d05b",
        name: "Московский государственный университет имени М.В. Ломоносова",
        link: "https://www.msu.ru",
      },
      {
        id: "5191e5bd-e720-4874-8f57-fc8c57cb3c5d",
        name: "Санкт-Петербургский государственный университет",
        link: "https://spbu.ru",
      },
      {
        id: "40a02304-1913-4d2d-8fb8-a2867b06ae2c",
        name: "Национальный исследовательский университет «Высшая школа экономики»",
        link: "https://www.hse.ru",
      },
      {
        id: "a0969b60-95d0-46e7-bbd7-24ec9043e9f9",
        name: "Санкт-Петербургский государственный университет культуры и искусств",
        link: "https://spbguki.ru",
      },
      {
        id: "da4ad52a-8ae1-42e9-8968-052cd1afb2ad",
        name: "Смоленский государственный университет",
        link: "http://www.smolgu.ru",
      },
      {
        id: "fb639a33-0f4f-4623-874b-44126d64343f",
        name: "СпбГУ «Социум»",
        link: "https://socium.spbu.ru",
      },
      {
        id: "76c8f5b3-5c4a-4f5b-b2c2-6aa5607adb38",
        name: "Университет ИТМО",
        link: "https://en.itmo.ru",
      },
    ],
  },
  teacher: {
    id: "1",
    description:
      "Учитель - передает знания и навыки ученикам, развивая их мышление и помогая достигать учебных целей.",
    label: "Социолог",
    name: "teacher",
    imgPath: "teacher.webp",
    universities: [
      {
        id: "558ce325-02fe-46a6-96c7-384476ea6629",
        name: "Московский педагогический государственный университет",
        link: "https://mpgu.su",
      },
      {
        id: "45e08701-b56a-48a6-bec3-e9a223e5e6c0",
        name: "Санкт-Петербургский государственный университет",
        link: "https://spbpu.ru",
      },
      {
        id: "f1b72cfc-4d8c-4a1d-813f-ba3cc3916c28",
        name: "Российская академия народного хозяйства и государственной службы",
        link: "https://www.ranepa.ru",
      },
      {
        id: "34f4216c-12d1-4250-b449-602539197d68",
        name: "Национальный исследовательский университет «Высшая школа экономики»",
        link: "https://www.hse.ru",
      },
      {
        id: "2bc72ad3-cb66-44ad-8596-e39ef517aeb0",
        name: "Московский городской педагогический университет",
        link: "https://www.mgpu.ru",
      },
      {
        id: "01899cfc-bc28-4ce1-9ae1-9f39738c23ea",
        name: "Самарский государственный университет",
        link: "https://www.samsu.ru",
      },
      {
        id: "8f378488-fcd0-401f-8f24-db1320329be2",
        name: "Уральский государственный педагогический университет",
        link: "https://www.uspu.ru",
      },
      {
        id: "1ee8f9bf-b412-47c0-b1a7-db4f3d45ffa4",
        name: "Сибирский федеральный университет",
        link: "https://www.sfu-kras.ru",
      },
      {
        id: "c0c97e0f-6254-4f71-9719-e68063bc6740",
        name: "Казанский государственный педагогический университет",
        link: "https://kspu.kcn.ru",
      },
      {
        id: "cb049a4f-01fe-4c74-b13d-8958ba73b29a",
        name: " Ростовский государственный университет",
        link: "https://www.rsu.edu.ru",
      },
    ],
  },
  doctor: {
    id: "f3df4e48-ced8-4418-89c9-33394813fdcc",
    description:
      "Врач - занимается диагностикой и лечением заболеваний, заботится о здоровье пациентов и профилактике болезней.",
    label: "Врач",
    name: "doctor",
    imgPath: "doctor.webp",
    universities: [
      {
        id: "e2108b56-9eb8-4e7c-83e1-2315b0691129",
        name: "Первый Московский государственный медицинский университет имени И.М. Сеченова",
        link: "http://www.pavlov.ru",
      },
      {
        id: "ff16f351-a254-4001-b33d-fe46df7faf38",
        name: "Санкт-Петербургский государственный медицинский университет имени академика И.П. Павлова",
        link: "http://szgmu.ru",
      },
      {
        id: "5616575f-702e-4651-8030-93ad6ca1bf9e",
        name: "Новосибирский государственный медицинский университет",
        link: "http://nsmu.ru",
      },
      {
        id: "5fb25572-20a6-447b-9035-33d144e718d9",
        name: "Казанский государственный медицинский университет",
        link: "http://www.kgmu.kcn.ru",
      },
      {
        id: "a57d26f0-69e4-4f87-b534-49b46efbd3a6",
        name: "Российский государственный медицинский университет",
        link: "http://www.rsmu.ru",
      },
      {
        id: "fe5e15c0-d7ba-4e02-85e8-25b4a5b963ea",
        name: "Уральский государственный медицинский университет",
        link: "http://usmu.ru",
      },
      {
        id: "631fe968-b6c8-45f3-acda-7f33d694376f",
        name: "Сибирский государственный медицинский университет",
        link: "http://sgmu.ru",
      },
    ],
  },
  conflictologist: {
    id: "b11c2925-8b5c-4832-8de4-1b05f72ce8af",
    description:
      "Конфликтолог - решает споры и конфликты между людьми или группами, помогая им найти компромисс и улучшить взаимопонимание.",
    label: "Конфликтолог",
    name: "conflictologist",
    imgPath: "conflictologist.webp",
    universities: [
      {
        id: "d3c94030-6e62-4112-8bc7-27b8317cc79c",
        name: "Московский педагогический государственный университет (МПГУ)",
        link: "http://www.mpgu.su",
      },
      {
        id: "9d2657bd-f0eb-4f41-b7e8-cb103bb53e91",
        name: "Российский государственный социальный университет (РГСУ)",
        link: "https://rgsu.net",
      },
    ],
  },
  linguist: {
    id: "3a2fac23-c666-499a-80bb-f73d69d0f1f2",
    description:
      "Лингвист - исследует языки, их структуру и использование, а также помогает в изучении и переводе.",
    label: "Лингвист",
    name: "linguist",
    imgPath: "Linguist.webp",
    universities: [
      {
        id: "374e1bf8-e1c7-4553-a1b9-5f8b24de96ca",
        name: "МГУ (Московский государственный университет имени М.В. Ломоносова)",
        link: "https://www.msu.ru",
      },
      {
        id: "baebbf67-d321-431b-896e-b2406130ace7",
        name: "СПбГУ (Санкт-Петербургский государственный университет)",
        link: "http://english.spbu.ru",
      },
      {
        id: "9a8cc887-48dd-4389-95e6-e088fe68fb6a",
        name: "МГПУ (Московский городской педагогический университет)",
        link: "https://mgpu.ru",
      },
      {
        id: "78be9559-0333-4a0e-be5b-ccff54236147",
        name: "ЯрГУ (Ярославский государственный университет)",
        link: "https://ysu.ru",
      },
      {
        id: "32e4e3b2-47db-408b-9b84-746a7589b8a0",
        name: "МГЛУ (Московский государственный лингвистический университет)",
        link: "http://www.mslu.ru",
      },
      {
        id: "37308cb7-5398-40c2-833c-9be32cc6a841",
        name: "ТГПУ им. Л.Н. Толстого (Тульский государственный педагогический университет имени Льва Николаевича Толстого)",
        link: "https://www.tspu.eduric.ru",
      },
      {
        id: "73ca73a6-40ee-4d6d-8cb7-d86653a211be",
        name: "Казанский федеральный университет",
        link: "https://kpfu.ru",
      },
      {
        id: "49632c7e-b49c-48e2-a158-941f496b3746",
        name: "Томский государственный университет",
        link: "http://en.tsu.ru",
      },
    ],
  },
  journalist: {
    id: "bbd7d1e0-0dc4-481c-9835-e01a52dc9e4a",
    description:
      "Журналист - собирает, анализирует и публикует информацию о событиях, делая её доступной для широкой аудитории.",
    label: "Журналист",
    name: "journalist",
    imgPath: "journalist.webp",
    universities: [
      {
        id: "5c155aca-e617-40b0-92dd-1bd9f918e576",
        name: "МГУ имени М.В. Ломоносова",
        link: "https://www.msu.ru",
      },
      {
        id: "e812788e-4032-4ef6-b78f-b24be4153264",
        name: "СПбГУ",
        link: "https://english.spbu.ru",
      },
      {
        id: "ca972b79-330a-4703-99af-8920fc4bf474",
        name: "МИГУ-МИТХПА",
        link: "http://migmed.ru",
      },
      {
        id: "af827fb7-80d0-464e-a02c-1fa01fb0b5d7",
        name: "МГИМО",
        link: "https://english.mgimo.ru",
      },
      {
        id: "ab5d8d46-ea08-4bf5-9f4d-a57ec6f4746c",
        name: "Московский государственный университет культуры и искусств",
        link: "https://www.mguki.ru",
      },
      {
        id: "bdb4b52b-7e8c-47e0-b677-45af590c329f",
        name: "НИУ Высшая школа экономики",
        link: "https://www.hse.ru",
      },
    ],
  },
  editor: {
    id: "0fc9a4f3-30f4-4735-b588-28fd6e8c4117",
    description:
      "Ппроверяет и корректирует материалы перед их публикацией, обеспечивая качество и соответствие стандартам.",
    label: "Редактор",
    name: "editor",
    imgPath: "editor.webp",
    universities: [
      {
        id: "0c40d97e-64d8-4eab-8493-10b17a8d39f2",
        name: "Московский государственный университет имени М.В. Ломоносова",
        link: "https://www.msu.ru/",
      },
      {
        id: "f0281a83-9f91-46b0-acf4-48d827498a9a",
        name: "Санкт-Петербургский государственный университет",
        link: "https://spbu.ru/",
      },
      {
        id: "fbbd4a69-abf4-4c81-8997-824371c1f141",
        name: "Высшая школа журналистики и массовых коммуникаций МГУ",
        link: "https://www.journ.msu.ru/",
      },
      {
        id: "a09c1cd8-e885-4643-9bab-8a5d160ff9e2",
        name: "Национальный исследовательский университет «Высшая школа экономики»",
        link: "https://www.hse.ru/",
      },
      {
        id: "8b399b6d-c68a-487f-915e-c0651d19f402",
        name: "Московский государственный университет культуры и искусств",
        link: "https://www.rsut.ru/",
      },
    ],
  },
  graphicDesigner: {
    id: "9f1438a3-ace1-4370-8273-d493a21cbe38",
    description:
      "Графический дизайнер - создает визуальные материалы, такие как логотипы и иллюстрации, чтобы эффективно передать информацию.",
    label: "Графический дизайнер",
    name: "graphicDesigner",
    imgPath: "graphic_designer.webp",
    universities: [
      {
        id: "449f1595-711c-4ed5-a992-d9345642415f",
        name: "Московский государственный университет дизайна и технологии (МГУДТ)",
        link: "https://www.mgudt.ru",
      },
      {
        id: "b2ba2622-2177-4869-bb54-b223631c58e3",
        name: "Санкт-Петербургский государственный университет промышленных технологий и дизайна (СПбГПТД)",
        link: "https://www.spbgupd.ru",
      },
      {
        id: "90a9da94-a977-4ced-a705-18f5fda07e26",
        name: "Российская академия художеств",
        link: "http://www.rah.ru",
      },
      {
        id: "2970f76a-778c-417e-91f7-b7e6aff96816",
        name: "Национальный исследовательский университет ИТМО",
        link: "https://itmo.ru",
      },
      {
        id: "241e7982-b6d1-418e-aea4-641331078301",
        name: "Казанский федеральный университет",
        link: "https://kpfu.ru",
      },
      {
        id: "38d1d63e-b941-41fa-acb0-98f020f006af",
        name: "Уральский федеральный университет (УрФУ)",
        link: "https://urfu.ru",
      },
      {
        id: "4dc46a8d-4c69-4c08-a484-a6d2fb361ec9",
        name: "Сибирский федеральный университет (СФУ)",
        link: "https://www.sfu-kras.ru",
      },
      {
        id: "4cb2d60b-62c2-46b3-99be-bdc56f171767",
        name: "Московский политехнический университет",
        link: "https://mospolytech.ru",
      },
      {
        id: "60c710f4-9adb-4951-8aac-8c7ec2383e71",
        name: "Всероссийская академия декоративного и прикладного искусства имени С.Г. Строганова",
        link: "http://www.stroganov.ru",
      },
      {
        id: "0a0bb3d8-c801-440e-8ebe-926a30abd270",
        name: 'Федеральное государственное бюджетное образовательное учреждение высшего образования "Санкт-Петербургский государственный университет"',
        link: "https://www.spbu.ru",
      },
    ],
  },
  copywriter: {
    id: "d8edcb97-2fea-4b0a-b72d-2a8bf69762f7",
    description:
      "Копирайтер - пишет рекламные тексты и контент, привлекая внимание аудитории и подчеркивая преимущества продуктов или услуг.",
    label: "Копирайтер",
    name: "copywriter",
    imgPath: "copyedit.webp",
    universities: [
      {
        id: "147fd763-032e-4b90-a5a0-55e418a09153",
        name: "Московский государственный университет (МГУ)",
        link: "https://www.msu.ru/",
      },
      {
        id: "75454801-30b3-42b1-abeb-3c2f516c8f86",
        name: "Национальный исследовательский университет «Высшая школа экономики» (ВШЭ)",
        link: "https://www.hse.ru/",
      },
      {
        id: "849e38d9-d6a0-4f02-a1cd-bb8ff3905038",
        name: "Московский политехнический университет (МГТУ)",
        link: "https://mospolytech.ru/",
      },
      {
        id: "82e22b2d-e04e-4152-8ddf-20fef17f3bbf",
        name: "Санкт-Петербургский государственный университет (СПбГУ)",
        link: "https://spbu.ru/",
      },
      {
        id: "7c818ed2-0659-4f3a-b1be-ce7516742827",
        name: "Московский институт «Первый Тинькофф» (МИТ)",
        link: "https://mipt.ru/",
      },
    ],
  },
  engineer: {
    id: "7cf334f4-289b-4fee-9772-2518c7ef7bbb",
    description:
      "Инженер - разрабатывает и внедряет технические решения в различных областях, от машиностроения до строительства.",
    label: "Инженер",
    name: "engineer",
    imgPath: "injener.webp",
    universities: [
      {
        id: "9167d4b2-fce5-40c2-b958-a5d1c5933b46",
        name: "МГТУ им. Баумана",
        link: "https://www.bmstu.ru",
      },
      {
        id: "4237f819-ee38-4426-949d-22ca89db5aa9",
        name: "Санкт-Петербургский политехнический университет",
        link: "https://www.spbstu.ru",
      },
      {
        id: "c756870a-fc3e-4110-9ee8-2b4688e8fbd4",
        name: "МЭИ",
        link: "https://www.mei.ru",
      },
      {
        id: "87ec34b3-cf1b-4065-ba61-c89ee4fefa99",
        name: "Казанский федеральный университет",
        link: "https://www.kpfu.ru",
      },
      {
        id: "0ae471c5-0044-4b46-884b-1a1c03d89e00",
        name: "Уральский федеральный университет",
        link: "https://urfu.ru",
      },
      {
        id: "e82e1211-7147-41ab-a6f4-08c020b46fcf",
        name: "МГУ",
        link: "https://www.msu.ru",
      },
      {
        id: "78ac8a9d-0d8b-4e46-a170-292782cfacfc",
        name: "Новосибирский университет",
        link: "https://www.nsu.ru",
      },
      {
        id: "fd6cc667-0c02-4511-b905-16c5f23b6cca",
        name: "Сибирский федеральный университет",
        link: "https://www.sfu-kras.ru",
      },
      {
        id: "b5a618d0-c129-4f3a-80e0-7609b25a673a",
        name: "Санкт-Петербургский университет путей сообщения",
        link: "https://www.pgups.ru",
      },
      {
        id: "c19f2a23-7829-4ae7-ab13-f48c549e462b",
        name: " Кубанский государственный университет",
        link: "https://www.kubsu.ru",
      },
    ],
  },
  programmer: {
    id: "78e0ca83-69fe-4418-8ae3-eaad17a44e03",
    description:
      "Программист - создает и тестирует программное обеспечение, обеспечивая функционирование компьютеров и приложений.",
    label: "Программист",
    name: "programmer",
    imgPath: "programmist.webp",
    universities: [
      {
        id: "9ad3ab84-f7dd-4a18-909f-27b7ff64c976",
        name: "Московский институт электроники и математики (МИЭМ) НИУ ВШЭ",
        link: "https://miem.hse.ru",
      },
      {
        id: "bc230405-c000-4df3-9d89-30c9b5f6e9b5",
        name: 'Национальный исследовательский университет "Высшая школа экономики" (НИУ ВШЭ) ',
        link: "https://www.hse.ru",
      },
      {
        id: "93b6d4b3-6076-4533-8094-8fa258dc9f23",
        name: "Московский государственный университет имени М. В. Ломоносова (МГУ)",
        link: "https://www.msu.ru",
      },
      {
        id: "82d330b4-bb75-4a3e-a59e-288421b2478e",
        name: "Санкт-Петербургский государственный университет (СПбГУ)",
        link: "https://www.spbu.ru",
      },
      {
        id: "acadb0a1-6af3-4eab-844a-a3ce3cd3bf2c",
        name: "Сибирский федеральный университет (СФУ)",
        link: "https://www.sfu-kras.ru",
      },
      {
        id: "59848122-fea1-445d-84d7-25ec5ac2f3d0",
        name: "Казанский (Приволжский) федеральный университет (КФУ)",
        link: "https://kpfu.ru",
      },
      {
        id: "8fa1aa6c-ffab-47b3-8f96-9a13cd238e4e",
        name: "Кубанский государственный университет (КубГУ)",
        link: "https://www.kubsu.ru",
      },
      {
        id: "07405aa8-2ce1-4627-b753-62254513d7e2",
        name: "Уфимский колледж информационных технологий",
        link: "https://ufacollege.ru",
      },
    ],
  },
  mechanicalTechnician: {
    id: "b508e8dc-82c9-4a8c-a145-ab6df936f926",
    description:
      "Техник-механик - обслуживает и ремонтирует механические устройства и системы, обеспечивая их надежную работу.",
    label: "Техник-механик",
    name: "mechanicalTechnician",
    imgPath: "t_mehanik.webp",
    universities: [
      {
        id: "0b1a6aec-abe5-4735-8e57-2006f9a04e96",
        name: "Московский государственный технический университет им. Н.Э. Баумана (МГТУ)",
        link: "https://www.bmstu.ru",
      },
      {
        id: "303e533b-5cc4-4e0a-b934-4a1918ac7801",
        name: "Санкт-Петербургский политехнический университет Петра Великого (СПБПУ)",
        link: "http://www.spbstu.ru",
      },
      {
        id: "8fd9f080-ead2-4e93-813d-465674a3ffc9",
        name: "Казанский национальный исследовательский технический университет им. А.Н. Туполева (КНИТУ-КАИ)",
        link: "https://www.kai.ru",
      },
      {
        id: "49a965c4-53a3-4f97-b3c5-cf5d70a0a25a",
        name: "Уральский федеральный университет им. первого Президента России Б.Н. Ельцина ( УрФУ)",
        link: "https://www.urfu.ru",
      },
      {
        id: "703cfd50-e94c-4556-949a-24f9501a46dd",
        name: 'Национальный исследовательский университет "Московская школа управления СКОЛКОВО"',
        link: "https://www.skolkovo.ru",
      },
      {
        id: "8d8d5412-6426-4fae-8431-551d1174f696",
        name: "Челябинский колледж техники и технологий",
        link: "http://www.seo-chelyabinsk.ru",
      },
      {
        id: "7589e7a4-8217-41d6-94bd-4c766db587c4",
        name: "Томский политехнический колледж",
        link: "http://tpc.tpu.ru",
      },
      {
        id: "b419aaa8-1281-491d-ba25-bda5baa9bec5",
        name: "Владимирский механико-технологический колледж",
        link: "http://www.vmtk.ru",
      },
    ],
  },
  electrician: {
    id: "dc00e638-711e-4e8a-80df-039e9284a6da",
    description:
      "Электрик - занимается установкой, ремонтом и обслуживанием электрических систем и оборудования.",
    label: "Электрик",
    name: "electrician",
    imgPath: "electrik.webp",
    universities: [
      {
        id: "5a56d003-445e-49c4-bc53-92cf1423d221",
        name: "Московский энергетический институт (МЭИ)",
        link: "https://www.mei.ru",
      },
      {
        id: "e04ade59-b8c6-4533-8911-6f2e0f0e5d51",
        name: "Санкт-Петербургский политехнический университет Петра Великого",
        link: "https://www.spbstu.ru",
      },
      {
        id: "edbdf07d-e53c-46bf-b9fd-77069ab1aba0",
        name: "Национальный исследовательский университет «МЭИ»",
        link: "https://www.mpei.ru",
      },
      {
        id: "bd517f03-e764-49c6-8ba0-275e9860d15b",
        name: "Уральский федеральный университет имени первого Президента России Б. Н. Ельцина",
        link: "https://www.urfu.ru",
      },
      {
        id: "60e0bfb5-5b91-4263-be2f-930341918f7c",
        name: "Казанский федеральный университет",
        link: "https://www.kfu.ru",
      },
      {
        id: "1132eb78-e4de-4f85-9314-16a19f675ecf",
        name: "Томский политехнический университет",
        link: "https://www.tpu.ru",
      },
      {
        id: "0328e0dd-1b00-4074-ab36-a41ec81ade5a",
        name: "Кубанский государственный университет",
        link: "https://www.kubsu.ru",
      },
      {
        id: "278faade-b6ef-4f87-94ec-ad7199babdcb",
        name: "Нижегородский государственный технический университет имени Р.Е. Алексеева",
        link: "https://www.nntu.ru",
      },
      {
        id: "4c075b24-e0db-4be9-8039-ad0231e625a2",
        name: "Сибирский федеральный университет",
        link: "https://www.sfu-kras.ru",
      },
      {
        id: "3cccf042-0cac-436b-a1d1-df2ff4bc5f1b",
        name: "Дальневосточный федеральный университет",
        link: "https://www.dvfu.ru",
      },
    ],
  },
  architect: {
    id: "47dee31c-2f2e-463b-b0fc-14895074ef02",
    description:
      "Архитектор - проектирует здания и сооружения, учитывая функциональность, безопасностью и эстетику.",
    label: "Архитектор",
    name: "architect",
    imgPath: "architector.webp",
    universities: [
      {
        id: "5da1ee05-f035-431d-bd86-a14cf5a9fc2d",
        name: "Московский архитектурный институт (МАДИ)",
        link: "http://www.madi.ru",
      },
      {
        id: "fce94b19-ca54-44f5-9f26-c8988a796500",
        name: "Санкт-Петербургский государственный университет архитектуры и гражданского строительства (СПбГАСУ)",
        link: "http://www.spbgasu.ru",
      },
      {
        id: "d1b39b1f-4056-4704-b86b-bb9b57d6ab89",
        name: 'Национальный исследовательский университет "Высшая школа экономики" (НИУ ВШЭ)',
        link: "http://www.hse.ru",
      },
      {
        id: "1ede3675-011a-4573-af6f-49ef66daf9ca",
        name: "Томский государственный университет",
        link: "http://www.tsu.ru",
      },
      {
        id: "97824963-6f51-4ce0-99b4-642a7867d4c4",
        name: "Уральский государственный архитектурнохудожественный университет (УГАХУ)",
        link: "http://www.ugaht.ru",
      },
      {
        id: "718d1085-3f94-451b-ac71-ac0e9d73855b",
        name: "Московский колледж архитектуры и строительства",
        link: "http://www.mcarch.ru",
      },
      {
        id: "b1e8b856-38ea-4132-b41d-120b90d76f83",
        name: "Санкт-Петербургский колледж строительной индустрии",
        link: "http://www.spbks.ru",
      },
      {
        id: "f4c5e0bf-4edb-4c3e-a4ad-244bcebce9ec",
        name: "Колледж архитектуры и дизайна «Архитектоника»",
        link: "http://www.architectonica.ru",
      },
      {
        id: "cc715009-0db3-4a9a-aa97-dc5dc2875be4",
        name: "Челябинский колледж строительства и архитектуры",
        link: "http://www.cksa74.ru",
      },
    ],
  },
  ecologist: {
    id: "7a58ff64-739b-4404-ace2-7c37f0d32e6e",
    description:
      "Эколог - исследует взаимодействие человека и природы, предлагает решения для охраны окружающей среды.",
    label: "Эколог",
    name: "ecologist",
    imgPath: "egolog.webp",
    universities: [
      {
        id: "defd935b-7098-4546-8e5a-16831cb68386",
        name: "Московский государственный технический университет имени Н.Э. Баумана (МГТУ)",
        link: "http://www.bmstu.ru",
      },
      {
        id: "c7e13121-8529-472f-9fe3-b24186d2f4d7",
        name: "Финансовый университет при Правительстве Российской Федерации (МФЮА)",
        link: "http://www.fa.ru",
      },
      {
        id: "1e58c67e-2af4-4c09-abf0-98aa107bd9c7",
        name: "Московский архитектурный колледж (МАК)",
        link: "http://www.mapk.ru",
      },
      {
        id: "314cb539-a3c7-460a-9e77-570407028ca6",
        name: "Колледж экологии и природопользования (КЭиП)",
        link: "http://www.ekologcollege.ru",
      },
      {
        id: "5dbafcd0-a34e-4ca0-b068-c11d5e3f85fc",
        name: "Санкт-Петербургский государственный университет (СПбГУ)",
        link: "http://www.spbu.ru",
      },
      {
        id: "bda29913-35cd-4d74-8af0-9f9211099116",
        name: "Томский политехнический университет (ТПУ)",
        link: "http://www.tpu.ru",
      },
      {
        id: "e39cc318-94ff-49a2-b3de-d2c8939db310",
        name: "Уральский федеральный университет (УрФУ)",
        link: "http://www.urfu.ru",
      },
      {
        id: "e940ced6-966c-4ecc-a1ae-38d43fce55e2",
        name: "Сибирский федеральный университет (СФУ)",
        link: "http://www.sfu-kras.ru",
      },
    ],
  },
  biologist: {
    id: "a69d41bc-eb70-481c-b4de-a0747f042f1b",
    description:
      "Биолог - изучает живые организмы и их взаимодействие с окружающей средой, исследуя различные аспекты жизни.",
    label: "Биолог",
    name: "biologist",
    imgPath: "byolog.webp",
    universities: [
      {
        id: "b416e42a-ee5e-4346-987b-f14843fb84a3",
        name: "Дальневосточный федеральный университет",
        link: "https://dvfu.ru",
      },
      {
        id: "f30346c9-24a5-48f7-8e0b-c72773c901a4",
        name: "Камчатский государственный университет",
        link: "http://www.ksu.ru",
      },
      {
        id: "3d942ee5-dbad-45ce-bffe-ed6fca9bdba0",
        name: "Московский государственный университет имени М.В. Ломоносова",
        link: "https://www.msu.ru",
      },
      {
        id: "afd57a06-8601-4dc9-98cd-a740b414acea",
        name: "Санкт-Петербургский государственный университет",
        link: "https://www.spbu.ru",
      },
      {
        id: "4c7d12cc-f23c-4b78-97a9-4fc4e4a93f35",
        name: "Новосибирский государственный университет",
        link: "https://www.nsu.ru",
      },
      {
        id: "05ed08e6-6a1e-4a30-9b24-abf6d3fbc211",
        name: "Уральский федеральный университет имени первого Президента России Б. Н. Ельцина",
        link: "https://urfu.ru",
      },
      {
        id: "9ea4303b-3be9-4aba-8645-652847bd75f1",
        name: "Казанский федеральный университет",
        link: "https://kpfu.ru",
      },
      {
        id: "43fd4435-bd8e-4174-bd4e-fffaf5f2a2c9",
        name: "Томский государственный университет",
        link: "https://www.tsu.ru",
      },
    ],
  },
  landscapeDesigner: {
    id: "10a38ac2-baae-43c0-ac0e-cb68dfdfc8ec",
    description:
      "Ландшафтный дизайнер - создает эстетически приятные и функциональные пространства на открытом воздухе, проектируя парки и сады.",
    label: "Ландшафтный дизайнер",
    name: "landscapeDesigner",
    imgPath: "landhaftic_desiner.webp",
    universities: [
      {
        id: "93f7bd3c-5b62-4882-98d1-cfd68cd03c42",
        name: "МГХПА им. С.Г. Строганова",
        link: "http://www.mgst.edu/",
      },
      {
        id: "92f7f931-df7f-4eda-8112-ef15c7325348",
        name: "Российский новый университет (РосНОУ)",
        link: "http://www.rsue.ru/",
      },
      {
        id: "0fc73a2a-94be-474a-8726-a4f9b18dcef6",
        name: "Международный Политехнический Колледж (МПК)",
        link: "http://mpk-moscow.ru/",
      },
      {
        id: "9a28ebe7-760d-4b9f-a7d4-05439ce3dea3",
        name: "Академия Труда и Социальных Отношений (АТиСО)",
        link: "http://www.atiso.ru/",
      },
      {
        id: "55254183-7100-40c1-aa50-76f734f74ed7",
        name: "Тульский государственный университет (ТулГУ)",
        link: "http://www.tstu.ru/",
      },
      {
        id: "a258bf9f-4994-44da-9d54-04adbc8ac791",
        name: "Международный Восточно-Европейский Колледж (МВЕК ДПО)",
        link: "http://www.mvek.ru/",
      },
      {
        id: "62c1924a-dc98-4271-aa14-0daefefa68f5",
        name: "Международный Открытый Колледж (МОК)",
        link: "http://moc.edu.ru/",
      },
      {
        id: "191da866-891f-4805-b4ea-76bb8f0ea98c",
        name: "Томский государственный университет систем управления и радиоэлектроники (ТУСУР)",
        link: "http://www.tusur.ru/",
      },
    ],
  },
  agronomist: {
    id: "6f00ccc2-cfb2-4992-a998-dff9c7fa5f4e",
    description:
      "Агроном - занимается наукой о сельском хозяйстве, оптимизируя процессы производства сельскохозяйственной продукции.",
    label: "Агроном",
    name: "agronomist",
    imgPath: "agronom.webp",
    universities: [
      {
        id: "eaf2a37d-fbdd-4e00-b6d2-9c244d405622",
        name: "Саратовский государственный аграрный университет им. Н. И. Вавилова",
        link: "http://sgaa.ru",
      },
      {
        id: "dacf421b-6d85-44a2-bc08-8ed48c7c8af9",
        name: "Российский государственный аграрный университет — Московская сельскохозяйственная академия им. К. А. Тимирязева",
        link: "http://www.tgau.ru",
      },
      {
        id: "8071aa43-533f-4aec-adbe-93eb3248647f",
        name: "Кубанский государственный аграрный университет",
        link: "http://www.kubagro.ru",
      },
      {
        id: "6e721c8f-8b58-41f2-9a70-c73540e00fae",
        name: "Тамбовский государственный технический университет",
        link: "http://www.tstu.ru",
      },
      {
        id: "777aeb5f-7771-4f47-bce9-876d376a63ac",
        name: "Уральский государственный аграрный университет",
        link: "http://www.uga.ru",
      },
      {
        id: "5d86f19c-7159-4eac-a745-17050338b5d8",
        name: "Воронежский государственный аграрный университет",
        link: "http://vgaus.ru",
      },
      {
        id: "ab027233-d21d-4403-970c-869ff473ee18",
        name: "Северо-Осетинский государственный университет им. К. Л. Хетагаурова",
        link: "http://www.soguas.ru",
      },
      {
        id: "6b50358f-8ffb-4324-a805-6cabe8f67b98",
        name: "Белгородский государственный аграрный университет",
        link: "http://www.bgau.ru",
      },
    ],
  },
  geographer: {
    id: "7c6b5fea-f386-4093-9e02-33bb88e02f27",
    description:
      "Географ - исследует земные явления и их взаимосвязи, изучая карты, климат и ресурсы планеты.",
    label: "Географ",
    name: "geographer",
    imgPath: "geograf.webp",
    universities: [
      {
        id: "69d36266-e7b1-4027-b6af-b907a21e0f0c",
        name: "Московский государственный университет имени М.В. Ломоносова",
        link: "http://www.msu.ru",
      },
      {
        id: "c45aeaa5-a649-4f34-ad0c-1ba6c6cb334e",
        name: "Санкт-Петербургский государственный университет",
        link: "http://www.spbu.ru",
      },
      {
        id: "d9f528a1-8c6f-4b4f-867a-6aa31de807c2",
        name: "Российский университет дружбы народов",
        link: "http://www.rudn.ru",
      },
      {
        id: "a9fb5411-9fe2-4fd0-83ba-e7946d999f47",
        name: "Уральский федеральный университет имени первого Президента России Б.Н. Ельцина",
        link: "https://www.urfu.ru",
      },
      {
        id: "ee44bd09-2eac-473a-87f8-eb6e2e556cea",
        name: "Сибирский федеральный университет",
        link: "https://www.sfkras.ru",
      },
      {
        id: "b3a8867e-4a29-40ef-b52c-51936fe7a9d6",
        name: "Томский государственный университет",
        link: "http://www.tsu.ru",
      },
      {
        id: "713051e1-0405-4a93-9578-3beea0ef2777",
        name: "Волгоградский государственный университет",
        link: "http://www.volsu.ru",
      },
      {
        id: "1d8e43f4-ae3c-4ea8-acb2-14ecbbc386f0",
        name: "Казанский федеральный университет",
        link: "https://kpfu.ru",
      },
      {
        id: "a6a68aa6-ffaf-4163-a45b-71ebe1ab79a8",
        name: "Дальневосточный федеральный университет",
        link: "http://www.dvfu.ru",
      },
    ],
  },
  artist: {
    id: "315a6ebe-5fdf-4b3e-866c-f8e9fbebf06f",
    description:
      "Художник - создает произведения искусства, выражая свои идеи и эмоции через живопись, скульптуру и другие формы.",
    label: "Художник",
    name: "artist",
    imgPath: "artist.webp",
    universities: [
      {
        id: "ea056443-0213-406f-a57b-1a06f5468b07",
        name: "Павловский техникум народных художественных промыслов",
        link: "https://example.com/ptnhpr",
      },
      {
        id: "4ec35fca-99ec-4447-9a1f-19e3890879f9",
        name: "Художественный колледж в Москве",
        link: "https://example.com/moscow-art-college",
      },
      {
        id: "f14e0c03-bb99-470e-9892-129fe35a580d",
        name: "Санкт-Петербургский художественный колледж",
        link: "https://example.com/spb-art-college",
      },
      {
        id: "2d7b7058-a275-41af-9ab2-e6c93a67a0a4",
        name: "Иркутский художественный колледж",
        link: "https://example.com/irkutsk-art-college",
      },
      {
        id: "41ad3b58-b4bb-407d-8441-6168c2ec6e44",
        name: "Калужский колледж искусств",
        link: "https://example.com/kaluga-art-college",
      },
    ],
  },
  musician: {
    id: "0e2badff-b9d5-421e-b195-29f04c03131e",
    description:
      "Музыкант - исполняет музыку, используя различные инструменты или голос, передавая чувства и настроения.",
    label: "Музыкант",
    name: "musician",
    imgPath: "music.webp",
    universities: [
      {
        id: "3d12e749-22e3-4ad7-b380-53690b5fc50b",
        name: "Государственный институт искусств имени И. О. Стравинского",
        link: "http://www.stravinsky.ru",
      },
      {
        id: "29f5a8e6-cba5-4489-bb51-f654dcdb3f86",
        name: "Российская академия музыки имени Гнесиных",
        link: "http://www.gnesin-academy.ru",
      },
      {
        id: "8791605a-0046-4154-880f-2f578fb34af2",
        name: "Санкт-Петербургская государственная консерватория имени Н. А. Римского-Корсакова",
        link: "http://www.rimsky-korsakov.ru",
      },
      {
        id: "2813e265-0606-4317-a7ad-fca555ec30df",
        name: "Московская государственная консерватория имени П. И. Чайковского",
        link: "http://www.mosccon.ru",
      },
      {
        id: "42b2f07d-8c23-4deb-bc59-60f4d6966f49",
        name: "Казанское государственное музыкальное училище",
        link: "http://www.kgmu.ru",
      },
      {
        id: "978f01e3-5969-4537-8509-eb34136c5273",
        name: "Нижегородская областная консерватория имени М. Глинки",
        link: "http://www.nogik.ru",
      },
      {
        id: "1ddbbcb2-fc4e-46b9-a9e9-0f2677bf1f41",
        name: "Биробиджанский колледж культуры и искусств",
        link: "http://www.bircollege.ru",
      },
      {
        id: "54585cda-fd61-44d0-9aa4-6a81dbcaef42",
        name: "Нижегородский Губернский колледж",
        link: "http://www.ngubcollege.ru",
      },
    ],
  },
  director: {
    id: "c548ade3-5b89-40ed-9afd-1d14333ce78e",
    description:
      "Режиссёр - отвечает за постановку театральных или кинематографических работ, координируя актеров и технический персонал.",
    label: "Режиссёр",
    name: "director",
    imgPath: "video_director.webp",
    universities: [
      {
        id: "f4f63389-ede5-4221-aa4b-36e196386e32",
        name: "Московский государственный университет культуры и искусств",
        link: "http://www.msu.ru/",
      },
      {
        id: "cf2d8494-e0bd-4fa9-a223-912b185d65ba",
        name: "Всероссийский государственный университет кинематографии имени С.А. Герасимова",
        link: "http://www.vgik.info/",
      },
      {
        id: "71e1261b-7e1e-468f-a1d7-f63c3da90808",
        name: "Санкт-Петербургский государственный институт кино и телевидения",
        link: "http://www.spbgik.ru/",
      },
      {
        id: "eeeedc1a-cbf1-45ac-991e-6766af6a2261",
        name: "Российский государственный университет имени А.Н. Островского",
        link: "http://www.rguk.ru/",
      },
      {
        id: "f8e8a177-3fcf-4029-a354-2e1f3881cebd",
        name: "Сибирский государственный университет кинематографии",
        link: "http://www.sguki.ru/",
      },
      {
        id: "32183984-3e90-4427-8e62-77e2d02d1b14",
        name: "Нижегородский государственный университет искусства и дизайна",
        link: "http://www.nguki.ru/",
      },
      {
        id: "b6cda180-8d26-4d5f-b8ca-cd0fda7371e3",
        name: "Уфимский государственный университет",
        link: "http://www.ugatu.su/",
      },
    ],
  },
  sculptor: {
    id: "26fbaec1-258d-47ed-b982-3c199330256f",
    description:
      "Скульптор - создает трехмерные произведения искусства из различных материалов, таких как камень, металл или глина.",
    label: "Скульптор",
    name: "sculptor",
    imgPath: "sculptor.webp",
    universities: [
      {
        id: "a72bc633-4100-4eaa-800f-4e824674be14",
        name: "Южный федеральный университет (ЮФУ)",
        link: "http://www.sfu-kuban.ru",
      },
      {
        id: "ae4df84b-be42-413a-8e13-ef6e721fa896",
        name: "Гжельский государственный университет (ГГУ)",
        link: "http://www.ggu.edu.ru",
      },
      {
        id: "757abf9a-5319-44dc-a0f0-5b8bf26c76c5",
        name: "Санкт-Петербургская государственная академия художеств имени Ильи Репина",
        link: "http://www.rah.ru",
      },
      {
        id: "209df8fd-4a27-41d8-aa74-cd6d54734f51",
        name: "Московский государственный академический художественный институт имени В.И. Сурикова",
        link: "http://www.rah.ru/surikov",
      },
      {
        id: "52d20689-b8e2-483e-af4f-96052deb79ca",
        name: "Российская академия художеств",
        link: "http://www.rah.ru",
      },
    ],
  },
  dancer: {
    id: "a76df7de-7057-45f3-827d-915957c2ae07",
    description:
      "Танцор - исполняет танцевальные номера, передавая эмоции и истории через движения тела под ритм музыки.",
    label: "Танцор",
    name: "dancer",
    imgPath: "dancer.webp",
    universities: [
      {
        id: "61a006f0-3381-4998-8022-a31e4101d45a",
        name: "Московское хореографическое училище при Московском государственном академическом театре танца «Гжель»",
        link: "http://www.gzh.fgk.ru/",
      },
      {
        id: "64e3774f-6d70-4922-bdf7-9abc15bc2c5e",
        name: "Государственный университет культуры и искусства",
        link: "http://www.guki.ru/",
      },
      {
        id: "e0675b19-ede5-4475-84be-b3b14e631e8c",
        name: "Санкт-Петербургская государственная академия театрального искусства",
        link: "http://www.gati.spb.ru/",
      },
      {
        id: "574bd377-e441-49bb-9651-bc593d6b8f09",
        name: "Тихоокеанский государственный университет",
        link: "http://www.psu.ru/",
      },
      {
        id: "55fc2539-c2f8-4d6b-95fb-6122bd5887a9",
        name: "Сургутский колледж культуры",
        link: "http://www.surgutkult.ru/",
      },
    ],
  },
};
