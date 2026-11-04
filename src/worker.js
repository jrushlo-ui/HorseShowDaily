const ORIGIN = "https://49d365e2-dry-bush-1fb3.josh-7c1.workers.dev";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const upstream = new URL(url.pathname + url.search, ORIGIN);
    const response = await fetch(upstream, request);
    const type = response.headers.get("content-type") || "";
    if (!type.includes("text/html")) return response;
    return new HTMLRewriter().on("body", new Curtain()).transform(response);
  }
};

class Curtain {
  element(el) {
    el.append('<div id="hsd-curtain" role="dialog" aria-modal="true" aria-label="Horse Show Daily coming soon"><style>
html,body{overflow:hidden!important}#hsd-curtain{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;background:#531c29;color:#f7f1e7;font-family:Arial,sans-serif;overflow:hidden}#hsd-curtain:before,#hsd-curtain:after{content:"";position:absolute;top:0;bottom:0;width:51%;background:linear-gradient(90deg,#3b111f,#7b263d 42%,#4b1728);box-shadow:inset 0 0 70px #210915;transition:transform 1s ease}#hsd-curtain:before{left:0}#hsd-curtain:after{right:0;transform:scaleX(-1)}#hsd-curtain.open:before{transform:translateX(-88%)}#hsd-curtain.open:after{transform:translateX(88%)}#hsd-curtain .card{position:relative;z-index:2;text-align:center;padding:32px;transition:opacity .5s ease}.open .card{opacity:0;pointer-events:none}.mark{width:78px;height:78px;margin:0 auto 22px;border:2px solid #d7b56d;border-radius:50%;display:grid;place-items:center;color:#d7b56d;font:700 22px Georgia,serif;letter-spacing:3px}.name{margin:0 0 18px;color:#d7b56d;text-transform:uppercase;letter-spacing:6px;font-size:14px;font-weight:700}.card h1{margin:0 0 18px;font:italic 72px/1 Georgia,serif;color:#fff}.card p{margin:0 0 28px;color:#f0d9b2;font-size:16px}.card button{border:1px solid #d7b56d;border-radius:999px;background:transparent;color:#fff;padding:14px 24px;text-transform:uppercase;letter-spacing:2px;font-size:12px;font-weight:700;cursor:pointer}@media(max-width:600px){.card h1{font-size:48px}}</style><div class="card"><div class="mark">HSD</div><p class="name">Horse Show Daily</p><h1>Coming Soon</h1><p>We\'re preparing something worth opening the gates for.</p><button type="button">Peek Behind the Curtains</button></div><script>const c=document.getElementById("hsd-curtain"),b=c.querySelector("button");b.onclick=()=>{c.classList.add("open");b.textContent="Preview Only";b.disabled=true}</script></div>', {html:true});
  }
}
