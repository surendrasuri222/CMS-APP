// import React from 'react';

// const Page = ({ title, description, category, director }) => {
//     return (
//         <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded ">
//             <div className="row ps-5 pe-5 ">
//                 <div className="col">
//                     <h2>Title: {title}</h2>
//                 </div>
//             </div>
//             <div className="row ps-5 pe-5 pt-2">
//                 <div className="col">
//                     <p>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam doloremque vel sint numquam consequuntur dolorum atque aut eligendi inventore tempora asperiores labore ratione ut, perferendis ullam pariatur a quisquam est obcaecati. Amet doloribus ratione accusantium. Dolorum ad mollitia culpa nobis reprehenderit eius, magni, voluptate aliquam a minus ducimus adipisci numquam.</p>
//                 </div>
//             </div>
//             <div className='d-flex justify-content-between pt-2'>
//                 <div className=" row ps-5 pe-5 p-2">
//                     <div className="col  ">
//                         <p>Category: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nostrum.</p>
//                     </div>
//                 </div>
//                 <div className="row  ps-5 pe-5 pt-2">
//                     <div className="col ">
//                         <p>Director: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, nobis?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;


import { useState, useEffect } from "react";
import { getOnePage } from "../apiService/pageApiService";
import { useParams } from "react-router-dom";

const Page = () => {
    const [page, setPage] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const fetchPage = async () => {

            try {
                const response = await getOnePage(id);

                setPage(response);
            }
            catch (error) {
                console.log('Error fetching Book', error.message);
            }
        };

        fetchPage();
    }, [id]);

    return (
        <>
            <div className="container">
                <h2>Page Details</h2>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{page.PageTitle}</h2>
                        <p className="card-text"><strong>Director:</strong> {page.author}</p>
                        <p className="card-text"><strong>Category:</strong> {page.category}</p>
                        <p className="card-text"><strong>Description:</strong> {page.description}</p>

                    </div>
                </div>
            </div>
        </>


    );
}

export default Page;