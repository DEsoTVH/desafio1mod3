const colorInput = document.getElementById('colorselect');

colorInput.addEventListener('change', function() {
            
    const color = colorInput.value;
});

function showDiv () {
    const showing = document.getElementById('showpreview')
    showing.removeAttribute("hidden")
    console.log(showing)
    const color = colorInput.value;
    const quantity = document.getElementById('amountselect').value;
    const precio = 500;
    const total = precio * quantity;
    const resumenCompra = document.querySelector('.shopresume');
    const contenidoResumen = `
        <h2>Shop Cart</h2>
        <div class="compraresumendiv">
        <h4>Shopping summary:</h4>
        <p>Color: <span style="background-color: ${color}; color: white;">${color}</span></p>
        <div style="background-color: ${color}; width: 3rem; height: 3rem; border-radius:25px"; ></div>
        <p class="pcantidad">Quantity: ${quantity}</p>
        <p class="ptotal">Total: ${total}USD</p>
        <button id="btncalcular">PLACE ORDER</button>
        </div>
    `;

    resumenCompra.innerHTML = contenidoResumen;

}
