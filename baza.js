// ==========================================
        // DEFAULT BAZA UČENIKA
        //{ datum: "10.2.2026", razlog: "Bolest" }
        //===========================================
        //{ ocjena: 3, opis: "" },
        //{ ocjena: 2, opis: "Loš rad na satu" },  // <-- ovo je negativna
        //{ ocjena: null, opis: "Bilješka: zaboravila pribor" }
        // ==========================================
        
const baza = {
    "Kalista.Galov": {
        ime: "Kalista Galov",
        izostanci: [
            { datum: "11.2.2026", razlog: "Obiteljski razlozi" }
        ],
        podaci: [
            { ocjena: null, opis: "Prvi sat 14.2.2026." },
            { ocjena: null, opis: "Učenica Kalista dobila izostanak : 1" },
            
        ],
        vladanje: 5
    }
};
