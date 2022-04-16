function calculate()
{
    var array = (document.getElementById("time").value).split(';');
    const time = array[0];
    const sum = parseInt(document.getElementById("sum").value);
    const percent = array[1];
    var sumpercent = Math.round(sum+(sum*percent*time*30.417/365)/100);
    var total = "Вклад"+" на срок "+time+" месяцев на сумму "+sum+" руб.\n"+"В конце срока вы получите "+sumpercent+" руб.";
    document.getElementById("result").value=total
}

function switch_type()
{
    var selecters = document.querySelectorAll("#time")[0].children;
    var type = document.getElementById("type").value;
    var time =document.getElementById("time");
    time.disabled=false;
    if(type == 'long')
    {
        selecters[1].style.display='none';
        selecters[2].value="6;20";
        selecters[3].style.display='none';
        selecters[4].value="12;22";
        selecters[5].value="18;15";
        selecters[6].value="24;10";
    }
    else if (type == 'fast')
    {
        selecters[1].style.display='initial';
        selecters[2].value="6;22";
        selecters[3].style.display='initial';
        selecters[4].value="12;24";
        selecters[5].value="18;18";
        selecters[6].value="24;15";
    }
}

