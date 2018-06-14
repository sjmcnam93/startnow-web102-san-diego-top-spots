
$(document).ready(function() {

    $.getJSON("./data.json", {type: "GET"}).done(function(data) {
           
        for (var i = 0; i < data.length; i++) {

            var individualData = data[i];
            var trElement = document.createElement('tr');
            var tdElement = document.createElement('td');
            var tdElement2 = document.createElement('td');
            var tdElement3 = document.createElement('td');
               
            trElement.appendChild(tdElement);
            trElement.appendChild(tdElement2);
            trElement.appendChild(tdElement3);

            tdElement.innerHTML = individualData['name'];
            tdElement2.innerHTML = individualData['description'];
        
            var aHref = document.createElement('a');
            aHref.setAttribute('href', 'https://www.google.com/maps?q=' + individualData.location[0] + ',' + individualData.location[1])

            var locationButton = document.createElement('button');
            aHref.append(locationButton);
            locationButton.textContent = 'Google Maps'
            tdElement3.appendChild(aHref);

            $('tbody').append(trElement);

        };
    });
});
