var $EMAIL = "milton@odyssey.co.zw";
var mailing = 'mailto:';
var contact = function () {
    var message = prompt('Please Enter your email at the bottom and we will be in touch with you!');
    document.open(mailing + $EMAIL + ' ' + message);
};
