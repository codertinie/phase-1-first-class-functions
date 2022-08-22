function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log()
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log();
}