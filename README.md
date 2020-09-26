# Dylate Mailer Business Logic

This is the main business logic for the Dylate Mailer - a platform that uses the AWS Simple Email Service to send bulk email. This is the entity layer for the Dylate Mailer project. *See [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) for more info*.

## Usage

To get started using the dylate mailer business logic, simply import the entities.

```ts
import List from '@dylate/mailer-domain/entities/List';

const list = new List();
list.name = "Main List";

```

## Api

Here are a list of the entities and their corresponding documentation.

### List

The list entity represents a list of subscribers that can be contacted with the mailer.

1. Fields
    - id **string**
    - name **string**


### Broadcast

The broadcast entity represents the broadcast email that can be sent to the list of subscribers.

1. Fields
    - id **string**
    - name **string**
    - list **List**
    - template **object**
    - templateData **object**


### Subscriber

The subscriber entity represents a person who is a member of one or more of the given lists.

1. Fields
    - id **string**
    - email **string**
    - firstName **string**
    - lastName **string**
    - phone **string**