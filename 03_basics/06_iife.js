console.log("Immediately invoked Function Expression")
// They are used to execute a function immediately, Avoiding Global Scope Pollution, Creating Private Data and Running Asynchronous Code

function Movie(){
    console.log("BumbleBee")
 }
Movie();//there must be a semicolumn as to tell to stop its context in order to let any IIFE function run OR just simply start the IIFE function with a semicolumn

//An IIFE Function
//()()//(Function Definition)(Function Execution)

//Named IIFE
(function movie(){
    console.log("Transformers")
 })();


//Simple IIFE
;( () =>{
    console.log("Optimus Prime")
} )()


;( (name) =>{
    console.log(name)
} )("Autobots")