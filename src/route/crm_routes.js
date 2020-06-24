import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from '../controller/crm_controller';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Midlleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)
        
        // update a specific contact
        .put(updateContact)

        // delete a specific contact
        .delete(deleteContact)
}

export default routes;