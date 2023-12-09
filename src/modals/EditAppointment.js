import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [datetime, setDatetime] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "firstName"){
            setfirstName(value)
        }
        else if(name === "lastName"){
            setLastName(value)
        }
        else if(name === "location"){
            setLocation(value)
        }
        else if(name === "datetime"){
            setDatetime(value)
        }
        console.log(taskObj)
    }

    useEffect(() => {
        setfirstName(taskObj.firstName)
        setLastName(taskObj.lastName)
        setLocation(taskObj.location)
        setDatetime(taskObj.datetime)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !location || !datetime) {
            alert('Please fill in all required fields');
            return;
        }
        let tempObj = {}
        tempObj['firstName'] = firstName
        tempObj['lastName'] = lastName
        tempObj['location'] = location
        tempObj['datetime'] = datetime
        updateTask(tempObj)
        alert("Appointment Updated")
    }

    return (
        <>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Appointment</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>First Name</label>
                        <input type="text" className = "form-control" value = {firstName} onChange = {handleChange} name = "firstName" required/>
                        <label>Last Name</label>
                        <input type="text" className = "form-control" value = {lastName} onChange = {handleChange} name = "lastName" required/>
                    </div>
                    <div className = "form-group">
                        <label>Location</label>
                        <input type="text" className = "form-control" value = {location} onChange = {handleChange} name = "location" required/>
                    </div>
                    <div className = "form-group">
                        <label>Date-Time</label>
                        <input type="datetime-local" className = "form-control" value = {datetime} onChange = {handleChange} name = "datetime" />
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
      </>
    );
};

export default EditTaskPopup;