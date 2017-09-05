// Options for the toast
var options = {
    text: "Happy toasting!",
    duration: 2500,
    callback: function () {
        this.remove();
        Toastify.reposition();
    },
    close: true
};

// Initializing the toast
var myToast = Toastify(options);

// Toast after delay
setTimeout(function () {
    myToast.showToast();
}, 3000);

setTimeout(function () {
    Toastify({
        text: "Highly customizable",
        duration: 3000,
        positionTop: true,
        positionLeft: true,
        close: true
    }).showToast();
}, 2000);

Toastify({
    text: "Time to get started!",
    duration: 4500,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    positionTop: true,
    positionLeft: true
}).showToast();

// Displaying toast on manual action `Try`
document.getElementById('new-toast').addEventListener('click', function () {
    Toastify({
        text: "This is a toast",
        duration: 3000
    }).showToast();
});
