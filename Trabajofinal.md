Se van a leer las coordenadas de una lista de poblaciones y se van a graficar en un gráfico de dispersión o XY (Scatter Chart).

Los datos provienen de la hoja [ranking](file:///C:/Users/Lasalde/Documents/Ingenieria%20Tecnun/3%20A%C3%91O/Estad%C3%ADstica%20Industrial/final/ranking.html)

Se van a obtener con WebScraping mediante la función leerEmpresas() del [final](../geocoordenadas/final.json)

Los datos obtenidos se guardan como JSON en un fichero de nombre [trabajofinal.js](../geocoordenadas/trabajofinal.js). Para poder usar directamente el array en una variable, añadir por delante de dicho array el texto: "obj="

Para visualizar los datos, se utiliza la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Scatter Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).
El resultado es el que se muestra en la página [visualfinal.html](../geocoordenadas/visualfinal.html)
