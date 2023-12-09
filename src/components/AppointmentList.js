import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/booking'
import Card from './Card';

const AppointmentList = () => {
    const [modal, setModal] = useState(false);
    const [AppointmentList, setAppointmentList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("AppointmentList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setAppointmentList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = AppointmentList
        tempList.splice(index, 1)
        localStorage.setItem("AppointmentList", JSON.stringify(tempList))
        setAppointmentList(tempList)
        window.location.reload()
        alert("Appointment Deleted")
    }

    const updateListArray = (obj, index) => {
        let tempList = AppointmentList
        tempList[index] = obj
        localStorage.setItem("AppointmentList", JSON.stringify(tempList))
        setAppointmentList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = AppointmentList
        tempList.push(taskObj)
        localStorage.setItem("AppointmentList", JSON.stringify(tempList))
        setAppointmentList(AppointmentList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Appointments List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Book Appointment</button>
            </div>
            <div className = "task-container">
                {AppointmentList && AppointmentList.length === 0 ? <h2>No Appointments</h2> : null}
                {AppointmentList && AppointmentList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default AppointmentList;