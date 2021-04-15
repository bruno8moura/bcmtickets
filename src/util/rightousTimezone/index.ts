export const getTime = (expirationWindowSeconds: number) => {
    const now = new Date();
    const timezoneLocalTime = now.getTimezoneOffset() > 0 ? now.setHours(now.getHours() - (now.getTimezoneOffset() / 60)) : now.setHours(now.getHours() + (now.getTimezoneOffset() / 60));
    now.setTime(timezoneLocalTime);
    now.setSeconds(now.getSeconds() + expirationWindowSeconds);
        
    return now;
};
