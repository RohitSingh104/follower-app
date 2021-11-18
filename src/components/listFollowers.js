import React from 'react';
import {useState , useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './listFollowers.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ListFollowers = () => {
    const [list , setList] = useState([]);
    
    
    const deleteFollower = (e) =>{
        const ind = Number(e.target.id);
        const followers = list.filter((currVal , index)=>{
            return ind !== index;
        })
        setList(followers);
    }

    const getId = (e) =>{
        console.log(e.target);
    }

    useEffect(() => {
        const url = "https://api.github.com/users/octocat/followers";

        fetch(url)
        .then(res => res.json())
        .then((data) =>{
            setList(data);
            
        })
        
    },[])

    return (
        <div className="list-followers">
            
                {
                    list.map((currElement,index) =>{
                        return(
                            <>
                            <div className="wrapper">
                                <div className="checkbox">
                                    <Checkbox {...label} onClick={getId}/>
                                </div>
                                <div className="avatar">
                                    <Avatar alt="Travis Howard" src={currElement.avatar_url} />   
                                </div>
                                <div className="name" key={index} >
                                    {currElement.login}
                                </div>
                                <div className="delete-btn">
                                    <Button variant="contained" color="error" id={index} onClick={deleteFollower}>
                                        Delete
                                    </Button>
                                </div>
                                
                            </div>
                            <div className="divider">
                                <Divider component="" />
                            </div>

                            </>
                             
                            
                            
                        )
                        

                    })
                    
                }
                
        </div>
    )
}

export default ListFollowers;
