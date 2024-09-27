async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b406837d-8153-479e-923a-37911aa28a05&offset=0")
      .then(data => data.json())
      .then(data =>{
             
        if(data.status!="success") return;
        const matcheList = data.data;

        if(!matcheList) return [];

        const relevantData = matcheList.map(match => `${match.name}, ${match.status}`)

        console.log({relevantData})

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join(' ');

        return relevantData
      })
      .catch(e => console.log(e));
}

getMatchData()