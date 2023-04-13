// alert('how are you');

const showAlert = () =>{
    alert('Dosto, taka ace dar dite parbi just 500 taka')
}

const lendMoney =() =>{
    const result = confirm('Will you lend me 5000 taka?');
    console.log(result)
    if(result === true){
        alert('Tui amar jan er dosto!!!')
    }
    else{
        console.log('DGM......tore ajke block maira dimo')
    }
}

const getInfo = () =>{
    // alert
    // confirm
      const name = prompt('Tell me your name')
      console.log(name);
      if(name === null){
        alert('Nam na dile kam nai !!! ja fooooot.')
      }
      else{
        console.log('Welcome to my world');
        // alert('Welcome to my World')
      }
}
