function sommaInteri(N) {


    // Verifica se l'input è un numero valido o positivo
    if (typeof N !== 'number' || N < 0) {
        // Restituisco la stringa numero invalido come risposta
        return 'numero invalido'
    }

    // Inizializzo le variabili:
    // K rappresenta il numero K di interi consecutivi la cui somma non supera N
    let K = 0;
    // somma rappresenta la somma cumulativa dei primi K interi
    let somma = 0;

    // Ciclo While: 
    // Sommo i numeri consecutivi partendo da 1, incrementando K a ogni iterazione
    while (somma + (K + 1) <= N) {
        // Incremento K di 1 (passo al prossimo unmero da sommare)
        K++;
        // Aggiungo il valore di K alla somma cumulativa
        somma += K;
    }
    // Ritorno K
    return K;
}
