import './Produit.css';

export default function Produit(props) {
    console.log(props);
    return (

<li>
    <img src={'images-produits/' + props.id + '.webp'} alt=""/>
    <div className="info">
<p className="nom">{props.nom}</p>
<p className="prix">{props.prix}</p>

    </div>
    <button>ajouter au panier</button>
  </li>
   );
  }