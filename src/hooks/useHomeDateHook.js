import React from 'react'

export const useHomeDateHook = (date) => {
    let timezone = 'UTC'; // Change this to the desired timezone
  
    let options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: timezone,
    };

    // Convert the date string to a JavaScript Date object
    let dateObj = new Date(date);
    
    // Format the date using options
    let formattedDate = dateObj.toLocaleString('en-US', options);

    // Construct matchDateList array
    let matchDateList = [
        { label: formattedDate },
    ];

    // Return the matchDateList array
    return matchDateList;
};