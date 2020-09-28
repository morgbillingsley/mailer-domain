import type ListRepository from "./ListRepository";
import type SubscriberRepository from "../subscriber/SubscriberRepository";
import type Subscriber from "../subscriber/Subscriber";

class List {
    private _id: string;
    private _name: string;
    private listRepository: ListRepository;
    private subscriberRepository: SubscriberRepository;

    public constructor(listRepository: ListRepository, subscriberRepository: SubscriberRepository) {
        this.listRepository = listRepository;
        this.subscriberRepository = subscriberRepository;
    }
    
    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get subscribers(): Promise<Subscriber[]> {
        return this.subscriberRepository.findByListId(this._id);
    }
    
    public addSubscriber(subscriber: Subscriber): void {
        this.listRepository.addSubscriber(this._id, subscriber);
    }

    public removeSubscriber(subscriber: Subscriber): void {
        this.listRepository.removeSubscriber(this._id, subscriber);
    }

    public countSubscribers(): Promise<number> {
        return this.listRepository.countSubscribers(this._id);
    }
}

export default List;