import { Observer } from "./observer-subcriber";

export interface Subject {
    registerObserver(observer: Observer): void;
    removeOserver(observer: Observer): void;
    notifyObservers(): void;
}

