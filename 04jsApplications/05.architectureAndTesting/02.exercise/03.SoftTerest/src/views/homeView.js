const main = document.querySelector("main");
const section = document.querySelector("div[data-section='home']")
const aRef = document.querySelector("a[data-tag]")
aRef.addEventListener('click', onNavigate);

let ctx = null;

export function showHomeView(context) {
    
    ctx = context;
    main.replaceChildren(section);
}

function onNavigate(e) {
    e.preventDefault();
    const href = e.target.href;
    const pathname = new URL(href).pathname;
    ctx.goTo(pathname);
 }
