export interface GalleryPhoto {
  /** public/images に置いた画像パス */
  src: string
  /** 写真の説明（プレースホルダーのラベルにもなる） */
  caption: string
}

// 趣味・ライフスタイルのスナップショット。
// public/images に画像を置いて src を合わせ、caption を編集してください。
// 枚数は増減OK（グリッドが自動調整されます）。
export const gallery: GalleryPhoto[] = [
  { src: '/images/snap-running.jpg', caption: 'ランニング' },
  { src: '/images/snap-fashion.jpg', caption: '衣服カスタマイズ' },
  { src: '/images/snap-ubc.jpg', caption: 'UBC留学' },
  { src: '/images/snap-3dprint.jpg', caption: '3Dプリント' },
]
