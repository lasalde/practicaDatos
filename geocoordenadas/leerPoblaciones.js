function leerPoblaciones() {
    villagesTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='';
    for (i=4;i<villagesTR.length;i++) {
      long = villagesTR[i].children[4].textContent.replace(',','.');
      lat  = villagesTR[i].children[3].textContent.replace(',','.')
      str += "[" + long
      str += "," + lat
      str += ",'" + villagesTR[i].children[2].textContent.replace("'"," ").replace("'"," ").replace("\n","") + " " + long + " " + lat + "'],"
      str += "\n"
    }
}