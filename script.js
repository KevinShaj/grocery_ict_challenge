function ajax(){
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    
        if(this.readyState==4&& this.status==200){
          var response = JSON.parse(this.responseText);
       
        var Jgrocery = response.grocery;
       
        
        var k = '<tbody>'
        for(i = 0; i <1 ; i++){
         k+= '<tr>';
        k+= '<th scope="col">'+"S.No"+ '</th>'
        k+= '<th scope="col">' + " Name" + '</th>'
        k+= '<th scope="col">' + "Quantity" + '</th>'
        k+= '<th scope="col">'+ "Unit" + '</th>'
        k+= '<th scope="col">' + "Department" + '</th>'
        k+= '<th scope="col">' + "Notes" + '</th>'
        k+= '<th scope="col">' + "Checkbox" + '</th>'
       '</tr>'
        }
       for(i = 0;i < Jgrocery.length; i++){
            k+= '<tr>';
            k+= '<td>' + Jgrocery[i].Serial  + '</td>';
            k+= '<td>' + Jgrocery[i].Name + '</td>';
            k+= '<td>' + Jgrocery[i].Quantity + '</td>';
            k+= '<td>' + Jgrocery[i].Unit + '</td>';
            k+= '<td>' + Jgrocery[i].Department + '</td>';
            k+= '<td>' + Jgrocery[i].Notes + '</td>';
            k+="<th>"+"<input type='checkbox' />"+"</th>";

            k+= '</tr>';
        }
        
        k+='</tbody>';
        document.getElementById('list').innerHTML = k;
        }
       
        setTimeout(write,1000)
    }
    xhttp.open("GET","list.json", true);
    
    xhttp.send();
    }