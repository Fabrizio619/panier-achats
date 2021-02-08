import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDepage';
import TesteAllo from './TesteAllo';


function Appli() {
  return (
 
    <div className="Appli">
     <Entete />

     
    
    <TesteAllo />



     
      <section className="contenuePrincipale">
      <ListeProduits />
       

      </section>

     

    <PiedDePage />
    </div>
 );
}

export default Appli;
