export const config = {
    eventRenderer({eventRecord}) {
        return <b><i>{eventRecord.name}</i></b>
    },
    eventStyle: 'collored',
    eventColor: 'red',
    tbar: {
        type: 'toolbar',
        defaults: {
            onAction: 'up.onAction'
        },
        onAction({source}) {
            const schedulerPro = this. owner
            schedulerPro.viewPreset = source. ref
        },
         items: [{
            text: 'Hour',
            ref: 'hourAndDay'
         },
         {
            text: 'Week',
            ref: 'manyYears'
         },{
            text: 'Year',
            ref: 'monthandYear'
         }]
        }
    }
    
