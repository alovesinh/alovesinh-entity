// Official entity / profile links for Alô Vệ Sinh, grouped by category.
const ENTITY_GROUPS = [
  {
    title: "Mạng xã hội",
    items: [
      { name: "Facebook Fanpage", url: "https://www.facebook.com/dichvualovesinh/" },
      { name: "Facebook Page", url: "https://www.facebook.com/alovesinhpage/" },
      { name: "Facebook Group", url: "https://www.facebook.com/groups/1997716054282140" },
      { name: "Instagram", url: "https://www.instagram.com/dichvualovesinh/" },
      { name: "TikTok", url: "https://www.tiktok.com/@dichvualovesinh" },
      { name: "X (Twitter)", url: "https://x.com/dichvualovesinh" },
      { name: "Threads", url: "https://www.threads.com/@dichvualovesinh" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/dichvualovesinh/" },
      { name: "Pinterest", url: "https://www.pinterest.com/dichvualovesinh/" },
      { name: "Tumblr", url: "https://www.tumblr.com/alovesinh" },
      { name: "Flipboard", url: "https://flipboard.com/@dichvualovesinh" },
      { name: "Plurk", url: "https://www.plurk.com/dichvualovesinh" },
      { name: "Mix", url: "https://mix.com/dichvualovesinh" },
      { name: "Discord", url: "https://discord.com/channels/@alovesinh" },
      { name: "Twitch", url: "https://www.twitch.tv/alovesinh" },
      { name: "Xing", url: "https://www.xing.com/profile/Alo_VSinh" },
    ],
  },
  {
    title: "Video &amp; âm thanh",
    items: [
      { name: "YouTube", url: "https://www.youtube.com/@dichvualovesinh" },
      { name: "Vimeo", url: "https://vimeo.com/alovesinh" },
      { name: "Dailymotion", url: "https://www.dailymotion.com/user/alovesinh" },
      { name: "SoundCloud", url: "https://soundcloud.com/dichvualovesinh" },
      { name: "Spotify Playlist", url: "https://open.spotify.com/playlist/3dk4rM2hNmhajEpJFtdreL" },
      { name: "Giphy", url: "https://giphy.com/channel/alovesinh" },
      { name: "Spreaker", url: "https://www.spreaker.com/user/alo-ve-sinh--19201720" },
      { name: "ReverbNation", url: "https://www.reverbnation.com/dichvualovesinh" },
      { name: "Tapas", url: "https://tapas.io/dichvualovesinh" },
      { name: "BitChute", url: "https://www.bitchute.com/profile/ClSkRGx9jBRj" },
      { name: "Seed&amp;Spark", url: "https://seedandspark.com/user/ta-hai-dong-seedandspark-01kxmv2jkrppk3ecvmn4r8fjjq" },
    ],
  },
  {
    title: "Blog &amp; website",
    items: [
      { name: "Blogspot", url: "https://dichvualovesinh.blogspot.com/" },
      { name: "WordPress", url: "https://dichvualovesinh.wordpress.com/" },
      { name: "Wix Site", url: "https://alovesinh.wixsite.com/alovesinh" },
      { name: "Google Sites", url: "https://sites.google.com/view/dichvualovesinh" },
      { name: "Notion Site", url: "https://alovesinh.notion.site/H-Th-ng-M-ng-X-H-i-V-K-nh-Entity-Ch-nh-Th-c-C-a-Al-V-Sinh-3a4403b6fc0f80b0bfd7d18a3de88bad?pvs=73" },
      { name: "Site123", url: "http://6a572db734379.site123.me" },
      { name: "Strikingly", url: "https://dichvualovesinh.mystrikingly.com/" },
      { name: "MyWebSelfSite", url: "https://alo-ve-sinh.mywebselfsite.net/" },
      { name: "GitHub Pages", url: "https://alovesinh.github.io/alovesinh/" },
      { name: "Vercel Entity Hub", url: "https://alovesinh-entity-hub.vercel.app/" },
      { name: "Medium", url: "https://medium.com/@alvsinh/about" },
      { name: "Zeef", url: "https://alovesinh.zeef.com/alovesinh" },
    ],
  },
  {
    title: "Thiết kế &amp; sáng tạo",
    items: [
      { name: "Behance", url: "https://www.behance.net/alovesinh" },
      { name: "500px", url: "https://500px.com/p/dichvualovesinh" },
      { name: "Pixabay", url: "https://pixabay.com/users/alovesinh-56702148/" },
      { name: "PxHere", url: "https://pxhere.com/en/photographer/5074014" },
      { name: "Dreamstime", url: "https://www.dreamstime.com/tahaidong68_info" },
      { name: "Designspiration", url: "https://www.designspiration.com/alovesinh" },
      { name: "Pinshape", url: "https://pinshape.com/users/9010966-tahaidong68?tab=designs" },
      { name: "Coolors", url: "https://coolors.co/u/dichvualovesinh" },
      { name: "SlideShare", url: "https://www.slideshare.net/tahaidong68" },
      { name: "Slides.com", url: "https://slides.com/dichvualovesinh" },
      { name: "FlipHTML5", url: "https://fliphtml5.com/home/alovesinh" },
      { name: "Issuu", url: "https://issuu.com/alovesinh" },
      { name: "Threadless", url: "https://www.threadless.com/@dichvualovesinh" },
      { name: "ThemeForest", url: "https://themeforest.net/user/alovesinh" },
      { name: "Webflow", url: "https://webflow.com/@alovesinh" },
    ],
  },
  {
    title: "Công cụ &amp; cộng đồng lập trình",
    items: [
      { name: "GitHub", url: "https://github.com/alovesinh" },
      { name: "GitLab", url: "https://gitlab.com/tahaidong68" },
      { name: "Bitbucket", url: "https://bitbucket.org/dichvualovesinh/workspace/overview" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/users/32939581/" },
      { name: "Docker Hub", url: "https://hub.docker.com/u/alovesinh" },
      { name: "Postman", url: "https://www.postman.com/alovesinh" },
      { name: "DZone", url: "https://dzone.com/users/5550897/alovesinh.html" },
      { name: "Hackaday", url: "https://hackaday.io/alovesinh" },
      { name: "Qiita", url: "https://qiita.com/dichvualovesinh" },
      { name: "Expo", url: "https://expo.dev/accounts/dichvualovesinh" },
      { name: "Wikidot", url: "https://www.wikidot.com/user:info/dichvualovesinh" },
      { name: "Google Developers", url: "https://me.developers.google.com/u/108611889703969661353" },
    ],
  },
  {
    title: "Hồ sơ &amp; thương hiệu",
    items: [
      { name: "Gravatar", url: "https://gravatar.com/dichvualovesinh" },
      { name: "About.me", url: "https://about.me/alovesinhh" },
      { name: "Credly", url: "https://www.credly.com/users/alovesinh" },
      { name: "Cake.me", url: "https://www.cake.me/me/alovesinh" },
      { name: "Product Hunt", url: "https://www.producthunt.com/@alovesinh" },
      { name: "Seeking Alpha", url: "https://seekingalpha.com/user/64862358" },
      { name: "Bonanza", url: "https://www.bonanza.com/users/60472309/profile" },
      { name: "Gumroad", url: "https://dichvualovesinh.gumroad.com/" },
      { name: "Ko-fi", url: "https://ko-fi.com/dichvualovesinh" },
      { name: "Trello", url: "https://trello.com/u/dichvualovesinh/activity" },
    ],
  },
  {
    title: "Diễn đàn &amp; cộng đồng",
    items: [
      { name: "Reddit", url: "https://www.reddit.com/user/Sufficient-Music-949/" },
      { name: "Quora", url: "https://www.quora.com/profile/Al%C3%B4-V%E1%BB%87-Sinh" },
      { name: "Kênh Sinh Viên", url: "https://kenhsinhvien.vn/m/alovesinh.1174118/#about" },
      { name: "Tinh Tế", url: "https://tinhte.vn/members/alo-ve-sinh.3399190/" },
      { name: "Thế Giới Mua Bán Wiki", url: "https://wiki.thegioimuaban.com/members/alo-ve-sinh.706/" },
      { name: "WeddingBee", url: "https://www.weddingbee.com/members/Ta%20Hai%20Dong/" },
      { name: "DroidForums", url: "https://www.droidforums.net/members/alovesinh.471890/" },
      { name: "MyDramaList", url: "https://mydramalist.com/profile/alovesinh" },
      { name: "San Diego Reader", url: "https://www.sandiegoreader.com/users/dichvualovesinh/" },
      { name: "FACEIT", url: "https://www.faceit.com/en/players/alovesinh" },
      { name: "Letterboxd", url: "https://letterboxd.com/dichvualovesinh/" },
      { name: "SnipeSocial", url: "https://www.snipesocial.co.uk/alovesinh" },
      { name: "Pinetbook", url: "https://pinetbook.com/alovesinh" },
    ],
  },
  {
    title: "Lưu trữ &amp; ghi chú",
    items: [
      { name: "Diigo", url: "https://www.diigo.com/profile/dichvualovesinh" },
      { name: "Instapaper", url: "https://www.instapaper.com/p/dichvualovesinh" },
      { name: "Pearltrees", url: "https://www.pearltrees.com/alovesinh" },
      { name: "Checkli", url: "https://www.checkli.com/alovesinh" },
      { name: "IntenseDebate", url: "https://www.intensedebate.com/profiles/dichvualovesinh" },
      { name: "Wakelet", url: "https://wakelet.com/@dichvualovesinh" },
      { name: "Notebook.ai", url: "https://www.notebook.ai/users/1398618" },
      { name: "Scribd", url: "https://www.scribd.com/user/1003834010/Alo-V%E1%BB%87-Sinh" },
      { name: "Hatena", url: "https://profile.hatena.ne.jp/dichvualovesinh/" },
      { name: "Peatix", url: "https://peatix.com/user/30110400/view" },
      { name: "Lnk.bio", url: "https://lnk.bio/alovesinh" },
      { name: "Heylink.me", url: "https://heylink.me/alovesinh/" },
      { name: "Bit.ly", url: "https://bit.ly/m/alovesinh" },
      { name: "Digg", url: "https://digg.com/u/x/dichvualovesinh" },
    ],
  },
];

function renderEntityGroups() {
  const container = document.getElementById("entityGroups");
  if (!container) return;
  const html = ENTITY_GROUPS.map(group => `
    <div class="entity-group">
      <h3>${group.title}</h3>
      <div class="entity-chips">
        ${group.items.map(item => `<a class="chip" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>`).join("")}
      </div>
    </div>
  `).join("");
  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderEntityGroups);
