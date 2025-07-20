// Base English translations (used as a fallback for incomplete languages)
const en = {
  // Navigation
  "nav.home": "Home",
  "nav.blog": "Blog",
  "nav.privacy": "Privacy",
  "nav.login": "Login",
  "nav.games": "Games",

  // Hero
  "hero.featured": "Featured Game",
  "hero.title": "CBKylaGame",
  "hero.subtitle": "Epic Adventure",
  "hero.description":
    "Dive into a futuristic world where technology meets adventure. Battle through neon-lit cities, upgrade your cyber abilities, and become the ultimate digital warrior in CBKylaGame.",
  "hero.playNow": "Play Now",
  "hero.download": "Download",
  "hero.players": "Players",
  "hero.rating": "Rating",
  "hero.free": "Free",
  "hero.toPlay": "To Play",
  "hero.previewGame": "Preview Game",

  // Game Section
  "game.readyToPlay": "Ready to",
  "game.play": "Play?",
  "game.description": "Jump into the action right now. No downloads required - play directly in your browser!",
  "game.level": "Level 1",
  "game.loading": "Loading Game...",
  "game.initializing": "Initializing cyber systems",
  "game.controls.move": "Use WASD to move",
  "game.controls.jump": "Space to jump",
  "game.controls.aim": "Mouse to aim",
  "game.score": "Score",
  "game.liveStats": "Live Stats",
  "game.playersOnline": "Players Online:",
  "game.yourBest": "Your Best:",
  "game.globalRecord": "Global Record:",

  // Game specific
  "game.dominoDuel": "Domino Duel",
  "game.dominoDescription":
    "Challenge players worldwide in this strategic domino game. Match tiles, plan your moves, and dominate the board!",
  "game.basketballLegends": "Basketball Legends 2020",
  "game.basketballDescription":
    "Play as legendary basketball players in this exciting sports game. Shoot hoops, perform amazing dunks, and compete in thrilling matches!",
  "game.2048": "2048",
  "game.2048Description":
    "The classic number puzzle game! Slide tiles to combine numbers and reach the 2048 tile. Simple to learn but challenging to master!",

  // FAQ
  "faq.title": "Frequently Asked",
  "faq.questions": "Questions",
  "faq.subtitle": "Everything you need to know about CBKylaGame",
  "faq.stillQuestions": "Still have questions?",
  "faq.contactSupport": "Contact Support",
  "faq.readBlog": "Read Our Blog",

  // FAQ Questions
  "faq.q1": "Is CBKylaGame free to play?",
  "faq.a1":
    "Yes! CBKylaGame is completely free to play. You can enjoy the full gaming experience without any upfront costs. Optional premium features are available for enhanced gameplay.",
  "faq.q2": "What are the system requirements?",
  "faq.a2":
    "CBKylaGame runs directly in your web browser, so you only need a modern browser like Chrome, Firefox, Safari, or Edge. No downloads or installations required!",
  "faq.q3": "Can I play on mobile devices?",
  "faq.a3":
    "CBKylaGame is optimized for both desktop and mobile devices. You can enjoy the same great experience on your smartphone or tablet.",
  "faq.q4": "How do I save my progress?",
  "faq.a4":
    "Your game progress is automatically saved to your account. Simply create a free account or log in to ensure your achievements and progress are preserved across sessions.",
  "faq.q5": "Are there multiplayer features?",
  "faq.a5":
    "Yes! CBKylaGame features both single-player campaigns and multiplayer modes where you can team up with friends or compete against other players worldwide.",
  "faq.q6": "How often is the game updated?",
  "faq.a6":
    "We regularly update CBKylaGame with new content, features, and improvements. Major updates are released monthly, with smaller patches and fixes deployed as needed.",

  // Footer
  "footer.description":
    "The ultimate cyberpunk gaming experience. Dive into a world where technology meets adventure with CBKylaGame.",
  "footer.game": "Game",
  "footer.playNow": "Play Now",
  "footer.leaderboard": "Leaderboard",
  "footer.achievements": "Achievements",
  "footer.gameUpdates": "Game Updates",
  "footer.community": "Community",
  "footer.blog": "Blog",
  "footer.forums": "Forums",
  "footer.events": "Events",
  "footer.tournaments": "Tournaments",
  "footer.support": "Support",
  "footer.contact": "Contact",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.cookies": "Cookies",
  "footer.rights": "All rights reserved.",
} as const

import type { LanguageCode } from "./languages"

