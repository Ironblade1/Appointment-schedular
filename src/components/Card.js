import React, {useState} from 'react';
import EditTask from '../modals/EditAppointment'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "12px", "fontSize":"20px", "fontFamily": "cursive", "color": "darkblue", "textAlign": "center", "fontWeight": "bold"}} >{taskObj.firstName} {taskObj.lastName}</span>
                <p className = "mt-1"> <strong>Location: </strong> {taskObj.location}</p>
                <p className = "mt-1"> <b>Date: </b>{taskObj.datetime}</p>


                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;