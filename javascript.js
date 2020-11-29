console.clear();

function reOpenWin(time, path) {
  var way = window.location.href,
      faster = time - 1,
      slower = time + 2;
  if (way === path) {
    window.setTimeout(abort, (faster * 1000));
    window.setTimeout(function(){
      openNewWindow(path), (time * 1000)
    });
    window.setTimeout(closePage, (slower * 1000));
  } else {
    console.error('%cErre az oldalra nem terjed ki a script.','color:yellow; font-size:24px;');
  }
}

function abort() {
  document.title = 'Lejárt oldal !!';
  return;
}

function openNewWindow(url) {
  window.open(url, '_blank');
}

function closePage() {
  document.body.innerHTML = 'A munkamenet lejárt.';
  document.body.style.background = 'black';
  document.body.style.color = 'yellow';
  document.body.style.fontSize = '32px';
  document.body.style.display = 'flex';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  document.body.style.height = '95vh';
  document.body.addEventListener('mousemove', halt);
  document.body.addEventListener('click', halt);
  return window.close();
}

function halt() {
  return window.close();
}

//reOpenWin(10, 'file:///D:/Slack/local.html'); ←Local PATH from PC folder
//reOpenWin(10, 'https://jsbin.com/jecison'); ←URL from the network
