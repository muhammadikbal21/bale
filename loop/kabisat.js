let year = new Date().getFullYear();
for(let year= 0; year <= 2020; year++){
    if(year % 400 == 0){
        console.log(year, "adalah Tahun Kabisat")
    }else if (year % 4 == 0){
        console.log(year, "adalah Tahun Kabisat")
    }else if (year % 100 == 0){
        console.log(year, "adalah Bukan Tahun Kabisat")
    }else{
        console.log(year, "adalah Bukan Tahun Kabisat")
    }
}