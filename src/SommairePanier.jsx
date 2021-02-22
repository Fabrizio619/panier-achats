import './SommairePanier.scss';

// export default function SommairePanier(props, autreChose){
 export default function SommairePanier({panier, affichable}) {

const info = retournerInfoPanier(panier);

// const panier = props.panier;
// const panier = props.autrechose;
console.log("Le panier dans SommairePanier : ", panier);
return(

    <div className={'SommairePanier' + (!affichable ? ' cacher' : '')}>
  
      <span>Articles différentes: {info.nbArticles}</span>
      <span>Totalt # items: {info.totalItems}</span>
      <span>Sous-Total : {info.st}</span>
      <span>TPS : {info.tps}</span>
      <span>TVQ :{info.tvq} </span>
      <span>Total : {info.total} </span>

    </div>
  
     );
    }

function retournerInfoPanier(pan) {
   const tabArticles = Object.values(pan); 

 //   [ {nom : 'sdfsd', prix: 15.99, qte:2] } ]

let info = {nbArticles: 0, totalItems: 0, st: 0, tps: 0, tvq: 0, total: 0};
info.nbArticles = tabArticles.length;
info.totalItems = tabArticles.reduce((acc, article) => acc + article.qte , 0);
const st = tabArticles.reduce((acc, article) => acc + (article.prix*article.qte), 0);
info.st = st.toFixed(2);
const tps = st * 0.05;
info.tps = tps.toFixed(2);
const tvq = st * 0.09975;
info.tvq = tvq.toFixed(2);
info.total = (st + tps + tvq).toFixed(2);
return info;
}


