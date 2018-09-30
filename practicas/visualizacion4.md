Se van a leer el ranking de empresas de España y se van a graficar en un gráfico de Bar Chart.

 Los datos provienen de la hoja [ranking](file:///C:/Users/Lasalde/Documents/Ingenieria%20Tecnun/3%20A%C3%91O/Estad%C3%ADstica%20Industrial/final/ranking.html)
 
 Se van a obtener con WebScraping mediante la función leerEmpresas() del [final](../geocoordenadas/leerEmpresas.js)
 
 Los datos obtenidos se guardan como JSON en un fichero de nombre [trabajofinal.js](../geocoordenadas/trabajofinal.js). Añadiremos el texto "obj=" para poder usar directamente el array en una variable.
 Para visualizar los datos, se utiliza la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Scatter Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).
El resultado es el que se muestra en la página [visualfinal.html](../geocoordenadas/visualfinal.html)
