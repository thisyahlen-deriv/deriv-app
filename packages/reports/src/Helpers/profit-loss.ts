export const getProfitOrLoss = (value: string) => {
    if (!value) {
        return 'unknown';
    }
    const amount = value.replace(/,/g, '');
    return +amount >= 0 ? 'profit' : 'loss';
};
