const ORIGIN = "https://49d365e2-dry-bush-1fb3.josh-7c1.workers.dev";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const liveUrl = new URL(url.pathname + url.search, ORIGIN).toString();
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Horse Show Daily | Coming Soon</title>
<style>
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#531c29}
#live{position:fixed;inset:0;width:100%;height:100%;border:0;background:#fff}
#lock{position:fixed;inset:0;z-index:2147483646;pointer-events:auto}
#curtain{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;background:#531c29;color:#f7f1e7;font-family:Arial,sans-serif;overflow:hidden}
#curtain:before,#curtain:after{content:"";position:absolute;top:0;bottom:0;width:51%;background:linear-gradient(90deg,#3b111f,#7b263d 42%,#4b1728);box-shadow:inset 0 0 70px #210915;transition:transform 1s ease}
#curtain:before{left:0}#curtain:after{right:0;transform:scaleX(-1)}
#curtain.open:before{transform:translateX(-88%)}#curtain.open:after{transform:translateX(88%)}
.card{position:relative;z-index:2;text-align:center;padding:32px;transition:opacity .5s ease}
.open .card{opacity:0;pointer-events:none}
.mark{width:78px;height:78px;margin:0 auto 22px;border:2px solid #d7b56d;border-radius:50%;display:grid;place-items:center;color:#d7b56d;font:700 22px Georgia,serif;letter-spacing:3px}
.name{margin:0 0 18px;color:#d7b56d;text-transform:uppercase;letter-spacing:6px;font-size:14px;font-weight:700}
h1{margin:0 0 18px;font:italic 72px/1 Georgia,serif;color:#fff}
p{margin:0 0 28px;color:#f0d9b2;font-size:16px}
button{border:1px solid #d7b56d;border-radius:999px;background:transparent;color:#fff;padding:14px 24px;text-transform:uppercase;letter-spacing:2px;font-size:12px;font-weight:700;cursor:pointer}
@media(max-width:600px){h1{font-size:48px}}
</style>
</head>
<body>
<iframe id="live" src="__LIVE_URL__" title="Horse Show Daily preview"></iframe>
<div id="lock" aria-hidden="true"></div>
<div id="curtain" role="dialog" aria-modal="true" aria-label="Horse Show Daily coming soon">
  <div class="card">
    <div class="mark">HSD</div>
    <p class="name">Horse Show Daily</p>
    <h1>Coming Soon</h1>
    <p>We are preparing something worth opening the gates for.</p>
    <button type="button">Peek Behind the Curtains</button>
  </div>
</div>
<script>
const curtain=document.getElementById("curtain");
const button=curtain.querySelector("button");
button.addEventListener("click",()=>{curtain.classList.add("open");button.textContent="Preview Only";button.disabled=true});
</script>
</body>
</html>`.replace('src="__LIVE_URL__"', 'src=' + JSON.stringify(liveUrl));
    return new Response(html, {headers: {"content-type": "text/html; charset=UTF-8", "cache-control": "no-store"}});
  }
};