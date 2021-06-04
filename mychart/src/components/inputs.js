import React, { useState } from 'react';

function Inputs() {
    const [inputData, setType] = useState(0)
    const [add, setAdd] = useState(false)
    
    //getSelected takes the value of the type selected by the user
    function getSelect(val) {
        var gSval = val.target.value;
        setType(gSval)
        setAdd(false)
        console.warn(add)
        
    }
    //showSelected shows the form acordingly to the selected type inputed by the user
    function ShowSelected() {
        if(inputData === "start"){
            return(
                <form id="inputTextstart">
                    <label>Timestamp</label>
                    <input placeholder="type time" />
    
    
                </form>
            )  
        }
        if(inputData === "span"){
            return(
                <form id="inputTextspan">
                    <label>Timestamp</label>
                    <input placeholder="type time" />
                    <label>Begin</label>
                    <input placeholder="type time to begin chart" />
                    <label>End</label>
                    <input placeholder="type time to end chart" />
    
                </form>
            )  
        }
        if(inputData === "data"){
            return(
                <form id="inputTextdata">
                    <label>Timestamp</label>
                    <input placeholder="type time" />
                    <label>OS</label>
                    <input placeholder="type OS" />
                    <label>Browser</label>
                    <input placeholder="type Browser" />    
    
                </form>
            )  
        }
        if(inputData === "stop"){
            return(
                <form id="inputTextstop">
                    <label>Timestamp</label>
                    <input placeholder="type final time" />
                </form>
            )  
        }
        return(
            <div></div>
        )
       
    }

    
    return (
        <div>
            <select defaultValue="none" onChange={getSelect}>
                <option value="none" disabled></option>
                <option value="start" >Start</option>
                <option value="span" >Span</option>
                <option value="data" >Data</option>
                <option value="stop" >Stop</option>
            </select>
            <button onClick={() => setAdd(true)} >Add</button>
            <div>
                <ShowSelected />
            </div>
        </div>
    )
} 

export default Inputs