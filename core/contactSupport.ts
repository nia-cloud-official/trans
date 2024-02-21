const $EMAIL = "milton@odyssey.co.zw";
const mailing:string = 'mailto:';

const contact = () => { 
   const message = prompt('Please Enter your email at the bottom and we will be in touch with you!');
   document.open(mailing+$EMAIL+ ' ' + message);
   
}

