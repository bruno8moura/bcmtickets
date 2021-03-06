export const setLocalTimezone = (date: Date): Date => {
    const timezoneLocalTime = date.getTimezoneOffset() > 0 ? date.setHours(date.getHours() - (date.getTimezoneOffset() / 60)) : date.setHours(date.getHours() + (date.getTimezoneOffset() / 60));
    date.setTime(timezoneLocalTime);
    return date;    
};

export const setLocalTimezoneAndSomeTimeInFuture = (now: Date, expirationWindowSeconds=0) => {    
    setLocalTimezone(now);
    now.setSeconds(now.getSeconds() + expirationWindowSeconds);
        
    return now;
};
