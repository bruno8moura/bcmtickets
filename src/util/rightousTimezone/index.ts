const configDateToLocalTimezone = (date: Date): Date => {
    const timezoneLocalTime = date.getTimezoneOffset() > 0 ? date.setHours(date.getHours() - (date.getTimezoneOffset() / 60)) : date.setHours(date.getHours() + (date.getTimezoneOffset() / 60));
    date.setTime(timezoneLocalTime);
    return date;    
};

export const getTimeWithLocalTimezone = (expirationWindowSeconds=0) => {
    const now = new Date();
    configDateToLocalTimezone(now);
    now.setSeconds(now.getSeconds() + expirationWindowSeconds);
        
    return now;
};
