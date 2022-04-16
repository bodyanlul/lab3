async function getVac() {
    let job = document.getElementById("in").value;
    console.log(job);
    let url = `https://api.hh.ru/vacancies?currency=RUR&only_with_salary=true&text=${job}`;
    let response = await fetch(url).then(res => res.json()).then(ans => {
        console.log(ans);
        let vac ="";
        for(let i = 0; i<ans.items.length;i++)
        {
        let salary = ""
        if(ans.items[i].salary.from!=null && ans.items[i].salary.to!=null)
        {
            salary = ""+ans.items[i].salary.from+"-"+ans.items[i].salary.to+" "+ans.items[i].salary.currency;
        }
        else if (ans.items[i].salary.from ==null)
        {
            salary = "Не указана";
        }
        else if(ans.items[i].salary.to==null)
        {
            salary = ""+ans.items[i].salary.from+" "+ans.items[i].salary.currency;
        }
        vac += "Название: "+ans.items[i].name +'\n'+"Город: "+ans.items[i].area.name+'\n'+"Зарплата: "+salary+'\n'+"Ссылка: "+ans.items[i].alternate_url+'\n'+"__________________________________"+'\n';
        }
        console.log(vac);
        document.getElementById("task").innerText=vac;
    })
    
}