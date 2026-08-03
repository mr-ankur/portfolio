#!/bin/bash
# Reports how full each column of each resume page is, and flags clipping.
set -e
SRC="${1:-/Users/ankurgupta/ankur/test/portfolio/resume-source.html}"
DIR="$(dirname "$SRC")"
PROBE="$DIR/_probe.html"

python3 - "$SRC" "$PROBE" <<'PY'
import sys
src = open(sys.argv[1]).read()
probe = '''<script>
window.addEventListener('load', function(){
  var out = [];
  document.querySelectorAll('.page').forEach(function(pg, p){
    pg.querySelectorAll('.main, .side').forEach(function(el){
      var kids = el.children, last = kids[kids.length-1];
      var used = last ? (last.offsetTop + last.offsetHeight) : 0;
      var avail = el.clientHeight - parseFloat(getComputedStyle(el).paddingBottom);
      out.push('p'+(p+1)+' '+el.className.padEnd(10)+' fill='+Math.round(used/avail*100)+'%'+
               (el.scrollHeight > el.clientHeight+1 ? '  *** OVERFLOW ***' : ''));
    });
  });
  var d=document.createElement('div'); d.id='diag-probe'; d.textContent=out.join('|');
  document.body.appendChild(d);
});
</script>'''
open(sys.argv[2],'w').write(src.replace('</body>', probe + '</body>'))
PY

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --virtual-time-budget=4000 --dump-dom "$PROBE" 2>/dev/null \
  | grep -o 'id="diag-probe">[^<]*' | sed 's/id="diag-probe">//' | tr '|' '\n' | grep .
rm -f "$PROBE"
