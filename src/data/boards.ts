export type Board = {
	name: string;
	description: string;
	href: string;
};

// 掲示板を追加する際は、この配列に name / description / href を追加してください。
// href にはアップロード済み掲示板へのパス、または完全なURLを指定できます。
export const boards: Board[] = [
	{
		name: 'お絵かき掲示板',
		description: 'イラストを投稿して、気軽に交流できるメインの掲示板です。',
		href: '/bbs/',
	},
	{
		name: 'らくがき掲示板',
		description: '思いついたときにさっと描ける、気軽ならくがき用の掲示板です。',
		href: '/rakugaki/',
	},
	{
		name: 'しぃペインター掲示板',
		description: 'しぃペインターで描いた作品を投稿できる掲示板です。',
		href: '/shi-painter/',
	},
];
