(function(){
  var d = document
    , s = d.getElementsByTagName('script')
    , v = s[d.length-1].src.split('#');
  v = v.length ? v[1]: 9; // version to update
  
  // https://gist.github.com/542301
  with(d.createElement("b"))for(var ie=-1;innerHTML="<!--[if gt IE "+ ++ie+"]>1<![endif]-->",+innerHTML;);
})()