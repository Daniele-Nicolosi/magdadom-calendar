/* .config.js, which contains the Firebase configuration and initialization code
   This file is responsible for setting up the connection to the Firebase database
   It exports the initialized database instance for use in other parts of the application */
import { db } from "./config";

/* Import necessary functions from the Firebase Firestore library
   These functions allow us to interact with the Firestore database, such as adding, retrieving, and deleting documents */
import {
    collection, 
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    where,
} from "firebase/firestore";

/* Define an asynchronous function to retrieve bookings for a specific house from the Firestore database
   The function takes a houseId as an argument and returns an array of booking objects that match the specified houseId */
export async function getBookings(houseId) {
    // "collection(db, "bookings")" creates a reference to the "bookings" collection in the Firestore database
    const q = query(collection(db, "bookings"), where("houseId", "==", houseId)); // Create a query to fetch documents from the "bookings" collection 

    // "await" is used to wait for the asynchronous operation of fetching documents from Firestore to complete
    // "await" can only be used inside an async function, and it allows the code to pause until the promise is resolved
    // "getDocs(q)" executes the query and returns a snapshot of the matching documents
    const snapshot = await getDocs(q);

    // "snapshot.docs" is an array of document snapshots that match the query
    // "map" is used to iterate over each document snapshot and create a new array of booking objects
    // "d.id" gets the ID of the document, and "d.data()" gets the data of the document as an object
    return snapshot.docs.map((d) => ({id: d.id, ...d.data() }));
}

/* Define an asynchronous function to add a new booking to the Firestore database
   The function takes a booking object as an argument and adds it to the "bookings" collection in the database
   If "bookings" collection does not exist, it will be created automatically by Firestore */
export async function addBooking(booking) {
    await addDoc(collection(db, "bookings"), booking);
}

/* Define an asynchronous function to delete a booking from the Firestore database
   The function takes a booking ID as an argument and deletes the corresponding document from the "bookings" collection */
export async function deleteBooking(id) {
    await deleteDoc(doc(db, "bookings", id));
}
