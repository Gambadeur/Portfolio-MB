import React, { Component } from 'react';
import './about.css';
import fleche1Img from './../../images/png/fleche1BLEU.png';
import fleche2Img from './../../images/png/fleche2BLEU.png';

class About extends Component {



render() {
    return (
        <div className="aboutContainer">
            <div className="aboutPart1">
                <p>Documentaliste, agent d’accueil, archiviste, dj, barmaid, iconographe… Mon parcours est loin d’être linéaire et ce sont justement tous ces détours empruntés qui me font vibrer. C’est pour cela - en plus de mon goût certain pour le code et la programmation - que j’ai choisi de m’orienter vers le développement web, et plus spécifiquement vers l’animation. </p>   
            </div>
            <div className="aboutPart2">
                <p>Exercer un métier qui me passionne tout en poursuivant mon périple intersectoriel : rencontrer des personnes qui ne se ressemblent pas, m’impliquer dans de sages projets comme dans d’autres, plus fous. </p>    
            </div>
            <div className="aboutPart3">
                <p>Ma formation de développeur Front-End Javascript débutée en novembre 2016 à Simplon se termine tout juste. Je me lance enfin dans l’aventure du développement web en tant que Junior surboosté, en quête de nouveaux sentiers à parcourir avec l’animation pour ligne d’horizon et la ferme envie de participer à la création de projets ludiques, interactifs. </p>
            </div>
            <img className="fleche1About" src={fleche1Img} alt=""/>
            <img className="fleche2About" src={fleche2Img} alt=""/>
        </div>
        );
    }
}

export default About;