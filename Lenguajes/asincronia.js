function hacerAsyc(t, callback) {
    setTimeout(()=>{
        let user = 'Pepe'
        callback(user)
    }, t)
}

/* function render(data) {
    console.log(`Hola ${data}`)
}

hacerAsyc(1000, render) */

hacerAsyc(1000, (data) => {
    console.log(`Hola ${data}`)
})

hacerAsyc(1100, (data) => {
    console.log(`Adios ${data}`)
})