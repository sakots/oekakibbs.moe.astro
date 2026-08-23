export type Link = {
  /** バナー画像のURLまたは public ディレクトリからのパス */
  banner: string;
  /** リンク先URL */
  url: string;
  /** サイト管理者名 */
  admin: string;
  /** サイトの紹介文 */
  description: string;
};

// リンクを追加する際は、以下の形で配列に入力してください。
// {
//   banner: '/banners/example.png',
//   url: 'https://example.com/',
//   admin: '管理者名',
//   description: 'サイトの説明文です。',
// },
export const links: Link[] = [
  {
    banner: 'https://oekakibbs.moe/img/bnr_hanoch20260819.png',
    url: 'https://hano-channel.com/',
    admin: 'はのきち様',
    description: '絵を描いたりゲーム作ったりしておられる。',
  },
];
