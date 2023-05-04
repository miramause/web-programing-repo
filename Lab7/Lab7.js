function triangle(value1, type1, value2, type2)
{
    var pi = Math.PI;
    if(value1==='' || value2==='' || type1==='' || type2==='')
    {
        console.log("Failed");
        console.log("Input all parameters")
    }
    else
    {
        if(value1===NaN || value2 ===NaN)
        {
            console.log("Failed");
            console.log("value must be a number");
        }
        else
        {
            if(value1<=0 || value2<=0)
            {
                console.log("Failed");
                console.log("value must be greater than zero ")
            }
            else
            {
                if(type1=="leg" && type2=="leg")
                {
                    let C = Math.sqrt(Math.pow(value1,2) + Math.pow(value2,2));
                    console.log("A = " + value1 + '\n' + "B = " + value2+'\n'+"C = " + C);

                    let alpha=Math.round(Math.atan(value1/value2)/0.0174532925,1);

                    let beta=Math.round(Math.atan(value2/value1)/0.0174532925,1);


                    console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                    console.log("success");
                }
                else if((type1==="leg" && type2==="hypotenuse")|| (type2==="leg" && type1==="hypotenuse"))
                {
                    if(type1==="leg")
                    {
                        if(value1>value2)
                        {
                            console.log("hypotenuse must be longer than leg")
                            console.log("Failed");
                        }
                        else
                        {
                            let A = Math.sqrt(Math.pow(value2,2) - Math.pow(value1,2));
                            console.log("A = " + A + '\n' + "B = " + value1+'\n'+"C = " + value2);

                            let alpha=Math.atan(A/value1)/(pi/180);

                            let beta=Math.atan(value1/A)/(pi/180);
                            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                    }
                    else if(type2==="leg")
                    {
                        if(value2>value1)
                        {
                            console.log("hypotenuse must be longer than leg")
                            console.log("Failed");
                        }
                        else
                        {
                            let A = Math.sqrt(Math.pow(value1,2) - Math.pow(value2,2));
                            console.log("A = " + A + '\n' + "B = " + value2+'\n'+"C = " + value1);

                            let alpha=Math.round(Math.atan(A/value2)/(pi/180),1);

                            let beta=Math.round(Math.atan(value2/A)/(pi/180),1);
                            console.log("alpha = " + alpha + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                    }
                    
                }
                else if((type1==="leg" && type2==="adjacent angle")|| (type2==="leg" && type1==="adjacent angle"))
                {
                    if(type1==="leg")
                    {
                        let C = value1/Math.cos(value2*(pi/180));
                        let A =value1*Math.tan(value2*(pi/180));
                        if(A>0&&C>0 && value2<=89)
                        {
                            console.log("A = " + A + '\n' + "B = " + value1+'\n'+"C = " + C);

                            let beta=90-value2;
                            console.log("alpha = " + value2 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");   
                            }
                        else
                           {
                            console.log("Something wrong with parameters...")
                            console.log("(angle must be less than 90 )")
                            console.log("this imposible for right triangle -")
                            console.log("A = " + A + '\n' + "B = " + value1+'\n'+"C = " + C);
                            console.log("Failed");
                        }
                        
                    }
                    else if(type2==="leg")
                    {
                        
                        let C = value2/Math.cos(value1*(pi/180));
                        let A =value2*Math.tan(value1*(pi/180));
                        if(A>0&&C>0&& value1<=89)
                        {
                            console.log("A = " + A + '\n' + "B = " + value2+'\n'+"C = " + value2);

                            let beta=90-value1;
                            console.log("alpha = " + value1 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                        else
                        {
                            console.log("Something wrong with parameters...")
                            console.log("(angle must be less than 90 )")
                            console.log("this imposible for right triangle -")
                            console.log("A = " + A + '\n' + "B = " + value2+'\n'+"C = " + value2);
                            console.log("Failed");
                        }
                        
                    }
                }
                else if((type1==="leg" && type2==="opposite angle")|| (type2==="leg" && type1==="opposite angle"))
                {
                    if(type1==="leg")
                    {

                        let C = value1/Math.sin(value2*(pi/180));
                        let A = Math.sqrt(C*C-value1*value1);
                        if(A>0&&C>0 && value2<=89)
                        {
                            console.log("A = " + A + '\n' + "B = " + value1+'\n'+"C = " + C);

                            let beta=90-value2;
                            console.log("alpha = " + value2 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");   
                            }
                        else
                           {
                            console.log("Something wrong with parameters...")
                            console.log("(angle must be less than 90 )");
                            console.log("this imposible for right triangle -")
                            console.log("A = " + A + '\n' + "B = " + value1+'\n'+"C = " + C);
                            console.log("Failed");
                        }
                         
                    }
                    else if(type2==="leg")
                    {
                        let C = value2/Math.sin(value1*(pi/180));
                        let A = Math.sqrt(C*C-value2*value2);
                        if(A>0&&C>0&& value1<=89)
                        {
                            console.log("A = " + A + '\n' + "B = " + value2+'\n'+"C = " + C);

                            let beta=90-value1;
                            console.log("alpha = " + value1 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                        else
                        {
                            console.log("Something wrong with parameters...")
                            console.log("(angle must be less than 90 )");
                            console.log("this imposible for right triangle -")
                            console.log("A = " + A + '\n' + "B = " + value2+'\n'+"C = " + value2);
                            console.log("Failed");
                        }
                    }
                }
                else if((type1==="angle" && type2==="hypotenuse")|| (type2==="angle" && type1==="hypotenuse"))
                {
                    if(type1==="angle")
                    {
                        if(value1>89)
                        {
                            console.log("angle must be less than 90 ");
                            console.log("Failed");
                        }
                        else
                        {
                            let A = value2*Math.sin(value1*(pi/180));
                            let B = value2*Math.cos(value1*(pi/180))
                            console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + value2);


                            let beta=90-value1;
                            console.log("alpha = " + value1 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                    }
                    else if(type2==="angle")
                    {
                        if(value2>89)
                        {
                            console.log("angle must be less than 90 ");
                            console.log("Failed");
                        }
                        else
                        {
                            let A = value1*Math.sin(value2*(pi/180));
                            let B = value1*Math.cos(value2*(pi/180))
                            console.log("A = " + A + '\n' + "B = " + B+'\n'+"C = " + value1);


                            let beta=90-value2;
                            console.log("alpha = " + value2 + '\n' + "beta = " + beta + '\n' + "hamma = 90");
                            console.log("success");
                        }
                    }
                }
                else
                {
                    console.log("Failed");
                    console.log("Incorrect parameters");
                }
            }
        }
    }
}
