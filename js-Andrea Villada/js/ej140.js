let mutantes=[
'Prof. Charles Francis Xavier',
'Scott Summers',
'Dr. Henry Philip "Hank" McCoy',
'Jean Elaine Grey',
'Calvin Montgomery Rankin',
'Kevin Sydney',
'Lorna Sally Dane',
'Alexander Summers',
'Suzanne Chan',
'James "Logan" Howlett',
'Ororo Monroe',
];

let mutantesFilter=mutantes.filter(function(mutante){
    return mutante==='Scott Summers';

});
mutantes[1]='Scott Summers';
console.log(mutantes[1]);