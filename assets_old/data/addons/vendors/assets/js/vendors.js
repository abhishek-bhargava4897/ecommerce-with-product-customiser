/* 	 imagetracer.js version 1.2.3 Simple raster image tracer and vectorizer written in JavaScript. by András Jankovics andras@jankovics.net  The Unlicense / PUBLIC DOMAIN  This is free and unencumbered software released into the public domain.  Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.  In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  For more information, please refer to http://unlicense.org/ 	 */ eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){\'4g 4X\';H 1F(){v m=I;I.3c=\'1.2.3\',I.4V=H(b,c,d){d=m.1P(d);m.2R(b,H(a){c(m.36(m.2P(a),d))},d)},I.36=H(a,b){b=m.1P(b);v c=m.2M(a,b);O m.3u(c,b)},I.4U=H(b,c,d){d=m.1P(d);m.2R(b,H(a){c(m.2M(m.2P(a),d))},d)},I.2M=H(a,b){b=m.1P(b);v c=m.3A(a,b);v d=m.3I(c);q(b.3L){m.3N(d,m.3P,b.z,b.3L)}v e=m.3o(d,b.1W);v f=m.3t(e,b);v g=m.3x(f,b.1x,b.1p);v h={\'2j\':g,\'P\':c.P,\'J\':a.J,\'12\':a.12};O h},I.2O={\'4S\':4P,\'4O\':{1a:0,17:2},\'4N\':{17:4,1t:5},\'4K\':{1x:0.2w,1J:1w,2c:1j},\'4J\':{1p:0.2w,1J:1j},\'4I\':{1W:0,1l:2,1x:0.5,1p:0.5,17:1y},\'4B\':{1t:5,1G:1y},\'4A\':{1a:0,1B:1,17:7},\'4z\':{1a:0,1B:1,17:27},\'4y\':{1a:1,17:8},\'4x\':{1a:1,17:1y},\'4v\':{1a:0,1B:1,1W:0,1t:5,1G:1y,1x:0.2w,1J:1w,17:16,1I:2},\'4u\':{1p:0.2w,1a:0,1B:1,17:4,1I:0},\'4t\':{1p:10,1x:10,17:8},\'4s\':{1p:10,1x:10,17:1y,1t:5,1G:3W,1I:2},\'4p\':{1x:1,1p:1,1W:20,2c:1w,1a:0,17:3,2D:0,1B:3,1t:3,1G:20,1I:0,1J:1j,1l:1,30:[{r:0,g:0,b:4o,a:G},{r:G,g:G,b:G,a:G}]}},I.1P=H(a){a=a||{};q(2a a===\'4n\'){q(m.2O[a]){a=m.2O[a]}R{a={}}}q(!a.K(\'2H\')){a.2H=1j}q(!a.K(\'1x\')){a.1x=1}q(!a.K(\'1p\')){a.1p=1}q(!a.K(\'1W\')){a.1W=8}q(!a.K(\'2c\')){a.2c=1w}q(a.K(\'1a\')){q(2a a.1a===\'4m\'){a.1a=a.1a?1:0}}R{a.1a=2}q(!a.K(\'17\')){a.17=16}q(!a.K(\'2D\')){a.2D=0}q(!a.K(\'1B\')){a.1B=3}q(!a.K(\'1I\')){a.1I=1}q(!a.K(\'1J\')){a.1J=1j}q(!a.K(\'z\')){a.z=1}q(!a.K(\'1l\')){a.1l=1}q(!a.K(\'1o\')){a.1o=0}q(!a.K(\'15\')){a.15=0}q(!a.K(\'2k\')){a.2k=1j}q(!a.K(\'31\')){a.31=1j}q(!a.K(\'1t\')){a.1t=0}q(!a.K(\'1G\')){a.1G=20}O a},I.3A=H(a,b){v c=[],E=0,2m,2o,1u,19=[],3a=a.J*a.12,i,j,k,22,P;A(j=0;j<a.12+2;j++){c[j]=[];A(i=0;i<a.J+2;i++){c[j][i]=-1}}q(b.30){P=b.30}R q(b.1a===0){P=m.3h(b.17)}R q(b.1a===1){P=m.3j(b.17,a)}R{P=m.3m(b.17,a)}q(b.1t>0){a=m.3n(a,b.1t,b.1G)}A(22=0;22<b.1B;22++){q(22>0){A(k=0;k<P.B;k++){q(19[k].n>0){P[k]={r:D.S(19[k].r/19[k].n),g:D.S(19[k].g/19[k].n),b:D.S(19[k].b/19[k].n),a:D.S(19[k].a/19[k].n)}}q((19[k].n/3a<b.2D)&&(22<b.1B-1)){P[k]={r:D.S(D.1A()*G),g:D.S(D.1A()*G),b:D.S(D.1A()*G),a:D.S(D.1A()*G)}}}}A(i=0;i<P.B;i++){19[i]={r:0,g:0,b:0,a:0,n:0}}A(j=0;j<a.12;j++){A(i=0;i<a.J;i++){E=(j*a.J+i)*4;1u=0;2o=34;A(k=0;k<P.B;k++){2m=D.1r(P[k].r-a.F[E])+D.1r(P[k].g-a.F[E+1])+D.1r(P[k].b-a.F[E+2])+D.1r(P[k].a-a.F[E+3]);q(2m<2o){2o=2m;1u=k}}19[1u].r+=a.F[E];19[1u].g+=a.F[E+1];19[1u].b+=a.F[E+2];19[1u].a+=a.F[E+3];19[1u].n++;c[j+1][i+1]=1u}}}O{1h:c,P:P}},I.3j=H(a,b){v c,P=[];A(v i=0;i<a;i++){c=D.S(D.1A()*b.F.B/4)*4;P.1z({r:b.F[c],g:b.F[c+1],b:b.F[c+2],a:b.F[c+3]})}O P},I.3m=H(a,b){v c,P=[],2q=D.3C(D.4k(a)),2Z=D.3C(a/2q),3H=b.J/(2q+1),2r=b.12/(2Z+1);A(v j=0;j<2Z;j++){A(v i=0;i<2q;i++){q(P.B===a){4j}R{c=D.S(((j+1)*2r)*b.J+((i+1)*3H))*4;P.1z({r:b.F[c],g:b.F[c+1],b:b.F[c+2],a:b.F[c+3]})}}}O P},I.3h=H(a){v b=[],1D,2b,2e;q(a<8){v c=D.S(G/(a-1));A(v i=0;i<a;i++){b.1z({r:i*c,g:i*c,b:i*c,a:G})}}R{v d=D.S(D.4i(a,1/3)),2s=D.S(G/(d-1)),3Q=a-d*d*d;A(1D=0;1D<d;1D++){A(2b=0;2b<d;2b++){A(2e=0;2e<d;2e++){b.1z({r:1D*2s,g:2b*2s,b:2e*2s,a:G})}}}A(1D=0;1D<3Q;1D++){b.1z({r:D.S(D.1A()*G),g:D.S(D.1A()*G),b:D.S(D.1A()*G),a:D.S(D.1A()*G)})}}O b},I.3I=H(a){v b=[],1c=0,2W=a.1h.B,2V=a.1h[0].B,2U,2t,2L,2E,2F,2I,2G,2J,i,j,k;A(k=0;k<a.P.B;k++){b[k]=[];A(j=0;j<2W;j++){b[k][j]=[];A(i=0;i<2V;i++){b[k][j][i]=0}}}A(j=1;j<2W-1;j++){A(i=1;i<2V-1;i++){1c=a.1h[j][i];2U=a.1h[j-1][i-1]===1c?1:0;2t=a.1h[j-1][i]===1c?1:0;2L=a.1h[j-1][i+1]===1c?1:0;2E=a.1h[j][i-1]===1c?1:0;2F=a.1h[j][i+1]===1c?1:0;2I=a.1h[j+1][i-1]===1c?1:0;2G=a.1h[j+1][i]===1c?1:0;2J=a.1h[j+1][i+1]===1c?1:0;b[1c][j+1][i+1]=1+2F*2+2J*4+2G*8;q(!2E){b[1c][j+1][i]=0+2+2G*4+2I*8}q(!2t){b[1c][j][i+1]=0+2L*2+2F*4+8}q(!2U){b[1c][j][i]=0+2t*2+4+2E*8}}}O b},I.3i=[[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[13,3,0,1],[13,2,-1,0],[7,1,0,-1],[7,0,1,0]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[11,1,0,-1],[14,0,1,0],[14,3,0,1],[11,2,-1,0]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]]],I.3r=H(a,b){b=b||8;v c=[],u=0,o=0,U=0,V=0,w=a[0].B,h=a.B,2C=0,2B=1w,2A=1j,25;A(v j=0;j<h;j++){A(v i=0;i<w;i++){q((a[j][i]==4)||(a[j][i]==11)){U=i;V=j;c[u]={};c[u].9=[];c[u].18=[U,V,U,V];c[u].1n=[];2B=1j;o=0;2A=(a[j][i]==11);2C=1;2h(!2B){c[u].9[o]={};c[u].9[o].x=U-1;c[u].9[o].y=V-1;c[u].9[o].t=a[V][U];q((U-1)<c[u].18[0]){c[u].18[0]=U-1}q((U-1)>c[u].18[2]){c[u].18[2]=U-1}q((V-1)<c[u].18[1]){c[u].18[1]=V-1}q((V-1)>c[u].18[3]){c[u].18[3]=V-1}25=m.3i[a[V][U]][2C];a[V][U]=25[0];2C=25[1];U+=25[2];V+=25[3];q((U-1===c[u].9[0].x)&&(V-1===c[u].9[0].y)){2B=1w;q(c[u].9.B<b){c.4f()}R{c[u].1E=2A?1w:1j;q(2A){v d=0,2T=[-1,-1,w+1,h+1];A(v e=0;e<u;e++){q((!c[e].1E)&&m.32(c[e].18,c[u].18)&&m.32(2T,c[e].18)){d=e;2T=c[e].18}}c[d].1n.1z(u)}u++}}o++}}}}O c},I.32=H(a,b){O((a[0]<b[0])&&(a[1]<b[1])&&(a[2]>b[2])&&(a[3]>b[3]))},I.3o=H(a,b){v c=[];A(v k 2i a){q(!a.K(k)){2l}c[k]=m.3r(a[k],b)}O c},I.3M=H(a,b){v c=[],1s=0,1m=0,2g=0,2Y=0,2X=0,u,o;A(u=0;u<a.B;u++){c[u]={};c[u].9=[];c[u].18=a[u].18;c[u].1n=a[u].1n;c[u].1E=a[u].1E;1s=a[u].9.B;A(o=0;o<1s;o++){1m=(o+1)%1s;2g=(o+2)%1s;2Y=(o-1+1s)%1s;2X=(o-2+1s)%1s;q(b.2c&&m.35(a[u],2X,2Y,o,1m,2g)){q(c[u].9.B>0){c[u].9[c[u].9.B-1].1C=m.2u(c[u].9[c[u].9.B-1].x,c[u].9[c[u].9.B-1].y,a[u].9[o].x,a[u].9[o].y)}c[u].9.1z({x:a[u].9[o].x,y:a[u].9[o].y,1C:m.2u(a[u].9[o].x,a[u].9[o].y,((a[u].9[o].x+a[u].9[1m].x)/2),((a[u].9[o].y+a[u].9[1m].y)/2))})}c[u].9.1z({x:((a[u].9[o].x+a[u].9[1m].x)/2),y:((a[u].9[o].y+a[u].9[1m].y)/2),1C:m.2u(((a[u].9[o].x+a[u].9[1m].x)/2),((a[u].9[o].y+a[u].9[1m].y)/2),((a[u].9[1m].x+a[u].9[2g].x)/2),((a[u].9[1m].y+a[u].9[2g].y)/2))})}}O c},I.35=H(a,b,c,d,e,f){O(((a.9[d].x===a.9[b].x)&&(a.9[d].x===a.9[c].x)&&(a.9[d].y===a.9[e].y)&&(a.9[d].y===a.9[f].y))||((a.9[d].y===a.9[b].y)&&(a.9[d].y===a.9[c].y)&&(a.9[d].x===a.9[e].x)&&(a.9[d].x===a.9[f].x)))},I.2u=H(a,b,c,d){v e=8;q(a<c){q(b<d){e=1}R q(b>d){e=7}R{e=0}}R q(a>c){q(b<d){e=3}R q(b>d){e=5}R{e=4}}R{q(b<d){e=2}R q(b>d){e=6}R{e=8}}O e},I.3t=H(a,b){v c=[];A(v k 2i a){q(!a.K(k)){2l}c[k]=m.3M(a[k],b)}O c},I.38=H(a,b,c){v d=0,2v,26,1e,C={};C.s=[];C.18=a.18;C.1n=a.1n;C.1E=a.1E;2h(d<a.9.B){2v=a.9[d].1C;26=-1;1e=d+1;2h(((a.9[1e].1C===2v)||(a.9[1e].1C===26)||(26===-1))&&(1e<a.9.B-1)){q((a.9[1e].1C!==2v)&&(26===-1)){26=a.9[1e].1C}1e++}q(1e===a.9.B-1){1e=0}C.s=C.s.3e(m.2z(a,b,c,d,1e));q(1e>0){d=1e}R{d=a.9.B}}O C},I.2z=H(a,b,c,d,e){q((e>a.9.B)||(e<0)){O[]}v f=d,24=0,23=1w,U,V,1q;v g=(e-d);q(g<0){g+=a.9.B}v h=(a.9[e].x-a.9[d].x)/g,2r=(a.9[e].y-a.9[d].y)/g;v i=(d+1)%a.9.B,1Y;2h(i!=e){1Y=i-d;q(1Y<0){1Y+=a.9.B}U=a.9[d].x+h*1Y;V=a.9[d].y+2r*1Y;1q=(a.9[i].x-U)*(a.9[i].x-U)+(a.9[i].y-V)*(a.9[i].y-V);q(1q>b){23=1j}q(1q>24){f=i;24=1q}i=(i+1)%a.9.B}q(23){O[{1X:\'L\',1g:a.9[d].x,1i:a.9[d].y,X:a.9[e].x,W:a.9[e].y}]}v j=f;23=1w;24=0;v t=(j-d)/g,1V=(1-t)*(1-t),1U=2*(1-t)*t,1T=t*t;v k=(1V*a.9[d].x+1T*a.9[e].x-a.9[j].x)/-1U,2K=(1V*a.9[d].y+1T*a.9[e].y-a.9[j].y)/-1U;i=d+1;2h(i!=e){t=(i-d)/g;1V=(1-t)*(1-t);1U=2*(1-t)*t;1T=t*t;U=1V*a.9[d].x+1U*k+1T*a.9[e].x;V=1V*a.9[d].y+1U*2K+1T*a.9[e].y;1q=(a.9[i].x-U)*(a.9[i].x-U)+(a.9[i].y-V)*(a.9[i].y-V);q(1q>c){23=1j}q(1q>24){f=i;24=1q}i=(i+1)%a.9.B}q(23){O[{1X:\'Q\',1g:a.9[d].x,1i:a.9[d].y,X:k,W:2K,Y:a.9[e].x,1v:a.9[e].y}]}v l=j;O m.2z(a,b,c,d,l).3e(m.2z(a,b,c,l,e))},I.3w=H(a,b,c){v d=[];A(v k 2i a){q(!a.K(k)){2l}d.1z(m.38(a[k],b,c))}O d},I.3x=H(a,b,c){v d=[];A(v k 2i a){q(!a.K(k)){2l}d[k]=m.3w(a[k],b,c)}O d},I.1b=H(a,b){O+a.4c(b)},I.3z=H(a,b,c,d){v e=a.2j[b],C=e[c],N=\'\',o;q(d.1J&&(C.s.B<3)){O N}N=\'<4b \'+(d.2k?(\'2k="l \'+b+\' p \'+c+\'" \'):\'\')+m.3D(a.P[b],d)+\'d="\';q(d.1l===-1){N+=\'M \'+C.s[0].1g*d.z+\' \'+C.s[0].1i*d.z+\' \';A(o=0;o<C.s.B;o++){N+=C.s[o].1X+\' \'+C.s[o].X*d.z+\' \'+C.s[o].W*d.z+\' \';q(C.s[o].K(\'Y\')){N+=C.s[o].Y*d.z+\' \'+C.s[o].1v*d.z+\' \'}}N+=\'Z \'}R{N+=\'M \'+m.1b(C.s[0].1g*d.z,d.1l)+\' \'+m.1b(C.s[0].1i*d.z,d.1l)+\' \';A(o=0;o<C.s.B;o++){N+=C.s[o].1X+\' \'+m.1b(C.s[o].X*d.z,d.1l)+\' \'+m.1b(C.s[o].W*d.z,d.1l)+\' \';q(C.s[o].K(\'Y\')){N+=m.1b(C.s[o].Y*d.z,d.1l)+\' \'+m.1b(C.s[o].1v*d.z,d.1l)+\' \'}}N+=\'Z \'}A(v f=0;f<C.1n.B;f++){v g=e[C.1n[f]];q(d.1l===-1){q(g.s[g.s.B-1].K(\'Y\')){N+=\'M \'+g.s[g.s.B-1].Y*d.z+\' \'+g.s[g.s.B-1].1v*d.z+\' \'}R{N+=\'M \'+g.s[g.s.B-1].X*d.z+\' \'+g.s[g.s.B-1].W*d.z+\' \'}A(o=g.s.B-1;o>=0;o--){N+=g.s[o].1X+\' \';q(g.s[o].K(\'Y\')){N+=g.s[o].X*d.z+\' \'+g.s[o].W*d.z+\' \'}N+=g.s[o].1g*d.z+\' \'+g.s[o].1i*d.z+\' \'}}R{q(g.s[g.s.B-1].K(\'Y\')){N+=\'M \'+m.1b(g.s[g.s.B-1].Y*d.z)+\' \'+m.1b(g.s[g.s.B-1].1v*d.z)+\' \'}R{N+=\'M \'+m.1b(g.s[g.s.B-1].X*d.z)+\' \'+m.1b(g.s[g.s.B-1].W*d.z)+\' \'}A(o=g.s.B-1;o>=0;o--){N+=g.s[o].1X+\' \';q(g.s[o].K(\'Y\')){N+=m.1b(g.s[o].X*d.z)+\' \'+m.1b(g.s[o].W*d.z)+\' \'}N+=m.1b(g.s[o].1g*d.z)+\' \'+m.1b(g.s[o].1i*d.z)+\' \'}}N+=\'Z \'}N+=\'" />\';q(d.1o||d.15){A(o=0;o<C.s.B;o++){q(C.s[o].K(\'Y\')&&d.15){N+=\'<1R 1Z="\'+C.s[o].X*d.z+\'" 1Q="\'+C.s[o].W*d.z+\'" r="\'+d.15+\'" 1N="1S" T-J="\'+d.15*0.2+\'" T="21" />\';N+=\'<1R 1Z="\'+C.s[o].Y*d.z+\'" 1Q="\'+C.s[o].1v*d.z+\'" r="\'+d.15+\'" 1N="2p" T-J="\'+d.15*0.2+\'" T="21" />\';N+=\'<2n 1g="\'+C.s[o].1g*d.z+\'" 1i="\'+C.s[o].1i*d.z+\'" X="\'+C.s[o].X*d.z+\'" W="\'+C.s[o].W*d.z+\'" T-J="\'+d.15*0.2+\'" T="1S" />\';N+=\'<2n 1g="\'+C.s[o].X*d.z+\'" 1i="\'+C.s[o].W*d.z+\'" X="\'+C.s[o].Y*d.z+\'" W="\'+C.s[o].1v*d.z+\'" T-J="\'+d.15*0.2+\'" T="1S" />\'}q((!C.s[o].K(\'Y\'))&&d.1o){N+=\'<1R 1Z="\'+C.s[o].X*d.z+\'" 1Q="\'+C.s[o].W*d.z+\'" r="\'+d.1o+\'" 1N="2p" T-J="\'+d.1o*0.2+\'" T="21" />\'}}A(v f=0;f<C.1n.B;f++){v g=e[C.1n[f]];A(o=0;o<g.s.B;o++){q(g.s[o].K(\'Y\')&&d.15){N+=\'<1R 1Z="\'+g.s[o].X*d.z+\'" 1Q="\'+g.s[o].W*d.z+\'" r="\'+d.15+\'" 1N="1S" T-J="\'+d.15*0.2+\'" T="21" />\';N+=\'<1R 1Z="\'+g.s[o].Y*d.z+\'" 1Q="\'+g.s[o].1v*d.z+\'" r="\'+d.15+\'" 1N="2p" T-J="\'+d.15*0.2+\'" T="21" />\';N+=\'<2n 1g="\'+g.s[o].1g*d.z+\'" 1i="\'+g.s[o].1i*d.z+\'" X="\'+g.s[o].X*d.z+\'" W="\'+g.s[o].W*d.z+\'" T-J="\'+d.15*0.2+\'" T="1S" />\';N+=\'<2n 1g="\'+g.s[o].X*d.z+\'" 1i="\'+g.s[o].W*d.z+\'" X="\'+g.s[o].Y*d.z+\'" W="\'+g.s[o].1v*d.z+\'" T-J="\'+d.15*0.2+\'" T="1S" />\'}q((!g.s[o].K(\'Y\'))&&d.1o){N+=\'<1R 1Z="\'+g.s[o].X*d.z+\'" 1Q="\'+g.s[o].W*d.z+\'" r="\'+d.1o+\'" 1N="2p" T-J="\'+d.1o*0.2+\'" T="21" />\'}}}}O N},I.3u=H(a,b){b=m.1P(b);v w=a.J*b.z,h=a.12*b.z;v c=\'<33 \'+(b.31?(\'4a="0 0 \'+w+\' \'+h+\'" \'):(\'J="\'+w+\'" 12="\'+h+\'" \'))+\'3R="1.1" 49="48://45.43.3X/4r/33" 2k="3Y 3Z 40.41 3R \'+m.3c+\'" >\';A(v d=0;d<a.2j.B;d++){A(v e=0;e<a.2j[d].B;e++){q(!a.2j[d][e].1E){c+=m.3z(a,d,e,b)}}}c+=\'</33>\';O c},I.42=H(a,b){O a-b},I.3V=H(c){O\'44(\'+c.r+\',\'+c.g+\',\'+c.b+\',\'+c.a+\')\'},I.3D=H(c,a){O\'1N="3U(\'+c.r+\',\'+c.g+\',\'+c.b+\')" T="3U(\'+c.r+\',\'+c.g+\',\'+c.b+\')" T-J="\'+a.1I+\'" 46="\'+c.a/G.0+\'" \'},I.47=H(a,b){v c;q(b){c=1k.3S(b);q(!c){c=1k.29(\'2x\');c.3B=b;1k.2y.2f(c)}}R{c=1k.29(\'2x\');1k.2y.2f(c)}c.4d+=a},I.3k=[[0.37,0.4e,0.37],[0.3G,0.3l,0.4h,0.3l,0.3G],[0.3O,0.3J,0.3E,0.4l,0.3E,0.3J,0.3O],[0.3F,0.3v,0.3s,0.3g,0.4q,0.3g,0.3s,0.3v,0.3F],[0.3f,0.3d,0.3b,0.39,0.3T,0.4w,0.3T,0.39,0.3b,0.3d,0.3f]],I.3n=H(a,b,c){v i,j,k,d,E,1K,1O,1M,1L,1f;v e={J:a.J,12:a.12,F:[]};b=D.S(b);q(b<1){O a}q(b>5){b=5}c=D.1r(c);q(c>34){c=34}v f=m.3k[b-1];A(j=0;j<a.12;j++){A(i=0;i<a.J;i++){1K=0;1O=0;1M=0;1L=0;1f=0;A(k=-b;k<b+1;k++){q((i+k>0)&&(i+k<a.J)){E=(j*a.J+i+k)*4;1K+=a.F[E]*f[k+b];1O+=a.F[E+1]*f[k+b];1M+=a.F[E+2]*f[k+b];1L+=a.F[E+3]*f[k+b];1f+=f[k+b]}}E=(j*a.J+i)*4;e.F[E]=D.S(1K/1f);e.F[E+1]=D.S(1O/1f);e.F[E+2]=D.S(1M/1f);e.F[E+3]=D.S(1L/1f)}}v g=28 4C(e.F);A(j=0;j<a.12;j++){A(i=0;i<a.J;i++){1K=0;1O=0;1M=0;1L=0;1f=0;A(k=-b;k<b+1;k++){q((j+k>0)&&(j+k<a.12)){E=((j+k)*a.J+i)*4;1K+=g[E]*f[k+b];1O+=g[E+1]*f[k+b];1M+=g[E+2]*f[k+b];1L+=g[E+3]*f[k+b];1f+=f[k+b]}}E=(j*a.J+i)*4;e.F[E]=D.S(1K/1f);e.F[E+1]=D.S(1O/1f);e.F[E+2]=D.S(1M/1f);e.F[E+3]=D.S(1L/1f)}}A(j=0;j<a.12;j++){A(i=0;i<a.J;i++){E=(j*a.J+i)*4;d=D.1r(e.F[E]-a.F[E])+D.1r(e.F[E+1]-a.F[E+1])+D.1r(e.F[E+2]-a.F[E+2])+D.1r(e.F[E+3]-a.F[E+3]);q(d>c){e.F[E]=a.F[E];e.F[E+1]=a.F[E+1];e.F[E+2]=a.F[E+2];e.F[E+3]=a.F[E+3]}}}O e},I.2R=H(c,d,e){v f=28 4D();q(e&&e.2H){f.4E=\'4F\'}f.4G=c;f.4H=H(){v a=1k.29(\'3p\');a.J=f.J;a.12=f.12;v b=a.2N(\'2d\');b.4L(f,0,0);d(a)}},I.2P=H(a){v b=a.2N(\'2d\');O b.4M(0,0,a.J,a.12)},I.3P=[{r:0,g:0,b:0,a:G},{r:1d,g:1d,b:1d,a:G},{r:0,g:0,b:1d,a:G},{r:1y,g:1y,b:1d,a:G},{r:1H,g:1H,b:1H,a:G},{r:G,g:G,b:G,a:G},{r:1d,g:1d,b:1H,a:G},{r:0,g:0,b:1H,a:G},{r:1d,g:0,b:0,a:G},{r:1d,g:1y,b:1y,a:G},{r:1d,g:0,b:1d,a:G},{r:2S,g:2S,b:2S,a:G},{r:1H,g:1d,b:1d,a:G},{r:1H,g:0,b:0,a:G},{r:G,g:G,b:G,a:G},{r:0,g:1d,b:0,a:G}],I.3N=H(a,b,c,d){c=c||1;v w,h,i,j,k;v e;q(d){e=1k.3S(d);q(!e){e=1k.29(\'2x\');e.3B=d;1k.2y.2f(e)}}R{e=1k.29(\'2x\');1k.2y.2f(e)}A(k 2i a){q(!a.K(k)){2l}w=a[k][0].B;h=a[k].B;v f=1k.29(\'3p\');f.J=w*c;f.12=h*c;v g=f.2N(\'2d\');A(j=0;j<h;j++){A(i=0;i<w;i++){g.4Q=m.3V(b[a[k][j][i]%b.B]);g.4R(i*c,j*c,c,c)}}e.2f(f)}}}q(2a 2Q===\'H\'&&2Q.4T){2Q(H(){O 28 1F()})}R q(2a 3y!==\'3q\'){3y.4W=28 1F()}R q(2a 3K!==\'3q\'){3K.1F=28 1F()}R 4Y.1F=28 1F()})();',62,309,'|||||||||points|||||||||||||||pcnt||if||segments||pacnt|var||||scale|for|length|smp|Math|idx|data|255|function|this|width|hasOwnProperty|||str|return|palette||else|floor|stroke|px|py|y2|x2|x3||||height|||qcpr||numberofcolors|boundingbox|paletteacc|colorsampling|roundtodec|val|128|seqend|wacc|x1|array|y1|false|document|roundcoords|nextidx|holechildren|lcpr|qtres|dist2|abs|palen|blurradius|ci|y3|true|ltres|64|push|random|colorquantcycles|linesegment|rcnt|isholepath|ImageTracer|blurdelta|192|strokewidth|linefilter|racc|aacc|bacc|fill|gacc|checkoptions|cy|circle|cyan|t3|t2|t1|pathomit|type|pl|cx||black|cnt|curvepass|errorval|lookuprow|segtype2||new|createElement|typeof|gcnt|rightangleenhance||bcnt|appendChild|nextidx2|while|in|layers|desc|continue|cd|line|cdl|white|ni|vy|colorstep|n2|getdirection|segtype1|01|div|body|fitseq|holepath|pathfinished|dir|mincolorratio|n4|n5|n7|corsenabled|n6|n8|cpy|n3|imagedataToTracedata|getContext|optionpresets|getImgdata|define|loadImage|168|parentbbox|n1|aw|ah|previdx2|previdx|nj|pal|viewbox|boundingboxincludes|svg|1024|testrightangle|imagedataToSVG|27901|tracepath|107988|pixelnum|089767|versionnumber|069304|concat|049692|144599|generatepalette|pathscan_combined_lookup|samplepalette|gks|228569|samplepalette2|blur|batchpathscan|canvas|undefined|pathscan|122589|batchinternodes|getsvgstring|093095|batchtracepaths|batchtracelayers|module|svgpathstring|colorquantization|id|ceil|tosvgcolorstr|178908|063327|135336|vx|layering|136394|self|layercontainerid|internodes|drawLayers|086776|specpalette|rndnum|version|getElementById|120651|rgb|torgbastr|256|org|Created|with|imagetracer|js|compareNumbers|w3|rgba|www|opacity|appendSVGString|http|xmlns|viewBox|path|toFixed|innerHTML|44198|pop|use|272192|pow|break|sqrt|195843|boolean|string|100|Posterized3|152781|2000|Artistic4|Artistic3|Artistic2|Artistic1|125194|Randomsampling2|Randomsampling1|Fixedpalette|Grayscale|Smoothed|Uint8ClampedArray|Image|crossOrigin|Anonymous|src|onload|Detailed|Sharp|Curvy|drawImage|getImageData|Posterized2|Posterized1|null|fillStyle|fillRect|Default|amd|imageToTracedata|imageToSVG|exports|strict|window'.split('|'),0,{}));jQuery.fn.shake = function(){return this.focus().animate({marginLeft: -30}, 100).animate({marginLeft: 20}, 100).animate({marginLeft: -10}, 100).animate({marginLeft: 5}, 100).animate({marginLeft: 0}, 100);} /**  * hermite-resize - Canvas image resize/resample using Hermite filter with JavaScript.  * @version v2.2.4  * @link https://github.com/viliusle/miniPaint  * @license MIT  */ function Hermite_class(){var t,a,e=[];this.init=void(t=navigator.hardwareConcurrency||4),this.getCores=function(){return t},this.resample_auto=function(t,a,e,r,i){var h=this.getCores();window.Worker&&h>1?this.resample(t,a,e,r,i):(this.resample_single(t,a,e,!0),void 0!=i&&i())},this.resize_image=function(t,a,e,r,i){var h=document.getElementById(t),o=document.createElement("canvas");if(o.width=h.width,o.height=h.height,o.getContext("2d").drawImage(h,0,0),void 0==a&&void 0==e&&void 0!=r&&(a=h.width/100*r,e=h.height/100*r),void 0==e){var n=h.width/a;e=h.height/n}a=Math.round(a),e=Math.round(e);var s=function(){var t=o.toDataURL();h.width=a,h.height=e,h.src=t,t=null,o=null};void 0==i||1==i?this.resample(o,a,e,!0,s):(this.resample_single(o,a,e,!0),s())},this.resample=function(r,i,h,o,n){var s=r.width,d=r.height;i=Math.round(i);var c=d/(h=Math.round(h));if(e.length>0)for(u=0;u<t;u++)void 0!=e[u]&&(e[u].terminate(),delete e[u]);e=new Array(t);for(var g=r.getContext("2d"),v=[],l=2*Math.ceil(d/t/2),f=-1,u=0;u<t;u++){var M=f+1;if(!(M>=d)){f=M+l-1,f=Math.min(f,d-1);var m=l;m=Math.min(l,d-M),v[u]={},v[u].source=g.getImageData(0,M,s,l),v[u].target=!0,v[u].start_y=Math.ceil(M/c),v[u].height=m}}!0===o?(r.width=i,r.height=h):g.clearRect(0,0,s,d);for(var w=0,u=0;u<t;u++)if(void 0!=v[u].target){w++;var p=new Worker(a);e[u]=p,p.onmessage=function(t){w--;var a=t.data.core;e[a].terminate(),delete e[a];var r=Math.ceil(v[a].height/c);v[a].target=g.createImageData(i,r),v[a].target.data.set(t.data.target),g.putImageData(v[a].target,0,v[a].start_y),w<=0&&void 0!=n&&n()};var _={width_source:s,height_source:v[u].height,width:i,height:Math.ceil(v[u].height/c),core:u,source:v[u].source.data.buffer};p.postMessage(_,[_.source])}},a=window.URL.createObjectURL(new Blob(["(",function(){onmessage=function(t){for(var a=t.data.core,e=t.data.width_source,r=t.data.height_source,i=t.data.width,h=t.data.height,o=e/i,n=r/h,s=Math.ceil(o/2),d=Math.ceil(n/2),c=new Uint8ClampedArray(t.data.source),g=(c.length,i*h*4),v=new ArrayBuffer(g),l=new Uint8ClampedArray(v,0,g),f=0;f<h;f++)for(var u=0;u<i;u++){var M=4*(u+f*i),m=0,w=0,p=0,_=0,y=0,b=0,C=0,I=f*n,D=Math.floor(u*o),R=Math.ceil((u+1)*o),U=Math.floor(f*n),A=Math.ceil((f+1)*n);R=Math.min(R,e),A=Math.min(A,r);for(var x=U;x<A;x++)for(var B=Math.abs(I-x)/d,L=u*o,j=B*B,k=D;k<R;k++){var q=Math.abs(L-k)/s,E=Math.sqrt(j+q*q);if(!(E>=1)){var W=4*(k+x*e);C+=(m=2*E*E*E-3*E*E+1)*c[W+3],p+=m,c[W+3]<255&&(m=m*c[W+3]/250),_+=m*c[W],y+=m*c[W+1],b+=m*c[W+2],w+=m}}l[M]=_/w,l[M+1]=y/w,l[M+2]=b/w,l[M+3]=C/p}var z={core:a,target:l};postMessage(z,[l.buffer])}}.toString(),")()"],{type:"application/javascript"})),this.resample_single=function(t,a,e,r){for(var i=t.width,h=t.height,o=i/(a=Math.round(a)),n=h/(e=Math.round(e)),s=Math.ceil(o/2),d=Math.ceil(n/2),c=t.getContext("2d"),g=c.getImageData(0,0,i,h),v=c.createImageData(a,e),l=g.data,f=v.data,u=0;u<e;u++)for(var M=0;M<a;M++){var m=4*(M+u*a),w=0,p=0,_=0,y=0,b=0,C=0,I=0,D=u*n,R=Math.floor(M*o),U=Math.ceil((M+1)*o),A=Math.floor(u*n),x=Math.ceil((u+1)*n);U=Math.min(U,i),x=Math.min(x,h);for(var B=A;B<x;B++)for(var L=Math.abs(D-B)/d,j=M*o,k=L*L,q=R;q<U;q++){var E=Math.abs(j-q)/s,W=Math.sqrt(k+E*E);if(!(W>=1)){var z=4*(q+B*i);I+=(w=2*W*W*W-3*W*W+1)*l[z+3],_+=w,l[z+3]<255&&(w=w*l[z+3]/250),y+=w*l[z],b+=w*l[z+1],C+=w*l[z+2],p+=w}}f[m]=y/p,f[m+1]=b/p,f[m+2]=C/p,f[m+3]=I/_}!0===r?(t.width=a,t.height=e):c.clearRect(0,0,i,h),c.putImageData(v,0,0)}};window.HERMITE = new Hermite_class();