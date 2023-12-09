import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
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
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !location || !datetime) {
            alert('Please fill in all required fields');
            return;
        }
        let taskObj = {}
        taskObj["firstName"] = firstName
        taskObj["lastName"] = lastName
        taskObj["location"] = location
        taskObj["datetime"] = datetime
        save(taskObj)
        alert("Appointment Created")
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Book Appointments</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>First Name</label>
                        <input type="text" className = "form-control" value = {firstName} onChange = {handleChange} name = "firstName" required="required" />
                        <label>Last Name</label>
                        <input type="text" className = "form-control" value = {lastName} onChange = {handleChange} name = "lastName"  />
                        <label>Location</label>
                        <input type="text" className = "form-control" value = {location} onChange = {handleChange} name = "location"  />
                    </div>
                    <div className = "form-group">
                        <label>Date-Time</label>
                        <input type="datetime-local" className = "form-control" value = {datetime} onChange = {handleChange} name = "datetime"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;