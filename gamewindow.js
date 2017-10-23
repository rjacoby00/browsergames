extcss = document.createElement('link');
e = document.createElement('div');
extcss.rel = 'stylesheet';
extcss.href = 'https://cdn.rawgit.com/rjacoby00/browsergames/6dc9cfb7/index.css';
document.head.appendChild(extcss);
e.class = 'game_container_rjacoby';
document.body.appendChild(e);
document.getElementsByClass('game_container_rjacoby')[0].innerHTML = "TEST";
