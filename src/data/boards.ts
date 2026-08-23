export type Board = {
  name: string;
  description: string;
  href: string;
  /** 掲示板のバナー画像URLまたはサムネイル生成URL */
  banner: string;
};

// 掲示板を追加する際は、この配列に name / description / href / banner を追加してください。
// href と banner にはアップロード済み掲示板へのパス、または完全なURLを指定できます。
export const boards: Board[] = [
  {
    name: 'サンプル&交流',
    description: 'イラストを投稿して、気軽に交流できるメインの掲示板です。',
    href: '/bbs/noreita/',
    banner: 'https://oekakibbs.moe/bbs/noreita/noreita_newimg.php',
  },
  {
    name: 'SQL避難所',
    description: 'データベース移行時などに利用する掲示板です。',
    href: '/bbs/eurasia/',
    banner: 'https://oekakibbs.moe/bbs/eurasia/noreita_newimg.php',
  },
  {
    name: 'サポート',
    description: 'お絵かき掲示板「noReita」のサポート用掲示板です。',
    href: '/bbs/support/',
    banner: 'https://oekakibbs.moe/bbs/support/noreita_newimg.php',
  },
  {
    name: '日記帳',
    description: 'たまにかく。',
    href: '/bbs/diary/',
    banner: 'https://oekakibbs.moe/bbs/diary/noreita_newimg.php',
  },
];
