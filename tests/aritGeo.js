function aritGeo(numArray){
	if (arr[arr.length]/arr[arr.length -1] == arr[1]/arr[0]){
		return "Geometric"
	} else if(arr[arr.length]-arr[arr.length -1] == arr[1]-arr[0]){
		return "Arithmetic";
	}else if (arr == []){
		return 0;
	}else{
		return -1;
	}
}