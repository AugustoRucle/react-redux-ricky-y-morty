import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

import { Provider } from'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

/**
 * Provider 
 * Para utilizar un store dentro de un conjunto de componentes de react
 * se debe encapsulizar en un componente llamado Provider, tambien nos 
 * beneficiara en que nada fuera del provider podra compartir el estado
 * y no alla efectos secundarios.
 * 
 * Dado que cualquier componente React en una aplicación React Redux se 
 * puede conectar, la mayoría de las aplicaciones mostrarán un 
 * <Provider> 'en el nivel superior, con el árbol de componentes 
 * completo de la aplicación dentro de él. . Normalmente, no puede usar 
 * un componente conectado a menos que esté anidado dentro de un<Provider>
 * 
 */

const initialState = {
    "user":{},
    "playing":{},
    "myList": [],
    "trends": [
      {
        "id": 2,
        "slug": "tvshow-2",
        "title": "In the Dark",
        "type": "Scripted",
        "language": "English",
        "year": 2009,
        "contentRating": "16+",
        "duration": 164,
        "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 3,
        "slug": "tvshow-3",
        "title": "Instinct",
        "type": "Adventure",
        "language": "English",
        "year": 2002,
        "contentRating": "16+",
        "duration": 137,
        "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 4,
        "slug": "tvshow-4",
        "title": "Grand Hotel",
        "type": "Comedy",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 163,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 5,
        "slug": "tvshow-5",
        "title": "Stargate Atlantis",
        "type": "Scripted",
        "language": "English",
        "year": 2014,
        "contentRating": "16+",
        "duration": 194,
        "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 6,
        "slug": "tvshow-6",
        "title": "Final Space",
        "type": "Scripted",
        "language": "English",
        "year": 2017,
        "contentRating": "16+",
        "duration": 124,
        "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 7,
        "slug": "tvshow-7",
        "title": "The InBetween",
        "type": "Drama",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 179,
        "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      }
    ],
    "originals": [
      {
        "id": 8,
        "slug": "tvshow-8",
        "title": "Stargate Atlantis",
        "type": "Action",
        "language": "English",
        "year": 2012,
        "contentRating": "16+",
        "duration": 148,
        "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 9,
        "slug": "tvshow-9",
        "title": "Alien Highway",
        "type": "Action",
        "language": "English",
        "year": 2019,
        "contentRating": "16+",
        "duration": 128,
        "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 10,
        "slug": "tvshow-10",
        "title": "Elementary",
        "type": "Animation",
        "language": "English",
        "year": 2011,
        "contentRating": "16+",
        "duration": 346,
        "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 11,
        "slug": "tvshow-11",
        "title": "Strange Angel",
        "type": "War",
        "language": "English",
        "year": 2015,
        "contentRating": "16+",
        "duration": 226,
        "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 12,
        "slug": "tvshow-12",
        "title": "Private Eyes",
        "type": "Comedy",
        "language": "English",
        "year": 2018,
        "contentRating": "16+",
        "duration": 190,
        "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      },
      {
        "id": 13,
        "slug": "tvshow-13",
        "title": "NCIS: Los Angeles",
        "type": "Drama",
        "language": "English",
        "year": 2010,
        "contentRating": "16+",
        "duration": 160,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://www.youtube.com/embed/tgbNymZ7vqY"
      }
    ]

}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('app')
);