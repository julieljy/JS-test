function create_updated_collection(collection_a, object_b) {
var key_count=[];
var n=0;
var check;
key_count[n]={key:collection_a[0],count:1};
  for(i=1;i<collection_a.length;i++)
  {
  check=1;
    for(j=0;j<n+1;j++)
    {
      if(collection_a[i]==key_count[j].key)
      {
        key_count[j].count++;
        check=0;
      }
    }
    if(check==1)
    {
      n++;
      key_count[n]={key:0,count:0};
      key_count[n].key=collection_a[i];
      key_count[n].count=1;
    }
  }
  for(k=0;k<n+1;k++)
  {
    for(l=0;l<object_b.value.length;l++)
    {
      if(key_count[k].key==object_b.value[l])
      {
        key_count[k].count-=(key_count[k].count-key_count[k].count%3)/3;
      }
    }
  }
  return key_count;
  //在这里写入代码
}

module.exports = create_updated_collection;
