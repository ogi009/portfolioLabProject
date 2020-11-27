import React, {useState} from 'react';
import Pagination from "../../Pagination/Pagination";

const Organization1 = () => {
    const organization = [
        {
            id: 1,
            name: "Organizacja “Lorem Ipsum 1”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 2,
            name: "Organizacja “Lorem Ipsum 2”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 3,
            name: "Organizacja “Lorem Ipsum 3”",
            purpose: "Scelerisque in dictum non consectetur a erat nam.",
            need: "Mi, quis, hendrerit, dolor",
        },
        {
            id: 4,
            name: "Organizacja “Lorem Ipsum 4”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 5,
            name: "Organizacja “Lorem Ipsum 5”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 6,
            name: "Organizacja “Lorem Ipsum 6”",
            purpose: "Scelerisque non consectetur a erat nam.",
            need: "Mi, quis, hendrerit, dolor",
        },
        {
            id: 7,
            name: "Organizacja “Lorem Ipsum 7”",
            purpose: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            need: "Egestas, sed, tempus",
        },
        {
            id: 8,
            name: "Organizacja “Lorem Ipsum 8”",
            purpose: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            need: "Ut, aliquam, purus, sit, amet",
        },
        {
            id: 9,
            name: "Organizacja “Lorem Ipsum 9”",
            purpose: "Scelerisque in dictum a erat nam.",
            need: "Egestas, sed, tempus",
        }
    ]

    const [currentPage, setCurrenPage] = useState(1);
    const [postPerPage] = useState(3);


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = organization.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrenPage(pageNumber)
    }


    return (
        <>
            {currentPosts.map(organization => (
                <div key={organization.id} className="organization_container organization_container1">
                    <div className="foundation">
                        <h1>{organization.name}</h1>
                        <p>{organization.purpose}</p>
                    </div>
                    <p className="foundation2">{organization.need}</p>
                </div>
            ))}
            <Pagination postPerPage={postPerPage} totalPost={organization.length} paginate={paginate}/>
        </>
    );
};

export default Organization1;