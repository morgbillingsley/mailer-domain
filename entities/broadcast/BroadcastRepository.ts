import type Broadcast from './Broadcast';

interface BroadcastRepository {
    findOne(id: string): null | Broadcast;
    findOneBy(fields: object): null | Broadcast;
    findAll(): Array<Broadcast>;
    findBy(fields: object): Array<Broadcast>;
    insert(broadcast: Broadcast): void;
    delete(broadcast: Broadcast): void;
    update(broadcast: Broadcast): void;
}

export default BroadcastRepository;