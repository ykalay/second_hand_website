import { Pipe, PipeTransform } from '@angular/core';
import { ilan } from './ilan';

@Pipe({
  name: 'ilanFilter'
})
export class IlanFilterPipe implements PipeTransform {

  transform(value: ilan[], filterText: string): ilan[] {

   if(!filterText){
      return value;
   }
   else{
    const seen= new Set();
    const arr1 = value.filter((ilan=>ilan.ilan_baslik.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1));
    const arr2 = value.filter((ilan=>ilan.ilan_aciklama.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1));
    while(arr2.length > 0) {
        arr1.push(arr2.pop());
    }

    for(var i=0;i<arr1.length;i++){
      for(var j=i+1;j<arr1.length;j++){
        if(arr1[i]._id==arr1[j]._id) arr1.splice(j,1);




      }



    }

    console.log(arr1);



    return arr1
   }
    
  }

}
