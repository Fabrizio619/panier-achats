import './PiedDePage.scss';

// const PiedDePage = props => {
export default function PiedDePage(props){
    const annee = new Date().getFullYear();
    return (
     
    <footer className="PiedDePage">
        &copy;{annee} -  TIM - Tous droits réservés.
    </footer>

   );
  }

