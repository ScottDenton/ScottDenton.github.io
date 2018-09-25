//create dogs
function dog (breed, build, activityLevel, inside, hair) {
    this.breed = breed;
    this.build = build;
    this.activityLevel = activityLevel;
    this.inside = inside;
    this.hair = hair;

    this.calculatePoints = function(){
       var points = 0;
        if(this.build === 'small'){
            points++;
        } else {
            points += 2;
        }

        if(this.activityLevel === 'yes'){
            points +=10;
        } else {
            points += 20;
        }

        if(this.inside === 'inside'){
            points +=100;
        } else if(this.inside === 'outside'){
            points +=200;
        } else {
            points +=300
        }

        if(this.hair === 'short'){
            points += 1000;
        } else {
            points += 2000;
        }         
        
return points;
    }
    }
 



    var labrador = new dog ('Labrador','large', 'yes', 'both', 'medium' );
    var labradorPoints = labrador.calculatePoints();
 
    var frenchBulldog = new dog('French Bulldog','small','no','inside', 'short');
    var frenchBulldogPoints = frenchBulldog.calculatePoints();
    
    var germanShepherd = new dog ('German Shepherd', 'large', 'yes', 'outside', 'long');
    var germanShepherdPoints = germanShepherd.calculatePoints();
 
    var pug = new dog ('Pug', 'small', 'no', 'inside', 'short');
    var pugPoints = pug.calculatePoints();
 
    var italianGreyhound = new dog ('Italian Greyhound', 'small', 'no', 'inside', 'short');
    var italianGreyhoundPoints = italianGreyhound.calculatePoints();
 
    var maltese = new dog ('Maltese', 'small', 'no', 'inside', 'long')
    var maltesePoints = maltese.calculatePoints();
 
    var bearededCollie = new dog ('Bearded Collie', "large",'yes', 'inside', 'long' );
    var bearededColliePoints = bearededCollie.calculatePoints();
 
    var bulldog = new dog ("Bulldog", "large", 'no', 'inside', 'short');
    var bulldogPoints = bulldog.calculatePoints();

    var whippet = new dog ("Whippet", 'small', 'yes', 'inside', 'short');
    var whippetPoints = whippet.calculatePoints();

    var yorkshireTerrier = new dog("Yorkshire Terrier", 'small', 'yes', 'inside', 'long' )
    var yorkshireTerrierPoints = yorkshireTerrier.calculatePoints();

    var ratTerrier = new dog ("Rat Terrier", 'small', 'yes', 'outside', 'short')
    var ratTerrierPoints = ratTerrier.calculatePoints();

    var bermeseMountainDog = new dog("Bermese Mountain Dog", 'large', 'no', 'outside', 'long')
    var bermeseMountainDogPoints = bermeseMountainDog.calculatePoints();

    var greatDane = new dog ("Great Dane", 'large', 'no', 'inside', 'short');
    var greatDanePoints = greatDane.calculatePoints();

    var saintBernard = new dog ("Saint Bernard", 'large', 'no', 'both', 'long');
    var saintBernardPoints = saintBernard.calculatePoints();

    var germanShorthairdePointer = new dog ("German Shorthaired Pointer", 'large', 'yes', 'outside', 'short')
    var germanShorthairedPointerPoints = germanShorthairdePointer.calculatePoints();

    var miniaturePinscher = new dog ("Miniature Pinscher", 'small', 'no', 'outside', 'short');
    var miniaturePinscherPoints = miniaturePinscher.calculatePoints();

var finalLink = document.getElementById('final-link');

function restart(){
   document.getElementById("result").classList.add('hidden');
    resetBtns();
}

function resetBtns(){
    total = 0;
//question 1
    var radioList = document.getElementsByName("q1");
    for (var i = 0; i < radioList.length; i++) {
        if(radioList[i].checked) {
            radioList[i].checked = false;
        }
    }
//question 2
    var radioList2 = document.getElementsByName("q2");
    for (var i = 0; i < radioList2.length; i++) {
        if(radioList2[i].checked) {
            radioList2[i].checked = false;
        }
    }
//question 3
    var radioList3 = document.getElementsByName("q3");
    for (var i = 0; i < radioList3.length; i++) {
        if(radioList3[i].checked) {
            radioList3[i].checked = false;
        }
    }
//question 4
    var radioList4 = document.getElementsByName("q4");
    for (var i = 0; i < radioList4.length; i++) {
        if(radioList4[i].checked) {
            radioList4[i].checked = false;
        }
    }
}


