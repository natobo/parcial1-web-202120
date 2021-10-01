const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  console.log(input.value);
  if(!input.value){
    alert('Insertar un numero para hacer la query');
  }else{
    removeAllChildNodes(tbody);
    getresults(input.value).catch(e=>console.log(e));
  }
  event.preventDefault();
});


const createRow = (id,couple) => {
  return `<tr>
      <td>${id}</td>
      <td>${couple[0].first_name + couple[0].last_name }</td>
      <td>${couple[1].first_name + couple[2].last_name }</td>
    </tr>`;
};
/**
 * Llamado al backend con param
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`http://localhost:3000/api/pairPlayerInch/${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  if(!data.couples){
    alert(data.message);
    return;
  }
  else{
    let stringHtml = "";
    let id = 1;
    console.log(data.couple);
    Array.from(data.couples).forEach(p=>{
      stringHtml+=createRow(id,p);
      ++id;
    })
    tbody.innerHTML = stringHtml;
    console.log(data.couples);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
