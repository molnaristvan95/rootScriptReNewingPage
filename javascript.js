console.clear();

function reOpenWin(time, path) {
  var way = window.location.href,
      faster = time - 1,
      slower = time + 1,
      moreSlower = time - 2;
  if (way === path) {
    window.setTimeout(function() {
      document.title = 'Lejárt oldal !!';
    }, (faster * 1000));
    
    window.setTimeout(function() {
      var copied = window.open(path, '_blank');
      window.setTimeout(function() {
        return copied.window.close();
      }, (moreSlower * 1000));
    }, (time * 1000));
    
    window.setTimeout(function() {
      document.body.innerHTML = 'A munkamenet lejárt.';
      document.body.style.background = 'black';
      document.body.style.color = 'yellow';
      document.body.style.fontSize = '32px';
      document.body.style.display = 'flex';
      document.body.style.alignItems = 'center';
      document.body.style.justifyContent = 'center';
      document.body.style.height = '95vh';
    }, (slower * 1000));
  } else {
    console.error('%cErre az oldalra nem terjed ki a script.','color:yellow; font-size:24px;');
  }
}

//reOpenWin(10, 'file:///D:/Slack/local.html'); ←Local PATH from PC folder
//reOpenWin(10, 'https://jsbin.com/jecison'); ←URL from the network
