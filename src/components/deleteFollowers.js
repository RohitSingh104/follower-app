import React  from 'react';
import Button from '@mui/material/Button';

const DeleteFollowers = ({list , checkedElement , listSetter}) => {

    const deleteSelectedElement = () =>{
        const result = list.filter((currElement , index) =>{
            return !checkedElement.includes(currElement.id);
        })
        listSetter(result);
        console.log(list);
    } 
    
    return ( 
       
        <div className="delete-follower">
            <Button variant="contained" color="error"
                sx={{marginTop:5 , marginLeft:20}}
                onClick={deleteSelectedElement}
            >
                Delete Selected
            </Button>
        
            
        </div>
    )
}

export default DeleteFollowers;
