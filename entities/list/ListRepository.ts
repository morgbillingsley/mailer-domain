import type Subscriber from "../subscriber/Subscriber";
import type List from "./List";

interface ListRepository {
    findOne(id: string): Promise<null> | Promise<List>;
    findOneBy(fields: object): Promise<null> | Promise<List>;
    findAll(): Array<List>;
    findBy(fields: object): Promise<List[]>;
    getPage(limit: number, offset: number): Promise<List[]>;
    insert(list: List): Promise<any>;
    delete(list: List): Promise<any>;
    update(list: List): Promise<any>;
    countAll(): Promise<number>;
    countBy(fields: object): Promise<number>;
    addSubscriber(listId: string, subscriber: Subscriber): Promise<any>;
    removeSubscriber(listId: string, subscriber: Subscriber): Promise<any>;
    countSubscribers(listId: string): Promise<number>;
}

export default ListRepository;