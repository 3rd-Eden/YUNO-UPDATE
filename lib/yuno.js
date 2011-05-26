(function(){
  var d = document
    , b = d.body
    , s = d.getElementsByTagName('script')
    , v = s[s.length-1].src.split('?v=')
    , ie = -1
    , e
    , t;
    
  // get the target version
  v = v.length ? v[1]: 9;
  
  // https://gist.github.com/542301 IE version detection;
  for(t=d.createElement("b");t.innerHTML="<!--[if gt IE "+ ++ie+"]>1<![endif]-->",+t.innerHTML;);

  // don't annoy other users ;D
  if (!ie || v < ie) return;
  
  // the YUNO msg
  s = e = d.createElement('div');
  e.style.cssText="z-index:9999;position:absolute;top:50%;left:50%;margin:0;padding:0;right:auto;bottom:auto;margin:-143px 0 0 -161px;float:none;background:url(https://github.com/3rd-Eden/YUNO-UPDATE/raw/master/bin/YUNO) no-repeat;width:431px;height:322px;cursor:pointer";
  e.innerHTML='<p style="top:0;position:absolute;font-family:Impact,Techno,sans-serif;color:#fff;font-size:41px;margin:-3px 0 0 0;padding:0;cursor:pointer">Internet Explorer '+ie+' user</p>'+
              '<p style="bottom:0;position:absolute;font-family:Impact,Techno,sans-serif;color:#fff;font-size:35px;margin:0 0 -3px 0;padding:0;cursor:pointer">Y U NO UPDATE U BROWSER</p>';
  
  b.appendChild(e);
  // lightbox
  e = d.createElement('div');
  e.style.cssText="z-index:9998;position:absolute;background:#2b4663;margin:0;padding:0;height:"+(window.innerHeight||document.documentElement.clientHeight)+"px;width:"+(window.innerWidth||document.documentElement.clientWidth)+"px;float:none;top:0;left:0;cursor:pointer";
  b.appendChild(e);
  
  // close functionality
  v=function(){b.removeChild(e);b.removeChild(s);v=null;};
  s.onclick = e.onclick = v;
})();