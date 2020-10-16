const eng = ['the favourite','superman','roma','ex machina','the master','her',
'moonlight','drive','inception','birdman','spotlight','ipman','hereditary','whiplash',
'annihilation','the witch','lady brid','getout','boyhood','iron man','godzilla','hulk',
'the avengers','ice age','madmax','avatar','titanic','joker','black panther',
'jurassic world','frozen','shazam','incredibles','spider man','minions','aquaman',
'captain marvel','skyfall','transformers','avengers endgame','despicable me',
'jurassic park','finding dory','star wars' ,'zootopia','the hobbit','toy story']
const mal = ['munnariyippu','thaniyavartanam','drishyam','nadan','jallikattu','virus',
'thamaasha','june','helen','finals','unda','kamala','under world','praana','ambili',
'uyare','ishq','manoharam','nalpathiyonnu','luca','vikruthi','thrissur pooram',
'mamangam','she','athiran','my santa','janamaithri','kalki','panth','kuttymama',
'pattabhiraman','sachin','lucifer','margamkali','shibu','mask','safe','gramavasees',
'janaadhipan','joseph','premam','rip','take off','manichitrathazhu','punjabi house',
'cid moosa', 'mumbai police', 'memmories','raja the raja','harikrishnans', 
'christian brothers', 'valsalyam', 'lelam', 'the commissioner', 'ameen', 'varathan', 
'adam john', 'achayans', 'meesamadhavan', 'superman', 'abcd', 'charlie', 'ezra', 
'my dear kuttichathan','you too brutus', 'neerali', 'ittimani', 'pulimurugan', 
'vismayam', 'drishyam','nadodikkaattu']

const both = eng.concat(mal) ;
let allArray = eng
let score = 0;
let life = 8;
var temp = 0;
let checked = 0;
var once;
let movie

var box = document.createElement('div');
topdiv.appendChild(box);
box.setAttribute('id','score')
document.getElementById('score').innerHTML = 'SCORE : '+score
var box = document.createElement('div');
topdiv.appendChild(box);
box.setAttribute('id','life')
document.getElementById('life').innerHTML = 'LIFE : '+life


function reload()
{
    var whichName = Math.floor(Math.random()*(allArray.length));
    movie = allArray[whichName];
    console.log(movie);
    for(var i=0;i<temp;i++)
    {
        var div = document.getElementById(i);
        div.parentNode.removeChild(div);
    }
    temp = movie.length;
    for(var j=0;j<(movie.length);j++)
    {
        //div creation
        var box = document.createElement('div');
        main.appendChild(box);
        box.setAttribute('id',j)
        box.setAttribute('class','box')
        document.getElementById(j).innerHTML = movie[j]
        if(movie[j] == ' ')
        {
            document.getElementById(j).style.backgroundColor = 'black'
        }        
    }
        //makeing div empty  except for the gap
    for(var k=0;k<(Math.floor(movie.length/2));k++)
    {
        var emptydiv = Math.floor(Math.random()*(movie.length));
        if(document.getElementById(emptydiv).innerHTML != ' ')
        {
            document.getElementById(emptydiv).innerHTML = ''
            // var box = document.createElement('input');
            // document.getElementById(emptydiv).appendChild(box);
            // box.setAttribute('class','text')
        }
        
    }
}
function submit()
{
    let value = document.getElementById('text').value;
    if(value != '')
    {
        let correctValue = 0;
        if(life == 0)
        {
            alert('The movie was : ' + movie +'              Your score is :' + score)
            // alert('TRY AGAIN')
            correctValue++
        }
        let value = document.getElementById('text').value;
        let lowerCaseValue = value.toLowerCase()
        for (let f = 0; f < movie.length; f++) 
        {
            if(value == movie[f] || lowerCaseValue == movie[f])
            {
                document.getElementById(f).innerHTML = value
                correctValue++
            }
        }
        if(correctValue == 0)
        {
            life--
            document.getElementById('life').innerHTML = 'LIFE : '+life
        }
        document.getElementById('text').value = '';
    }
}
function next()
{
    if(checked == 1)
    {
        once = 1
        checked = 0;
        reload()
    }
    var count = 0;
        for (let p  = 0; p  < movie.length; p ++) 
        {
            if(movie[p] == document.getElementById(p).innerHTML)
            {
                count = count+1
            }    
        }
        if(count == movie.length)
        {
            checked = 1;
            // reload()
            score++
            document.getElementById('score').innerHTML = 'SCORE : '+score
        }
}
function play()
{
    document.getElementById('firstDiv').style.display = "none";
    document.getElementById('middleDiv').style.display ='unset'
}
reload()