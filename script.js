// Вам нужно оформить программу конвертер валют, используя пройденные темы.

// Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение).
// Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет
// перевести, после чего получает ответ (для общения с пользователем используем prompt и alert подробнее

// ).
// Если пользователь ввел что-то неверно, нужно повторить ввод этой информации.
// По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.

let currency;
let amount;
let exchange;
let exchangeQuestion;
function currencyFunc(currencyName){

    switch (currencyName){
        case "USD":
            if(exchange === "RUB"){
                return amount * 71.12;
            }else if(exchange === "EUR"){
                return amount * 0.86;
            } else if(exchange === "UAN"){
                return amount * 26.29;
            } else if(exchange === "AUD"){
                return amount * 1.33;
            }

        case "RUB":
            if(exchange === "USD"){
                return amount * 0.014;
            }else if(exchange === "EUR"){
                return amount * 0.012;
            } else if(exchange === "UAN"){
                return amount * 0.37;
            } else if(exchange === "AUD"){
                return amount * 0.02;
            }

        case "EUR":
            if(exchange === "USD"){
                return amount * 1.16;
            }else if(exchange === "RUB"){
                return amount * 82.33;
            } else if(exchange === "UAN"){
                return amount * 30.44;
            } else if(exchange === "AUD"){
                return amount * 1.54;
            }

        case "UAN":
            if(exchange === "USD"){
                return amount * 0.04;
            }else if(exchange === "RUB"){
                return amount * 2.7;
            } else if(exchange === "EUR"){
                return amount * 0.03;
            } else if(exchange === "AUD"){
                return amount * 0.05;
            }


        case "AUD":
            if(exchange === "USD"){
                return amount * 0.75;
            }else if(exchange === "RUB"){
                return amount * 53.48;
            } else if(exchange === "EUR"){
                return amount * 0.65;
            } else if(exchange === "UAN"){
                return amount * 19.77;
            }

        default:
            alert("The currency you enter does not exist!");
            break;
    }
}

do {

    do {
        currency = prompt("Enter currency!", "Example: USD");
    }while (currency !== "USD" && currency !== "RUB" && currency !== "EUR" && currency !== "UAN" && currency !== "AUD");


    do {
        amount = +prompt("Enter amount!", "Example: 150");

    }while (isNaN(amount));


    do {
        exchange = prompt("Enter the currency you want to exchange!", "Example: UAN");
    }while (exchange !== "USD" && exchange !== "RUB" && exchange !== "EUR" && exchange !== "UAN" && exchange !== "AUD");


    alert(`You give ${amount} ${currency}! And receive ${currencyFunc(currency)} ${exchange}`);
    exchangeQuestion = confirm(`Do you want to exchange money again?`);

} while (exchangeQuestion === true);












