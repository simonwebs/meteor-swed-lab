/* eslint-disable no-console */
import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './ContactsCollection';

Meteor.publish('allContacts', function publishAllContacts() {
  return ContactsCollection.find();
});

Meteor.publish('contacts', function publishContacts() {
  const contacts = ContactsCollection.find(
    { archived: { $ne: true } },
    {
      fields: {
        // @ts-ignore
        createdAt: false,
    } }
  );
  console.log(contacts);
  return contacts;
});
