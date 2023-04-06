//Arreglo 1: Platos con sus atributos 

const platos=[
    {id:1, name:'Tarta de manzana'},
    {id:2, name:'Chuleta de cerdo'},
    {id:3, name:'Papas fritas    '},
    {id:4, name:'Pollo broaster  '},
    {id:5, name:'Carne con queso '},
    
    ]

//Arreglo 2: Paciente con sus atributos 

    const paciente=[
        {id:1, name:'Luis Torres       ',identification:'1316286291'},
        {id:2, name:'Ezequiel Soledispa',identification:'1316290842'},
        {id:3, name:'Gabriela Anchundia',identification:'0821782977'},
        {id:4, name:'Erick Torres      ',identification:'1313475241'},
        {id:5, name:'Anna Espinoza     ',identification:'1327956821'},
        
        ]
    
//Arreglo 3: registro con sus atributos y relaciones

    const registro=[
    {id:1, idplato:1, idpaciente:1, fecha:'13/07/2022', hora:'12:43', Ncalorias_consumidas:237, Nporciones:2},
    {id:2, idplato:2, idpaciente:2, fecha:'23/12/2021', hora:'11:07', Ncalorias_consumidas:231, Nporciones:1},
    {id:3, idplato:3, idpaciente:3, fecha:'09/11/2019', hora:'14:57', Ncalorias_consumidas:312, Nporciones:4},
    {id:4, idplato:4, idpaciente:4, fecha:'18/12/2021', hora:'17:00', Ncalorias_consumidas:221, Nporciones:3},
    {id:5, idplato:5, idpaciente:5, fecha:'03/02/2023', hora:'09:33', Ncalorias_consumidas:332, Nporciones:2},
    ]

//Exportacion de nuestros arreglos: Platos, Paciente, Registro
    module.exports = {
    platos,
    paciente,
    registro
};
