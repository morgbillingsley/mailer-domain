# Dylate Mailer Business Logic

This is the main business logic for the Dylate Mailer - a platform that uses the AWS Simple Email Service to send bulk email. This is the entity layer for the Dylate Mailer project. *See [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) for more info*.

## Usage

To get started using the dylate mailer business logic, simply import the entities.

```js
const { createList } = require('@dylate/mailer-domain');
const check = require('@dylate/mailer-domain/utilities/check');

const list = createList({ id: 1, check });
list.name = "Main List";

```

## Api

Here are a list of the entities and their corresponding documentation.

### List

The list entity represents a list of subscribers that can be contacted with the mailer.

1. Fields
    - id <string>
    - name <string>

2. Dependencies
    - id <string>: A cuid string representing the row in the database
    - check <object>: An object with functions to validate whether or not a variable matches a certain type. *Default object can be found in the `utilites` directory*

### Broadcast

The broadcast entity represents the broadcast email that can be sent to the list of subscribers.

1. Fields
    - id <string>
    - name <string>
    - listId <string>
    - template <object>
    - templateData <object>

2. Dependencies
    - id <string>: A cuid string representing the row in the database
    - sesv2 <class>: An AWS Simple Email Service client with working credentials.
    - check <object>: An object with functions to validate whether or not a variable matches a certain type. *Default object can be found in the `utilites` directory*

### Subscriber

The subscriber entity represents a person who is a member of one or more of the given lists.

1. Fields
    - id <string>
    - email <string>
    - firstName <string>
    - lastName <string>
    - phone <string>

2. Dependencies
    - id <string>: A cuid string representing the row in the database
    - check <object>: An object with functions to validate whether or not a variable matches a certain type. *Default object can be found in the `utilites` directory*