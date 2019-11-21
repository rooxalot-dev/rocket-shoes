const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const { format: formatPrice } = format;
export default formatPrice;
