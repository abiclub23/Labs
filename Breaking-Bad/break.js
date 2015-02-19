// restrucute js code
// add elements
// atomic wieght display
// input validation
//convert to image

var array_name = [];
     var single_match_index = [];
     var lname_single_match_index = [];
     var lname_single_match_index = [];
     var  double_match_index = [];
     var  lname_double_match_index = [];
      var fname,fname_len,lname,lname_len,double_match_lname,double_match;
      var fname_ename_double = [], fname_ename_single = [];
      var lname_ename_double = [], lname_ename_single = [];


$periodic =[
    {
        "name": "Hydrogen",
        "symbol": "H",
        "atomicWeight": 1.0079
    },
    {
        
        "name": "Helium",
        "symbol": "He",
        "atomicWeight": 4.0026
    },
    {
        
        "name": "Lithium",
        "symbol": "Li",
        "atomicWeight": 6.941
    },
    {
        
        "name": "Beryllium",
        "symbol": "Be",
        "atomicWeight": 9.0122
    },
    {
        
        "name": "Boron",
        "symbol": "B",
        "atomicWeight": 10.811
    },
    {
        
        "name": "Carbon",
        "symbol": "C",
        "atomicWeight": 12.0107
    },
    {
       
        "name": "Nitrogen",
        "symbol": "N",
        "atomicWeight": 14.0067
    },
    {
       
        "name": "Oxygen",
        "symbol": "O",
        "atomicWeight": 15.9994
    },
    {
       
        "name": "Fluorine",
        "symbol": "F",
        "atomicWeight": 18.9984
    },
    {
        
        "name": "Neon",
        "symbol": "Ne",
        "atomicWeight": 20.1797
    },
    {
        
        "name": "Sodium",
        "symbol": "Na",
        "atomicWeight": 22.990
    },
    {
        
        "name": "Magnesium",
        "symbol": "Mg",
        "atomicWeight": 24.305
    },
    {
       
        "name": "Aluminum",
        "symbol": "Al",
        "atomicWeight": 26.982
    },
    {
       
        "name": "Silicon",
        "symbol": "Si",
        "atomicWeight": 28.085
    },
    {
       
        "name": "Phosphorus",
        "symbol": "P",
        "atomicWeight": 30.974
    },
    {
       
        "name": "Sulfur",
        "symbol": "S",
        "atomicWeight": 32.06
    },
    {
       
        "name": "Chlorine",
        "symbol": "Cl",
        "atomicWeight": 35.45
    },
    {
       
        "name": "Argon",
        "symbol": "Ar",
        "atomicWeight": 39.948
    }
]


function generate_name (index , index2 ,  uname , ename) {
       // body...
       console.log(uname, "uname")
       console.log(index, "index");
       console.log(index2,"index2");
       console.log(ename,"ename");
      // $('#result').empty();
       var uname_len = uname.length;
       //uname = uname[0].toUpperCase();
       var new_html = "";
       var name = "";
       var nochem = true;
       
       if(ename.length > 0)
       {
        name = $periodic[ename[0]].name;
       }
        
      // new_html += '<span class="atomic">12</span>';
       for( var j=0; j< uname_len;j++)
         {
               if( j == index[0])
               { 
                    nochem = false;
                     new_html += '<span class="font" data-toggle="tooltip" data-original-title= "YO ,its '+name+' Bitch " >'+uname[j].toUpperCase()+'</span>';
               }
               else if ( j == index2[0])
               {
                     nochem = false;
                     new_html += '<span class="font" data-toggle="tooltip" data-original-title="YO ,its '+name+' Bitch ">'+uname[j].toUpperCase()+''+uname[j+1]+'</span>';
               }
               else
               {
                    if(index2)
                    {
                        if( j == (index2[0]+1))
                        {
                            console.log("im being skipped");
                        }
                         else
                        {
                            new_html += '<span >'+uname[j]+'</span>';
                        }

                     
                    }
                    else
                    {
                        new_html += '<span >'+uname[j]+'</span>';
                    }
               } 
                   
                

         }
        console.log(nochem ,"nochem") ;

        /*if(nochem)
        {
            $('.bg-success').removeClass('hidden').addClass('show');
            return false;
        }
        else
        {
            $('.bg-success').addClass('hidden').removesClass('show');
           
        }*/

        $('#result').append('<span class="wrap"> '+new_html+' </span>');
       
   }


