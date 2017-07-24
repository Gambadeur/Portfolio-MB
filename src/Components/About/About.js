import React, { Component } from 'react';
import './about.css';
import fleche1Img from './../../images/png/fleche1BLEU.png';
import fleche2Img from './../../images/png/fleche2BLEU.png';
import ptdinterro from './../../images/png/ptdinterro.png';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayAbout1 : true,
            displayAbout2 : true,
            displayAbout3 : true,
        }
        this.openAbout1 = this.openAbout1.bind(this);
        this.closedAbout1 = this.closedAbout1.bind(this);
        this.openAbout2 = this.openAbout2.bind(this);
        this.closedAbout2 = this.closedAbout2.bind(this);
        this.openAbout3 = this.openAbout3.bind(this);
        this.closedAbout3 = this.closedAbout3.bind(this);
    }

    componentWillMount() {
        if(window.innerWidth < 1280){
            this.setState({
            displayAbout1: false,
            displayAbout2 : false,
            displayAbout3 : false,
            })
        }
    }


    openAbout1() {
        this.setState ({
            displayAbout1: false
        })
    }

    closedAbout1() {
        this.setState ({
            displayAbout1: true
        })
    }

    openAbout2() {
        this.setState ({
            displayAbout2: false
        })
    }

    closedAbout2() {
        this.setState ({
            displayAbout2: true
        })
    }

    openAbout3() {
        this.setState ({
            displayAbout3: false
        })
    }

    closedAbout3() {
        this.setState ({
            displayAbout3: true
        })
    }

    render() {
        return (
            <div className="aboutContainer">
                <div className="aboutPart1 animBorderAbout" onMouseEnter={window.innerWidth < 1280 ? null : this.openAbout1} onMouseLeave={window.innerWidth < 1280 ? null : this.closedAbout1} >
                    <div className="aboutPart1Intro" style={{opacity:this.state.displayAbout1 ? 1 : 0}}>
                        <img src={ptdinterro} alt=""/>
                    </div>
                    <p>Documentaliste, agent d’accueil, archiviste, dj, barmaid, iconographe… Mon parcours est loin d’être linéaire et ce sont justement tous ces détours empruntés qui me font vibrer. C’est pour cela - en plus de mon goût certain pour le code et la programmation - que j’ai choisi de m’orienter vers le développement web, et plus spécifiquement vers l’animation. </p>   
                </div>
                <div className="aboutPart2 animBorderAbout" onMouseEnter={window.innerWidth < 1280 ? null : this.openAbout2} onMouseLeave={window.innerWidth < 1280 ? null : this.closedAbout2} >
                    <div className="aboutPart2Intro" style={{opacity:this.state.displayAbout2 ? 1 : 0}}>
                        <img src={ptdinterro} alt=""/>
                    </div>
                    <p>Exercer un métier qui me passionne tout en poursuivant mon périple intersectoriel : rencontrer des personnes qui ne se ressemblent pas, m’impliquer dans de sages projets comme dans d’autres, plus fous. </p>    
                </div>
                <div className="aboutPart3 animBorderAbout" onMouseEnter={window.innerWidth < 1280 ? null : this.openAbout3} onMouseLeave={window.innerWidth < 1280 ? null : this.closedAbout3}>
                    <div className="aboutPart3Intro" style={{opacity:this.state.displayAbout3 ? 1 : 0}}>
                        <img src={ptdinterro} alt=""/>
                    </div>
                    <p>Ma formation de développeur Front-End Javascript débutée en novembre 2016 à Simplon se termine tout juste. Je me lance enfin dans l’aventure du développement web en tant que Junior surboosté, en quête de nouveaux sentiers à parcourir avec l’animation pour ligne d’horizon et la ferme envie de participer à la création de projets ludiques, interactifs. </p>
                </div>
                <img className="fleche1About" src={fleche1Img} alt=""/>
                <img className="fleche2About" src={fleche2Img} alt=""/>
            </div>
            );
        }
}

export default About;