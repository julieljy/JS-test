function create_updated_collection(collection_a, object_b) {
  var key_count=[];
  var n=0;
  key_count[n]={key:collection_a[0],count:1};
  var check;
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
        key_count[n].key=collection_a[i].charAt(0);
        key_count[n].count=1;
        if(collection_a[i].length>1){
          for(k=0;k<collection_a[i].length;k++)
                {
                  if(parseInt(collection_a[i].charAt(k))!=NaN)
                  {
                    key_count[n].count=parseInt(collection_a[i].charAt(k));
                  }
                }
        }
     }
    //在这里写入代码
  }
  for(l=0;l<key_count.length;l++)
    {
      for(m=0;m<object_b.value.length;m++)
      {
        if(key_count[l].key==object_b.value[m])
        {
          key_count[l].count-=(key_count[l].count-key_count[l].count%3)/3;

        }
      }
    }
    return key_count;
  //在这里写入代码
}

module.exports = create_updated_collection;
