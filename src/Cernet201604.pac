function r(r,e){return r[e]=1,r}function FindProxyForURL(r,u){if(isPlainHostName(u))return i;var a=u,f=0;do{if(n.hasOwnProperty(a))return e;if(t.hasOwnProperty(a))return i;f=u.indexOf(".",f)+1,a=u.substring(f)}while(f>0);var o=dnsResolve(u);if(!o)return e;if(o.indexOf(":")>=0)return i;var l=o.split("."),d=(255&l[1])<<8|255&l[2],c=l[0],h=_[c],p=s[c];if(0===h)return e;if(16===p)return i;var v=0,w=h.length,L=w>>1;do h[L]>d?w=L:v=L,L=v+w>>1;while(w>v+1);return d-h[v]>>p[v]===0?i:e}var e="SOCKS5 192.168.1.1:1080;SOCKS 192.168.1.1:1080",i="DIRECT",t="oxfordjournals.org|ets.org|doi.org|astm.org|cas.org|aip.org|iop.org|acs.org|aiaa.org|cambridge.org|jstor.org|osa.org|rsc.org|bioone.org|asce.org|ascelibrary.org|crossref.org|cisco.com|ebrary.com|igpublish.com|eastviewpress.com|tandfonline.com|knovel.com|elsevier.com|sciencedirect.com|oup.com|euromonitor.com|truvenhealth.com|ip-science.thomsonreuters.com|engineeringvillage.com|visiblebody.com|thieme.com|journals.lww.com|karger.com|topcoder.com|proquest.com|sagepub.com|nature.com|bmj.com|pressdisplay.com|wiley.com|mhebooklibrary.com|asce.com|ebscohost.com|degruyter.com|aspbs.com|springer.com|taylorandfrancis.com|gale.com|ovid.com|webofknowledge.com|silverchair.com|britannica.com|emeraldinsight.com|lexisnexis.com.cn|muse.jhu.edu|stanford.edu".split("|").reduce(r,{}),n="me|youtu.be|akamaitechnologies.fr|t.co|g.co|name|im|io|in|wikinews.org|google.org|gwtproject.org|wikimedia.org|wiktionary.org|wikipedia.org|wikivoyage.org|golang.org|mediawiki.org|wikiversity.org|wordpress.org|webmproject.org|wikisource.org|wikimediafoundation.org|wikidata.org|wikibooks.org|chromium.org|polymer-project.org|wikiquote.org|fbcdn.net|akam.net|pixiv.net|akamaihd.net|sstatic.net|adzerk.net|akadns.net|akamaitech.net|srip.net|akamaiedge.net|cloudfront.net|akamaistream.net|tfbnw.net|azurewebsites.net|typekit.net|facebook.net|akamai.net|fastly.net|edgekey.net|googlezip.net|edgesuite.net|goo.gl|googlecode.com|googlesource.com|google.com|apple.com|thefacebook.com|googlehosted.com|twitter.com|googlelabs.com|gstatic.com|youtube.com|appspot.com|yimg.com|akamaitechnologies.com|twitpic.com|twimg.com|gmail.com|googleadservices.com|gmodules.com|withgoogle.com|chrome.com|androidify.com|googleapis.com|youtube-nocookie.com|googlevideo.com|wordpress.com|dropboxforum.com|blogger.com|blogspot.com|android.com|flickr.com|tieba.baidu.com|githubusercontent.com|googlesyndication.com|staticflickr.com|mzstatic.com|tweetdeck.com|tinypic.com|yahoo.com|googlemail.com|facebook.com|icloud.com|wp.com|dropbox.com|amazonaws.com|cdn-apple.com|googledrive.com|panoramio.com|ggpht.com|stackoverflow.com|googleusercontent.com|github.com|dropboxstatic.com|dropboxusercontent.com|dmm.com|itunes.com|ytimg.com|gravatar.com|keyhole.com|google-analytics.com|feedburner.com|pushbullet.com".split("|").reduce(r,{}),_=[[0],[13056,47104],0,0,0,0,0,0,0,0,[0],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[62464],0,0,0,0,0,0,[13312,30720,35840,53248],0,0,0,0,0,0,0,0,[4352,6144,39424,49152,61440],[8192,16384],[0,16128],[7168,12288,32768,59392,60416,61440],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1024,19456],0,0,0,0,0,0,0,0,[16384],[29184,47616],0,[13824],[54272,54784],[6144,39424,40448],[3328,14336],0,[51712,58368,58880],0,[24064],[12288,13472,49152,63488],[52224],0,0,[55296],0,[0],0,0,0,0,0,0,0,0,0,[48384],0,0,[28928],0,0,[22784],[54784],0,0,[2048],0,0,0,0,[25856,26624],0,0,0,0,0,[33792,46592],[57856],0,[52992],[26880],0,0,0,[28416],[35584],[40960],[65024],0,0,[4096],0,0,[47360,47872],0,0,0,0,[21504,51456,53248],0,0,[43008,43520,44032],0,0,0,0,0,0,0,0,[0,2,22120,22627,43008],0,0,0,0,0,[4608,13156],0,0,0,[1152,9728,10432,11552,19264,21520,24320,24576,28672,30720,31264,32512,32640,33280,33504,33744,48480,49152],[113,20752,22496,23808,32896,49152,53056,53184,53248,54272],0,0,0,0,0,0,[1280,3072,3744,4000,5376,6400,6528,6656,10752,11776,13056,13568,18432,19456,19968,20448,20992,49248],[16384,20480,24576,34816],0,0,0,0,0,0,[0,14336,22528,24576,26624,27648,49152,61440],[18432,32768,55296,59392,61952,62976],[40960,49152,59904,63488,64512],[0,33280,35072,44032,49152,51200,52224,53248,54272,54784,58880,60928],[4096,20480,33792,35840,40960,43008,51200,55296,55808,56832,61440],[512,32768],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],s=[[16],[8,9],0,0,0,0,0,0,0,0,[16],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[10],0,0,0,0,0,0,[10,10,9,9],0,0,0,0,0,0,0,0,[8,9,9,12,9],[12,12],[13,8],[4,11,14,10,9,10],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[10,9],0,0,0,0,0,0,0,0,[9],[10,9],0,[9],[9,8],[10,10,8],[8,9],0,[9,9,8],0,[9],[9,5,10,10],[10],0,0,[11],0,[16],0,0,0,0,0,0,0,0,0,[8],0,0,[8],0,0,[8],[8],0,0,[8],0,0,0,0,[8,8],0,0,0,0,0,[8,8],[8],0,[8],[8],0,0,0,[8],[8],[8],[8],0,0,[12],0,0,[9,8],0,0,0,0,[9,8,9],0,0,[9,8,10],0,0,0,0,0,0,0,0,[0,0,0,0,8],0,0,0,0,0,[9,0],0,0,0,[5,8,5,5,5,1,5,12,11,9,4,6,7,5,5,4,5,12],[0,4,5,8,5,5,7,6,5,4],0,0,0,0,0,0,[5,9,8,5,9,7,6,12,10,9,9,8,10,9,8,5,9,5],[11,12,11,13],0,0,0,0,0,0,[13,13,11,10,10,8,12,11],[8,13,12,11,10,9],[13,12,8,10,8],[12,9,8,10,11,10,9,10,8,12,11,9],[14,12,11,10,10,13,12,9,8,9,11],[9,9],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16],[16]];