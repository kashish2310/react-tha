const EMAIL='EMAIL';
const NAME= 'NAME';
export const printVal=(message)=>({
    type: EMAIL,
    message,
});
export const printVal2=(message)=>({
    type: NAME,
    message,
});
