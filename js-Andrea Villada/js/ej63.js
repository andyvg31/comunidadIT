let anio=2003;
let campeon=null;
let campeonato= null;

switch(anio){
    case 2000:
        campeon= 'River Plate / Boca Juniors'; 
        campeonato= 'Clausura / Apertura';
    break;
     case 2001:
        campeon= 'San Lorenzo de Almagro / Racing';
        campeonato= 'Apertura / Clausura';
    break;
     case 2002:
        campeon= 'River Plate / Independiente';
        campeonato= 'Apertura / Clausura';
    break;
     case 2003:
        campeon= 'River Plate / Boca Juniors';
        campeonato= 'Apertura / Clausura';
    break;
    case 2004:
        campeon= 'River Plate / Newell´s Old Boys';
        campeonato= 'Apertura / Clausura';
    break;
    case 2004:
        campeon= 'River Plate / Newell´s Old Boys';
        campeonato= 'Apertura / Clausura';
    break;
    case 2005:
        campeon= '	Vélez Sarsfield / Boca Juniors';
        campeonato= 'Apertura / Clausura';
    break;
    case 2006:
        campeon= 'Boca Juniors / Estudiantes de la Plata';
        campeonato= 'Apertura / Clausura';
    break;
    case 2007:
        campeon= 'San Lorenzo de Almagro / Lanús';
        campeonato= 'Apertura / Clausura';
    break;
    case 2008:
        campeon= 'River Plate / Boca Juniors';
        campeonato= 'Apertura / Clausura';
    break;
    case 2009:
        campeon= 'Vélez Sarfield / Banfield';
        campeonato= 'Apertura / Clausura';
    break;
    case 2010:
        campeon= 'Argentinos Juniors / Estudiantes de La Plata';
        campeonato= 'Apertura / Clausura';
    break;
    case 2011:
        campeon= 'Velez Sarfiedl / Boca Juniors';
        campeonato= 'Apertura / Clausura';
    break;
    case 2012:
        campeon= 'Arsenal F.C. / Velez Sarfield';
        campeonato= 'Apertura / Torneo Inicial';
    break;
    case 2013:
        campeon= 'Newell´s Old Boys / Vélez Sarfield / San Lorenzo de Almagro';
        campeonato= 'Torneo final / Campeonato de Primera División 2012-13 / Torneo Final';
    break;
    case 2014:
        campeon= 'River Plate / Racing Club';
        campeonato= 'Torneo Final / Torneo Inicial';
    break;
    case 2015:
        campeon= 'Boca Juniors';
        campeonato= 'Campeonato de Primera División';
    break;
    case 2016:
        campeon= 'Lanús';
        campeonato= 'Campeonato de Primera División';
    break;
      case 2017:
        campeon= 'Boca Juniors';
        campeonato= 'Campeonato de Primera División 2016/2017';
    break;
    default: 
        campeon= null;
        campeonato= null;
}
if (anio !== null){
    console.log(`En el año ${anio} salió campeón: ${campeon} en el ${campeonato}`);
}
else{
    console.log('Por favor ingrese un año entre 2000 y 2017');
}


