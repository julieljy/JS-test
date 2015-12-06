function collect_same_elements(collection_a, collection_b) {
   var same = [];
   var k=0;
   for(i=0;i<collection_a.length;i++)
    {
      for(j=0;j<collection_b.length;j++)
      {
      if(collection_a[i]==collection_b[j])
       {
       same[k]=collection_a[i];
       k++;
       }
      }
   }
   return(same);
  //在这里写入代码
}

module.exports = collect_same_elements;
