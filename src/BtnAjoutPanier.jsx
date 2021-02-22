import { Badge } from '@material-ui/core';
import {useEffect, useReducer, useState} from 'react';
//import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineIcon';
import './BtnAjoutPanier.scss';

 export default function BtnAjoutPanier({onClick, qte, texte, classeCss})  {

// const [texte, setTexte] = useState("Ajouter au panier");

// const [qte, setQte] = useState(0);



    return (

        
        <Badge badgeContent={qte} color="primary">
        {/* <button onClick={function(event) {props.onClick(); setTexte('Augmenter'); setQte(qte+1)} } className="BtnAjoutPanier"> */}
        <button onClick={onClick} className={`BtnAjoutPanier ${classeCss}`}>
        {texte}
            </button>
        </Badge>
    );
  }

 