var total = 0;
function result(){
    var q1 = document.getElementById("myQuiz").q1.value;
    var q2 = document.getElementById("myQuiz").q2.value;
    var q3 = document.getElementById("myQuiz").q3.value;
    var q4 = document.getElementById("myQuiz").q4.value;

    
//Question 1
    if (q1 === '1'){
        total++;
    } else {
        total +=2;
    } 

//Question 2
        if(q2 === '1'){
        total+=10;
    } else {
        total +=20
    }

 //Question 3  
    if(q3 === '1'){
        total +=100;
    } else if (q3 ==='2'){
        total +=200;
    } else {
        total +=300;
    }
        
 //Question 4
    if(q4 === '1'){
        total += 1000;
    } else {
     total +=2000;
    }


    document.getElementById("result").classList.remove('hidden');

    if (total === labradorPoints|| total === 2122 || total ===1312) {
        finalLink.href ="https://www.akc.org/dog-breeds/labrador-retriever/";
        finalLink.textContent = "Labrador Retriever"
    }
    else if (total === frenchBulldogPoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/french-bulldog/";
        finalLink.textContent = "French Bulldog"
    }
    else if (total === germanShepherdPoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/german-shepherd-dog/";
        finalLink.textContent = "German Shepherd"
    }
    else if (total === pugPoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/pug/";
        finalLink.textContent = "Pug"
    }
    else if (total === italianGreyhoundPoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/italian-greyhound/";
        finalLink.textContent = "Italian Greyhound"
    }
    else if (total === maltesePoints || total === 2321) {
        finalLink.href ="https://www.akc.org/dog-breeds/maltese/";
        finalLink.textContent = "Maltese"
    }
    else if (total === bearededColliePoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/bearded-collie/";
        finalLink.textContent = "Bearded Collie "
    }
    else if (total === bulldogPoints || total ===1322 || total ===1112) {
        finalLink.href ="https://www.akc.org/dog-breeds/bulldog/";
        finalLink.textContent = "Bulldog "
    }
    else if (total === whippetPoints) {
        finalLink.href ="https://www.akc.org/dog-breeds/whippet/";
        finalLink.textContent = "Whippet "
    }
    else if (total === yorkshireTerrierPoints || total === 2211 || total === 2311) {
        finalLink.href ="https://www.akc.org/dog-breeds/yorkshire-terrier/";
        finalLink.textContent = "YorkShire Terrier "
    }
    else if (total === ratTerrierPoints || total === 1311 ) {
        finalLink.href ="https://www.akc.org/dog-breeds/rat-terrier/";
        finalLink.textContent = "Rat Terrier "
    }
    else if (total === bermeseMountainDogPoints){
        finalLink.href ="https://www.akc.org/dog-breeds/bernese-mountain-dog/";
        finalLink.textContent = "Bermese Mountain Dog "
    } 
    else if (total === greatDanePoints || total === 1222){
        finalLink.href ="https://www.akc.org/dog-breeds/great-dane/";
        finalLink.textContent = "Great Dane "
    } 
    else if (total === saintBernardPoints || total === 2222 ){
        finalLink.href ="https://www.akc.org/dog-breeds/st-bernard/";
        finalLink.textContent = "Saint Bernard "
    }
    else if (total === germanShorthairedPointerPoints || total ===1312) {
        finalLink.href ="https://www.akc.org/dog-breeds/german-shorthaired-pointer/";
        finalLink.textContent = "German Shorthaired Pointer "
     }
    else if (total === miniaturePinscherPoints || total === 1321 ) {
        finalLink.href ="https://www.akc.org/dog-breeds/miniature-pinscher/";
        finalLink.textContent = "Miniature Pinscher "
     }
    
     resetBtns();
    
    
    
}










