// function Hello(){
//     return <h1>hwllo world</h1>
// }
const name="someone";

const displayM= () =>{ 
    return "hello {name}"
}
const Hello =() =><h1>hello world{displayM()}</h1>

export default Hello;