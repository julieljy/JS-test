function count_same_elements(collection) {
  var key_count=[];
  var n=0;
  var check;
  key_count[n]={key:collection[0],count:1}
    for(i=1;i<collection.length;i++)
    {
      check=0;
      for (var j=0;j<n+1;j++)
      {
        if (collection[i]==key_count[j].key)
        {
        key_count[j].count++;
        check=1;
        }
      }
      if (check==0)
        {
         n++;
         key_count[n]={key:0,count:0};
         key_count[n].key=collection[i];
         key_count[n].count=1;
        }
  }
  return key_count;
  //在这里写入代码
}
module.exports = count_same_elements;
