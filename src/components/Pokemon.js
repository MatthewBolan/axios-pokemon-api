import React, {useState} from 'react';

import axios from 'axios';

const Pokemon = () => {

    const [allPokemon, setAllPokemon] = useState([])
    
    const getPokemonInfo = ()=>{

        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')

            .then(response =>{

                setAllPokemon(response.data.results)

            })

    }

    return (

        <div>

            <h3>Here are all the Pokemon!</h3>

            <button onClick = {getPokemonInfo}>Fetch Pokemon</button>
            {
                allPokemon.map((poke,x)=>{
                    
                    return (

                        <div key = {x}>

                            

                            <li>{poke.name}</li>

                            

                        </div>

                    )

                })

            }

        </div>

    );

};

export default Pokemon;