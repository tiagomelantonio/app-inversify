export class Customer {

    id: string;
    name: string;
    age: number;

    public isValid(): boolean {
        return this.name !== "" && this.age > 0;
    }
}
