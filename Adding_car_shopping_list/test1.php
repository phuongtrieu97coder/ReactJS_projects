<!DOCTYPE html>
<html lang="en">


       <head>
              <meta charset="UTF-8">


              <meta name="keywords"  content="HTML,CSS,JAVASCRIPT,BOOSTRAP,W3CSS,
              SASS,JQUERY,ANGULAR JS, REACT JS, PHP, MYSQL, NODE.JS, ASP.NET">


              <meta name="description"   content="THIS IS TEMPLATE FASHION BLOG">


              <meta name="autdor"   content="PHUONG.TRIEU">



              <meta name="viewport"  content="width=device-width, initial-scale=1.0">




              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
       
              <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script> 


              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              
              
              <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-route.js"></script>
              

              <script src="https://cdn.plot.ly/plotly-2.8.3.min.js"></script>


              <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>




              <link rel="shortcut icon" href="image/html_logo.png" type="image/x-icon">


              <title>PHUONG WEBSITE</title>



             <link rel="stylesheet" type="text/css" href="test1.css">





              <style>
   
    
              </style>
       </head>




       <body>
       

       
     
            
   

         <header>
       
      

          </header>


         
     <main>

     <form id="form1" title="form1" name="form1" data-form1="form1-shopping-list-data"
     action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post" target="_self"
     enctype="multipart/form-data" ng-app="form1_app" ng-controller="form1_app_controller"
     style="width:800px;font-size:25px;border:5px double yellowgreen;
     position:relative;left:300px;padding-right:120px;"
     >

    


     <div id="form1_1"></div>

      <div id="form1_2">
      <span>
                     <b>Your Car info is: <br>
              <i id='result' ng-model="car_result_model">
                     {{add_item2_input_model +','+add_item_input_model}}

              </i></b>
     </span><br/>
     
        
         <div id="form1_2_car_info_block"> </div>

         <div id="form1_2_car_order_after_being_added" 
         >
                  <b>Your Car list:</b><br>
                  <table id="car_order_after_being_added_table_list" 
                  >
                        
                  </table>
                  
        </div>
   

        <span id="car_item_storage_error_message" 
        class="text-danger"></span>




              <button class="add_item_butt btn text-white w3-green
                 w3-hover-aqua w3-hover-text-white"
                 id="add_item_butt" title="add_item button" name="add_item_button"
                type="button"  data-add_item-butt="shopping item add_item button data"
                
                
                style="position:absolute;right:0;top:0;bottom:0;font-size:25px;padding:10px 20px;"
                ><i class="fa fa-plus"></i> ADD</button>
      </div>

     


    

     </form>
    

<script>

document.getElementById("form1").prop_data1_obj={
       prop1:"val1",
       prop2:"val2"
} 
document.querySelectorAll("#form1")[0].dataset.Form1Dataset1 = "form1-dataset-1-shopping-list";






