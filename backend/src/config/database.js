const dbsDumpSources = [
    {
        source: '011'   ,
        destinations: ['016','017','018'],
        taxs: [1.90,1.70,0.90]
    },
    {
        source: '016',
        destinations: ['011'],
        taxs: [2.90]
    },
    {
        source: '017',
        destinations: ['011'],
        taxs: [2.70]
    },
    {
        source: '018',
        destinations: ['011'],
        taxs: [0.90]
    }
];

const dbsDumpPlans = [
    {
        title: 'FaleMais 30',
        description: 'Ganhe 30 minutos para falar de graça durante o mês.',
        minutes: 30,
        tax: 10
    },
    {
        title: 'FaleMais 60',
        description: 'Ganhe 60 minutos para falar de graça durante o mês.',
        minutes: 60,
        tax: 10
    },
    {
        title: 'FaleMais 120',
        description: 'Ganhe 120 minutos para falar de graça durante o mês.',
        minutes: 120,
        tax: 10
    }
];

module.exports = {
    dbsDumpSources,
    dbsDumpPlans
};