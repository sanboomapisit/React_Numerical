import React from 'react'
import './paginate.css' 
const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumber = [];
    for(let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage) && i < 9 ;i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul >
                    {pageNumber.map((number)=>{
                        if(number <= 70){
                         return (<li key={number}><button onClick={()=>{paginate(number)}} href='!#' className='page-link'>{number}</button></li>)
                        }
                        return null;
                    }
                    )}
            </ul>
        </nav>
    )
}

export default Pagination
