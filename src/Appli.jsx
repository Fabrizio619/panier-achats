
import './Appli.scss';
import { useEffect, useState } from 'react';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDepage';
import TesteAllo from './TesteAllo';
import useLocalStorageState from './hook/useLocalStorageState';
import { Switch, Route } from 'react-router-dom';

import Accueil from './Accueil';

import Produit from './Produit';

import Apropos  from './Apropos';
import Contact from './Contact';

export default function Appli() {

  const [compteur, setCompteur] = useState (0);

  // exemple de la structure panier
// const panier = {
//    prd0005 : { prix: 19.50, qte:1 },
//    prd0002 : { prix: 9.55, qte:3 }
// }


  
  // const etatPanier = useState ({prd0001:{prix:9.99, qte:1}});  exemple
  //console.log("etatPanier :",etatPanier);
  //console.log("Premier element ",etatPanier[0]);
  //console.log("Deuxieme element ",etatPanier[1]);
  //console.log(etatPanier[0]);
 // const [state, setstate] = use

// const panier = etatPanier[0];
// const setPanier = etatPanier[1];

//const etatConnexion = useState(false);
//const connexion = etatConnexion[0];
//const setConnexion = etatConnexion[1];

  
// const [connexion, setConnexion] = useState(false); // Destructuring Array


// gérer l'état avec les "React Hooks"
  // userState va créer une variable d'état initialisée a {}
  // const  etatPanier = useState (() => {
  //   return JSON.parse(window.localStorage.getItem('panier')) || {};
    // let panierDansLS = window.localStorage.getItem('panier') || {};


    // if(panierDansLS !== null) {
    //   return JSON.parse(panierDansLS);
    // }
    // else{
    //   return {};
    // }

// });

// const [panier] = etatPanier;

// Sauvegarder l'état du panier dans LocalStorage
// corriger avec useEffect() (hook)

// useEffect(() => window.localStorage.setItem('panier', JSON.stringify(etatPanier[0])),[etatPanier[0]]);
// useEffect(() => window.localStorage.setItem('panier', JSON.stringify(panier)),[panier]);

const  etatPanier = useLocalStorageState ({}, "panier");

  return (
 
    <div className="Appli">
     <Entete etatPanier={etatPanier}/>

     
    
    <TesteAllo />



     
      <section className="contenuePrincipale">
     
       <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route exact path="/a-propos-de-nous">
            <Apropos />
          </Route>
          <Route exact  path="/contactez-nous">
          <Contact />
          </Route>
        </Switch>
      

      </section>

<button onClick={()=> setCompteur (compteur+ 1)}>Compteur ({compteur})  </button>
     

    <PiedDePage />
    </div>
 );
}

// export default Appli;
