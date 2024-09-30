
import { parse } from 'node-xlsx';

var datadrivenexcel =({
	
	/**
	 * @name xlsxTabletoJSON
	 * @description This Function takes excelbook name, sheet name and table name and converts the table in specific sheet to JSON
	 * @param {filename} excelBookName
	 * @param {sheetNumber} index of sheet starting from 0
	 * @param {tableName} table name
	 * @returns {JSON} JSONString
	 * 
	 */

	convertToJSON: function(excelBookName, sheetindex,table){
		var datafromexcelsheet  = parse(excelBookName);
		var array = datafromexcelsheet[sheetindex].data;
		var arraylength =array.length;
		var each_array_rowlength,table_headerlength,table_each_rowlen;
		var j,i,o=0;
		var testscenario;
		var headercount=0;
		var data,tabledata= {};
		var jsonData,table_header,table_value,table_values = [];
	   
	   for (j=0;j < arraylength;j++){
			var rowvalue= array[j].join()
			rowvalue=rowvalue.split(',');
			each_array_rowlength = rowvalue.length;
			for (i=0;i<each_array_rowlength;i++){
				if (rowvalue[i]== table){
					//  Join is used to convert  array elements into a string:
					var first = array[j+1].join()
					first= first.split(',');
					table_header = [];
					for (o=0;o <first.length;o++){
						if (first[o]!= ""){
							var name = (first[o]);
							// Pass the header value 
							table_header.push(first[o]);
							headercount++;
						}
					}
					// Set row to read
					j=j+2;
					table_value=[];
					for (  j ; j < arraylength; j++ ){
						//  Join is used to convert  array elements into a string:
						var myRow = array[j].join()
						// pass the row value one by one
						var row = myRow.split(',');
						table_each_rowlen= 	row.length;
						table_values=[];
						for (var n=0;n<table_each_rowlen;n++){
							if (row[n] == table){
								// Exist for loop
								testscenario = "B";
								break;
							}else{
								// Add value parameter value one by one
								table_values.push(row[n]);
							}
						}
							if (table_values.length !="0"  ){
								// Push the array value one by one 
								table_value.push(table_values);
							}
							if (testscenario=="B"){
								break;
							}
							
					}
					jsonData = [];
					var jsonheader = table_header;
					var len= table_value.length;
					for ( var x = 0; x < len; x++ ){
						data ={};
						var jsonvalue= table_value[x].join()
						var value=jsonvalue.split(',');
						for ( var y = 0; y <= headercount-1; y++ ){
							// Here add header value and parameter value
							data[jsonheader[y]] = value[y];
						}
						jsonData.push(data);
					}
				}
				
			}

		}
		return JSON.parse(JSON.stringify(jsonData));
	},

	/**
	 * @name getjsonabjectfromJsonarry
	 * @description This Function is used to get the specific jsonobject from jsonarray
	 * @param {filename} jsonarray
	 * @param {Jsonobject} index of sheet starting from 0
	 * @returns {JSON} JSONString
	 */
	get_specific_jsonobject_from_jsonarray: function(jsonarray_value,index){
		return JSON.parse(JSON.stringify(jsonarray_value[index]));
	}
	
	
});

export default datadrivenexcel;
