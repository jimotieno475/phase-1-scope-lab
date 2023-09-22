
window.customerName="bob";
window.bestCustomer;

function upperCaseCustomerName() {
    window.customerName=window.customerName.toUpperCase();
}
function setBestCustomer() {
     window.bestCustomer = 'not bob';
      
}

function overwriteBestCustomer(newBestCustomer) {
    
        window.bestCustomer=newBestCustomer
        
}
const leastFavoriteCustomer = "jim";

function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer;
    changeLeastFavoriteCustomer= "tom";
}
