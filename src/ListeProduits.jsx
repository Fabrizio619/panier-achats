import './ListeProduits.scss';
import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';

export default function ListeProduits(props){

    //  let tab = [1,2,3 ];
    //  let taDouble = tab.map(x => 2*x);    
    // console.log(tabDouble);


    return (

  <div className="ListesProduits">      
        <h2>Produits disponible</h2>    
<ul>



 {/* 
 exemple de quoi on va mettre ici
 <Produit nom="T-Shirts col rond" prix="19.99" id="prd0004"/>
 <Produit nom="chandais a manche longue" prix="25.50" id="prd0002"/>
 <Produit nom="jean" prix="15.75" id="prd0005"/>
  */}

  {/* on va générer les produits a artir de la struxture 
  obtenue du fichier Json des produits */}

{tabProduits.map(prd => 
    <Produit key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id}/>    
   )}

</ul>

</div>
   );
  }