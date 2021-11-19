import React from 'react';
import {useState , useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './listFollowers.css';
import DeleteFollowers from './deleteFollowers';
import Header from './header.js';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ListFollowers = () => {
    const [list , setList] = useState([]);
    const [tempList , setTempList] = useState([]);
    const [checkedItem , setCheckedItem] = useState([]);
    
    const deleteFollower = (e) =>{
        const ind = Number(e.target.id);
        const followers = tempList.filter((currVal , index)=>{
            return ind !== index;
        })
        setTempList(followers);
    }

    const handleCheckboxClick = (e) =>{
        let currentElement = Number(e.target.id);
        let checkedElement = [];
        checkedElement = [...checkedItem];
        if(e.target.checked){
            checkedElement.push(currentElement);
            setCheckedItem(checkedElement);
        
        }else {
            checkedElement.splice(checkedElement.indexOf(currentElement),1);
            setCheckedItem(checkedElement);
        
        }
    }

    useEffect(() => {
        const url = "https://api.github.com/users/octocat/followers";

        fetch(url)
        .then(res => res.json())
        .then((data) =>{
            setList(data);
            setTempList(data);
            
        })
        
    },[])

    return (
        
        <div className="list-followers">
                <Header list={list} tempList = {tempList} setTempList={setTempList} setlist={setList}/>
                {
                    tempList.map((currElement,index) =>{
                        return(
                            <>
                                <div className="wrapper" key={index}>
                                    <div className="checkbox">
                                        <Checkbox {...label} id={currElement.id} onClick={handleCheckboxClick}/>
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
                
                <div className="footer-btn">
                     <DeleteFollowers list={tempList} checkedElement={checkedItem} listSetter={setTempList}/>
                     
                </div>
                    
                
                    
                
                
                
        </div>
    )
}

export default ListFollowers;
