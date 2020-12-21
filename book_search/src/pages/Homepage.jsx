import React, { useState } from 'react';
import { useGlobalContext } from '../utils/GlobalContext';

const Homepage = () => {
    // const [state, dispatch] = useGlobalContext();
    // const [searchBooks, setBook] = useState('');

    // useEffect(() => {
    //     async function fetchBooks() {
    //         console.log('hit fetchBooks');
    //         try {
    //             const response = await fetch('/api/search');
    //             const data = await response.json();
    //             console.log({ data });

    //             dispatch({ type: ""})
    //         } catch (err) {
    //           console.log({ err });
    //         }
    //     }

    //     fetchBooks();
    // ),  []);

    return (
        <h1>Hello</h1>
    );
     };

export default Homepage;