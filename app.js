const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const ctype = form.elements.coinType.value;
      
    
    // console.log(ctype);
    fetchPrice(ctype);

});

const fetchPrice = async(ctype)=>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);

    // console.log(r.data.coin.price);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = "INR";
    var col= "green";
    if(change<0){
        col = "red";
    }
    // const time = r.data.coin.time;

    res.innerHTML = `<tr style="background-color:blue; color:white; font-weight:700 ">
    <td>
        property
    </td>
    <td>
        value
    </td>
</tr>
<tr>
    <td>
        ${base}
    </td>
    <td style="color:${col};"><span style="font-size: 1.3em;">${price}</span> ${target}</td>
</tr>

<tr>
    <td>
        Volume
    </td>
    <td>
        ${volume}
    </td>
</tr>

<tr>
    <td>
        Change
    </td>
        
    <td style="color:${col};">${change} ${target}</td>
</tr>

`;
    
}
