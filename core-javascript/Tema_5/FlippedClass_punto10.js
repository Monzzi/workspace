let scope = "global";

function check_scope(){
    let scope = "function_scope";
    function inside () { return scope;}
    return inside;
}
console.log(check_scope()());
console.log(scope);

// loguea:

function_scope
undefined
> console.log(scope);
global
undefined
