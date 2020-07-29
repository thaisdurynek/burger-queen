import coffee from '../assets/cafe-americano.jpg';
import coffeeLatte from '../assets/cafe-com-leite.jpg';
import misto from '../assets/misto-quente.jpeg';
import juice from '../assets/suco.jpg';
import hambSimple from '../assets/hamburguer-simples.jpg';
import hambDouble from '../assets/hamburguer-duplo.jpg';
import fries from '../assets/batata-frita.jpg';
import onionRings from '../assets/aneis-de-cebola.jpg';
import water500 from '../assets/agua-500.jpg';
import water750 from '../assets/agua-700.jpg';
import soda500 from '../assets/refri-500.jpg';
import soda750 from '../assets/refri-750.jpg';

const data = [
    {
        img: coffee,
        type: 'Café da Manhã',
        item: 'Café Americano',
        price: 5
    },
    {
        img: coffeeLatte,
        type: 'Café da Manhã',
        item: 'Café com Leite',
        price: 7
    },
    {
        img: misto,
        type: 'Café da Manhã',
        item: 'Misto Quente',
        price: 10
    },
    {
        img: juice,
        type: 'Café da Manhã',
        item: 'Suco Natural de Fruta',
        price: 7
    },
    {
        img: hambSimple,
        type: 'Principal',
        item: 'Hambúrguer Simples',
        price: 10,
        options: ['bovino', 'frango', 'vegetariano']
    },
    {
        img: hambDouble,
        type: 'Principal',
        item: 'Hambúrguer Duplo',
        price: 15,
        options: ['bovino', 'frango', 'vegetariano']
    },
    {
        img: fries,
        type: 'Principal',
        item: 'Batata Frita',
        price: 5
    },
    {
        img: onionRings,
        type: 'Principal',
        item: 'Anéis de Cebola',
        price: 5
    },
    {
        img: water500,
        type: 'Principal',
        item: 'Água 500mL',
        price: 5
    },
    {
        img: water750,
        type: 'Principal',
        item: 'Água 750mL',
        price: 7
    },
    {
        img: soda500,
        type: 'Principal',
        item: 'Refrigerante 500mL',
        price: 7
    },
    {
        img: soda750,
        type: 'Principal',
        item: 'Refrigerante 750mL',
        price: 10
    },
];

export default data;