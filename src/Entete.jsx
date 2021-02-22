import './Entete.scss'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Entete({etatPanier}){
// console.log("l'état du panier dans la barre de navigation : ", props.etatPanier);
const [panier,setPanier]  = etatPanier;

const qteAccumuler = Object.values(panier).reduce((total,acc) => total + acc.qte, 0);
const valeursPanier = Object.values(panier);



const  [sommaireAffichable, setSommaireAffichable] = useState(false);

function basculerAffichageSommairePanier() {

   setSommaireAffichable(!sommaireAffichable);
   // console.log(sommaireAffichable);

}

//Calculer le nombre d'articles dans le panier
// const panier (
  //prd0005: (prix: 19.5, qte:1) 
    //prd0005: (prix: 19.5, qte:1) 

// console.log("Le panier : ", ali)

// const nbArticlesDiff = Object.values(panier).length;

// console.log("Le tableau des valeurs des paniers",valeursPanier);
// const totalArticles =0;

// let totalArticles = 0;

// for(let index =0; index < valeursPanier.length; index++) {
//    totalArticles += valeursPanier[index].qte;
// }
// //calcul du total des quatités avec reduce()
// const totalArticle2 = valeursPanier.reduce(
//    (valInit, valCourante) =>  valInit + valCourante.qte
// , 0);
// console.log("Total des articles avec reduce() : ", totalArticle2);

    return (
     <header className="Entete">
    <div className="logo">
        <NavLink to="/" activeClassName="navActive" exact>

        Magasin
        </NavLink>  
         </div>
      <ul className="navPrincipale">
      <li><NavLink to="/nos-produits" activeClassName="navActive"> Produits</NavLink> </li>
       <li><NavLink to="/a-propos-de-nous" activeClassName="navActive">A propos de nous</NavLink> </li>
       <li><NavLink to="/contactez-nous" activeClassName="navActive">Contactez-nous</NavLink></li> 

       {/* les link permet au site d'envoyer l'utilisateura une autre section */}
      </ul>

      <ul className="navUtilisateur">
         <li>
         {/* <Badge badgeContent={totalArticle2} color="secondary"> */}
<Badge onClick={basculerAffichageSommairePanier} badgeContent={valeursPanier.reduce((accumulateur, eltCourant) => accumulateur + eltCourant.qte, 0)} color="secondary">
          <ShoppingCartIcon/>
          </Badge>

<SommairePanier panier={panier} affichable={sommaireAffichable}/>
{/* autreChose="blabla" */}
          {/* <div className="sommairePanier">
             lalala
             </div> */}
         </li>
         <li>Mon compte</li>
      </ul>

     </header>


   )

  }

//   export default Entete;

 