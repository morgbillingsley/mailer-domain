import List from '../list/List';

class Broadcast {
    private _id: string;
    private _name: string;
    private _list: List;
    private _template: string;
    private _templateData: object;
    
    public get id() : string {
        return this._id;
    }
    
    public set id(id : string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }
    
    public set name(name : string) {
        this._name = name;
    }
    
    public get list() : List {
        return this._list;
    }

    public set list(list : List) {
        this._list = list;
    }
    
    public get template() : string {
        return this._template;
    }
    
    public set template(template : string) {
        this._template = template;
    }
    
    public get templateData() : object {
        return this._templateData;
    }
    
    public set templateData(templateData : object) {
        this._templateData = templateData;
    }
}

export default Broadcast;