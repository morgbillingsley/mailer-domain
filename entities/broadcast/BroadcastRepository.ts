import type Broadcast from './Broadcast';

interface BroadcastRepository {
    findOne(id: string): Promise<null> | Promise<Broadcast>;
    findOneBy(fields: object): Promise<null> | Promise<Broadcast>;
    findAll(): Promise<Broadcast[]>;
    findBy(fields: object): Promise<Broadcast[]>;
    getPage(limit: number, offset: number): Promise<Broadcast[]>;
    insert(broadcast: Broadcast): Promise<any>;
    delete(broadcast: Broadcast): Promise<any>;
    update(broadcast: Broadcast): Promise<any>;
    countAll(): Promise<number>;
    countBy(fields: object): Promise<number>;
}

export default BroadcastRepository;