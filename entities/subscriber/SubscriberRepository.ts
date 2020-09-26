import type Subscriber from "./Subscriber";

interface SubscriberRepository {
    findOne(id: string): null | Subscriber;
    findOneBy(fields: object): null | Subscriber;
    findAll(): Array<Subscriber>;
    findBy(fields: object): Array<Subscriber>;
    findByListId(id: string): Array<Subscriber>;
    insert(subscriber: Subscriber): void;
    delete(subscriber: Subscriber): void;
    update(subscriber: Subscriber): void;
}

export default SubscriberRepository;