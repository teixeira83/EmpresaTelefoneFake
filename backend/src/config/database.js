const dbsDump = [
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
]

module.exports = dbsDump;