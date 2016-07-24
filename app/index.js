
import Greeter from "./modules/Greeter"
import cats from "./modules/cats"


console.log(cats)

setTimeout(() => console.log(`timeout!`), 1000)

let hello=new Greeter('You')