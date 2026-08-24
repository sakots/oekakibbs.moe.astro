export type Work = {
  name: string;
  url: string;
  description: string;
};

// 作ったものを追加する際は、この配列に name / url / description を入力します。
export const works: Work[] = [
  {
    name: 'noReita',
    url: 'https://github.com/sakots/noReita',
    description: 'ブラウザで使えるお絵かき掲示板スクリプトです。',
  },
	{
    name: 'gounter',
    url: 'https://github.com/sakots/gounter',
    description: 'アクセスカウンター（令和最新版）です。',
  },
	{
    name: 'bullneo',
    url: 'https://github.com/sakots/bullneo',
    description: 'ふたばにneoでレスするやつです。',
  },
	{
    name: 'appneo',
    url: 'https://github.com/sakots/appneo',
    description: 'ふたばのお絵かきでneoの最新版を使うやつです。',
  },
	{
    name: '5chneo',
    url: 'https://github.com/sakots/5chneo',
    description: '5chのお絵かきでneoの最新版を使うやつです。',
  },
	{
    name: 'missneo',
    url: 'https://github.com/sakots/missneo',
    description: 'misskeyでneoのお絵かきを使えるようにするやつです。',
  },
];
