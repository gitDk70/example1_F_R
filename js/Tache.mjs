export default class Tache {
    
    static setUsager(usager){
        const api_url = "https://api-nodejs-todolist.herokuapp.com/";

        usager = {
                name: "Jonathan Martel",
                email: "toto1@toto.com",
                password : "123123123",
                age : "103" 
            };
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
        };
          
        //fetch retourne une promesse
        fetch(api_url + "user/register", reqOptions)
            .then(function(reponse) {
                console.log(reponse);
            });
        
          
            
            
    }   

    static logUsager(usager){
        const api_url = "https://api-nodejs-todolist.herokuapp.com/";
        usager = {
            email: "toto1@toto.com",
            password : "123123123",
        };
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        
        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(usager),
            redirect: 'follow'
          };
        fetch(api_url + "user/login", reqOptions)
            .then(function(reponse) {
                console.log(reponse);
            });
    }   

    static delUsager(auth){
        const entete = new Headers();
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'DELETE',
            headers: entete,
            redirect: 'follow'
          };
          
    }   

    static getUsager(auth){
       
    }   

    

    static setTache (tache, auth){
        
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'POST',
            headers: entete,
            body: JSON.stringify(tache),
            redirect: 'follow'
          };
          
    }

    static getListeTache (auth){
        const api_url = "https://api-nodejs-todolist.herokuapp.com/";
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Bearer "+auth);

        const reqOptions = {
            method: 'GET',
            headers: entete,
            redirect: 'follow'
          };
        fetch(api_url + "task", reqOptions)
            .then(function(reponse) {
                console.log(reponse);
            });
    }
}
