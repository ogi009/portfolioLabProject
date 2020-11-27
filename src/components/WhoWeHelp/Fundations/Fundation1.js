import React, {useState} from 'react';
import '../../../scss/_whowehelp.scss';
import './_foundation.scss';
import Pagination from "../../Pagination/Pagination";

const Fundation1 = () => {

    const foundations = [
        {
            id: 1,
            name : "Fundacja “Dbam o Zdrowie”",
            purpose: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            id: 2,
            name : "Fundacja “Dla dzieci”",
            purpose: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            id: 3,
            name : "Fundacja “Bez domu”",
            purpose: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            need: "ubrania, jedzenie, ciepłe koce"
        },
        {
            id: 4,
            name : "Fundacja “Dbam o Konie”",
            purpose: "Cel i misja: Pomoc koniom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble"
        },
        {
            id: 5,
            name : "Fundacja “Dla Pandy”",
            purpose: "Cel i misja: Pomoc pandom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            id: 6,
            name : "Fundacja “Bez Samochodu”",
            purpose: "Cel i misja: Pomoc dla osób nie posiadających samochodu.",
            need: "kierownica, fotele, ciepłe koce",
        }
    ]
    const [currentPage, setCurrenPage] = useState(1);
    const [postPerPage] = useState(3);


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = foundations.slice(indexOfFirstPost, indexOfLastPost);

    const paginate =(pageNumber) => {
        setCurrenPage(pageNumber)
    }

    return (
        <>
            {currentPosts.map(foundations => (
                <div className="organization_container organization_container1">
                    <div key={foundations.id} className="foundation">
                        <h1>{foundations.name}</h1>
                        <p>{foundations.purpose}</p>
                    </div>
                    <p className="foundation2">{foundations.need}</p>
                </div>
            ))}
            <Pagination postPerPage={postPerPage} totalPost={foundations.length} paginate={paginate} />
        </>

    );
};

export default Fundation1;