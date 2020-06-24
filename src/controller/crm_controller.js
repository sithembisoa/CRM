import mongoose from 'mongoose';
import { ContactSchema } from '../model/crm_model';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err,contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err,contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    })
}

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err,contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, {new: true, useFindAndModify: false}, (err,contact) => {
        if(err){
            res.send(err);
        }else{
            res.json(contact);
        }
    })
}

export const deleteContact = (req, res) => {
    Contact.deleteOne({_id: req.params.contactID}, (err,contact) => {
        if(err){
            res.send(err);
        }else{
            res.json({message: "Successfully deleted contact!"});
        }
    })
}