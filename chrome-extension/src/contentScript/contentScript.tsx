import "./contentScript.css";
import ReactDOM from 'react-dom';
import App from "./App";
import "../index.css"



const executionOfContent_script_Linkedin:any=():void=>{
const divScript = document.createElement('div');
console.log("I am inside execution content script");
divScript.className = "content_modal_script"
let scriptBefore = document.body.children;
console.log(scriptBefore)

let scriptBeforeAll = scriptBefore[document.body.children.length - 3]
document.body.insertBefore(divScript, scriptBeforeAll)

const rootElement = document.getElementsByClassName('content_modal_script')[0];
console.log("rootElement in react js");
console.log(rootElement);
if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}

}


setTimeout(() => {
    console.log("Content-script modeling");

    // Check if not on the login page of LinkedIn Sales Navigator
    if (location.href !== "https://www.linkedin.com/sales/login") {
        // Function to execute LinkedIn-specific content script
        executionOfContent_script_Linkedin();
        console.log("Execution script is execute this is new url");

    }
}, 4000); // Adjust delay time (4000 milliseconds) as needed



