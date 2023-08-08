import { Sorter } from "../Sorter";
import { numbersCollection } from "../NumberCollection";

const numberCollection = new numbersCollection([3, 4, 5, 6]);
const sorter = new Sorter(numberCollection);
sorter.sort();
