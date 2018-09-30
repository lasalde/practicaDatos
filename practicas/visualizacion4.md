Se van a leer el ranking de empresas de españa y se van a graficar en un gráfico de Bar Chart.

Los datos provienen de la hoja [ranking](../geocoordenadas/ranking.html).

Se van a obtener con WebScraping mediante la función leerEmpresas() del [final](../geocoordenadas/final.js)

Los datos obtenidos se guardan como JSON en un fichero de nombre [trabajofinal.js](../geocoordenadas/trabajofinal.js). Añadiremos el texto: "obj=" para poder usar directamente el array en una variable.

Para visualizar los datos, se utiliza la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Scatter Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).

En mi caso yo he escogido la opciónde Bar Chart debido a que mediante este gráfico podemos conseguir ver mejor la diferencia entre las diferentes empresas. Cuando obtengo mis datos mediante el WebScraping, consigo 50 empresas. Sin embargo, a la hora de graficarlo solo he seleccionado 17, para que se visualice mejor. El resultado es el que se muestra en la página [visualfinal.html](../geocoordenadas/visualfinal.html).
