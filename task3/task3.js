var num=424569;
var count=0;
for (var i=0; i<num; i++)
{
    num /=10;
    if (num>0)
    {
        count++;
    }
}
console.log(count+1);