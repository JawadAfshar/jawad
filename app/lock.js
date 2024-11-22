var count_password = document.querySelector("select");
var letter_password = document.querySelector("input");
var create = document.querySelector(".click");
var show_password = document.querySelector("div");
var show_help = document.querySelectorAll("div")[1];
function hide(){
    show_help.style.display = "none";
}
setTimeout(hide, 18000, 1);
// top is connection to html elements
var ci = 0;
function generate(){
    var l_f_c_p = [... letter_password.value];
    if(letter_password.value.length >= 4){
        if(count_password.value=="4"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            ci++;
                            var new_element = document.createElement("p");
                            new_element.className = "one_password";
                            new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4];
                            show_password.appendChild(new_element);
                        }
                    }
                }
            }
        }else if(count_password.value=="5"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                            var new_element = document.createElement("p");
                            new_element.className = "one_password";
                            ci++;
                            new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5];
                            show_password.appendChild(new_element);
                            }
                        }
                    }
                }
            }
        }else if(count_password.value=="6"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                                for(i6=0;i6<=l_f_c_p.length-1; i6++){
                                    var new_element = document.createElement("p");
                                    new_element.className = "one_password";
                                    ci++;
                                    new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5]+""+l_f_c_p[i6];
                                    show_password.appendChild(new_element);
                                }
                            }
                        }
                    }
                }
            }
        }else if(count_password.value=="7"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                                for(i6=0;i6<=l_f_c_p.length-1; i6++){
                                    for(i7=0;i7<=l_f_c_p.length-1; i7++){
                                        var new_element = document.createElement("p");
                                        new_element.className = "one_password";
                                        ci++;
                                        new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5]+""+l_f_c_p[i6]+""+l_f_c_p[i7];
                                        show_password.appendChild(new_element);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }else if(count_password.value=="8"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                                for(i6=0;i6<=l_f_c_p.length-1; i6++){
                                    for(i7=0;i7<=l_f_c_p.length-1; i7++){
                                        for(i8=0;i8<=l_f_c_p.length-1; i8++){
                                            var new_element = document.createElement("p");
                                            new_element.className = "one_password";
                                            ci++;
                                            new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5]+""+l_f_c_p[i6]+""+l_f_c_p[i7]+""+l_f_c_p[i8];
                                            show_password.appendChild(new_element);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }else if(count_password.value=="9"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                                for(i6=0;i6<=l_f_c_p.length-1; i6++){
                                    for(i7=0;i7<=l_f_c_p.length-1; i7++){
                                        for(i8=0;i8<=l_f_c_p.length-1; i8++){
                                            for(i9=0;i9<=l_f_c_p.length-1; i9++){
                                                var new_element = document.createElement("p");
                                                new_element.className = "one_password";
                                                ci++;
                                                new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5]+""+l_f_c_p[i6]+""+l_f_c_p[i7]+""+l_f_c_p[i8]+""+l_f_c_p[i9];
                                                show_password.appendChild(new_element);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }else if(count_password.value=="10"){
            for(i1=0;i1<=l_f_c_p.length-1; i1++){
                for(i2=0;i2<=l_f_c_p.length-1; i2++){
                    for(i3=0;i3<=l_f_c_p.length-1; i3++){
                        for(i4=0;i4<=l_f_c_p.length-1; i4++){
                            for(i5=0;i5<=l_f_c_p.length-1; i5++){
                                for(i6=0;i6<=l_f_c_p.length-1; i6++){
                                    for(i7=0;i7<=l_f_c_p.length-1; i7++){
                                        for(i8=0;i8<=l_f_c_p.length-1; i8++){
                                            for(i9=0;i9<=l_f_c_p.length-1; i9++){
                                                for(i0=0;i0<=l_f_c_p.length-1; i0++){
                                                    var new_element = document.createElement("p");
                                                    new_element.className = "one_password";
                                                    ci++;
                                                    new_element.innerHTML = "<i class='number'>"+ci+"</i>"+l_f_c_p[i1]+""+l_f_c_p[i2]+""+l_f_c_p[i3]+""+l_f_c_p[i4]+""+l_f_c_p[i5]+""+l_f_c_p[i6]+""+l_f_c_p[i7]+""+l_f_c_p[i8]+""+l_f_c_p[i9]+""+l_f_c_p[i10];
                                                    show_password.appendChild(new_element);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    create.id = "";
    create.className = "click";
}

create.addEventListener("click",
function(e){
    create.id = "load";
    create.className = "load";
    setTimeout(generate, 3000, 1);
});