export const translations: Record<LanguageCode, Record<string, string>> = {
  en,
  "zh-CN": {
    // Navigation
    "nav.home": "首页",
    "nav.blog": "博客",
    "nav.privacy": "隐私",
    "nav.login": "登录",
    "nav.games": "游戏",

    // Hero
    "hero.featured": "精选游戏",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "史诗冒险",
    "hero.description":
      "潜入科技与冒险相遇的未来世界。在霓虹闪烁的城市中战斗，升级你的网络能力，成为CBKylaGame中的终极数字战士。",
    "hero.playNow": "立即游戏",
    "hero.download": "下载",
    "hero.players": "玩家",
    "hero.rating": "评分",
    "hero.free": "免费",
    "hero.toPlay": "游戏",
    "hero.previewGame": "预览游戏",

    // Game Section
    "game.readyToPlay": "准备好",
    "game.play": "游戏了吗？",
    "game.description": "立即投入行动。无需下载 - 直接在浏览器中游戏！",
    "game.level": "第1关",
    "game.loading": "游戏加载中...",
    "game.initializing": "初始化网络系统",
    "game.controls.move": "使用WASD移动",
    "game.controls.jump": "空格键跳跃",
    "game.controls.aim": "鼠标瞄准",
    "game.score": "得分",
    "game.liveStats": "实时统计",
    "game.playersOnline": "在线玩家：",
    "game.yourBest": "你的最佳：",
    "game.globalRecord": "全球记录：",

    // Game specific
    "game.dominoDuel": "多米诺对决",
    "game.dominoDescription": "在这个策略性多米诺游戏中挑战全世界的玩家。匹配牌块，规划你的行动，统治棋盘！",
    "game.basketballLegends": "篮球传奇2020",
    "game.basketballDescription":
      "在这个激动人心的体育游戏中扮演传奇篮球运动员。投篮得分，表演惊人扣篮，并在激烈的比赛中竞争！",
    "game.2048": "2048",
    "game.2048Description": "经典数字拼图游戏！滑动方块合并数字，达到2048方块。简单易学但极具挑战性！",

    // FAQ
    "faq.title": "常见",
    "faq.questions": "问题",
    "faq.subtitle": "关于CBKylaGame你需要知道的一切",
    "faq.stillQuestions": "还有问题？",
    "faq.contactSupport": "联系支持",
    "faq.readBlog": "阅读博客",

    // FAQ Questions
    "faq.q1": "CBKylaGame是免费游戏吗？",
    "faq.a1":
      "是的！CBKylaGame完全免费游戏。你可以享受完整的游戏体验而无需任何前期费用。可选的高级功能可增强游戏体验。",
    "faq.q2": "系统要求是什么？",
    "faq.a2":
      "CBKylaGame直接在网页浏览器中运行，所以你只需要Chrome、Firefox、Safari或Edge等现代浏览器。无需下载或安装！",
    "faq.q3": "可以在移动设备上游戏吗？",
    "faq.a3": "CBKylaGame针对桌面和移动设备进行了优化。你可以在智能手机或平板电脑上享受同样出色的体验。",
    "faq.q4": "如何保存游戏进度？",
    "faq.a4": "你的游戏进度会自动保存到账户中。只需创建免费账户或登录，确保你的成就和进度在各个会话中得到保留。",
    "faq.q5": "有多人游戏功能吗？",
    "faq.a5": "是的！CBKylaGame具有单人战役和多人模式，你可以与朋友组队或与全世界的其他玩家竞争。",
    "faq.q6": "游戏多久更新一次？",
    "faq.a6": "我们定期更新CBKylaGame，添加新内容、功能和改进。主要更新每月发布，较小的补丁和修复根据需要部署。",

    // Footer
    "footer.description": "终极赛博朋克游戏体验。与CBKylaGame一起潜入科技与冒险相遇的世界。",
    "footer.game": "游戏",
    "footer.playNow": "立即游戏",
    "footer.leaderboard": "排行榜",
    "footer.achievements": "成就",
    "footer.gameUpdates": "游戏更新",
    "footer.community": "社区",
    "footer.blog": "博客",
    "footer.forums": "论坛",
    "footer.events": "活动",
    "footer.tournaments": "锦标赛",
    "footer.support": "支持",
    "footer.contact": "联系",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.cookies": "Cookie",
    "footer.rights": "版权所有。",
  },

  "zh-TW": {
    // Navigation
    "nav.home": "首頁",
    "nav.blog": "部落格",
    "nav.privacy": "隱私",
    "nav.login": "登入",
    "nav.games": "遊戲",

    // Hero
    "hero.featured": "精選遊戲",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "史詩冒險",
    "hero.description":
      "潛入科技與冒險相遇的未來世界。在霓虹閃爍的城市中戰鬥，升級你的網路能力，成為CBKylaGame中的終極數位戰士。",
    "hero.playNow": "立即遊戲",
    "hero.download": "下載",
    "hero.players": "玩家",
    "hero.rating": "評分",
    "hero.free": "免費",
    "hero.toPlay": "遊戲",
    "hero.previewGame": "預覽遊戲",

    // Game Section
    "game.readyToPlay": "準備好",
    "game.play": "遊戲了嗎？",
    "game.description": "立即投入行動。無需下載 - 直接在瀏覽器中遊戲！",
    "game.level": "第1關",
    "game.loading": "遊戲載入中...",
    "game.initializing": "初始化網路系統",
    "game.controls.move": "使用WASD移動",
    "game.controls.jump": "空白鍵跳躍",
    "game.controls.aim": "滑鼠瞄準",
    "game.score": "得分",
    "game.liveStats": "即時統計",
    "game.playersOnline": "線上玩家：",
    "game.yourBest": "你的最佳：",
    "game.globalRecord": "全球記錄：",

    // Game specific
    "game.dominoDuel": "多米諾對決",
    "game.dominoDescription": "在這個策略性多米諾遊戲中挑戰全世界的玩家。匹配牌塊，規劃你的行動，統治棋盤！",
    "game.basketballLegends": "籃球傳奇2020",
    "game.basketballDescription":
      "在這個激動人心的體育遊戲中扮演傳奇籃球運動員。投籃得分，表演驚人灌籃，並在激烈的比賽中競爭！",
    "game.2048": "2048",
    "game.2048Description": "經典數字拼圖遊戲！滑動方塊合併數字，達到2048方塊。簡單易學但極具挑戰性！",

    // FAQ
    "faq.title": "常見",
    "faq.questions": "問題",
    "faq.subtitle": "關於CBKylaGame你需要知道的一切",
    "faq.stillQuestions": "還有問題？",
    "faq.contactSupport": "聯絡支援",
    "faq.readBlog": "閱讀部落格",

    // FAQ Questions
    "faq.q1": "CBKylaGame是免費遊戲嗎？",
    "faq.a1":
      "是的！CBKylaGame完全免費遊戲。你可以享受完整的遊戲體驗而無需任何前期費用。可選的進階功能可增強遊戲體驗。",
    "faq.q2": "系統需求是什麼？",
    "faq.a2":
      "CBKylaGame直接在網頁瀏覽器中執行，所以你只需要Chrome、Firefox、Safari或Edge等現代瀏覽器。無需下載或安裝！",
    "faq.q3": "可以在行動裝置上遊戲嗎？",
    "faq.a3": "CBKylaGame針對桌面和行動裝置進行了最佳化。你可以在智慧型手機或平板電腦上享受同樣出色的體驗。",
    "faq.q4": "如何儲存遊戲進度？",
    "faq.a4": "你的遊戲進度會自動儲存到帳戶中。只需建立免費帳戶或登入，確保你的成就和進度在各個會話中得到保留。",
    "faq.q5": "有多人遊戲功能嗎？",
    "faq.a5": "是的！CBKylaGame具有單人戰役和多人模式，你可以與朋友組隊或與全世界的其他玩家競爭。",
    "faq.q6": "遊戲多久更新一次？",
    "faq.a6": "我們定期更新CBKylaGame，新增新內容、功能和改進。主要更新每月發布，較小的修補程式和修復根據需要部署。",

    // Footer
    "footer.description": "終極賽博龐克遊戲體驗。與CBKylaGame一起潛入科技與冒險相遇的世界。",
    "footer.game": "遊戲",
    "footer.playNow": "立即遊戲",
    "footer.leaderboard": "排行榜",
    "footer.achievements": "成就",
    "footer.gameUpdates": "遊戲更新",
    "footer.community": "社群",
    "footer.blog": "部落格",
    "footer.forums": "論壇",
    "footer.events": "活動",
    "footer.tournaments": "錦標賽",
    "footer.support": "支援",
    "footer.contact": "聯絡",
    "footer.privacy": "隱私政策",
    "footer.terms": "服務條款",
    "footer.cookies": "Cookie",
    "footer.rights": "版權所有。",
  },

  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.blog": "ブログ",
    "nav.privacy": "プライバシー",
    "nav.login": "ログイン",
    "nav.games": "ゲーム",

    // Hero
    "hero.featured": "注目のゲーム",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "エピックアドベンチャー",
    "hero.description":
      "テクノロジーと冒険が出会う未来の世界に飛び込もう。ネオンに照らされた都市で戦い、サイバー能力をアップグレードし、CBKylaGameで究極のデジタル戦士になろう。",
    "hero.playNow": "今すぐプレイ",
    "hero.download": "ダウンロード",
    "hero.players": "プレイヤー",
    "hero.rating": "評価",
    "hero.free": "無料",
    "hero.toPlay": "プレイ",
    "hero.previewGame": "ゲームプレビュー",

    // Game Section
    "game.readyToPlay": "プレイの",
    "game.play": "準備はできましたか？",
    "game.description": "今すぐアクションに参加しよう。ダウンロード不要 - ブラウザで直接プレイ！",
    "game.level": "レベル1",
    "game.loading": "ゲーム読み込み中...",
    "game.initializing": "サイバーシステム初期化中",
    "game.controls.move": "WASDで移動",
    "game.controls.jump": "スペースでジャンプ",
    "game.controls.aim": "マウスで照準",
    "game.score": "スコア",
    "game.liveStats": "ライブ統計",
    "game.playersOnline": "オンラインプレイヤー：",
    "game.yourBest": "あなたのベスト：",
    "game.globalRecord": "グローバル記録：",

    // FAQ
    "faq.title": "よくある",
    "faq.questions": "質問",
    "faq.subtitle": "CBKylaGameについて知っておくべきすべて",
    "faq.stillQuestions": "まだ質問がありますか？",
    "faq.contactSupport": "サポートに連絡",
    "faq.readBlog": "ブログを読む",

    // Game specific
    "game.dominoDuel": "ドミノ対決",
    "game.dominoDescription":
      "この戦略的なドミノゲームで世界中のプレイヤーに挑戦しましょう。タイルをマッチさせ、動きを計画し、ボードを支配しましょう！",
    "game.basketballLegends": "バスケットボールレジェンド2020",
    "game.basketballDescription":
      "このエキサイティングなスポーツゲームで伝説的なバスケットボール選手としてプレイしましょう。フープをシュートし、素晴らしいダンクを披露し、スリリングな試合で競い合いましょう！",
    "game.2048": "2048",
    "game.2048Description":
      "クラシックな数字パズルゲーム！タイルをスライドして数字を組み合わせ、2048タイルに到達しましょう。学ぶのは簡単ですが、マスターするのは困難です！",

    // FAQ Questions
    "faq.q1": "CBKylaGameは無料でプレイできますか？",
    "faq.a1":
      "はい！CBKylaGameは完全に無料でプレイできます。前払い費用なしで完全なゲーム体験を楽しめます。ゲームプレイを向上させるオプションのプレミアム機能も利用できます。",
    "faq.q2": "システム要件は何ですか？",
    "faq.a2":
      "CBKylaGameはWebブラウザで直接実行されるため、Chrome、Firefox、Safari、Edgeなどの最新ブラウザがあれば十分です。ダウンロードやインストールは不要です！",
    "faq.q3": "モバイルデバイスでプレイできますか？",
    "faq.a3":
      "CBKylaGameはデスクトップとモバイルデバイスの両方に最適化されています。スマートフォンやタブレットでも同じ素晴らしい体験を楽しめます。",
    "faq.q4": "進行状況はどのように保存されますか？",
    "faq.a4":
      "ゲームの進行状況はアカウントに自動的に保存されます。無料アカウントを作成するかログインするだけで、成果と進行状況がセッション間で保持されます。",
    "faq.q5": "マルチプレイヤー機能はありますか？",
    "faq.a5":
      "はい！CBKylaGameにはシングルプレイヤーキャンペーンとマルチプレイヤーモードの両方があり、友達とチームを組んだり、世界中の他のプレイヤーと競争したりできます。",
    "faq.q6": "ゲームはどのくらいの頻度で更新されますか？",
    "faq.a6":
      "CBKylaGameは新しいコンテンツ、機能、改善を定期的に更新しています。主要な更新は毎月リリースされ、小さなパッチと修正は必要に応じて展開されます。",

    // Footer
    "footer.description": "究極のサイバーパンクゲーム体験。CBKylaGameでテクノロジーと冒険が出会う世界に飛び込もう。",
    "footer.game": "ゲーム",
    "footer.playNow": "今すぐプレイ",
    "footer.leaderboard": "リーダーボード",
    "footer.achievements": "実績",
    "footer.gameUpdates": "ゲーム更新",
    "footer.community": "コミュニティ",
    "footer.blog": "ブログ",
    "footer.forums": "フォーラム",
    "footer.events": "イベント",
    "footer.tournaments": "トーナメント",
    "footer.support": "サポート",
    "footer.contact": "連絡先",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.cookies": "クッキー",
    "footer.rights": "全著作権所有。",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.blog": "Blog",
    "nav.privacy": "Confidentialité",
    "nav.login": "Connexion",
    "nav.games": "Jeux",

    // Hero
    "hero.featured": "Jeu en vedette",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "Aventure épique",
    "hero.description":
      "Plongez dans un monde futuriste où la technologie rencontre l'aventure. Combattez dans des villes éclairées au néon, améliorez vos capacités cyber et devenez le guerrier numérique ultime dans CBKylaGame.",
    "hero.playNow": "Jouer maintenant",
    "hero.download": "Télécharger",
    "hero.players": "Joueurs",
    "hero.rating": "Note",
    "hero.free": "Gratuit",
    "hero.toPlay": "À jouer",
    "hero.previewGame": "Aperçu du jeu",

    // Game Section
    "game.readyToPlay": "Prêt à",
    "game.play": "jouer ?",
    "game.description":
      "Lancez-vous dans l'action dès maintenant. Aucun téléchargement requis - jouez directement dans votre navigateur !",
    "game.level": "Niveau 1",
    "game.loading": "Chargement du jeu...",
    "game.initializing": "Initialisation des systèmes cyber",
    "game.controls.move": "Utilisez WASD pour bouger",
    "game.controls.jump": "Espace pour sauter",
    "game.controls.aim": "Souris pour viser",
    "game.score": "Score",
    "game.liveStats": "Statistiques en direct",
    "game.playersOnline": "Joueurs en ligne :",
    "game.yourBest": "Votre meilleur :",
    "game.globalRecord": "Record mondial :",

    // FAQ
    "faq.title": "Questions",
    "faq.questions": "fréquentes",
    "faq.subtitle": "Tout ce que vous devez savoir sur CBKylaGame",
    "faq.stillQuestions": "Vous avez encore des questions ?",
    "faq.contactSupport": "Contacter le support",
    "faq.readBlog": "Lire notre blog",

    // Game specific
    "game.dominoDuel": "Duel de dominos",
    "game.dominoDescription":
      "Défiez des joueurs du monde entier dans ce jeu de dominos stratégique. Associez les tuiles, planifiez vos mouvements et dominez le plateau!",
    "game.basketballLegends": "Légendes du basketball 2020",
    "game.basketballDescription":
      "Incarnez des joueurs de basketball légendaires dans ce jeu de sport passionnant. Tirez des paniers, effectuez des dunks incroyables et participez à des matchs palpitants!",
    "game.2048": "2048",
    "game.2048Description":
      "Le jeu de puzzle numérique classique ! Faites glisser les tuiles pour combiner les nombres et atteindre la tuile 2048. Simple à apprendre mais difficile à maîtriser !",

    // FAQ Questions
    "faq.q1": "CBKylaGame est-il gratuit ?",
    "faq.a1":
      "Oui ! CBKylaGame est entièrement gratuit. Vous pouvez profiter de l'expérience de jeu complète sans frais initiaux. Des fonctionnalités premium optionnelles sont disponibles pour améliorer le gameplay.",
    "faq.q2": "Quelles sont les exigences système ?",
    "faq.a2":
      "CBKylaGame fonctionne directement dans votre navigateur web, vous n'avez donc besoin que d'un navigateur moderne comme Chrome, Firefox, Safari ou Edge. Aucun téléchargement ou installation requis !",
    "faq.q3": "Puis-je jouer sur des appareils mobiles ?",
    "faq.a3":
      "CBKylaGame est optimisé pour les appareils de bureau et mobiles. Vous pouvez profiter de la même excellente expérience sur votre smartphone ou tablette.",
    "faq.q4": "Comment sauvegarder ma progression ?",
    "faq.a4":
      "Votre progression de jeu est automatiquement sauvegardée sur votre compte. Créez simplement un compte gratuit ou connectez-vous pour vous assurer que vos réalisations et votre progression sont préservées entre les sessions.",
    "faq.q5": "Y a-t-il des fonctionnalités multijoueur ?",
    "faq.a5":
      "Oui ! CBKylaGame propose des campagnes solo et des modes multijoueur où vous pouvez faire équipe avec des amis ou affronter d'autres joueurs du monde entier.",
    "faq.q6": "À quelle fréquence le jeu est-il mis à jour ?",
    "faq.a6":
      "Nous mettons régulièrement à jour CBKylaGame avec du nouveau contenu, des fonctionnalités et des améliorations. Les mises à jour majeures sont publiées mensuellement, avec des correctifs plus petits déployés selon les besoins.",

    // Footer
    "footer.description":
      "L'expérience de jeu cyberpunk ultime. Plongez dans un monde où la technologie rencontre l'aventure avec CBKylaGame.",
    "footer.game": "Jeu",
    "footer.playNow": "Jouer maintenant",
    "footer.leaderboard": "Classement",
    "footer.achievements": "Réalisations",
    "footer.gameUpdates": "Mises à jour",
    "footer.community": "Communauté",
    "footer.blog": "Blog",
    "footer.forums": "Forums",
    "footer.events": "Événements",
    "footer.tournaments": "Tournois",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.cookies": "Cookies",
    "footer.rights": "Tous droits réservés.",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.blog": "Blog",
    "nav.privacy": "Datenschutz",
    "nav.login": "Anmelden",
    "nav.games": "Spiele",

    // Hero
    "hero.featured": "Empfohlenes Spiel",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "Episches Abenteuer",
    "hero.description":
      "Tauche ein in eine futuristische Welt, in der Technologie auf Abenteuer trifft. Kämpfe durch neonbeleuchtete Städte, verbessere deine Cyber-Fähigkeiten und werde der ultimative digitale Krieger in CBKylaGame.",
    "hero.playNow": "Jetzt spielen",
    "hero.download": "Herunterladen",
    "hero.players": "Spieler",
    "hero.rating": "Bewertung",
    "hero.free": "Kostenlos",
    "hero.toPlay": "Zu spielen",
    "hero.previewGame": "Spiel-Vorschau",

    // Game Section
    "game.readyToPlay": "Bereit zum",
    "game.play": "Spielen?",
    "game.description":
      "Steige jetzt in die Action ein. Keine Downloads erforderlich - spiele direkt in deinem Browser!",
    "game.level": "Level 1",
    "game.loading": "Spiel wird geladen...",
    "game.initializing": "Cyber-Systeme werden initialisiert",
    "game.controls.move": "WASD zum Bewegen verwenden",
    "game.controls.jump": "Leertaste zum Springen",
    "game.controls.aim": "Maus zum Zielen",
    "game.score": "Punkte",
    "game.liveStats": "Live-Statistiken",
    "game.playersOnline": "Online-Spieler:",
    "game.yourBest": "Dein Bestes:",
    "game.globalRecord": "Weltrekord:",

    // FAQ
    "faq.title": "Häufig gestellte",
    "faq.questions": "Fragen",
    "faq.subtitle": "Alles was du über CBKylaGame wissen musst",
    "faq.stillQuestions": "Noch Fragen?",
    "faq.contactSupport": "Support kontaktieren",
    "faq.readBlog": "Blog lesen",

    // Game specific
    "game.dominoDuel": "Domino Duell",
    "game.dominoDescription":
      "Fordere Spieler weltweit in diesem strategischen Domino-Spiel heraus. Kombiniere Steine, plane deine Züge und dominiere das Brett!",
    "game.basketballLegends": "Basketball Legenden 2020",
    "game.basketballDescription":
      "Spiele als legendäre Basketballspieler in diesem aufregenden Sportspiel. Wirf Körbe, zeige erstaunliche Dunks und tritt in spannenden Spielen an!",
    "game.2048": "2048",
    "game.2048Description":
      "Das klassische Zahlen-Puzzle-Spiel! Schiebe Kacheln, um Zahlen zu kombinieren und die 2048-Kachel zu erreichen. Einfach zu lernen, aber schwer zu meistern!",

    // FAQ Questions
    "faq.q1": "Ist CBKylaGame kostenlos spielbar?",
    "faq.a1":
      "Ja! CBKylaGame ist völlig kostenlos spielbar. Du kannst die vollständige Spielerfahrung ohne Vorabkosten genießen. Optionale Premium-Features sind für verbessertes Gameplay verfügbar.",
    "faq.q2": "Was sind die Systemanforderungen?",
    "faq.a2":
      "CBKylaGame läuft direkt in deinem Webbrowser, du brauchst also nur einen modernen Browser wie Chrome, Firefox, Safari oder Edge. Keine Downloads oder Installationen erforderlich!",
    "faq.q3": "Kann ich auf mobilen Geräten spielen?",
    "faq.a3":
      "CBKylaGame ist für Desktop- und mobile Geräte optimiert. Du kannst die gleiche großartige Erfahrung auf deinem Smartphone oder Tablet genießen.",
    "faq.q4": "Wie speichere ich meinen Fortschritt?",
    "faq.a4":
      "Dein Spielfortschritt wird automatisch in deinem Konto gespeichert. Erstelle einfach ein kostenloses Konto oder melde dich an, um sicherzustellen, dass deine Erfolge und dein Fortschritt zwischen den Sitzungen erhalten bleiben.",
    "faq.q5": "Gibt es Multiplayer-Features?",
    "faq.a5":
      "Ja! CBKylaGame bietet sowohl Einzelspieler-Kampagnen als auch Multiplayer-Modi, in denen du dich mit Freunden zusammentun oder gegen andere Spieler weltweit antreten kannst.",
    "faq.q6": "Wie oft wird das Spiel aktualisiert?",
    "faq.a6":
      "Wir aktualisieren CBKylaGame regelmäßig mit neuen Inhalten, Features und Verbesserungen. Große Updates werden monatlich veröffentlicht, kleinere Patches und Fixes werden nach Bedarf bereitgestellt.",

    // Footer
    "footer.description":
      "Das ultimative Cyberpunk-Spielerlebnis. Tauche ein in eine Welt, in der Technologie auf Abenteuer trifft mit CBKylaGame.",
    "footer.game": "Spiel",
    "footer.playNow": "Jetzt spielen",
    "footer.leaderboard": "Bestenliste",
    "footer.achievements": "Erfolge",
    "footer.gameUpdates": "Spiel-Updates",
    "footer.community": "Community",
    "footer.blog": "Blog",
    "footer.forums": "Foren",
    "footer.events": "Events",
    "footer.tournaments": "Turniere",
    "footer.support": "Support",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookies",
    "footer.rights": "Alle Rechte vorbehalten.",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.privacy": "Privacidad",
    "nav.login": "Iniciar sesión",
    "nav.games": "Juegos",

    // Hero
    "hero.featured": "Juego destacado",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "Aventura épica",
    "hero.description":
      "Sumérgete en un mundo futurista donde la tecnología se encuentra con la aventura. Lucha a través de ciudades iluminadas con neón, mejora tus habilidades cibernéticas y conviértete en el guerrero digital definitivo en CBKylaGame.",
    "hero.playNow": "Jugar ahora",
    "hero.download": "Descargar",
    "hero.players": "Jugadores",
    "hero.rating": "Calificación",
    "hero.free": "Gratis",
    "hero.toPlay": "Para jugar",
    "hero.previewGame": "Vista previa del juego",

    // Game Section
    "game.readyToPlay": "¿Listo para",
    "game.play": "jugar?",
    "game.description":
      "¡Únete a la acción ahora mismo. No se requieren descargas - juega directamente en tu navegador!",
    "game.level": "Nivel 1",
    "game.loading": "Cargando juego...",
    "game.initializing": "Inicializando sistemas cibernéticos",
    "game.controls.move": "Usa WASD para moverte",
    "game.controls.jump": "Espacio para saltar",
    "game.controls.aim": "Ratón para apuntar",
    "game.score": "Puntuación",
    "game.liveStats": "Estadísticas en vivo",
    "game.playersOnline": "Jugadores en línea:",
    "game.yourBest": "Tu mejor:",
    "game.globalRecord": "Récord mundial:",

    // FAQ
    "faq.title": "Preguntas",
    "faq.questions": "frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber sobre CBKylaGame",
    "faq.stillQuestions": "¿Aún tienes preguntas?",
    "faq.contactSupport": "Contactar soporte",
    "faq.readBlog": "Leer nuestro blog",

    // Game specific
    "game.dominoDuel": "Duelo de dominó",
    "game.dominoDescription":
      "Desafía a jugadores de todo el mundo en este estratégico juego de dominó. ¡Combina fichas, planifica tus movimientos y domina el tablero!",
    "game.basketballLegends": "Leyendas del Baloncesto 2020",
    "game.basketballDescription":
      "Juega como jugadores de baloncesto legendarios en este emocionante juego de deportes. ¡Encesta, realiza increíbles volcadas y compite en partidos emocionantes!",
    "game.2048": "2048",
    "game.2048Description":
      "¡El clásico juego de rompecabezas numérico! Desliza fichas para combinar números y alcanzar la ficha 2048. ¡Fácil de aprender pero difícil de dominar!",

    // FAQ Questions
    "faq.q1": "¿CBKylaGame es gratis?",
    "faq.a1":
      "¡Sí! CBKylaGame es completamente gratis. Puedes disfrutar de la experiencia completa del juego sin costos iniciales. Las características premium opcionales están disponibles para mejorar la jugabilidad.",
    "faq.q2": "¿Cuáles son los requisitos del sistema?",
    "faq.a2":
      "CBKylaGame funciona directamente en tu navegador web, así que solo necesitas un navegador moderno como Chrome, Firefox, Safari o Edge. ¡No se requieren descargas o instalaciones!",
    "faq.q3": "¿Puedo jugar en dispositivos móviles?",
    "faq.a3":
      "CBKylaGame está optimizado tanto para dispositivos de escritorio como móviles. Puedes disfrutar de la misma gran experiencia en tu smartphone o tablet.",
    "faq.q4": "¿Cómo guardo mi progreso?",
    "faq.a4":
      "Tu progreso del juego se guarda automáticamente en tu cuenta. Simplemente crea una cuenta gratuita o inicia sesión para asegurar que tus logros y progreso se conserven entre sesiones.",
    "faq.q5": "¿Hay características multijugador?",
    "faq.a5":
      "¡Sí! CBKylaGame cuenta con campañas para un jugador y modos multijugador donde puedes formar equipo con amigos o competir contra otros jugadores de todo el mundo.",
    "faq.q6": "¿Con qué frecuencia se actualiza el juego?",
    "faq.a6":
      "Actualizamos regularmente CBKylaGame con nuevo contenido, características y mejoras. Las actualizaciones principales se lanzan mensualmente, con parches más pequeños y correcciones desplegadas según sea necesario.",

    // Footer
    "footer.description":
      "La experiencia de juego cyberpunk definitiva. Sumérgete en un mundo donde la tecnología se encuentra con la aventura con CBKylaGame.",
    "footer.game": "Juego",
    "footer.playNow": "Jugar ahora",
    "footer.leaderboard": "Tabla de líderes",
    "footer.achievements": "Logros",
    "footer.gameUpdates": "Actualizaciones del juego",
    "footer.community": "Comunidad",
    "footer.blog": "Blog",
    "footer.forums": "Foros",
    "footer.events": "Eventos",
    "footer.tournaments": "Torneos",
    "footer.support": "Soporte",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de servicio",
    "footer.cookies": "Cookies",
    "footer.rights": "Todos los derechos reservados.",
  },

  fi: {
    // Navigation
    "nav.home": "Koti",
    "nav.blog": "Blogi",
    "nav.privacy": "Yksityisyys",
    "nav.login": "Kirjaudu",
    "nav.games": "Pelit",

    // Hero
    "hero.featured": "Suosittu peli",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "Eeppinen seikkailu",
    "hero.description":
      "Sukella futuristiseen maailmaan, jossa teknologia kohtaa seikkailun. Taistele neonvaloisten kaupunkien läpi, päivitä kyberkykysi ja tule CBKylaGamen lopulliseksi digitaaliseksi soturiksi.",
    "hero.playNow": "Pelaa nyt",
    "hero.download": "Lataa",
    "hero.players": "Pelaajat",
    "hero.rating": "Arvosana",
    "hero.free": "Ilmainen",
    "hero.toPlay": "Pelattava",
    "hero.previewGame": "Pelin esikatselu",

    // Game Section
    "game.readyToPlay": "Valmis",
    "game.play": "pelaamaan?",
    "game.description": "Hyppää toimintaan heti nyt. Latauksia ei tarvita - pelaa suoraan selaimessasi!",
    "game.level": "Taso 1",
    "game.loading": "Peliä ladataan...",
    "game.initializing": "Alustetaan kyberjärjestelmiä",
    "game.controls.move": "Käytä WASD liikkumiseen",
    "game.controls.jump": "Välilyönti hyppimiseen",
    "game.controls.aim": "Hiiri tähtäämiseen",
    "game.score": "Pisteet",
    "game.liveStats": "Reaaliaikaiset tilastot",
    "game.playersOnline": "Pelaajia verkossa:",
    "game.yourBest": "Sinun paras:",
    "game.globalRecord": "Maailmanennätys:",

    // FAQ
    "faq.title": "Usein kysytyt",
    "faq.questions": "kysymykset",
    "faq.subtitle": "Kaikki mitä sinun tarvitsee tietää CBKylaGamesta",
    "faq.stillQuestions": "Vielä kysymyksiä?",
    "faq.contactSupport": "Ota yhteyttä tukeen",
    "faq.readBlog": "Lue blogiamme",

    // Game specific
    "game.dominoDuel": "Domino-ottelu",
    "game.dominoDescription":
      "Haasta pelaajia ympäri maailmaa tässä strategisessa dominopelissä. Yhdistä laatat, suunnittele liikkeesi ja hallitse lautaa!",
    "game.basketballLegends": "Koripallolegendat 2020",
    "game.basketballDescription":
      "Pelaa legendaarisina koripalloilijoina tässä jännittävänä urheilupelissä. Heitä koripalloja, tee erinomaisia volyja ja osallistu kiihdyttäviin otteluun!",
    "game.2048": "2048",
    "game.2048Description":
      "Klassinen numeropuzzlepeli! Liu'uta laattoja yhdistääksesi numeroita ja saavuttaaksesi 2048-laatan. Helppo oppia mutta vaikea hallita!",
  },
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.blog": "블로그",
    "nav.privacy": "개인정보",
    "nav.login": "로그인",
    "nav.games": "게임",

    // Hero
    "hero.featured": "추천 게임",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "에픽 어드벤처",
    "hero.description":
      "기술과 모험이 만나는 미래 세계로 뛰어들어보세요. 네온 불빛의 도시에서 전투하고, 사이버 능력을 업그레이드하며, CBKylaGame에서 궁극의 디지털 전사가 되어보세요.",
    "hero.playNow": "지금 플레이",
    "hero.download": "다운로드",
    "hero.players": "플레이어",
    "hero.rating": "평점",
    "hero.free": "무료",
    "hero.toPlay": "플레이",
    "hero.previewGame": "게임 미리보기",

    // Game Section
    "game.readyToPlay": "플레이할",
    "game.play": "준비가 되셨나요?",
    "game.description": "지금 바로 액션에 참여하세요. 다운로드 불필요 - 브라우저에서 바로 플레이하세요!",
    "game.level": "레벨 1",
    "game.loading": "게임 로딩 중...",
    "game.initializing": "사이버 시스템 초기화 중",
    "game.controls.move": "WASD로 이동",
    "game.controls.jump": "스페이스로 점프",
    "game.controls.aim": "마우스로 조준",
    "game.score": "점수",
    "game.liveStats": "실시간 통계",
    "game.playersOnline": "온라인 플레이어:",
    "game.yourBest": "최고 기록:",
    "game.globalRecord": "세계 기록:",

    // Game specific
    "game.dominoDuel": "도미노 대결",
    "game.dominoDescription":
      "이 전략적인 도미노 게임에서 전 세계 플레이어들에게 도전하세요. 타일을 맞추고, 움직임을 계획하며, 보드를 지배하세요!",
    "game.basketballLegends": "농구 레전드 2020",
    "game.basketballDescription":
      "이 흥미진진한 스포츠 게임에서 전설적인 농구 선수로 플레이하세요. 슛을 쏘고, 놀라운 덩크를 선보이며, 스릴 넘치는 경기에서 경쟁하세요!",
    "game.2048": "2048",
    "game.2048Description":
      "클래식 숫자 퍼즐 게임! 타일을 슬라이드하여 숫자를 결합하고 2048 타일에 도달하세요. 배우기는 쉽지만 마스터하기는 어려워요!",

    // FAQ
    "faq.title": "자주 묻는",
    "faq.questions": "질문",
    "faq.subtitle": "CBKylaGame에 대해 알아야 할 모든 것",
    "faq.stillQuestions": "아직 궁금한 점이 있나요?",
    "faq.contactSupport": "지원팀 문의",
    "faq.readBlog": "블로그 읽기",

    // FAQ Questions
    "faq.q1": "CBKylaGame은 무료인가요?",
    "faq.a1":
      "네! CBKylaGame은 완전히 무료입니다. 초기 비용 없이 완전한 게임 경험을 즐길 수 있습니다. 게임플레이 향상을 위한 선택적 프리미엄 기능도 제공됩니다.",
    "faq.q2": "시스템 요구사항은 무엇인가요?",
    "faq.a2":
      "CBKylaGame은 웹 브라우저에서 직접 실행되므로 Chrome, Firefox, Safari, Edge와 같은 최신 브라우저만 있으면 됩니다. 다운로드나 설치가 필요하지 않습니다!",
    "faq.q3": "모바일 기기에서 플레이할 수 있나요?",
    "faq.a3":
      "CBKylaGame은 데스크톱과 모바일 기기 모두에 최적화되어 있습니다. 스마트폰이나 태블릿에서도 동일한 훌륭한 경험을 즐길 수 있습니다.",
    "faq.q4": "진행 상황을 어떻게 저장하나요?",
    "faq.a4":
      "게임 진행 상황은 계정에 자동으로 저장됩니다. 무료 계정을 만들거나 로그인하기만 하면 세션 간에 성취와 진행 상황이 보존됩니다.",
    "faq.q5": "멀티플레이어 기능이 있나요?",
    "faq.a5":
      "네! CBKylaGame은 싱글플레이어 캠페인과 멀티플레이어 모드를 모두 제공하여 친구들과 팀을 이루거나 전 세계 다른 플레이어들과 경쟁할 수 있습니다.",
    "faq.q6": "게임은 얼마나 자주 업데이트되나요?",
    "faq.a6":
      "CBKylaGame을 새로운 콘텐츠, 기능, 개선사항으로 정기적으로 업데이트합니다. 주요 업데이트는 매월 출시되며, 필요에 따라 작은 패치와 수정사항이 배포됩니다.",

    // Footer
    "footer.description": "궁극의 사이버펑크 게임 경험. CBKylaGame과 함께 기술과 모험이 만나는 세계로 뛰어들어보세요.",
    "footer.game": "게임",
    "footer.playNow": "지금 플레이",
    "footer.leaderboard": "리더보드",
    "footer.achievements": "업적",
    "footer.gameUpdates": "게임 업데이트",
    "footer.community": "커뮤니티",
    "footer.blog": "블로그",
    "footer.forums": "포럼",
    "footer.events": "이벤트",
    "footer.tournaments": "토너먼트",
    "footer.support": "지원",
    "footer.contact": "연락처",
    "footer.privacy": "개인정보 정책",
    "footer.terms": "서비스 약관",
    "footer.cookies": "쿠키",
    "footer.rights": "모든 권리 보유.",
  },

  "ko-KP": {
    // Navigation
    "nav.home": "홈",
    "nav.blog": "블로그",
    "nav.privacy": "개인정보",
    "nav.login": "로그인",
    "nav.games": "게임",

    // Hero
    "hero.featured": "추천 게임",
    "hero.title": "CBKylaGame",
    "hero.subtitle": "에픽 어드벤처",
    "hero.description":
      "기술과 모험이 만나는 미래 세계로 뛰어들어보세요. 네온 불빛의 도시에서 전투하고, 사이버 능력을 업그레이드하며, CBKylaGame에서 궁극의 디지털 전사가 되어보세요.",
    "hero.playNow": "지금 플레이",
    "hero.download": "다운로드",
    "hero.players": "플레이어",
    "hero.rating": "평점",
    "hero.free": "무료",
    "hero.toPlay": "플레이",
    "hero.previewGame": "게임 미리보기",

    // Game Section
    "game.readyToPlay": "플레이할",
    "game.play": "준비가 되셨나요?",
    "game.description": "지금 바로 액션에 참여하세요. 다운로드 불필요 - 브라우저에서 바로 플레이하세요!",
    "game.level": "레벨 1",
    "game.loading": "게임 로딩 중...",
    "game.initializing": "사이버 시스템 초기화 중",
    "game.controls.move": "WASD로 이동",
    "game.controls.jump": "스페이스로 점프",
    "game.controls.aim": "마우스로 조준",
    "game.score": "점수",
    "game.liveStats": "실시간 통계",
    "game.playersOnline": "온라인 플레이어:",
    "game.yourBest": "최고 기록:",
    "game.globalRecord": "세계 기록:",

    // Game specific
    "game.dominoDuel": "도미노 대결",
    "game.dominoDescription":
      "이 전략적인 도미노 게임에서 전 세계 플레이어들에게 도전하세요. 타일을 맞추고, 움직임을 계획하며, 보드를 지배하세요!",
    "game.basketballLegends": "농구 레전드 2020",
    "game.basketballDescription":
      "이 흥미진진한 스포츠 게임에서 전설적인 농구 선수로 플레이하세요. 슛을 쏘고, 놀라운 덩크를 선보이며, 스릴 넘치는 경기에서 경쟁하세요!",
    "game.2048": "2048",
    "game.2048Description":
      "클래식 숫자 퍼즐 게임! 타일을 슬라이드하여 숫자를 결합하고 2048 타일에 도달하세요. 배우기는 쉽지만 마스터하기는 어려워요!",

    // FAQ
    "faq.title": "자주 묻는",
    "faq.questions": "질문",
    "faq.subtitle": "CBKylaGame에 대해 알아야 할 모든 것",
    "faq.stillQuestions": "아직 궁금한 점이 있나요?",
    "faq.contactSupport": "지원팀 문의",
    "faq.readBlog": "블로그 읽기",

    // FAQ Questions
    "faq.q1": "CBKylaGame은 무료인가요?",
    "faq.a1":
      "네! CBKylaGame은 완전히 무료입니다. 초기 비용 없이 완전한 게임 경험을 즐길 수 있습니다. 게임플레이 향상을 위한 선택적 프리미엄 기능도 제공됩니다.",
    "faq.q2": "시스템 요구사항은 무엇인가요?",
    "faq.a2":
      "CBKylaGame은 웹 브라우저에서 직접 실행되므로 Chrome, Firefox, Safari, Edge와 같은 최신 브라우저만 있으면 됩니다. 다운로드나 설치가 필요하지 않습니다!",
    "faq.q3": "모바일 기기에서 플레이할 수 있나요?",
    "faq.a3":
      "CBKylaGame은 데스크톱과 모바일 기기 모두에 최적화되어 있습니다. 스마트폰이나 태블릿에서도 동일한 훌륭한 경험을 즐길 수 있습니다.",
    "faq.q4": "진행 상황을 어떻게 저장하나요?",
    "faq.a4":
      "게임 진행 상황은 계정에 자동으로 저장됩니다. 무료 계정을 만들거나 로그인하기만 하면 세션 간에 성취와 진행 상황이 보존됩니다.",
    "faq.q5": "멀티플레이어 기능이 있나요?",
    "faq.a5":
      "네! CBKylaGame은 싱글플레이어 캠페인과 멀티플레이어 모드를 모두 제공하여 친구들과 팀을 이루거나 전 세계 다른 플레이어들과 경쟁할 수 있습니다.",
    "faq.q6": "게임은 얼마나 자주 업데이트되나요?",
    "faq.a6":
      "CBKylaGame을 새로운 콘텐츠, 기능, 개선사항으로 정기적으로 업데이트합니다. 주요 업데이트는 매월 출시되며, 필요에 따라 작은 패치와 수정사항이 배포됩니다.",

    // Footer
    "footer.description": "궁극의 사이버펑크 게임 경험. CBKylaGame과 함께 기술과 모험이 만나는 세계로 뛰어들어보세요.",
    "footer.game": "게임",
    "footer.playNow": "지금 플레이",
    "footer.leaderboard": "리더보드",
    "footer.achievements": "업적",
    "footer.gameUpdates": "게임 업데이트",
    "footer.community": "커뮤니티",
    "footer.blog": "블로그",
    "footer.forums": "포럼",
    "footer.events": "이벤트",
    "footer.tournaments": "토너먼트",
    "footer.support": "지원",
    "footer.contact": "연락처",
    "footer.privacy": "개인정보 정책",
    "footer.terms": "서비스 약관",
    "footer.cookies": "쿠키",
    "footer.rights": "모든 권리 보유.",
  },

  // 为其他语言添加基本翻译，使用英文作为fallback
  th: { ...en },
  km: { ...en },
  no: { ...en },
  sv: { ...en },
  da: { ...en },
  ru: { ...en },
  he: { ...en },
  ar: { ...en },
  ms: { ...en },
  id: { ...en },
  jv: { ...en },
  pt: { ...en },
  eo: { ...en },
  hi: { ...en },
}
