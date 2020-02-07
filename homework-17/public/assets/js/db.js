let db;

const request = indexedDB.open("burgerlist", 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore("bugerss", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Error " + event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(["burgers"], "readwrite");
  const store = transaction.objectStore("burgers");

  store.add(record);

}

function isOffline(){
  $("#onlineStatus").attr("src", "images/offline_button.png");
}


function checkDatabase() {
  $("#onlineStatus").attr("src", "images/online_button.png");
  
  const transaction = db.transaction(["guests"], "readwrite");
  const store = transaction.objectStore("guests");
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    //if there are any documents waiting to be online, bulk push
    if (getAll.result.length > 0) {
    
      $.ajax({
        type: "POST",
        url: "/api/burgers/bulk",
        data: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        success: function(msg){
            const transaction = db.transaction(["burgers"], "readwrite");
            const store = transaction.objectStore("burgers");
            store.clear();
            populateTable();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log(getAll.result);
          console.log("Failed to Save DB");
          console.log(XMLHttpRequest, textStatus, errorThrown)
        }
      });
    }
  };

}


// listen for app coming back online
window.addEventListener("online", checkDatabase);

//Trigger some css when offline
window.addEventListener("offline", isOffline, false);
