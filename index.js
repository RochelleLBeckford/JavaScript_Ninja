import Ninja from "./1_ninja.js";


// now to instantiate this class -> got an error 1st since I did not have json package file in this folder

const ninja1 = new Ninja('Hinata', '1000HP');

// call on methods to see
// dot notation 
            // () to invoke the method
ninja1.sayName();
ninja1.showStats();

