//create variable to hold db connection
let db;
//establish a connection to IndexedDB database called 'po_number_log"
//and set it to version 1
const request = indexedDB.open('po_number_log', 1);

//this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event){
    //save a reference to the database
    const db = event.target.result;
    //create an object store (table) called `new_company`, 
    //set it to have an auto incrementing primary key of sorts
    db.createObjectStore('new_company', {autoIncrement: true});
};

//upon a successful
request.onsuccess = function(event){
    //when db is successfully created with its object store (from onupgradedneeded event above)
    //or simply establishing a connection, save referece to db in global variable.
    db = event.target.result;

    //check if app is online, if yes uploadPizza() function to send all local db data to api
    if (navigator.onLine){
        // not here yet
    }
};

request.onerror = function(event){
    //log error here
    console.log(event.target.errorCode);
};

//This function will be executed if we attempt to submit a new po and there is no internet connection
function saveRecord(record){
    //open a new transaction with the database with read and write permissions
    const transaction = db.transaction(['new_company'], 'readwrite');

    //access the object store for 'new_company'
    const poObjectStore = transaction.objectStore('new_company');

    //add record to your store with add method
    poObjectStore.add(record);
};

function uploadRecord(){
    //open a transaction on your db
    const transaction = db.transaction(['new_company'],'readwrite');

    //access your object store
    const poObjectStore = transaction.objectStore('new_company');

    //get all records from store and set to a variable
    const getAll = poObjectStore.getAll();

    //upon a successful .getAll() execution, run this function
    getAll.onsuccess = function(){
        //if there was data in indexedDB's store, let's send it to the api server
        if(getAll.result.length > 0){    //<-- what if there is more than one!!!!
            fetch('/api/companies',{
                method: 'post',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type':'application/json'
                }
            })
            .then(response => response.json())
            .then(serverResponse =>{
                if(serverResponse.message){
                    throw new Error(serverResponse);
                }
                //open one more transaction
                const transaction = db.transaction(['new_company'],'readwrite');
                //access the new_company object store
                const poObjectStore = transaction.objectStore('new_company');
                //clear all items in your store
                poObjectStore.clear();

                alert('All saved company data has been submitted!');
            })
            .catch(err => {
                console.log(err);
            });
        }
    };
};

//listen for app coming back online
window.addEventListener('online',uploadRecord);