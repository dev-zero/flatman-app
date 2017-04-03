import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { DeltatestComparison } from '../deltatest-comparison';
import { TestresultService } from '../testresult.service';

@Component({
  selector: 'deltatest-comparison-list',
  templateUrl: './deltatest-comparison-list.component.html',
  styleUrls: ['./deltatest-comparison-list.component.css']
})
export class DeltatestComparisonListComponent implements OnChanges {
  @Input() collectionIds;

  comparison: DeltatestComparison;

  columns = [
    // { name: 'Element', prop: 'data.element', comparator: this.elementComparator.bind(this) },
    // { name: 'Status', prop: 'data.status' },
    // { name: 'Min at V<sub>0</sub>', prop: 'data.checks.min_at_V0' },
    // { name: 'All converged', prop: 'data.checks.all_converged' },
    // { name: 'Node Hours', prop: 'data.nodehours.current_total' }
  ]

  static elements = {
    "Cu": { sym: "Cu", name: "copper", num: 29 },
    "Pt": { sym: "Pt", name: "platinum", num: 78 },
    "Hf": { sym: "Hf", name: "hafnium", num: 72 },
    "Cl": { sym: "Cl", name: "chlorine", num: 17 },
    "Ir": { sym: "Ir", name: "iridium", num: 77 },
    "Hg": { sym: "Hg", name: "mercury", num: 80 },
    "Ag": { sym: "Ag", name: "silver", num: 47 },
    "Ge": { sym: "Ge", name: "germanium", num: 32 },
    "Li": { sym: "Li", name: "lithium", num: 3 },
    "Mn": { sym: "Mn", name: "manganese", num: 25 },
    "K":  { sym: "K",  name: "potassium", num: 19 },
    "Be": { sym: "Be", name: "beryllium", num: 4 },
    "Rn": { sym: "Rn", name: "radon", num: 86 },
    "Md": { sym: "Md", name: "mendelevium", num: 101 },
    "Pm": { sym: "Pm", name: "promethium", num: 61 },
    "Dy": { sym: "Dy", name: "dysprosium", num: 66 },
    "Np": { sym: "Np", name: "neptunium", num: 93 },
    "W":  { sym: "W",  name: "tungsten", num: 74 },
    "I":  { sym: "I",  name: "iodine", num: 53 },
    "Tm": { sym: "Tm", name: "thulium", num: 69 },
    "Nb": { sym: "Nb", name: "niobium", num: 41 },
    "N":  { sym: "N",  name: "nitrogen", num: 7 },
    "La": { sym: "La", name: "Lanthanum", num: 57 },
    "At": { sym: "At", name: "astatine", num: 85 },
    "Og": { sym: "Og", name: "oganesson", num: 118 },
    "Nd": { sym: "Nd", name: "neodymium", num: 60 },
    "Ar": { sym: "Ar", name: "argon", num: 18 },
    "Cs": { sym: "Cs", name: "caesium", num: 55 },
    "Rb": { sym: "Rb", name: "rubidium", num: 37 },
    "Hs": { sym: "Hs", name: "hassium", num: 108 },
    "P":  { sym: "P",  name: "phosphorus", num: 15 },
    "O":  { sym: "O",  name: "oxygen", num: 8 },
    "Rg": { sym: "Rg", name: "roentgenium", num: 111 },
    "Mg": { sym: "Mg", name: "magnesium", num: 12 },
    "Sb": { sym: "Sb", name: "antimony", num: 51 },
    "Th": { sym: "Th", name: "thorium", num: 90 },
    "Cd": { sym: "Cd", name: "cadmium", num: 48 },
    "F":  { sym: "F",  name: "fluorine", num: 9 },
    "Yb": { sym: "Yb", name: "ytterbium", num: 70 },
    "Lu": { sym: "Lu", name: "lutetium", num: 71 },
    "Pd": { sym: "Pd", name: "palladium", num: 46 },
    "Zr": { sym: "Zr", name: "zirconium", num: 40 },
    "Ca": { sym: "Ca", name: "calcium", num: 20 },
    "Er": { sym: "Er", name: "erbium", num: 68 },
    "Es": { sym: "Es", name: "einsteinium", num: 99 },
    "Rf": { sym: "Rf", name: "rutherforium", num: 104 },
    "Ds": { sym: "Ds", name: "darmstadtium", num: 110 },
    "Ho": { sym: "Ho", name: "holmium", num: 67 },
    "Xe": { sym: "Xe", name: "xenon", num: 54 },
    "Mt": { sym: "Mt", name: "meitnerium", num: 109 },
    "Kr": { sym: "Kr", name: "krypton", num: 36 },
    "Se": { sym: "Se", name: "selenium", num: 34 },
    "Am": { sym: "Am", name: "americium", num: 95 },
    "Gd": { sym: "Gd", name: "gadolinium", num: 64 },
    "Fl": { sym: "Fl", name: "flerovium", num: 114 },
    "Ga": { sym: "Ga", name: "gallium", num: 31 },
    "Ac": { sym: "Ac", name: "actinium", num: 89 },
    "Lr": { sym: "Lr", name: "lawrencium", num: 103 },
    "Pa": { sym: "Pa", name: "protactinium", num: 91 },
    "Nh": { sym: "Nh", name: "nihonium", num: 113 },
    "Cn": { sym: "Cn", name: "copernicium", num: 112 },
    "Cf": { sym: "Cf", name: "californium", num: 98 },
    "C":  { sym: "C",  name: "carbon", num: 6 },
    "V":  { sym: "V",  name: "vandium", num: 23 },
    "Na": { sym: "Na", name: "sodium", num: 11 },
    "He": { sym: "He", name: "helium", num: 2 },
    "Pr": { sym: "Pr", name: "praseodymium", num: 59 },
    "Bh": { sym: "Bh", name: "bohrium", num: 107 },
    "Tl": { sym: "Tl", name: "thalium", num: 81 },
    "Mo": { sym: "Mo", name: "molybdenum", num: 42 },
    "Bk": { sym: "Bk", name: "berkelium", num: 97 },
    "Co": { sym: "Co", name: "cobalt", num: 27 },
    "Sm": { sym: "Sm", name: "samarium", num: 62 },
    "Pu": { sym: "Pu", name: "plutonium", num: 94 },
    "Ru": { sym: "Ru", name: "ruthenium", num: 44 },
    "Sn": { sym: "Sn", name: "tin", num: 50 },
    "Sr": { sym: "Sr", name: "strontium", num: 38 },
    "Po": { sym: "Po", name: "polonium", num: 84 },
    "Rh": { sym: "Rh", name: "rhodium", num: 45 },
    "No": { sym: "No", name: "nobelium", num: 102 },
    "Ne": { sym: "Ne", name: "neon", num: 10 },
    "S":  { sym: "S",  name: "sulfur", num: 16 },
    "Br": { sym: "Br", name: "bromine", num: 35 },
    "Tb": { sym: "Tb", name: "terbium", num: 65 },
    "Os": { sym: "Os", name: "osmium", num: 76 },
    "Sc": { sym: "Sc", name: "scandium", num: 21 },
    "Al": { sym: "Al", name: "aluminium", num: 13 },
    "Si": { sym: "Si", name: "silicon", num: 14 },
    "As": { sym: "As", name: "arsenic", num: 33 },
    "Bi": { sym: "Bi", name: "bismuth", num: 83 },
    "Pb": { sym: "Pb", name: "lead", num: 82 },
    "Eu": { sym: "Eu", name: "europium", num: 63 },
    "Lv": { sym: "Lv", name: "livermorium", num: 116 },
    "Y":  { sym: "Y",  name: "yttrium", num: 39 },
    "Fr": { sym: "Fr", name: "francium", num: 87 },
    "Ni": { sym: "Ni", name: "nickel", num: 28 },
    "Fe": { sym: "Fe", name: "iron", num: 26 },
    "Tc": { sym: "Tc", name: "technetium", num: 43 },
    "Sg": { sym: "Sg", name: "seaborgium", num: 106 },
    "Cr": { sym: "Cr", name: "chromium", num: 24 },
    "Cm": { sym: "Cm", name: "curium", num: 96 },
    "Ce": { sym: "Ce", name: "cerium", num: 58 },
    "Fm": { sym: "Fm", name: "fermium", num: 100 },
    "Zn": { sym: "Zn", name: "zinc", num: 30 },
    "U":  { sym: "U",  name: "uranium", num: 92 },
    "H":  { sym: "H",  name: "hydrogen", num: 1 },
    "In": { sym: "In", name: "indium", num: 49 },
    "Re": { sym: "Re", name: "rhenium", num: 75 },
    "Mc": { sym: "Mc", name: "moscovium", num: 115 },
    "Ra": { sym: "Ra", name: "radium", num: 88 },
    "Ba": { sym: "Ba", name: "barium", num: 56 },
    "Ta": { sym: "Ta", name: "tantalum", num: 73 },
    "B":  { sym: "B",  name: "boron", num: 5 },
    "Db": { sym: "Db", name: "dubnium", num: 105 },
    "Au": { sym: "Au", name: "gold", num: 79 },
    "Ts": { sym: "Ts", name: "tennessine", num: 117 },
    "Ti": { sym: "Ti", name: "titanium", num: 22 },
    "Te": { sym: "Te", name: "tellurium", num: 52 }
  };

  constructor(private _service: TestresultService) {
  }

  elementComparator(symbolA, symbolB) {
    let elementA = DeltatestComparisonListComponent.elements[symbolA];
    let elementB = DeltatestComparisonListComponent.elements[symbolB];

    if (elementA.num > elementB.num)
      return 1;
    else if (elementA.num < elementB.num)
      return -1;

    return 0;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    // if (changes['collectionId'] && this.collectionId)
    //   this._service.getCollection(this.collectionId)
    //     .subscribe(collection => {
    //       this.collection = collection;
    //     });
  }
}
