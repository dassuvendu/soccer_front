import React from 'react'

export const useHomeTimeHook = (time) => {
    let matchTimeList = [];

    // Get time
    let hours = parseInt(time?.toString()?.split(':')[0]);
    let minutes = parseInt(time?.toString()?.split(':')[1]);

    // Handling AM/PM designation
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Convert 0 to 12 for 12-hour format

    // Zero-padding minutes
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedTime = hours + ":" + minutes + " " + ampm;
    matchTimeList.push({
        label: formattedTime,
    });

    // Return the matchTimeList array
    return matchTimeList;
}
