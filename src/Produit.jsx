import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineIcon';
import './BtnAjoutPanier.scss';

export default function Produit({nom, prix, id, etatPanier}) {
   // export default function Produit(props) {
  //console.log("Props de produits", props);

const [panier, setPanier] = etatPanier;

// const {nom, prix, id} = props;
// const id = props.id;
// const nom = props.nom;

function ajouterPanier(){
  
// let panier2 = panier;
if (panier[id]){
  panier[id].qte++;
}
else {
  panier[id] = {nom: nom, prix: prix, qte: 1};
}

// console.log("Le panier d'achats (objet) : ", panier);
// console.log("Le panier d'achats (Tab des valeurs) : ", Object.values(panier));

// let clonePanier = {};
// for(p in panier) {
//   clonePanier[p] =
// } facon plus compliqué de la version en bas

// setPanier({...panier});
setPanier(JSON.parse(JSON.stringify(panier)));
}


    // console.log(props);

let qte =0;
let texte = "ajouter au panier";
let classeCss = "";
if(panier[id]){
  qte = panier[id].qte;
  // texte = <AddCircleOutlineIcon />; //JSX = javascipt syntax eXtension;
  classeCss= "rouge";
}

    return (

<li className="Produit">
    <img src={'images-produits/' + id + '.webp'} alt=""/>
    <div className="info">
<p className="nom">{nom}</p>
<p className="prix">{prix}</p>

    </div>

      <BtnAjoutPanier onClick={ajouterPanier} qte={qte}  texte={texte} classeCss={classeCss}/>
    {/* <button>ajouter au panier</button> */}

  </li>

   );
  }