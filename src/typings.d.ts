declare module 'mendeleev' {

    interface Element {
        name: string;
        symbol: string;
        type: string;
        number: number;
        mass: number;
        period: number;
        group: number;
        melting: number;
        boiling: number;
        density: number;
        electronegativity: number;
        radius: number;
        valence: number;
        specificheat: number;
    }

    declare namespace PeriodicTable {
        function getElement(s: string): Element;
    }

}
