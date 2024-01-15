# GIOCO DI DADI

## TRACCIA

```plaintext
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, dovrà comparire l'ultima immagine dell'array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell'immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all'immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
```

## SVOLGIMENTO

- Imposto la pagina con tutti gli elementi statici in HTML e CSS
- Le immagini che inserisco dovranno tutte avere d:none tranne una, sarà questo infatti a variare e renderle visibili una alla volta
- Individuo cosa va reso dinamico con js e lo commento
- Inizializzo l'array contenente le immagini
- Genero le immagini mediante l'Array con un ciclo for e utilizzando i template literal
- Assegno la classe active momentaneamente al primo elemento per vedere similmente la pagina com'era con gli elementi statici
- Ascolto l'evento dei due pulsanti frecce
- Tolgo la classe active a quella mostrata attualmente, cercandola con un HTMLCollection
- Similmente ad un indice, vado all'EL della collection successiva (o precedente) e ci applico la classe active
- Se l'active è sull'ultima slide e premo 'avanti' assegno active alla prima, creando un giro infinito
- Se l'active è sulla prima slide e premo 'dietro' assegno active all' ultima, creando un giro infinito