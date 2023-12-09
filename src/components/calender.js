import React, { useEffect, useState } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIYVRpR2Nbe05zflVOal5WVBYiSV9jS31SdEVrWHpeeHZdT2VfUQ==');

const Calendar = () => {
    const [bookingData, setBookingData] = useState([]);

    const getBookingDataFromLocalStorage = () => {
        let arr = localStorage.getItem('AppointmentList');
        if (arr) {
            setBookingData(JSON.parse(arr));
        }
    };

    useEffect(() => {
		getBookingDataFromLocalStorage();
		// console.log('Booking Data:', bookingData);
	}, []);
	 // Run only once on component mount

    const localData: EventSettingsModel = {
        dataSource: bookingData.map(booking => ({
            Id: booking.id, // If you have an ID for each appointment
            Subject: `${booking.firstName} ${booking.lastName}`,
            Location: booking.location,
            StartTime: new Date(booking.datetime),
            EndTime: new Date(new Date(booking.datetime).getTime() + 60 * 60 * 1000) ,  // adding one hour to the start time

        })),
    };

    return (
        <ScheduleComponent currentView='Month' eventSettings={localData}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    );
}

export default Calendar;
