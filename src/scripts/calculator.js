import menu from './../menu.json';

window.increment = function (id) {
    const element = document.getElementById(id);
    let count = parseInt(element.textContent);
    count ++;
    element.textContent = count;
}

window.decrement = function (id) {
    const element = document.getElementById(id);
    let count = parseInt(element.textContent);
    if (count > 0) {
        count --;
        element.textContent = count;
    }
}

window.calculatePrice = function (){
    const menuItems = menu.menuList;

    let result = 0;
    let discount = 0;

    for (let i = 0; i < menuItems.length; i++){
        const amount = document.getElementById(menuItems[i].menuId);
        const amountToNumber = parseInt(amount.textContent);
        const price = menuItems[i].menuPrice;

        let toSum = Math.round((price * amountToNumber)*100) / 100;

        if (menuItems[i].menuName === 'Milkshake'){
            toSum = Math.round((toSum * 0.8)*100) / 100;
            discount = (toSum !== 0) ? (Math.round((menuItems[i].menuPrice - toSum)*100) / 100) : 0;
        }
        result =  Math.round((result + toSum)*100) / 100;
    }

    if (result === 0){
        const error = document.getElementById('calculator-error');
        error.textContent = 'Please select at least one item to calculate the price.'
    } 
    else {
        renderResult(result, discount);
    }
}

function renderResult(result, discount){
    if (document.getElementById('calculator-error')){
        document.getElementById('calculator-error').remove();
    }

    htmlTags('products', 'Products', result);

    if (!!discount) {
        htmlTags('discount', 'Milkshake discount', discount)
    }
    if (!discount && document.getElementById('discount-container')){
        document.getElementById('discount-container').remove()
    } 

    const vat = Math.round((result * 0.21) * 100)/100;
    const finalResult = Math.round((vat + result)*100) / 100;
  
    htmlTags('vat', '21% VAT', vat);
    htmlTags('total', 'Total', finalResult)
}

function htmlTags (type, text, number) {
    const result = document.getElementById('calculator-result');
    let container = document.getElementById(`${type}-container`) || document.createElement('div');
    container.id = `${type}-container`

    const resultText = document.createElement('p');
    const resultNumber = document.createElement('span');

    resultText.textContent = text;
    resultNumber.textContent = `$${number}`;
    container.innerHTML = '';

    container.appendChild(resultText);
    container.appendChild(resultNumber);
    result.appendChild(container)
}