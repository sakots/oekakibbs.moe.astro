export type Counter = {
	label: string;
	image: string;
	alt: string;
};

// サーバー側のカウンター画像。表示名や画像パスを変更する場合はここを編集します。
export const counters: Counter[] = [
	{ label: 'total', image: 'https://oekakibbs.moe/counter/count.php', alt: '累計アクセス数' },
	{ label: 'today', image: 'https://oekakibbs.moe/counter/today.php', alt: '今日のアクセス数' },
	{ label: 'yesterday', image: 'https://oekakibbs.moe/counter/yesterday.php', alt: '昨日のアクセス数' },
];
