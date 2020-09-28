import type Subscriber from "./Subscriber";

interface SubscriberRepository {
    findOne(id: string): Promise<null> | Promise<Subscriber>;
    findOneBy(fields: object): Promise<null> | Promise<Subscriber>;
    findAll(): Promise<Subscriber[]>;
    findBy(fields: object): Promise<Subscriber[]>;
    findByListId(id: string): Promise<Subscriber[]>;
    getPage(limit: number, offset: number): Promise<Subscriber[]>;
    insert(subscriber: Subscriber): Promise<any>;
    delete(subscriber: Subscriber): Promise<any>;
    update(subscriber: Subscriber): Promise<any>;
    countAll(): Promise<number>;
    countBy(fields: object): Promise<number>;
}

export default SubscriberRepository;