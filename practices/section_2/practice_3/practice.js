function count_same_elements(collection) {
  var name_summary=[];
  var n=0;
  var num=0;
  name_summary[n]={name:collection[0],summary:1};
  var check1;
  var check2;
  for(i=1;i<collection.length;i++)
  {
     check1=1;
     for(j=0;j<n+1;j++)
     {
        if(collection[i]==name_summary[j].name)
        {
          name_summary[j].summary++;
          check1=0;
        }
     }
     if(check1==1)
     {
        if(collection[i].length>1)
        {
           num=Number(collection[i].replace(/\D/g, ""));
           for(k=0;k<collection[i].length;k++)
           {
              check2=1;
              for(l=0;l<n+1;l++)
              {
                 if(collection[i].charAt(k)==name_summary[l].name)
                 {

                    name_summary[n].summary+=num;
                    check2=0;
                 }
              }
              if(check2==0)
              {
                 break;
              }
              if(check2==1)
              {
                 n++;
                 name_summary[n]={name:0,summary:1};
                 name_summary[n].name=collection[i].charAt(0);
                 name_summary[n].summary=num;
                 break;
              }
           }
        }
        else
        {
           n++;
           name_summary[n]={name:0,summary:1};
           name_summary[n].name=collection[i];
        }

     }
  }
  return name_summary;
  }
  module.exports = count_same_elements;
