class el_challengingDom {

    // Validar acesso ao site corretamente

    textHead = () => { return '.h3'}

    textP = () => { return '.p'}

    // Botões
    button = () => { return '.button'}

    // Aqui valida que está na coluna "Action"

    columnAction = () => { return '.thead > tr > :nth-child(7)'}

    // Aqui ele valida se clicou nos botões "edit" e "delete"
    buttonEdit = () => { return ':nth-child(7) > [href="#edit"]'}

    buttonDelete = () => { return ':nth-child(7) > [href="#delete"]'}
}
export default new el_challengingDom;




// [data-test=bSubmit]