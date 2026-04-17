import expresso from '../assets/expresso.svg';
import americano from '../assets/americano.svg';
import expressoCremoso from '../assets/expresso-cremoso.svg';
import expressoGelado from '../assets/cafe-gelado.svg';
import cafeComLeite from '../assets/cafe-com-leite.svg';
import latte from '../assets/latte.svg';
import capuccino from '../assets/capuccino.svg';
import macchiato from '../assets/macchiato.svg';
import mochaccino from '../assets/mochaccino.svg';
import chocolateQuente from '../assets/chocolate-quente.svg';
import cubano from '../assets/cubano.svg';
import havaiano from '../assets/havaiano.svg';
import arabe from '../assets/arabe.svg';
import irlandes from '../assets/irlandes.svg';

export interface CoffeeType {
  id: number;
  image: string;
  badges: string[];
  name: string;
  description: string;
  price: string;
}

export const coffees:CoffeeType[] = [
  {
    id: 1,
    image: expresso,
    badges: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 2,
    image: americano,
    badges: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 3,
    image: expressoCremoso,
    badges: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: 4,
    image: expressoGelado,
    badges: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: 5,
    image: cafeComLeite,
    badges: ['Tradicional', 'Com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: 6,
    image: latte,
    badges: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 7,
    image: capuccino,
    badges: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 8,
    image: macchiato,
    badges: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 9,
    image: mochaccino,
    badges: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: 10,
    image: chocolateQuente,
    badges: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 11,
    image: cubano,
    badges: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 12,
    image: havaiano,
    badges: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: 13,
    image: arabe,
    badges: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 14,
    image: irlandes,
    badges: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  }
];
