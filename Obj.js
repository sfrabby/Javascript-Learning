const mobileModel = {
    brand : 'symphony',
    Model : 'Innova 30',
    Price : 12500,
    Camera : ['45MP', '33'],
    'Selfi Camera' : '25Mp',
    hasTelePhoto : true,
    mm : function(){
       return `This is mobile ${this.brand}` 
    },
    Battry : {
        mah : 4000,
    }
}

console.log(mobileModel.mm());
console.log(mobileModel.Camera);


Obj1 = {
    a : 1,
    b : 2, 
    c : 3
}

Obj2 = {
    x : 1,
    y : 2, 
    z : 3
}

Obj3 = {
    p : 1,
    q : 2, 
    r : 3
}

finalObj = {...Obj1, ...Obj2, ...Obj3}
//finalObj = Object.assign({}, Obj1, Obj2, Obj3)
console.log(finalObj);
console.log(mobileModel.Battry.mah);

