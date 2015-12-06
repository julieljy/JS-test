function count_same_elements(collection) {
var key_count=[];
var n=0;
key_count[n]={key:collection[0],count:1};
var check;
for(i=1;i<collection.length;i++)
{
  check=1;
   for(j=0;j<n+1;j++)
   {
      if(collection[i]==key_count[j].key)
      {
        key_count[j].count++;
        check=0;
      }

   }
   if(check==1)
   {
      n++;
      key_count[n]={key:0,count:0};
      key_count[n].key=collection[i].charAt(0);
      key_count[n].count=1;
      if(collection[i].length>1){
        for(k=0;k<collection[i].length;k++)
              {
                if(parseInt(collection[i].charAt(k))!=NaN)
                {
                  key_count[n].count=parseInt(collection[i].charAt(k));
                }
              }
      }
   }
  //在这里写入代码
}
  return key_count;
}
module.exports = count_same_elements;
