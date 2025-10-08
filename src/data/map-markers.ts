export type MarkerType = 'boss' | 'mob'

export type MapMarker = {
  id: string
  mapId: string
  type: MarkerType
  name: string
  // posisi relatif (0..1) dari kiri-atas gambar map
  x: number
  y: number
  icon?: string // path optional ke icon khusus, contoh: '/icons/boss.png'
  note?: string
}

export const mapMarkers: MapMarker[] = [
  // Contoh untuk Del Lagos (dummy posisi)
  {
    id: 'del-mob-1',
    mapId: 'del-lagos',
    type: 'mob',
    name: 'Undead Scout',
    x: 0.35,
    y: 0.55,
  },
  {
    id: 'del-mob-2',
    mapId: 'del-lagos',
    type: 'mob',
    name: 'Ghoul',
    x: 0.60,
    y: 0.68,
  },
  // Input dari user: Elizabeth Level 15
  {
    id: 'del-lagos-marker-1759905025474',
    mapId: 'del-lagos',
    type: 'boss',
    name: 'Elizabeth (Lv.15)',
    x: 0.5079,
    y: 0.3664,
    // icon: '/icons/boss.png',
    // note: 'Tambahkan note jika perlu'
  },
  // Input dari user: Altamir Level 32 (Via Marea)
  {
    id: 'via-marea-marker-1759915433550',
    mapId: 'via-marea',
    type: 'boss',
    name: 'Altamir (Lv.32)',
    x: 0.5752,
    y: 0.1735,
    // icon: '/icons/boss/altamir-lv-32.png', // opsional; auto-load via slug
  },
  // Input dari user: Elder Setid Level 32 (Via Marea)
  {
    id: 'via-marea-marker-1759915641891',
    mapId: 'via-marea',
    type: 'boss',
    name: 'Elder Setid (Lv.32)',
    x: 0.7955,
    y: 0.7527,
    // icon: '/icons/boss/elder-setid-lv-32.png', // opsional; auto-load via slug
  },
  // Input dari user: Orc Lord Level 49 (Averaury)
  {
    id: 'averaury-marker-1759915780263',
    mapId: 'averaury',
    type: 'boss',
    name: 'Orc Lord (Lv.49)',
    x: 0.3461,
    y: 0.1831,
    // icon: '/icons/boss/orc-lord-lv-49.png', // opsional; auto-load via slug
  },
  // Input dari user: Gro, Knight Level 53 (Averaury)
  {
    id: 'averaury-marker-1759915841577',
    mapId: 'averaury',
    type: 'boss',
    name: 'Grom Knight (Lv.53)',
    x: 0.8043,
    y: 0.4221,
    // icon: '/icons/boss/grom-knight-lv-53.png', // opsional; auto-load via slug
  },
  // Input dari user: Krik Level 59 (Morissen)
  {
    id: 'morissen-marker-1759916813082',
    mapId: 'morissen',
    type: 'boss',
    name: 'Krik (Lv.59)',
    x: 0.4063,
    y: 0.1589,
    // icon: '/icons/boss/krik-lv-59.png', // opsional; auto-load via slug
  },
  // Input dari user: Dominate Level 65 (Morissen)
  {
    id: 'morissen-marker-1759916891191',
    mapId: 'morissen',
    type: 'boss',
    name: 'Dominate (Lv.65)',
    x: 0.7786,
    y: 0.7986,
    // icon: '/icons/boss/dominate-lv-65.png', // opsional; auto-load via slug
  },
  // Input dari user: Streamrigal Level 78 (Gaizen)
  {
    id: 'gaizen-marker-1759917228467',
    mapId: 'gaizen',
    type: 'boss',
    name: 'Streamrigal (Lv.78)',
    x: 0.3767,
    y: 0.2449,
    // icon: '/icons/boss/streamrigal-lv-78.png', // opsional; auto-load via slug
  },
  // Input dari user: Raus Level 81 (Gaizen)
  {
    id: 'gaizen-marker-1759917268014',
    mapId: 'gaizen',
    type: 'boss',
    name: 'Raus (Lv.81)',
    x: 0.347,
    y: 0.7524,
    // icon: '/icons/boss/raus-lv-81.png', // opsional; auto-load via slug
  },
  // Input dari user: Schitai Chieftain Level 94 (East Bahran Island)
  {
    id: 'east-bahran-island-marker-1759917569113',
    mapId: 'east-bahran-island',
    type: 'boss',
    name: 'Schitai Chieftain (Lv.94)',
    x: 0.5044,
    y: 0.2189,
    // icon: '/icons/boss/schitai-chieftain-lv-94.png', // opsional; auto-load via slug
  },
  // Input dari user: Kraut del lagos Level 98 (East Bahran Island)
  {
    id: 'east-bahran-island-marker-1759917871270',
    mapId: 'east-bahran-island',
    type: 'boss',
    name: 'Kraut del lagos (Lv.98)',
    x: 0.681,
    y: 0.2804,
    // icon: '/icons/boss/kraut-del-lagos-lv-98.png', // opsional; auto-load via slug
  },
]
