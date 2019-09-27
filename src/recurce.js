const fIncSumm = (n, a) => {
    if (n == 0) return a;
    return fIncSumm(n - 1, a + 1);
}

const ftailIncSumm = (n, a) => {
    const incept = (nn, a) => {
        if (nn == 0) return a;
        return incept(nn - 1, a + 1);
    }   

    return incept(n, a);
}


console.log(ftailIncSumm(100000, 1));
