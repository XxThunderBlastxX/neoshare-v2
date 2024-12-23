import PocketBase from "pocketbase";
import Client from "pocketbase";

export class PocketBaseInstance {
    public static _instance: PocketBase;

    public static get instance() : Client {
        if (!PocketBaseInstance._instance) {
            PocketBaseInstance._instance = new PocketBase('http://localhost:8090');
        }
        return PocketBaseInstance._instance;
    }
}
