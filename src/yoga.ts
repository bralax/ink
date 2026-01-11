import { loadYoga, Yoga } from "yoga-layout/load";

let yoga: Yoga | undefined = undefined;
loadYoga().then((val) => {yoga = val});

export function getYoga() {
    return yoga;
}