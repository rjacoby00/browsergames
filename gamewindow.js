extcss = document.createElement('link');
e = document.createElement('div');
extcss.rel = 'stylesheet';
extcss.href = '[LINK]';
document.head.appendChild(extcss);
e.class = 'game_container_rjacoby';
document.body.appendChild(e);
document.getElementsByClass('game_container_rjacoby')[0].innerHTML = "TEST";
