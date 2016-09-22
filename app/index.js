import User from "./model/user"
import { up } from './util/text'

setTimeout(() => console.log(up('a delayed call')), 1000)

let john=new User('John')
john.hello()