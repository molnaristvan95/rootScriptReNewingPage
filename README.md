# rootScriptReNewingPage
Library for renewing your webpage in js for local path and for network also

lang='hu';
1 - illeszd be az alábbi ↓ scriptet az oldalad head részébe (utolsó tag-nek).

<script type="text/javascript" src="https://molnaristvan95.github.io/rootScriptReNewingPage/javascript.js"></script>

2 - hozz létre a HTML végén a BODY_záró tag része előtt egy ilyen részleget a könyvtáram visszahívásához: ↓
<script type="text/javascript">
      reOpenWin(5, 'aWeboldalNézetes_Link_CímedHelye');
    </script>

a scriptemben meghívsz egy funckiót melyet nyers formában az alábbi linken találsz: "https://molnaristvan95.github.io/rootScriptReNewingPage/javascript.js"
Ebben a callBack részben 2 paramétert kell megadnod:
2A - a frissítési idő másodpercben (a fenti példában az "5"-ösz szám = 5másodperc)
2B - a második rész ahova pedig az URL címed megy. Avagy a html-file weboldalnézetes linkcíme. Gépről is működik ha offline dologozol.

neten:
rossz cím: https://jsbin.com/nidewen/edit?html,js,output (rossz)
jó cím:    https://jsbin.com/nidewen (jó)

PC:
rossz cím: D:/Slack/local.html (rossz)
jó cím:    file:///D:/Slack/local.html (jó)

A html file-om remek példa rá. Mert azon teszteltem a működését.
