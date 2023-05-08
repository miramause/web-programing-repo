function Instruction()
{
    console.log("                Інструкція\n");
    console.log("----------------------------------------------");
    console.log("|   Позначення   |        Що позначає        |");
    console.log("----------------------------------------------");
    console.log("|       leg      |            катет          |");
    console.log("----------------------------------------------");
    console.log("|   hypotenuse   |         гіпотенуза        |");
    console.log("----------------------------------------------");
    console.log("| adjacent angle |  прилеглий до катета кут  |");
    console.log("----------------------------------------------");
    console.log("| opposite angle | протилежний до катета кут |");
    console.log("----------------------------------------------");
    console.log("|      angle     | один з двох гострих кутів |");
    console.log("|                | (коли задана гіпотенуза)  |");
    console.log("----------------------------------------------\n");

    console.log("Відповідно, функція повинна приймати аргументи у такому порядку:");
    console.log("значення аргумента 1, «тип» аргумента 1 (див. табл), значення");
    console.log("аргумента 2, «тип» аргумента 2 (див. табл.).");
    console.log("Н-д:")
    console.log('triangle(7,"leg",18,"hypotenuse");')
}

function triangle(value1, type1, value2, type2)
{
    var pi = Math.PI;
    var pi_rad = pi/180;
    if(value1==='' || value2==='' || type1==='' || type2==='')
    {
        console.log("Failed");
        console.log("Input all parameters")
    }
    else if (value1 <= 0 || value2 <= 0)
    {
        console.log("Failed");
        console.log("Zero or negative input");
    }
    else
    {
        if(type1==="leg" && type2==="leg")
        {
            let C = Math.sqrt(Math.pow(value1,2) + Math.pow(value2,2));
            
            if((value1+value2>C) && (value1+C>value2) && (value2+C>value1))
            {
                console.log("A = " + value1 + '\n' + "B = " + value2+'\n'+"C = " + C);
                let alpha=Math.atan(value1/value2)/pi_rad;

                let beta=Math.atan(value2/value1)/pi_rad;
                console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
                console.log("success");
            }
            else
            {
                console.log("Failed");
                console.log("Something is wrong with parameters");
            }
        }
        else if((type1==="leg" && type2==="hypotenuse")|| (type2==="leg" && type1==="hypotenuse"))
        {
           let B, C;
           if(type1==="leg")
            {
                B=value1;
                C=value2;
            }
            else if(type2==="leg")
            {
                C=value1;
                B=value2;
            }
            else
            {
                console.log("Failed");
            }

            if(B>C)
            {
                console.log("hypotenuse must be longer than leg")
                console.log("Failed");
            }
            else
            {
                let A = Math.sqrt(Math.pow(C,2) - Math.pow(B,2));
                
                if((B+C>A) && (B+A>C) && (C+A>B))
                {
                    console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + C);

                    let alpha=Math.atan(A/B)/pi_rad;
        
                    let beta=Math.atan(B/A)/pi_rad;
                    console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
                    console.log("success");
                }
                else
                {
                    console.log("Failed");
                    console.log("Something is wrong with parameters");
                }
            }
        }

        else if((type1==="leg" && type2==="adjacent angle")|| (type2==="leg" && type1==="adjacent angle"))    
        {
            let B, alpha;
            if(type1==="leg")
            {
                B=value1;
                alpha=value2;
            }
            else if(type2==="leg")
            {
                B=value2;
                alpha=value1;
            }
            else
            {
                console.log("Failed");
            }

            if(alpha>=90)
            {
                console.log("adjacent angle must be less than 90");
                console.log("Failed");
            }
            else
            {
                let C = B/Math.cos(alpha*pi_rad);
                let A =B*Math.tan(alpha*pi_rad);

                if((B+C>A) && (B+A>C) && (C+A>B))
                {
                    console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + C);
                    let beta=90-alpha;
                    console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
                    console.log("success");
                }
                else
                {
                    console.log("Failed");
                    console.log("Something is wrong with parameters");
                }
            }
        }       
        else if((type1==="leg" && type2==="opposite angle")|| (type2==="leg" && type1==="opposite angle"))
        {
            let B, beta;
            if(type1==="leg")
            {
                B=value1;
                beta=value2;
            }
            else if(type2==="leg")
            {
                B=value2;
                beta=value1;
            }
            else
            {
                console.log("Failed");
            }

            if(beta>=90)
            {
                console.log("opposite angle must be less than 90");
                console.log("Failed");
            }
            else
            {
                let C = B/Math.sin(beta*(pi_rad));
                let A = Math.sqrt(C*C-B*B);

                if((B+C>A) && (B+A>C) && (C+A>B))
                {
                    console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + C);
                    let alpha=90-beta;
                    console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
                    console.log("success");
                }
                else
                {
                    console.log("Failed");
                    console.log("Something is wrong with parameters");
                }
            }

        }
        else if((type1==="angle" && type2==="hypotenuse")|| (type2==="angle" && type1==="hypotenuse"))
        {
            let C, beta;
            if(type1==="angle")
            {
                beta=value1;
                C=value2;
            }
            else if(type2==="angle")
            {
                beta=value2;
                C=value1;
            }
            else
            {
                console.log("Failed");
            }

            if(beta>=90)
            {
                console.log("angle must be less than 90");
                console.log("Failed");
            }
            else
            {
                let A = C*Math.sin(beta*(pi_rad));
                let B = C*Math.cos(beta*(pi_rad));

                if((B+C>A) && (B+A>C) && (C+A>B))
                {
                    console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + C);
                    let alpha=90-beta;
                    console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "gamma = 90");
                    console.log("success");
                }
                else
                {
                    console.log("Failed");
                    console.log("Something is wrong with parameters");
                }
            }
        }
        else if(type1 !== "leg" || type1 !== "hypotenuse" || type1 !== "adjacent angle" || type1 !== "opposite angle" || type1 !== "angle" ||
        type2 !== "leg" || type2 !== "hypotenuse" || type2 !== "adjacent angle" || type2 !== "opposite angle" || type2 !== "angle")
        {
            console.log("Instruction!!!!");
        }
    }
}
Instruction();

//triangle(7,"leg",18,"hypotenuse");
//triangle(18,"hypotenuse",7,"leg");

//triangle(7,"leg",18,"adjacent angle");
//triangle(18,"adjacent angle", 7,"leg");

//triangle(60,"opposite angle", 5,"leg");
//triangle(5,"leg",60,"opposite angle");

//triangle(60,"angle", 5,"hypotenuse");
//triangle(5,"hypotenuse",60,"angle");
