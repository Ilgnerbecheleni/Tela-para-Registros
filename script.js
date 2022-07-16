const btn_criar = document.querySelector('#cria'); // botao adicionar linha
const btn_apagar = document.querySelector('.apaga'); // botao apagar linhas
const table = document.querySelector("#tabela"); //tabela
const janela = document.querySelector("#janela"); //janela de insert
const btn_salvar = document.querySelector("#salvar"); //botão salvar
const txt_name = document.querySelector("#name"); //txt nome
const txt_phone = document.querySelector("#phone"); //txt telefone
const txt_email = document.querySelector("#email"); //txt email
const form_data = document.querySelector("#data"); // formulario
const fecha_form = document.querySelector(".span_fecha"); //botao fecha form


fecha_form.addEventListener("click", () => { // evento fecha form
    janela.classList.add("hidden");
    form_data.reset();
})

btn_criar.addEventListener("click", () => { //evento abrir form

    janela.classList.remove("hidden");

});

btn_salvar.addEventListener("click", () => { // adicionar elemento
    let name = txt_name.value; // pega dados dos txt
    let phone = txt_phone.value;
    let email = txt_email.value;

    if (!name == "" && !phone == "" && !email == "") { //verifica dado vazio
        tam = table.rows.length; //pega a ultima linha
        console.log(tam); // debug
        line = table.insertRow(tam); //insere linha apos a ultima linha

        cel1 = line.insertCell(0); // joga cada celula em uma variavel [colunas]
        cel2 = line.insertCell(1);
        cel3 = line.insertCell(2);
        cel4 = line.insertCell(3);
        cel1.innerHTML = name; // adiciona valor
        cel2.innerHTML = phone;
        cel3.innerHTML = email;
        cel4.innerHTML = " <button class='delete' onclick='apaga(this)'>Apagar</button>"; //adiciona um botão
        janela.classList.add("hidden"); //adiciona classe para remove o form
        form_data.reset(); /// reset dos dados digitados
    } else {
        alert("Preencha os seus dados!"); //se tiver dado vazio emite alerta
    }
});

let apaga = (line) => { // apagar linha
    var i = line.parentNode.parentNode.rowIndex; //pega a linha que se quer apagar , do elemento recebido na função

    table.deleteRow(i); //deleta linha selecionada
}