import type Subscriber from "../subscriber/Subscriber";
import type List from "./List";

interface ListRepository {
    findOne(id: string): null | List;
    findOneBy(fields: object): null | List;
    findAll(): Array<List>;
    findBy(fields: object): Array<List>;
    insert(list: List): void;
    delete(list: List): void;
    update(list: List): void;
    addSubscriber(listId: string, subscriber: Subscriber): void;
    removeSubscriber(listId: string, subscriber: Subscriber): void;
}

export default ListRepository;