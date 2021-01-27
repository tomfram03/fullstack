import React, { Component, useEffect } from "react";
import { Title } from "./style"
import { Container, Jumbotron } from 'react-bootstrap'
import Menu from '../../components/Menu'
import api from '../../services/api';
import axios from "axios";

function App() {
    
    const [musicas, setMusicas] = useState(false);

    let getMusica = async(lyrics, url) => {
        let res = await axios.get('http://api.tvmaze.com/search/shows?q=star%20wars', {
            params: {
                name: lyrics,
                url: url
            }
        });
        setMusicas(res.data)
    }
    
    useEffect(() => {
        navigator((musicas) => {
            getMusica(musicas)
            setMusicas(true)
        })
        
    })

    /*
    state = {
        musicas: [],
    }
    
    async componentDidMount() {
        const response = await api.get('');

        this.setState({ musicas: response.data });
    }
    
    componentDidMount() {
        axios.get(`http://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=mus&period=month&scope=lyrics&limit=10`)
            .then(res => {
                const musicas = res.data;
                this.state({ musicas })
            })
    }*/

    

        //const { musicas } = this.state;

        return (
            
                <div>
                    <Menu />
                    <Title>
                        As melhores músicas do momento
                </Title>

                    <Jumbotron fluid>
                        <Container>

                            
                                <li>Musica:  </li>
                            )
                        </Container>
                    </Jumbotron>

                </div>
            );

    }
    


export default App;