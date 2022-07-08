export class Alert {
    id: string = "";
    message: string = "";
    autoClose: boolean = false;
    fade: boolean = true;
    alertType: string = "";

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}