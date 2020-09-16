// console.log("1")
// console.log("2")
// new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve(console.log("3"))
//     }, 1000);
// }).then(()=>{
//     console.log("4")
//     console.log("5")
// })

mgFirstAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        },250);
    })
}

msg = async () => {
    const SuccessMesage = await mgFirstAsync();
    console.log('Yay!',SuccessMesage);
}

msg();