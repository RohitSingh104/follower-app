import { red } from '@mui/material/colors';
import React  from 'react';
import './deleteFollower.css';
const deleteBtnStyle ={
    backgroundColor: 'red',/* Green */
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',

}

const nextBtnStyle = {
    backgroundColor: 'green',/* Green */
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
}


const DeleteFollowers = ({list , checkedElement , listSetter}) => {

    const deleteSelectedElement = () =>{
        const result = list.filter((currElement , index) =>{
            return !checkedElement.includes(currElement.id);
        })
        listSetter(result);
        console.log(list);
    } 
    
    return ( 
       
        <div className="deleteFollower">
            <div>
                <button 
                    onClick={deleteSelectedElement}
                    style={deleteBtnStyle}
                >
                    Delete Selected
                </button>
            </div>
            <div>
                <button 
                    style={nextBtnStyle}
                >
                    Next
                </button>
            </div>
           
            
        </div>
    )
}

export default DeleteFollowers;
