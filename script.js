let people=10;
let hours=2;

const fatorDuracao={2:1.0,4:1.2,6:1.5};

function calc(){
 const fator=fatorDuracao[hours];

 const picanha=(people*0.5*fator);
 const linguica=(people*0.25*fator);
 const carvao=Math.max(1,Math.ceil((people/4)*fator));
 const gelo=Math.max(1,Math.ceil((people/6)*fator));
 const refrigerante=(people*0.6*fator);
 const pao=Math.ceil((people*1)*fator);

 const total=
 (picanha*39.90)+
 (linguica*19.90)+
 (carvao*14)+
 (gelo*12)+
 (refrigerante*6)+
 (pao*3.5)+
 3.5;

 document.getElementById('lista').innerHTML=`
 <p><b>Picanha:</b> ${picanha.toFixed(1)} kg</p>
 <p><b>Linguiça:</b> ${linguica.toFixed(1)} kg</p>
 <p><b>Carvão:</b> ${carvao} saco(s)</p>
 <p><b>Gelo:</b> ${gelo} pacote(s) de 5kg</p>
 <p><b>Refrigerante:</b> ${refrigerante.toFixed(1)} L</p>
 <p><b>Pão de alho:</b> ${pao} unidade(s)</p>
 <p><b>Sal grosso:</b> 1 pacote</p>
 `;

 document.getElementById('total').textContent=total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}

document.getElementById('plus').onclick=()=>{people++;document.getElementById('people').textContent=people;calc();}
document.getElementById('minus').onclick=()=>{if(people>1)people--;document.getElementById('people').textContent=people;calc();}

document.querySelectorAll('.dur').forEach(btn=>{
 btn.onclick=()=>{
  document.querySelectorAll('.dur').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  hours=+btn.dataset.h;
  calc();
 }
});

document.getElementById('calc').onclick=calc;

document.getElementById('copy').onclick=()=>{
 navigator.clipboard.writeText(document.getElementById('lista').innerText);
 alert('Lista copiada!');
};

calc();