$(document).ready(function() {

    $.each($periodic, function(i, symbol) {
            
         array_name.push($periodic[i].symbol.toLowerCase());
           
    });

   /* $(window).resize(function(){    
        if ($(window).width() <= 480){  
        
                $(".input-group").removeClass('input-group-lg');
        }

  });*/
     
   $('#submit').click(function(){

    console.log ("click")

       single_match_index.length = 0;
       double_match_index.length = 0;
       fname_ename_single.length = 0;
       fname_ename_double.length = 0;
       lname_ename_single.length = 0;
       lname_ename_double.length = 0;
       lname_single_match_index.length = 0;
       lname_double_match_index.length = 0;

        $('#result').empty();
        fname = $("#fname").val().toLowerCase();
        fname_len = fname.length;
        console.log(fname)
        lname = $("#lname").val().toLowerCase();
        lname_len = lname.length;
        


        var regexp1=new RegExp("[^a-z]");
        if(regexp1.test(fname))
        {
            //alert("Only alphabets from a-z are allowed");
            $('.alert-danger').removeClass('hidden').addClass('show');
            return false;
        }
        else
            { $('.alert-danger').addClass('hidden').removeClass('show'); }
         console.log(array_name);
         // compare first name
         for( var j=0; j< fname_len;j++)
         {
            for (var k = 0 ; k < array_name.length ; k++)
            {
                // Single Char Compare
                if ( fname[j] == array_name[k])
                {
                   // alert (array_name[k]);
                    single_match_index.push(j);
                     fname_ename_single.push(k);
                    //console.log(fname_element_name, "fname_element_name")
                    console.log(single_match_index, "single_match_indexs")

                }
               
                // Double Char Compare
                if(typeof(fname[j+1]) !== "undefined" )
                {
                    double_match = fname[j]+fname[j+1];
                    //console.log("double_match" , double_match)
                    if(double_match == array_name[k])
                    {
                        fname = fname.replace(fname[j],double_match);
                        fname = fname.slice(0, j+1) + fname.slice(j+2, fname.length);
                        fname_ename_double.push(k);
                        double_match_index.push(j);
                        console.log("match double" ,fname )
                    }

                }
                
            }
         }
         
        if(double_match_index.length)
         {
            generate_name("" ,double_match_index ,fname,fname_ename_double);
            console.log("generate double_match - fname_ename_double" ,fname_ename_double )
         }
         else
         {
            generate_name(single_match_index , "" ,fname,fname_ename_single);
            console.log("generate single_match - fname_ename_single",fname_ename_single)
         }

         for( var j=0; j< lname_len;j++)
         {
            for (var k = 0 ; k < array_name.length ; k++)
            {
                if ( lname[j] == array_name[k])
                {
                   // alert (array_name[k]);
                    lname_single_match_index.push(j);
                    lname_ename_single.push(k);
                    console.log(lname_single_match_index, "single_match_index_Last Name")

                }

                if(typeof(lname[j+1]) !== "undefined" )
                {
                    double_match_lname = lname[j]+lname[j+1];
                    //console.log("double_match" , double_match)
                    if(double_match_lname == array_name[k])
                    {
                        //lname = lname.replace(lname[j],double_match_lname);
                       // lname = lname.slice(0, j+1) + lname.slice(j+2, lname.length);
                        lname_double_match_index.push(j);
                        lname_ename_double.push(k);
                        console.log("match double" ,lname )
                    }

                }
            }
         }
        //generate name
        if(lname_double_match_index.length)
         {
           generate_name("" ,lname_double_match_index ,lname, lname_ename_double);
            console.log("generate double_match")
         }
         else
         {
            generate_name(lname_single_match_index , "" ,lname, lname_ename_single);
            console.log("generate single_match")
         }
        
         $(".font").tooltip({ placement : 'top' });
        
   });// end submit

  


   
   

   
});