var jq = $.noConflict();
jq(document).ready(function($){

       var form1_datablock_obj = {
              data1:"val1",
              data2:"val2"
       }
       $("#form1")
       .data(form1_datablock_obj)
       .on("Custom.Form1_Namespace1",
           {
                  form1_namespace_data1:"data_namespace1",
                  form1_namespace_data2:"data_namespace2"
           },
           function(event){
                  console.log(event.namespace + "\n");
                  console.log(event.data.form1_namespace_data1+ "\n");
                  console.log(event.data.form1_namespace_data2+ "\n");
           }
       ).contextmenu(function(){
              $(this).trigger("Custom.Form1_Namespace1");
       })
       ;

       $("test1,test2,test3").hide();

       //

       $("#add_item_field")
       .change(function(){
              var add_item_field_val_arr = $(this).val().split(" ");
              var txt = "";
              for(let i = 0; i<add_item_field_val_arr.length;i++){
                     txt += add_item_field_val_arr[i].charAt(0).toUpperCase()+add_item_field_val_arr[i].slice(1)+" ";
                     $(this).val(txt);
              }
       })
       
       .keyup(function(){
             
              


              if($("#add_item_field").val().toLowerCase().includes("lamborghini aventador")){
              $("test1").fadeIn(2000);
              $("test2,test3").hide();
              }else if($("#add_item_field").val().toLowerCase().includes("lamborghini huracan")){
                     $("test2").fadeIn(2000);
                     $("test1,test3").hide();
              }else if($("#add_item_field").val().toLowerCase().includes("lamborghini veneno")){
                     $("test3").fadeIn(2000);
                     $("test2,test1").hide();
              }else{
                     console.log("");
              }
       });


       $("#car_order_after_being_added_table_list").width(400)
      
    

       var car_storage = [];
         
       var car_storage_txt = "";

      

           
    
                            
              $("[id='add_item_butt']").click(function(){
                      if(car_storage.indexOf($("[id='add_item_field']").val()) == -1){
                          car_storage.push($("[id='add_item_field']").val());

                                     for(let i = 0; i< car_storage.length;i++){
                                          car_storage_txt += `
                                          <tr class="car_added_row">
                                          <td style='border:5px solid green;text-align:center;position:relative;top:0'>
                                          ${car_storage[i]} 
                                          <button id="remove_button" title="remove_button" name="remove_button"
                                          type="button" data-remove-button="remove button data" 
                                          class="remove_button btn w3-transparent
                                          w3-hover-red w3-hover-text-white" onclick="remove_car_added_func()"
                                          style="position:absolute;top:0;right:0;bottom:0;color:red;font-size:20px">&times;</button>
                                          </td>
                                          </tr>

                                          `;
                                   $("[id='car_order_after_being_added_table_list']").html(car_storage_txt);
                                   }
                          
                        }else{
                             $("#car_item_storage_error_message").html("Sorry, this car already exists in your list!!!");
                        }    
                  
              });
            


});



 
</script>

   
              

   <script type="text/babel">
        
        function func1(){
             
               return (

              <div>
                     <input className="add_item_field text-primary"
                 id="add_item_field" title="add item input field" name="add_item_field"
                type="text"  data-add-item-field="shopping item add item input field data"
                style={{width:"100%"}}
                placeholder="Enter your car model..."
                ng-model="add_item_input_model"
              />


            <input className="add_item2_field text-primary
                 "
                 id="add_item2_field" title="add item2 input field" name="add_item2_field"
                type="text"  data-add-item2-field="shopping item add item2 input field data"
                style={{width:"100%"}}
                placeholder="Enter your car brand..."
                ng-model="add_item2_input_model"
              />

             

              </div>
               );
                
              
              
        }


       
       

        ReactDOM.render(func1(),document.getElementById("form1_1"));
    



        function func2(){
               return (

                     <div>
                      <test1 data1="car_item.car_list1[0]"></test1>
                      <test2 data1="car_item.car_list1[3]"></test2>
                      <test3 data1="car_item.car_list1[5]"></test3>
                      </div>
               )
        }

        ReactDOM.render(func2(),document.getElementById("form1_2_car_info_block"));
     
   </script>





<script>



       
var shopping_app = angular.module("form1_app",[]);
shopping_app.controller("form1_app_controller",function($scope,$http){
       $scope.code1='4556797897898798797935134634556';
       $http({
              method:"POST",
              url:"car_list.json"
       }).then(
              function success(response){
                     $scope.car_item = response.data;
              },
              function erro(response){
                     $scope.error_message = "Sorry, there was an error happening when loading your data!!!";
                     console.log(response.status);
                     console.log(response.statusText);
              }
       );
       

});

shopping_app.directive("test1",function(){
       return {
              restrict:"E",
              scope:{
                     data1:"="
              },
              templateUrl:"test2.php"
       }
});

shopping_app.directive("test2",function(){
       return {
              restrict:"E",
              scope:{
                     data1:"="
              },
              templateUrl:"test2.php"
       }
});

shopping_app.directive("test3",function(){
       return {
              restrict:"E",
              scope:{
                     data1:"="
              },
              templateUrl:"test2.php"
       }
});



</script>





<script>
       
      
</script>
    </main>



       
       </body>





       <footer>

       </footer>



</html>
