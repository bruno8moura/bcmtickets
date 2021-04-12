export const getTime = (expirationWindowSeconds: number) => {
    const now = new Date();
    const rightousTime = new Date(now.getTimezoneOffset() > 0 ? now.setHours(now.getHours() - (now.getTimezoneOffset() / 60)) : now.setHours(now.getHours() + (now.getTimezoneOffset() / 60)));
    const result = new Date(rightousTime.setSeconds(rightousTime.getSeconds() + expirationWindowSeconds));
    
    return result;
};
