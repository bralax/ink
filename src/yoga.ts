import { loadYoga, Yoga } from "yoga-layout/load";

let yoga: Yoga | undefined = undefined;
const loadYogaPromise = loadYoga().then((val) => {yoga = val});

export function waitForLoad() {
    return loadYogaPromise;
}

export function getYoga() {
    return yoga;
}