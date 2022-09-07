
    function energyCalculator(event){
        event.preventDefault();
        const inputsteps = document.querySelector('#steps').value;
        const inputlevel = document.querySelector('#level').value;
    
        let totalSteps = Number(inputsteps);
        let level = Number(inputlevel);
    
        let SER = 1 + (0.05 * (level - 1))
    
        let SEF = (6 - (SER - 1)) / 100;
    
        let energyRequired = 0;
    
        let cal = Math.floor(totalSteps / 1000)

      
        
        let fun1 = ()=>{

            for(let i = 1; i <= cal; i++){ 
                let a = 1000 * (Math.pow((1 - SEF), i - 1))
                energyRequired = energyRequired + a
            
            }
        }
       
        let fun2 = ()=>{
            let i = cal + 1
            let a = totalSteps % 1000 * (Math.pow((1 - SEF), i - 1))
            energyRequired  = energyRequired + a
           
      
        }
        fun1()
        fun2()
    
       
    
        let finalEnergy = Math.round(energyRequired)


        let day7 =  (finalEnergy * 0.0095).toFixed(2);
        let day10 =  (finalEnergy * 0.0143).toFixed(2);
        let day14 =  (finalEnergy * 0.02).toFixed(2);

         document.querySelector('#totalenergy').innerHTML = finalEnergy

        document.querySelector('#days7').innerHTML = day7
        document.querySelector('#days10').innerHTML = day10
        document.querySelector('#days14').innerHTML = day14

        const tableDisplay  =  document.querySelector('.table')

        tableDisplay.style.display="table"






    }


    const solPrice = ()=>{
        
        fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT')
        .then((response) => response.json())
      
        .then((data) => {

            document.querySelector('#solPrice').innerHTML =Number(data.price).toFixed(2)

        })
        //Then with the error genereted...
        .catch((error) => {
          console.error('Error:', error);
        });

       }


       const kiPrice = ()=>{
        fetch('https://api.solscan.io/amm/read?address=DZiV1HEnLE8hU16Xs1cjThAY2twAke4QSpJpHgNwpd3h&cluster=')
        .then((response) => response.json())
      
        .then((data) => {

            document.querySelector('#kiPrice').innerHTML =Number(data.data.price).toFixed(2)

        })
        //Then with the error genereted...
        .catch((error) => {
          console.error('Error:', error);
        });
        
    }


    const genoPrice = ()=>{
        fetch('https://api.solscan.io/account?address=GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz&cluster=')
        .then((response) => response.json())
      
        .then((data) => {

            document.querySelector('#genePrice').innerHTML =Number(data.data.tokenInfo.price).toFixed(2)
        })
        //Then with the error genereted...
        .catch((error) => {
          console.error('Error:', error);
        });
        
    }
       


    




    setInterval(function () {


    solPrice()
    kiPrice()
    genoPrice()


    }, 5000);