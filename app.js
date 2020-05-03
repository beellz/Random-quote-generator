// trying with api
// base URL 

let urlAll = 'https://type.fit/api/quotes';

// function to call the api
function quotesRequest() {

// async function to call api
    async function API() {

        const response = await fetch(urlAll);
        // putting everything into data

        const data = await response.json();

        // making random number  
        // also using the .lenght to take the lenght of the data dynamically .

        let randomNUMs = Math.floor(Math.random() * data.length )
        console.log(randomNUMs)

        // using random number to call certain api main

        let text = data[randomNUMs].text
        let author = data[randomNUMs].author

        // consoling it to check
        console.log(text);
        console.log(author)

        // making outputall to store data 

        let outputall =  `
                 <ul>
                     <li>" ${text}"</li>
                     <li> - ${author}</li>
                    </ul    
                     `;
        
                     // 
        // putting it all in innerHTML

        document.querySelector(".quote").innerHTML= outputall;
    
    }
    // calling the api function from above without this it will not work . 
    // next time try writing it without the function name . with es6 arrow funciton . 
    
    API();
    // end here
}

// calling the function first time to make it look it automatically started .

quotesRequest();

// end of JS 