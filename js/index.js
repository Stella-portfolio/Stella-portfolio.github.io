function fortuneTeller(jobTitle, geoLocation, salary, companyName) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and making $ ' +
   salary + ' ' + ' with ' + companyName;
    console.log(future);
}

fortuneTeller('professor', 'UK', '53,000', Royal College of Art);
fortuneTeller('restaurant owner', 'France', '78,000', french restaurant);
fortuneTeller('golf player', 'Cebu', '358,000', pro);


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }