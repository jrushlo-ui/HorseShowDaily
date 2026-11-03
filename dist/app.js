const posts = [];

// Feed adapters should add verified public posts here. Keep original URLs, authors,
// timestamps, and only metrics returned by the source. Never invent engagement.
const feed = document.querySelector('#feed');
const platform = document.querySelector('#platform-filter');
const discipline = document.querySelector('#discipline-filter');
const sort = document.querySelector('#sort-filter');

function render() {
  const filtered = posts.filter((post) => platform.value === 'all' || post.platform === platform.value).filter((post) => discipline.value === 'all' || post.discipline === discipline.value).sort((a, b) => sort.value === 'recent' ? new Date(b.publishedAt) - new Date(a.publishedAt) : (b.engagement && b.engagement.total != null ? b.engagement.total : -1) - (a.engagement && a.engagement.total != null ? a.engagement.total : -1));
  if (!filtered.length) {
    feed.innerHTML = '<article class="empty"><h2>Verified conversations are coming soon.</h2><p>The Arena is waiting for authorized public-feed connections. Posts will appear here only when their source link, author, timestamp, and available engagement can be verified.</p></article>';
    return;
  }
  feed.innerHTML = filtered.map((post) => '<article class="post"><div class="meta"><span>' + post.platform + ' · ' + (post.discipline || 'Uncategorized') + '</span><time datetime="' + post.publishedAt + '">' + new Date(post.publishedAt).toLocaleDateString() + '</time></div><h2><a href="' + post.permalink + '" target="_blank" rel="noopener noreferrer">' + post.title + '</a></h2><p>' + (post.excerpt || '') + '</p><div class="meta"><span>By ' + post.author + '</span><span>' + (post.engagement && post.engagement.total != null ? post.engagement.total.toLocaleString() + ' verified interactions' : 'Engagement unavailable') + '</span></div>' + (post.sponsored ? '<span class="sponsor">Sponsored</span>' : '') + '</article>').join('');
}
[platform, discipline, sort].forEach((control) => control.addEventListener('change', render));
render();
