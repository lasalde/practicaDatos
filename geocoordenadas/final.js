function leerEmpresas() {
    empresasTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<17;i++) {
      
	  vent2016 = empresasTR[i].children[2].textContent.trim().replace(/\./g, "").replace("-","0");
      vent2015  = empresasTR[i].children[3].textContent.trim().replace(/\./g, "").replace("-","0");
      RES = empresasTR[i].children[4].textContent.trim().replace(/\./g, "").replace("-","0");
	  Nombre = empresasTR[i].children[1].textContent.trim();

	  
	  str += "['" + Nombre
	  str += "'," + vent2016
	  str += "," + vent2015
	  str += "," + RES 
	  str += "]"
	
	  
	if (i<16)
	str += ","
	str += "\n"

	if (i>15)
	str += "]"
	
	
	
	}
    return str;
}
